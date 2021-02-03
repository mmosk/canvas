import { Canvas } from './Canvas';

export class Canvas2D extends Canvas {
  private context: CanvasRenderingContext2D;

  constructor(id: string) {
    super(id);

    const context = this.canvas.getContext('2d');

    if (!context) throw 'Canvas is set to a different context mode';

    this.context = context;
  }
}
