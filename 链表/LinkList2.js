/** 
 * 双向链表的实现
 * 双向链表其实和单向链表原理差不多
 * 只不过多了前驱指针
*/

function LList(){
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findLast = findLast;
    this.dispReverse = dispReverse;
}

function find(item){
    var currentNode = this.head;
    while(currentNode.elem != item){
        currentNode = currentNode.next;
    }
    return currentNode;
}

function Node(elem){
    this.elem = elem;
    this.next = null;
    this.pre = null;
}

function insert(newElem,item){
    var newNode = new Node(newElem);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.pre = current;
    current.next = newNode;
}

function remove(item){
    var currentNode = this.find(item);
    if(currentNode.next != null){
        currentNode.pre.next = currentNode.next;
        currentNode.next.pre = currentNode.pre;
        currentNode.next = null;
        currentNode.pre = null;
    }
}

function display(){
    var currentNode = this.head;
    while(currentNode.next != null){
        console.log(currentNode.next.elem);
        currentNode = currentNode.next;
    }
}

//工具方法查找链表中尾节点
function findLast(){
    var currentNode = this.head;
    while(currentNode.next != null){
        currentNode = currentNode.next;
    }
    return currentNode;
}

//反序显示链表中的元素
function dispReverse(){
    var currentNode = this.head;
    currentNode = this.findLast();
    while( currentNode.pre != null){
        console.log(currentNode.elem);
        currentNode = currentNode.pre;
    }
}