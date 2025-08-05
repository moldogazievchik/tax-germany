import "../styles/Reviews.css";

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
    <section className="reviews-section">
      <h2 className="reviews-title">Отзывы наших клиентов</h2>
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-item">
            <img
              src={review.avatar}
              alt={review.name}
              className="review-avatar"
            />
            <h3 className="review-name">{review.name}</h3>
            <p className="review-amount">Возврат: {review.amount} €</p>
            <p className="review-text">“{review.text}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
