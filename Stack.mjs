import { LikedList } from "./LinkedList.mjs";

class Stack {
    constructor() {
        this.list = new LikedList();
    }

    push(data) { //데이터 참조
        this.list.insertAt(0,data);

    }

    pop() { //데이터 제거
        try {
          this.list.deleteAt(0);
        } catch(e) {
            return null;
        }
    }

    peek() {
        return this.list.getNodeAt(0);
    }

    isEmpty() {
        return (this.count === 0);
    }

} //Stack

export{Stack};
