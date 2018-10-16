<<<<<<< HEAD
window.onload = function(){
  var items = document.getElementsByTagName("li");

  for (let x = 0; x <items.length; x++) {
      items[x].onclick = function(){
          console.log(x);
      }
  }

=======
window.onload = function(){
  var items = document.getElementsByTagName("li");

  for (let x = 0; x <items.length; x++) {
      items[x].onclick = function(){
          console.log(x);
      }
  }

>>>>>>> 371cc931208052f76d490bbcacba063234844a10
}