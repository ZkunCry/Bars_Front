import { useEffect, useRef } from "react";
function useLatest<Value>(value: Value) {
  const valueRef = useRef(value);

  valueRef.current = value;

  return valueRef;
}
type GetWindowEvent<Type extends string> = Type extends keyof WindowEventMap
  ? WindowEventMap[Type]
  : Event;
function useWindowEvent<Type extends string>(
  type: Type,
  cb: (event: GetWindowEvent<Type>) => void
): void;
function useWindowEvent(type: string, cb: (event: Event) => void) {
  const latestCb = useLatest(cb);

  useEffect(() => {
    const handler = (event: Event) => {
      latestCb.current(event);
    };

    window.addEventListener(type, handler);

    return () => window.removeEventListener(type, handler);
  }, [type, latestCb]);
}
export { useWindowEvent, useLatest };
