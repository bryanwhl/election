// Election artifact that represents smart contract
var Elections = artifacts.require("./Elections.sol");

module.exports = function(deployer) {
  deployer.deploy(Elections);
};
