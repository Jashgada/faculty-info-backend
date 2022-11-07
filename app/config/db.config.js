const dbUser = process.env.dbUser;
const dbPassword = process.env.dbPassword;
const dbDatabase = process.env.dbDatabase;
module.exports = {
    // url: "mongodb://localhost:27017/local"
    url:`mongodb+srv://${dbUser}:${dbPassword}@${dbDatabase}.olvdyjf.mongodb.net/test`
  };