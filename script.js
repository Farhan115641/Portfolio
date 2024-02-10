let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

//email
const contactFrom = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactmsg = document.getElementById("contact-msg"),
  contacterr = document.getElementById("contact-err");

const sendEmail = (e) => {
  e.preventDefault();
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactmsg.value === ""
  ) {
    contacterr.classList.remove("color-blue");
    contacterr.classList.add("color-red");
    //show err
    contacterr.textContent = "Write all the input field";
  } else {
    emailjs
      .sendForm(
        "service_vn9usqk",
        "template_uinj1wf",
        "#contact-form",
        "tpCdWXaLcJsRD9kSK"
      )
      .then(
        () => {
          contacterr.classList.add("color-blue");
          contacterr.textContent = "Message sent ✔";
          console.log("SUCCESS!");
          //remove text after few seconds
          setTimeout(() => {
            contacterr.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("something wrong", error);
          console.log(error);
        }
      );
    //clear
    contactName.value = "";
    contactEmail.value = "";
    contactmsg.value = "";
  }
};
contactFrom.addEventListener("submit", sendEmail);
