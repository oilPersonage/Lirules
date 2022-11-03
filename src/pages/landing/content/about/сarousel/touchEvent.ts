export class onTouchDetect {
  touchX: number;
  touchY: number;
  distY: number;
  distX: number;
  moveToX: boolean;
  direction: number;

  constructor() {
    this.touchX = 0;
    this.touchY = 0;
    this.distX = 0;
    this.distY = 0;
    this.moveToX = false;
    this.direction = 0;
  }

  onTouch(event): { direction: number; dist: number; isMoveToX: boolean } {
    const touch = event.touches[0] || event.changedTouches[0];
    const type = event.type;

    if (type === 'touchstart') {
      this.touchX = touch.pageX;
      this.touchY = touch.pageY;
      this.distX = 0;
      this.distY = 0;
    } else if (type === 'touchmove') {
      const deltaX = touch.pageX;
      const deltaY = touch.pageY;

      this.distX = Math.abs(deltaX - this.touchX);
      this.distY = Math.abs(deltaY - this.touchY);
      this.moveToX = this.distX > this.distY;

      this.direction = this.moveToX
        ? deltaX - this.touchX > 0
          ? -1
          : 1
        : deltaY - this.touchY > 0
        ? -1
        : 1;
    }

    return {
      direction: this.direction,
      dist: this.moveToX ? this.distX : this.distX,
      isMoveToX: this.moveToX,
    };
  }
}
