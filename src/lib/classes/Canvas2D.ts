import { Canvas } from './Canvas';
import { Point, Scale } from '../interfaces';

export class Canvas2D extends Canvas {
  private ctx: CanvasRenderingContext2D;

  private origin: Point = { x: 0, y: 0 };
  private scale: Scale = { x: 1, y: 1 };

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

  setScale(x: number, y: number): void {
    this.scale.x = x;
    this.scale.y = y;
  }

  private resolveCoordinate(value: number, axis: 'x' | 'y'): number {
    return this.origin[axis] + value * this.scale[axis];
  }

  private resolveDimension(value: number, axis: 'x' | 'y'): number {
    return value * this.scale[axis];
  }

  rect(x1: number, y1: number, x2: number, y2: number): void {
    const x = this.resolveCoordinate(x1, 'x');
    const y = this.resolveCoordinate(y1, 'y');
    const width = this.resolveDimension(x2 - x1, 'x');
    const height = this.resolveDimension(y2 - y1, 'y');

    this.ctx.strokeRect(x, y, width, height);
  }

  path(points: Point[], close = false): void {
    this.ctx.beginPath();

    this.ctx.moveTo(
      this.resolveCoordinate(points[0].x, 'x'),
      this.resolveCoordinate(points[0].y, 'y')
    );

    for (let i = 1, len = points.length; i < len; i++) {
      this.ctx.lineTo(
        this.resolveCoordinate(points[i].x, 'x'),
        this.resolveCoordinate(points[i].y, 'y')
      );
    }

    if (close) this.ctx.closePath();

    this.ctx.stroke();
  }
}
