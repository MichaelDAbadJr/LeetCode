class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  display() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }

  // Function to add two numbers represented by linked 
 //  this is 59 % better than rest
  static addTwoNumbers(l1, l2) {
    let carry = 0;
    let previousNode = new Node(0); // Remove the redundant initialization
    const headNode = previousNode; // Initialize a headNode to a new Node
    while (l1 !== null || l2 !== null || carry) {
      // Check for null explicitly
      let val1 = 0;
      let val2 = 0;
      if (l1 !== null) {
        val1 = l1.value;
        l1 = l1.next;
      }
      if (l2 !== null) {
        val2 = l2.value;
        l2 = l2.next;
      }
      const sum = val1 + val2 + carry;
      carry = Math.floor(sum / 10); // sum > 9 ? 1 : 0
      const digit = sum % 10;
      // console.log(digit);
      // console.log(`${val1} + ${val2} = ${sum}`);
      const currentNode = new Node(digit);
      previousNode.next = currentNode;
      previousNode = currentNode;
    }
    return headNode.next;
  }
}

// Creating two linked lists
let list1 = new LinkedList();
let list2 = new LinkedList();

// Adding elements to the first linked list
list1.addNode(2);
list1.addNode(4);
list1.addNode(3);

// Adding elements to the second linked list
list2.addNode(5);
list2.addNode(6);
list2.addNode(4);

// Displaying the elements in each linked list
console.log('Linked List 1:');
list1.display();

console.log('\nLinked List 2:');
list2.display();

// Adding two numbers represented by linked lists
const resultNode = LinkedList.addTwoNumbers(list1.head, list2.head); // Use list1.hed and list2.head instead of just list1/2

// Creating a new linked list for the result
const resultList = new LinkedList();
resultList.head = resultNode;

// Displaying the result
console.log('\nLinked List Result:');
resultList.display();


/* Youtuber implementation !!!!!!!!!! worked 70% btter than rest
let carry = 0;
    let previousNode = new ListNode();
    const headNode = previousNode;
    while (l1 || l2 || carry) {
        let val1 = 0;
        let val2 = 0;
        if (l1) {
            val1 = l1.val;
            l1 = l1.next;
        }
        if (l2) {
            val2 = l2.val;
            l2 = l2.next;
        }
        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10) // sum > 9 ? 1 : 0
        const digit = sum % 10;
        // console.log(digit);
       // console.log(`${val1} + ${val2} = ${sum}`);
       const currentNode = new ListNode(digit);
       previousNode.next = currentNode;
       previousNode = currentNode;
    }
    return headNode.next;
*/