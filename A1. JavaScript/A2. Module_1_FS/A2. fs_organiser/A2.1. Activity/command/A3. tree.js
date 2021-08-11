let fs = require("fs");
let path = require("path");
function treeFn(srcPath) {
    if (srcPath == undefined){
        srcPath = process.cwd(); //agar input mai undefined hai to jahape isko run karoge woh apni path apne aap pick kelega
        treeHelper(srcPath, "");
        return;
        // console.log("Tree command", srcPath);
    }else{
        let doesExist= fs.existsSync(srcPath);
        if( doesExist){
            treeHelper(srcPath, ""); //indent keliye empty string pass kr rhe hai
        }
    }
    
}

function treeHelper(srcPath, indent){ //so hume path diya hoga uske andar kuch content hoga to woh print karna hai aur uske andar kuch content hoga to woh bhi print karna hai
    //sabse pehle check karenge file hai ya folder, agar file hai to print krdo aage kuch karna nhi hai aur agar folder hai to uske andar ka content read karo aur fir aage jao kya pta uss folder ke andar bhi aur folder ho
    let isFile= fs.lstatSync(srcPath).isFile();
    //agar file hai to apko just nam print karna hai
    if( isFile == true){
        let fileName= path.basename(dirPath);
        console.log(indent+"├──"+fileName);
    }else{
        //agar apke pas yeh directory hai to usko print bhi karna hai aur uske andr bhi jana hai
        let dirName= path.basename(dirPath)
        console.log(indent+ "└──"+ dirName);

        //ab inke children keliye
        let childrens= fs.readdirSync(dirPath); //iske andar jinte childrens hai woh mere pas ajayenge
        //ab jo chidrens hai unke upar loop marunga aur unke andar dubara yeh function call kardunga
        for( let i=0; i< childrens.length; i++){
            let childPath= path.join(srcPath,childrens[i]);
            treeHelper(childPath, indent+"\t");
        }//top level pe aake pas ek choice rahegi ki apne jo path pass rakhi hai woh folder ka hoga ya to file ka, file ka hai to khli print krdo aur agar folder ka hai to use print bhi karo aur uske andar jake dubara call karo taki jo function aapne ek bar chalaya woh andar wale keliye bhi chal jaye fir woh uske andar wale keliye chal jaye so on woh aise tree ban jayega

    }

}

module.exports = {
    treeFn: tree
}
