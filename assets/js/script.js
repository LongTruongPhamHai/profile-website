// LOAD HEADER & FOOTER

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

// ACTIVE TAB

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

  // console.log("Current path:", currentPath);

  // Duyệt qua tất cả các thẻ <a> trong nav
  document.querySelectorAll("nav a").forEach((link) => {
    // console.log("Link href:", link.getAttribute("href"));
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
}

// PROJECTS

// GPT
function openProject(id) {
  document.getElementById("none-project").style.display = "none";
  document.getElementById("project-demo").style.display = "block";

  for (let i = 1; i <= 3; i++) {
    document.getElementById("image-project" + i).style.display = "none";
    document.getElementById("link-project" + i).style.display = "none";
    document.getElementById("project-button" + i).style.backgroundColor =
      "var(--medium-dark-blue)";
  }

  document.getElementById("image-project" + id).style.display = "block";
  document.getElementById("link-project" + id).style.display = "block";
  document.getElementById("project-button" + id).style.backgroundColor =
    "var(--active-blue)";
}

function closeProject() {
  document.getElementById("none-project").style.display = "block";
  document.getElementById("project-demo").style.display = "none";
  document.getElementById("other-project").style.backgroundColor =
    "var(--medium-dark-blue)";
  document.getElementById("other-project").style.transform =
    "none";
  for (let i = 1; i <= 3; i++) {
    document.getElementById("image-project" + i).style.display = "none";
    document.getElementById("link-project" + i).style.display = "none";
    document.getElementById("project-button" + i).style.backgroundColor =
      "var(--medium-dark-blue)";
  }
}

// CONTACT

function showPhoneNum() {
  alert("Phone number: +84 862 091 004");
}

function resetButton() {
  document.getElementById("email-input").value = "";
  document.getElementById("title-input").value = "";
  document.getElementById("content-input").value = "";
}

function sendButton() {
  let emailValue = document.getElementById("email-input").value;
  let titleValue = document.getElementById("title-input").value;
  let contentValue = document.getElementById("content-input").value;

  const regexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  // GPT
  let errors = []; // FIXED: Dùng mảng thay vì nhiều alert

  document.getElementById("email-input").style.border =
    "1px solid var(--border-color)";
  document.getElementById("content-input").style.border =
    "1px solid var(--border-color)";

  if (!regexEmail.test(emailValue)) {
    document.getElementById("email-input").style.border = "3px solid red";
    errors.push("Invalid email! Please re-enter your email!");
  }

  if (contentValue.trim() === "") {
    document.getElementById("content-input").style.border = "3px solid red";
    errors.push("Invalid content! Please check the content again!");
  }

  if (errors.length > 0) {
    alert(errors.join("\n")); // FIXED: Gộp tất cả lỗi vào một alert
    return;
  }

  if (
    titleValue.trim() === "" &&
    !confirm("You haven't entered a title! Do you want to continue?")
  ) {
    return;
  }

  document.getElementById("form-alert").style.display = "block";
  document.getElementById("opacity-form").style.display = "block";

  document.getElementById("email-from").value = emailValue;
  document.getElementById("title-output").value = titleValue;
  document.getElementById("content-output").value = contentValue;

  // FIXED: Reset form sau khi gửi
  // resetButton();
}

function closeAlert() {
  document.getElementById("form-alert").style.display = "none";
  document.getElementById("opacity-form").style.display = "none";
}
