class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  print_list() {
    let result = "";
    let temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    console.log(result);
  }
}

function reverse(head) {
  let curr = head;
  let next = null;
  let prev = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  head = prev;

  return head;
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

const reorder = function (head) {
  let middle = reverse(findMiddle(head));
  let start = head;

  while (start.next && middle.next) {
    let temp = start.next;

    start.next = middle;
    middle = middle.next;

    start.next.next = temp;

    start = temp;
  }

  return head;
};

head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);
head.next.next.next.next.next = new Node(12);
reorder(head);
head.print_list();
