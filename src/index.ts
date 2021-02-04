import { Canvas2D } from './lib';

const canvas = new Canvas2D('canvas', true);

canvas.setOrigin(150, 75);
canvas.setScale(-1, 1);

canvas.path(
  [
    { x: -100, y: 65 },
    { x: 0, y: -15 },
    { x: 50, y: 65 },
  ],
  true
);
