const chess = {
  gameContainerEl: document.getElementById('game'),
  render() {
 
    const cols = [0,'a','b', 'c', 'd', 'e', 'f', 'g','h',0];

		// Цикл для строк
    for (let row = 0; row < 10; row++) {
      const tr = document.createElement('tr');
      this.gameContainerEl.appendChild(tr);
			
      // Добавляем ячейки в строку.
      for (let col = 0; col < 10; col++) {
        const td = document.createElement('td');
        tr.appendChild(td);

        if (row === 0 && cols[col] !== 0) {
          td.innerHTML = cols[col];
        } 
	if (row === 9 && cols[col] !== 0) {
          td.innerHTML = cols[col];
        } 

        if (this.isCellIsBlack(row, col)) {
          td.style.backgroundColor = 'grey';
        }
      }
    }
  },


  isCellIsBlack(rowNum, colNum) {

   return (rowNum + colNum) % 2 === 0;
  },
};

// Запускаем метод render.
chess.render();
