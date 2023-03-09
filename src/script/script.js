export default function () {
   const adviceNum = document.querySelector('.card__advice-num span');
   const qoute = document.querySelector('.card__quote span');
   const dice = document.querySelector('.card__dice');

   const getNewAdvice = () => {
      fetch('https://api.adviceslip.com/advice', { cache: 'no-cache' })
         .then((res) => res.json())
         .then((data) => {
            adviceNum.textContent = data.slip.id;
            qoute.textContent = data.slip.advice;
         });
   };

   getNewAdvice();

   dice.addEventListener('click', getNewAdvice);
}
