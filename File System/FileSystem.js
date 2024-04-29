

//! Node.js as a File Server
// The Node.js file system module allows you to work with the file system on your computer.

// To include the File System module, use the require() method:

var http = require('http');
var fs = require('fs');
// Common use for the File System module:

//?  Read files
//?  Create files
//?  Update files
//?  Delete files
//?  Rename files

//*  READ FILES ON YOU COMPUTER SYSTEM.

// http.createServer(function (req, res) {
//         fs.readFile('./ReadDedmo1.html',function (err, data) {
//             if(err){
//                 res.write("error aayi h malak" );
//             console.log(err);
//             }
//             else
//             {
//                 res.writeHead(200, {'Content-Type': 'text/html'});
//                 res.write(data);
//             }
//             return res.end();
//         })
// }).listen(8000)


//! Create Files
// The File System module has methods for creating new files:

//* fs.appendFile()
//* fs.open()
//* fs.writeFile()

//? The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:
//*(it appends data not overwrite the existing content);
// http.createServer((req,res)=>{
//    fs.appendFile('file_to_append.txt',"hemlooo me append file ki help se yha hun.",function(err){
//     if(err)
//     console.log("error found in creating file");
//     else 
//     console.log("Saved successfully !");
//    })
//     res.write("Me Port 1000 pe dod rha hun")
//    res.end();
// }).listen(1000);



//? The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing",
// ? the specified file is opened for writing. If the file does not exist, an empty file is created:


                // fs.open("./readKroMujhe2.txt", (err, fileKaData) => {
                //     if (err)
                //         console.log(err);
                //     else {
                //         fs.readFile("./readKroMujhe2.txt", 'utf-8', (err, data) => {
                //             if (err)
                //                 console.log(err);
                //             else {
                //                 http.createServer((req, res) => {
                //                     res.writeHead(200, { 'Content-Type': 'text/html' });
                //                     res.write(`<p>${data}<p/>`);
                //                     res.end();
                //                 }).listen(1000);
                //             }
                //         })
                //         console.log("Successfully readed the file");
                //     }
                // })

//?  The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:

                // fs.writeFile('writeFile.txt','I am the second content of writeFile.txt',(err,data)=>{
                //     if(err) console.log(err);
                //     else console.log("successfully wrote");
                // })

//* Toh boss writeFile  replace krta h content ko, whi ,
//* fs.appendFile() method appends specified content to a file.


//! Delete Files
// ?To delete a file with the File System module,  use the fs.unlink() method.

//? The fs.unlink() method deletes the specified file:

            // fs.unlink('./mujhedelete.txt',(err,data)=>{
            //     try{
            //     if(err){
            //     throw err;
            //     }
            //     console.log("ho gyi bhajja delete file");
            //     }
            //     catch(err){
            //         console.log("error found");
            //     }
            // })

//! Rename Files
//? To rename a file with the File System module,  use the fs.rename() method.

//? The fs.rename() method renames the specified file:

fs.rename('./renaming.txt','checkRename.py',(err,data)=>{
    if(err)
    console.log("error found in renaming file");
    else
    console.log("File Renamed!");
});
