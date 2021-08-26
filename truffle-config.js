const HDWalletProvider = require('truffle-hdwallet-provider');
require('dotenv').config();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    // development: {
    //   host: "127.0.0.1",
    //   port: 8545,
    //   network_id: "*" // Match any network id
    // },
    rinkeby:{
      provider: new HDWalletProvider("home amused fabric impulse nasty error woman lobster shell profit chair horse", "https://rinkeby.infura.io/v3/f44fd2329f7c4f899327c6cef2db6971"),
      network_id:4,
      networkCheckTimeout: 999999
    }
    // develop: {
    //   port: 8545
    // }
  }
};
