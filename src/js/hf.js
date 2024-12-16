$(document).ready(function () {
  $('#up').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 'smooth');
  });
  $('#down').on('click', function () {
    $('html, body').animate({ scrollTop: $(document).height() }, 'smooth');
  });
  $(".search").click(function() {
    $(".search-area").toggleClass('show');
  });
  $(".search-bt").click(function() {
    const query = $("#search-input").val().trim(); // 입력값을 가져옵니다.

    if (query) {
      // window.location.href = `/search?q=${encodeURIComponent(query)}`;
      alert("미구현 입니다.");
    } else {      
      alert("검색어를 입력해주세요.");
    }
  });

  $('.popup-btn').on('click', function() {
    var targetPopup = $(this).data('target');  // 버튼에서 data-target 값 가져오기
    $('#' + targetPopup).addClass('show');  // 해당 팝업에 show 클래스 추가
  });
  $('.x-mark').on('click', function() {
    $(this).closest('.pop-up').removeClass('show');  // 해당 팝업 숨기기
  });
});
