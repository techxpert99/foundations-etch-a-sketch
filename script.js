function cellEnter() {
    rgba_ = this.style.rgba_;
    rgba_[3] += 10;
    this.style.backgroundColor = 'rgba(' + rgba_[0] + ',' + rgba_[1] + ',' + rgba_[2] + ',' + rgba_[3] + '%)';
    if(rgba_[3] >= 100)
        this.removeEventListener('mouseenter',cellEnter);
}

function createGrid(n) {
    if(n > 100) n = 100;
    let grid = document.querySelector('#grid');
    if(grid)
        grid.remove();
    grid = document.createElement('div');
    document.body.appendChild(grid);
    grid.id = 'grid';
    for(let y = 0; y < n; y++) {
        let row = document.createElement('div');
        grid.appendChild(row);
        row.id = 'row' + y;
        row.className = 'row';
        for(let x = 0; x < n; x++) {
            let cell = document.createElement('div');
            rgba_ = [Math.floor(Math.random()*255), Math.floor(Math.random()*255),Math.floor(Math.random()*255),0];
            cell.style.rgba_ = rgba_;
            cell.style.backgroundColor = 'rgba(' + rgba_[0] + ',' + rgba_[1] + ',' + rgba_[2] + ',' + rgba_[3] + '%)';
            cell.addEventListener('mouseenter',cellEnter);
            row.appendChild(cell);
            cell.id = 'cell' + (y*16 + x);
            cell.className = 'cell';
        }
    }
}

document.querySelector('#reset').addEventListener('click',() => {
    createGrid(+prompt('Enter grid size:'));
})

createGrid(16);