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
    var maxlength= 0;
    var longestWord= "";

    for( var i =0; i< arrStr.length; i++){

        if( arrStr[i].length() >= maxlength){
            maxlength= arrStr[i].length;
            longestWord= arrStr[i];
        }
    }
    console.log(longestword);
}
