
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
