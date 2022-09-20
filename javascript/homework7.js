//var ourName
//console.log(ourName)
//ourName="uma"
//console.log(ourName)


//1.sum of two numbers
//function sum(a,b){
	//return a+b;
//}
//console.log(sum(7,2));



// 2 divide
//function divide(a,b){
	//return a/b;
//}
//console.log(divide(6,2));

// 3..function fToC() 
//{
  //var fTemp = fahrenheit;
  //var Cel = (fTemp - 32) * 5 / 9;
//}
    //console.log(fToC);

//4... divisible by 55
//function divisibleBy55(num){
  //return (num % 55 === 0) ? true : false
//}
//console.log(divisibleBy55(110))





// 5..length of string
//const checkLength="hello world!";
//console.log(checkLength.length);




//6.. concation of strings
  //let str1="cat";
  //let str2=str1.concat(' dog');
//console.log(str2);




//let array_Clone = function(arra1) {
    //return arra1.slice(0);
      // };
   //console.log(array_Clone([1, 2, 4, 0]));
   //console.log(array_Clone([1, 2, [4, 0]]));


  //2( let arr1=[1,2,3,4,5,6];
   //console.log(arr1)
   //let arr2=[...arr1];
   //console.log(arr2))

   //const type1="function";
   //const type2=["checktype"];
   //console.log(typeof type1);
   //console.log(typeof type2);


  //const user={
   // name:'jack',
    //email:"jack@gmail.com",
    //age:25
  //}
  
  //function loopThroughObject(obj) {
    //for (const property in obj) {
      //console.log('key is: ${property}')
      //console.log('value is: ${property.value}')

    //}
  //}
  //loopThroughObject(user)

//const arr=['h','e','l','l','o'];
//rr.reverse();
//console.log(arr)
//const pass=[32,47,1,5,50,9,10];
//pass.sort(function(a,b){return a-b});
//console.log(pass[6])
//const arr=[1,2,3,4,5,6,7];





//const arr=[315, 50, 314, 684, 100, 648, 132, 50, 98, 45];
//function findMaxProfit(arr){
  //let maxProfit=0;
  //let maxPrice=arr[0];
  //for(let i=1;i<arr.length;i++){
    //for(let j=i+1;j<arr.length;j++){
    //let  initial= arr[i];
    //if(initial<maxPrice){
      //maxPrice=initial}
      //let profit=initial-maxPrice;
      //maxProfit=Math.max(profit,maxProfit);
    //}
//return maxProfit;
  //}
//console.log(findMaxProfit(arr))
// function trib()
// {
//    let x=4;
  
//   if (x <=4)
//         return x;
//     return  trib(x-1) + trib(x-2) + trib(x-3)  ;
// }
//  console.log(trib())
//  function nthTrib(n) {
//    //let n = n+1;
 
//  	if(n <= n-2 ) 
  
//    {return n -1};
  
//  return nthTrib(n - 1) + nthTrib(n - 2) + nthTrib(n - 3);
// }
//  //console.log(nthTrib(n))
//  let n=4
//  console.log(nthTrib(n))



//  function stairCase(n){

//        if (n ==2)
       
//        {   
       
//         return 2;
      
//       }
       
//        else if (n==3)
        
//        {
        
//       return n

//        } 
        
//       else (n < 2)
//       {

//       return  stairCase(n - 2) + stairCase(n - 1);
    
//       }
   
//   }
 
//   //let n = 2;
 
//  console.log(stairCase(3))

// function trib(n)
// {
//     //let n=4 
//   if (n == 4)
        
//    return n;
    
//    else
//       return  trib(n-1) + trib(n-2) + trib(n-3)  ;

// }
 
// console.log(trib(4))


// function numb (sum){
//   // var sum = 0;
//   // while (n != 0) {
//   //     sum = sum + n % 10;
//   //     n = parseInt(n / 10);
//   // }
//   // return sum;
//   // }
// let sum=0;
// if(n==0) {
//   sum=sum+n%10;

// }

       
// console.log(numb (38))



// function addAllDigits(n)

// {
    
//     for(int i=0; i<s.length(); i++){
//         sum = sum + (s.charAt(i)-'0');
//     }
 
//     if(sum < 10){
//         return sum;
//     }else{
//         return addDigits(sum);
//     }
// }


// add = () => {
// name:'ana'
// }
// function ad({name,id}){
//   const output='name'+ 'id';
// }
// console.log(output)


// function arr=[1,2,3,4];




// }

// console.log(a);


// console.log(b);


// [a, b, ...rest] = [1,2,3,4];


// console.log(rest);

//        let add = () => {
//         console.log('ana');
//         return 1;
//       }

// console.log(add);



//  let destructArray=(a,b,c,d) => (1,2,3,4) >={

//  };


//   //let nums=[1,2,3,4];

// console.log(destructArray(a,b)) 

// hello =()=>{
//   return 'hello world';
// }
// console.log(hello())



//  const eP = (inputObj) => {

//   return {

//     ...inputObj,

//     id: 1

//      };
//  }
 
  //console.log(eP({name:'Ana'}))
 //const desArr=[1,2,3,4];
//  const destructArray = () => {
   
//   return [1,2,3,4];
//   //const [a,b,c,d] = destructArray();
// }

// const [a,b] = destructArray();
// console.log(a);
// console.log(b);

 //console.log(destructArray(a,b))




// const user = {

// 	name: "Jake",

//   address: {

//   	mailing: "123 Main St",

//     shipping: {

//     	cart: true

//     }

//   }

// }

// const checker =() =>{
//   return{
//     console.log(checker())

//   }
// }
// const string = "address.shipping.cart"



//  function Animal(color,eyes,legs){
//    this.color=color;
//    this.eyes=eyes;
//    this.legs=legs;
//  }
//    this.eat=
//   //  }
 
//   //  this.sleep=function(){
//   //    console.log(sleep)
//   //  }
// var Animal=new Animal('black',2,4);
// //  console.log(Animal)


// const user = {
// name: "Jake",
// address: {
// mailing: "123 Main St",
// shipping: {
// cart: true
// }
// }
// }
// const string = "address.shipping.cart"

// function traverseObject(str1,str2){
// const strArr= str.split(".")
// let o
// strArr.forEach(key =>{
//   if(obj[key]){
//     o=obj[key]
//   }else{
//     console.log('$(key) does not exist on the object')
//   }
// })
// }
// console.log(traverseObject(user,string))

// const destructArray=()=>{
// const [a,b]=Array
// return[a,b]

// }
// console.log(destructArray)





// function Animal(name,color,eyes,legs){
   
//       this.name=name;
//       this.color=color;
//       this.eyes=eyes;
//       this.legs=legs;
//     }
//     this.eat=function(){
//     console.log(eat)
//     }
//     this.sleep=function(){
//     return 'i can sleep in the night'
//     }
   
//    const animalA=new Animal('tiger','black',2,4);
   
//    const animalB=new Animal('lion','white',2,4);
   
//    const animalC=new Animal('hippo','black',2,4);
  
//    console.log(animalA)
  
//    console.log(animalB)
  
//    console.log(animalC)

 

  // console.log(animalA.eat())
  // console.log(animalB.sleep())




//   function Bird(color,eyes,legs){
//     this.color=color;
//     this.eyes=eyes;
//     this.legs=legs;
//   }
//   // this.eat=function(){
//   // console.log(eat)
//   // }
//   // this.sleep=function(){
//   // return 'i can sleep in the night'
//   // }
//   this.setName=function(name){
//     this.name=name
//   }
//   this.getName=function(){
//     return this.name
//   }

//  const birdA=new Bird('white',2,2);
//  const birdB=new Bird('green',2,2);
//  console.log(birdA)
//  console.log(birdB)
//  birdB.name='parrot'
//  console.log(birdB)




const array=[1,2,3,4,5,6]
const arr=array[0]
const arr1=array.length-1
//console.log(arr)
console.log(arr1)
