<<<<<<< HEAD
window.onload = function(){

   var log = {
       name: "Saqib Ali",
       age: 40,
       test(x){

           window.setInterval(() => {
               if(x > 0){
                   console.log(this.name + " has logged in the system");
                   x--;
               }
           }, 1000);
       }

   };
   log.test(5);

=======
window.onload = function(){

   var log = {
       name: "Saqib Ali",
       age: 40,
       test(x){

           window.setInterval(() => {
               if(x > 0){
                   console.log(this.name + " has logged in the system");
                   x--;
               }
           }, 1000);
       }

   };
   log.test(5);

>>>>>>> 371cc931208052f76d490bbcacba063234844a10
}