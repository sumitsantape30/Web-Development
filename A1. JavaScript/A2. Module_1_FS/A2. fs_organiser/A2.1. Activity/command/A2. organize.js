/* Steps
1. Muje ek directory ka path diya hoga: input -> directory path given
2. muje uske andar jake organized_files nam ki directory banani padegi: create -> organised_files -> directory
3. then aap sabhi files ko check karenge ki woh kis category mai belong krti hai: identify categories of all the files present in that input directory
4. mai unki category dekhhe usko copy/cut files to that organised directory inside its category folder

*/

let fs = require("fs");
let path = require("path");
let types = {//yeh types nam ka ek object hai jiske andar yeh pda hua hai ki kis type chize hai yeh aur unn array ke andar extension pdi hui hai
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
function organizeFn(srcPath) {
    let organizedFilesPath
       // console.log("organize implemneted", srcPath);
    if (srcPath == undefined) { //agar function call krte waqt aapne kuch input nhi diya aur simply call kiya to tabhi call hojata hai, aap path pass nhi krte ho to woh apko undefined de dega so uska ek check lagana padega

        srcPath = process.cwd();
        organizeHelper(srcPath, organizedFilesPath);
    }else{    //ab hume dekhna hoga ki jo input path aayi woh exist krti bhi hai ya nhi
        let doesExist= fs.existsSync(srcPath);
        if( doesExist){
            //agar exist krti hai to given path ke andar hume organised_file nam se ek directory banani hai
             organizedFilesPath = path.join(srcPath, "organized_files"); //isse humari path bn gyi of organised_file directory
            if (fs.existsSync(organizedFilesPath) == false) { //agar yeh already exist nhi krti to new folder bana denge
                fs.mkdirSync(organizedFilesPath);
            }

            //ab srcPath ke sabhi files ki category indentify krni padegi to usse pehle hume unko read karna hoga then hum identify karpayenge
            // iske liye mai alag hi function banaunga 
            organizeHelper(srcPath, organizedFilesPath); //source and destination path

        }else{
            console.log("Kindly enter the correct path"); //agar exist nhi krti hai to yeh print krdenge
            return;
        }
    }
     
}

function organizeHelper(srcPath, organizedFilesPath){
    // hume jo source path provided hai aur tumhe iske andar ki sari files ko get karna hai aur indentify karna hai

    let allTheFiles = fs.readdirSync(srcPath); //srcPath mai jitne bhi files hai unka array mil jayega
     // console.log(allTheFiles); //so mere source path mai jitne bhi files hongi woh lake deta hai but muje paths chahiye unki taki mai unko uthakr apne destination folder mai dal saku
     //muje file ka nam nhi woh file kis address pe hai woh pta hona chahiye, fir unko bhi check karenge ki aap file ho ya folder, agar folder hai to muje koi lena dena nhi aur agar file hai to indentify karke organise karenge
     for (let i = 0; i < allTheFiles.length; i++) {
         let fullOriginalPath = path.join(srcPath, allTheFiles[i]); //source path se woh file tak ka pura address
         let isFile= fs.lstatSync(fullOriginalPath).isFile();//ab muje check karna hai yeh file hai ya folder
         if (isFile == true) { //
           // console.log(allTheFiles[i]); so humare source path mai jo jo files hongi woh yeh print kardega
             //ab mai inn files ke extension ke basis pe inko indentify karunga aur alag alag folders mai put karunga
           let folderName = checkextnTellFolder(allTheFiles[i]); //yeh kis category ko belong krta hai yeh lake dega
            //console.log(allTheFiles[i],"belongs to -->", category);
            // ab hume source folder ke andar se file copy krni hai aur paste karni hai destination folder ke andar uske category wale folder ke andar
           copyFileTodest(folderName, fullOriginalPath, srcPath); //hum pass kr rhe hai ki iss category wale folder mai dal dena
         }
     }
}

function copyFileTodest(folderName, fullOriginalPath, srcPath) {
    let destFolderPath = path.join(srcPath, "organized_files", folderName);
    if (fs.existsSync(destFolderPath) == false) {
        fs.mkdirSync(destFolderPath);
    }
    //source file hai mere pas, ab copy keliye muje same nam se file banana padega
    let originalFileName = path.basename(fullOriginalPath); //fila nam mila
    let destFilePath = path.join(destFolderPath, originalFileName) //ab destination folder ki path mai file ka nam join krdenge, aur meri destination path ban jayegi
    fs.copyFileSync(fullOriginalPath, destFilePath); //ab content copy hojayega
    //agar cut/move karna hai to original file ko remove krdo
    //fs.unlinkSyn(fullOriginalPath); //isse orignal file remove hojayegi
    console.log(originalFileName, "copied to", folderName);
}

function checkextnTellFolder(fileName) {
    let extName = path.extname(fileName);
    //console.log(extName); yeh sare extensions print karega but unke aage .(dot) laga rhaega so usko hata do
    extName = extName.substring(1);
    //extension aane ke bad hume uss type object mai dhundna hai 
    for (let key in types) { // iss key mai ek ek bar media, archives, documents ajayegi
        for (let i = 0; i < types[key].length; i++) { // so agar ab key media array pe hai to uss media ke array pe traverse karenge
            if (types[key][i] == extName) {
                return key;
            }
        }
    }
    return "others";
}

module.exports = {
    organizefxn: organizeFn
}
