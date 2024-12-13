$(document).ready(function () {
  $('#up').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 'smooth');
  });
  $('#down').on('click', function () {
    $('html, body').animate({ scrollTop: $(document).height() }, 'smooth');
  });
  $('.popup-btn').on('click', function() {
    var targetPopup = $(this).data('target');  // 버튼에서 data-target 값 가져오기
    $('#' + targetPopup).addClass('show');  // 해당 팝업에 show 클래스 추가
  });

  // 팝업 내 '닫기' 버튼 클릭 시 팝업 닫기
  $('.x-mark').on('click', function() {
    $(this).closest('.pop-up').removeClass('show');  // 해당 팝업 숨기기
  });
});
