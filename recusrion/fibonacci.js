function fibsRec(num) {

    if (num === 1) return [0];
    if (num === 2) return [0, 1];

    const sequence = fibsRec(num-1);
    const nextVal = sequence[sequence.length-1] + sequence[sequence.length-2];
    sequence.push(nextVal);

    
    return sequence;

}

ans = fibsRec(10);
console.log(ans);
