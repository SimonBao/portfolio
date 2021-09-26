import $ from "jquery";

export const aboutResize = () => {
  $(window).on("resize", function () {
    if ($(window).width() > 768) {
      $("#progress_bar__container").removeClass("col-9");
      $("#introduction__container").removeClass(
        "flex-column align-items-center"
      );
      $("#introduction").removeClass("col-10");
      $("#about__card").removeClass("col-12");
      $("#about_avatar__container").addClass("col-4");
    } else {
      $("#introduction__container").addClass("flex-column align-items-center");
      $("#about__card").addClass("col-12");
      $("#progress_bar__container").addClass("col-9");
      $("#introduction").addClass("col-10");
      $("#introduction__container").removeClass("flex-row");
      $("#about_avatar__container").removeClass("col-4");
    }
  });
};

export const parralax = () => {
  document.addEventListener("mousemove", parallax);
  function parallax(e) {
//     this.querySelectorAll(".layer").forEach((layer) => {
//       const speed = layer.getAttribute("data-speed");
// 
//       const x = (window.innerWidth - e.pageX * speed) / 100;
//       const y = (window.innerHeight - e.pageY * speed) / 100;
// 
//       layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
//     });

    const home = document.querySelector("#home");

    home.addEventListener("mousemove", (e) => {
      home.style.backgroundPositionX = -e.pageX + "px";
      home.style.backgroundPositionY = -e.pageY + "px";
    });
  }
};
