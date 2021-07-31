Write a JavaScript program to compute the union of two arrays . Input array will only have unique elements in there respective array. Input arr1= [1, 2, 3] arr2= [100, 2, 1,10] Output: [1,2,3,100,10]

Input Format

arr1= [1, 2, 3] arr2= [100, 2, 1,10]

Constraints
0<=arr1.length < 10^4 0<=arr2.length < 10^4

Output Format

[1,2,3,100,10]

Sample Input 0

[1, 2, 3] 
[100, 2, 1,10]
Sample Output 0

[ 1, 2, 3, 100, 10 ]

Code:

function union(str){

    str = str.split("\n");
    let a1= JSON.parse(str[0]);
   // console.log(a1);
    let a2= JSON.parse(str[1]);
  //  console.log(a2);
    let ans= [];

    let i=0;
    while( i < a1.length){
        ans.push(a1[i]);
        i++;
    }

    console.log(ans);

    let j=0;
    let len= a2.length;
    while( j < len){
        if(! ans.includes(a2[j])){
            ans.push(a2[j]);
            //console.log(ans);
        }
        j++;
    }
    console.log(ans);
}

union("[1, 2, 3]\n[100, 2, 1,10]");

   
 
