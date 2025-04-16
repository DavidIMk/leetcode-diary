/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let result = new ListNode()
  let res = result;
  let total = 0, carry = 0;

  while (l1 || l2 || carry) {
      total = carry;

      if (l1) {
          total += l1.val;
          l1 = l1.next
      }

      if (l2) {
          total += l2.val;
          l2 = l2.next
      }

      let num = total % 10;
      carry = total >= 10 ? 1 : 0;
      result.next = new ListNode(num)
      result = result.next
  }
  return res.next
};