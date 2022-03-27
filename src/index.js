global.contract = require("./contractDef");
const common = require("./common");
const express = require("express");
const app = express();
app.use(express.json());

var options = {
  filter: {},
  fromBlock: 0,
};
var Contract = global.contract.contract;
var list_of_data = [];
var bets = {};

Contract.getPastEvents("PlaceBet", options).then((result) => {
  // Take latest changes in odds from event PlaceBet
  for (let i = 0; i < result.length; i++) {
    let returned_values = result[i].returnValues;
    let id = returned_values["match_id"];
    if (!bets[id]) {
      bets[id] = {};
    }
    bets[id][returned_values["betting_type"]] =
      returned_values["odd_for_winning"];
  }
});

Contract.getPastEvents("MatchInfo", options).then(async (results) => {
  // Take information about matches from event MatchInfo and place latest changes in odds
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
      Tie: bets[match["_matchId"]]
        ? bets[match["_matchId"]]["0"]
          ? bets[match["_matchId"]]["0"]
          : match["_tie"]
        : match["_tie"],
      Team_A_Win: bets[match["_matchId"]]
        ? bets[match["_matchId"]]["1"]
          ? bets[match["_matchId"]]["1"]
          : match["_team_A_win"]
        : match["_team_A_win"],
      Team_B_Win: bets[match["_matchId"]]
        ? bets[match["_matchId"]]["2"]
          ? bets[match["_matchId"]]["2"]
          : match["_team_B_win"]
        : match["_team_B_win"],
      gameDay: match_date,
    };
    list_of_data.push(data);
  }
});

app.get("/sportEvent", async (req, res) => {
  res.send(list_of_data);
});

app.listen(8081, () => {
  console.log("listening on port 8081");
});
