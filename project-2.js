// Variables
const openBtn = document.getElementById('open-btn');
const modalContainer = document.getElementById('modal-container');
const closeBtn = document.getElementById('close-btn');

// Event Listeners

openBtn.addEventListener('click', () => {
  modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});

// closes the modal container by clicking anywhere on the window

window.addEventListener('click', (e) => {
  if (e.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
});