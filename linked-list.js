class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
    }

    push(value) {
        if (this.size === 0) {
            this.head = new Node(value);

            this.size += 1;
            return this.head;
        }

        const currentNode = this.traverseList();

        currentNode.next = new Node(value);

        this.size += 1;

        return currentNode.next;
    }

    getSize() {
        return this.size;
    }

    getList() {
        let result = [];

        this.traverseList((currentNode) => result.push(currentNode.value));

        return result;
    }

    traverseList(cb) {
        let currentNode = this.head;

        while (currentNode.next) {
            if (cb) {
                cb(currentNode);
            }

            currentNode = currentNode.next;
        }

        return currentNode;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const list = new LinkedList();

list.push(5);
list.push('asd');
list.push(123);
list.push(['asd']);

console.log(list.getList());