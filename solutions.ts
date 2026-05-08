// =======================
// Problem 1
// =======================
function filterEvenNumbers(arr: number[]): number[] {
    const result: number[] = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i]! % 2 === 0) {
            result[result.length] = arr[i]!;
        }
    }

    return result;
}

// =======================
// Problem 2
// =======================
function reverseString(str: string): string {
    let reversed: string = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i]!;
    }

    return reversed;
}

console.log(reverseString("type"));