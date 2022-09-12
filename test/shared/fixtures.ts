import type { Signer } from "@ethersproject/abstract-signer";
import { ERC20Token } from "../../src/types/ERC20Token";
import { ERC20_TOKEN_DECIMALS, ERC20_TOKEN_NAME, ERC20_TOKEN_SYMBOL } from "../../helpers/constants";
import { deployERC20Token } from "./deployers";

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
