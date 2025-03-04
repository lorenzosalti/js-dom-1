
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

  if (button.innerText.includes('ACCENDI')) {
    button.innerText = 'SPEGNI';
  } else {
    button.innerText = 'ACCENDI';
  }
});