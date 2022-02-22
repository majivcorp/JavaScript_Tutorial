//var old = [[-1,-1,2],[-1,0,1],[-1,-1,2],[-1,0,1],[-1,-1,2],[-1,0,1],[-1,0,1]], n = [];
//Source: https://stackoverflow.com/questions/44014799/javascript-how-to-remove-duplicate-arrays-inside-array-of-arrays

function my_array_uniq(old) {
    const r = old.filter((t={},a=>!(t[a]=a in t)));
    return r;
}
