// Node 클래스
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// LinkedList 클래스
class LikedList {
    constructor() {
        this.head = null;
        this.count = 0;
    }

    // ======================
    // 전체 출력
    // ======================
    printAll() {
        let currentNode = this.head;
        let text = "[";

        while (currentNode != null) {
            text += currentNode.data;
            currentNode = currentNode.next;

            if (currentNode != null) text += ",";
        }

        text += "]";
        console.log(text);
    }

    // ======================
    // 초기화
    // ======================
    clear() {
        this.head = null;
        this.count = 0;
    }

    // ======================
    // index 위치 삽입
    // ======================
    insertAt(index, data) {
        if (index < 0 || index > this.count) {
            throw new Error("범위를 벗어났습니다");
        }

        let newNode = new Node(data);

        // 맨 앞 삽입
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        }
        // 중간 삽입
        else {
            let currentNode = this.head;

            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            //시험 나옴 
            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }

        this.count++;
    }

    // ======================
    // 맨 뒤 삽입
    // ======================
    insertLast(data) {
        let newNode = new Node(data);

        // 비어있을 때
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            let currentNode = this.head;

            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }

            currentNode.next = newNode;
        }

        this.count++;
    }

    // ======================
    // index 위치 삭제
    // ======================
    deleteAt(index) {
    if (index < 0 || index >= this.count) {
        throw new Error("범위를 벗어났습니다");
    }

    let deleteNode;

    // 맨 앞 삭제
    if (index === 0) {
        deleteNode = this.head;
        this.head = this.head.next;
    }
    else {
        let currentNode = this.head;

        for (let i = 0; i < index - 1; i++) {
            currentNode = currentNode.next;
        }

        deleteNode = currentNode.next;
        currentNode.next = deleteNode.next;
    }

    this.count--;
    return deleteNode.data;
}

    deleteLast(){
        this.deleteAt(this.deleteAt);
    }
    // ======================
    // index 데이터 가져오기
    // ======================
    get(index) {
        if (index < 0 || index >= this.count) {
            throw new Error("범위를 벗어났습니다");
        }

        let currentNode = this.head;

        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode.data;
    }

    // ======================
    // 크기 반환
    // ======================
    size() {
        return this.count;
    }
}

export { Node, LikedList };