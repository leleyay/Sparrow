import { curry } from '../utils/hepler';
import { scale, translate } from './transforms';

export function coordinate(transformOptions, canvasOptions) {
  const {
    x, y, width, height,
  } = canvasOptions;
  return [
    scale(width, height),
    translate(x, y),
  ];
}

export const cartesian = curry(coordinate);
