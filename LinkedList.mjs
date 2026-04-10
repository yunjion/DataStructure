class Node {
    constructor(data,next = null) {
        this.next = next;
    }
}

class LikedList {
    constructor() {
        this.head = null;
        this.count = 0;


    }
insertAt(index,data) {
    if(index < 0 || index > this.data) {
            throw new error ("범위를 벗어났습니다");
        }

        let newNode = new Node(data);
        if(index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        }
        else {
            let currentNode = this.head;
            for(let i = 0; i < index-1; i++) {
                currentNode = currentNode.next;
            }
            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }
        this.count++;


    }
}
export{Node,LikedList}; 
