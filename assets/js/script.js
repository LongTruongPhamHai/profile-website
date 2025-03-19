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

function openProject1() {
  document.getElementById("none-project").style.display = "none";
  document.getElementById("project-demo").style.display = "block";
  document.getElementById("image-project1").style.display = "block";
  document.getElementById("link-project1").style.display = "block";
  document.getElementById("image-project2").style.display = "none";
  document.getElementById("link-project2").style.display = "none";
  document.getElementById("image-project3").style.display = "none";
  document.getElementById("link-project3").style.display = "none";
}

function openProject2() {
  document.getElementById("none-project").style.display = "none";
  document.getElementById("project-demo").style.display = "block";
  document.getElementById("image-project1").style.display = "none";
  document.getElementById("link-project1").style.display = "none";
  document.getElementById("image-project2").style.display = "block";
  document.getElementById("link-project2").style.display = "block";
  document.getElementById("image-project3").style.display = "none";
  document.getElementById("link-project3").style.display = "none";
}

function openProject3() {
  document.getElementById("none-project").style.display = "none";
  document.getElementById("project-demo").style.display = "block";
  document.getElementById("image-project1").style.display = "none";
  document.getElementById("link-project1").style.display = "none";
  document.getElementById("image-project2").style.display = "none";
  document.getElementById("link-project2").style.display = "none";
  document.getElementById("image-project3").style.display = "block";
  document.getElementById("link-project3").style.display = "block";
}

function closeProject() {
  document.getElementById("none-project").style.display = "block";
  document.getElementById("project-demo").style.display = "none";
  document.getElementById("image-project1").style.display = "none";
  document.getElementById("link-project1").style.display = "none";
  document.getElementById("image-project2").style.display = "none";
  document.getElementById("link-project2").style.display = "none";
  document.getElementById("image-project3").style.display = "none";
  document.getElementById("link-project3").style.display = "none";
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

  let checkEmail = regexEmail.test(emailValue);
  let checkTitle = titleValue != "";
  let checkContent = contentValue != "";
  // console.log(checkEmail);
  // console.log(checkContent);

  document.getElementById("email-input").style.border =
    "1px solid var(--border-color)";
  document.getElementById("content-input").style.border =
    "1px solid var(--border-color)";

  if (checkEmail == false) {
    document.getElementById("email-input").style.border = "3px solid red";
    alert("Invalid email! Please re-enter your email!");
  }

  if (checkContent == false) {
    document.getElementById("content-input").style.border = "3px solid red";
    alert("Invalid content! Please check the content again!");
  }

  if (checkContent == true && checkEmail == true) {
    if(checkTitle == false)
    {
      if (confirm("You haven't entered a title! Do you want to continue?")) {
        // let contactForm = [emailValue, titleValue, contentValue];
        // console.log(contactForm);
  
        document.getElementById("form-alert").style.display = "block";
        document.getElementById("opacity-form").style.display = "block";
  
        document.getElementById("email-from").value = emailValue;
        document.getElementById("title-output").value = titleValue;
        document.getElementById("content-output").value = contentValue;
      }
    }
    else {

      document.getElementById("form-alert").style.display = "block";
      document.getElementById("opacity-form").style.display = "block";

      document.getElementById("email-from").value = emailValue;
      document.getElementById("title-output").value = titleValue;
      document.getElementById("content-output").value = contentValue;
    }
  }
}

function closeAlert() {
  document.getElementById("form-alert").style.display = "none";
  document.getElementById("opacity-form").style.display = "none";
}
