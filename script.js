const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.onclick = () => {
  navLinks.classList.toggle("active");
};

/* NAV ACTIVE */

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

  link.addEventListener("click", () => {

    links.forEach(nav => nav.classList.remove("active"));

    link.classList.add("active");

    navLinks.classList.remove("active");

  });

});

/* WHATSAPP BUTTON */

document.getElementById("sendBtn").addEventListener("click", function(){

  let name =
  document.getElementById("name").value;

  let email =
  document.getElementById("email").value;

  let message =
  document.getElementById("message").value;

  let phoneNumber =
  "9047465713";

  let text =
  `Name: ${name}%0A
Email: ${email}%0A
Message: ${message}`;

  let url =
  `https://wa.me/${phoneNumber}?text=${text}`;

  window.open(url, "_blank");

});
