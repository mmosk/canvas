export class Canvas {
  static isCanvasElement(element: HTMLElement): element is HTMLCanvasElement {
    return element.nodeName === 'CANVAS';
  }
}
