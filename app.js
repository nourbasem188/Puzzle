let board = [1, 2, 3, 4, 5, 6, 7, 8, null];
const boardEl = document.getElementById('board');

function drawBoard() {
    boardEl.innerHTML = '';
    board.forEach((tile, i) => {
        const div = document.createElement('div');
        div.className = `tile ${tile === null ? 'empty' : ''}`;
        div.textContent = tile;
        div.onclick = () => moveTile(i);
        boardEl.appendChild(div);
    });
}

function moveTile(index) {
    const emptyIndex = board.indexOf(null);
    const neighbors = [index-1, index+1, index-3, index+3];
    
    if (neighbors.includes(emptyIndex)) {
        [board[index], board[emptyIndex]] = [board[emptyIndex], board[index]];
        drawBoard();
        checkWin();
    }
}

function shuffle() {
    board.sort(() => Math.random() - 0.5);
    drawBoard();
}

drawBoard();