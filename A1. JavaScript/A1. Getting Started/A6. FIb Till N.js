Take as input a number n.
Print all terms of Fibonacci sequence smaller than equal to n where
0th Fibonacci is 0 and 1st Fibonacci is 1. Here is a sample
0 1 1 2 3 5 8 13 21 34 55
Input Format

Integer

Constraints

n <= 10 ^ 9

Output Format

Space separated integers

Sample Input 0

56
Sample Output 0

0 1 1 2 3 5 8 13 21 34 55

Code:

function fibo(n){

    var a=0;
    var b= 1;
    var ans= "";
    for( var i=2; a<= n; i++){
        ans += a + " ";
        var c = a+ b;
        a= b;
        b= c;
    }
    console.log(ans);
}

fibo(55);
