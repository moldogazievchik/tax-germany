import "../styles/Steps.css";

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
    <section className="steps-section">
      <h2 className="steps-title">Как это работает</h2>
      <div className="steps-grid">
        {steps.map((step, index) => (
          <div key={index} className="step-item">
            <img src={step.image} alt={step.title} className="step-image" />
            <h3 className="step-heading">{step.title}</h3>
            <p className="step-text">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Steps;