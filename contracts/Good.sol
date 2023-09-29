// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.19;

contract Good {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function setOnwer(address newOwner) public {
        require(tx.origin == owner, "Not owner");
        owner = newOwner;
    }
}
