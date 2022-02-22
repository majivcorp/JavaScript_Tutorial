function my_hamming_dna(param_1, param_2) {

    if (param_1.length != param_2.length) {
        return -1;
    }

    var diffCount = 0; 

    for (var i = 0; i < param_1.length; i++) {
        if (param_1[i] != param_2[i]) {
            diffCount++;
        }
    }

    return diffCount;

}

/*console.log(my_hamming_dna("GGACTGA" && "GGACTGA"));

console.log(my_hamming_dna("ACCAGGG" && "ACTATGG"));

console.log(my_hamming_dna("GGACGGATTCTG" && "AGG"));

console.log(my_hamming_dna("" && ""));*/