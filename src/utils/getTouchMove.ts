let startY = 0;

export function getTouchMove(e, isStart) {
  if (isStart) {
    const touchObj = e.changedTouches[0];
    startY = parseInt(touchObj.clientY);
    e.preventDefault();
  } else {
    const touchObj = e.changedTouches[0],
      dist = parseInt(touchObj.clientY) - startY;
    startY = parseInt(touchObj.clientY);
    e.preventDefault();
  }
}
