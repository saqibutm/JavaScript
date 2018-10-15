window.onload = function(){
  var fruits = ["Apple", "Banana", "Orange"];
  var vege = ["Potato", "Tomato", ...fruits]
  console.log(vege);

  var nums = [1,2,3];

  function addNums(a,b,c){
      console.log(a+b+c);
  }

  addNums(...nums);


}