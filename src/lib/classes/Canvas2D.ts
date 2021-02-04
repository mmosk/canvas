import { Canvas } from './Canvas';

export class Canvas2D extends Canvas {
  private ctx: CanvasRenderingContext2D;

  constructor(id: string) {
    super(id);

    const ctx = this.canvas.getContext('2d');

    if (!ctx) throw 'Canvas is set to a different context mode';

    this.ctx = ctx;
  }

  get context(): CanvasRenderingContext2D {
    return this.ctx;
  }
}
