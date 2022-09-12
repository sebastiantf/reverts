import type { Signer } from "@ethersproject/abstract-signer";
import { artifacts, waffle } from "hardhat";
import type { Artifact } from "hardhat/types";

import { Reverts } from "../../src/types/Reverts";

const { deployContract } = waffle;

export async function deployReverts(deployer: Signer): Promise<Reverts> {
  const revertsArtifact: Artifact = await artifacts.readArtifact("Reverts");
  const reverts: Reverts = <Reverts>await deployContract(deployer, revertsArtifact, []);
  return reverts;
}
