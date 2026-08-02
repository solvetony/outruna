import { c7 as etherUnits } from "./index-Cw7cGahV.js";
import { p as parseUnits } from "./parseUnits-Cvyezg1f.js";
function parseEther(ether, unit = "wei") {
  return parseUnits(ether, etherUnits[unit]);
}
export {
  parseEther as p
};
