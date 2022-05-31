//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { loadCondo } = require("./src/loadData/CondoLoad.js");
const { loadTowers } = require("./src/loadData/TowersLoad.js");
const { loadUsers } = require("./src/loadData/UsersLoad.js");
const { loadDepart } = require("./src/loadData/DepartLoad.js");
const { LoadSpace } = require("./src/loadData/SpaceLoad.js");

const port = process.env.PORT || 5040;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(port, async () => {
    await loadCondo();
    await loadTowers();
    await loadDepart();
    await loadUsers();
    await LoadSpace();
    console.log("o|O_O|o robot Σωκράτης listening at 5040");
    // eslint-disable-line no-console
  });
});

// deployment heroku
