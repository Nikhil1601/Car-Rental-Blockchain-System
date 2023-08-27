require("@nomiclabs/hardhat-ethers");
const { ethers } = require("hardhat");
const { run, network } = require("hardhat");
require("dotenv").config();

async function main() {
  const CarChainFactory = await ethers.getContractFactory("CarChain");
  console.log("Deploying contract...");
  const carChain = await CarChainFactory.deploy();
  await carChain.deployed();
  console.log(`Deployed contract to: ${carChain.address}`);
  if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
    //// Wait until the transaction is mined (i.e. contract is deployed)
    //  - returns the receipt
    //  - throws on failure (the reciept is on the error)
    await carChain.deployTransaction.wait(2);
    // verify contract addres, constructor args - here blank
    await verify(carChain.address, []);
  }
}

async function verify(contractAddress, args) {
  console.log("Veryfying contract on etherscan...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!");
    } else {
      console.log(error);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
