import { hx as getBase64Decoder, hy as ot } from './index-Cesj8QNb.js';

async function t({solanaClient:t,tx:o}){let s=getBase64Decoder().decode(ot(o)),{value:n}=await t.rpc.getFeeForMessage(s).send();return n??0n}async function o({solanaClient:a,tx:t,replaceRecentBlockhash:s}){let{value:n}=await a.rpc.simulateTransaction(getBase64Decoder().decode(t),{commitment:"confirmed",encoding:"base64",sigVerify:false,replaceRecentBlockhash:s}).send();if("BlockhashNotFound"===n.err&&s)throw Error("Simulation failed: Blockhash not found");return "BlockhashNotFound"===n.err?await o({solanaClient:a,tx:t,replaceRecentBlockhash:true}):{logs:n.logs??[],error:n.err,hasError:!!n.err,hasFunds:n.logs?.every((e=>!/insufficient funds/gi.test(e)&&!/insufficient lamports/gi.test(e)))??true}}

export { o, t };
