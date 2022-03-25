const data = require("./common");
const Web3 = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");

const provider = new HDWalletProvider(
  "MNEMONIC_PHRASE",
  "https://kovan.infura.io/v3/PROJECT_ID"
);
const web3 = new Web3(provider);

var contract = new web3.eth.Contract(data.abi, data.address);

module.exports = { contract };
