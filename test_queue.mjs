import { Queue } from "./Queue.mjs";

let queue = new Queue();
console.log("==== enque() 네 번 호출 ====");
queue.enque(1);
queue.enque(2);
queue.enque(3);
queue.enque(4);
console.log(queue);