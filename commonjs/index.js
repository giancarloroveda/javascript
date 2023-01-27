const fs = require("fs");
const emojii = require("node-emoji");
const mod1 = require("./modules/mod1");
const mod2 = require("./modules/mod2");
const mod3 = require("./modules/mod3");

// fs.writeFile("teste.txt", "olá mundo", (err) => {
//     if (err) throw err;
//     console.log("success", emojii.get("footprints"));
// });

console.log(mod1);
console.log(mod2);
console.log(mod3);
console.log(__dirname);
console.log(__filename);
