"use client";
type FormData = {
  name: string;
  phone: string;
};

export const BotService = {
  createAndSendRequest: async (formData: FormData) => {
    try {
      const res = await fetch(
        `${
          process.env.NODE_ENV === "production"
            ? process.env.NEXT_PUBLIC_BOT_API_URL_PROD
            : process.env.NEXT_PUBLIC_BOT_API_URL_DEV
        }/application`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            full_name: formData.name,
            phone: formData.phone,
            application_type: "Заявка",
          }),
        }
      );

      if (!res.ok) throw new Error("Ошибка при отправке формы");
    } catch (error) {
      console.error(error);
      throw new Error(
        "Произошла ошибка при отправке формы. Попробуйте еще раз."
      );
    }
  },
};
