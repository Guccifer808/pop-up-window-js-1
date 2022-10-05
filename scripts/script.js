const modalController = ({ modal, btnOpen, btnClose }) => {
  // Get button, modal window, close button

  const buttons = document.querySelectorAll(btnOpen);
  const modalWindow = document.querySelector(modal);
  const buttonClose = document.querySelector(btnClose);
  // const modalWindowClose = document.querySelector(".container");
  // Set styles
  modalWindow.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 350ms ease-in-out;
`;

  // Buttons Open
  const openModal = () => {
    modalWindow.style.visibility = "visible";
    modalWindow.style.opacity = 1;
    // Add close on Esc button
    window.addEventListener("keydown", closeModal);
  };
  buttons.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  // Button Close
  const closeModal = (e) => {
    const target = event.target;

    if (
      target === modalWindow ||
      target.closest(btnClose) ||
      // Add close on Esc button
      e.code === "Escape"
    ) {
      modalWindow.style.opacity = 0;

      // Add smooth transition for closeModal
      setTimeout(() => {
        modalWindow.style.visibility = "hidden";
      }, 350);
      // Add close on Esc button
      window.removeEventListener("keydown", closeModal);
    }
  };
  buttonClose, modalWindow.addEventListener("click", closeModal);
};
// Add params to function
modalController({
  modal: ".modal",
  btnOpen: ".btn-primary",
  btnClose: ".modal_close",
});
