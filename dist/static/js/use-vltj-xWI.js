function s(r=[],t,e="dictValue",u="dictLabel"){if(!(r!=null&&r.length))return t;const n=r.find(c=>typeof c[e]=="string"?c[e]===t+"":c[e]===Number(t));return n?n[u]:t}export{s};
