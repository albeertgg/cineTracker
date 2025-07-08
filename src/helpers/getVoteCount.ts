// 5347  =>  5.3K
// 300   =>  300

// 30003033030 ==>    3.1M

export function getVoteCount(voteCount?: number) {
  if (!voteCount) return null;

  if (voteCount < 1000) return voteCount;

  if (voteCount > 1000 && voteCount < 1000000) {
    return (voteCount / 1000).toFixed(1) + 'K';
  }

  if (voteCount > 1000000) {
    return (voteCount / 1000000).toFixed(1) + 'M';
  }
}
