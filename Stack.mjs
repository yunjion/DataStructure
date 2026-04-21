import { LikedList } from "./LinkedList.mjs";

class Stack {
    constructor() {
        this.list = new LikedList();
    }

    push(data) {
        this.list.insertAt(0, data);
    }

    pop() {
        try {
            return this.list.deleteAt(0); // ✅ return 필수
        } catch(e) {
            return null;
        }
    }

    peek() {
        return this.list.getNodeAt(0);
    }

    isEmpty() {
        return (this.list.count === 0); // ✅ this.list.count
    }
}

export { Stack }; // ✅ 반드시 파일 맨 아래에 있어야 함