import type { Signer } from "@ethersproject/abstract-signer";
import { artifacts, waffle } from "hardhat";
import type { Artifact } from "hardhat/types";

import { Reverts } from "../../src/types/Reverts";
import { ERC20Token } from "../../src/types/ERC20Token";
import { BigNumber } from "ethers";

const { deployContract } = waffle;

export async function deployReverts(deployer: Signer): Promise<Reverts> {
  const revertsArtifact: Artifact = await artifacts.readArtifact("Reverts");
  const reverts: Reverts = <Reverts>await deployContract(deployer, revertsArtifact, []);
  return reverts;
}

export async function deployERC20Token(
  deployer: Signer,
  name: string,
  symbol: string,
  decimals: BigNumber,
): Promise<ERC20Token> {
  const erc20TokenArtifact: Artifact = await artifacts.readArtifact("ERC20Token");
  const erc20Token: ERC20Token = <ERC20Token>(
    await deployContract(deployer, erc20TokenArtifact, [name, symbol, decimals])
  );
  return erc20Token;
}
