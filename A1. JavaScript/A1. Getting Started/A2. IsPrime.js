function isPrime(input){

    let isPrime= true;

    for( let div= 2; div*div <= InputDeviceInfo; div++){
        if( input % div == 0){
            isPrime= false;
            break;
        }
    }

    if( isPrime == true){
        console.log("Prime");
    }else{
        console.log("Not Prime");
    }
}



