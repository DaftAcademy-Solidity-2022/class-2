const { ethers } = require("hardhat")

async function main() {
  const CrowdfundingFactory = await ethers.getContractFactory("Crowdfunding")
  console.log("Deploying contract...")
  const crowdfunding = await CrowdfundingFactory.deploy()
  await crowdfunding.deployed()
  console.log(`Deployed contract to : ${crowdfunding.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
