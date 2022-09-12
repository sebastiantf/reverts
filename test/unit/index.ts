import { baseContext } from "../shared/contexts";
import { unitTestReverts } from "./reverts/Reverts.test";

baseContext("Unit Tests", function () {
  unitTestReverts();
});
