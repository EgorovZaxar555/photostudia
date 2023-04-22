
const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('active')
  menu.classList.toggle('active')


  menu.querySelectorAll('.nav-link').forEach((item) => {
    item.addEventListener('click', function () {
      hamburger.classList.remove('active')
      menu.classList.remove('active')
    })
  })

})



window.onload = function () {
  document.body.classList.add('loaded');
};



$(".gallery-list").magnificPopup({
  delegate: "a",
  type: "image",
  gallery: {
    enabled: true
  }
});



