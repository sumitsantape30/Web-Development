
function countDigit(n){

    var count=0;
    while( n > 0){
        n= n/ 10;
        count++;
    }
    console.log(count);

}
