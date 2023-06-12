class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  size = 0;

  enqueue(value) {
    const node = new Node(value);
    this.size++;
    if (!this.first) {
      if (!this.first) {
        this.first = node;
        this.last = node;

        return;
      }

      this.last.next = node;
      this.last = node;
    }
  }

  dequeue() {
    if (!this.first) return;

    this.size--;

    const result = this.first;

    this.first = this.first.next;

    if (!this.first) this.last = undefined;

    return result;
  }
}
