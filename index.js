const input = document.getElementById("input1")

function reverseString(str) {
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value;
    const reverse = reverseString(value)

    if (value === reverse) {
        alert("PALINDROME!")
    } else {
        alert("Not a Palindrome...")
    }

    input.value = "";
}