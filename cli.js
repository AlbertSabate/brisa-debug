#!/usr/bin/env bun
// @bun
var{defineProperty:K,getOwnPropertyNames:T,getOwnPropertyDescriptor:C}=Object,E=Object.prototype.hasOwnProperty;var M=new WeakMap,P=(e)=>{var r=M.get(e),c;if(r)return r;if(r=K({},"__esModule",{value:!0}),e&&typeof e==="object"||typeof e==="function")T(e).map((q)=>!E.call(r,q)&&K(r,q,{get:()=>e[q],enumerable:!(c=C(e,q))||c.enumerable}));return M.set(e,r),r},O=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var U=(e,r)=>{for(var c in r)K(e,c,{get:r[c],enumerable:!0,configurable:!0,set:(q)=>r[c]=()=>q})};var D=(e,r)=>()=>(e&&(r=e(e=0)),r);import W from"process";import ee from"os";import F from"tty";function ie(){let e=W?.env??{};if(!e.FORCE_COLOR)return;if(e.FORCE_COLOR==="true"||e.FORCE_COLOR.length===0)return!0;if(e.FORCE_COLOR==="false")return!1;return Math.min(Number.parseInt(e.FORCE_COLOR,10),3)>0}function S(){let e=W?.env??{},r=ie();if(r!==void 0)return r;if(!F.isatty(1)&&!F.isatty(2))return!1;if(W.platform==="win32"){let c=ee.release().split(".");return Number(c[0])>=10&&Number(c[2])>=10586}return e.TERM!=="dumb"}var g;var I=D(()=>{g=S()});var R={};U(R,{yellowLog:()=>ne,redLog:()=>ue,greenLog:()=>re,cyanLog:()=>be,boldLog:()=>se,blueLog:()=>de});var re=(e)=>g?`\x1B[32m${e}\x1B[0m`:e,ne=(e)=>g?`\x1B[33m${e}\x1B[0m`:e,ue=(e)=>g?`\x1B[31m${e}\x1B[0m`:e,de=(e)=>g?`\x1B[34m${e}\x1B[0m`:e,be=(e)=>g?`\x1B[36m${e}\x1B[0m`:e,se=(e)=>g?`\x1B[1m${e}\x1B[0m`:e;var X=D(()=>{I()});var h=O((we,te)=>{te.exports={name:"brisa",version:"0.1.5-canary.3",description:"Brisa, the next-gen web framework.",repository:{type:"git",url:"https://github.com/brisa-build/brisa.git"},license:"MIT",author:{name:"Brisa Team",email:"contact@brisa.build.com"},type:"module",exports:{".":{import:"./out/core/index.js",require:"./out/core/index.js",bun:"./out/core/index.js",node:"./out/core/index.js"},"./jsx-runtime":{import:"./jsx-runtime/index.js",require:"./jsx-runtime/index.js",bun:"./jsx-runtime/index.js",node:"./jsx-runtime/index.js"},"./jsx-dev-runtime":{import:"./jsx-dev-runtime/index.js",require:"./jsx-dev-runtime/index.js",bun:"./jsx-dev-runtime/index.js",node:"./jsx-dev-runtime/index.js"},"./client":{import:"./client/index.js",require:"./client/index.js",bun:"./client/index.js",node:"./client/index.js"},"./client-simplified":{import:"./client-simplified/index.js",require:"./client-simplified/index.js",bun:"./client-simplified/index.js",node:"./client-simplified/index.js"},"./server":{import:"./server/index.js",require:"./server/index.js",bun:"./server/index.js",node:"./server/index.js"},"./macros":{import:"./macros/index.js",require:"./macros/index.js",macro:"./macros/index.js",bun:"./macros/index.js",node:"./macros/index.js"},"./compiler":{import:"./compiler/index.js",require:"./compiler/index.js",macro:"./compiler/index.js",bun:"./compiler/index.js",node:"./compiler/index.js"},"./server/node":{import:"./server/node.js",require:"./server/node.js",bun:"./server/node.js",node:"./server/node.js"},"./test":{import:"./test/index.js",require:"./test/index.js",bun:"./test/index.js",node:"./test/index.js"},"./cli.js":{import:"./cli.js",require:"./cli.js",bun:"./cli.js",node:"./cli.js"}},main:"./out/core/index.js",module:"./out/core/index.js",types:"./out/core/index.d.ts",bin:{brisa:"./cli.js"},files:["out","jsx-runtime","jsx-dev-runtime","client","client-simplified","server","macros","compiler","test","cli.js"],workspaces:["packages/*"],scripts:{build:"bun run clean && bun run build:jsx-runtime && bun run build:jsx-dev-runtime && bun run build:core && bun run build:core-client && bun run build:core-server && bun run build:core-macros && bun run build:core-test && bun run build:core-compiler","build:cli":"bun build --minify --target=bun --outdir=./ cli.ts && bun run build:cli-utils","build:cli-utils":"bun build --minify --target=bun --outdir=out/cli src/cli/build.ts src/cli/build-standalone/index.ts && bun build --minify --target=node --outdir=out/cli src/cli/serve/index.tsx src/cli/integrations/mdx/index.ts src/cli/integrations/tailwindcss/index.ts src/cli/integrations/pandacss/index.ts","build:core":"bun build --minify --outdir=out/core src/core/index.ts && bun run build:cli && cp src/types/index.d.ts out/core/index.d.ts","build:core-compiler":"cd scripts && bun run core-compiler-build.ts && cd .. && cp src/types/compiler.d.ts compiler/index.d.ts","build:core-macros":"bun build --minify --target=bun --outdir=macros src/core/macros/index.ts && bun run build:cli","build:core-client":"bun build --minify --outdir=client src/core/client/index.ts && bun run build:core-client-simplified && bun run build:cli","build:core-client-simplified":"bun build --minify --outdir=client-simplified src/core/client/index.ts --define '__TRAILING_SLASH__=false' --define '__WEB_CONTEXT_PLUGINS__=false' --define '__BASE_PATH__=\"\"' --define '__ASSET_PREFIX__=\"\"' --define '__USE_LOCALE__=false' --define '__USE_PAGE_TRANSLATION__=false'","build:core-server":"bun build --minify --target=node --outdir=server src/core/server/index.ts src/core/server/node.ts && bun run build:cli && cp src/types/server.d.ts server/index.d.ts && cp src/types/server.node.d.ts server/node.d.ts","build:core-test":"bun build --minify --target=bun --outdir=test src/core/test/index.ts && bun run build:cli && cp src/types/test.d.ts test/index.d.ts","build:jsx-dev-runtime":"bun build --minify --target=bun --outdir=jsx-dev-runtime src/jsx-runtime/index.ts && cp src/types/index.d.ts jsx-dev-runtime/index.d.ts","build:jsx-runtime":"bun build --minify --target=bun --outdir=jsx-runtime src/jsx-runtime/index.ts && cp src/types/index.d.ts jsx-runtime/index.d.ts",clean:"rm -rf out jsx-runtime jsx-dev-runtime cli client server cli.js",release:"bun run build && npm publish && bun run clean","release:canary":"bun run build && npm publish --tag next && bun run clean",test:"bun test","test:node":"node --test \"**/*.node-test.js\"","test:coverage":"bun test --coverage","tsc:check":"tsc --noEmit --skipLibCheck"},dependencies:{astring:"1.9.0",csstype:"3.1.3","diff-dom-streaming":"0.6.4",meriyah:"6.0.3"},devDependencies:{"@happy-dom/global-registrator":"15.11.0","@types/bun":"1.1.13",brisa:"latest","@types/mime-types":"2.1.4","mime-types":"2.1.35",typescript:"5.6.3","brisa-tailwindcss":"workspace:*","brisa-pandacss":"workspace:*"},packageManager:"bun@1.1.35",engines:{bun:">= 1.1.35",npm:">= 10.0.0",yarn:">= 3.0.0",pnpm:">= 9.8.0"}}});var{blueLog:xe,yellowLog:Z,redLog:w}=(X(),P(R)),d=import.meta.require("child_process"),y=import.meta.require("path"),J=import.meta.require("fs"),o=import.meta.require("crypto"),i=import.meta.require("process"),{version:le,packageManager:je}=h(),G=y.join(import.meta.dir,"out").replace(`node_modules${y.sep}.bin`,`node_modules${y.sep}brisa`),ce=y.join(G,"cli","integrations","mdx","index.js"),me=y.join(G,"cli","integrations","tailwindcss","index.js"),ye=y.join(G,"cli","integrations","pandacss","index.js"),N=y.join(G,"cli","build.js"),fe=y.join(G,"cli","build-standalone","index.js"),B=y.join(G,"cli","serve","index.js"),L=new Set(["android","ios"]),qe=new Set(["android","ios","desktop"]),ve=xe("[ info ] ")+" ";async function a({currentBunVersion:e,brisaPackageManager:r}){let c=await import(y.resolve(i.cwd(),"package.json")).then((l)=>l.default),q=o.randomBytes(32).toString("hex"),A=o.randomBytes(8).toString("hex"),Y=i.env.BRISA_BUILD_FOLDER,Q=r?.replace?.("bun@","");if(!Bun.semver.satisfies(e,">="+Q)){let n=i.platform==="win32"?`iex "& {\$(irm https://bun.sh/install.ps1)} -Version ${Q}"`:`curl -fsSL https://bun.sh/install | bash -s "bun-v${Q}"`;console.log(Z(`Warning: Your current Bun version is not supported by the current version of Brisa, but you can still use older versions from Brisa. Please upgrade Bun to ${Q} or later to use latest version of Brisa.\n`)),console.log(Z("You can upgrade Bun by running:\n")),console.log(Z(n)),console.log(Z("\nAfter upgrading, you can run Brisa again"))}let v={stdio:"inherit",env:{...i.env,NODE_ENV:"production",BRISA_BUILD_FOLDER:Y,__CRYPTO_KEY__:q,__CRYPTO_IV__:A}},j={stdio:"inherit",env:{...i.env,NODE_ENV:"development",BRISA_BUILD_FOLDER:Y,__CRYPTO_KEY__:q,__CRYPTO_IV__:A}},b,$,z=!1,m="bun";try{let l=await import(y.join(i.cwd(),"brisa.config.ts")).then((s)=>s.default);if(typeof l.output==="string")m=l.output,z=qe.has(m)}catch(l){}try{if(d.spawnSync("bun",["--version"],{stdio:"ignore"}).status===0)b="bun",$="bunx";else b=`${i.env.HOME}/.bun/bin/bun`,$=`${i.env.HOME}/.bun/bin/bunx`;if(i.argv[2]==="dev"){let n=i.env.PORT??3000,s=!1;for(let x=3;x<i.argv.length;x++)switch(i.argv[x]){case"--skip-tauri":case"-s":z=!1;break;case"-p":case"--port":n=+i.argv[x+1],x++;break;case"-d":case"--debug":s=!0;break;case"--help":return console.log("Usage: brisa dev [options]"),console.log("Options:"),console.log(" -p, --port         Specify port"),console.log(" -d, --debug        Enable debug mode"),console.log(" -s, --skip-tauri   Skip open tauri app when 'output': 'desktop' | 'android' | 'ios' in brisa.config.ts"),console.log(" --help             Show help"),i.exit(0)}let f=[N,"DEV"],u=[B,n.toString(),"DEV"];if(z){let x=["tauri","dev","--port",n.toString()];if(L.has(m))x.splice(1,0,m);await V(j,n),d.spawnSync(b,f,j),d.spawn(b,u,j),d.spawnSync($,x,j)}else if(s)d.spawnSync(b,f,j),d.spawnSync(b,["--inspect",...u],j);else d.spawnSync(b,f,j),d.spawnSync(b,u,j)}else if(i.argv[2]==="build"){let n=new Set,s=new Set,f="PROD";for(let t=3;t<i.argv.length;t++)switch(i.argv[t]){case"--dev":case"-d":v.env.NODE_ENV="development",f="DEV";break;case"--component":case"-c":case"--web-component":case"-w":let k=i.argv[t].includes("w"),H=i.argv[t+1];if(!H||!J.existsSync(H)){let _=k?"--web-component (-w)":"--component (-c)",p=k?"-w some/web-component.tsx":"-c some/server-component.tsx";return console.log(w(`Ops!: using ${_} flag you need to specify a file.`)),console.log(w(`Example: brisa build ${p}`)),i.exit(0)}else if(k)n.add(H);else s.add(H);break;case"--skip-tauri":case"-s":z=!1;break;case"--help":return console.log("Usage: brisa build [options]"),console.log("Options:"),console.log(" -d, --dev           Build for development (useful for custom server)"),console.log(" -w, --web-component Build standalone web component to create a library"),console.log(" -c, --component     Build standalone server component to create a library"),console.log(" -s, --skip-tauri    Skip open tauri app when 'output': 'desktop' | 'android' | 'ios' in brisa.config.ts"),console.log(" --help              Show help"),i.exit(0)}let u=[N,f],x=n.intersection(s);if(x.size>0){let t=Array.from(x.values()).join(" -w ");console.log(w("Error: The --web-component flag automatically builds both client and server. Using the same file for both --component (-c) and --web-component (-w) flags is not allowed.")),console.log(w(`Suggestion: Use only the --web-component flag instead: brisa build -w ${t}`)),i.exit(1)}if(n.size||s.size){u[0]=fe;for(let t of n)u.push("WC"),u.push(t);for(let t of s)u.push("SC"),u.push(t);d.spawnSync(b,u,v)}else if(z){let t=["tauri","build"];if(L.has(m))t.splice(1,0,m);await V(v),d.spawnSync(b,u,v),d.spawnSync($,t,v)}else d.spawnSync(b,u,v)}else if(i.argv[2]==="start"){let n=i.env.PORT??3000;for(let u=3;u<i.argv.length;u++)switch(i.argv[u]){case"-p":case"--port":n=+i.argv[u+1],u++;break;case"--help":return console.log("Usage: brisa start [options]"),console.log("Options:"),console.log(" -p, --port    Specify port"),console.log(" --help        Show help"),i.exit(0)}let s=m==="node",f=s?"node":b;console.log(ve,`\uD83D\uDE80 Brisa ${le}: Runtime on `+(s?`Node.js ${i.version}`:`Bun.js ${Bun.version}`)),d.spawnSync(f,[B,n.toString(),"PROD"],v)}else if(i.argv[2]==="add"){let n=i.argv[3]?.toLowerCase();if(n==="mdx")console.log("Installing @mdx-js/esbuild..."),d.spawnSync(b,["i","@mdx-js/esbuild@3.0.1"],j),d.spawnSync(b,[ce],j);else if(n==="tailwindcss")d.spawnSync(b,[me],j);else if(n==="pandacss")d.spawnSync(b,[ye],j);else return console.log("Integration not found"),console.log("Usage: brisa add <integration>"),console.log("Integrations:"),console.log(" mdx          Add mdx integration"),console.log(" tailwindcss  Add tailwindcss integration"),console.log(" pandacss     Add pandacss integration"),console.log("Options:"),console.log(" --help       Show help"),i.exit(0)}else return console.log("Command not found"),console.log("Usage: brisa [options] <command>"),console.log("Options:"),console.log(" --help        Show help"),console.log("Commands:"),console.log(" dev           Start development server"),console.log(" build         Build for production"),console.log(" start         Start production server"),console.log(" add           Add integrations (e.g., mdx, tailwindcss, pandacss)"),i.exit(0)}catch(l){return console.error("Error:",l.message),i.exit(1)}async function V(l=j,n=i.env.PORT??3000){let s=y.join(i.cwd(),"src-tauri","tauri.conf.json"),f=J.existsSync(s),u=L.has(m);if(!c?.dependencies?.["@tauri-apps/cli"])console.log("Installing @tauri-apps/cli..."),d.spawnSync(b,["i","@tauri-apps/cli@2.0.0"],l);if(f&&u)d.spawnSync($,["tauri",m,"init"],l);if(f)return;let x=c?.name??"my-app",t=["tauri","init","-A",x,"-W",x,"-D","../out","--dev-url",`http://localhost:${n}`,"--before-dev-command",`echo 'Starting ${m} app...'`,"--before-build-command",`echo 'Building ${m} app...'`];if(console.log("Initializing Tauri..."),d.spawnSync($,t,l),!J.existsSync(s))return;let k=await import(s).then((H)=>H.default);if(k.identifier=`com.${x}`,J.writeFileSync(s,JSON.stringify(k,null,2)),u)d.spawnSync($,["tauri",m,"init"],l)}}var ge=a;if(import.meta.main)a({currentBunVersion:Bun.version,brisaPackageManager:je});export{ge as main};
