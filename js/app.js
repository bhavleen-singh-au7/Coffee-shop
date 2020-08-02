$(document).ready(function () {
  $('.modal').modal();
  $('.parallax').parallax();
  $('.sidenav').sidenav();
  $('.slider').slider({ full_width: true });
  $('.parallax').parallax();
  $('.myreviews').carousel({
    // how many pics u want to see
    numVisible: 7,
    // lie between 0 - 100
    shift: 55,
    padding: 55
  })
});

function toggleModal() {
  var instance = M.Modal.getInstance($('#modal3'));
  instance.open();
}