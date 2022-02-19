function Node(element){
	this.data = element;
	this.link = null;
}

function LinkedList(){
	this.length = 0;
	this.head = null;

	this.insert = function(node){
		if(this.head == null){
			this.head = node;
		}else{
			let ptr = this.head;
			while(ptr.link){
				ptr = ptr.link;
			}
			ptr.link = node;
			this.length++;
			console.log("Inserted " +node.data+ " into the linked list");
		}
	}

	this.traverse = function(){
		let ptr = this.head;
		while(ptr){
			console.log(ptr.data +"->");
			ptr = ptr.link;
		}
	}

	this.delete = function(item){
		let ptr = this.head;
		let ptr_one_step_back;
		while(ptr){
			if(ptr.data == item){
		   		 ptr_one_step_back.link = ptr.link;
				 delete ptr;
				 console.log("Deleted "+item+" successfully");
				 break;
			}
			ptr_one_step_back = ptr;
			ptr = ptr.link;
		}

	}

	this.indexOf = function(item){
		let ptr = this.head;
		let index = 1;
		while(ptr){
			if(ptr.data == item){
				console.log("Element "+item+ " is found to be at index "+index);
				break;
			}
			index++;
			ptr = ptr.link;
		}
	}
}

llObject = new LinkedList();
llObject.insert(new Node(1));
llObject.insert(new Node(5));
llObject.insert(new Node(6));
llObject.delete(5);
llObject.traverse();
llObject.indexOf(6);
