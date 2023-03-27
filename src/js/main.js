const categories = [
  { name: "Puzzles", slug: "puzzles" },
  { name: "Adventure", slug: "adventure" },
  { name: "Classics", slug: "classics" },
  { name: "Arcade", slug: "arcade" },
  { name: "Junior", slug: "junior" },
  { name: "Board", slug: "board" },
  { name: "Sports", slug: "sports" },
  { name: "Strategy", slug: "strategy" },
];

window.onload = function () {
  console.log(`hello world`);
  const menuBtn = document.querySelector(".menu-btn");
  const menuContent = document.querySelector(".menu-content");
  function handleMenuClick() {
    console.log("menuBtn clicked");
    menuContent.classList.contains("hidden")
      ? menuContent.classList.remove("hidden")
      : menuContent.classList.add("hidden");
  }
  menuBtn.addEventListener("click", handleMenuClick);
};
