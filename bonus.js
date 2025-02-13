function strictEqualityCheck(a, b) {
    if (a === b) {
        return `${a} and ${b} are strictly equal.`;
    } else {
        return `${a} and ${b} are not strictly equal because one is a ${typeof a} and the other is a ${typeof b}.`;
    }
}

console.log(strictEqualityCheck(5, "5")); 

