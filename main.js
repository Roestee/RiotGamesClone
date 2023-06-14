window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navBar");
  const searchBox = this.document.getElementById("searchBox");
  const scrolled = window.scrollY > 0;
  navbar.classList.toggle("scrolled", scrolled);
  searchBox.classList.toggle("searchScrolled", scrolled);
});
