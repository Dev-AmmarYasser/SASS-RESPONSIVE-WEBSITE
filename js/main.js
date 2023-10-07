// Handle Burger Icon In Header

let burgerIcon = document.querySelector(".burger-icon");

burgerIcon.onclick = function () {
  document.querySelector(".navbar").classList.toggle("burgered");
};

// Handle Auto Year Update In Footer

let currentYear = new Date().getFullYear();

document.querySelector(".year").innerHTML = currentYear;
