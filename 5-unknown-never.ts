export {}

let userInput: unknown; // not same as any
let userName: string;

userInput = 5;
userInput = "something";
if (typeof userInput === "string") {
    userName = userInput;
}

// userName = userInput; // doesnt work with unknown but works with any

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}

try {
    generateError("An error occurred", 500);
} catch (err) {
    console.log(err);
}
