export class Canvas {
  protected canvas: HTMLCanvasElement;

  constructor(id: string) {
    const element = document.getElementById(id);

    if (!element || !Canvas.isCanvasElement(element)) throw 'Invalid ID';

    this.canvas = element;
  }

  static isCanvasElement(element: HTMLElement): element is HTMLCanvasElement {
    return element.nodeName === 'CANVAS';
  }
}
