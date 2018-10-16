<<<<<<< HEAD
window.onload = function(){
    function* gen(){
        yield console.log("Peers");
        console.log("Bananas");
        console.log("Apple");
    }

    var myGen = gen();

    myGen.next();
    myGen.next();

=======
window.onload = function(){
    function* gen(){
        yield console.log("Peers");
        console.log("Bananas");
        console.log("Apple");
    }

    var myGen = gen();

    myGen.next();
    myGen.next();

>>>>>>> 371cc931208052f76d490bbcacba063234844a10
}