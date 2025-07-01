// @lc code=start
function minBitFlips(start: number, goal: number): number {
	let xor = start ^ goal;
	let count = 0;

	while (xor) {
		count += xor & 1;
		xor >>= 1;
	}

	return count;
}
// @lc code=end

console.log(minBitFlips(10, 7)); // 3
console.log(minBitFlips(3, 4)); // 2
console.log(minBitFlips(1, 2147483647)); // 32

/*
 * @lc app=leetcode id=2220 lang=typescript
 *
 * [2220] Minimum Bit Flips to Convert Number
 *
 * https://leetcode.com/problems/minimum-bit-flips-to-convert-number/description/
 *
 * algorithms
 * Easy (87.54%)
 * Likes:    1454
 * Dislikes: 34
 * Total Accepted:    303.7K
 * Total Submissions: 346.7K
 * Testcase Example:  '10\n7'
 *
 * A bit flip of a number x is choosing a bit in the binary representation of x
 * and flipping it from either 0 to 1 or 1 to 0.
 *
 *
 * For example, for x = 7, the binary representation is 111 and we may choose
 * any bit (including any leading zeros not shown) and flip it. We can flip the
 * first bit from the right to get 110, flip the second bit from the right to
 * get 101, flip the fifth bit from the right (a leading zero) to get 10111,
 * etc.
 *
 *
 * Given two integers start and goal, return the minimum number of bit flips to
 * convert start to goal.
 *
 *
 * Example 1:
 *
 *
 * Input: start = 10, goal = 7
 * Output: 3
 * Explanation: The binary representation of 10 and 7 are 1010 and 0111
 * respectively. We can convert 10 to 7 in 3 steps:
 * - Flip the first bit from the right: 1010 -> 1011.
 * - Flip the third bit from the right: 1011 -> 1111.
 * - Flip the fourth bit from the right: 1111 -> 0111.
 * It can be shown we cannot convert 10 to 7 in less than 3 steps. Hence, we
 * return 3.
 *
 * Example 2:
 *
 *
 * Input: start = 3, goal = 4
 * Output: 3
 * Explanation: The binary representation of 3 and 4 are 011 and 100
 * respectively. We can convert 3 to 4 in 3 steps:
 * - Flip the first bit from the right: 011 -> 010.
 * - Flip the second bit from the right: 010 -> 000.
 * - Flip the third bit from the right: 000 -> 100.
 * It can be shown we cannot convert 3 to 4 in less than 3 steps. Hence, we
 * return 3.
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= start, goal <= 10^9
 *
 *
 *
 * Note: This question is the same as 461: Hamming Distance.
 *
 */
