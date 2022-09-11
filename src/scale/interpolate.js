export function interpolateNumber(t, start, stop) {
  return start * (1 - t) + stop * t;
}

export function interpolateColor(t, start, stop) {
  const r = interpolateNumber(t, start[0], stop[0]);
  const g = interpolateNumber(t, start[0], stop[0]);
  const b = interpolateNumber(t, start[0], stop[0]);
  return `rgb(${r}, ${g}, ${b})`;
}
