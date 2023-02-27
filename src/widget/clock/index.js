import moment from 'moment';

const getTemplate = value => `
<div class="clock">
  <p class="text">${value}</p>
</div>`;

export class Clock {
  constructor({ selector }) {
    this.parent = document.querySelector(selector);

    this.render();
    this.text = this.parent.querySelector('.text');

    this.updateValue();
    this.start();
  }

  render() {
    this.parent.innerHTML = '';
    this.parent.insertAdjacentHTML('beforeend', getTemplate(this.value));
  }

  updateValue() {
    this.text.textContent = moment().format('DD/MM/YYYY HH:mm:ss');
  }

  start() {
    if (this.timerId) return;

    this.timerId = setInterval(() => {
      this.updateValue();
    }, 1000);
  }

  stop() {
    clearInterval(this.timerId);
    this.timerId = undefined;
  }
}
