const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("tx.origin", () => {
  it("Attack.sol will be able to change the owner of Good.sol", async () => {
    const [_, address1] = await ethers.getSigners();

    const GoodContract = await ethers.getContractFactory("Good");
    const goodContract = await GoodContract.connect(address1).deploy();
    await goodContract.waitForDeployment();

    const attackContract = await ethers.deployContract("Attack", [
      goodContract.target,
    ]);
    await attackContract.waitForDeployment();

    const txn = await attackContract.connect(address1).attack();
    await txn.wait();

    expect(await goodContract.owner()).to.equal(attackContract.target);
  });
});
