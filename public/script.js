document.addEventListener("DOMContentLoaded", function (event) {
  let buttons = document.querySelectorAll(".item-btn");
  let modal = document.querySelector(".modal-window");
  let overlay = document.querySelector(".overlay");
  let modalClose = document.querySelector(".modal-close");
  let itemToBuy = document.querySelector(".item-to-buy-name");
  let form = document.querySelector(".form");
  let modalBtn = form.querySelector(".modal-btn");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (e) {
      e.preventDefault();

      modal.classList.add("active");
      overlay.classList.add("active");

      itemToBuy.innerHTML = buttons[i].parentElement.firstChild.innerText;
    });
  }

  modalClose.addEventListener("click", function (e) {
    event.preventDefault();

    modal.classList.remove("active");
    overlay.classList.remove("active");
  });

  modalBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let inputName = document.getElementById("name");
    let inputTel = document.getElementById("tel");
    let inputEmail = document.getElementById("email");

    fetch("/buy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          name: inputName.value,
          telephone: inputTel.value,
          email: inputEmail.value,
          item: itemToBuy.innerText
      }),
    });

    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});
