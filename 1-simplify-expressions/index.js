// Simplify Big-O Expressions

// 1. O(n + 10) -> O(n) linear-time complexity; arithmetic operations don't matter  
// 2. O(100 * n) -> O(n) linear-time complexity
// 3. O(25) -> O(1) constant-time complexity 
// 4. O(n^2 + n^3) -> O(n^3) quadratic-time complexity; smaller terms don't matter
// 5. O(n + n + n + n) -> O(n) linear-time complexity 
// 6. O(1000 * log(n) + n) -> O(n) linear-time complexity 
// 7. O(1000 * n * log(n) + n) -> O(n log n) 
// 8. O(2^n + n^2) -> O(2^n) 2^n will scale quicker than n^2 
// 9. O(5 + 3 + 1) -> O(1) -> constant-time complexity 
// 10. O(n + n^(1/2) + n^2 + n*log(n)^10) -> O(n^2) -> quadratic time complexity 