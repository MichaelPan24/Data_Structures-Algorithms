/**
 * 
 * 单向链表的实现 
 */

//实现一个节点类,指针初始化指向null
function Node(elem){
    this.elem = elem;
    this.next = null;
}

//实现链表类,初始化头节点指针指向null
function LList(){
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findPreviousNode = findPreviousNode;
}

//实现find方法
function find(elem){
    var currentNode = this.head;
    while(elem != currentNode.elem){
        currentNode = currentNode.next;
    }
    return currentNode;
}

//实现插入方法
function insert(newElement,item){
    var newNode = new Node(newElement);
    var item = this.find(item);
    newNode.next = item.next;
    item.next = newNode;
}

//实现展示链表
function display(){
    var currentNode = this.head;
    while(currentNode.next != null){
        console.log(currentNode.next.elem);
        currentNode = currentNode.next;
    }
}

/** 
 * 实现remove方法,首先需要找到待删除元素的上一个节点,
 * 将这个元素的指针指向待删除的节点下一个节点
 * 并将待删除结点的指针指向null
*/

//实现查找待删除元素的上一个节点
function findPreviousNode(elem){
    var currentNode = this.head;
    while((currentNode.next != null) && (currentNode.next.elem != elem)){
        currentNode = currentNode.next;
    }
    return currentNode;
}

function remove(elem){
    var previousNode = this.findPreviousNode(elem);
    if(previousNode != null){
        previousNode.next = previousNode.next.next;
    }
}


