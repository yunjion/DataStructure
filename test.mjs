import { LikedList } from "./LinkedList.mjs";

let list = new LikedList();

console.log("==== insertAt() 호출 ====");
list.insertAt(0,0);
list.insertAt(1,1);
list.insertAt(2,2);
list.insertAt(3,3);
//list.insertAt(4,4);
//list.insertAt(3,99);
list.printAll();
//list.insertAt(5,99);
list.insertLast(99);
list.printAll();

console.log("");

console.log("==== clear() 호출 ====");
list.clear();
list.printAll();

console.log("");

console.log("=== insertLast() 호출 ===");
list.insertLast(77);
list.insertLast(78);
list.insertLast(79);
list.insertLast(80);
list.printAll();


console.log("");

console.log("==== deleteAt() 호출 ====");
list.deleteAt(2);
list.printAll();
list.insertLast(81);
list.printAll();
//list.deleteAt(3);
list.deleteLast(3);
list.printAll();

console.log("");

console.log("==== get() 호출 ====");
