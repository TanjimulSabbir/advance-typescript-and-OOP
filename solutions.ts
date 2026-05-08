// =======================
// Problem 1
// =======================
function filterEvenNumbers(arr: number[]): number[] {
    const result: number[] = [];
 
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] % 2 === 0) {
            result[result.length] = arr[i];
        }
    }

    return result;
}
