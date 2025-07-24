import fs from "fs";
import path from "path";

const logFilePath = "./storage/logs.txt";

// Убедимся, что папка storage существует
if (!fs.existsSync(path.dirname(logFilePath))) {
  fs.mkdirSync(path.dirname(logFilePath), { recursive: true });
}

function formatDate() {
  return new Date().toISOString();
}

// Функция для красивого форматирования аргументов
function formatArgs(args: unknown[]) {
  return args
    .map((arg) => {
      if (typeof arg === "string") return arg;
      try {
        return JSON.stringify(arg, null, 2); // отступ 2 пробела для читаемости
      } catch {
        return String(arg);
      }
    })
    .join(" ");
}

function writeToFile(message: string) {
  fs.appendFile(logFilePath, message + "\n", (err) => {
    if (err) {
      console.error("Ошибка записи в лог файл:", err);
    }
  });
}

export const logger = {
  info: (...args: unknown[]) => {
    const msg = `[${formatDate()}] [INFO]: ${formatArgs(args)}`;
    console.log(msg);
    writeToFile(msg);
  },
  warn: (...args: unknown[]) => {
    const msg = `[${formatDate()}] [WARN]: ${formatArgs(args)}`;
    console.warn(msg);
    writeToFile(msg);
  },
  error: (...args: unknown[]) => {
    const msg = `[${formatDate()}] [ERROR]: ${formatArgs(args)}`;
    console.error(msg);
    writeToFile(msg);
  },
};
