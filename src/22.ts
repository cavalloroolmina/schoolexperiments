function findLongestPalindromicSubstring(str: string): number {
  if (str.length <= 1) return str.length;

  let start = 0;
  let end = 0;

  for (let i = 0; i < str.length - 1; i++) {
    let left = i;
    let right = i + 1;
    while (left >= 0 && right <= str.length - 1 && str[left] === str[right]) {
      if (right - left > end - start) {
        start = left;
        end = right;
      }
      left--;
      right++;
    }
  }

  return end + 1;
}
