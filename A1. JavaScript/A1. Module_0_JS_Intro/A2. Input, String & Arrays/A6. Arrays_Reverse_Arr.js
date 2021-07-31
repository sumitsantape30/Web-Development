Given an array first=[1,2,3,4,5]. Write a JavaScript program that fill second array in reverse order of first narr=[5,4,3,2,1] without using extra space

Input Format

Array

Constraints

0<=arr.length< 10^4

Output Format

Array

Sample Input 0

[1,2,3,4,5]
Sample Output 0

[ 5, 4, 3, 2, 1 ]

Code:

function reverse(strArr){

    let arr= JSON.parse(); //string which is similar to an array, use JSON.parse to convert it in integer array

    let left=0;
    let right= arr.length-1;
    while( left < right){
        let temp= arr[left];
        arr[left]= arr[right];
        arr[right]= temp;
        left++;
        right--;
    }
    console.log(arr);
}
