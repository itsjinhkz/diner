function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

// back-to-top
var btn = $("#back-to-top");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// group color change
function orangeColor() {
  document.querySelectorAll(".group__part").style.backgroundColor = "#ff6600";
}

function whiteColor() {
  document.querySelectorAll(".group__part").style.backgroundColor = "#f9f8ff";
}
