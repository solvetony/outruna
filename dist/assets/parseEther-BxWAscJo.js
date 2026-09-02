import { c7 as etherUnits } from "./index-R3UC2dO4.js";
import { p as parseUnits } from "./parseUnits-o6Cv7VQR.js";
function parseEther(ether, unit = "wei") {
  return parseUnits(ether, etherUnits[unit]);
}
export {
  parseEther as p
};
