import { Canvas2D } from './lib';

const canvas = new Canvas2D('canvas');

canvas.path(
  [
    { x: 50, y: 140 },
    { x: 150, y: 60 },
    { x: 250, y: 140 },
  ],
  true
);
