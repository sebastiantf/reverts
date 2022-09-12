import type { Signer } from "@ethersproject/abstract-signer";
import { Reverts } from "../../src/types/Reverts";
import { deployReverts } from "./deployers";

type UnitFixtureRevertsReturnType = {
  reverts: Reverts;
};

export async function unitFixtureReverts(signers: Signer[]): Promise<UnitFixtureRevertsReturnType> {
  const deployer: Signer = signers[0];
  const reverts: Reverts = await deployReverts(deployer);
  return { reverts };
}
