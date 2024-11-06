function isPrime(num) {
    if (num < 2) {
        return false; // Số nhỏ hơn 2 không phải số nguyên tố
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Nếu chia hết, không phải số nguyên tố
        }
    }
    return true; // Nếu không chia hết, là số nguyên tố
}

function filterPrimes(array){
    return array.filter(isPrime); // Sử dụng filter để lọc các số nguyên tố
}
// Khai báo mảng để kiểm tra
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; // Bạn có thể thay đổi các giá trị trong mảng này
const primeNumbers = filterPrimes(array)
console.log(primeNumbers);