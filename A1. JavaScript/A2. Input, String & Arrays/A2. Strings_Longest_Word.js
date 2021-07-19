Print the Longest Word in a String

Input Format

string

Constraints

''

Output Format

String

Sample Input 0

The quick brown fox jumped over the lazy dog
Sample Output 0

jumped

Code:

function longestWord(str){
    
    let arrStr= str.split(" "); // String ko array mai convert karenge
    var max= 0;
    var ans= "";

    for( var i =0; i< arrStr.length; i++){

        if( arrStr[i].length() > max){
            max= arrStr[i].length;
            ans= arrStr[i];
        }
    }
    console.log(ans);
}
