Take as input a number n, the number of rows  
Print the following pattern 
space is to be used for indentation
*** ***  
**   **  
*     *  
**   **  
*** ***  
for n = 5.  
Input Format

Integer

Constraints

n <= 10 ^ 9 and is odd

Output Format

Pattern for n = 5.
*** ***  
**   **  
*     *  
**   **  
*** ***  
Sample Input 0

5
Sample Output 0

*** ***
**   **
*     *
**   **
*** ***

Code:

function pattern(n){

    var star= n/2 +1;
    var space= 1;

    for(var i = 1; i<= n; i++){
        var ans= "";
        for(var j= 1; j <=star; j++){
            ans += "*";
        }

        for(var j=1; j<= space; j++){
            ans += " ";
        }

        for(var j= 1; j<= star; j++){
            ans += "*";
        }

        console.log(ans);

        if( i <= Math.floor(n/2)){
            star--;
            space +=2;
        }else{
            star++;
            space -= 2;
        }
    }

}

pattern(5);
