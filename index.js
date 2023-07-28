function handleScroll() {
  let scrollValue = window.scrollY;
  let nav = document.querySelector(".nav-bar");
  let btn = document.querySelector(".btn");
  if (scrollValue > 350) {
    nav.classList.add("scrolled");
    btn.classList.add("btn-scrolled");
  } else {
    nav.classList.remove("scrolled");
    btn.classList.remove("btn-scrolled");
  }
}

window.addEventListener("scroll", handleScroll);
