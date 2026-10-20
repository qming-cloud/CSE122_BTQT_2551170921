function digitalImages(number) {
  let tens = Math.floor(number/10);
  let units = number%10;
  return '<img src="Bai13/0' + tens + '.gif" alt ="' + tens + '">' +
         '<img src="Bai13/0' + units + '.gif" alt="' + units + '">';
}

function updateClock() {
  let now = new Date();
  let hour = now.getHours();
  let colon = '<img src="Bai13/haicham.gif" alt =":">';
  document.getElementById('clock').innerHTML = digitalImages(hour) + colon + digitalImages(now.getMinutes()) + colon + digitalImages(now.getSeconds());
  let greeting = 'Chào buổi tối';
  if(hour<11) greeting = "Chào buổi sáng"
  else if(hour<13) greeting = 'Chào buổi trưa';
  else if(hour<18) greeting = 'Chào buổi chiều';
  document.getElementById('greeting').textContent = greeting;
}

updateClock();
