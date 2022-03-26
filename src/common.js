var ABI = [
  {
    inputs: [
      { internalType: "uint256", name: "_bettingDeadline", type: "uint256" },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "betting_person",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "match_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "initial_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum Betting.BettingType",
        name: "betting_type",
        type: "uint8",
      },
    ],
    name: "Bet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_matchId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_competition",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_teamA",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_teamB",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_tie",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_team_A_win",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_team_B_win",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_gameDay",
        type: "uint256",
      },
    ],
    name: "MatchInfo",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      { indexed: true, internalType: "address", name: "_to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "Pay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "match_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "odd_for_winning",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum Betting.BettingType",
        name: "betting_type",
        type: "uint8",
      },
    ],
    name: "PlaceBet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_matchId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum Betting.BettingType",
        name: "_winningType",
        type: "uint8",
      },
    ],
    name: "Winner",
    type: "event",
  },
  { stateMutability: "payable", type: "fallback" },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "bettingPersonList",
    outputs: [
      {
        internalType: "address payable",
        name: "betting_person",
        type: "address",
      },
      {
        internalType: "enum Betting.BettingType",
        name: "betting_type",
        type: "uint8",
      },
      { internalType: "uint256", name: "initialAmount", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_matchId", type: "uint256" },
      {
        internalType: "enum Betting.BettingType",
        name: "_bettingType",
        type: "uint8",
      },
    ],
    name: "executeBet",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "matchCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "matchDetails",
    outputs: [
      { internalType: "string", name: "competition", type: "string" },
      { internalType: "string", name: "teamA", type: "string" },
      { internalType: "string", name: "teamB", type: "string" },
      { internalType: "uint256", name: "tie", type: "uint256" },
      { internalType: "uint256", name: "team_A_win", type: "uint256" },
      { internalType: "uint256", name: "team_B_win", type: "uint256" },
      { internalType: "uint256", name: "gameDay", type: "uint256" },
      { internalType: "uint256", name: "bettingPersonCount", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_matchId", type: "uint256" },
      {
        internalType: "enum Betting.BettingType",
        name: "_winningType",
        type: "uint8",
      },
    ],
    name: "payWinningBets",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_matchId", type: "uint256" },
      { internalType: "uint256", name: "_oddForWinning", type: "uint256" },
      {
        internalType: "enum Betting.BettingType",
        name: "_bettingType",
        type: "uint8",
      },
    ],
    name: "placeBet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_bettingDeadline", type: "uint256" },
    ],
    name: "setBettingDeadline",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "_competition", type: "string" },
      { internalType: "string", name: "_teamA", type: "string" },
      { internalType: "string", name: "_teamB", type: "string" },
      { internalType: "uint256", name: "_tie", type: "uint256" },
      { internalType: "uint256", name: "_team_A_win", type: "uint256" },
      { internalType: "uint256", name: "_team_B_win", type: "uint256" },
      { internalType: "uint256", name: "_gameDay", type: "uint256" },
    ],
    name: "setMatchDetails",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  { stateMutability: "payable", type: "receive" },
];

var ADDRESS = "0xe0c5fe3afEd0120cef31F877988DD89d8406EBCf";

var MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

module.exports = {
  address: ADDRESS,
  abi: ABI,
  months: MONTHS,
};
