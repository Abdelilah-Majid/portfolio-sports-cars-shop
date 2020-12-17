let main_header = $("#main-header");
let nav_bar = $("#nav-0");
let main_header_buttons = $("#main-header-buttons");
let drop_down = $("#drop-down");
let header_minus = mobileCheck() ? 100 : 200;
if ($(window).height() < $(window).width()) {
 header_minus = mobileCheck() ? 50 : 200;
}
function resize_main_header() {
 main_header.height($(window).height() - nav_bar.height() - header_minus + 3);
 drop_down.css({
  "margin-top": $(window).height() - (main_header_buttons.offset().top + main_header_buttons.height()) - drop_down.height() + 5,
 });
 // console.log(drop_down.css("margin-top"), "window", $(window).height(), "buttons offset", main_header_buttons.offset().top, "buttons height", main_header_buttons.height(), "drop height", drop_down.height());
}

function resize_main_header_timeout() {
 setTimeout(function () {
  main_header.height($(window).height() - nav_bar.height() - header_minus + 3);
  drop_down.css({
   "margin-top": $(window).height() - (main_header_buttons.offset().top + main_header_buttons.height()) - drop_down.height() + 5,
  });
  resize_main_header_timeout();
  // console.log(drop_down.css("margin-top"), "window", $(window).height(), "buttons offset", main_header_buttons.offset().top, "buttons height", main_header_buttons.height(), "drop height", drop_down.height());
 }, 500);
}
resize_main_header_timeout();
window.addEventListener("resize", resize_main_header, false);
window.addEventListener("load", resize_main_header, false);

// ==========================================================================
