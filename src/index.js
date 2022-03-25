global.contract = require("./contractDef");
const express = require("express");
const moment = require("moment");
const app = express();
app.use(express.json());

app.get("/sportEvent", async (req, res) => {
  var matches = await global.contract.contract.methods.getMatches().call();
  var list_of_data = [];
  for (let i = 0; i < matches.length; i++) {
    var match = matches[i];
    let match_date = moment(parseInt(match[6]))
      .format("MMMM Do, YYYY")
      .replace("th", "");

    var data = {
      matchesId: i.toString(),
      competition: match[0],
      teamA: match[1],
      teamB: match[2],
      Tie: match[3],
      Team_A_Win: match[4],
      Team_B_Win: match[5],
      gameDay: match_date,
    };
    list_of_data.push(data);
  }

  var result = JSON.stringify(list_of_data, null, "\t");
  console.log(result);

  res.send(result);
});

app.listen(8081, () => {
  console.log("listening on port 8081");
});
