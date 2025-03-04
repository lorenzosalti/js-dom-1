
const lampOn = document.getElementById('light-on');
const lampOff = document.getElementById('light-off');
const button = document.getElementById('on-off-btn');


button.addEventListener('click', function () {
  lampOff.className = 'hidden';
  lampOn.className = '';
});