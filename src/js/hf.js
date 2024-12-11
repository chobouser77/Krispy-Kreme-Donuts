$(document).ready(function () {
  $('#up').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 'smooth');
  });
  $('#down').on('click', function () {
    $('html, body').animate({ scrollTop: $(document).height() }, 'smooth');
  });
});
