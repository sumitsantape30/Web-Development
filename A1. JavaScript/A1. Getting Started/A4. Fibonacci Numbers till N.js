Take as input n. Determine all prime numbers till n and print them on the same line with 
spaces in between
Input Format

Integer

Constraints

n <= 10 ^ 9

Output Format

Space separated integers on the same line

Sample Input 0

7
Sample Output 0

2 3 5 7

Code:

function fibo(n){

    var a=0;
    var b=1;

    for( var i=0; i< n; i++){
        console.log(a);
        c= a+b;
        a= b;
        b= c;
    }
    
}

fibo(5);
