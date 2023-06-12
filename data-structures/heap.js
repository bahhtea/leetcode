class BinaryHeap {
  constructor() {
    this.values = [];
  }

  get size() {
    return this.values.length;
  }

  #getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  #getChildIndex(index) {
    const firstChildIndex = 2 * index + 1;
    const secondChildIndex = 2 * index + 2;

    const firstChild = this.values[firstChildIndex];
    const secondChild = this.values[secondChildIndex];

    if (secondChild === undefined) return firstChildIndex;
    if (firstChild <= secondChild) return secondChildIndex;
    else return firstChildIndex;
  }

  #bubbleUp() {
    let childIndex = this.values.length - 1;
    let parentIndex = this.#getParentIndex(childIndex);

    while (parentIndex >= 0) {
      if (this.values[childIndex] > this.values[parentIndex]) {
        [this.values[childIndex], this.values[parentIndex]] = [
          this.values[parentIndex],
          this.values[childIndex],
        ];
      }

      childIndex = parentIndex;
      parentIndex = this.#getParentIndex(childIndex);
    }
  }

  #sinkDown() {
    let parentIndex = 0;

    while (parentIndex < this.values.length) {
      let childIndex = this.#getChildIndex(parentIndex);

      let parent = this.values[parentIndex];
      let child = this.values[childIndex];

      if (child && parent < child) {
        [this.values[parentIndex], this.values[childIndex]] = [
          this.values[childIndex],
          this.values[parentIndex],
        ];

        parentIndex = childIndex;
      } else break;
    }
  }

  insert(value) {
    this.values.push(value);
    this.#bubbleUp();
  }

  remove() {
    const last = this.values.length - 1;
    [this.values[0], this.values[last]] = [this.values[last], this.values[0]];

    const result = this.values.pop();

    this.#sinkDown();

    return result;
  }
}

const heap = new BinaryHeap();
heap.insert(5);
heap.insert(2);
heap.insert(7);
heap.insert(8);
heap.insert(12);
heap.insert(16);
heap.insert(55);
heap.insert(1);

heap.remove();
heap.remove();

console.log(heap.values);
