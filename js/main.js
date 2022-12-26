
window.onload = function(e){ 
  let subMenu = document.getElementById('subMenu')
  let fullPageMenu = document.getElementById('fullPageMenu')
  subMenu.addEventListener('click', function () {
    if (subMenu.className === 'menuClicked') {
      subMenu.className = ""
      setTimeout(function () { fullPageMenu.className = "visually-hidden" }, 200)
    } else {
      subMenu.className = 'menuClicked'
      fullPageMenu.className = "slideRight"
    }
  })
  
}


$('.togglePassword').click( function (e) {
  // toggle the type attribute
  let inputPassword = $(e.target).closest(".input-box").find(".id_password")
  const type = inputPassword.attr("type") === 'password' ? 'text' : 'password';
  inputPassword.attr("type", type)
  e.target.classList.toggle('fa-eye');
});

$(".owl-carousel.owl-categories").owlCarousel({
  loop: true,
  margin: 25,
  nav: true,
rtl:true,
  autoplayTimeout: 2000,
  autoplay: true,
  autoplayHoverPause: true,
  nav: true,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 6,
    },
    1000: {
      items: 9,
    },
  },
});

