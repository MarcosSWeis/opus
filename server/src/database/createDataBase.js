const pgtools = require("pgtools");
const config = {
  user: "postgres",
  host: "localhost",
  password: "12345678",
  port: 5432,
};

pgtools.createdb(config, "condominios", function (err, res) {
  if (err) {
    console.error(err);
    process.exit(-1);
  }
  console.log(res);
});
