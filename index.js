var qstnELe = document.getElementsByClassName("qstn-arrow");

Array.from(qstnELe).forEach((v) =>
  v.addEventListener("click", function () {
    this.parentElement
      .getElementsByClassName("ansr")[0]
      .classList.toggle("ansr-toggle");
    this.parentElement
      .getElementsByClassName("qstn")[0]
      .classList.toggle("qstn-toggle");
    this.parentElement
      .getElementsByClassName("arrow")[0]
      .classList.toggle("arrow-toggle");
  })
);
