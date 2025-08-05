import "../styles/FAQ.css";

const faqs = [
  {
    question: "Кто может вернуть налоги?",
    answer: "Любой, кто официально работал в Германии (например, по программе Ferienjob) и платил подоходный налог.",
  },
  {
    question: "Сколько времени занимает возврат?",
    answer: "Обычно от 8 до 12 недель после подачи декларации. Всё зависит от налоговой Германии.",
  },
  {
    question: "Какие документы нужны?",
    answer: "Копия паспорта, справка Lohnsteuerbescheinigung (или контракт), и иногда — Steuer ID.",
  },
  {
    question: "Это законно?",
    answer: "Абсолютно. Мы не делаем ничего противозаконного — только помогаем с оформлением налоговой декларации.",
  },
];

function FAQ() {
  return (
    <section className="faq-section">
      <h2 className="faq-title">Частые вопросы</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3 className="faq-question">{faq.question}</h3>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
