const navbar = document.getElementById("navbar");
const designElement24 = document.querySelector(".design-element-24");
const designElement62 = document.querySelector(".design-element-62");
const designElementcirclegroup = document.querySelector(
  ".design-element-circle-group"
);

window.addEventListener("scroll", () => {
  // Scrollbar style change on scrollY > 120
  if (window.scrollY > 120) {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    navbar.style.backdropFilter = "blur(4px)";
    navbar.style.marginTop = 0;
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.marginTop = "38px";
    navbar.style.backdropFilter = "none";
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0)";
    navbar.style.boxShadow = "none";
  }

  designElement24.style.transform = `translateY(-${window.scrollY * 0.5}px)`;
  designElementcirclegroup.style.transform = `translateY(${
    window.scrollY * 0.3
  }px)`;
  designElement62.style.transform = `translateY(${window.scrollY * 0.65}px)`;

  // Append animation on view
  onAppear.forEach(function (elem) {
    var vwTop = window.scrollY;
    var vwBottom = window.scrollY + window.innerHeight;
    var elemTop = elem.offsetTop;
    var elemHeight = elem.offsetHeight;

    if (vwBottom > elemTop && vwTop - elemHeight < elemTop) {
      elem.classList.add("visible");
    }
  });
});
