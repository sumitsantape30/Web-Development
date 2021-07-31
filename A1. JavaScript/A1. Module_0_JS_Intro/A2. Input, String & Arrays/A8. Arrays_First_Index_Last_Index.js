You are given a number n, representing the size of array a.
You are given n numbers, representing elements of array a.
Asssumption - Array is sorted. Array may have duplicate values.

Find first and last index of an element

Input Format

A number n n1 n2 .. n number of elements A number d

Constraints
1 <= n <= 1000 1 <= n1, n2, .. n elements <= 100 1 <= d <= 100

Output Format

A number representing first index A number representing last index

Sample Input 0

15
1
5
10
15
22
33
33
33
33
33
40
42
55
66
77
33
Sample Output 0
5
9

Code:

function firstAndLast(input){

    let arr= input.split("\n");

    let length= arr.length;
    let li= 0;
    let ri= 0;

    for( var i=0; i< length-1; i++){
        if( arr[i] == arr[length-1]){
            li= i;
            break;
        }
    }

    for( var i=li; i< length-1; i++){
        if( arr[i] == arr[length-1]){
            ri= i;
        }else{
            break;
        }
    }

    console.log(li-1);
    console.log(ri-1);
}

firstAndLast(`15
    1
    5
    10
    15
    22
    33
    33
    33
    33
    33
    40
    42
    55
    66
    77
    33`)
