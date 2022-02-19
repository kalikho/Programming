function PriorityQueue(){
	 this.collections = new Array();
	this.enqueue = function(element){
		if(this.collections.length === 0){
		this.collections.push(element);
		}else{
		  let added = false;
		   for(let i=0; i<this.collections.length;i++){
			if(element[1] < this.collections[i][1]){
				added = true;
				this.collections.splice(i,0,element);
				break;
			}	
		   }
		   if(!added)
			this.collections.push(element);
		}
	}

	this.print = function(){
		console.log(this.collections);
	}
}

priorityObject = new PriorityQueue();
priorityObject.enqueue(["Breakfast",2]);
priorityObject.enqueue(["Dinner",1]);
priorityObject.print()
