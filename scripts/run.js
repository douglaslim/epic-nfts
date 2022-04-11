const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);

  // Call the function.
  let txn = await nftContract.makeAnEpicNFT()
  // Wait for it to be mined.
  await txn.wait()

  mintLimit = await nftContract.getMintLimit()
  console.log("Mint limit:", mintLimit.toNumber());

  totalNftMinted = await nftContract.getTotalNFTsMintedSoFar()
  console.log("Total NFT minted:", totalNftMinted.toNumber());
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();