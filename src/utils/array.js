/**
 * 数据根据 key 分组
 * @param {T[]} array 需要分组的数据
 * @param {T => string} key 获得数据 key 的函数
 * @returns {Map<string, T>}
 */
export function group(array, key = (d) => d) {
  const keyGroups = new Map();
  for (const item of array) {
    const k = key(item);
    const g = keyGroups.get(k);
    if (g) {
      g.push(item);
    } else {
      keyGroups.set(k, [item]);
    }
  }
  return keyGroups;
}
