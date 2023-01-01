const fs = require('fs');


function joinAndAppend(arr, fileName) {
    const myStr = arr.join();
    fs.appendFile(fileName, myStr + "\n", (err) => {
        if (err) {
            throw new Error(err);
        } else {
            console.log("success");
        }
    });
}

const myArray = ["hi", "there", "guys"];

joinAndAppend(myArray, "messages.txt");
