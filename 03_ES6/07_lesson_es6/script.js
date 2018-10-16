window.onload = function(){

    var str = "Good Bye ";
    console.log(str.repeat(5));

    //Starts with
    console.log(str.startsWith("Good"));

    //Starts with
    console.log(str.startsWith("Bye"));

    //Starts checking at a given position
    console.log(str.startsWith("Bye", 5));

    //Ends with
    console.log(str.endsWith("Bye"));

    //Contains in
    console.log(str.includes("B"));

}