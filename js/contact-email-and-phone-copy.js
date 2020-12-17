let contact_email = $("#copy-email");
let contact_phone = $("#copy-phone");
let contact_email_button = $("#contact-email-button");
let contact_phone_button = $("#contact-phone-button");
let contact_email_message = $("#email-copy-message");
let contact_phone_message = $("#phone-copy-message");
contact_email_button.on("click", function (e) {
 $("#copy-email-div").slideDown();
 contact_email.val("contact@speed.com");
 setTimeout(() => {
  contact_email.select();
  document.execCommand("copy");
 }, 500);
 contact_email_message
  .animate(
   {
    bottom: "50px",
   },
   1000,
   function () {
    contact_email_message.animate(
     {
      bottom: "-200px",
     },
     1000,
    );
   },
  )
  .delay(6000);
 contact_phone_message.stop().animate(
  {
   bottom: "-200px",
  },
  500,
 );
});
contact_phone_button.on("click", function (e) {
 $("#copy-phone-div").slideDown();
 contact_phone.val("0982934919");
 setTimeout(() => {
  contact_phone.select();
  document.execCommand("copy");
 }, 500);
 contact_phone_message
  .animate(
   {
    bottom: "50px",
   },
   1000,
   function () {
    contact_phone_message.animate(
     {
      bottom: "-200px",
     },
     1000,
    );
   },
  )
  .delay(6000);
 contact_email_message.stop().animate(
  {
   bottom: "-200px",
  },
  500,
 );
});
contact_email.keydown(function (e) {
 $(this).blur();
});
contact_phone.keydown(function (e) {
 $(this).blur();
});
