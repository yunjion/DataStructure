class Queue {
    constructor() {
        this.items = [];
    }

    enque(data) {
        this.items.push(data);
    }

    deque() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    }

    front() {
        return this.isEmpty() ? null : this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}

export { Queue };