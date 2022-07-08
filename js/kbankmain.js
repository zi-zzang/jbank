$(function () {
  $('.main>li').hover(
    function () {
      $(this).find('.sub').stop().slideDown();
    },
    function () {
      $(this).find('.sub').stop().slideUp(100);
    }
  );
  //검색창 내에 탭메뉴
  $('.tabmenu>li>a').click(function () {
    $('.tabmenu>li>a').removeClass('active');
    $(this).addClass('active');
    $('.tabmenu>li>div').hide();
    $(this).next('div').show();
  });
  $('.btn_search').click(function () {
    $('.search_box').show();
  });

  $('.inbox>button').click(function () {
    $('.search_box').hide();
  });
});
