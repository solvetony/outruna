import { c7 as etherUnits } from "./index-BDOBKk5h.js";
import { p as parseUnits } from "./parseUnits-BKCwu7RB.js";
function parseEther(ether, unit = "wei") {
  return parseUnits(ether, etherUnits[unit]);
}
export {
  parseEther as p
};
