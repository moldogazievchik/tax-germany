import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Форма отправлена:", formData);
    setSubmitted(true);

    // Тут ты можешь подключить Telegram Bot API, email отправку и т.д.
  };

  return (
    <section id="contact" className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Оставить заявку</h2>
      <p className="text-gray-600 mb-8 max-w-xl mx-auto">
        Напиши нам — и мы поможем вернуть твои налоги без лишних стрессов. Ответим в Telegram или WhatsApp.
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-gray-50 p-6 rounded-xl shadow space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Имя"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <input
          type="text"
          name="contact"
          placeholder="Telegram или WhatsApp"
          value={formData.contact}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <textarea
          name="message"
          placeholder="Сообщение (необязательно)"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl w-full transition"
        >
          Отправить
        </button>
      </form>

      {submitted && (
        <p className="text-green-600 font-semibold mt-6">
          Спасибо! Мы скоро свяжемся с тобой ✌️
        </p>
      )}
    </section>
  );
}

export default ContactForm;