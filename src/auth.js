export default class auth {
  constructor(element, onLogin) {
    this.element = element;
    this.onLogin = onLogin;

    const loginNameInput = element.querySelector('#loginName');
    const loginNickInput = element.querySelector('#loginNick');
    const submitButton = element.querySelector('#loginBtn');
    const authError = element.querySelector('#error');

    submitButton.addEventListener('click', () => {
      authError.textContent = '';

      const name = loginNameInput.value.trim();
      // const nick = loginNickInput.value.trim();

      if (!name) {
        authError.textContent = 'Введите данные';
      } else {
        this.onLogin(name);
      }
    });
  }

  show() {
    this.element.classList.remove('hidden');
  }

  hide() {
    this.element.classList.add('hidden');
  }
}
