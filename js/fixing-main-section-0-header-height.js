let main_section_0_header = $("#main-section-0-header");
let section_0_minus = mobileCheck() ? 50 : 50;

function resize_main_section_0_header() {
 main_section_0_header.height($(window).height() - nav_bar.height() - section_0_minus + 5);
}
function resize_main_section_0_header_timeout() {
 setTimeout(() => {
  main_section_0_header.height($(window).height() - nav_bar.height() - section_0_minus + 5);
  resize_main_section_0_header();
 }, 500);
}
window.addEventListener("resize", resize_main_section_0_header, false);
window.addEventListener("load", resize_main_section_0_header, false);
