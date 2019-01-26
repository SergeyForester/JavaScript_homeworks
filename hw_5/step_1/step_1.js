const chess = {
  gameContainerEl: document.getElementById('game'),
  render() {
  	// Названия колонок
    const cols = [0,'a','b', 'c', 'd', 'e', 'f', 'g','h',0];

		// Цикл для строк
    for (let row = 0; row < 10; row++) {
    	// Создаем и добавляем строку.
      const tr = document.createElement('tr');
      this.gameContainerEl.appendChild(tr);
			
      // Добавляем ячейки в строку.
      for (let col = 0; col < 10; col++) {
      	// Создаем и добавляем ячейку.
        const td = document.createElement('td');
        tr.appendChild(td);

				// Если строка нулевая (первая по счету), значит выводим буквы в ней.
        // Нули из массива с названиями колонок не выводим, они нам не нужны.
        if (row === 0 && cols[col] !== 0) {
          td.innerHTML = cols[col];
        } 

        // Проверяем, надо ли покрасить ячейку, передаем строку и колонку.
        if (this.isCellIsBlack(row, col)) {
          td.style.backgroundColor = 'grey';
        }
      }
    }
  },

	// Метод определяет нужно ли покрасить ячейку.
  // Просто для примера покрасим ячейки, строки которых делятся на 2 с остатком.
  isCellIsBlack(rowNum, colNum) {
  	// Если будет остаток, то он даст true в условии, а если не будет, то 0 даст false в условии.
    let rows = rowNum % 2;
    let cols = colNum % 2;
    return rows, cols;
  },
};

// Запускаем метод render.
chess.render();