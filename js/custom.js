// Gallery BaguetteBox script
baguetteBox.run(".gallery");

// Btn Navbar Menu
$(document).ready(function () {
  
    let cheched = false;
  
  $(".menu-btn").on("click", function () {
    if (cheched) {
      $(".logo-img").css("margin", "");
      cheched = false;
    } else {
      $(".logo-img").css("margin", "auto");
      cheched = true;
    }
  });

  // Btn Active navbar
  $('.nav-link').click(function() {
    $(".nav-link").removeClass('active');
    $(this).addClass('active');
});
});
