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

// sotihga elon berish
const createButton = document.getElementById("createButton");
const cardContainer = document.getElementById("cardContainer");

createButton.addEventListener("click", () => {
  const nameInput = document.getElementById("inputName");
  const surnameInput = document.getElementById("inputSurname");
  const phoneModelInput = document.getElementById("inputPhoneModel");
  const phoneNumberInput = document.getElementById("inputPhoneNumber");
  const phonePriceInput = document.getElementById("inputPhonePrice");
  const phoneAdditionalInput = document.getElementById("inputPhoneAdditional");

  const name = nameInput.value.trim();
  const surname = surnameInput.value.trim();
  const phoneModel = phoneModelInput.value.trim();
  const phoneNumber = phoneNumberInput.value.trim();
  const phonePrice = phonePriceInput.value.trim();
  const phoneAdditional = phoneAdditionalInput.value.trim();

  if (name && surname && phoneModel && phoneNumber && phonePrice) {
    const imageInput = document.getElementById("inputImage");
    let imageSrc = "";
    if (imageInput.files[0]) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        imageSrc = reader.result;
        addCard();
        saveToLocalStorage();
      });
      reader.readAsDataURL(imageInput.files[0]);
    } else {
      addCard();
      saveToLocalStorage();
    }

    function addCard() {
      const card = document.createElement("div");
      card.classList.add("card", "mt-3");
      card.style.width = "18rem";

      const image = document.createElement("img");
      image.classList.add("card-img-top");
      image.src = imageSrc;

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = `${name} ${surname}`;

      const cardText = document.createElement("p");
      cardText.classList.add("card-text");
      cardText.innerHTML = `
        <strong>Telefon modeli:</strong> ${phoneModel}<br>
        <strong>Telefon raqami:</strong> ${phoneNumber}<br>
        <strong>Telefon narxi:</strong> ${phonePrice} so'm<br>
        <strong>Qo'shimcha ma'lumotlar:</strong> ${phoneAdditional}
      `;

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("btn", "btn-danger");
      deleteButton.textContent = "O'chirish";
      deleteButton.addEventListener("click", () => {
        card.remove();
        removeCard(card);
      })

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(deleteButton);
      card.appendChild(image);
      card.appendChild(cardBody);
      cardContainer.appendChild(card);

      nameInput.value = "";
      surnameInput.value = "";
      phoneModelInput.value = "";
      phoneNumberInput.value = "";
      phonePriceInput.value = "";
      phoneAdditionalInput.value = "";
      imageInput.value = "";
    }

    function saveToLocalStorage() {
      const cards = [];
      const cardList = document.querySelectorAll(".card");
      cardList.forEach(card => {
        const image = card.querySelector("img").src;
        const name = card.querySelector(".card-title").textContent.split(" ")[0];
        const surname = card.querySelector(".card-title").textContent.split(" ")[1];
        const phoneModel = card.querySelector(".card-text strong:nth-of-type(1)").nextSibling.textContent.trim();
        const phoneNumber = card.querySelector(".card-text strong:nth-of-type(2)").nextSibling.textContent.trim();
        const phonePrice = card.querySelector(".card-text strong:nth-of-type(3)").nextSibling.textContent.trim();
        const phoneAdditional = card.querySelector(".card-text strong:nth-of-type(4)").nextSibling.textContent.trim();
        cards.push({
          image,
          name,
          surname,
          phoneModel,
          phoneNumber,
          phonePrice,
          phoneAdditional
        });
      })
      localStorage.setItem("cards", JSON.stringify(cards));
    }

    function removeCard(card) {
      const cards = JSON.parse(localStorage.getItem("cards"));
      const imageSrc = card.querySelector("img").src;
      const name = card.querySelector(".card-title").textContent.split(" ")[0];
      const surname = card.querySelector(".card-title").textContent.split(" ")[1];
      const phoneModel = card.querySelector(".card-text strong:nth-of-type(1)").nextSibling.textContent.trim();
      const phoneNumber = card.querySelector(".card-text strong:nth-of-type(2)").nextSibling.textContent.trim();
      const phonePrice = card.querySelector(".card-text strong:nth-of-type(3)").nextSibling.textContent.trim();
      const phoneAdditional = card.querySelector(".card-text strong:nth-of-type(4)").nextSibling.textContent.trim();
      const newCards = cards.filter(c => {
        if (c.image != imageSrc) return true;
        if (c.name != name) return true;
        if (c.surname != surname) return true;
        if (c.phoneModel != phoneModel) return true;
        if (c.phoneNumber != phoneNumber) return true;
        if (c.phonePrice != phonePrice) return true;
        if (c.phoneAdditional != phoneAdditional) return true;
        return false;
      });
      localStorage.setItem("cards", JSON.stringify(newCards));
    }

  } else {
    alert("Malumotlarni kiriting");
  }
});

window.addEventListener("load", () => {
  const cardsData = JSON.parse(localStorage.getItem("cards"));
  if (cardsData) {
    cardsData.forEach(data => {
      const card = document.createElement("div");
      card.classList.add("card", "mt-3");
      card.style.width = "18rem";

      const image = document.createElement("img");
      image.classList.add("card-img-top");
      image.src = data.image;

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = `${data.name} ${data.surname}`;

      const cardText = document.createElement("p");
      cardText.classList.add("card-text");
      cardText.innerHTML = `
        <strong>Telefon modeli:</strong> ${data.phoneModel}<br>
        <strong>Telefon raqami:</strong> ${data.phoneNumber}<br>
        <strong>Telefon narxi:</strong> ${data.phonePrice} <br>
        <strong>Qo'shimcha ma'lumotlar:</strong> ${data.phoneAdditional}
      `;

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("btn", "btn-danger");
      deleteButton.textContent = "O'chirish";
      deleteButton.addEventListener("click", () => {
        card.remove();
        removeCard(card);
      })

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(deleteButton);
      card.appendChild(image);
      card.appendChild(cardBody);
      cardContainer.appendChild(card);
    })
  }
 
});






