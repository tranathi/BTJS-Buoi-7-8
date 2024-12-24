let array = [];
function updateArray() {
    const input = document.getElementById("arrayInput").value;
    array = input.split(",").map(Number);
    displayResult(`Updated array: [${array}]`);
}

function displayResult(message) {
    document.getElementById("result").innerText = message;
}

function sumPositive() {
    const sum = array.filter(num => num > 0).reduce((acc, val) => acc + val, 0);
    displayResult(`Tổng số dương: ${sum}`);
}

function countPositive() {
    const count = array.filter(num => num > 0).length;
    displayResult(`Đếm số dương: ${count}`);
}

function findMin() {
    const min = Math.min(...array);
    displayResult(`Số nhỏ nhất ${min}`);
}

function findMinPositive() {
    const positiveNumbers = array.filter(num => num > 0);
    const minPositive = positiveNumbers.length ? Math.min(...positiveNumbers) : -1;
    displayResult(`Số dương nhỏ nhất: ${minPositive}`);
}

function findLastEven() {
    const lastEven = array.slice().reverse().find(num => num % 2 === 0);
    displayResult(`Số chẵn cuối cùng: ${lastEven !== undefined ? lastEven : -1}`);
}

function swapValues() {
    const pos1 = prompt("Nhập vị trí thứ 1:");
    const pos2 = prompt("Nhập vị trí thứ 2:");
    if (pos1 >= 0 && pos2 >= 0 && pos1 < array.length && pos2 < array.length) {
        [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
        displayResult(`Đổi chỗ: [${array}]`);
    } else {
        displayResult("Không có giá trị ở vị trí vừa nhập.");
    }
}

function sortArray() {
    array.sort((a, b) => a - b);
    displayResult(`Sắp xếp tăng dần: [${array}]`);
}

function findFirstPrime() {
    const isPrime = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    const firstPrime = array.find(isPrime);
    displayResult(`Số nguyên tố đầu tiên: ${firstPrime !== undefined ? firstPrime : -1}`);
}

function countIntegersInFloatArray() {
    const floatArray = prompt("Nhập số nguyên:").split(",").map(Number);
    const integerCount = floatArray.filter(num => Number.isInteger(num)).length;
    displayResult(`Đếm số nguyên: ${integerCount}`);
}
