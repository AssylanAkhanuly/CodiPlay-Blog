const bcrypt = require("bcrypt");
async function Parse () {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash("123", salt);
  console.log(hashedPass)
}

Parse()
