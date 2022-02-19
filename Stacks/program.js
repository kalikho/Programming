function Stack(){
	this.count = 0;
	this.storage = {};

	this.push = function(value){
		this.count++;
		this.storage[this.count] = value;
		console.log("Pushed "+ value +" into the stack");
	}

	this.pop = function(value){
		console.log("Pop count value", this.count);
		let popped_value = this.storage[this.count];
		delete this.storage[this.count];
		this.count--;
		console.log("Popped "+ popped_value + " from the Stack");
	}

	this.peek = function(){
		let top = this.storage[this.count];
		console.log("Top most element is " +top+ " ");
	}

	this.size = function(){
		this.storage.length;
		console.log("Size of the Stack is " +this.count+ " ");
	}
}

var object = new Stack();
object.push(5);
object.push(4);
object.push(3);
object.push(2);
object.push(1);
object.peek();
object.size();
object.pop();
object.size();
object.push(7);
object.size();
