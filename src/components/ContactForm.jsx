// ContactForm.jsx (обновлённый с обычным CSS)
import { useState } from "react";
import "../styles/ContactForm.css";

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
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Оставить заявку</h2>
      <p className="contact-description">
        Напиши нам — и мы поможем вернуть твои налоги без лишних стрессов.
        Ответим в Telegram или WhatsApp.
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Имя"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Telegram или WhatsApp"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Сообщение (необязательно)"
          value={formData.message}
          onChange={handleChange}
          rows={4}
        ></textarea>
        <button type="submit">Отправить</button>
      </form>

      {submitted && (
        <p className="contact-success">
          Спасибо! Мы скоро свяжемся с тобой ✌️
        </p>
      )}
    </section>
  );
}

export default ContactForm;
