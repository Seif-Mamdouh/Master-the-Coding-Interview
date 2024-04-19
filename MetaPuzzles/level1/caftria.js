// N seats
// K social distancing
// M diners
function getMaxAdditionalDinersCount(N, K, M, S) {
  S.sort((a, b) => a - b);
  let i = 0,
    count = 0,
    start = 1,
    end = 1;

  // Number of people who can sit before the first
  count += Math.max(Math.ceil((S[0] - K - 1) / (K + 1)), 0);

  console.log(Math.ceil((S[0] - K - 1) / (K + 1)), 0);
}

getMaxAdditionalDinersCount(10, 1, 2, [6, 2]);

// // Number of people who can sit before the first            and after the last person already sitting
// count += Math.max(Math.ceil((S[0] - K - 1) / (K + 1)), 0) + Math.max(Math.ceil((N - (S[M - 1] + K + 1) + 1) / (K + 1)), 0)

// // Calculate for all the allowed spaces between people
// while (i < M - 1) {
//     start = S[i] + K + 1
//     end = S[++i] - K - 1
//     count += Math.ceil((end - start + 1) / (K + 1))
// }

// return count;
