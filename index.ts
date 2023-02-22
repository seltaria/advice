window.addEventListener('DOMContentLoaded', () => {

  const adviceNumber = document.querySelector<HTMLHeadingElement>('.advice');
  const adviceText = document.querySelector<HTMLParagraphElement>('.text');
  const button = document.querySelector<HTMLButtonElement>('.button');

  async function getAdvice() {
    return fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
  }

  type Data = {
    slip: Slip;
  }

  type Slip = {
    advice: string;
    id: number;
  }

  button!.addEventListener('click', async () => {
    const data: Data = await getAdvice();
    adviceNumber!.textContent = `ADVICE #${data.slip.id}`;
    adviceText!.textContent = data.slip.advice;
  })
})