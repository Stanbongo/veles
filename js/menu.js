$(document).ready(function() {
  $(".navigation__button-open").click(function() {
    $(this).addClass("navigation__button-open--hide");
    $(this).removeClass("navigation__button-open");
    $(".navigation__menu-container").addClass("navigation__menu-container--visible");
    $(".navigation__menu-container").removeClass("navigation__menu-container");
  });

  $(".navigation__button-close").click(function() {
    $(".navigation__button-open--hide").addClass("navigation__button-open");
    $(".navigation__button-open--hide").removeClass("navigation__button-open--hide");
    $(".navigation__menu-container--visible").addClass("navigation__menu-container");
    $(".navigation__menu-container--visible").removeClass("navigation__menu-container--visible");
  });
})
