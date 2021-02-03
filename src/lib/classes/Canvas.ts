import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

export class Canvas {
  protected canvas: HTMLCanvasElement;

  protected width: number;
  protected height: number;

  constructor(id: string) {
    const element = document.getElementById(id);

    if (!element || !Canvas.isCanvasElement(element)) throw 'Invalid ID';

    this.canvas = element;

    this.syncSize();

    fromEvent(window, 'resize')
      .pipe(debounceTime(500))
      .subscribe(this.syncSize.bind(this));
  }

  private syncSize(): void {
    const { clientWidth, clientHeight } = this.canvas;

    this.width = clientWidth;
    this.height = clientHeight;
  }

  static isCanvasElement(element: HTMLElement): element is HTMLCanvasElement {
    return element.nodeName === 'CANVAS';
  }
}
