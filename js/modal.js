(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

const mobileMenu = () => {
  const burger = document.querySelector("#burger");
  const bodyhidden = document.querySelector(".body-hidden");
  burger.addEventListener("click", () => {
    bodyhidden.classList.toggle("active");
  });
};

mobileMenu();
