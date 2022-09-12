import { expect } from "chai";
import { unitFixtureReverts } from "../../shared/fixtures";

export function unitTestReverts(): void {
  describe("Reverts", function () {
    beforeEach(async function () {
      const { reverts } = await this.loadFixture(unitFixtureReverts);
      this.contracts.reverts = reverts;
    });

    it("should revert on requireWithoutMessage()", async function () {
      await expect(this.contracts.reverts.requireWithoutMessage()).to.be.reverted;
    });

    it("should revert on requireWithMessage()", async function () {
      await expect(this.contracts.reverts.requireWithMessage()).to.be.revertedWith("Reverts: requireWithMessage");
    });

    it("should revert on revertWithoutMessage()", async function () {
      await expect(this.contracts.reverts.revertWithoutMessage()).to.be.reverted;
    });

    it("should revert on revertWithMessage()", async function () {
      await expect(this.contracts.reverts.revertWithMessage()).to.be.revertedWith("Reverts: revertWithMessage");
    });

    it("should revert on revertWithCustomError()", async function () {
      await expect(this.contracts.reverts.revertWithCustomError()).to.be.revertedWith("CustomError");
    });

    it("should revert on revertWithCustomErrorWithArgs()", async function () {
      await expect(this.contracts.reverts.revertWithCustomErrorWithArgs()).to.be.revertedWith(
        `CustomErrorWithArgs("${this.signers.alice.address}", ${await this.signers.alice.getBalance()})`,
      );
    });
  });
}
