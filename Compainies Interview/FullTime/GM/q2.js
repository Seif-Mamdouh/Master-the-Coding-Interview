function solution(message, K) {
  if (message.length <= K) {
    return message;
  }

  const words = message.split(" ");
  let notification = "";

  for (const word of words) {
    if (notification.length + word.length + (notification ? 1 : 0) <= K) {
      notification += (notification ? " " : "") + word;
    } else {
      break;
    }
  }

  if (notification.length + 3 <= K) {
    if (notification.length === 0) {
      return "...";
    }
    return notification + " ...";
  }

  return notification;
}
