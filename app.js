const board = document.querySelector('.container');
const shuffleBtn = document.getElementById('shuffleBtn');

function checkWin() {
    const tiles = Array.from(board.children);
    const currentOrder = tiles.map(t => t.innerText).join('');
    
    const winningOrder = "12345678"; 

    if (currentOrder === winningOrder) {
        document.getElementById('message').style.visibility = 'visible';
        board.style.pointerEvents = 'none'; 
    }
}

function handleTileClick(e) {
    const tile = e.target;
    const emptyTile = document.getElementById('empty-tile');

    if (tile.classList.contains('tile') && tile.id !== 'empty-tile') {
        const allTiles = Array.from(board.children);
        const index = allTiles.indexOf(tile);
        const emptyIndex = allTiles.indexOf(emptyTile);

        const diff = Math.abs(index - emptyIndex);
        const isSameRow = Math.floor(index / 3) === Math.floor(emptyIndex / 3);

        if (diff === 3 || (diff === 1 && isSameRow)) {
            emptyTile.innerText = tile.innerText;
            tile.innerText = "";

            tile.id = 'empty-tile';    
            emptyTile.id = '';   
            checkWin();      
        }
        
    }
}

board.addEventListener('click', handleTileClick);

shuffleBtn.addEventListener('click', () => {
    const tiles = Array.from(board.children);

    for (let i = tiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        board.appendChild(tiles[j]);
    }
    document.getElementById('message').style.visibility = 'hidden';
    board.style.pointerEvents = 'auto'
});
