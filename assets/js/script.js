document.addEventListener("DOMContentLoaded", function () {
  fetch("components/header.html")
    .then((response) => response.text())
    .then(
      (data) => (document.getElementById("header-placeholder").innerHTML = data)
    );

  fetch("components/footer.html")
    .then((response) => response.text())
    .then(
      (data) => (document.getElementById("footer-placeholder").innerHTML = data)
    );
});

document.addEventListener("DOMContentLoaded", function () {
  // Load header trước
  fetch("components/header.html")
      .then((response) => response.text())
      .then((data) => {
          document.getElementById("header-placeholder").innerHTML = data;

          // Sau khi header được tải, mới chạy script active link
          setActiveLink();
      });
});

function setActiveLink() {
  let currentPath = window.location.pathname.split("/").pop();
  if (currentPath === "" || currentPath === "index.html") {
      currentPath = "index.html";
  }

  console.log("Current path:", currentPath);

  // Duyệt qua tất cả các thẻ <a> trong nav
  document.querySelectorAll("nav a").forEach(link => {
      console.log("Link href:", link.getAttribute("href"));
      if (link.getAttribute("href") === currentPath) {
          link.classList.add("active");
      }
  });
}
