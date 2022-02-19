function Queue(){
	let collection = new Array();
	this.enqueue = function(value){
		collection.push(value);
		console.log("Pushed "+value+" into the queue");
	}

	this.dequeue = function(value){
		collection.shift();
		console.log("Dequeued an element from the queue");
	}

	this.front = function(){
		collection[0];
		console.log("The front element is ", collection[0]);
	}

	this.isEmpty = function(){
		return collection.length === 0;
	}

	this.size = function(){
		return collection.length;
	}
}

let q = new Queue();
q.enqueue(5);
q.enqueue(4);
console.log("The size of the queue is : ", q.size());
