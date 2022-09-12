import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import type { MockContract } from "ethereum-waffle";
import type { Fixture } from "ethereum-waffle";

import { ERC20Token } from "../../src/types/ERC20Token";

declare module "mocha" {
  interface Context {
    contracts: Contracts;
    loadFixture: <T>(fixture: Fixture<T>) => Promise<T>;
    mocks: Mocks;
    signers: Signers;
  }
}

export interface Contracts {
  erc20Token: ERC20Token;
}

export interface Mocks {
  erc20Token: MockContract;
}

export interface Signers {
  alice: SignerWithAddress;
  bob: SignerWithAddress;
  carol: SignerWithAddress;
  david: SignerWithAddress;
  eve: SignerWithAddress;
}
