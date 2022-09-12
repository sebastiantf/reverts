import { task, types } from "hardhat/config";
import { TaskArguments } from "hardhat/types";

import { Reverts } from "../../src/types/Reverts";
import { Reverts__factory } from "../../src/types/factories/Reverts__factory";
import { SUBTASK_DEPLOY_VERIFY, SUBTASK_DEPLOY_WAIT_FOR_CONFIRMATIONS, TASK_DEPLOY_REVERTS } from "../constants";

task(TASK_DEPLOY_REVERTS)
  .addParam("confirmations", "How many block confirmations to wait for", 0, types.int)
  .addParam("verify", "Should contract be verified post deployment", true, types.boolean)
  .setAction(async function (taskArguments: TaskArguments, { ethers, run }) {
    const [deployer] = await ethers.getSigners();
    console.log("Deployer: ", deployer.address);

    const revertsFactory: Reverts__factory = <Reverts__factory>await ethers.getContractFactory("Reverts");
    const reverts: Reverts = <Reverts>await revertsFactory.deploy();

    await run(SUBTASK_DEPLOY_WAIT_FOR_CONFIRMATIONS, {
      contract: reverts,
      confirmations: taskArguments.confirmations,
    });

    console.log("Reverts deployed to: ", reverts.address);
    console.log("Deployment txn hash: ", reverts.deployTransaction.hash);

    if (taskArguments.verify) {
      await run(SUBTASK_DEPLOY_VERIFY, {
        contract: reverts,
        args: [],
      });
    }
  });
