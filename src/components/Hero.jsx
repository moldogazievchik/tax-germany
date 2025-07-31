function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-100 to-blue-300 text-center py-20 px-4">
      <img src="/assets/logo.png" alt="Tax Refund" className="mx-auto w-24 mb-4" />
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
        Вернём твои налоги из Германии 💶
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
        Если ты работал в Германии по программе фериенджоб — ты можешь вернуть до 1000€! Всё официально и безопасно.
      </p>
      <a href="#contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition">
        Оформить возврат
      </a>
    </section>
  );
}

export default Hero;