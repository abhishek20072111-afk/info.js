/*const student={
    name:"anu",
    age:21
};
const place={
    city:"palakkad",
    house:"pppppppp"
};
const newname={
    ...student,
    ...place
};
console.log(newname);

const std={
    name:"anu",
    age:21
};
const {name,age}=std;
console.log(name);
console.log(age);

const sd=["10","10","30","40"]
const [first,second,third,forth]=sd;
console.log(first);
console.log(second);
console.log(third);
console.log(forth);*/


function calculatefinalprice(cartitems,membershiptier){
    let total=0;

for(let  price  of cartitems){
total+=price;
}
if (membershiptier === "gold") {
     total=total * 0.20;
 } 
    else if (membershiptier=== "silver") {
        total=total * 0.10;
        
    }
    if(total>100){
       total= total-15;
        
    }
return total;
}

console.log(calculatefinalprice([50,40,20],"gold"));
