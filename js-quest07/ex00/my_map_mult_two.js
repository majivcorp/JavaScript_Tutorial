//function my_map_mult_two(param_1) {
    //const map1 = param_1.map(x => x * 2);
    //return map1;
//}

// Code above was done with the use of Arrow function expressions "=>", as opposed to traditional function expression.
// soucre was from ~https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions~
function my_map_mult_two(param_1) {
    const map1 = param_1.map(function(x) {
        return x * 2;
    });
    return map1;
}