const getTemplate = value => `
<div class="timer">
  <p class="text">${value}</p>
  <button class="btn-stop">stop</button>
  <button class="btn-start">start</button>
</div>`;

export class Timer {
  constructor({ selector, start = 0 }) {
    this.parent = document.querySelector(selector);
    this.value = start;

    this.render();
    this.stopButton = this.parent.querySelector('.btn-stop');
    this.startButton = this.parent.querySelector('.btn-start');
    this.text = this.parent.querySelector('.text');

    // this.stopButton.setAttribute('disabled', true);
    this.stopButton.disabled = true;

    this.stopButton.addEventListener('click', this.stop.bind(this));
    this.startButton.addEventListener('click', this.start.bind(this));
  }

  render() {
    this.parent.innerHTML = '';
    this.parent.insertAdjacentHTML('beforeend', getTemplate(this.value));
  }

  incrementValue() {
    this.value++;
    this.text.textContent = this.value;
  }

  start() {
    if (this.timerId) return;

    this.startButton.disabled = true;
    this.stopButton.disabled = false;
    this.timerId = setInterval(() => {
      this.incrementValue();
    }, 1000);
  }

  stop() {
    clearInterval(this.timerId);
    this.startButton.disabled = false;
    this.stopButton.disabled = true;
    this.timerId = undefined;
  }
}
