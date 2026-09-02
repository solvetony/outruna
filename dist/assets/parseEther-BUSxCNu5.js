import { c7 as etherUnits } from "./index-lNx1hHWy.js";
import { p as parseUnits } from "./parseUnits-C7KTPunq.js";
function parseEther(ether, unit = "wei") {
  return parseUnits(ether, etherUnits[unit]);
}
export {
  parseEther as p
};
