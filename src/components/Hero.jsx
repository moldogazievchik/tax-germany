import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <img src="/assets/logo.png" alt="Tax Refund" className="hero-logo" />
      <h1 className="hero-title">
        Вернём твои налоги из Германии 💶
      </h1>
      <p className="hero-subtitle">
        Если ты работал в Германии по программе фериенджоб — ты можешь вернуть до 1000€! Всё официально и безопасно.
      </p>
      <a href="#contact" className="hero-button">
        Оформить возврат
      </a>
    </section>
  );
}

export default Hero;