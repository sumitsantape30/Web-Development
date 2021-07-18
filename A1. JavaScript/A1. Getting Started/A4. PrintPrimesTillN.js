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

function printPrime(num){

    var ans= "";
    for(var n= 2; n <= num; n++){
        var isPrime= true;
        for(var div= 2; div*div <= n; div++){
            if( n % div == 0){
                isPrime= false;
                break;
            }
        }

        if( isPrime == true){
            ans += n +" ";
        }
    }
    process.stdout.write(ans);
}
