const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const modal = document.getElementById('artModal');
const modalImage = document.getElementById('modalImage');
document.querySelectorAll('[data-modal-src]').forEach(button => {
  button.addEventListener('click', () => {
    modalImage.src = button.dataset.modalSrc;
    modalImage.alt = button.dataset.modalAlt || 'Artwork enlarged';
    modal?.showModal();
  });
});
document.querySelector('[data-close-modal]')?.addEventListener('click', () => modal?.close());
modal?.addEventListener('click', (event) => { if (event.target === modal) modal.close(); });
document.getElementById('year').textContent = new Date().getFullYear();
