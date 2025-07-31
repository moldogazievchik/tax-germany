const steps = [
  {
    title: '1. Отправляешь документы',
    text: 'Мы принимаем всё онлайн — достаточно фото паспорта, контракта и справок.',
    image: '/assets/step1.png',
  },
  {
    title: '2. Мы подаём декларацию',
    text: 'Готовим и подаём документы в налоговую Германии без твоего участия.',
    image: '/assets/step2.png',
  },
  {
    title: '3. Ты получаешь деньги 💸',
    text: 'Возврат приходит на указанный счёт. До 1000€ в течение 8–12 недель.',
    image: '/assets/step3.png',
  },
];

function Steps() {
  return (
    <section className="bg-white py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Как это работает
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <img src={step.image} alt={step.title} className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Steps;