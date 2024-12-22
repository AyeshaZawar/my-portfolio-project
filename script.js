const video = document.getElementById('background-video');
window.addEventListener('resize', () => {
    video.width = window.innerWidth;
    video.height = window.innerHeight;
});

document.querySelector('.close').style.display = 'none';

document.querySelector('.icons').addEventListener('click', () => {
  document.querySelector('.side-bar').classList.toggle('side-barGo');
  if(document.querySelector('.side-bar').classList.contains('side-barGo')){
    document.querySelector('.open').style.display = 'inline';
    document.querySelector('.close').style.display = 'none';
  }
  else{
      document.querySelector('.open').style.display = 'none';
      setTimeout(() =>{

          document.querySelector('.close').style.display = 'inline';
        }, 300);
  }

})
