// Dark Mode uchun funksiya yaratamiz
function enableDarkMode() {
  // body ning background-color va color ichki stilini almashtiramiz
  document.body.classList.add("dark-mode");
  // navbar, buttonlar va switchning stilini almashtiramiz
  document.querySelector(".navbar").classList.add("dark-mode");
  document
    .querySelectorAll(".nav-link")
    .forEach((link) => link.classList.add("dark-mode"));
  document
    .querySelectorAll(".btn")
    .forEach((btn) => btn.classList.add("dark-mode"));
  document
    .querySelectorAll(".form-control")
    .forEach((control) => control.classList.add("dark-mode"));
  document
    .querySelectorAll(".form-check-input")
    .forEach((input) => input.classList.add("dark-mode"));
  document
    .querySelectorAll(".modal-header")
    .forEach((header) => header.classList.add("dark-mode"));
  document
    .querySelectorAll(".modal-body")
    .forEach((body) => body.classList.add("dark-mode"));
  document
    .querySelectorAll(".modal-content")
    .forEach((content) => content.classList.add("dark-mode"));
}

// Light Mode uchun funksiya yaratamiz
function disableDarkMode() {
  // body ning background-color va color ichki stilini ko'rsatishga qaytarib qo'yamiz
  document.body.classList.remove("dark-mode");
  // navbar, buttonlar va switchning stilini almashtiramiz
  document.querySelector(".navbar").classList.remove("dark-mode");
  document
    .querySelectorAll(".nav-link")
    .forEach((link) => link.classList.remove("dark-mode"));
  document
    .querySelectorAll(".btn")
    .forEach((btn) => btn.classList.remove("dark-mode"));
  document
    .querySelectorAll(".form-control")
    .forEach((control) => control.classList.remove("dark-mode"));
  document
    .querySelectorAll(".form-check-input")
    .forEach((input) => input.classList.remove("dark-mode"));
  document
    .querySelectorAll(".modal-header")
    .forEach((header) => header.classList.remove("dark-mode"));
  document
    .querySelectorAll(".modal-body")
    .forEach((body) => body.classList.remove("dark-mode"));
  document
    .querySelectorAll(".modal-content")
    .forEach((content) => content.classList.remove("dark-mode"));
}

// Switching funksiyasini yaratamiz
function toggleDarkMode(event) {
  if (event.target.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}

// Switching uchun event listener qo'shamiz
document
  .querySelector("#darkModeSwitch")
  .addEventListener("change", toggleDarkMode);

   // Get the modal
   var modal = document.getElementById("myModal");

   // Get the button that opens the modal
   var btn = document.getElementById("btn");

   // Get the <span> element that closes the modal
   var span = document.getElementsByClassName("close")[0];

   // When the user clicks on the button, open the modal
   btn.onclick = function () {
     modal.style.display = "block";
   };

   // When the user clicks on <span> (x), close the modal
   span.onclick = function () {
     modal.style.display = "none";
   };

   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function (event) {
     if (event.target == modal) {
       modal.style.display = "none";
     }
   };

const createBtn = document.querySelector('.SendBtn');
createBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const text1  = document.getElementById("input1").value;
  const text2  = document.getElementById("input2").value;
  const text3  = document.getElementById("input3").value;
  const text4  = document.getElementById("input4").value;


  if  ( text1!== "" &&  text2!== "" &&  text3!== "") {
    const my_text = `Buyurtma is:%0A -xaridorninng ismi: ${text1} %0A -  Tel Number: ${text2} %0A - Mahsulot nomi : ${text3} %0A - Dostavka: ${text4}`;
    const token = '6242356925:AAFvgDKJNNIqwf6k1-vYvxxoNr0iRH62ovQ';
    const chatId = '1429084268';
    const apiUrl = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${my_text}`;
    const api = new XMLHttpRequest();
    api.open("GET", apiUrl, true);
    api.send();
    alert("Siz bilan tez orada bog'lanishadi");
    console.log("Message sent successfully!");
  } else {
    alert("Iltimos barcha malumotlarni toldiring");
  }
  const form = document.getElementById("myForm"); 
  form.reset();

});




