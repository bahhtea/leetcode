class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function findMiddle(head) {
  let slow = head;
  let fast = head.next;

  while (fast) {
    slow = slow.next;
    fast = fast.next ? fast.next.next : null;
  }

  return slow;
}

function reverseInPlace(head) {
  let prev = null;
  let next = null;
  let current = head;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  head = prev;
  return head;
}

const is_palindromic_linked_list = function (head) {
  const middle = reverseInPlace(findMiddle(head));

  let first = head;
  let second = middle;

  let result = true;

  while (first.next && second.next) {
    if (first.value !== second.value) {
      result = false;
    }
    first = first.next;
    second = second.next;
  }

  reverseInPlace(middle);

  return result;
};

head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(2);

console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);

head.next.next.next.next.next = new Node(2);

console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);
