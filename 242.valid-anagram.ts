// @lc code=start
function isAnagram(s: string, t: string): boolean {
	if (s.length !== t.length) return false;

	const count = new Array(26).fill(0);

	for (let i = 0; i < s.length; i++) {
		count[s.charCodeAt(i) - 97]++;
		count[t.charCodeAt(i) - 97]--;
	}

	for (const c of count) {
		if (c !== 0) return false;
	}

	return true;
}
// @lc code=end

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("a", "ab")); // false
console.log(isAnagram("ab", "a")); // false
console.log(isAnagram("ab", "ba")); // true

/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 *
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (66.48%)
 * Likes:    13009
 * Dislikes: 430
 * Total Accepted:    4.7M
 * Total Submissions: 7.1M
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * Given two strings s and t, return true if t is an anagram of s, and false
 * otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "anagram", t = "nagaram"
 *
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: s = "rat", t = "car"
 *
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length, t.length <= 5 * 10^4
 * s and t consist of lowercase English letters.
 *
 *
 *
 * Follow up: What if the inputs contain Unicode characters? How would you
 * adapt your solution to such a case?
 *
 */
