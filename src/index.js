global.contract = require("./contractDef");
const common = require("./common");
const express = require("express");
const app = express();
app.use(express.json());

app.get("/sportEvent", async (req, res) => {
  let options = {
    filter: {
      value: [],
    },
    fromBlock: 0,
    toBlock: "latest",
  };
  var t = await global.contract.contract
    .getPastEvents("MatchInfo", options)
    .then((results) => {
      var list_of_data = [];
      for (let i = 0; i < results.length; i++) {
        var match = results[i].returnValues;
        var date = new Date(parseInt(match["_gameDay"]) * 1000);
        let match_date =
          common.months[date.getMonth()] +
          " " +
          date.getDate() +
          ", " +
          date.getFullYear();

        var data = {
          matchesId: match["_matchId"],
          competition: match["_competition"],
          teamA: match["_teamA"],
          teamB: match["_teamB"],
          Tie: match["_tie"],
          Team_A_Win: match["_team_A_win"],
          Team_B_Win: match["_team_B_win"],
          gameDay: match_date,
        };
        list_of_data.push(data);
      }
      res.send(list_of_data);
    });
});

app.listen(8081, () => {
  console.log("listening on port 8081");
});
