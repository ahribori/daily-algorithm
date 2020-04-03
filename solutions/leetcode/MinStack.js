class MinStack {
  constructor() {
    this.stack = [];
    this.minDeque = [];
  }

  push(x) {
    this.stack.push(x);
    if (this.minDeque.length === 0 || this.minDeque[0] >= x) {
      this.minDeque.unshift(x);
    }
  }

  pop() {
    if (this.stack.pop() === this.minDeque[0]) {
      this.minDeque.shift();
    }
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minDeque[0];
  }
}

const stack = new MinStack();

stack.push(-2);
stack.push(0);
stack.push(-3);
console.log(stack.getMin());
stack.pop();
console.log(stack.top());
