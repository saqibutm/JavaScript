window.onload = function(){
    function* gen(){
        yield console.log("Peers");
        console.log("Bananas");
        console.log("Apple");
    }

    var myGen = gen();

    myGen.next();
    myGen.next();

}