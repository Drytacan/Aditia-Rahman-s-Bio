// Navbar blur saat scroll
window.addEventListener("scroll", () => {
	const nav = document.querySelector(".navbar");
	if (window.scrollY > 50) {
		nav.classList.add("scrolled");
	} else {
		nav.classList.remove("scrolled");
	}
});

// Efek fade saat di-scroll
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
	for (let r of reveals) {
		let top = r.getBoundingClientRect().top;
		if (top < window.innerHeight - 100) {
			r.classList.add("visible");
		}
	}
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Menu toggle mobile
const menuBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
	menu.classList.toggle("show");
});
