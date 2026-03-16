/**
 * Day 002 - 가장 긴 부분 문자열 (Longest Substring Without Repeating Characters)
 *
 * 문자열 s가 주어졌을 때, 중복 문자가 없는 가장 긴 부분 문자열(substring)의 길이를 반환하세요.
 *
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  // 여기에 코드를 작성하세요
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

// ===== 테스트 =====
const testCases = [
  { input: "abcabcbb", expected: 3 },  // "abc"
  { input: "bbbbb", expected: 1 },      // "b"
  { input: "pwwkew", expected: 3 },     // "wke"
  { input: "", expected: 0 },           // 빈 문자열
  { input: "dvdf", expected: 3 },       // "vdf"
  { input: " ", expected: 1 },          // 공백 한 칸
  { input: "abcdef", expected: 6 },     // 전체가 고유
  { input: "aab", expected: 2 },        // "ab"
];

testCases.forEach(({ input, expected }, i) => {
  const result = lengthOfLongestSubstring(input);
  const status = result === expected ? "PASS" : "FAIL";
  console.log(`${status} | Test ${i + 1}: input="${input}" → result=${result}, expected=${expected}`);
});