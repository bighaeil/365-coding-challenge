/**
 * ex4. 가장 긴 부분 문자열 (Longest Substring Without Repeating Characters)
 * 중복 문자가 없는 가장 긴 부분 문자열의 길이를 반환
 */

function lengthOfLongestSubstring(s) {
  // 여기에 풀이를 작성하세요
  const map = new Map();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (map.has(char) && map.get(char) >= left) {
      left = map.get(char) + 1;
    }

    map.set(char, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// 실행 예시
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb"));    // 1
console.log(lengthOfLongestSubstring("pwwkew"));   // 3

module.exports = { lengthOfLongestSubstring };
