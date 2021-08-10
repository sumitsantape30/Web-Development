// let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard";

let request = require("request");
let cheerio = require("cheerio");
let fs = require("fs"); //hume niche file run karke dekhne keliye iski jarurat padegi
function processSinglematch(url) { // isme ek single match ka url ayega

    request(url, cb);
}
function cb(error, response, html) {

    if (error) {
        console.log(error); // Print the error if one occurred
    } else if (response.statusCode == 404) {
        console.log("Page Not Found")
    }
    else {
        // console.log(html); // Print the HTML for the request made 
        dataExtracter(html);
    }
}
function dataExtracter(html) { // team ka name and uske niche players ka name
    // pehle dono teams ko nikal lo fir ek time pe ek team ko process karo
    //fir, so table mai hume commentary bhi di hui hai but process sirf unko karna hai jinke columns ki length 8 hai
    let searchTool = cheerio.load(html);
    // team name
    let bothInningArr = searchTool(".Collapsible"); //so iss array mai 0th index pe ek team ka data milega aur 1th index pe dusre team ka data milega
    //let scoreCard= ""; just output check karne keliye banaya hai, isme mera pura table rahega
    for (let i = 0; i < bothInningArr.length; i++) {
        // scoreCard = searchTool(bothInningArr[i]).html(); //iss scoreCard ko iss loop ke bahar print krke dekh skte ho
        let teamNameElem = searchTool(bothInningArr[i]).find("h5"); //so yaha mai 1 inning ke andar ek h5 dhund rha hu mai woh humare team ka nam hoga
        let teamName = teamNameElem.text(); //team ka nam mil jayega
        // console.log(teamName);
        teamName = teamName.split("INNINGS")[0]; // INNINGS ke basis pe split kar denge aur array ka 0th index
        // console.log(teamName); // yeh muje ab bas team ka nam dega
        teamName = teamName.trim(); //trim kardiye, koi bhi bahar se data aye to trim it
        console.log(teamName);
        //ab har ek team ke sare players get karne hai
        let batsManTableBodyAllRows = searchTool(bothInningArr[i]).find(".table.batsman tbody tr"); //yahase tumhe sare rows milegi but saari kam ki nhi hai
        console.log(batsManTableBodyAllRows.length)
        // type cohersion loops -> har ek row pe iterate marenge
        for (let j = 0; j < batsManTableBodyAllRows.length; j++) { //hum unkohi allow karenge jo kamki hai
            let numberofTds = searchTool(batsManTableBodyAllRows[j]).find("td"); //iss row ke andar agar number of tds 8 hai 
            // console.log(numberofTds.length);
            if (numberofTds.length == 8) {
                // console.log("You are valid")
                let playerName = searchTool(numberofTds[0]).text(); //yeh nam lake dega player ka, 0th td ka text
                console.log(playerName);
            }
        }
        console.log("``````````````````````````````````````")
        // fs.writeFileSync(`innning${i+1}.html`,scoreCard); so isse dono html file mai ek ek team ka data rahega

    }
    // players name
    //fs.writeFileSync("match.html", scoreCard); //match.html file run karoge to pura table mil jayega but iske liye upar scoredCard+= karna padega
}
module.exports = {
    psm: processSinglematch
}
