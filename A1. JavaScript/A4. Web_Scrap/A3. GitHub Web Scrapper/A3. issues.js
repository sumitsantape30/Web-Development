const request = require('request');
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const pdfkit = require("pdfkit");
function getIssuesPageHtml(url, topic, repoName){
     request(url, cb);
     function cb(err, response, html){
         if (err){
             console.log(err);
         } else if(response.statusCode == 404) {
              console.log("Page not found!");    
         } else{
            getIssues(html);
            // console.log(html);
         }
     }
     
     function getIssues(html){
        let $ = cheerio.load(html);
        let issueElemarr = $(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
        console.log(issueElemarr.length);
        let arr = [];
        for (let i = 0; i < issueElemarr.length; i++){
            let link = $(issueElemarr[i]).attr("href");
            // console.log(link);
            arr.push(link);
        }
        // console.log(topic, "           ",arr);
        let folderpath=path.join(__dirname, topic);
        dirCreater(folderpath);
        let filepath = path.join(folderpath, repoName + ".pdf");
        console.log(filepath);
        let text = JSON.stringify(arr);
        let pdfDoc = new pdfkit();
        // pipe doesn not block multiple files
        pdfDoc.pipe(fs.createWriteStream(filepath));
        pdfDoc.text(text);
        pdfDoc.end();
        
        // fs.writeFileSync(filepath, JSON.stringify(arr));
    }
}  

module.exports = getIssuesPageHtml;

function dirCreater(folderpath){
    if(fs.existsSync(folderpath) == false){
        fs.mkdirSync(folderpath);
    }
}
