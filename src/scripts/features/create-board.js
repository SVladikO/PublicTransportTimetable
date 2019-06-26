const TABLE_ROWS = 7;

function createBoard(rootClass, height, columns, imageDisabledLamp) {
  if (!rootClass) throw new Error('.rootClass is empty');
  let root = document.getElementsByClassName(rootClass)[0];

  if (!root) throw new Error("RootClass doesn't exist");
  let images = root.getElementsByTagName('img');

  if (images.length > 0) return;

  root.style.position = 'relative';
  root.style.background = 'black';
  root.style.height = `${height}px`;
  let imageSize = height / 8.2;
  let position = imageSize + imageSize / 5;

  for (let j = 0; j < columns; j++) {
    for (let i = 0; i < TABLE_ROWS; i++) {
      let img = document.createElement('img');
      img.src = imageDisabledLamp;
      img.style.width = `${imageSize}px`;
      img.style.height = `${imageSize}px`;
      img.style.position = 'absolute';
      img.style.borderRadius = '50%';
      img.style.top = `${position * i}px`;
      img.style.left = `${position * j}px`;

      root.appendChild(img);
    }
  }
}

module.exports = createBoard;
