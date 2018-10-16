window.onload = function(){
    function* gen(){
        var x = yield "Peers";
        var y = yield "Bananas";
        return x + y;
    }


    // Sending values to the generator
    var myGen = gen();

    console.log(myGen.next());
    console.log(myGen.next(10));
    console.log(myGen.next(5));


}