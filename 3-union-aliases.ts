type ConversionDescriptor = "as-number" | "as-text";

function combine(
    n1: number | string,
    n2: number | string,
    resultConversion: ConversionDescriptor
) {
    let result;
    if (
        (typeof n1 === "number" && typeof n2 === "number") ||
        resultConversion === "as-number"
    ) {
        result = +n1 + +n2;
    } else {
        result = n1.toString() + n2.toString();
    }

    return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
