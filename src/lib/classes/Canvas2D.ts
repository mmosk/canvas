import { Canvas } from './Canvas';
import { Point } from '../interfaces';

export class Canvas2D extends Canvas {
  private ctx: CanvasRenderingContext2D;

  constructor(id: string, alpha = false) {
    super(id);

    const ctx = this.canvas.getContext('2d', { alpha });

    if (!ctx) throw 'Canvas is set to a different context mode';

    this.ctx = ctx;
  }

  get context(): CanvasRenderingContext2D {
    return this.ctx;
  }

  clear(): void {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  path(points: Point[], close = false): void {
    this.ctx.beginPath();

    this.ctx.moveTo(points[0].x, points[0].y);

    for (let i = 1, len = points.length; i < len; i++) {
      this.ctx.lineTo(points[i].x, points[i].y);
    }

    if (close) this.ctx.closePath();

    this.ctx.stroke();
  }
}
