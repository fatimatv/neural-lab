/* Auditoría del glosario de Neural Lab.
   Comprueba las dos direcciones: que todo término subrayado tenga ficha
   y que toda ficha esté enlazada desde algún punto del texto.
   Uso:  node tools/audit-glosario.js [ruta/al/index.html]
*/
const fs=require("fs");
const path=require("path");
const file=process.argv[2]||path.join(__dirname,"..","index.html");
const s=fs.readFileSync(file,"utf8");
const m=s.match(/const G = \{[\s\S]*?\n\};/); eval(m[0].replace("const G","var G"));
// enlaces en marcado y también dentro de cadenas JS (comillas escapadas)
const used=new Set();
for(const r of [/data-t="([a-z0-9-]+)"/g, /data-t=\\"([a-z0-9-]+)\\"/g])
  for(const x of s.matchAll(r)) used.add(x[1]);
const orphan=Object.keys(G).filter(k=>!used.has(k));
const broken=[...used].filter(k=>!G[k]);
console.log("fichas:",Object.keys(G).length,"· enlazadas:",Object.keys(G).length-orphan.length);
console.log("huérfanas:",orphan.length?orphan.join(", "):"ninguna");
console.log("enlaces sin ficha:",broken.length?broken.join(", "):"ninguno");
