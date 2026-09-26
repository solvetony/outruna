let t=new Set(["https:","mailto:"]);function n(n){if(!n)return null;try{if(t.has(new URL(n).protocol))return n}catch{}return null}

export { n };
