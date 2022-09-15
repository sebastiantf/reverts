// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

contract Reverts {
    error CustomError();
    error CustomErrorWithArgs(address addressArg, uint256 uintArg);

    function requireWithoutMessage() external pure {
        // solhint-disable-next-line reason-string
        require(false);
    }

    function requireWithMessage() external pure {
        require(false, "Reverts: requireWithMessage");
    }

    function revertWithoutMessage() external pure {
        // solhint-disable-next-line reason-string
        revert();
    }

    function revertWithMessage() external pure {
        revert("Reverts: revertWithMessage");
    }

    function revertWithCustomError() external pure {
        revert CustomError();
    }

    function revertWithCustomErrorWithArgs() external view {
        revert CustomErrorWithArgs(address(msg.sender), msg.sender.balance);
    }
}
