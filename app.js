
let arr1=['Aysun, 2004','Nezrin, 2001','Xedice, 2005','Nigar, 1996'];

let numArray=arr1.map(item=>{
   return item.split(",")[1];
}).sort((a,b)=>{
    return a-b;
})

let namesArray=arr1.map(item=>{
    return item.split(",")[0];
})

let sumArray=namesArray.map((names,index)=>{
    return names+","+numArray[index];
})

console.log(sumArray);                  //Task1

console.log("-----------------------------------");

let arr2=[2,5,3,24,13,7,42,21,34];
let oddNumber=0;
let evenNumber=0;
for(let i=0; i<arr2.length; i++){
    if (arr2[i]%2==0) {
        evenNumber++;
    }else if(arr2[i]%2!=0){
        oddNumber++;
    }
}
console.log(oddNumber);
console.log(evenNumber);                //Task2-method1

console.log("------------------------------------");


evenCount=0;
oddCount=0;
arr2.forEach((item)=>{
    if (item%2==0) {
        evenCount++;
    } else if(item%2!==0) {
        oddCount++;
    }
})

console.log(oddCount);
console.log(evenCount);                 //Task2-method2




