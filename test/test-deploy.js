const { assert, expect, include, includes, contain } = require("chai");
const { ethers } = require("hardhat");

describe("CarChain", function () {
  let carChainFactory;
  let carChain;

  beforeEach(async function () {
    carChainFactory = await ethers.getContractFactory("CarChain");
    carChain = await carChainFactory.deploy();
  });

  it("Contract should start with deposit balance of 0", async function () {
    const currentValue = await carChain.getBalance();
    const expectedValue = "0";
    assert.equal(currentValue.toString(), expectedValue);
  });
  it("Should display total duration 0 for new renter", async function () {
    const newRenter = await carChain.addRenter(
      "0xcc0aff522d6414ea8e610236df11528ac09006f4",
      "Kamil",
      "K",
      false,
      false,
      2,
      0,
      0,
      0,
      0
    );
    const totalDuration = await carChain.getTotalDuration(
      "0xcc0aff522d6414ea8e610236df11528ac09006f4"
    );
    const balance = await carChain.balanceOfRenter(
      "0xcc0aff522d6414ea8e610236df11528ac09006f4"
    );
    assert.equal(totalDuration, 0, "total duration 0 after renter added");
    assert.equal(balance, 2);
  });
  it("Should display balance 0 for new renter", async function () {
    const newRenter = await carChain.addRenter(
      "0xcc0aff522d6414ea8e610236df11528ac09006f4",
      "Kamil",
      "K",
      false,
      false,
      0,
      0,
      0,
      0,
      0
    );
    const balance = await carChain.balanceOfRenter(
      "0xcc0aff522d6414ea8e610236df11528ac09006f4"
    );

    assert.equal(balance, 0);
  });
  // it("Should display correct balance after deposit", async function () {
  //   const deposit = await carChain.deposit(
  //     "0xcc0aff522d6414ea8e610236df11528ac09006f4",
  //     { value: 2 }
  //   );
  //   const balance = await carChain.balanceOfRenter(
  //     "0xcc0aff522d6414ea8e610236df11528ac09006f4"
  //   );
  //   assert.equal(deposit, balance);
  // });
});
