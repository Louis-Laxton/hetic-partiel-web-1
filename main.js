var headerContainer = document.querySelector('#headerContainer');

document.addEventListener('wheel', function(event) {
  if (event.deltaY > 0) {
    headerContainer.style.marginTop = "-170px";
  } else if (event.deltaY < 0) {
    headerContainer.style.marginTop = "0px";
  }

});

var maiNavList = document.querySelector('#mainav ul');
var burgerMenu = document.querySelector('#burgerMenu');

burgerMenu.addEventListener('click', function() {
  if (maiNavList.style.display === "none") {
    maiNavList.style.display = "block";
  } else {
    maiNavList.style.display = "none";
  }
});