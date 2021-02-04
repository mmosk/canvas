import { fromEvent, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

export class Canvas {
  protected canvas: HTMLCanvasElement;

  protected width: number;
  protected height: number;

  protected destroy$ = new Subject<null>();

  constructor(id: string) {
    const element = document.getElementById(id);

    if (!element || !Canvas.isCanvasElement(element)) throw 'Invalid ID';

    this.canvas = element;

    this.syncSize();

    fromEvent(window, 'resize')
      .pipe(debounceTime(500), takeUntil(this.destroy$))
      .subscribe(this.syncSize.bind(this));
  }

  unsubscribe(): void {
    this.destroy$.next(null);
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
