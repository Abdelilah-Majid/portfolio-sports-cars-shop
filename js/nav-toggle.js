let nav_menu = $("#nav-menu");
let nav_1 = $("#nav-1");
let nav_1_toggeled = true;
nav_menu.click(function (e) {
 if (!nav_1_toggeled) {
  nav_1.animate(
   {
    right: "-61.804697157%",
   },
   500,
  );
 } else {
  nav_1.animate(
   {
    right: "-3px",
   },
   500,
  );
 }
 nav_1_toggeled = !nav_1_toggeled;
});
