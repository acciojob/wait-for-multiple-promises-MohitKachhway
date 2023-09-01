//your JS code here. If required.

let prom1 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		let t1=performance.now();
		resolve(t1);
	},1000)
})
let prom2 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		let t2=performance.now();
		resolve(t2);
	},1500)
})

let prom3 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		let t3=performance.now();
		resolve(t3);
	},2000)
})

let prom = Promise.all([prom1,prom2,prom3]);
prom.then((arr)=>{
	let tbody = document.getElementById("output");
	let sum=0;
	tbody.children[0].remove();
	for (let i = 0; i <=arr.length; i++) {
		
		let newRow = document.createElement("tr");
		let col1= document.createElement("td");
		let col2= document.createElement("td");
		if(i>=3){
			col1.innerText=`Total`
		    col2.innerText=sum.toFixed(3);
			newRow.appendChild(col1);
		    newRow.appendChild(col2);
		    tbody.appendChild(newRow);
			return ;
		}
		sum+=arr[i];
		col1.innerText=`Promise${i+1}`
		col2.innerText=arr[i];
		newRow.appendChild(col1);
		newRow.appendChild(col2);
		tbody.appendChild(newRow);
	}
})