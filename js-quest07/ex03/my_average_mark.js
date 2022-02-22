function my_average_mark(hasharray) {
    if (hasharray.length < 1){
        return [];
    }
    

    for (var i=0; i < hasharray.length; i++) {
        let totalnum = 0;
        hasharray.map(x => totalnum += x["integer"]);
        avg = totalnum/hasharray.length; 
        a = avg.toFixed(1);
    }
    return a;
}

console.log(my_average_mark(hasharray))

    //var Avgmarks = 0;
    /*for (var i=0; i < hasharray.length; i++) {
        Avgmarks += hasharray[i][1]; 
    }
    var avg = (Avgmarks/hasharray.length); 
    return avg;*/