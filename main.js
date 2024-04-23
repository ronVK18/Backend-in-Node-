var arr=[1,2,3,4,5,4]
arr.forEach(function(val){
  console.log(val)

})
var arr2=arr.map(function(val){
  return val*2
});
arr2=arr.filter(function(val){
  return val>3 // return new array with elementsgreater than 3 
})
arr.find(function(val){
  if(val==4) return val; // find only the first matching element
}) 
console.log(arr.indexOf(5))
console.log(arr2)
console.log(arr)