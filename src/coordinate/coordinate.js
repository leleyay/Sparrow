import { compose } from '../utils/hepler';

export function createCoordinate({
  x, y, width, height,
  transforms: coordinates = [],
}) {
  const transforms = coordinates
    .map((coordinate) => coordinate({
      x, y, width, height,
    }))
    .flat();
  const output = compose(...transforms);

  const types = transforms.map((d) => d.type());

  output.isPolar = () => types.indexOf('polar') !== -1;

  // 判断是否转置
  // 只有是奇数个 'transpose' 的时候才是转置
  // 这里使用了异或：a ^ b， 只有当 a 和 b 值不相同的时候才为 true，否者为 false
  output.isTranspose = () => types.reduce((is, type) => is ^ (type === 'transpose'), false);

  output.center = () => [x + width / 2, y + height / 2];

  return output;
}
