import { Canvas2D } from './lib';

const canvas = new Canvas2D('canvas', true);

canvas.setOrigin(150, 75);
canvas.setScale(1, -1);

canvas.path(
  [
    { x: -30, y: 0 },
    { x: 0, y: 25 },
    { x: 30, y: 0 },
  ],
  true
);

canvas.rect(-25, 0, 25, -50);
