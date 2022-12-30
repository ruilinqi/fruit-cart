const signupToggle = () => {
  const container = document.querySelector('.container');
  container.classList.toggle('active');
  const popup = document.querySelector('.signup-form');
  popup.classList.toggle('active');
};
const loginToggle = () => {
  const container = document.querySelector('.container');
  container.classList.toggle('active');
  const popup = document.querySelector('.login-form');
  popup.classList.toggle('active');
};
