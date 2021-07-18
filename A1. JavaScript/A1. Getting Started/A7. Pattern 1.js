Take as input a number n, the number of rows  
Print the following pattern
use space for indentation
*  
*	*  
*	*	*  
*	*	*	*  
*	*	*	*	*  
for n = 5.
Input Format

Integer

Constraints

n <= 10 ^ 9

Output Format

Pattern for n = 5.
*
* *
* * *
* * * *
* * * * *
  
Code:

function pattern(n){

    var star=1;

    for(var i=1; i<= n; i++){
        var ans= "";
        for( var j=1; j<= star; j++){
            ans += "* ";
        }
        console.log(ans);

        star++;
    }
}

pattern(5);
