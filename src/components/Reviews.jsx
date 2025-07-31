const reviews = [
  {
    name: "Алия, Бишкек",
    avatar: "./assets/avatar1.png",
    amount: 840,
    text: "Я думала, это невозможно… но мне реально вернули 840€. Всего за пару недель. Спасибо большое команде!",
  },
  {
    name: "Эмир, Ош",
    avatar: "/assets/avatar2.png",
    amount: 765,
    text: "Отправил документы и просто ждал. Никакой головной боли. Деньги пришли напрямую на карту. Очень удобно!",
  },
  {
    name: "Диана, Берлин",
    avatar: "/Users/aktan/Documents/tax-germany/src/assets/avatar3.JPG",
    amount: 920,
    text: "Сама бы не разобралась с немецкой налоговой. Эти ребята помогли на каждом этапе и всё объясняли.",
  },
];

function Reviews() {
  return (
    <section className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">Отзывы наших клиентов</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl shadow-md p-6 w-full max-w-sm"
          >
            <img
              src={review.avatar}
              alt={review.name}
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-700">{review.name}</h3>
            <p className="text-sm text-gray-500 mb-2">Возврат: {review.amount} €</p>
            <p className="text-gray-600 italic">“{review.text}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;