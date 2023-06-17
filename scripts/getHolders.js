
const { ethers, upgrades } = require("hardhat");

async function main() {
  const ticket = await ethers.getContractFactory("Ticket");
  console.log(ticket.address);
  //const tx = await ticket.decimals();
}

main();