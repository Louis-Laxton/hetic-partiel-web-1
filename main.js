var headerContainer = document.querySelector('#headerContainer');

document.addEventListener('wheel', function(event) {
  if (event.deltaY > 0) {
    headerContainer.style.marginTop = "-170px";
  } else if (event.deltaY < 0) {
    headerContainer.style.marginTop = "-52px";
  }
});