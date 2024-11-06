const pacman = document.querySelector('.pacman');
let positionX = 0;
let positionY = 0;
let direction = 'right'; // 初始方向為向右
const speed = 5; // 移動速度

const gameArea = document.querySelector('.game-area');
const gameAreaWidth = gameArea.offsetWidth;
const gameAreaHeight = gameArea.offsetHeight;
const pacmanSize = 40; // Pac-Man 的尺寸

// 函數：生成周圍的豆豆
function createDots() {
  // 清除現有的豆豆
  const existingDots = document.querySelectorAll('.dot');
  existingDots.forEach(dot => dot.remove());

  const container = document.querySelector('.game-container');
  const containerRect = container.getBoundingClientRect();
  const gameAreaRect = gameArea.getBoundingClientRect();

  const offsetX = gameAreaRect.left - containerRect.left;
  const offsetY = gameAreaRect.top - containerRect.top;

  const startX = -20; // 左邊緣的開始位置，在外部 20px
  const startY = -20; // 上邊緣的開始位置，在外部 20px

  const endX = gameArea.offsetWidth + 20; // 右邊緣的結束位置，在外部 20px
  const endY = gameArea.offsetHeight + 20; // 下邊緣的結束位置，在外部 20px

  const spacing = 20; // 設置間距為 20px

  // 上邊緣的豆豆
  for (let i = startX; i <= endX; i += spacing) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.left = `${i + offsetX}px`;
    dot.style.top = `${offsetY - 20}px`; // 調整到 game-area 外部 20px
    container.appendChild(dot);
  }

  // 右邊緣的豆豆
  for (let i = startY; i <= endY; i += spacing) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.left = `${endX + offsetX}px`;
    dot.style.top = `${i + offsetY}px`;
    container.appendChild(dot);
  }

  // 下邊緣的豆豆
  for (let i = endX; i >= startX; i -= spacing) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.left = `${i + offsetX}px`;
    dot.style.top = `${endY + offsetY}px`;
    container.appendChild(dot);
  }

  // 左邊緣的豆豆
  for (let i = endY; i >= startY; i -= spacing) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.left = `${offsetX - 20}px`; // 調整到 game-area 外部 20px
    dot.style.top = `${i + offsetY}px`;
    container.appendChild(dot);
  }
}

// 函數：移動 Pac-Man
function movePacman() {
  if (direction === 'right') {
    positionX += speed;
    if (positionX >= gameAreaWidth) {
      // 到達右邊界，改變方向向下
      direction = 'down';
      pacman.style.transform = 'rotate(90deg)';
    }
  } else if (direction === 'down') {
    positionY += speed;
    if (positionY >= gameAreaHeight) {
      // 到達下邊界，改變方向向左
      direction = 'left';
      pacman.style.transform = 'rotate(180deg)';
    }
  } else if (direction === 'left') {
    positionX -= speed;
    if (positionX <= -pacmanSize) {
      // 到達左邊界，改變方向向上
      direction = 'up';
      pacman.style.transform = 'rotate(-90deg)';
    }
  } else if (direction === 'up') {
    positionY -= speed;
    if (positionY <= -pacmanSize) {
      // 回到起點，重新開始
      direction = 'right';
      pacman.style.transform = 'rotate(0deg)';
      createDots(); // 重新生成豆豆
    }
  }

  pacman.style.left = positionX + 'px';
  pacman.style.top = positionY + 'px';

  // 檢查 Pac-Man 是否碰到豆豆
  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => {
    const dotRect = dot.getBoundingClientRect();
    const pacmanRect = pacman.getBoundingClientRect();

    // 檢查 Pac-Man 和豆豆的重疊
    const isCollision = !(
      pacmanRect.right < dotRect.left ||
      pacmanRect.left > dotRect.right ||
      pacmanRect.bottom < dotRect.top ||
      pacmanRect.top > dotRect.bottom
    );

    if (isCollision && !dot.classList.contains('eaten')) {
      dot.classList.add('eaten');
      dot.style.visibility = 'hidden'; // 豆豆消失
    }
  });

  requestAnimationFrame(movePacman);
}


// 初始化 Pac-Man 的位置
positionX = -pacmanSize;
positionY = -pacmanSize;
pacman.style.left = positionX + 'px';
pacman.style.top = positionY + 'px';

// 初次運行時創建豆豆並開始移動
createDots();
movePacman();