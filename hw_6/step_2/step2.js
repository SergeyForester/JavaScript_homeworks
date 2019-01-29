'use strict';

/**
 * @property {object} settings Настройки корзины товаров.
 * @property {{price: number, name: string}[]} goods Список товаров что купил пользователь.
 * @property {HTMLElement} basketCountEl Место для показа количества товаров.
 * @property {HTMLElement} basketPriceEl Место для показа цены всех товаров.
 */
const basket = {
  settings: {
    countSelector: '#basket-count',
    priceSelector: '#basket-price',
  },
  goods: [],

  /**
   * Инициализирует переменные для корзины и показывает эти значения.
   */
  init(settings = {}) {
    document.querySelector('#container').addEventListener('click', event => {
      if (event.target.tagName !== 'BUTTON') {
        return;
      }

      this.goods.push({
        name: event.target.dataset.name,
        price: +event.target.dataset.price
      });

      this.render();
    })
  },

  /**
   * Отображает количество всех товаров и их цену.
   */
  render() {
    document.querySelector(`${this.settings.priceSelector}`).innerHTML = this.getGoodsPrice();
    document.querySelector(`${this.settings.countSelector}`).innerHTML = this.goods.length.toString();
  },

  /**
   * Считает и возвращает цену всех купленных товаров из массива this.goods.
   * @returns {number} Цену всех купленных товаров.
   */
  getGoodsPrice() {
    let sumOfGoods = 0;

    for (const elem of this.goods) {
      sumOfGoods += elem.price;
    }
    return sumOfGoods;
  },

  numberOfGoods() {
    let number = ''
    for (const elem of this.goodsSum) {
      number += elem;
    }
    return number.length;
  }
};

basket.init();
