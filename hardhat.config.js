require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

const GOERLI_RPC = process.env.GOERLI_RPC
const PRIVATE_KEY = process.env.PRIVATE_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.8",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    goerli: {
      url: GOERLI_RPC,
      accounts: [PRIVATE_KEY],
      chainId: 5
    }
  }
};
