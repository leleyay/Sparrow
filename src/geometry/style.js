export function channelStyles(index, channels) {
  const { stroke: S, fill: F } = channels;
  return {
    ...(S && { stroke: S[index] }),
    ...(F && { fill: F[index] }),
  };
}

// 获取这个组的第一个点的样式作为该条线的样式
export function groupChannelStyles([index], channels) {
  return channelStyles(index, channels);
}
