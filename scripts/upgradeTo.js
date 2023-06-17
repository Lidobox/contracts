const { ethers, upgrades } = require("hardhat");

async function main() {
  const TicketV2 = await ethers.getContractFactory("Ticket");
  const ticket = await upgrades.upgradeProxy("0x85d326e1376ced699c97ada18712c3579ebc137e", TicketV2, {timeout: 3600000});
  console.log("Ticket upgraded");
}

main();