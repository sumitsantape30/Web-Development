` A rotation (or circular shift) is an operation similar to shift except that the digits that fall off at one end are put back to the other end.

In left rotation, the digits that fall off at left end are put back at right end.

In right rotation, the digits that fall off at right end are put back at left end.

For Example, r=2 n=12345 result=45123

r=-2 n=12345 result=34512

Take as input 1. Number of rotation: r 2. A Number: n

Let us assume result is desired answer after all operation.

Print result in next line.

Input Format

Integer representing r
Integer representing n
Constraints

1 <= r <= 10 ^ 18
1 <= n <= 10000
Output Format

result
Sample Input 0

2
562984
Sample Output 0

845629

Code:

function rotate(n){

    //input mai string type ka milega so yahabhi split function ka use karenge
    //ek enter marne keliye " " wale mai escape sequence hot hai \n.
    //so hume yaha \n ke base pe split karna hai
    let inputArr= n.split("\n");
    let k = Number(inputArr[0]); //Number mai typecast kiye
    let number= Number(inputArr[1]);
    console.log(input);
    console.log("k",k);
    console.log("number", number);

    // humare pas ab K and n aachuka hai so ab rotate karo

}

//input mai string aayi hui hai
2
562984
// yeh input mai string aayi hui hai aur 2 ke bad \n lagaya hua hai isliye function ke andar string ko split kiya to get actual k and n.


    
