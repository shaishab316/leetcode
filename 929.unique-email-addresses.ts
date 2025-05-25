// @lc code=start
function numUniqueEmails(emails: string[]): number {
	return new Set(
		emails.map(
			(email) =>
				email.split("+")[0].split("@")[0].replace(/\./g, "") +
				"@" +
				email.split("@")[1]
		)
	).size;
}
// @lc code=end

console.log(
	numUniqueEmails([
		"test.email+alex@leetcode.com",
		"test.e.mail+bob.cathy@leetcode.com",
		"testemail+david@lee.tcode.com",
	])
); // 2

console.log(
	numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"])
); // 3

console.log(
	numUniqueEmails([
		"unique.email+test@domain.com",
		"unique.e.mail+test@domain.com",
		"unique.email@domain.com",
	])
); // 1

console.log(
	numUniqueEmails([
		"example+test@leetcode.com",
		"example@leetcode.com",
		"ex.ample@leetcode.com",
	])
); // 1

console.log(
	numUniqueEmails([
		"first.email+alex@leetcode.com",
		"second.email+alex@leetcode.com",
		"third.email@leetcode.com",
	])
); // 3

console.log(
	numUniqueEmails([
		"simple.email+alex@leetcode.com",
		"simple.email@leetcode.com",
		"simple.e.mail@leetcode.com",
	])
); // 1

/*
 * @lc app=leetcode id=929 lang=typescript
 *
 * [929] Unique Email Addresses
 *
 * https://leetcode.com/problems/unique-email-addresses/description/
 *
 * algorithms
 * Easy (67.55%)
 * Likes:    2751
 * Dislikes: 355
 * Total Accepted:    538.1K
 * Total Submissions: 796.7K
 * Testcase Example:  '["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]'
 *
 * Every valid email consists of a local name and a domain name, separated by
 * the '@' sign. Besides lowercase letters, the email may contain one or more
 * '.' or '+'.
 *
 *
 * For example, in "alice@leetcode.com", "alice" is the local name, and
 * "leetcode.com" is the domain name.
 *
 *
 * If you add periods '.' between some characters in the local name part of an
 * email address, mail sent there will be forwarded to the same address without
 * dots in the local name. Note that this rule does not apply to domain
 * names.
 *
 *
 * For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the
 * same email address.
 *
 *
 * If you add a plus '+' in the local name, everything after the first plus
 * sign will be ignored. This allows certain emails to be filtered. Note that
 * this rule does not apply to domain names.
 *
 *
 * For example, "m.y+name@email.com" will be forwarded to "my@email.com".
 *
 *
 * It is possible to use both of these rules at the same time.
 *
 * Given an array of strings emails where we send one email to each emails[i],
 * return the number of different addresses that actually receive mails.
 *
 *
 * Example 1:
 *
 *
 * Input: emails =
 * ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
 * Output: 2
 * Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually
 * receive mails.
 *
 *
 * Example 2:
 *
 *
 * Input: emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
 * Output: 3
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= emails.length <= 100
 * 1 <= emails[i].length <= 100
 * emails[i] consist of lowercase English letters, '+', '.' and '@'.
 * Each emails[i] contains exactly one '@' character.
 * All local and domain names are non-empty.
 * Local names do not start with a '+' character.
 * Domain names end with the ".com" suffix.
 * Domain names must contain at least one character before ".com" suffix.
 *
 *
 */
