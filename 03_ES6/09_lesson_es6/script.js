<<<<<<< HEAD
window.onload = function(){

   var log = {
       name: "Saqib Ali",
       age: 40,
       test(x){
           var _this = this;
           window.setInterval(function(){
               if(x > 0){
                   console.log(_this.name + " has logged in the system");
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
           var _this = this;
           window.setInterval(function(){
               if(x > 0){
                   console.log(_this.name + " has logged in the system");
               }
           }, 1000);
       }

   };
   log.test(5);

>>>>>>> 371cc931208052f76d490bbcacba063234844a10
}