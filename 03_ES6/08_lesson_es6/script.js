window.onload = function(){

   var name = "Ali";
   var age = 40;

   var log = {
       name: name,
       age: age
   }
   console.log(log);


   // In ES6 we can do like the following

    var log1 = {
        name, age,
        print(){
            console.log(name);
    }
    }
    console.log(log1.print());


}