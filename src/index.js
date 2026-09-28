const ENC=new Map([["&","&amp;"],["<","&lt;"],[">","&gt;"],['"',"&quot;"],["'","&#39;"]]);
const DEC=new Map([["amp","&"],["lt","<"],["gt",">"],["quot",'"'],["apos","'"],["#39","'"]]);
export function encodeHtmlEntities(v,o={}){if(typeof v!=="string")throw new TypeError("Expected string");return v.replace(o.quotes===false?/[&<>]/gu:/[&<>"']/gu,c=>ENC.get(c));}
export function decodeHtmlEntities(v){if(typeof v!=="string")throw new TypeError("Expected string");return v.replace(/&(#x[\da-f]+|#\d+|amp|lt|gt|quot|apos|#39);/giu,(m,e)=>{const x=e.toLowerCase();if(x.startsWith("#x"))return String.fromCodePoint(parseInt(x.slice(2),16));if(x.startsWith("#")&&x!=="#39")return String.fromCodePoint(parseInt(x.slice(1),10));return DEC.get(x)??m;});}
