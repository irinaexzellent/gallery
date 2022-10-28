const gallary = document.querySelector('.gallary');

fetch('./images.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    showImages(data);
  });

function showImages(data){
  for(let i = 0; i< data.length; i++){
    const a = document.createElement('a');
    a.href = './images/' + data[i];
    a.setAttribute('download', 'download');
    const img = document.createElement('img');
    img.src = './images/min_' + data[i];
    img.setAttribute('loading', 'lazy');
    a.append(img);
    gallary.append(a);
  }
}

document.querySelector('.themetoggle').addEventListener('click', (event) => {
  event.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  }
  else {
    localStorage.setItem('theme', 'dark')
  }
  addDarkClassToHTML()
});

function addDarkClassToHTML() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('html').classList.add('dark');
      document.querySelector('.themetoggle span').textContent = 'dark_mode';
    }
    else {
      document.querySelector('html').classList.remove('dark');
      document.querySelector('.themetoggle span').textContent = 'wb_sunny';
    }
  } catch (err) { }
}

addDarkClassToHTML();


let fullHeight, innerHeight;
const progressBar = document.querySelector('.progressbar>.progressbar-line');

window.addEventListener('scroll', fillProgressLine);
window.addEventListener('resize', fillProgressLine);

function fillProgressLine() {
    fullHeight = document.body.scrollHeight;
    innerHeight = window.innerHeight;
    progressBar.style.width = (pageYOffset * 100 / (fullHeight - innerHeight)) + '%';
}

fillProgressLine();


function addLeadingZero(d) {
  return (d < 10) ? '0' + d : d;
}

const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Cуббота'];

function getUserTime(t = new Date()) {
  let Y = t.getFullYear();
  let M = addLeadingZero(t.getMonth() + 1);
  // if (M < 10) M = '0' + M;
  let D = addLeadingZero(t.getDate());
  let d = days[t.getDay()];
  let h = addLeadingZero(t.getHours());
  let m = addLeadingZero(t.getMinutes());

  console.log(Y, M, D, d, h, m);
  return `${Y}.${M}.${D} ${h}:${m} (${d})`
}


function clock(){
  var date = new Date(),
         hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
         minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
         seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
  document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
}
setInterval(clock, 1000);
clock();


