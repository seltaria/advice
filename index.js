window.addEventListener('DOMContentLoaded', () => {

  const adviceNumber = document.querySelector('.advice');
  const adviceText = document.querySelector('.text');
  const button = document.querySelector('.button');

  async function getAdvice() {
    return fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
  }

  button.addEventListener('click', async () => {
    const data = await getAdvice();
    adviceNumber.textContent = `ADVICE #${data.slip.id}`;
    adviceText.textContent = data.slip.advice;
  })
})