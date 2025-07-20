"use client";
import { useState } from "react";

export const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    agree: false,
    loading: false,
    submitted: false,
    error: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setFormState((prev) => ({
      ...prev,
      loading: true,
      error: "",
    }));

    if (!formState.agree) {
      setFormState((prev) => ({
        ...prev,
        loading: false,
        error: "Вы должны согласиться на обработку данных.",
      }));
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BOT_API_URL}/application`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            full_name: formState.name,
            phone: formState.phone,
            application_type: "Заявка",
          }),
        }
      );

      if (!res.ok) throw new Error("Ошибка при отправке формы");

      setFormState({
        name: "",
        phone: "",
        agree: false,
        loading: false,
        submitted: true,
        error: "",
      });
    } catch (err: any) {
      setFormState((prev) => ({
        ...prev,
        loading: false,
        error: err.message || "Что-то пошло не так.",
      }));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-[2.5rem] flex flex-col gap-4 max-w-xl w-full items-start"
    >
      <div className="space-y-1">
        <label className="block font-medium">Имя</label>
        <input
          type="text"
          name="name"
          className="w-full border border-gray-300 px-4 py-2 rounded-md"
          placeholder="Введите ваше имя"
          value={formState.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-1">
        <label className="block font-medium">Телефон</label>
        <input
          type="tel"
          name="phone"
          className="w-full border border-gray-300 px-4 py-2 rounded-md"
          placeholder="+7 (000) 000-00-00"
          value={formState.phone}
          onChange={handleChange}
          required
        />
      </div>

      <label className="flex items-start gap-2 text-sm">
        <input
          type="checkbox"
          name="agree"
          checked={formState.agree}
          onChange={handleChange}
          className="mt-1"
        />
        Согласен на обработку персональных данных
      </label>

      {formState.error && (
        <p className="text-red-500 text-sm">{formState.error}</p>
      )}
      {formState.submitted && (
        <p className="text-green-600 font-medium">Заявка успешно отправлена!</p>
      )}

      <button
        type="submit"
        disabled={formState.loading}
        className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition disabled:opacity-50 cursor-pointer"
      >
        {formState.loading ? "Отправка..." : "Оставить заявку"}
      </button>
    </form>
  );
};
