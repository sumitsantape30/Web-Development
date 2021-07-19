Title Case a Sentence. Input:I'm a little tea pot" Output: I'm A Little Tea Pot.

Input Format

String

Constraints

no as such

Output Format

String

Sample Input 0

I'm a little tea pot
Sample Output 0

I'm A Little Tea Pot

Code:

function titleCase(str) {
    let sa = str.toLowerCase().split(' ');
  // console.log(sa);
  for(let i = 0; i < sa.length; i++){
       sa[i] = sa[i].charAt(0).toUpperCase() + sa[i].slice(1);
  }
  console.log(sa.join(' '));
} 
