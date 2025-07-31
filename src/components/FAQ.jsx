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
    <section className="bg-gray-100 py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Частые вопросы</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;