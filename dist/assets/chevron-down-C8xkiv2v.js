import { gl as e } from './index-BzZ64suB.js';
import { c as createLucideIcon } from './createLucideIcon-BUXdLDa7.js';

const r=async({operation:r,until:a,delay:e$1,interval:s,attempts:o,signal:i})=>{let n,u;e$1&&await e(e$1);let l=0;for(;l<o;){if(i?.aborted)return {status:"aborted",result:n,attempts:l,error:u};l++;try{if(u=void 0,n=await r(),a(n))return {status:"success",result:n,attempts:l};l<o&&await e(s);}catch(r){r instanceof Error&&(u=r),l<o&&await e(s);}}return {status:"max_attempts",result:n,attempts:l,error:u}};

/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode);

export { ChevronDown as C, r };
