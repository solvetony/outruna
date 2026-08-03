import { c7 as etherUnits } from "./index-CgfjQyaX.js";
import { p as parseUnits } from "./parseUnits-Du6qB8fK.js";
function parseEther(ether, unit = "wei") {
  return parseUnits(ether, etherUnits[unit]);
}
export {
  parseEther as p
};
