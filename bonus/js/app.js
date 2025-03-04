
const lampOn = document.getElementById('light-on');
const lampOff = document.getElementById('light-off');
const button = document.getElementById('on-off-btn');


button.addEventListener('click', function () {
  if (lampOff.className === '') {
    lampOff.className = 'hidden';
    lampOn.className = '';
  } else {
    lampOff.className = '';
    lampOn.className = 'hidden';
  }
});

console.log(lampOff.classList);
console.log(lampOn.classList);