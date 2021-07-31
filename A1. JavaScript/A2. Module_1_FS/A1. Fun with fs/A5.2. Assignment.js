// mai 10 folders banaunga jisme har folder ka nam JacaScript ke lectures ke name honge 1 to 10, then uske andar unki files hongi aur usme content hoga

let fs= require("fs");

for( let i=1; i <=10; i++){
    // so muje iss folder ke andar kuch folder banane hai so pehle path build karlenge
    let dirPathToMake= `Lecture - ${i}`;
    fs.mkdirSync(dirPathToMake); // ab directories banayenge
    fs.writeFileSync(dirPathToMake + "\\" + "readme.md", `#readme for ${dirPathToMake}`); // har folder ke andar readme file banegi aur usme content rahega #readme for... 
}

//so 10 folders ban jayenge aur usme readme file banegi
