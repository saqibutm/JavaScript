<<<<<<< HEAD
window.onload = function(){

    // Sets are used to remove duplicates
    var names = new Set();

    names.add("One").add("Two").add("Three").add("One");
    console.log(names);
    console.log(names.size);
    //names.clear();
    names.delete("Two");

    console.log(names.has("One"));

    console.log(names);

    var nums = [1,2,3,4,5,5,1,2,3];

    var refine = new Set(nums);

    console.log(refine);

    nums = [...refine];

    console.log(nums);



=======
window.onload = function(){

    // Sets are used to remove duplicates
    var names = new Set();

    names.add("One").add("Two").add("Three").add("One");
    console.log(names);
    console.log(names.size);
    //names.clear();
    names.delete("Two");

    console.log(names.has("One"));

    console.log(names);

    var nums = [1,2,3,4,5,5,1,2,3];

    var refine = new Set(nums);

    console.log(refine);

    nums = [...refine];

    console.log(nums);



>>>>>>> 371cc931208052f76d490bbcacba063234844a10
}