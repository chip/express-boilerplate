require('dotenv').config();
const server = require("./server");

server.listen(process.env.PORT || 4444, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
