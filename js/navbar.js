document.addEventListener('DOMContentLoaded', function() {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if(currentScrollPos <= 0){
       document.querySelector('.navbar').classList.remove('hidden');
       return;
    }
    if (prevScrollpos > currentScrollPos) {
      console.log('show',window.pageYOffset);
      document.querySelector('.navbar').classList.remove('hidden');
    } else {
      console.log('hidden',window.pageYOffset);
      document.querySelector('.navbar').classList.add('hidden');
    }
    prevScrollpos = currentScrollPos;
  }
});