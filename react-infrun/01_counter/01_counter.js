const $number = document.querySelector('#number');
const $increase = document.querySelector('#increase');
const $decrease = document.querySelector('#decrease');

$increase.onclick = () => {
  let current = parseInt($number.textContent, 10);
  $number.textContent = current + 1;
};

$decrease.onclick = () => {
  let current = parseInt($number.textContent, 10);
  $number.textContent = current - 1;
};