const navbar = document.querySelector(".navbar");
const mobileNavbar = document.querySelector(".navbar__mobile");
const button = document.querySelector(".burguer");
const hidden = document.querySelector(".hide");
const dots = document.querySelector(".pontos");
const hideBtn = document.querySelector(".ler__mais")

button.addEventListener("click", function() {

	mobileNavbar.classList.toggle("active");

})

window.addEventListener("scroll", function() {

	(window.pageYOffset > 0) ? navbar.classList.add("active") : navbar.classList.remove("active");

})

hideBtn.addEventListener("click", function() {

	(hidden.classList.contains("hide")) ? hidden.classList.remove("hide") : hidden.classList.add("hide");
	(hidden.classList.contains("hide")) ? hideBtn.innerHTML = "Ler Mais" : hideBtn.innerHTML = "Ler Menos"

})
