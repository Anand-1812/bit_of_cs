class ListNode {
    constructor(val, next=null) {
        this.val = val;
        this.next = next;
    }

    static traverse(head) {
        while (head != null) {
            process.stdout.write(`(${head.val}) -> `);
            head = head.next;
        }
        console.log("NULL");
    }

    static size(head) {
        let count = 0;
        let curr = head;
        while (curr != null) {
            count += 1;
            curr = curr.next;
        }

        return count;
    }

    static headValue(head) {
        return head.val;
    }

    static tailValue(head) {
        let curr = head;
        while (curr.next != null) {
            curr = curr.next;
        }
        return curr.val;
    }

    static findValue(head, x) {
        let curr = head;
        while (curr != null) {
            if (curr.val === x) {
                return true;
            }
            curr = curr.next;
        }
        return false;
    }
}

let node1 = new ListNode(1);
let node2 = new ListNode(2, node1);
let node3 = new ListNode(3, node2);
let node4 = new ListNode(4, node3);

// Traverse the list
ListNode.traverse(node4);

// get the size of list
console.log(ListNode.size(node4));

// get the value of head of the list
console.log(ListNode.headValue(node4));

// get the tail value of list
console.log(ListNode.tailValue(node4));

// checks contain value
console.log(`It contains i.e. ${ListNode.findValue(node4, 2)}`);
