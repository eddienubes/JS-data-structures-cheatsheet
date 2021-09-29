class BinaryTree {
    constructor() {
        this.head = null;
    }

    add(value) {
        if (!this.head) {
            this.head = new Node(value)

            return this.head;
        }

        let node = this.head;
        const newNode = new Node(value);

        while (node) {
            if (value < node.value) {
                if (!node.left) {
                    break;
                }

                node = node.left
            } else {
                if (!node.right) {
                    break;
                }

                node = node.right;
            }
        }

        if (value > node.value) {
            node.right = newNode;
        } else {
            node.left = newNode;
        }
    }

    print(head = this.head) {
        if (head === null) {
            return;
        }

        console.log(head.value);

        this.print(head.left);
        this.print(head.right);
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const tree = new BinaryTree();

tree.add(5);
tree.add(6);
tree.add(7);
tree.add(1);
tree.add(2);
tree.add(123);
tree.add(-56);
tree.add(-100);
tree.add(-10);

tree.print();