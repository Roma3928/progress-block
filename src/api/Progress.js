/** Класс для создания Progress */
export default class Progress {
  #container;
  #progressCircle;
  #progressIndicator;
  #valueInput;
  #animateToggle;
  #hideToggle;

  #options = {
    initialValue: 0,
    animated: false,
    hidden: false,
  };

  /**
   * Конструктор класса Progress
   * @param {string} containerSelector - Селектор секции с Progress
   * @param {object} options - Первичные настройки
   */
  constructor(containerSelector, options = {}) {
    this.#container = document.querySelector(containerSelector);
    if (!this.#container) {
      console.error(`Селектор '${containerSelector}' не найден!`);
      return;
    }

    this.#progressCircle = this.#container.querySelector('.progress__circle');
    this.#progressIndicator = this.#container.querySelector('.progress__indicator');
    this.#valueInput = this.#container.querySelector('.progress__value-input');
    this.#animateToggle = this.#container.querySelector('.progress__animate-toggle');
    this.#hideToggle = this.#container.querySelector('.progress__hide-toggle');

    this.#options = { ...this.#options, ...options };

    this.#init();
  }

  /**
   * Инициализация.
   * @private
   */
  #init() {
    this.#setupInitialValues();
    this.#setupEventListeners();
  }

  /**
   * Устанавливает начальные значения.
   * @private
   */
  #setupInitialValues() {
    this.#valueInput.value = this.#options.initialValue;
    this.setProgress(this.#options.initialValue);

    if (this.#options.animated) {
      this.#animateToggle.checked = true;
      this.toggleAnimation(this.#animateToggle);
    }
    if (this.#options.hidden) {
      this.#hideToggle.checked = true;
      this.toggleVisibility(this.#hideToggle);
    }
  }

  /**
   * Устанавливает обработчики событий.
   * @private
   */
  #setupEventListeners() {
    this.#valueInput.addEventListener('input', () => this.setProgress(this.#valueInput.value));
    this.#animateToggle.addEventListener('change', () => this.toggleAnimation(this.#animateToggle));
    this.#hideToggle.addEventListener('change', () => this.toggleVisibility(this.#hideToggle));
  }

  /**
   * Проверяет и корректирует введенное значение.
   * @private
   * @param {number} value - Значение, которое необходимо проверить.
   * @returns {number} - Скорректированное значение.
   */
  #validateInputValue(value) {
    value = Math.max(0, Math.min(100, value));
    this.#valueInput.value = value;
    return value;
  }

  /**
   * Устанавливает прогресс.
   * @param {number} value - Значение прогресса (от 0 до 100).
   */
  setProgress(value) {
    value = this.#validateInputValue(value);
    const progress = 251.4 * (1 - value / 100);
    this.#progressIndicator.style.strokeDashoffset = progress;
  }

  /**
   * Переключает анимацию прогресса.
   * @param {HTMLInputElement} toggle - Переключатель анимации.
   */
  toggleAnimation(toggle) {
    this.#progressIndicator.classList.toggle('animated', toggle.checked);

    // if (this.animateToggle.checked) {
    //   this.hideToggle.checked = false;
    //   this.toggleVisibility();
    // }
  }

  /**
   * Переключает видимость прогресса.
   * @param {HTMLInputElement} toggle - Переключатель видимости.
   */
  toggleVisibility(toggle) {
    this.#progressCircle.classList.toggle('hide', toggle.checked);

    // if (this.hideToggle.checked) {
    //   this.animateToggle.checked = false;
    //   this.toggleAnimation();
    // }
  }
}
