function fibo(n){

    var a=0;
    var b=1;

    for( var i=0; i< n; i++){
        console.log(a);
        c= a+b;
        a= b;
        b= c;
    }
    
}

fibo(5);
