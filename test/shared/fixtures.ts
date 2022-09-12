import type { Signer } from "@ethersproject/abstract-signer";
import { ERC20Token } from "../../src/types/ERC20Token";
import { Reverts } from "../../src/types/Reverts";
import { ERC20_TOKEN_DECIMALS, ERC20_TOKEN_NAME, ERC20_TOKEN_SYMBOL } from "../../helpers/constants";
import { deployERC20Token, deployReverts } from "./deployers";

type IntegrationFixtureReturnType = {
  erc20Token: ERC20Token;
};

export async function integrationFixture(signers: Signer[]): Promise<IntegrationFixtureReturnType> {
  const deployer: Signer = signers[0];
  const erc20Token: ERC20Token = await deployERC20Token(
    deployer,
    ERC20_TOKEN_NAME,
    ERC20_TOKEN_SYMBOL,
    ERC20_TOKEN_DECIMALS,
  );
  return { erc20Token };
}

type UnitFixtureRevertsReturnType = {
  reverts: Reverts;
};

export async function unitFixtureReverts(signers: Signer[]): Promise<UnitFixtureRevertsReturnType> {
  const deployer: Signer = signers[0];
  const reverts: Reverts = await deployReverts(deployer);
  return { reverts };
}
