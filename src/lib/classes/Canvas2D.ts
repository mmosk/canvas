import { Canvas } from './Canvas';
import { Point } from '../interfaces';

export class Canvas2D extends Canvas {
  private ctx: CanvasRenderingContext2D;

  private origin: Point = { x: 0, y: 0 };

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

  setOrigin(x: number, y: number): void {
    this.origin.x = x;
    this.origin.y = y;
  }

  private resolvePoint({ x, y }: Point): Point {
    return {
      x: this.origin.x + x,
      y: this.origin.y + y,
    };
  }

  path(points: Point[], close = false): void {
    this.ctx.beginPath();

    const { x, y } = this.resolvePoint(points[0]);

    this.ctx.moveTo(x, y);

    for (let i = 1, len = points.length; i < len; i++) {
      const { x, y } = this.resolvePoint(points[i]);

      this.ctx.lineTo(x, y);
    }

    if (close) this.ctx.closePath();

    this.ctx.stroke();
  }
}
