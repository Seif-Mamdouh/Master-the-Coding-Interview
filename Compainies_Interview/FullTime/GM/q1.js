function solution(T) {
  const hours = Math.floor(T / 3600);
  T %= 3600;
  const minutes = Math.floor(T / 60);
  const seconds = T % 60;

  let result = "";
  if (hours > 0) {
    result += `${hours}h`;
  }
  if (minutes > 0) {
    result += `${minutes}m`;
  }
  result += `${seconds}s`;

  return result;
}
