(function(){"use strict";function Wv(n,e){return e.forEach(function(t){t&&typeof t!="string"&&!Array.isArray(t)&&Object.keys(t).forEach(function(s){if(s!=="default"&&!(s in n)){var r=Object.getOwnPropertyDescriptor(t,s);Object.defineProperty(n,s,r.get?r:{enumerable:!0,get:function(){return t[s]}})}})}),Object.freeze(n)}var ja={},Ka=Object.freeze({__proto__:null,default:ja}),mr={exports:{}},Uv=mr.exports,Ru=(()=>{var n=globalThis.document?.currentScript?.src;return async function(e={}){var t,i=e,s=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,o=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer";i.expectedDataFileDownloads||(i.expectedDataFileDownloads=0),i.expectedDataFileDownloads++,(()=>{var p=typeof ENVIRONMENT_IS_PTHREAD<"u"&&ENVIRONMENT_IS_PTHREAD,m=typeof ENVIRONMENT_IS_WASM_WORKER<"u"&&ENVIRONMENT_IS_WASM_WORKER;if(p||m)return;var v=globalThis.process&&globalThis.process.versions&&globalThis.process.versions.node&&globalThis.process.type!="renderer";async function k(I){typeof window=="object"?window.encodeURIComponent(window.location.pathname.substring(0,window.location.pathname.lastIndexOf("/"))+"/"):typeof process>"u"&&typeof location<"u"&&encodeURIComponent(location.pathname.substring(0,location.pathname.lastIndexOf("/"))+"/");var R="ale.data",P="ale.data",L=i.locateFile?i.locateFile(P,""):P,q=I.remote_package_size;async function ie(oe,ve){if(v){var ze=(ja||Ka).readFileSync(oe);return new Uint8Array(ze).buffer}i.dataFileDownloads||(i.dataFileDownloads={});try{var Ge=await fetch(oe)}catch(is){throw new Error(`Network Error: ${oe}`,{e:is})}if(!Ge.ok)throw new Error(`${Ge.status}: ${Ge.url}`);const He=[],ut=Ge.headers,gt=Number(ut.get("Content-Length")||ve);let xt=0;i.setStatus&&i.setStatus("Downloading data...");const Vt=Ge.body.getReader();for(;;){var{done:nt,value:Ts}=await Vt.read();if(nt)break;He.push(Ts),xt+=Ts.length,i.dataFileDownloads[oe]={loaded:xt,total:gt};let is=0,Eu=0;for(const Vv of Object.values(i.dataFileDownloads))is+=Vv.loaded,Eu+=Vv.total;i.setStatus&&i.setStatus(`Downloading data... (${is}/${Eu})`)}const ro=new Uint8Array(He.map(is=>is.length).reduce((is,Eu)=>is+Eu,0));let Bv=0;for(const is of He)ro.set(is,Bv),Bv+=is.length;return ro.buffer}var he,xe=i.getPreloadedPackage&&i.getPreloadedPackage(L,q);xe||(he=ie(L,q));async function de(oe){function ve(ut,gt){if(!ut)throw new Error(gt)}oe.FS_createPath("/","roms",!0,!0);for(var ze of I.files){var Ge=ze.filename;oe.addRunDependency(`fp ${Ge}`)}async function He(ut){ve(ut,"Loading data file failed."),ve(ut.constructor.name===ArrayBuffer.name,"bad input to processPackageData "+ut.constructor.name);var gt=new Uint8Array(ut);for(var xt of I.files){var Vt=xt.filename,nt=gt.subarray(xt.start,xt.end);oe.FS_createDataFile(Vt,null,nt,!0,!0,!0),oe.removeRunDependency(`fp ${Vt}`)}oe.removeRunDependency("datafile_ale.data")}oe.addRunDependency("datafile_ale.data"),oe.preloadResults||(oe.preloadResults={}),oe.preloadResults[R]={fromCache:!1},xe||(xe=await he),He(xe)}i.calledRun?de(i):(i.preRun||(i.preRun=[]),i.preRun.push(de))}k({files:[{filename:"/roms/__init__.py",start:0,end:2181},{filename:"/roms/adventure.bin",start:2181,end:6277},{filename:"/roms/air_raid.bin",start:6277,end:10373},{filename:"/roms/alien.bin",start:10373,end:14469},{filename:"/roms/amidar.bin",start:14469,end:18565},{filename:"/roms/assault.bin",start:18565,end:22661},{filename:"/roms/asterix.bin",start:22661,end:30853},{filename:"/roms/asteroids.bin",start:30853,end:39045},{filename:"/roms/atlantis.bin",start:39045,end:43141},{filename:"/roms/atlantis2.bin",start:43141,end:47237},{filename:"/roms/backgammon.bin",start:47237,end:51333},{filename:"/roms/bank_heist.bin",start:51333,end:55429},{filename:"/roms/basic_math.bin",start:55429,end:57477},{filename:"/roms/battle_zone.bin",start:57477,end:65669},{filename:"/roms/beam_rider.bin",start:65669,end:73861},{filename:"/roms/berzerk.bin",start:73861,end:77957},{filename:"/roms/blackjack.bin",start:77957,end:80005},{filename:"/roms/bowling.bin",start:80005,end:82053},{filename:"/roms/boxing.bin",start:82053,end:84101},{filename:"/roms/breakout.bin",start:84101,end:86149},{filename:"/roms/carnival.bin",start:86149,end:90245},{filename:"/roms/casino.bin",start:90245,end:94341},{filename:"/roms/centipede.bin",start:94341,end:102533},{filename:"/roms/chopper_command.bin",start:102533,end:106629},{filename:"/roms/combat.bin",start:106629,end:108677},{filename:"/roms/crazy_climber.bin",start:108677,end:116869},{filename:"/roms/crossbow.bin",start:116869,end:133253},{filename:"/roms/darkchambers.bin",start:133253,end:149637},{filename:"/roms/defender.bin",start:149637,end:153733},{filename:"/roms/demon_attack.bin",start:153733,end:157829},{filename:"/roms/donkey_kong.bin",start:157829,end:161925},{filename:"/roms/double_dunk.bin",start:161925,end:178309},{filename:"/roms/earthworld.bin",start:178309,end:186501},{filename:"/roms/elevator_action.bin",start:186501,end:194693},{filename:"/roms/enduro.bin",start:194693,end:198789},{filename:"/roms/entombed.bin",start:198789,end:202885},{filename:"/roms/et.bin",start:202885,end:211077},{filename:"/roms/fishing_derby.bin",start:211077,end:213125},{filename:"/roms/flag_capture.bin",start:213125,end:215173},{filename:"/roms/freeway.bin",start:215173,end:217221},{filename:"/roms/frogger.bin",start:217221,end:221317},{filename:"/roms/frostbite.bin",start:221317,end:225413},{filename:"/roms/galaxian.bin",start:225413,end:233605},{filename:"/roms/gopher.bin",start:233605,end:237701},{filename:"/roms/gravitar.bin",start:237701,end:245893},{filename:"/roms/hangman.bin",start:245893,end:249989},{filename:"/roms/haunted_house.bin",start:249989,end:254085},{filename:"/roms/hero.bin",start:254085,end:262277},{filename:"/roms/human_cannonball.bin",start:262277,end:264325},{filename:"/roms/ice_hockey.bin",start:264325,end:268421},{filename:"/roms/jamesbond.bin",start:268421,end:276613},{filename:"/roms/journey_escape.bin",start:276613,end:280709},{filename:"/roms/joust.bin",start:280709,end:288901},{filename:"/roms/kaboom.bin",start:288901,end:290949},{filename:"/roms/kangaroo.bin",start:290949,end:299141},{filename:"/roms/keystone_kapers.bin",start:299141,end:303237},{filename:"/roms/king_kong.bin",start:303237,end:307333},{filename:"/roms/klax.bin",start:307333,end:323717},{filename:"/roms/koolaid.bin",start:323717,end:327813},{filename:"/roms/krull.bin",start:327813,end:336005},{filename:"/roms/kung_fu_master.bin",start:336005,end:344197},{filename:"/roms/laser_gates.bin",start:344197,end:348293},{filename:"/roms/lost_luggage.bin",start:348293,end:352389},{filename:"/roms/mario_bros.bin",start:352389,end:360581},{filename:"/roms/maze_craze.bin",start:360581,end:364677},{filename:"/roms/md5.json",start:364677,end:370628},{filename:"/roms/miniature_golf.bin",start:370628,end:372676},{filename:"/roms/montezuma_revenge.bin",start:372676,end:380868},{filename:"/roms/mr_do.bin",start:380868,end:389060},{filename:"/roms/ms_pacman.bin",start:389060,end:397252},{filename:"/roms/name_this_game.bin",start:397252,end:401348},{filename:"/roms/othello.bin",start:401348,end:403396},{filename:"/roms/pacman.bin",start:403396,end:407492},{filename:"/roms/phoenix.bin",start:407492,end:415684},{filename:"/roms/pitfall.bin",start:415684,end:419780},{filename:"/roms/pitfall2.bin",start:419780,end:430275},{filename:"/roms/pong.bin",start:430275,end:432323},{filename:"/roms/pooyan.bin",start:432323,end:436419},{filename:"/roms/private_eye.bin",start:436419,end:444611},{filename:"/roms/qbert.bin",start:444611,end:448707},{filename:"/roms/riverraid.bin",start:448707,end:452803},{filename:"/roms/road_runner.bin",start:452803,end:469187},{filename:"/roms/robotank.bin",start:469187,end:477379},{filename:"/roms/seaquest.bin",start:477379,end:481475},{filename:"/roms/sir_lancelot.bin",start:481475,end:489667},{filename:"/roms/skiing.bin",start:489667,end:491715},{filename:"/roms/solaris.bin",start:491715,end:508099},{filename:"/roms/space_invaders.bin",start:508099,end:512195},{filename:"/roms/space_war.bin",start:512195,end:514243},{filename:"/roms/star_gunner.bin",start:514243,end:518339},{filename:"/roms/superman.bin",start:518339,end:522435},{filename:"/roms/surround.bin",start:522435,end:524483},{filename:"/roms/tennis.bin",start:524483,end:526531},{filename:"/roms/tetris.bin",start:526531,end:528579},{filename:"/roms/tic_tac_toe_3d.bin",start:528579,end:530627},{filename:"/roms/time_pilot.bin",start:530627,end:538819},{filename:"/roms/trondead.bin",start:538819,end:542915},{filename:"/roms/turmoil.bin",start:542915,end:547011},{filename:"/roms/tutankham.bin",start:547011,end:555203},{filename:"/roms/up_n_down.bin",start:555203,end:563395},{filename:"/roms/venture.bin",start:563395,end:567491},{filename:"/roms/video_checkers.bin",start:567491,end:571587},{filename:"/roms/video_chess.bin",start:571587,end:575683},{filename:"/roms/video_cube.bin",start:575683,end:579779},{filename:"/roms/video_pinball.bin",start:579779,end:583875},{filename:"/roms/warlords.bin",start:583875,end:587971},{filename:"/roms/wizard_of_wor.bin",start:587971,end:592067},{filename:"/roms/word_zapper.bin",start:592067,end:596163},{filename:"/roms/yars_revenge.bin",start:596163,end:600259},{filename:"/roms/zaxxon.bin",start:600259,end:608451}],remote_package_size:608451})})();var i=i||{};i.preRun=i.preRun||[],i.preRun.push(function(){if(i.FS&&i.roms){try{i.FS.mkdir("/roms")}catch{}Object.keys(i.roms).forEach(function(p){var m=i.roms[p];m instanceof ArrayBuffer&&(m=new Uint8Array(m));try{i.FS.writeFile("/roms/"+p,m),console.log("[ALE] Loaded ROM: "+p)}catch(v){console.error("[ALE] Failed to load ROM "+p+":",v)}})}}),typeof i.canvas>"u"&&typeof document<"u"&&(i.canvas=document.getElementById("canvas")),i.print=i.print||function(p){console.log("[ALE]",p)},i.printErr=i.printErr||function(p){console.error("[ALE Error]",p)};var a="./this.program",l=(p,m)=>{throw m};typeof __filename<"u"?n=__filename:r&&(n=self.location.href);var c="";function u(p){return i.locateFile?i.locateFile(p,c):c+p}var h,d;if(o){var f=ja||Ka;c=__dirname+"/",d=p=>{p=$(p)?new URL(p):p;var m=f.readFileSync(p);return m},h=async(p,m=!0)=>{p=$(p)?new URL(p):p;var v=f.readFileSync(p,m?void 0:"utf8");return v},process.argv.length>1&&(a=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),l=(p,m)=>{throw process.exitCode=p,m}}else if(s||r){try{c=new URL(".",n).href}catch{}r&&(d=p=>{var m=new XMLHttpRequest;return m.open("GET",p,!1),m.responseType="arraybuffer",m.send(null),new Uint8Array(m.response)}),h=async p=>{if($(p))return new Promise((v,k)=>{var I=new XMLHttpRequest;I.open("GET",p,!0),I.responseType="arraybuffer",I.onload=()=>{if(I.status==200||I.status==0&&I.response){v(I.response);return}k(I.status)},I.onerror=k,I.send(null)});var m=await fetch(p,{credentials:"same-origin"});if(m.ok)return m.arrayBuffer();throw new Error(m.status+" : "+m.url)}}var g=console.log.bind(console),x=console.error.bind(console),b,y=!1,w,$=p=>p.startsWith("file://"),C,N,E,F,O,A,D,S,z,U,G,K,X=!1;function Q(){var p=Tu.buffer;E=new Int8Array(p),O=new Int16Array(p),F=new Uint8Array(p),A=new Uint16Array(p),D=new Int32Array(p),S=new Uint32Array(p),z=new Float32Array(p),U=new Float64Array(p),G=new BigInt64Array(p),K=new BigUint64Array(p)}function Z(){if(i.preRun)for(typeof i.preRun=="function"&&(i.preRun=[i.preRun]);i.preRun.length;)lt(i.preRun.shift());Pe(mt)}function te(){X=!0,!i.noFSInit&&!T.initialized&&T.init(),Ha.ra(),T.ignorePermissions=!1}function re(){if(i.postRun)for(typeof i.postRun=="function"&&(i.postRun=[i.postRun]);i.postRun.length;)at(i.postRun.shift());Pe(Ye)}function se(p){i.onAbort?.(p),p="Aborted("+p+")",x(p),y=!0,p+=". Build with -sASSERTIONS for more info.";var m=new WebAssembly.RuntimeError(p);throw N?.(m),m}var ae;function le(){return u("ale.wasm")}function fe(p){if(p==ae&&b)return new Uint8Array(b);if(d)return d(p);throw"both async and sync fetching of the wasm failed"}async function pe(p){if(!b)try{var m=await h(p);return new Uint8Array(m)}catch{}return fe(p)}async function we(p,m){try{var v=await pe(p),k=await WebAssembly.instantiate(v,m);return k}catch(I){x(`failed to asynchronously prepare wasm: ${I}`),se(I)}}async function $e(p,m,v){if(!p&&!$(m)&&!o)try{var k=fetch(m,{credentials:"same-origin"}),I=await WebAssembly.instantiateStreaming(k,v);return I}catch(R){x(`wasm streaming compile failed: ${R}`),x("falling back to ArrayBuffer instantiation")}return we(m,v)}function Ee(){var p={a:Oj};return p}async function Te(){function p(R,P){return Ha=R.exports,Fj(Ha),Q(),Ha}function m(R){return p(R.instance)}var v=Ee();if(i.instantiateWasm)return new Promise((R,P)=>{i.instantiateWasm(v,(L,q)=>{R(p(L))})});ae??=le();var k=await $e(b,ae,v),I=m(k);return I}class Fe{name="ExitStatus";constructor(m){this.message=`Program terminated with exit(${m})`,this.status=m}}var Pe=p=>{for(;p.length>0;)p.shift()(i)},Ye=[],at=p=>Ye.push(p),mt=[],lt=p=>mt.push(p),Ze=!0,_e=p=>_v(p),Ae=()=>Ov(),Nn=[],Ct=0,$s=p=>{var m=new wn(p);return m.get_caught()||(m.set_caught(!0),Ct--),m.set_rethrown(!1),Nn.push(m),Mv(p)},kt=0,Vs=()=>{$t(0,0);var p=Nn.pop();Pv(p.excPtr),kt=0};class wn{constructor(m){this.excPtr=m,this.ptr=m-24}set_type(m){S[this.ptr+4>>2]=m}get_type(){return S[this.ptr+4>>2]}set_destructor(m){S[this.ptr+8>>2]=m}get_destructor(){return S[this.ptr+8>>2]}set_caught(m){m=m?1:0,E[this.ptr+12]=m}get_caught(){return E[this.ptr+12]!=0}set_rethrown(m){m=m?1:0,E[this.ptr+13]=m}get_rethrown(){return E[this.ptr+13]!=0}init(m,v){this.set_adjusted_ptr(0),this.set_type(m),this.set_destructor(v)}set_adjusted_ptr(m){S[this.ptr+16>>2]=m}get_adjusted_ptr(){return S[this.ptr+16>>2]}}var Tn=p=>Av(p),os=p=>{var m=kt;if(!m)return Tn(0),0;var v=new wn(m);v.set_adjusted_ptr(m);var k=v.get_type();if(!k)return Tn(0),m;for(var I of p){if(I===0||I===k)break;var R=v.ptr+16;if(Lv(I,k,R))return Tn(I),m}return Tn(k),m},Is=()=>os([]),Ss=p=>os([p]),Yr=()=>{var p=Nn.pop();p||se("no exception to throw");var m=p.excPtr;throw p.get_rethrown()||(Nn.push(p),p.set_rethrown(!0),p.set_caught(!1),Ct++),Af(m),kt=m,kt},Ma=(p,m,v)=>{var k=new wn(p);throw k.init(m,v),Af(p),kt=p,Ct++,kt},za=()=>Ct,pf=p=>{throw kt||(kt=p),kt},Ws=()=>{var p=D[+hn.varargs>>2];return hn.varargs+=4,p},pr=Ws,ot={isAbs:p=>p.charAt(0)==="/",splitPath:p=>{var m=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return m.exec(p).slice(1)},normalizeArray:(p,m)=>{for(var v=0,k=p.length-1;k>=0;k--){var I=p[k];I==="."?p.splice(k,1):I===".."?(p.splice(k,1),v++):v&&(p.splice(k,1),v--)}if(m)for(;v;v--)p.unshift("..");return p},normalize:p=>{var m=ot.isAbs(p),v=p.slice(-1)==="/";return p=ot.normalizeArray(p.split("/").filter(k=>!!k),!m).join("/"),!p&&!m&&(p="."),p&&v&&(p+="/"),(m?"/":"")+p},dirname:p=>{var m=ot.splitPath(p),v=m[0],k=m[1];return!v&&!k?".":(k&&(k=k.slice(0,-1)),v+k)},basename:p=>p&&p.match(/([^\/]+|\/)\/*$/)[1],join:(...p)=>ot.normalize(p.join("/")),join2:(p,m)=>ot.normalize(p+"/"+m)},G6=()=>{if(o){var p=ja||Ka;return m=>p.randomFillSync(m)}return m=>crypto.getRandomValues(m)},Qw=p=>{(Qw=G6())(p)},Ho={resolve:(...p)=>{for(var m="",v=!1,k=p.length-1;k>=-1&&!v;k--){var I=k>=0?p[k]:T.cwd();if(typeof I!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!I)return"";m=I+"/"+m,v=ot.isAbs(I)}return m=ot.normalizeArray(m.split("/").filter(R=>!!R),!v).join("/"),(v?"/":"")+m||"."},relative:(p,m)=>{p=Ho.resolve(p).slice(1),m=Ho.resolve(m).slice(1);function v(ie){for(var he=0;he<ie.length&&ie[he]==="";he++);for(var xe=ie.length-1;xe>=0&&ie[xe]==="";xe--);return he>xe?[]:ie.slice(he,xe-he+1)}for(var k=v(p.split("/")),I=v(m.split("/")),R=Math.min(k.length,I.length),P=R,L=0;L<R;L++)if(k[L]!==I[L]){P=L;break}for(var q=[],L=P;L<k.length;L++)q.push("..");return q=q.concat(I.slice(P)),q.join("/")}},ev=globalThis.TextDecoder&&new TextDecoder,tv=(p,m,v,k)=>{var I=m+v;if(k)return I;for(;p[m]&&!(m>=I);)++m;return m},jo=(p,m=0,v,k)=>{var I=tv(p,m,v,k);if(I-m>16&&p.buffer&&ev)return ev.decode(p.subarray(m,I));for(var R="";m<I;){var P=p[m++];if(!(P&128)){R+=String.fromCharCode(P);continue}var L=p[m++]&63;if((P&224)==192){R+=String.fromCharCode((P&31)<<6|L);continue}var q=p[m++]&63;if((P&240)==224?P=(P&15)<<12|L<<6|q:P=(P&7)<<18|L<<12|q<<6|p[m++]&63,P<65536)R+=String.fromCharCode(P);else{var ie=P-65536;R+=String.fromCharCode(55296|ie>>10,56320|ie&1023)}}return R},ff=[],yu=p=>{for(var m=0,v=0;v<p.length;++v){var k=p.charCodeAt(v);k<=127?m++:k<=2047?m+=2:k>=55296&&k<=57343?(m+=4,++v):m+=3}return m},nv=(p,m,v,k)=>{if(!(k>0))return 0;for(var I=v,R=v+k-1,P=0;P<p.length;++P){var L=p.codePointAt(P);if(L<=127){if(v>=R)break;m[v++]=L}else if(L<=2047){if(v+1>=R)break;m[v++]=192|L>>6,m[v++]=128|L&63}else if(L<=65535){if(v+2>=R)break;m[v++]=224|L>>12,m[v++]=128|L>>6&63,m[v++]=128|L&63}else{if(v+3>=R)break;m[v++]=240|L>>18,m[v++]=128|L>>12&63,m[v++]=128|L>>6&63,m[v++]=128|L&63,P++}}return m[v]=0,v-I},mf=(p,m,v)=>{var k=yu(p)+1,I=new Array(k),R=nv(p,I,0,I.length);return I.length=R,I},H6=()=>{if(!ff.length){var p=null;if(o){var m=256,v=Buffer.alloc(m),k=0,I=process.stdin.fd;try{k=f.readSync(I,v,0,m)}catch(R){if(R.toString().includes("EOF"))k=0;else throw R}k>0&&(p=v.slice(0,k).toString("utf-8"))}else globalThis.window?.prompt&&(p=window.prompt("Input: "),p!==null&&(p+=`
`));if(!p)return null;ff=mf(p)}return ff.shift()},Zr={ttys:[],init(){},shutdown(){},register(p,m){Zr.ttys[p]={input:[],output:[],ops:m},T.registerDevice(p,Zr.stream_ops)},stream_ops:{open(p){var m=Zr.ttys[p.node.rdev];if(!m)throw new T.ErrnoError(43);p.tty=m,p.seekable=!1},close(p){p.tty.ops.fsync(p.tty)},fsync(p){p.tty.ops.fsync(p.tty)},read(p,m,v,k,I){if(!p.tty||!p.tty.ops.get_char)throw new T.ErrnoError(60);for(var R=0,P=0;P<k;P++){var L;try{L=p.tty.ops.get_char(p.tty)}catch{throw new T.ErrnoError(29)}if(L===void 0&&R===0)throw new T.ErrnoError(6);if(L==null)break;R++,m[v+P]=L}return R&&(p.node.atime=Date.now()),R},write(p,m,v,k,I){if(!p.tty||!p.tty.ops.put_char)throw new T.ErrnoError(60);try{for(var R=0;R<k;R++)p.tty.ops.put_char(p.tty,m[v+R])}catch{throw new T.ErrnoError(29)}return k&&(p.node.mtime=p.node.ctime=Date.now()),R}},default_tty_ops:{get_char(p){return H6()},put_char(p,m){m===null||m===10?(g(jo(p.output)),p.output=[]):m!=0&&p.output.push(m)},fsync(p){p.output?.length>0&&(g(jo(p.output)),p.output=[])},ioctl_tcgets(p){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(p,m,v){return 0},ioctl_tiocgwinsz(p){return[24,80]}},default_tty1_ops:{put_char(p,m){m===null||m===10?(x(jo(p.output)),p.output=[]):m!=0&&p.output.push(m)},fsync(p){p.output?.length>0&&(x(jo(p.output)),p.output=[])}}},sv=p=>{se()},Le={ops_table:null,mount(p){return Le.createNode(null,"/",16895,0)},createNode(p,m,v,k){if(T.isBlkdev(v)||T.isFIFO(v))throw new T.ErrnoError(63);Le.ops_table||={dir:{node:{getattr:Le.node_ops.getattr,setattr:Le.node_ops.setattr,lookup:Le.node_ops.lookup,mknod:Le.node_ops.mknod,rename:Le.node_ops.rename,unlink:Le.node_ops.unlink,rmdir:Le.node_ops.rmdir,readdir:Le.node_ops.readdir,symlink:Le.node_ops.symlink},stream:{llseek:Le.stream_ops.llseek}},file:{node:{getattr:Le.node_ops.getattr,setattr:Le.node_ops.setattr},stream:{llseek:Le.stream_ops.llseek,read:Le.stream_ops.read,write:Le.stream_ops.write,mmap:Le.stream_ops.mmap,msync:Le.stream_ops.msync}},link:{node:{getattr:Le.node_ops.getattr,setattr:Le.node_ops.setattr,readlink:Le.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Le.node_ops.getattr,setattr:Le.node_ops.setattr},stream:T.chrdev_stream_ops}};var I=T.createNode(p,m,v,k);return T.isDir(I.mode)?(I.node_ops=Le.ops_table.dir.node,I.stream_ops=Le.ops_table.dir.stream,I.contents={}):T.isFile(I.mode)?(I.node_ops=Le.ops_table.file.node,I.stream_ops=Le.ops_table.file.stream,I.usedBytes=0,I.contents=null):T.isLink(I.mode)?(I.node_ops=Le.ops_table.link.node,I.stream_ops=Le.ops_table.link.stream):T.isChrdev(I.mode)&&(I.node_ops=Le.ops_table.chrdev.node,I.stream_ops=Le.ops_table.chrdev.stream),I.atime=I.mtime=I.ctime=Date.now(),p&&(p.contents[m]=I,p.atime=p.mtime=p.ctime=I.atime),I},getFileDataAsTypedArray(p){return p.contents?p.contents.subarray?p.contents.subarray(0,p.usedBytes):new Uint8Array(p.contents):new Uint8Array(0)},expandFileStorage(p,m){var v=p.contents?p.contents.length:0;if(!(v>=m)){var k=1024*1024;m=Math.max(m,v*(v<k?2:1.125)>>>0),v!=0&&(m=Math.max(m,256));var I=p.contents;p.contents=new Uint8Array(m),p.usedBytes>0&&p.contents.set(I.subarray(0,p.usedBytes),0)}},resizeFileStorage(p,m){if(p.usedBytes!=m)if(m==0)p.contents=null,p.usedBytes=0;else{var v=p.contents;p.contents=new Uint8Array(m),v&&p.contents.set(v.subarray(0,Math.min(m,p.usedBytes))),p.usedBytes=m}},node_ops:{getattr(p){var m={};return m.dev=T.isChrdev(p.mode)?p.id:1,m.ino=p.id,m.mode=p.mode,m.nlink=1,m.uid=0,m.gid=0,m.rdev=p.rdev,T.isDir(p.mode)?m.size=4096:T.isFile(p.mode)?m.size=p.usedBytes:T.isLink(p.mode)?m.size=p.link.length:m.size=0,m.atime=new Date(p.atime),m.mtime=new Date(p.mtime),m.ctime=new Date(p.ctime),m.blksize=4096,m.blocks=Math.ceil(m.size/m.blksize),m},setattr(p,m){for(const v of["mode","atime","mtime","ctime"])m[v]!=null&&(p[v]=m[v]);m.size!==void 0&&Le.resizeFileStorage(p,m.size)},lookup(p,m){throw Le.doesNotExistError||(Le.doesNotExistError=new T.ErrnoError(44),Le.doesNotExistError.stack="<generic error, no stack>"),Le.doesNotExistError},mknod(p,m,v,k){return Le.createNode(p,m,v,k)},rename(p,m,v){var k;try{k=T.lookupNode(m,v)}catch{}if(k){if(T.isDir(p.mode))for(var I in k.contents)throw new T.ErrnoError(55);T.hashRemoveNode(k)}delete p.parent.contents[p.name],m.contents[v]=p,p.name=v,m.ctime=m.mtime=p.parent.ctime=p.parent.mtime=Date.now()},unlink(p,m){delete p.contents[m],p.ctime=p.mtime=Date.now()},rmdir(p,m){var v=T.lookupNode(p,m);for(var k in v.contents)throw new T.ErrnoError(55);delete p.contents[m],p.ctime=p.mtime=Date.now()},readdir(p){return[".","..",...Object.keys(p.contents)]},symlink(p,m,v){var k=Le.createNode(p,m,41471,0);return k.link=v,k},readlink(p){if(!T.isLink(p.mode))throw new T.ErrnoError(28);return p.link}},stream_ops:{read(p,m,v,k,I){var R=p.node.contents;if(I>=p.node.usedBytes)return 0;var P=Math.min(p.node.usedBytes-I,k);if(P>8&&R.subarray)m.set(R.subarray(I,I+P),v);else for(var L=0;L<P;L++)m[v+L]=R[I+L];return P},write(p,m,v,k,I,R){if(m.buffer===E.buffer&&(R=!1),!k)return 0;var P=p.node;if(P.mtime=P.ctime=Date.now(),m.subarray&&(!P.contents||P.contents.subarray)){if(R)return P.contents=m.subarray(v,v+k),P.usedBytes=k,k;if(P.usedBytes===0&&I===0)return P.contents=m.slice(v,v+k),P.usedBytes=k,k;if(I+k<=P.usedBytes)return P.contents.set(m.subarray(v,v+k),I),k}if(Le.expandFileStorage(P,I+k),P.contents.subarray&&m.subarray)P.contents.set(m.subarray(v,v+k),I);else for(var L=0;L<k;L++)P.contents[I+L]=m[v+L];return P.usedBytes=Math.max(P.usedBytes,I+k),k},llseek(p,m,v){var k=m;if(v===1?k+=p.position:v===2&&T.isFile(p.node.mode)&&(k+=p.node.usedBytes),k<0)throw new T.ErrnoError(28);return k},mmap(p,m,v,k,I){if(!T.isFile(p.node.mode))throw new T.ErrnoError(43);var R,P,L=p.node.contents;if(!(I&2)&&L&&L.buffer===E.buffer)P=!1,R=L.byteOffset;else{if(P=!0,R=sv(),!R)throw new T.ErrnoError(48);L&&((v>0||v+m<L.length)&&(L.subarray?L=L.subarray(v,v+m):L=Array.prototype.slice.call(L,v,v+m)),E.set(L,R))}return{ptr:R,allocated:P}},msync(p,m,v,k,I){return Le.stream_ops.write(p,m,0,k,v,!1),0}}},j6=p=>{var m={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},v=m[p];if(typeof v>"u")throw new Error(`Unknown file open mode: ${p}`);return v},gf=(p,m)=>{var v=0;return p&&(v|=365),m&&(v|=146),v},K6=async p=>{var m=await h(p);return new Uint8Array(m)},rv=(...p)=>T.createDataFile(...p),Jr=0,Ba=null,ov=p=>{if(Jr--,i.monitorRunDependencies?.(Jr),Jr==0&&Ba){var m=Ba;Ba=null,m()}},iv=p=>{Jr++,i.monitorRunDependencies?.(Jr)},wu=[],q6=async(p,m)=>{typeof ge<"u"&&ge.init();for(var v of wu)if(v.canHandle(m))return v.handle(p,m);return p},xf=async(p,m,v,k,I,R,P,L)=>{var q=m?Ho.resolve(ot.join2(p,m)):p;iv();try{var ie=v;typeof v=="string"&&(ie=await K6(v)),ie=await q6(ie,q),L?.(),R||rv(p,m,ie,k,I,P)}finally{ov()}},X6=(p,m,v,k,I,R,P,L,q,ie)=>{xf(p,m,v,k,I,L,q,ie).then(R).catch(P)},T={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class{name="ErrnoError";constructor(p){this.errno=p}},FSStream:class{shared={};get object(){return this.node}set object(p){this.node=p}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(p){this.shared.flags=p}get position(){return this.shared.position}set position(p){this.shared.position=p}},FSNode:class{node_ops={};stream_ops={};readMode=365;writeMode=146;mounted=null;constructor(p,m,v,k){p||(p=this),this.parent=p,this.mount=p.mount,this.id=T.nextInode++,this.name=m,this.mode=v,this.rdev=k,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(p){p?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(p){p?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return T.isDir(this.mode)}get isDevice(){return T.isChrdev(this.mode)}},lookupPath(p,m={}){if(!p)throw new T.ErrnoError(44);m.follow_mount??=!0,ot.isAbs(p)||(p=T.cwd()+"/"+p);e:for(var v=0;v<40;v++){for(var k=p.split("/").filter(ie=>!!ie),I=T.root,R="/",P=0;P<k.length;P++){var L=P===k.length-1;if(L&&m.parent)break;if(k[P]!=="."){if(k[P]===".."){if(R=ot.dirname(R),T.isRoot(I)){p=R+"/"+k.slice(P+1).join("/"),v--;continue e}else I=I.parent;continue}R=ot.join2(R,k[P]);try{I=T.lookupNode(I,k[P])}catch(ie){if(ie?.errno===44&&L&&m.noent_okay)return{path:R};throw ie}if(T.isMountpoint(I)&&(!L||m.follow_mount)&&(I=I.mounted.root),T.isLink(I.mode)&&(!L||m.follow)){if(!I.node_ops.readlink)throw new T.ErrnoError(52);var q=I.node_ops.readlink(I);ot.isAbs(q)||(q=ot.dirname(R)+"/"+q),p=q+"/"+k.slice(P+1).join("/");continue e}}}return{path:R,node:I}}throw new T.ErrnoError(32)},getPath(p){for(var m;;){if(T.isRoot(p)){var v=p.mount.mountpoint;return m?v[v.length-1]!=="/"?`${v}/${m}`:v+m:v}m=m?`${p.name}/${m}`:p.name,p=p.parent}},hashName(p,m){for(var v=0,k=0;k<m.length;k++)v=(v<<5)-v+m.charCodeAt(k)|0;return(p+v>>>0)%T.nameTable.length},hashAddNode(p){var m=T.hashName(p.parent.id,p.name);p.name_next=T.nameTable[m],T.nameTable[m]=p},hashRemoveNode(p){var m=T.hashName(p.parent.id,p.name);if(T.nameTable[m]===p)T.nameTable[m]=p.name_next;else for(var v=T.nameTable[m];v;){if(v.name_next===p){v.name_next=p.name_next;break}v=v.name_next}},lookupNode(p,m){var v=T.mayLookup(p);if(v)throw new T.ErrnoError(v);for(var k=T.hashName(p.id,m),I=T.nameTable[k];I;I=I.name_next){var R=I.name;if(I.parent.id===p.id&&R===m)return I}return T.lookup(p,m)},createNode(p,m,v,k){var I=new T.FSNode(p,m,v,k);return T.hashAddNode(I),I},destroyNode(p){T.hashRemoveNode(p)},isRoot(p){return p===p.parent},isMountpoint(p){return!!p.mounted},isFile(p){return(p&61440)===32768},isDir(p){return(p&61440)===16384},isLink(p){return(p&61440)===40960},isChrdev(p){return(p&61440)===8192},isBlkdev(p){return(p&61440)===24576},isFIFO(p){return(p&61440)===4096},isSocket(p){return(p&49152)===49152},flagsToPermissionString(p){var m=["r","w","rw"][p&3];return p&512&&(m+="w"),m},nodePermissions(p,m){return T.ignorePermissions?0:m.includes("r")&&!(p.mode&292)||m.includes("w")&&!(p.mode&146)||m.includes("x")&&!(p.mode&73)?2:0},mayLookup(p){if(!T.isDir(p.mode))return 54;var m=T.nodePermissions(p,"x");return m||(p.node_ops.lookup?0:2)},mayCreate(p,m){if(!T.isDir(p.mode))return 54;try{var v=T.lookupNode(p,m);return 20}catch{}return T.nodePermissions(p,"wx")},mayDelete(p,m,v){var k;try{k=T.lookupNode(p,m)}catch(R){return R.errno}var I=T.nodePermissions(p,"wx");if(I)return I;if(v){if(!T.isDir(k.mode))return 54;if(T.isRoot(k)||T.getPath(k)===T.cwd())return 10}else if(T.isDir(k.mode))return 31;return 0},mayOpen(p,m){return p?T.isLink(p.mode)?32:T.isDir(p.mode)&&(T.flagsToPermissionString(m)!=="r"||m&576)?31:T.nodePermissions(p,T.flagsToPermissionString(m)):44},checkOpExists(p,m){if(!p)throw new T.ErrnoError(m);return p},MAX_OPEN_FDS:4096,nextfd(){for(var p=0;p<=T.MAX_OPEN_FDS;p++)if(!T.streams[p])return p;throw new T.ErrnoError(33)},getStreamChecked(p){var m=T.getStream(p);if(!m)throw new T.ErrnoError(8);return m},getStream:p=>T.streams[p],createStream(p,m=-1){return p=Object.assign(new T.FSStream,p),m==-1&&(m=T.nextfd()),p.fd=m,T.streams[m]=p,p},closeStream(p){T.streams[p]=null},dupStream(p,m=-1){var v=T.createStream(p,m);return v.stream_ops?.dup?.(v),v},doSetAttr(p,m,v){var k=p?.stream_ops.setattr,I=k?p:m;k??=m.node_ops.setattr,T.checkOpExists(k,63),k(I,v)},chrdev_stream_ops:{open(p){var m=T.getDevice(p.node.rdev);p.stream_ops=m.stream_ops,p.stream_ops.open?.(p)},llseek(){throw new T.ErrnoError(70)}},major:p=>p>>8,minor:p=>p&255,makedev:(p,m)=>p<<8|m,registerDevice(p,m){T.devices[p]={stream_ops:m}},getDevice:p=>T.devices[p],getMounts(p){for(var m=[],v=[p];v.length;){var k=v.pop();m.push(k),v.push(...k.mounts)}return m},syncfs(p,m){typeof p=="function"&&(m=p,p=!1),T.syncFSRequests++,T.syncFSRequests>1&&x(`warning: ${T.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var v=T.getMounts(T.root.mount),k=0;function I(L){return T.syncFSRequests--,m(L)}function R(L){if(L)return R.errored?void 0:(R.errored=!0,I(L));++k>=v.length&&I(null)}for(var P of v)P.type.syncfs?P.type.syncfs(P,p,R):R(null)},mount(p,m,v){var k=v==="/",I=!v,R;if(k&&T.root)throw new T.ErrnoError(10);if(!k&&!I){var P=T.lookupPath(v,{follow_mount:!1});if(v=P.path,R=P.node,T.isMountpoint(R))throw new T.ErrnoError(10);if(!T.isDir(R.mode))throw new T.ErrnoError(54)}var L={type:p,opts:m,mountpoint:v,mounts:[]},q=p.mount(L);return q.mount=L,L.root=q,k?T.root=q:R&&(R.mounted=L,R.mount&&R.mount.mounts.push(L)),q},unmount(p){var m=T.lookupPath(p,{follow_mount:!1});if(!T.isMountpoint(m.node))throw new T.ErrnoError(28);var v=m.node,k=v.mounted,I=T.getMounts(k);for(var[R,P]of Object.entries(T.nameTable))for(;P;){var L=P.name_next;I.includes(P.mount)&&T.destroyNode(P),P=L}v.mounted=null;var q=v.mount.mounts.indexOf(k);v.mount.mounts.splice(q,1)},lookup(p,m){return p.node_ops.lookup(p,m)},mknod(p,m,v){var k=T.lookupPath(p,{parent:!0}),I=k.node,R=ot.basename(p);if(!R)throw new T.ErrnoError(28);if(R==="."||R==="..")throw new T.ErrnoError(20);var P=T.mayCreate(I,R);if(P)throw new T.ErrnoError(P);if(!I.node_ops.mknod)throw new T.ErrnoError(63);return I.node_ops.mknod(I,R,m,v)},statfs(p){return T.statfsNode(T.lookupPath(p,{follow:!0}).node)},statfsStream(p){return T.statfsNode(p.node)},statfsNode(p){var m={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:T.nextInode,ffree:T.nextInode-1,fsid:42,flags:2,namelen:255};return p.node_ops.statfs&&Object.assign(m,p.node_ops.statfs(p.mount.opts.root)),m},create(p,m=438){return m&=4095,m|=32768,T.mknod(p,m,0)},mkdir(p,m=511){return m&=1023,m|=16384,T.mknod(p,m,0)},mkdirTree(p,m){var v=p.split("/"),k="";for(var I of v)if(I){(k||ot.isAbs(p))&&(k+="/"),k+=I;try{T.mkdir(k,m)}catch(R){if(R.errno!=20)throw R}}},mkdev(p,m,v){return typeof v>"u"&&(v=m,m=438),m|=8192,T.mknod(p,m,v)},symlink(p,m){if(!Ho.resolve(p))throw new T.ErrnoError(44);var v=T.lookupPath(m,{parent:!0}),k=v.node;if(!k)throw new T.ErrnoError(44);var I=ot.basename(m),R=T.mayCreate(k,I);if(R)throw new T.ErrnoError(R);if(!k.node_ops.symlink)throw new T.ErrnoError(63);return k.node_ops.symlink(k,I,p)},rename(p,m){var v=ot.dirname(p),k=ot.dirname(m),I=ot.basename(p),R=ot.basename(m),P,L,q;if(P=T.lookupPath(p,{parent:!0}),L=P.node,P=T.lookupPath(m,{parent:!0}),q=P.node,!L||!q)throw new T.ErrnoError(44);if(L.mount!==q.mount)throw new T.ErrnoError(75);var ie=T.lookupNode(L,I),he=Ho.relative(p,k);if(he.charAt(0)!==".")throw new T.ErrnoError(28);if(he=Ho.relative(m,v),he.charAt(0)!==".")throw new T.ErrnoError(55);var xe;try{xe=T.lookupNode(q,R)}catch{}if(ie!==xe){var de=T.isDir(ie.mode),oe=T.mayDelete(L,I,de);if(oe)throw new T.ErrnoError(oe);if(oe=xe?T.mayDelete(q,R,de):T.mayCreate(q,R),oe)throw new T.ErrnoError(oe);if(!L.node_ops.rename)throw new T.ErrnoError(63);if(T.isMountpoint(ie)||xe&&T.isMountpoint(xe))throw new T.ErrnoError(10);if(q!==L&&(oe=T.nodePermissions(L,"w"),oe))throw new T.ErrnoError(oe);T.hashRemoveNode(ie);try{L.node_ops.rename(ie,q,R),ie.parent=q}catch(ve){throw ve}finally{T.hashAddNode(ie)}}},rmdir(p){var m=T.lookupPath(p,{parent:!0}),v=m.node,k=ot.basename(p),I=T.lookupNode(v,k),R=T.mayDelete(v,k,!0);if(R)throw new T.ErrnoError(R);if(!v.node_ops.rmdir)throw new T.ErrnoError(63);if(T.isMountpoint(I))throw new T.ErrnoError(10);v.node_ops.rmdir(v,k),T.destroyNode(I)},readdir(p){var m=T.lookupPath(p,{follow:!0}),v=m.node,k=T.checkOpExists(v.node_ops.readdir,54);return k(v)},unlink(p){var m=T.lookupPath(p,{parent:!0}),v=m.node;if(!v)throw new T.ErrnoError(44);var k=ot.basename(p),I=T.lookupNode(v,k),R=T.mayDelete(v,k,!1);if(R)throw new T.ErrnoError(R);if(!v.node_ops.unlink)throw new T.ErrnoError(63);if(T.isMountpoint(I))throw new T.ErrnoError(10);v.node_ops.unlink(v,k),T.destroyNode(I)},readlink(p){var m=T.lookupPath(p),v=m.node;if(!v)throw new T.ErrnoError(44);if(!v.node_ops.readlink)throw new T.ErrnoError(28);return v.node_ops.readlink(v)},stat(p,m){var v=T.lookupPath(p,{follow:!m}),k=v.node,I=T.checkOpExists(k.node_ops.getattr,63);return I(k)},fstat(p){var m=T.getStreamChecked(p),v=m.node,k=m.stream_ops.getattr,I=k?m:v;return k??=v.node_ops.getattr,T.checkOpExists(k,63),k(I)},lstat(p){return T.stat(p,!0)},doChmod(p,m,v,k){T.doSetAttr(p,m,{mode:v&4095|m.mode&-4096,ctime:Date.now(),dontFollow:k})},chmod(p,m,v){var k;if(typeof p=="string"){var I=T.lookupPath(p,{follow:!v});k=I.node}else k=p;T.doChmod(null,k,m,v)},lchmod(p,m){T.chmod(p,m,!0)},fchmod(p,m){var v=T.getStreamChecked(p);T.doChmod(v,v.node,m,!1)},doChown(p,m,v){T.doSetAttr(p,m,{timestamp:Date.now(),dontFollow:v})},chown(p,m,v,k){var I;if(typeof p=="string"){var R=T.lookupPath(p,{follow:!k});I=R.node}else I=p;T.doChown(null,I,k)},lchown(p,m,v){T.chown(p,m,v,!0)},fchown(p,m,v){var k=T.getStreamChecked(p);T.doChown(k,k.node,!1)},doTruncate(p,m,v){if(T.isDir(m.mode))throw new T.ErrnoError(31);if(!T.isFile(m.mode))throw new T.ErrnoError(28);var k=T.nodePermissions(m,"w");if(k)throw new T.ErrnoError(k);T.doSetAttr(p,m,{size:v,timestamp:Date.now()})},truncate(p,m){if(m<0)throw new T.ErrnoError(28);var v;if(typeof p=="string"){var k=T.lookupPath(p,{follow:!0});v=k.node}else v=p;T.doTruncate(null,v,m)},ftruncate(p,m){var v=T.getStreamChecked(p);if(m<0||(v.flags&2097155)===0)throw new T.ErrnoError(28);T.doTruncate(v,v.node,m)},utime(p,m,v){var k=T.lookupPath(p,{follow:!0}),I=k.node,R=T.checkOpExists(I.node_ops.setattr,63);R(I,{atime:m,mtime:v})},open(p,m,v=438){if(p==="")throw new T.ErrnoError(44);m=typeof m=="string"?j6(m):m,m&64?v=v&4095|32768:v=0;var k,I;if(typeof p=="object")k=p;else{I=p.endsWith("/");var R=T.lookupPath(p,{follow:!(m&131072),noent_okay:!0});k=R.node,p=R.path}var P=!1;if(m&64)if(k){if(m&128)throw new T.ErrnoError(20)}else{if(I)throw new T.ErrnoError(31);k=T.mknod(p,v|511,0),P=!0}if(!k)throw new T.ErrnoError(44);if(T.isChrdev(k.mode)&&(m&=-513),m&65536&&!T.isDir(k.mode))throw new T.ErrnoError(54);if(!P){var L=T.mayOpen(k,m);if(L)throw new T.ErrnoError(L)}m&512&&!P&&T.truncate(k,0),m&=-131713;var q=T.createStream({node:k,path:T.getPath(k),flags:m,seekable:!0,position:0,stream_ops:k.stream_ops,ungotten:[],error:!1});return q.stream_ops.open&&q.stream_ops.open(q),P&&T.chmod(k,v&511),i.logReadFiles&&!(m&1)&&(p in T.readFiles||(T.readFiles[p]=1)),q},close(p){if(T.isClosed(p))throw new T.ErrnoError(8);p.getdents&&(p.getdents=null);try{p.stream_ops.close&&p.stream_ops.close(p)}catch(m){throw m}finally{T.closeStream(p.fd)}p.fd=null},isClosed(p){return p.fd===null},llseek(p,m,v){if(T.isClosed(p))throw new T.ErrnoError(8);if(!p.seekable||!p.stream_ops.llseek)throw new T.ErrnoError(70);if(v!=0&&v!=1&&v!=2)throw new T.ErrnoError(28);return p.position=p.stream_ops.llseek(p,m,v),p.ungotten=[],p.position},read(p,m,v,k,I){if(k<0||I<0)throw new T.ErrnoError(28);if(T.isClosed(p))throw new T.ErrnoError(8);if((p.flags&2097155)===1)throw new T.ErrnoError(8);if(T.isDir(p.node.mode))throw new T.ErrnoError(31);if(!p.stream_ops.read)throw new T.ErrnoError(28);var R=typeof I<"u";if(!R)I=p.position;else if(!p.seekable)throw new T.ErrnoError(70);var P=p.stream_ops.read(p,m,v,k,I);return R||(p.position+=P),P},write(p,m,v,k,I,R){if(k<0||I<0)throw new T.ErrnoError(28);if(T.isClosed(p))throw new T.ErrnoError(8);if((p.flags&2097155)===0)throw new T.ErrnoError(8);if(T.isDir(p.node.mode))throw new T.ErrnoError(31);if(!p.stream_ops.write)throw new T.ErrnoError(28);p.seekable&&p.flags&1024&&T.llseek(p,0,2);var P=typeof I<"u";if(!P)I=p.position;else if(!p.seekable)throw new T.ErrnoError(70);var L=p.stream_ops.write(p,m,v,k,I,R);return P||(p.position+=L),L},mmap(p,m,v,k,I){if((k&2)!==0&&(I&2)===0&&(p.flags&2097155)!==2)throw new T.ErrnoError(2);if((p.flags&2097155)===1)throw new T.ErrnoError(2);if(!p.stream_ops.mmap)throw new T.ErrnoError(43);if(!m)throw new T.ErrnoError(28);return p.stream_ops.mmap(p,m,v,k,I)},msync(p,m,v,k,I){return p.stream_ops.msync?p.stream_ops.msync(p,m,v,k,I):0},ioctl(p,m,v){if(!p.stream_ops.ioctl)throw new T.ErrnoError(59);return p.stream_ops.ioctl(p,m,v)},readFile(p,m={}){m.flags=m.flags||0,m.encoding=m.encoding||"binary",m.encoding!=="utf8"&&m.encoding!=="binary"&&se(`Invalid encoding type "${m.encoding}"`);var v=T.open(p,m.flags),k=T.stat(p),I=k.size,R=new Uint8Array(I);return T.read(v,R,0,I,0),m.encoding==="utf8"&&(R=jo(R)),T.close(v),R},writeFile(p,m,v={}){v.flags=v.flags||577;var k=T.open(p,v.flags,v.mode);typeof m=="string"&&(m=new Uint8Array(mf(m))),ArrayBuffer.isView(m)?T.write(k,m,0,m.byteLength,void 0,v.canOwn):se("Unsupported data type"),T.close(k)},cwd:()=>T.currentPath,chdir(p){var m=T.lookupPath(p,{follow:!0});if(m.node===null)throw new T.ErrnoError(44);if(!T.isDir(m.node.mode))throw new T.ErrnoError(54);var v=T.nodePermissions(m.node,"x");if(v)throw new T.ErrnoError(v);T.currentPath=m.path},createDefaultDirectories(){T.mkdir("/tmp"),T.mkdir("/home"),T.mkdir("/home/web_user")},createDefaultDevices(){T.mkdir("/dev"),T.registerDevice(T.makedev(1,3),{read:()=>0,write:(k,I,R,P,L)=>P,llseek:()=>0}),T.mkdev("/dev/null",T.makedev(1,3)),Zr.register(T.makedev(5,0),Zr.default_tty_ops),Zr.register(T.makedev(6,0),Zr.default_tty1_ops),T.mkdev("/dev/tty",T.makedev(5,0)),T.mkdev("/dev/tty1",T.makedev(6,0));var p=new Uint8Array(1024),m=0,v=()=>(m===0&&(Qw(p),m=p.byteLength),p[--m]);T.createDevice("/dev","random",v),T.createDevice("/dev","urandom",v),T.mkdir("/dev/shm"),T.mkdir("/dev/shm/tmp")},createSpecialDirectories(){T.mkdir("/proc");var p=T.mkdir("/proc/self");T.mkdir("/proc/self/fd"),T.mount({mount(){var m=T.createNode(p,"fd",16895,73);return m.stream_ops={llseek:Le.stream_ops.llseek},m.node_ops={lookup(v,k){var I=+k,R=T.getStreamChecked(I),P={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>R.path},id:I+1};return P.parent=P,P},readdir(){return Array.from(T.streams.entries()).filter(([v,k])=>k).map(([v,k])=>v.toString())}},m}},{},"/proc/self/fd")},createStandardStreams(p,m,v){p?T.createDevice("/dev","stdin",p):T.symlink("/dev/tty","/dev/stdin"),m?T.createDevice("/dev","stdout",null,m):T.symlink("/dev/tty","/dev/stdout"),v?T.createDevice("/dev","stderr",null,v):T.symlink("/dev/tty1","/dev/stderr"),T.open("/dev/stdin",0),T.open("/dev/stdout",1),T.open("/dev/stderr",1)},staticInit(){T.nameTable=new Array(4096),T.mount(Le,{},"/"),T.createDefaultDirectories(),T.createDefaultDevices(),T.createSpecialDirectories(),T.filesystems={MEMFS:Le}},init(p,m,v){T.initialized=!0,p??=i.stdin,m??=i.stdout,v??=i.stderr,T.createStandardStreams(p,m,v)},quit(){T.initialized=!1;for(var p of T.streams)p&&T.close(p)},findObject(p,m){var v=T.analyzePath(p,m);return v.exists?v.object:null},analyzePath(p,m){try{var v=T.lookupPath(p,{follow:!m});p=v.path}catch{}var k={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var v=T.lookupPath(p,{parent:!0});k.parentExists=!0,k.parentPath=v.path,k.parentObject=v.node,k.name=ot.basename(p),v=T.lookupPath(p,{follow:!m}),k.exists=!0,k.path=v.path,k.object=v.node,k.name=v.node.name,k.isRoot=v.path==="/"}catch(I){k.error=I.errno}return k},createPath(p,m,v,k){p=typeof p=="string"?p:T.getPath(p);for(var I=m.split("/").reverse();I.length;){var R=I.pop();if(R){var P=ot.join2(p,R);try{T.mkdir(P)}catch(L){if(L.errno!=20)throw L}p=P}}return P},createFile(p,m,v,k,I){var R=ot.join2(typeof p=="string"?p:T.getPath(p),m),P=gf(k,I);return T.create(R,P)},createDataFile(p,m,v,k,I,R){var P=m;p&&(p=typeof p=="string"?p:T.getPath(p),P=m?ot.join2(p,m):p);var L=gf(k,I),q=T.create(P,L);if(v){if(typeof v=="string"){for(var ie=new Array(v.length),he=0,xe=v.length;he<xe;++he)ie[he]=v.charCodeAt(he);v=ie}T.chmod(q,L|146);var de=T.open(q,577);T.write(de,v,0,v.length,0,R),T.close(de),T.chmod(q,L)}},createDevice(p,m,v,k){var I=ot.join2(typeof p=="string"?p:T.getPath(p),m),R=gf(!!v,!!k);T.createDevice.major??=64;var P=T.makedev(T.createDevice.major++,0);return T.registerDevice(P,{open(L){L.seekable=!1},close(L){k?.buffer?.length&&k(10)},read(L,q,ie,he,xe){for(var de=0,oe=0;oe<he;oe++){var ve;try{ve=v()}catch{throw new T.ErrnoError(29)}if(ve===void 0&&de===0)throw new T.ErrnoError(6);if(ve==null)break;de++,q[ie+oe]=ve}return de&&(L.node.atime=Date.now()),de},write(L,q,ie,he,xe){for(var de=0;de<he;de++)try{k(q[ie+de])}catch{throw new T.ErrnoError(29)}return he&&(L.node.mtime=L.node.ctime=Date.now()),de}}),T.mkdev(I,R,P)},forceLoadFile(p){if(p.isDevice||p.isFolder||p.link||p.contents)return!0;if(globalThis.XMLHttpRequest)se("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");else try{p.contents=d(p.url)}catch{throw new T.ErrnoError(29)}},createLazyFile(p,m,v,k,I){class R{lengthKnown=!1;chunks=[];get(de){if(!(de>this.length-1||de<0)){var oe=de%this.chunkSize,ve=de/this.chunkSize|0;return this.getter(ve)[oe]}}setDataGetter(de){this.getter=de}cacheLength(){var de=new XMLHttpRequest;de.open("HEAD",v,!1),de.send(null),de.status>=200&&de.status<300||de.status===304||se("Couldn't load "+v+". Status: "+de.status);var oe=Number(de.getResponseHeader("Content-length")),ve,ze=(ve=de.getResponseHeader("Accept-Ranges"))&&ve==="bytes",Ge=(ve=de.getResponseHeader("Content-Encoding"))&&ve==="gzip",He=1024*1024;ze||(He=oe);var ut=(xt,Vt)=>{xt>Vt&&se("invalid range ("+xt+", "+Vt+") or no bytes requested!"),Vt>oe-1&&se("only "+oe+" bytes available! programmer error!");var nt=new XMLHttpRequest;return nt.open("GET",v,!1),oe!==He&&nt.setRequestHeader("Range","bytes="+xt+"-"+Vt),nt.responseType="arraybuffer",nt.overrideMimeType&&nt.overrideMimeType("text/plain; charset=x-user-defined"),nt.send(null),nt.status>=200&&nt.status<300||nt.status===304||se("Couldn't load "+v+". Status: "+nt.status),nt.response!==void 0?new Uint8Array(nt.response||[]):mf(nt.responseText||"")},gt=this;gt.setDataGetter(xt=>{var Vt=xt*He,nt=(xt+1)*He-1;return nt=Math.min(nt,oe-1),typeof gt.chunks[xt]>"u"&&(gt.chunks[xt]=ut(Vt,nt)),typeof gt.chunks[xt]>"u"&&se("doXHR failed!"),gt.chunks[xt]}),(Ge||!oe)&&(He=oe=1,oe=this.getter(0).length,He=oe,g("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=oe,this._chunkSize=He,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(globalThis.XMLHttpRequest){r||se("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");var P=new R,L={isDevice:!1,contents:P}}else var L={isDevice:!1,url:v};var q=T.createFile(p,m,L,k,I);L.contents?q.contents=L.contents:L.url&&(q.contents=null,q.url=L.url),Object.defineProperties(q,{usedBytes:{get:function(){return this.contents.length}}});var ie={};for(const[xe,de]of Object.entries(q.stream_ops))ie[xe]=(...oe)=>(T.forceLoadFile(q),de(...oe));function he(xe,de,oe,ve,ze){var Ge=xe.node.contents;if(ze>=Ge.length)return 0;var He=Math.min(Ge.length-ze,ve);if(Ge.slice)for(var ut=0;ut<He;ut++)de[oe+ut]=Ge[ze+ut];else for(var ut=0;ut<He;ut++)de[oe+ut]=Ge.get(ze+ut);return He}return ie.read=(xe,de,oe,ve,ze)=>(T.forceLoadFile(q),he(xe,de,oe,ve,ze)),ie.mmap=(xe,de,oe,ve,ze)=>{T.forceLoadFile(q);var Ge=sv();if(!Ge)throw new T.ErrnoError(48);return he(xe,E,Ge,de,oe),{ptr:Ge,allocated:!0}},q.stream_ops=ie,q}},bf=(p,m,v)=>p?jo(F,p,m,v):"",hn={calculateAt(p,m,v){if(ot.isAbs(m))return m;var k;if(p===-100)k=T.cwd();else{var I=hn.getStreamFromFD(p);k=I.path}if(m.length==0){if(!v)throw new T.ErrnoError(44);return k}return k+"/"+m},writeStat(p,m){S[p>>2]=m.dev,S[p+4>>2]=m.mode,S[p+8>>2]=m.nlink,S[p+12>>2]=m.uid,S[p+16>>2]=m.gid,S[p+20>>2]=m.rdev,G[p+24>>3]=BigInt(m.size),D[p+32>>2]=4096,D[p+36>>2]=m.blocks;var v=m.atime.getTime(),k=m.mtime.getTime(),I=m.ctime.getTime();return G[p+40>>3]=BigInt(Math.floor(v/1e3)),S[p+48>>2]=v%1e3*1e3*1e3,G[p+56>>3]=BigInt(Math.floor(k/1e3)),S[p+64>>2]=k%1e3*1e3*1e3,G[p+72>>3]=BigInt(Math.floor(I/1e3)),S[p+80>>2]=I%1e3*1e3*1e3,G[p+88>>3]=BigInt(m.ino),0},writeStatFs(p,m){S[p+4>>2]=m.bsize,S[p+60>>2]=m.bsize,G[p+8>>3]=BigInt(m.blocks),G[p+16>>3]=BigInt(m.bfree),G[p+24>>3]=BigInt(m.bavail),G[p+32>>3]=BigInt(m.files),G[p+40>>3]=BigInt(m.ffree),S[p+48>>2]=m.fsid,S[p+64>>2]=m.flags,S[p+56>>2]=m.namelen},doMsync(p,m,v,k,I){if(!T.isFile(m.node.mode))throw new T.ErrnoError(43);if(k&2)return 0;var R=F.slice(p,p+v);T.msync(m,R,I,v,k)},getStreamFromFD(p){var m=T.getStreamChecked(p);return m},varargs:void 0,getStr(p){var m=bf(p);return m}};function Y6(p,m,v){hn.varargs=v;try{var k=hn.getStreamFromFD(p);switch(m){case 0:{var I=Ws();if(I<0)return-28;for(;T.streams[I];)I++;var R;return R=T.dupStream(k,I),R.fd}case 1:case 2:return 0;case 3:return k.flags;case 4:{var I=Ws();return k.flags|=I,0}case 12:{var I=pr(),P=0;return O[I+P>>1]=2,0}case 13:case 14:return 0}return-28}catch(L){if(typeof T>"u"||L.name!=="ErrnoError")throw L;return-L.errno}}function Z6(p,m,v){hn.varargs=v;try{var k=hn.getStreamFromFD(p);switch(m){case 21509:return k.tty?0:-59;case 21505:{if(!k.tty)return-59;if(k.tty.ops.ioctl_tcgets){var I=k.tty.ops.ioctl_tcgets(k),R=pr();D[R>>2]=I.c_iflag||0,D[R+4>>2]=I.c_oflag||0,D[R+8>>2]=I.c_cflag||0,D[R+12>>2]=I.c_lflag||0;for(var P=0;P<32;P++)E[R+P+17]=I.c_cc[P]||0;return 0}return 0}case 21510:case 21511:case 21512:return k.tty?0:-59;case 21506:case 21507:case 21508:{if(!k.tty)return-59;if(k.tty.ops.ioctl_tcsets){for(var R=pr(),L=D[R>>2],q=D[R+4>>2],ie=D[R+8>>2],he=D[R+12>>2],xe=[],P=0;P<32;P++)xe.push(E[R+P+17]);return k.tty.ops.ioctl_tcsets(k.tty,m,{c_iflag:L,c_oflag:q,c_cflag:ie,c_lflag:he,c_cc:xe})}return 0}case 21519:{if(!k.tty)return-59;var R=pr();return D[R>>2]=0,0}case 21520:return k.tty?-28:-59;case 21537:case 21531:{var R=pr();return T.ioctl(k,m,R)}case 21523:{if(!k.tty)return-59;if(k.tty.ops.ioctl_tiocgwinsz){var de=k.tty.ops.ioctl_tiocgwinsz(k.tty),R=pr();O[R>>1]=de[0],O[R+2>>1]=de[1]}return 0}case 21524:return k.tty?0:-59;case 21515:return k.tty?0:-59;default:return-28}}catch(oe){if(typeof T>"u"||oe.name!=="ErrnoError")throw oe;return-oe.errno}}function J6(p,m,v,k){hn.varargs=k;try{m=hn.getStr(m),m=hn.calculateAt(p,m);var I=k?Ws():0;return T.open(m,v,I).fd}catch(R){if(typeof T>"u"||R.name!=="ErrnoError")throw R;return-R.errno}}function Q6(p,m){try{return p=hn.getStr(p),hn.writeStat(m,T.stat(p))}catch(v){if(typeof T>"u"||v.name!=="ErrnoError")throw v;return-v.errno}}var e5=()=>se(""),En=p=>{for(var m="";;){var v=F[p++];if(!v)return m;m+=String.fromCharCode(v)}},Ko={},Qr={},vu={},Va=class extends Error{constructor(m){super(m),this.name="BindingError"}},tt=p=>{throw new Va(p)};function t5(p,m,v={}){var k=m.name;if(p||tt(`type "${k}" must have a positive integer typeid pointer`),Qr.hasOwnProperty(p)){if(v.ignoreDuplicateRegistrations)return;tt(`Cannot register type '${k}' twice`)}if(Qr[p]=m,delete vu[p],Ko.hasOwnProperty(p)){var I=Ko[p];delete Ko[p],I.forEach(R=>R())}}function Ns(p,m,v={}){return t5(p,m,v)}var av=(p,m,v)=>{switch(m){case 1:return v?k=>E[k]:k=>F[k];case 2:return v?k=>O[k>>1]:k=>A[k>>1];case 4:return v?k=>D[k>>2]:k=>S[k>>2];case 8:return v?k=>G[k>>3]:k=>K[k>>3];default:throw new TypeError(`invalid integer width (${m}): ${p}`)}},n5=(p,m,v,k,I)=>{m=En(m);const R=k===0n;let P=L=>L;if(R){const L=v*8;P=q=>BigInt.asUintN(L,q),I=P(I)}Ns(p,{name:m,fromWireType:P,toWireType:(L,q)=>(typeof q=="number"&&(q=BigInt(q)),q),readValueFromPointer:av(m,v,!R),destructorFunction:null})},s5=(p,m,v,k)=>{m=En(m),Ns(p,{name:m,fromWireType:function(I){return!!I},toWireType:function(I,R){return R?v:k},readValueFromPointer:function(I){return this.fromWireType(F[I])},destructorFunction:null})},r5=p=>({count:p.count,deleteScheduled:p.deleteScheduled,preservePointerOnDelete:p.preservePointerOnDelete,ptr:p.ptr,ptrType:p.ptrType,smartPtr:p.smartPtr,smartPtrType:p.smartPtrType}),yf=p=>{function m(v){return v.$$.ptrType.registeredClass.name}tt(m(p)+" instance already deleted")},wf=!1,lv=p=>{},o5=p=>{p.smartPtr?p.smartPtrType.rawDestructor(p.smartPtr):p.ptrType.registeredClass.rawDestructor(p.ptr)},cv=p=>{p.count.value-=1;var m=p.count.value===0;m&&o5(p)},Wa=p=>globalThis.FinalizationRegistry?(wf=new FinalizationRegistry(m=>{cv(m.$$)}),Wa=m=>{var v=m.$$,k=!!v.smartPtr;if(k){var I={$$:v};wf.register(m,I,m)}return m},lv=m=>wf.unregister(m),Wa(p)):(Wa=m=>m,p),i5=()=>{let p=Cu.prototype;Object.assign(p,{isAliasOf(v){if(!(this instanceof Cu)||!(v instanceof Cu))return!1;var k=this.$$.ptrType.registeredClass,I=this.$$.ptr;v.$$=v.$$;for(var R=v.$$.ptrType.registeredClass,P=v.$$.ptr;k.baseClass;)I=k.upcast(I),k=k.baseClass;for(;R.baseClass;)P=R.upcast(P),R=R.baseClass;return k===R&&I===P},clone(){if(this.$$.ptr||yf(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var v=Wa(Object.create(Object.getPrototypeOf(this),{$$:{value:r5(this.$$)}}));return v.$$.count.value+=1,v.$$.deleteScheduled=!1,v},delete(){this.$$.ptr||yf(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&tt("Object already scheduled for deletion"),lv(this),cv(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||yf(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&tt("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const m=Symbol.dispose;m&&(p[m]=p.delete)};function Cu(){}var vf=(p,m)=>Object.defineProperty(m,"name",{value:p}),uv={},Cf=(p,m,v)=>{if(p[m].overloadTable===void 0){var k=p[m];p[m]=function(...I){return p[m].overloadTable.hasOwnProperty(I.length)||tt(`Function '${v}' called with an invalid number of arguments (${I.length}) - expects one of (${p[m].overloadTable})!`),p[m].overloadTable[I.length].apply(this,I)},p[m].overloadTable=[],p[m].overloadTable[k.argCount]=k}},a5=(p,m,v)=>{i.hasOwnProperty(p)?(tt(`Cannot register public name '${p}' twice`),Cf(i,p,p),i[p].overloadTable.hasOwnProperty(v)&&tt(`Cannot register multiple overloads of a function with the same number of arguments (${v})!`),i[p].overloadTable[v]=m):(i[p]=m,i[p].argCount=v)},l5=48,c5=57,u5=p=>{p=p.replace(/[^a-zA-Z0-9_]/g,"$");var m=p.charCodeAt(0);return m>=l5&&m<=c5?`_${p}`:p};function h5(p,m,v,k,I,R,P,L){this.name=p,this.constructor=m,this.instancePrototype=v,this.rawDestructor=k,this.baseClass=I,this.getActualType=R,this.upcast=P,this.downcast=L,this.pureVirtualFunctions=[]}var kf=(p,m,v)=>{for(;m!==v;)m.upcast||tt(`Expected null or instance of ${v.name}, got an instance of ${m.name}`),p=m.upcast(p),m=m.baseClass;return p},$f=p=>{if(p===null)return"null";var m=typeof p;return m==="object"||m==="array"||m==="function"?p.toString():""+p};function d5(p,m){if(m===null)return this.isReference&&tt(`null is not a valid ${this.name}`),0;m.$$||tt(`Cannot pass "${$f(m)}" as a ${this.name}`),m.$$.ptr||tt(`Cannot pass deleted object as a pointer of type ${this.name}`);var v=m.$$.ptrType.registeredClass,k=kf(m.$$.ptr,v,this.registeredClass);return k}function p5(p,m){var v;if(m===null)return this.isReference&&tt(`null is not a valid ${this.name}`),this.isSmartPointer?(v=this.rawConstructor(),p!==null&&p.push(this.rawDestructor,v),v):0;(!m||!m.$$)&&tt(`Cannot pass "${$f(m)}" as a ${this.name}`),m.$$.ptr||tt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&m.$$.ptrType.isConst&&tt(`Cannot convert argument of type ${m.$$.smartPtrType?m.$$.smartPtrType.name:m.$$.ptrType.name} to parameter type ${this.name}`);var k=m.$$.ptrType.registeredClass;if(v=kf(m.$$.ptr,k,this.registeredClass),this.isSmartPointer)switch(m.$$.smartPtr===void 0&&tt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:m.$$.smartPtrType===this?v=m.$$.smartPtr:tt(`Cannot convert argument of type ${m.$$.smartPtrType?m.$$.smartPtrType.name:m.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:v=m.$$.smartPtr;break;case 2:if(m.$$.smartPtrType===this)v=m.$$.smartPtr;else{var I=m.clone();v=this.rawShare(v,dn.toHandle(()=>I.delete())),p!==null&&p.push(this.rawDestructor,v)}break;default:tt("Unsupported sharing policy")}return v}function f5(p,m){if(m===null)return this.isReference&&tt(`null is not a valid ${this.name}`),0;m.$$||tt(`Cannot pass "${$f(m)}" as a ${this.name}`),m.$$.ptr||tt(`Cannot pass deleted object as a pointer of type ${this.name}`),m.$$.ptrType.isConst&&tt(`Cannot convert argument of type ${m.$$.ptrType.name} to parameter type ${this.name}`);var v=m.$$.ptrType.registeredClass,k=kf(m.$$.ptr,v,this.registeredClass);return k}function ku(p){return this.fromWireType(S[p>>2])}var hv=(p,m,v)=>{if(m===v)return p;if(v.baseClass===void 0)return null;var k=hv(p,m,v.baseClass);return k===null?null:v.downcast(k)},m5={},g5=(p,m)=>{for(m===void 0&&tt("ptr should not be undefined");p.baseClass;)m=p.upcast(m),p=p.baseClass;return m},x5=(p,m)=>(m=g5(p,m),m5[m]),b5=class extends Error{constructor(m){super(m),this.name="InternalError"}},$u=p=>{throw new b5(p)},Iu=(p,m)=>{(!m.ptrType||!m.ptr)&&$u("makeClassHandle requires ptr and ptrType");var v=!!m.smartPtrType,k=!!m.smartPtr;return v!==k&&$u("Both smartPtrType and smartPtr must be specified"),m.count={value:1},Wa(Object.create(p,{$$:{value:m,writable:!0}}))};function y5(p){var m=this.getPointee(p);if(!m)return this.destructor(p),null;var v=x5(this.registeredClass,m);if(v!==void 0){if(v.$$.count.value===0)return v.$$.ptr=m,v.$$.smartPtr=p,v.clone();var k=v.clone();return this.destructor(p),k}function I(){return this.isSmartPointer?Iu(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:m,smartPtrType:this,smartPtr:p}):Iu(this.registeredClass.instancePrototype,{ptrType:this,ptr:p})}var R=this.registeredClass.getActualType(m),P=uv[R];if(!P)return I.call(this);var L;this.isConst?L=P.constPointerType:L=P.pointerType;var q=hv(m,this.registeredClass,L.registeredClass);return q===null?I.call(this):this.isSmartPointer?Iu(L.registeredClass.instancePrototype,{ptrType:L,ptr:q,smartPtrType:this,smartPtr:p}):Iu(L.registeredClass.instancePrototype,{ptrType:L,ptr:q})}var w5=()=>{Object.assign(Su.prototype,{getPointee(p){return this.rawGetPointee&&(p=this.rawGetPointee(p)),p},destructor(p){this.rawDestructor?.(p)},readValueFromPointer:ku,fromWireType:y5})};function Su(p,m,v,k,I,R,P,L,q,ie,he){this.name=p,this.registeredClass=m,this.isReference=v,this.isConst=k,this.isSmartPointer=I,this.pointeeType=R,this.sharingPolicy=P,this.rawGetPointee=L,this.rawConstructor=q,this.rawShare=ie,this.rawDestructor=he,!I&&m.baseClass===void 0?k?(this.toWireType=d5,this.destructorFunction=null):(this.toWireType=f5,this.destructorFunction=null):this.toWireType=p5}var v5=(p,m,v)=>{i.hasOwnProperty(p)||$u("Replacing nonexistent public symbol"),i[p].overloadTable!==void 0&&v!==void 0||(i[p]=m,i[p].argCount=v)},dv=[],Dt=p=>{var m=dv[p];return m||(dv[p]=m=zv.get(p)),m},eo=(p,m,v=!1)=>{p=En(p);function k(){var R=Dt(m);return R}var I=k();return typeof I!="function"&&tt(`unknown function pointer with signature ${p}: ${m}`),I};class C5 extends Error{}var pv=p=>{var m=Rv(p),v=En(m);return fr(m),v},Nu=(p,m)=>{var v=[],k={};function I(R){if(!k[R]&&!Qr[R]){if(vu[R]){vu[R].forEach(I);return}v.push(R),k[R]=!0}}throw m.forEach(I),new C5(`${p}: `+v.map(pv).join([", "]))},to=(p,m,v)=>{p.forEach(L=>vu[L]=m);function k(L){var q=v(L);q.length!==p.length&&$u("Mismatched type converter count");for(var ie=0;ie<p.length;++ie)Ns(p[ie],q[ie])}var I=new Array(m.length),R=[],P=0;for(let[L,q]of m.entries())Qr.hasOwnProperty(q)?I[L]=Qr[q]:(R.push(q),Ko.hasOwnProperty(q)||(Ko[q]=[]),Ko[q].push(()=>{I[L]=Qr[q],++P,P===R.length&&k(I)}));R.length===0&&k(I)},k5=(p,m,v,k,I,R,P,L,q,ie,he,xe,de)=>{he=En(he),R=eo(I,R),L&&=eo(P,L),ie&&=eo(q,ie),de=eo(xe,de);var oe=u5(he);a5(oe,function(){Nu(`Cannot construct ${he} due to unbound types`,[k])}),to([p,m,v],k?[k]:[],ve=>{ve=ve[0];var ze,Ge;k?(ze=ve.registeredClass,Ge=ze.instancePrototype):Ge=Cu.prototype;var He=vf(he,function(...Ts){if(Object.getPrototypeOf(this)!==ut)throw new Va(`Use 'new' to construct ${he}`);if(gt.constructor_body===void 0)throw new Va(`${he} has no accessible constructor`);var ro=gt.constructor_body[Ts.length];if(ro===void 0)throw new Va(`Tried to invoke ctor of ${he} with invalid number of parameters (${Ts.length}) - expected (${Object.keys(gt.constructor_body).toString()}) parameters instead!`);return ro.apply(this,Ts)}),ut=Object.create(Ge,{constructor:{value:He}});He.prototype=ut;var gt=new h5(he,He,ut,de,ze,R,L,ie);gt.baseClass&&(gt.baseClass.__derivedClasses??=[],gt.baseClass.__derivedClasses.push(gt));var xt=new Su(he,gt,!0,!1,!1),Vt=new Su(he+"*",gt,!1,!1,!1),nt=new Su(he+" const*",gt,!1,!0,!1);return uv[p]={pointerType:Vt,constPointerType:nt},v5(oe,He),[xt,Vt,nt]})},fv=p=>{for(;p.length;){var m=p.pop(),v=p.pop();v(m)}};function mv(p){for(var m=1;m<p.length;++m)if(p[m]!==null&&p[m].destructorFunction===void 0)return!0;return!1}function $5(p,m,v,k){var I=mv(p),R=p.length-2,P=[],L=["fn"];m&&L.push("thisWired");for(var q=0;q<R;++q)P.push(`arg${q}`),L.push(`arg${q}Wired`);P=P.join(","),L=L.join(",");var ie=`return function (${P}) {
`;I&&(ie+=`var destructors = [];
`);var he=I?"destructors":"null",xe=["humanName","throwBindingError","invoker","fn","runDestructors","fromRetWire","toClassParamWire"];m&&(ie+=`var thisWired = toClassParamWire(${he}, this);
`);for(var q=0;q<R;++q){var de=`toArg${q}Wire`;ie+=`var arg${q}Wired = ${de}(${he}, arg${q});
`,xe.push(de)}if(ie+=(v||k?"var rv = ":"")+`invoker(${L});
`,I)ie+=`runDestructors(destructors);
`;else for(var q=m?1:2;q<p.length;++q){var oe=q===1?"thisWired":"arg"+(q-2)+"Wired";p[q].destructorFunction!==null&&(ie+=`${oe}_dtor(${oe});
`,xe.push(`${oe}_dtor`))}return v&&(ie+=`var ret = fromRetWire(rv);
return ret;
`),ie+=`}
`,new Function(xe,ie)}function If(p,m,v,k,I,R){var P=m.length;P<2&&tt("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var L=m[1]!==null&&v!==null,q=mv(m),ie=!m[0].isVoid,he=m[0],xe=m[1],de=[p,tt,k,I,fv,he.fromWireType.bind(he),xe?.toWireType.bind(xe)],oe=2;oe<P;++oe){var ve=m[oe];de.push(ve.toWireType.bind(ve))}if(!q)for(var oe=L?1:2;oe<m.length;++oe)m[oe].destructorFunction!==null&&de.push(m[oe].destructorFunction);var Ge=$5(m,L,ie,R)(...de);return vf(p,Ge)}var Sf=(p,m)=>{for(var v=[],k=0;k<p;k++)v.push(S[m+k*4>>2]);return v},gv=p=>{p=p.trim();const m=p.indexOf("(");return m===-1?p:p.slice(0,m)},I5=(p,m,v,k,I,R,P,L,q)=>{var ie=Sf(v,k);m=En(m),m=gv(m),R=eo(I,R,L),to([],[p],he=>{he=he[0];var xe=`${he.name}.${m}`;function de(){Nu(`Cannot call ${xe} due to unbound types`,ie)}m.startsWith("@@")&&(m=Symbol[m.substring(2)]);var oe=he.registeredClass.constructor;return oe[m]===void 0?(de.argCount=v-1,oe[m]=de):(Cf(oe,m,xe),oe[m].overloadTable[v-1]=de),to([],ie,ve=>{var ze=[ve[0],null].concat(ve.slice(1)),Ge=If(xe,ze,null,R,P,L);if(oe[m].overloadTable===void 0?(Ge.argCount=v-1,oe[m]=Ge):oe[m].overloadTable[v-1]=Ge,he.registeredClass.__derivedClasses)for(const He of he.registeredClass.__derivedClasses)He.constructor.hasOwnProperty(m)||(He.constructor[m]=Ge);return[]}),[]})},S5=(p,m,v,k,I,R)=>{var P=Sf(m,v);I=eo(k,I),to([],[p],L=>{L=L[0];var q=`constructor ${L.name}`;if(L.registeredClass.constructor_body===void 0&&(L.registeredClass.constructor_body=[]),L.registeredClass.constructor_body[m-1]!==void 0)throw new Va(`Cannot register multiple constructors with identical number of parameters (${m-1}) for class '${L.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return L.registeredClass.constructor_body[m-1]=()=>{Nu(`Cannot construct ${L.name} due to unbound types`,P)},to([],P,ie=>(ie.splice(1,0,null),L.registeredClass.constructor_body[m-1]=If(q,ie,null,I,R),[])),[]})},N5=(p,m,v,k,I,R,P,L,q,ie)=>{var he=Sf(v,k);m=En(m),m=gv(m),R=eo(I,R,q),to([],[p],xe=>{xe=xe[0];var de=`${xe.name}.${m}`;m.startsWith("@@")&&(m=Symbol[m.substring(2)]),L&&xe.registeredClass.pureVirtualFunctions.push(m);function oe(){Nu(`Cannot call ${de} due to unbound types`,he)}var ve=xe.registeredClass.instancePrototype,ze=ve[m];return ze===void 0||ze.overloadTable===void 0&&ze.className!==xe.name&&ze.argCount===v-2?(oe.argCount=v-2,oe.className=xe.name,ve[m]=oe):(Cf(ve,m,de),ve[m].overloadTable[v-2]=oe),to([],he,Ge=>{var He=If(de,Ge,xe,R,P,q);return ve[m].overloadTable===void 0?(He.argCount=v-2,ve[m]=He):ve[m].overloadTable[v-2]=He,[]}),[]})},xv=[],no=[0,1,,1,null,1,!0,1,!1,1],Nf=p=>{p>9&&--no[p+1]===0&&(no[p]=void 0,xv.push(p))},dn={toValue:p=>(p||tt(`Cannot use deleted val. handle = ${p}`),no[p]),toHandle:p=>{switch(p){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const m=xv.pop()||no.length;return no[m]=p,no[m+1]=1,m}}}},T5={name:"emscripten::val",fromWireType:p=>{var m=dn.toValue(p);return Nf(p),m},toWireType:(p,m)=>dn.toHandle(m),readValueFromPointer:ku,destructorFunction:null},E5=p=>Ns(p,T5),R5=(p,m)=>{switch(m){case 4:return function(v){return this.fromWireType(z[v>>2])};case 8:return function(v){return this.fromWireType(U[v>>3])};default:throw new TypeError(`invalid float width (${m}): ${p}`)}},D5=(p,m,v)=>{m=En(m),Ns(p,{name:m,fromWireType:k=>k,toWireType:(k,I)=>I,readValueFromPointer:R5(m,v),destructorFunction:null})},A5=(p,m,v,k,I)=>{m=En(m);const R=k===0;let P=q=>q;if(R){var L=32-8*v;P=q=>q<<L>>>L,I=P(I)}Ns(p,{name:m,fromWireType:P,toWireType:(q,ie)=>ie,readValueFromPointer:av(m,v,k!==0),destructorFunction:null})},_5=(p,m,v)=>{var k=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],I=k[m];function R(P){var L=S[P>>2],q=S[P+4>>2];return new I(E.buffer,q,L)}v=En(v),Ns(p,{name:v,fromWireType:R,readValueFromPointer:R},{ignoreDuplicateRegistrations:!0})},so=(p,m,v)=>nv(p,F,m,v),F5=(p,m)=>{m=En(m),Ns(p,{name:m,fromWireType(v){var k=S[v>>2],I=v+4,R;return R=bf(I,k,!0),fr(v),R},toWireType(v,k){k instanceof ArrayBuffer&&(k=new Uint8Array(k));var I,R=typeof k=="string";R||ArrayBuffer.isView(k)&&k.BYTES_PER_ELEMENT==1||tt("Cannot pass non-string to std::string"),R?I=yu(k):I=k.length;var P=Df(4+I+1),L=P+4;return S[P>>2]=I,R?so(k,L,I+1):F.set(k,L),v!==null&&v.push(fr,P),P},readValueFromPointer:ku,destructorFunction(v){fr(v)}})},bv=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,O5=(p,m,v)=>{var k=p>>1,I=tv(A,k,m/2,v);if(I-k>16&&bv)return bv.decode(A.subarray(k,I));for(var R="",P=k;P<I;++P){var L=A[P];R+=String.fromCharCode(L)}return R},P5=(p,m,v)=>{if(v??=2147483647,v<2)return 0;v-=2;for(var k=m,I=v<p.length*2?v/2:p.length,R=0;R<I;++R){var P=p.charCodeAt(R);O[m>>1]=P,m+=2}return O[m>>1]=0,m-k},L5=p=>p.length*2,M5=(p,m,v)=>{for(var k="",I=p>>2,R=0;!(R>=m/4);R++){var P=S[I+R];if(!P&&!v)break;k+=String.fromCodePoint(P)}return k},z5=(p,m,v)=>{if(v??=2147483647,v<4)return 0;for(var k=m,I=k+v-4,R=0;R<p.length;++R){var P=p.codePointAt(R);if(P>65535&&R++,D[m>>2]=P,m+=4,m+4>I)break}return D[m>>2]=0,m-k},B5=p=>{for(var m=0,v=0;v<p.length;++v){var k=p.codePointAt(v);k>65535&&v++,m+=4}return m},V5=(p,m,v)=>{v=En(v);var k,I,R;m===2?(k=O5,I=P5,R=L5):(k=M5,I=z5,R=B5),Ns(p,{name:v,fromWireType:P=>{var L=S[P>>2],q=k(P+4,L*m,!0);return fr(P),q},toWireType:(P,L)=>{typeof L!="string"&&tt(`Cannot pass non-string to C++ string type ${v}`);var q=R(L),ie=Df(4+q+m);return S[ie>>2]=q/m,I(L,ie+4,q+m),P!==null&&P.push(fr,ie),ie},readValueFromPointer:ku,destructorFunction(P){fr(P)}})},W5=(p,m)=>{m=En(m),Ns(p,{isVoid:!0,name:m,fromWireType:()=>{},toWireType:(v,k)=>{}})},yv=0,U5=()=>{Ze=!1,yv=0},Tf=[],G5=p=>{var m=Tf.length;return Tf.push(p),m},H5=(p,m)=>{var v=Qr[p];return v===void 0&&tt(`${m} has unknown type ${pv(p)}`),v},j5=(p,m)=>{for(var v=new Array(p),k=0;k<p;++k)v[k]=H5(S[m+k*4>>2],`parameter ${k}`);return v},K5=(p,m,v)=>{var k=[],I=p(k,v);return k.length&&(S[m>>2]=dn.toHandle(k)),I},q5={},Ef=p=>{var m=q5[p];return m===void 0?En(p):m},X5=(p,m,v)=>{var k=8,[I,...R]=j5(p,m),P=I.toWireType.bind(I),L=R.map(oe=>oe.readValueFromPointer.bind(oe));p--;var q={toValue:dn.toValue},ie=L.map((oe,ve)=>{var ze=`argFromPtr${ve}`;return q[ze]=oe,`${ze}(args${ve?"+"+ve*k:""})`}),he;switch(v){case 0:he="toValue(handle)";break;case 2:he="new (toValue(handle))";break;case 3:he="";break;case 1:q.getStringOrSymbol=Ef,he="toValue(handle)[getStringOrSymbol(methodName)]";break}he+=`(${ie})`,I.isVoid||(q.toReturnWire=P,q.emval_returnValue=K5,he=`return emval_returnValue(toReturnWire, destructorsRef, ${he})`),he=`return function (handle, methodName, destructorsRef, args) {
${he}
}`;var xe=new Function(Object.keys(q),he)(...Object.values(q)),de=`methodCaller<(${R.map(oe=>oe.name)}) => ${I.name}>`;return G5(vf(de,xe))},Y5=p=>p?(p=Ef(p),dn.toHandle(globalThis[p])):dn.toHandle(globalThis),Z5=(p,m)=>(p=dn.toValue(p),m=dn.toValue(m),dn.toHandle(p[m])),J5=p=>{p>9&&(no[p+1]+=1)},Q5=(p,m,v,k,I)=>Tf[p](m,v,k,I),ej=()=>dn.toHandle([]),tj=p=>dn.toHandle(Ef(p)),nj=p=>{var m=dn.toValue(p);fv(m),Nf(p)},sj=(p,m,v)=>{p=dn.toValue(p),m=dn.toValue(m),v=dn.toValue(v),p[m]=v},Ua={},wv=p=>{if(p instanceof Fe||p=="unwind")return w;l(1,p)},vv=()=>Ze||yv>0,Cv=p=>{w=p,vv()||(i.onExit?.(p),y=!0),l(p,new Fe(p))},rj=(p,m)=>{w=p,Cv(p)},kv=rj,oj=()=>{if(!vv())try{kv(w)}catch(p){wv(p)}},$v=p=>{if(!y)try{return p()}catch(m){wv(m)}finally{oj()}},ij=()=>performance.now(),aj=(p,m)=>{if(Ua[p]&&(clearTimeout(Ua[p].id),delete Ua[p]),!m)return 0;var v=setTimeout(()=>{delete Ua[p],$v(()=>Dv(p,ij()))},m);return Ua[p]={id:v,timeout_ms:m},0},lj=(p,m,v,k)=>{var I=new Date().getFullYear(),R=new Date(I,0,1),P=new Date(I,6,1),L=R.getTimezoneOffset(),q=P.getTimezoneOffset(),ie=Math.max(L,q);S[p>>2]=ie*60,D[m>>2]=+(L!=q);var he=oe=>{var ve=oe>=0?"-":"+",ze=Math.abs(oe),Ge=String(Math.floor(ze/60)).padStart(2,"0"),He=String(ze%60).padStart(2,"0");return`UTC${ve}${Ge}${He}`},xe=he(L),de=he(q);q<L?(so(xe,v,17),so(de,k,17)):(so(xe,k,17),so(de,v,17))},cj=()=>Date.now(),uj=()=>134217728,hj=(p,m)=>Math.ceil(p/m)*m,dj=p=>{var m=Tu.buffer.byteLength,v=(p-m+65535)/65536|0;try{return Tu.grow(v),Q(),1}catch{}},pj=p=>{var m=F.length;p>>>=0;var v=uj();if(p>v)return!1;for(var k=1;k<=4;k*=2){var I=m*(1+.2/k);I=Math.min(I,p+100663296);var R=Math.min(v,hj(Math.max(p,I),65536)),P=dj(R);if(P)return!0}return!1},Rf={},fj=()=>a||"./this.program",Ga=()=>{if(!Ga.strings){var p=(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",m={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:p,_:fj()};for(var v in Rf)Rf[v]===void 0?delete m[v]:m[v]=Rf[v];var k=[];for(var v in m)k.push(`${v}=${m[v]}`);Ga.strings=k}return Ga.strings},mj=(p,m)=>{var v=0,k=0;for(var I of Ga()){var R=m+v;S[p+k>>2]=R,v+=so(I,R,1/0)+1,k+=4}return 0},gj=(p,m)=>{var v=Ga();S[p>>2]=v.length;var k=0;for(var I of v)k+=yu(I)+1;return S[m>>2]=k,0};function xj(p){try{var m=hn.getStreamFromFD(p);return T.close(m),0}catch(v){if(typeof T>"u"||v.name!=="ErrnoError")throw v;return v.errno}}var bj=(p,m,v,k)=>{for(var I=0,R=0;R<v;R++){var P=S[m>>2],L=S[m+4>>2];m+=8;var q=T.read(p,E,P,L,k);if(q<0)return-1;if(I+=q,q<L)break}return I};function yj(p,m,v,k){try{var I=hn.getStreamFromFD(p),R=bj(I,m,v);return S[k>>2]=R,0}catch(P){if(typeof T>"u"||P.name!=="ErrnoError")throw P;return P.errno}}var wj=9007199254740992,vj=-9007199254740992,Cj=p=>p<vj||p>wj?NaN:Number(p);function kj(p,m,v,k){m=Cj(m);try{if(isNaN(m))return 61;var I=hn.getStreamFromFD(p);return T.llseek(I,m,v),G[k>>3]=BigInt(I.position),I.getdents&&m===0&&v===0&&(I.getdents=null),0}catch(R){if(typeof T>"u"||R.name!=="ErrnoError")throw R;return R.errno}}var $j=(p,m,v,k)=>{for(var I=0,R=0;R<v;R++){var P=S[m>>2],L=S[m+4>>2];m+=8;var q=T.write(p,E,P,L,k);if(q<0)return-1;if(I+=q,q<L)break}return I};function Ij(p,m,v,k){try{var I=hn.getStreamFromFD(p),R=$j(I,m,v);return S[k>>2]=R,0}catch(P){if(typeof T>"u"||P.name!=="ErrnoError")throw P;return P.errno}}var Iv=p=>{var m=i["_"+p];return m},Sj=(p,m)=>{E.set(p,m)},Sv=p=>Fv(p),Nj=p=>{var m=yu(p)+1,v=Sv(m);return so(p,v,m),v},Nv=(p,m,v,k,I)=>{var R={string:ve=>{var ze=0;return ve!=null&&ve!==0&&(ze=Nj(ve)),ze},array:ve=>{var ze=Sv(ve.length);return Sj(ve,ze),ze}};function P(ve){return m==="string"?bf(ve):m==="boolean"?!!ve:ve}var L=Iv(p),q=[],ie=0;if(k)for(var he=0;he<k.length;he++){var xe=R[v[he]];xe?(ie===0&&(ie=Ae()),q[he]=xe(k[he])):q[he]=k[he]}var de=L(...q);function oe(ve){return ie!==0&&_e(ie),P(ve)}return de=oe(de),de},Tj=(p,m,v,k)=>{var I=!v||v.every(P=>P==="number"||P==="boolean"),R=m!=="string";return R&&I&&!k?Iv(p):(...P)=>Nv(p,m,v,P)},Ej=(...p)=>T.createPath(...p),Rj=(...p)=>T.unlink(...p),Dj=(...p)=>T.createLazyFile(...p),Aj=(...p)=>T.createDevice(...p);function Tv(){return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement||document.msFullscreenElement}var Ev=(p,m)=>setTimeout(()=>{$v(p)},m),ge={useWebGL:!1,isFullscreen:!1,pointerLock:!1,moduleContextCreatedCallbacks:[],workers:[],preloadedImages:{},preloadedAudios:{},getCanvas:()=>i.canvas,init(){if(ge.initted)return;ge.initted=!0;var p={};p.canHandle=function(R){return!i.noImageDecoding&&/\.(jpg|jpeg|png|bmp|webp)$/i.test(R)},p.handle=async function(R,P){var L=new Blob([R],{type:ge.getMimetype(P)});L.size!==R.length&&(L=new Blob([new Uint8Array(R).buffer],{type:ge.getMimetype(P)}));var q=URL.createObjectURL(L);return new Promise((ie,he)=>{var xe=new Image;xe.onload=()=>{var de=document.createElement("canvas");de.width=xe.width,de.height=xe.height;var oe=de.getContext("2d");oe.drawImage(xe,0,0),ge.preloadedImages[P]=de,URL.revokeObjectURL(q),ie(R)},xe.onerror=de=>{x(`Image ${q} could not be decoded`),he()},xe.src=q})},wu.push(p);var m={};m.canHandle=function(R){return!i.noAudioDecoding&&R.slice(-4)in{".ogg":1,".wav":1,".mp3":1}},m.handle=async function(R,P){return new Promise((L,q)=>{var ie=!1;function he(ve){ie||(ie=!0,ge.preloadedAudios[P]=ve,L(R))}var xe=new Blob([R],{type:ge.getMimetype(P)}),de=URL.createObjectURL(xe),oe=new Audio;oe.addEventListener("canplaythrough",()=>he(oe),!1),oe.onerror=function(ze){if(ie)return;x(`warning: browser could not fully decode audio ${P}, trying slower base64 approach`);function Ge(He){for(var ut="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",gt="=",xt="",Vt=0,nt=0,Ts=0;Ts<He.length;Ts++)for(Vt=Vt<<8|He[Ts],nt+=8;nt>=6;){var ro=Vt>>nt-6&63;nt-=6,xt+=ut[ro]}return nt==2?(xt+=ut[(Vt&3)<<4],xt+=gt+gt):nt==4&&(xt+=ut[(Vt&15)<<2],xt+=gt),xt}oe.src="data:audio/x-"+P.slice(-3)+";base64,"+Ge(R),he(oe)},oe.src=de,Ev(()=>{he(oe)},1e4)})},wu.push(m);function v(){var I=ge.getCanvas();ge.pointerLock=document.pointerLockElement===I}var k=ge.getCanvas();k&&(document.addEventListener("pointerlockchange",v,!1),i.elementPointerLock&&k.addEventListener("click",I=>{!ge.pointerLock&&ge.getCanvas().requestPointerLock&&(ge.getCanvas().requestPointerLock(),I.preventDefault())},!1))},createContext(p,m,v,k){if(m&&i.ctx&&p==ge.getCanvas())return i.ctx;var I,R;if(m){var P={antialias:!1,alpha:!1,majorVersion:1};if(k)for(var L in k)P[L]=k[L];typeof GL<"u"&&(R=GL.createContext(p,P),R&&(I=GL.getContext(R).GLctx))}else I=p.getContext("2d");return I?(v&&(i.ctx=I,m&&GL.makeContextCurrent(R),ge.useWebGL=m,ge.moduleContextCreatedCallbacks.forEach(q=>q()),ge.init()),I):null},fullscreenHandlersInstalled:!1,lockPointer:void 0,resizeCanvas:void 0,requestFullscreen(p,m){ge.lockPointer=p,ge.resizeCanvas=m,typeof ge.lockPointer>"u"&&(ge.lockPointer=!0),typeof ge.resizeCanvas>"u"&&(ge.resizeCanvas=!1);var v=ge.getCanvas();function k(){ge.isFullscreen=!1;var R=v.parentNode;Tv()===R?(v.exitFullscreen=ge.exitFullscreen,ge.lockPointer&&v.requestPointerLock(),ge.isFullscreen=!0,ge.resizeCanvas?ge.setFullscreenCanvasSize():ge.updateCanvasDimensions(v)):(R.parentNode.insertBefore(v,R),R.parentNode.removeChild(R),ge.resizeCanvas?ge.setWindowedCanvasSize():ge.updateCanvasDimensions(v)),i.onFullScreen?.(ge.isFullscreen),i.onFullscreen?.(ge.isFullscreen)}ge.fullscreenHandlersInstalled||(ge.fullscreenHandlersInstalled=!0,document.addEventListener("fullscreenchange",k,!1),document.addEventListener("mozfullscreenchange",k,!1),document.addEventListener("webkitfullscreenchange",k,!1),document.addEventListener("MSFullscreenChange",k,!1));var I=document.createElement("div");v.parentNode.insertBefore(I,v),I.appendChild(v),I.requestFullscreen=I.requestFullscreen||I.mozRequestFullScreen||I.msRequestFullscreen||(I.webkitRequestFullscreen?()=>I.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):null)||(I.webkitRequestFullScreen?()=>I.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):null),I.requestFullscreen()},exitFullscreen(){if(!ge.isFullscreen)return!1;var p=document.exitFullscreen||document.cancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.webkitCancelFullScreen||(()=>{});return p.apply(document,[]),!0},safeSetTimeout(p,m){return Ev(p,m)},getMimetype(p){return{jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",bmp:"image/bmp",ogg:"audio/ogg",wav:"audio/wav",mp3:"audio/mpeg"}[p.slice(p.lastIndexOf(".")+1)]},getUserMedia(p){window.getUserMedia||=navigator.getUserMedia||navigator.mozGetUserMedia,window.getUserMedia(p)},getMovementX(p){return p.movementX||p.mozMovementX||p.webkitMovementX||0},getMovementY(p){return p.movementY||p.mozMovementY||p.webkitMovementY||0},getMouseWheelDelta(p){var m=0;switch(p.type){case"DOMMouseScroll":m=p.detail/3;break;case"mousewheel":m=p.wheelDelta/120;break;case"wheel":switch(m=p.deltaY,p.deltaMode){case 0:m/=100;break;case 1:m/=3;break;case 2:m*=80;break;default:se("unrecognized mouse wheel delta mode: "+p.deltaMode)}break;default:se("unrecognized mouse wheel event: "+p.type)}return m},mouseX:0,mouseY:0,mouseMovementX:0,mouseMovementY:0,touches:{},lastTouches:{},calculateMouseCoords(p,m){var v=ge.getCanvas(),k=v.getBoundingClientRect(),I=typeof window.scrollX<"u"?window.scrollX:window.pageXOffset,R=typeof window.scrollY<"u"?window.scrollY:window.pageYOffset,P=p-(I+k.left),L=m-(R+k.top);return P=P*(v.width/k.width),L=L*(v.height/k.height),{x:P,y:L}},setMouseCoords(p,m){const{x:v,y:k}=ge.calculateMouseCoords(p,m);ge.mouseMovementX=v-ge.mouseX,ge.mouseMovementY=k-ge.mouseY,ge.mouseX=v,ge.mouseY=k},calculateMouseEvent(p){if(ge.pointerLock)p.type!="mousemove"&&"mozMovementX"in p?ge.mouseMovementX=ge.mouseMovementY=0:(ge.mouseMovementX=ge.getMovementX(p),ge.mouseMovementY=ge.getMovementY(p)),ge.mouseX+=ge.mouseMovementX,ge.mouseY+=ge.mouseMovementY;else{if(p.type==="touchstart"||p.type==="touchend"||p.type==="touchmove"){var m=p.touch;if(m===void 0)return;var v=ge.calculateMouseCoords(m.pageX,m.pageY);if(p.type==="touchstart")ge.lastTouches[m.identifier]=v,ge.touches[m.identifier]=v;else if(p.type==="touchend"||p.type==="touchmove"){var k=ge.touches[m.identifier];k||=v,ge.lastTouches[m.identifier]=k,ge.touches[m.identifier]=v}return}ge.setMouseCoords(p.pageX,p.pageY)}},resizeListeners:[],updateResizeListeners(){var p=ge.getCanvas();ge.resizeListeners.forEach(m=>m(p.width,p.height))},setCanvasSize(p,m,v){var k=ge.getCanvas();ge.updateCanvasDimensions(k,p,m),v||ge.updateResizeListeners()},windowedWidth:0,windowedHeight:0,setFullscreenCanvasSize(){if(typeof SDL<"u"){var p=S[SDL.screen>>2];p=p|8388608,D[SDL.screen>>2]=p}ge.updateCanvasDimensions(ge.getCanvas()),ge.updateResizeListeners()},setWindowedCanvasSize(){if(typeof SDL<"u"){var p=S[SDL.screen>>2];p=p&-8388609,D[SDL.screen>>2]=p}ge.updateCanvasDimensions(ge.getCanvas()),ge.updateResizeListeners()},updateCanvasDimensions(p,m,v){m&&v?(p.widthNative=m,p.heightNative=v):(m=p.widthNative,v=p.heightNative);var k=m,I=v;if(i.forcedAspectRatio>0&&(k/I<i.forcedAspectRatio?k=Math.round(I*i.forcedAspectRatio):I=Math.round(k/i.forcedAspectRatio)),Tv()===p.parentNode&&typeof screen<"u"){var R=Math.min(screen.width/k,screen.height/I);k=Math.round(k*R),I=Math.round(I*R)}ge.resizeCanvas?(p.width!=k&&(p.width=k),p.height!=I&&(p.height=I),typeof p.style<"u"&&(p.style.removeProperty("width"),p.style.removeProperty("height"))):(p.width!=m&&(p.width=m),p.height!=v&&(p.height=v),typeof p.style<"u"&&(k!=m||I!=v?(p.style.setProperty("width",k+"px","important"),p.style.setProperty("height",I+"px","important")):(p.style.removeProperty("width"),p.style.removeProperty("height"))))}},_j=ge.createContext;if(T.createPreloadedFile=X6,T.preloadFile=xf,T.staticInit(),i5(),w5(),i.noExitRuntime&&(Ze=i.noExitRuntime),i.preloadPlugins&&(wu=i.preloadPlugins),i.print&&(g=i.print),i.printErr&&(x=i.printErr),i.wasmBinary&&(b=i.wasmBinary),i.arguments&&i.arguments,i.thisProgram&&(a=i.thisProgram),i.preInit)for(typeof i.preInit=="function"&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.shift()();i.addRunDependency=iv,i.removeRunDependency=ov,i.ccall=Nv,i.cwrap=Tj,i.createContext=_j,i.FS_preloadFile=xf,i.FS_unlink=Rj,i.FS_createPath=Ej,i.FS_createDevice=Aj,i.FS=T,i.FS_createDataFile=rv,i.FS_createLazyFile=Dj;var Rv,Df,fr,Dv,$t,Av,_v,Fv,Ov,Pv,Af,Lv,Mv,Tu,zv;function Fj(p){Rv=p.sa,Df=i._malloc=p.ta,fr=i._free=p.ua,Dv=p.wa,$t=p.xa,Av=p.ya,_v=p.za,Fv=p.Aa,Ov=p.Ba,Pv=p.Ca,Af=p.Da,Lv=p.Ea,Mv=p.Fa,Tu=p.qa,zv=p.va}var Oj={r:$s,u:Vs,a:Is,h:Ss,L:Yr,b:Ma,fa:za,d:pf,K:Y6,ea:Z6,O:J6,aa:Q6,$:e5,Q:n5,la:s5,pa:k5,na:I5,oa:S5,i:N5,ja:E5,P:D5,v:A5,o:_5,ka:F5,I:V5,ma:W5,Z:U5,m:X5,j:Nf,y:Y5,E:Z5,x:J5,l:Q5,A:ej,B:tj,k:nj,R:sj,_:aj,ba:lj,ia:cj,ga:pj,ca:mj,da:gj,H:kv,G:xj,N:yj,ha:kj,M:Ij,c:Lj,e:Mj,q:Wj,W:Gj,F:Uj,w:Xj,J:jj,D:Yj,S:nK,T:tK,U:eK,V:Hj,g:Bj,s:Pj,f:zj,n:Jj,p:Kj,X:Vj,t:qj,z:Zj,C:Qj,Y:Cv};function Pj(p,m){var v=Ae();try{Dt(p)(m)}catch(k){if(_e(v),k!==k+0)throw k;$t(1,0)}}function Lj(p,m){var v=Ae();try{return Dt(p)(m)}catch(k){if(_e(v),k!==k+0)throw k;$t(1,0)}}function Mj(p,m,v){var k=Ae();try{return Dt(p)(m,v)}catch(I){if(_e(k),I!==I+0)throw I;$t(1,0)}}function zj(p,m,v){var k=Ae();try{Dt(p)(m,v)}catch(I){if(_e(k),I!==I+0)throw I;$t(1,0)}}function Bj(p){var m=Ae();try{Dt(p)()}catch(v){if(_e(m),v!==v+0)throw v;$t(1,0)}}function Vj(p,m,v,k,I,R,P){var L=Ae();try{Dt(p)(m,v,k,I,R,P)}catch(q){if(_e(L),q!==q+0)throw q;$t(1,0)}}function Wj(p,m,v,k){var I=Ae();try{return Dt(p)(m,v,k)}catch(R){if(_e(I),R!==R+0)throw R;$t(1,0)}}function Uj(p,m,v,k,I,R){var P=Ae();try{return Dt(p)(m,v,k,I,R)}catch(L){if(_e(P),L!==L+0)throw L;$t(1,0)}}function Gj(p,m,v,k,I,R){var P=Ae();try{return Dt(p)(m,v,k,I,R)}catch(L){if(_e(P),L!==L+0)throw L;$t(1,0)}}function Hj(p,m,v){var k=Ae();try{return Dt(p)(m,v)}catch(I){if(_e(k),I!==I+0)throw I;$t(1,0)}}function jj(p,m,v,k,I,R,P,L){var q=Ae();try{return Dt(p)(m,v,k,I,R,P,L)}catch(ie){if(_e(q),ie!==ie+0)throw ie;$t(1,0)}}function Kj(p,m,v,k,I){var R=Ae();try{Dt(p)(m,v,k,I)}catch(P){if(_e(R),P!==P+0)throw P;$t(1,0)}}function qj(p,m,v,k,I,R,P,L){var q=Ae();try{Dt(p)(m,v,k,I,R,P,L)}catch(ie){if(_e(q),ie!==ie+0)throw ie;$t(1,0)}}function Xj(p,m,v,k,I,R,P){var L=Ae();try{return Dt(p)(m,v,k,I,R,P)}catch(q){if(_e(L),q!==q+0)throw q;$t(1,0)}}function Yj(p,m,v,k,I,R,P,L,q,ie,he,xe){var de=Ae();try{return Dt(p)(m,v,k,I,R,P,L,q,ie,he,xe)}catch(oe){if(_e(de),oe!==oe+0)throw oe;$t(1,0)}}function Zj(p,m,v,k,I,R,P,L,q,ie,he){var xe=Ae();try{Dt(p)(m,v,k,I,R,P,L,q,ie,he)}catch(de){if(_e(xe),de!==de+0)throw de;$t(1,0)}}function Jj(p,m,v,k){var I=Ae();try{Dt(p)(m,v,k)}catch(R){if(_e(I),R!==R+0)throw R;$t(1,0)}}function Qj(p,m,v,k,I,R,P,L,q,ie,he,xe,de,oe,ve,ze){var Ge=Ae();try{Dt(p)(m,v,k,I,R,P,L,q,ie,he,xe,de,oe,ve,ze)}catch(He){if(_e(Ge),He!==He+0)throw He;$t(1,0)}}function eK(p,m,v,k){var I=Ae();try{return Dt(p)(m,v,k)}catch(R){if(_e(I),R!==R+0)throw R;$t(1,0)}}function tK(p,m,v,k,I){var R=Ae();try{return Dt(p)(m,v,k,I)}catch(P){if(_e(R),P!==P+0)throw P;$t(1,0)}}function nK(p,m,v,k,I,R){var P=Ae();try{return Dt(p)(m,v,k,I,R)}catch(L){if(_e(P),L!==L+0)throw L;$t(1,0)}}function _f(){if(Jr>0){Ba=_f;return}if(Z(),Jr>0){Ba=_f;return}function p(){i.calledRun=!0,!y&&(te(),C?.(i),i.onRuntimeInitialized?.(),re())}i.setStatus?(i.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>i.setStatus(""),1),p()},1)):p()}var Ha;return Ha=await Te(),_f(),i.ALEInterface?(i.ALEInterface.prototype.loadROMFromURL=async function(p,m){const v=await fetch(p);if(!v.ok)throw new Error("Failed to fetch ROM from "+p+": "+v.statusText);const k=await v.arrayBuffer(),I=new Uint8Array(k);try{i.FS.mkdir("/roms")}catch{}const R="/roms/"+(m||p.split("/").pop());return i.FS.writeFile(R,I),this.loadROM(R),R},i.ALEInterface.prototype.loadROMFromFile=function(p){const m=this;return new Promise((v,k)=>{const I=new FileReader;I.onload=R=>{const P=new Uint8Array(R.target.result);try{i.FS.mkdir("/roms")}catch{}const L="/roms/"+p.name;i.FS.writeFile(L,P),m.loadROM(L),v(L)},I.onerror=()=>k(I.error),I.readAsArrayBuffer(p)})},console.log("[ALE] ALE Interface ready. Version: "+i.ALEInterface.getVersion())):console.warn("[ALE] ALEInterface not found. Bindings may not be loaded correctly."),X?t=i:t=new Promise((p,m)=>{C=p,N=m}),t}})();typeof Uv=="object"&&typeof mr=="object"?(mr.exports=Ru,mr.exports.default=Ru):typeof define=="function"&&define.amd&&define([],()=>Ru);const Gv=(mr.exports==null?{}:mr.exports).default||mr.exports;const Hv=1e-7,jv=1e-4;class Ff{constructor(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,t){this.dataIdsCount++,this.data.set(e,t)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}}class Du{refCount(e){return vn("refCount")}incRef(e){return vn("incRef")}timerAvailable(){return!0}time(e){return vn("time")}read(e){return vn("read")}readSync(e){return vn("readSync")}readToGPU(e,t){return vn("readToGPU")}numDataIds(){return vn("numDataIds")}disposeData(e,t){return vn("disposeData")}write(e,t,s){return vn("write")}move(e,t,s,r,o){return vn("move")}createTensorFromGPUData(e,t,s){return vn("createTensorFromGPUData")}memory(){return vn("memory")}floatPrecision(){return vn("floatPrecision")}epsilon(){return this.floatPrecision()===32?Hv:jv}dispose(){return vn("dispose")}}function vn(n){throw new Error(`'${n}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}function Kv(n){let e=n.length,t=0;for(;e>0;)t=Math.random()*e|0,e--,oo(n,e,t)}function Au(n,e,t){return Math.max(n,Math.min(e,t))}function _u(n){return n%2===0?n:n+1}function oo(n,e,t){const s=n[e];n[e]=n[t],n[t]=s}function qv(n){let e=0;for(let t=0;t<n.length;t++)e+=n[t];return e}function _(n,e){if(!n)throw new Error(typeof e=="string"?e:e())}function Fu(n,e,t=""){_(Je(n,e),()=>t+` Shapes ${n} and ${e} must match`)}function Of(n){_(n!=null,()=>"The input to the tensor constructor must be a non-null value.")}function ne(n){if(n.length===0)return 1;let e=n[0];for(let t=1;t<n.length;t++)e*=n[t];return e}function Je(n,e){if(n===e)return!0;if(n==null||e==null||n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function io(n){return n%1===0}function Ou(n){const e=Math.ceil(Math.sqrt(n));return[e,Math.ceil(n/e)]}function ao(n,e){return e<=n.length?n:n+" ".repeat(e-n.length)}function Pf(n,e=r=>0,t,s){return new Promise((r,o)=>{let i=0;const a=()=>{if(n()){r();return}i++;const l=e(i);if(t!=null&&i>=t){o();return}s!=null?s(a,l):setTimeout(a,l)};a()})}function Lf(n,e){let t=1,s=-1;for(let o=0;o<n.length;++o)if(n[o]>=0)t*=n[o];else if(n[o]===-1){if(s!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${s} and dim ${o}`);s=o}else if(n[o]<0)throw Error(`Shapes can not be < 0. Found ${n[o]} at dim ${o}`);if(s===-1){if(e>0&&e!==t)throw Error(`Size(${e}) must match the product of shape ${n}`);return n}if(t===0)throw Error(`Cannot infer the missing size in [${n}] when there are 0 elements`);if(e%t!==0)throw Error(`The implicit shape can't be a fractional number. Got ${e} / ${t}`);const r=n.slice();return r[s]=e/t,r}function Be(n,e){const t=e.length;return n=n==null?e.map((s,r)=>r):[].concat(n),_(n.every(s=>s>=-t&&s<t),()=>`All values in axis param must be in range [-${t}, ${t}) but got axis ${n}`),_(n.every(s=>io(s)),()=>`All values in axis param must be integers but got axis ${n}`),n.map(s=>s<0?t+s:s)}function Us(n,e){const t=[],s=[],r=e!=null&&Array.isArray(e)&&e.length===0,o=e==null||r?null:Be(e,n).sort();let i=0;for(let a=0;a<n.length;++a){if(o!=null){if(o[i]===a&&n[a]!==1)throw new Error(`Can't squeeze axis ${a} since its dim '${n[a]}' is not 1`);(o[i]==null||o[i]>a)&&n[a]===1&&(t.push(n[a]),s.push(a)),o[i]<=a&&i++}n[a]!==1&&(t.push(n[a]),s.push(a))}return{newShape:t,keptDims:s}}function Zt(n,e){return It(n,e)}function It(n,e){let t=null;if(n==null||n==="float32")t=new Float32Array(e);else if(n==="int32")t=new Int32Array(e);else if(n==="bool")t=new Uint8Array(e);else if(n==="string")t=new Array(e);else throw new Error(`Unknown data type ${n}`);return t}function Xv(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(isNaN(s)||!isFinite(s))throw Error(`A tensor of type ${e} being uploaded contains ${s}.`)}}function Yv(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function Mf(n,e){return!(e==="complex64"||e==="float32"&&n!=="complex64"||e==="int32"&&n!=="float32"&&n!=="complex64"||e==="bool"&&n==="bool")}function qa(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error(`Unknown dtype ${n}`)}function Zv(n){if(n==null)return 0;let e=0;return n.forEach(t=>e+=t.length),e}function qo(n){return typeof n=="string"||n instanceof String}function Jv(n){return typeof n=="boolean"}function Pu(n){return typeof n=="number"}function lo(n){return Array.isArray(n)?lo(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray?"int32":Pu(n)?"float32":qo(n)?"string":Jv(n)?"bool":"float32"}function Lu(n){return!!(n&&n.constructor&&n.call&&n.apply)}function Mu(n,e){for(let t=e;t<n;++t)if(n%t===0)return t;return n}function Ie(n){const e=n.length;if(e<2)return[];const t=new Array(e-1);t[e-2]=n[e-1];for(let s=e-3;s>=0;--s)t[s]=t[s+1]*n[s+1];return t}function zf(n,e,t,s=!1){const r=new Array;if(e.length===1){const o=e[0]*(s?2:1);for(let i=0;i<o;i++)r[i]=t[n+i]}else{const o=e[0],i=e.slice(1),a=i.reduce((l,c)=>l*c)*(s?2:1);for(let l=0;l<o;l++)r[l]=zf(n+l*a,i,t,s)}return r}function Kn(n,e,t=!1){if(n.length===0)return e[0];const s=n.reduce((r,o)=>r*o)*(t?2:1);if(s===0)return[];if(s!==e.length)throw new Error(`[${n}] does not match the input size ${e.length}${t?" for a complex tensor":""}.`);return zf(0,n,e,t)}function Qv(n,e){if(Array.isArray(n))return n;if(e==="float32")return n instanceof Float32Array?n:new Float32Array(n);if(e==="int32")return n instanceof Int32Array?n:new Int32Array(n);if(e==="bool"||e==="string")return Uint8Array.from(new Int32Array(n));throw new Error(`Unknown dtype ${e}`)}function zu(n,e){const t=Jt(n,e);for(let s=0;s<t.length;s++)t[s]=1;return t}function Jt(n,e){if(e==null||e==="float32"||e==="complex64")return new Float32Array(n);if(e==="int32")return new Int32Array(n);if(e==="bool")return new Uint8Array(n);throw new Error(`Unknown data type ${e}`)}function Bf(n,e){const t=n.reduce((s,r)=>s*r,1);if(e==null||e==="float32")return Kn(n,new Float32Array(t));if(e==="int32")return Kn(n,new Int32Array(t));if(e==="bool")return Kn(n,new Uint8Array(t));throw new Error(`Unknown data type ${e}`)}function Es(n){n.forEach(e=>{_(Number.isInteger(e)&&e>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${n}].`)})}function as(n,e,t){if(e===0)return 0;if(e===1)return n[0];let s=n[n.length-1];for(let r=0;r<n.length-1;++r)s+=t[r]*n[r];return s}function co(n,e,t){if(e===0)return[];if(e===1)return[n];const s=new Array(e);for(let r=0;r<s.length-1;++r)s[r]=Math.floor(n/t[r]),n-=s[r]*t[r];return s[s.length-1]=n,s}function Bu(n){return n&&n.then&&typeof n.then=="function"}const Vf="tfjsflags";class eC{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=tC,this.populateURLFlags()}setPlatform(e,t){this.platform!=null&&(J().getBool("IS_TEST")||J().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=t}registerFlag(e,t,s){if(this.flagRegistry[e]={evaluationFn:t,setHook:s},this.urlFlags[e]!=null){const r=this.urlFlags[e];J().getBool("IS_TEST")||J().getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${r}.`),this.set(e,r)}}async getAsync(e){return e in this.flags?this.flags[e]:(this.flags[e]=await this.evaluateFlag(e),this.flags[e])}get(e){if(e in this.flags)return this.flags[e];const t=this.evaluateFlag(e);if(Bu(t))throw new Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=t,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getString(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,t){if(this.flagRegistry[e]==null)throw new Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=t,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(t)}evaluateFlag(e){if(this.flagRegistry[e]==null)throw new Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const e=this.getQueryParams(this.global.location.search);Vf in e&&e[Vf].split(",").forEach(s=>{const[r,o]=s.split(":");this.urlFlags[r]=sC(r,o)})}}function tC(n){const e={};return n.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(t,...s)=>(nC(e,s[0],s[1]),s.join("="))),e}function nC(n,e,t){n[decodeURIComponent(e)]=decodeURIComponent(t||"")}function sC(n,e){const t=e.toLowerCase();return t==="true"||t==="false"?t==="true":`${+t}`===t?+t:e}function J(){return Wf}let Wf=null;function rC(n){Wf=n}let Vu;function Uf(){if(Vu==null){let n;if(typeof window<"u")n=window;else if(typeof global<"u")n=global;else if(typeof process<"u")n=process;else if(typeof self<"u")n=self;else throw new Error("Could not find a global object");Vu=n}return Vu}function oC(){const n=Uf();return n._tfGlobals==null&&(n._tfGlobals=new Map),n._tfGlobals}function Wu(n,e){const t=oC();if(t.has(n))return t.get(n);{const s=e();return t.set(n,s),t.get(n)}}const Xa="Abs",Xo="Acos",Yo="Acosh",uo="Add",Uu="AddN",Gu="All",Hu="Any",Ya="ArgMax",Za="ArgMin",Zo="Asin",Jo="Asinh",Qo="Atan",ei="Atanh",ti="Atan2",Ja="AvgPool",ju="AvgPoolGrad",Qa="AvgPool3D",Ku="AvgPool3DGrad",el="BatchMatMul",tl="BatchToSpaceND",qu="Bincount",Xu="BitwiseAnd",iC="BroadcastTo",Gf="BroadcastArgs",ni="Cast",si="Ceil",ri="ClipByValue",Yu="Complex",nl="ComplexAbs",sl="Concat",rl="Conv2D",Zu="Conv2DBackpropFilter",ol="Conv2DBackpropInput",il="Conv3D",Ju="Conv3DBackpropFilterV2",Qu="Conv3DBackpropInputV2",oi="Cos",ii="Cosh",eh="Cumprod",al="Cumsum",th="CropAndResize",nh="DenseBincount",sh="DepthToSpace",ll="DepthwiseConv2dNative",rh="DepthwiseConv2dNativeBackpropFilter",oh="DepthwiseConv2dNativeBackpropInput",Hf="Diag",cl="Dilation2D",ih="Dilation2DBackpropInput",ah="Dilation2DBackpropFilter",aC="Draw",ai="RealDiv",lh="Einsum",li="Elu",ch="EluGrad",ci="Erf",ul="Equal",ui="Exp",hl="ExpandDims",hi="Expm1",uh="FFT",hh="Fill",dh="FlipLeftRight",di="Floor",pi="FloorDiv",dl="FusedBatchNorm",pl="GatherV2",jf="GatherNd",fl="Greater",fi="GreaterEqual",mi="Identity",ph="IFFT",fh="Imag",gi="IsFinite",xi="IsInf",bi="IsNan",ml="LeakyRelu",gl="Less",xl="LessEqual",Kf="LinSpace",yi="Log",wi="Log1p",bl="LogicalAnd",yl="LogicalNot",wl="LogicalOr",lC="LogSoftmax",vl="LRN",mh="LRNGrad",Cl="Max",vi="Maximum",kl="MaxPool",gh="MaxPoolGrad",$l="MaxPool3D",xh="MaxPool3DGrad",qf="MaxPoolWithArgmax",Il="Mean",Sl="Min",Ci="Minimum",Nl="MirrorPad",ki="Mod",Xf="Multinomial",$i="Multiply",Tl="Neg",El="NotEqual",bh="NonMaxSuppressionV3",yh="NonMaxSuppressionV4",wh="NonMaxSuppressionV5",Rl="OnesLike",Dl="OneHot",Al="Pack",_l="PadV2",Ii="Pow",Fl="Prelu",Ol="Prod",Yf="RaggedGather",Zf="RaggedRange",Jf="RaggedTensorToTensor",vh="Range",Ch="Real",Si="Reciprocal",Ni="Relu",Pl="Reshape",Ll="ResizeNearestNeighbor",kh="ResizeNearestNeighborGrad",Ml="ResizeBilinear",$h="ResizeBilinearGrad",Ti="Relu6",zl="Reverse",Ei="Round",Ri="Rsqrt",Qf="ScatterNd",em="TensorScatterUpdate",tm="SearchSorted",Bl="Select",Di="Selu",Vl="Slice",Ai="Sin",_i="Sinh",Fi="Sign",Oi="Sigmoid",Pi="Softplus",Li="Sqrt",Wl="Sum",Ul="SpaceToBatchND",Gl="SplitV",Hl="Softmax",nm="SparseFillEmptyRows",sm="SparseReshape",rm="SparseSegmentMean",om="SparseSegmentSum",im="SparseToDense",Mi="SquaredDifference",Ih="Square",Sh="StaticRegexReplace",Nh="StridedSlice",am="StringNGrams",lm="StringSplit",cm="StringToHashBucketFast",zi="Sub",Bi="Tan",Vi="Tanh",Wi="Tile",Th="TopK",Eh="Transform",ho="Transpose",Rh="Unique",jl="Unpack",Kl="UnsortedSegmentSum",ql="ZerosLike",Ui="Step",cC="FromPixels",Dh="RotateWithOffset",Xl="_FusedMatMul",Yl="FusedConv2D",um="FusedDepthwiseConv2D";function Rn(...n){J().getBool("IS_TEST")||J().getBool("PROD")||console.warn(...n)}const Zl=Wu("kernelRegistry",()=>new Map),Ah=Wu("gradRegistry",()=>new Map);function hm(n,e){const t=mm(n,e);return Zl.get(t)}function dm(n){return Ah.get(n)}function pm(n){const e=Zl.entries(),t=[];for(;;){const{done:s,value:r}=e.next();if(s)break;const[o,i]=r,[a]=o.split("_");a===n&&t.push(i)}return t}function fm(n){const{kernelName:e,backendName:t}=n,s=mm(e,t);Zl.has(s)&&Rn(`The kernel '${e}' for backend '${t}' is already registered`),Zl.set(s,n)}function uC(n){const{kernelName:e}=n;Ah.has(e)&&J().getBool("DEBUG")&&Rn(`Overriding the gradient for '${e}'`),Ah.set(e,n)}function mm(n,e){return`${e}_${n}`}function gm(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray}function hC(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function dC(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var e=n.default;if(typeof e=="function"){var t=function s(){var r=!1;try{r=this instanceof s}catch{}return r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(s){var r=Object.getOwnPropertyDescriptor(n,s);Object.defineProperty(t,s,r.get?r:{enumerable:!0,get:function(){return n[s]}})}),t}var _h,xm;function pC(){if(xm)return _h;xm=1,_h=e;var n=null;try{n=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function e(D,S,z){this.low=D|0,this.high=S|0,this.unsigned=!!z}e.prototype.__isLong__,Object.defineProperty(e.prototype,"__isLong__",{value:!0});function t(D){return(D&&D.__isLong__)===!0}e.isLong=t;var s={},r={};function o(D,S){var z,U,G;return S?(D>>>=0,(G=0<=D&&D<256)&&(U=r[D],U)?U:(z=a(D,(D|0)<0?-1:0,!0),G&&(r[D]=z),z)):(D|=0,(G=-128<=D&&D<128)&&(U=s[D],U)?U:(z=a(D,D<0?-1:0,!1),G&&(s[D]=z),z))}e.fromInt=o;function i(D,S){if(isNaN(D))return S?w:y;if(S){if(D<0)return w;if(D>=g)return F}else{if(D<=-x)return O;if(D+1>=x)return E}return D<0?i(-D,S).neg():a(D%f|0,D/f|0,S)}e.fromNumber=i;function a(D,S,z){return new e(D,S,z)}e.fromBits=a;var l=Math.pow;function c(D,S,z){if(D.length===0)throw Error("empty string");if(D==="NaN"||D==="Infinity"||D==="+Infinity"||D==="-Infinity")return y;if(typeof S=="number"?(z=S,S=!1):S=!!S,z=z||10,z<2||36<z)throw RangeError("radix");var U;if((U=D.indexOf("-"))>0)throw Error("interior hyphen");if(U===0)return c(D.substring(1),S,z).neg();for(var G=i(l(z,8)),K=y,X=0;X<D.length;X+=8){var Q=Math.min(8,D.length-X),Z=parseInt(D.substring(X,X+Q),z);if(Q<8){var te=i(l(z,Q));K=K.mul(te).add(i(Z))}else K=K.mul(G),K=K.add(i(Z))}return K.unsigned=S,K}e.fromString=c;function u(D,S){return typeof D=="number"?i(D,S):typeof D=="string"?c(D,S):a(D.low,D.high,typeof S=="boolean"?S:D.unsigned)}e.fromValue=u;var h=65536,d=1<<24,f=h*h,g=f*f,x=g/2,b=o(d),y=o(0);e.ZERO=y;var w=o(0,!0);e.UZERO=w;var $=o(1);e.ONE=$;var C=o(1,!0);e.UONE=C;var N=o(-1);e.NEG_ONE=N;var E=a(-1,2147483647,!1);e.MAX_VALUE=E;var F=a(-1,-1,!0);e.MAX_UNSIGNED_VALUE=F;var O=a(0,-2147483648,!1);e.MIN_VALUE=O;var A=e.prototype;return A.toInt=function(){return this.unsigned?this.low>>>0:this.low},A.toNumber=function(){return this.unsigned?(this.high>>>0)*f+(this.low>>>0):this.high*f+(this.low>>>0)},A.toString=function(S){if(S=S||10,S<2||36<S)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(O)){var z=i(S),U=this.div(z),G=U.mul(z).sub(this);return U.toString(S)+G.toInt().toString(S)}else return"-"+this.neg().toString(S);for(var K=i(l(S,6),this.unsigned),X=this,Q="";;){var Z=X.div(K),te=X.sub(Z.mul(K)).toInt()>>>0,re=te.toString(S);if(X=Z,X.isZero())return re+Q;for(;re.length<6;)re="0"+re;Q=""+re+Q}},A.getHighBits=function(){return this.high},A.getHighBitsUnsigned=function(){return this.high>>>0},A.getLowBits=function(){return this.low},A.getLowBitsUnsigned=function(){return this.low>>>0},A.getNumBitsAbs=function(){if(this.isNegative())return this.eq(O)?64:this.neg().getNumBitsAbs();for(var S=this.high!=0?this.high:this.low,z=31;z>0&&(S&1<<z)==0;z--);return this.high!=0?z+33:z+1},A.isZero=function(){return this.high===0&&this.low===0},A.eqz=A.isZero,A.isNegative=function(){return!this.unsigned&&this.high<0},A.isPositive=function(){return this.unsigned||this.high>=0},A.isOdd=function(){return(this.low&1)===1},A.isEven=function(){return(this.low&1)===0},A.equals=function(S){return t(S)||(S=u(S)),this.unsigned!==S.unsigned&&this.high>>>31===1&&S.high>>>31===1?!1:this.high===S.high&&this.low===S.low},A.eq=A.equals,A.notEquals=function(S){return!this.eq(S)},A.neq=A.notEquals,A.ne=A.notEquals,A.lessThan=function(S){return this.comp(S)<0},A.lt=A.lessThan,A.lessThanOrEqual=function(S){return this.comp(S)<=0},A.lte=A.lessThanOrEqual,A.le=A.lessThanOrEqual,A.greaterThan=function(S){return this.comp(S)>0},A.gt=A.greaterThan,A.greaterThanOrEqual=function(S){return this.comp(S)>=0},A.gte=A.greaterThanOrEqual,A.ge=A.greaterThanOrEqual,A.compare=function(S){if(t(S)||(S=u(S)),this.eq(S))return 0;var z=this.isNegative(),U=S.isNegative();return z&&!U?-1:!z&&U?1:this.unsigned?S.high>>>0>this.high>>>0||S.high===this.high&&S.low>>>0>this.low>>>0?-1:1:this.sub(S).isNegative()?-1:1},A.comp=A.compare,A.negate=function(){return!this.unsigned&&this.eq(O)?O:this.not().add($)},A.neg=A.negate,A.add=function(S){t(S)||(S=u(S));var z=this.high>>>16,U=this.high&65535,G=this.low>>>16,K=this.low&65535,X=S.high>>>16,Q=S.high&65535,Z=S.low>>>16,te=S.low&65535,re=0,se=0,ae=0,le=0;return le+=K+te,ae+=le>>>16,le&=65535,ae+=G+Z,se+=ae>>>16,ae&=65535,se+=U+Q,re+=se>>>16,se&=65535,re+=z+X,re&=65535,a(ae<<16|le,re<<16|se,this.unsigned)},A.subtract=function(S){return t(S)||(S=u(S)),this.add(S.neg())},A.sub=A.subtract,A.multiply=function(S){if(this.isZero())return y;if(t(S)||(S=u(S)),n){var z=n.mul(this.low,this.high,S.low,S.high);return a(z,n.get_high(),this.unsigned)}if(S.isZero())return y;if(this.eq(O))return S.isOdd()?O:y;if(S.eq(O))return this.isOdd()?O:y;if(this.isNegative())return S.isNegative()?this.neg().mul(S.neg()):this.neg().mul(S).neg();if(S.isNegative())return this.mul(S.neg()).neg();if(this.lt(b)&&S.lt(b))return i(this.toNumber()*S.toNumber(),this.unsigned);var U=this.high>>>16,G=this.high&65535,K=this.low>>>16,X=this.low&65535,Q=S.high>>>16,Z=S.high&65535,te=S.low>>>16,re=S.low&65535,se=0,ae=0,le=0,fe=0;return fe+=X*re,le+=fe>>>16,fe&=65535,le+=K*re,ae+=le>>>16,le&=65535,le+=X*te,ae+=le>>>16,le&=65535,ae+=G*re,se+=ae>>>16,ae&=65535,ae+=K*te,se+=ae>>>16,ae&=65535,ae+=X*Z,se+=ae>>>16,ae&=65535,se+=U*re+G*te+K*Z+X*Q,se&=65535,a(le<<16|fe,se<<16|ae,this.unsigned)},A.mul=A.multiply,A.divide=function(S){if(t(S)||(S=u(S)),S.isZero())throw Error("division by zero");if(n){if(!this.unsigned&&this.high===-2147483648&&S.low===-1&&S.high===-1)return this;var z=(this.unsigned?n.div_u:n.div_s)(this.low,this.high,S.low,S.high);return a(z,n.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?w:y;var U,G,K;if(this.unsigned){if(S.unsigned||(S=S.toUnsigned()),S.gt(this))return w;if(S.gt(this.shru(1)))return C;K=w}else{if(this.eq(O)){if(S.eq($)||S.eq(N))return O;if(S.eq(O))return $;var X=this.shr(1);return U=X.div(S).shl(1),U.eq(y)?S.isNegative()?$:N:(G=this.sub(S.mul(U)),K=U.add(G.div(S)),K)}else if(S.eq(O))return this.unsigned?w:y;if(this.isNegative())return S.isNegative()?this.neg().div(S.neg()):this.neg().div(S).neg();if(S.isNegative())return this.div(S.neg()).neg();K=y}for(G=this;G.gte(S);){U=Math.max(1,Math.floor(G.toNumber()/S.toNumber()));for(var Q=Math.ceil(Math.log(U)/Math.LN2),Z=Q<=48?1:l(2,Q-48),te=i(U),re=te.mul(S);re.isNegative()||re.gt(G);)U-=Z,te=i(U,this.unsigned),re=te.mul(S);te.isZero()&&(te=$),K=K.add(te),G=G.sub(re)}return K},A.div=A.divide,A.modulo=function(S){if(t(S)||(S=u(S)),n){var z=(this.unsigned?n.rem_u:n.rem_s)(this.low,this.high,S.low,S.high);return a(z,n.get_high(),this.unsigned)}return this.sub(this.div(S).mul(S))},A.mod=A.modulo,A.rem=A.modulo,A.not=function(){return a(~this.low,~this.high,this.unsigned)},A.and=function(S){return t(S)||(S=u(S)),a(this.low&S.low,this.high&S.high,this.unsigned)},A.or=function(S){return t(S)||(S=u(S)),a(this.low|S.low,this.high|S.high,this.unsigned)},A.xor=function(S){return t(S)||(S=u(S)),a(this.low^S.low,this.high^S.high,this.unsigned)},A.shiftLeft=function(S){return t(S)&&(S=S.toInt()),(S&=63)===0?this:S<32?a(this.low<<S,this.high<<S|this.low>>>32-S,this.unsigned):a(0,this.low<<S-32,this.unsigned)},A.shl=A.shiftLeft,A.shiftRight=function(S){return t(S)&&(S=S.toInt()),(S&=63)===0?this:S<32?a(this.low>>>S|this.high<<32-S,this.high>>S,this.unsigned):a(this.high>>S-32,this.high>=0?0:-1,this.unsigned)},A.shr=A.shiftRight,A.shiftRightUnsigned=function(S){if(t(S)&&(S=S.toInt()),S&=63,S===0)return this;var z=this.high;if(S<32){var U=this.low;return a(U>>>S|z<<32-S,z>>>S,this.unsigned)}else return S===32?a(z,0,this.unsigned):a(z>>>S-32,0,this.unsigned)},A.shru=A.shiftRightUnsigned,A.shr_u=A.shiftRightUnsigned,A.toSigned=function(){return this.unsigned?a(this.low,this.high,!1):this},A.toUnsigned=function(){return this.unsigned?this:a(this.low,this.high,!0)},A.toBytes=function(S){return S?this.toBytesLE():this.toBytesBE()},A.toBytesLE=function(){var S=this.high,z=this.low;return[z&255,z>>>8&255,z>>>16&255,z>>>24,S&255,S>>>8&255,S>>>16&255,S>>>24]},A.toBytesBE=function(){var S=this.high,z=this.low;return[S>>>24,S>>>16&255,S>>>8&255,S&255,z>>>24,z>>>16&255,z>>>8&255,z&255]},e.fromBytes=function(S,z,U){return U?e.fromBytesLE(S,z):e.fromBytesBE(S,z)},e.fromBytesLE=function(S,z){return new e(S[0]|S[1]<<8|S[2]<<16|S[3]<<24,S[4]|S[5]<<8|S[6]<<16|S[7]<<24,z)},e.fromBytesBE=function(S,z){return new e(S[4]<<24|S[5]<<16|S[6]<<8|S[7],S[0]<<24|S[1]<<16|S[2]<<8|S[3],z)},_h}var bm=pC(),ym=hC(bm),fC=Wv({__proto__:null,default:ym},[bm]);const gr=ym||fC;function Jl(n){return gr.fromString(n,!0,16)}const wm=Jl("c3a5c85c97cb3127"),xr=Jl("b492b66fbe98f273"),sn=Jl("9ae16a3b2f90404f");function Fh(n){return n.xor(n.shru(47))}function vm(n,e,t){const s=n.slice(e,e+t);return gr.fromBytes(Array.from(s),!0,!0)}function ht(n,e){return vm(n,e,8)}function Cm(n,e){return vm(n,e,4)}function Wt(n,e){return e===0?n:n.shru(e).or(n.shl(64-e))}function Gs(n,e,t=Jl("9ddfea08eb382d69")){let s=n.xor(e).mul(t);s=s.xor(s.shru(47));let r=e.xor(s).mul(t);return r=r.xor(r.shru(47)),r=r.mul(t),r}function mC(n,e,t,s,r,o){r=r.add(n),o=Wt(o.add(r).add(s),21);const i=r;return r=r.add(e),r=r.add(t),o=o.add(Wt(r,44)),[r.add(s),o.add(i)]}function Ql(n,e,t,s){return mC(ht(n,e),ht(n,e+8),ht(n,e+16),ht(n,e+24),t,s)}function gC(n,e=n.length){if(e>=8){const t=sn.add(e*2),s=ht(n,0).add(sn),r=ht(n,e-8),o=Wt(r,37).mul(t).add(s),i=Wt(s,25).add(r).mul(t);return Gs(o,i,t)}if(e>=4){const t=sn.add(e*2),s=Cm(n,0);return Gs(s.shl(3).add(e),Cm(n,e-4),t)}if(e>0){const t=n[0],s=n[e>>1],r=n[e-1],o=t+(s<<8),i=e+(r<<2);return Fh(sn.mul(o).xor(wm.mul(i))).mul(sn)}return sn}function xC(n,e=n.length){const t=sn.add(e*2),s=ht(n,0).mul(xr),r=ht(n,8),o=ht(n,e-8).mul(t),i=ht(n,e-16).mul(sn);return Gs(Wt(s.add(r),43).add(Wt(o,30)).add(i),s.add(Wt(r.add(sn),18)).add(o),t)}function bC(n,e=n.length){const t=sn.add(e*2),s=ht(n,0).mul(sn),r=ht(n,8),o=ht(n,e-8).mul(t),i=ht(n,e-16).mul(sn),a=Wt(s.add(r),43).add(Wt(o,30)).add(i),l=Gs(a,s.add(Wt(r.add(sn),18)).add(o),t),c=ht(n,16).mul(t),u=ht(n,24),h=a.add(ht(n,e-32)).mul(t),d=l.add(ht(n,e-24)).mul(t);return Gs(Wt(c.add(u),43).add(Wt(h,30)).add(d),c.add(Wt(u.add(s),18)).add(h),t)}function yC(n,e=n.length){const t=gr.fromNumber(81,!0);if(e<=32)return e<=16?gC(n,e):xC(n,e);if(e<=64)return bC(n,e);let s=t,r=t.mul(xr).add(113),o=Fh(r.mul(sn).add(113)).mul(sn),i=[gr.UZERO,gr.UZERO],a=[gr.UZERO,gr.UZERO];s=s.mul(sn).add(ht(n,0));let l=0;const c=(e-1>>6)*64,u=c+(e-1&63)-63;do s=Wt(s.add(r).add(i[0]).add(ht(n,l+8)),37).mul(xr),r=Wt(r.add(i[1]).add(ht(n,l+48)),42).mul(xr),s=s.xor(a[1]),r=r.add(i[0]).add(ht(n,l+40)),o=Wt(o.add(a[0]),33).mul(xr),i=Ql(n,l,i[1].mul(xr),s.add(a[0])),a=Ql(n,l+32,o.add(a[1]),r.add(ht(n,l+16))),[o,s]=[s,o],l+=64;while(l!==c);const h=xr.add(o.and(255).shl(1));return l=u,a[0]=a[0].add(e-1&63),i[0]=i[0].add(a[0]),a[0]=a[0].add(i[0]),s=Wt(s.add(r).add(i[0]).add(ht(n,l+8)),37).mul(h),r=Wt(r.add(i[1]).add(ht(n,l+48)),42).mul(h),s=s.xor(a[1].mul(9)),r=r.add(i[0].mul(9).add(ht(n,l+40))),o=Wt(o.add(a[0]),33).mul(h),i=Ql(n,l,i[1].mul(h),s.add(a[0])),a=Ql(n,l+32,o.add(a[1]),r.add(ht(n,l+16))),[o,s]=[s,o],Gs(Gs(i[0],a[0],h).add(Fh(r).mul(wm)).add(o),Gs(i[1],a[1],h).add(s),h)}function Hs(n,e){return e==="string"?js(n):br([n],e)}function wC(n,e){return n instanceof Float32Array&&e==="float32"||n instanceof Int32Array&&e==="int32"||n instanceof Uint8Array&&e==="bool"}function br(n,e){if(e==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=yr(n)),J().getBool("DEBUG")&&Xv(n,e),wC(n,e))return n;if(e==null||e==="float32"||e==="complex64")return new Float32Array(n);if(e==="int32")return new Int32Array(n);if(e==="bool"){const t=new Uint8Array(n.length);for(let s=0;s<t.length;++s)Math.round(n[s])!==0&&(t[s]=1);return t}else throw new Error(`Unknown data type ${e}`)}function pn(){return J().platform.now()}function js(n,e="utf-8"){return e=e||"utf-8",J().platform.encode(n,e)}function Ks(n,e="utf-8"){return e=e||"utf-8",J().platform.decode(n,e)}function Pn(n){return J().platform.isTypedArray!=null?J().platform.isTypedArray(n):gm(n)}function yr(n,e=[],t=!1){if(e==null&&(e=[]),typeof n=="boolean"||typeof n=="number"||typeof n=="string"||Bu(n)||n==null||Pn(n)&&t)e.push(n);else if(Array.isArray(n)||Pn(n))for(let s=0;s<n.length;++s)yr(n[s],e,t);else{let s=-1;for(const r of Object.keys(n))/^([1-9]+[0-9]*|0)$/.test(r)&&(s=Math.max(s,Number(r)));for(let r=0;r<=s;r++)yr(n[r],e,t)}return e}class vC{constructor(e,t){this.backendTimer=e,this.logger=t,t==null&&(this.logger=new kC)}profileKernel(e,t,s){let r;const o=()=>{r=s()};let i;const a=pn();if(this.backendTimer.timerAvailable())i=this.backendTimer.time(o);else{o();for(const c of r)c.dataSync();i=Promise.resolve({kernelMs:pn()-a})}if(J().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let c=0;c<r.length;c++){const u=r[c];u.data().then(h=>{CC(h,u.dtype,e)})}return{kernelName:e,outputs:r,inputs:t,timeMs:i.then(c=>c.kernelMs),extraInfo:i.then(c=>c.getExtraProfileInfo!=null?c.getExtraProfileInfo():"")}}logKernelProfile(e){const{kernelName:t,outputs:s,timeMs:r,inputs:o,extraInfo:i}=e;s.forEach(a=>{Promise.all([a.data(),r,i]).then(l=>{this.logger.logKernelProfile(t,a,l[0],l[1],o,l[2])})})}}function CC(n,e,t){if(e!=="float32")return!1;for(let s=0;s<n.length;s++){const r=n[s];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${t}'`),!0}return!1}class kC{logKernelProfile(e,t,s,r,o,i){const a=typeof r=="number"?ao(`${r}ms`,9):r.error,l=ao(e,25),c=t.rank,u=t.size,h=ao(t.shape.toString(),14);let d="";for(const f in o){const g=o[f];if(g!=null){const x=g.shape||t.shape,b=x.length;d+=`${f}: ${b}D ${b>0?x:""} `}}console.log(`%c${l}	%c${a}	%c${c}D ${h}	%c${u}	%c${d}	%c${i}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}function $C(n,e,t){const s={},r={};for(let l=0;l<e.length;l++)s[e[l].id]=!0;for(let l=0;l<n.length;l++){const c=n[l],u=c.inputs;for(const h in u){const d=u[h];let f=!1;for(let g=0;g<e.length;g++)if(s[d.id]){c.outputs.forEach(x=>s[x.id]=!0),f=!0,r[c.id]=!0;break}if(f)break}}const o={};o[t.id]=!0;const i={};for(let l=n.length-1;l>=0;l--){const c=n[l],u=c.inputs;for(let h=0;h<c.outputs.length;h++)if(o[c.outputs[h].id]){for(const d in u)o[u[d].id]=!0,i[c.id]=!0;break}}const a=[];for(let l=0;l<n.length;l++){const c=n[l];if(r[c.id]&&i[c.id]){const u={};for(const d in c.inputs){const f=c.inputs[d];s[f.id]&&(u[d]=f)}const h=Object.assign({},c);h.inputs=u,h.outputs=c.outputs,a.push(h)}}return a}function IC(n,e,t,s){for(let r=e.length-1;r>=0;r--){const o=e[r],i=[];if(o.outputs.forEach(l=>{const c=n[l.id];c!=null?i.push(c):i.push(null)}),o.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${o.kernelName}.`);const a=o.gradient(i);for(const l in o.inputs){if(!(l in a))throw new Error(`Cannot backprop through input ${l}. Available gradients found: ${Object.keys(a)}.`);const c=t(()=>a[l]());if(c.dtype!=="float32")throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input ${l} must have 'float32' dtype, but has '${c.dtype}'`);const u=o.inputs[l];if(!Je(c.shape,u.shape))throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input '${l}' has shape '${c.shape}', which does not match the shape of the input '${u.shape}'`);if(n[u.id]==null)n[u.id]=c;else{const h=n[u.id];n[u.id]=s(h,c),h.dispose()}}}}const km=20,Gi=3,Oh=7;function SC(n,e,t,s){const r=Ie(e),o=NC(n,e,t,r),i=e.length,a=ec(n,e,t,r,o),l=["Tensor"];return s&&(l.push(`  dtype: ${t}`),l.push(`  rank: ${i}`),l.push(`  shape: [${e}]`),l.push("  values:")),l.push(a.map(c=>"    "+c).join(`
`)),l.join(`
`)}function NC(n,e,t,s){const r=ne(e),o=s[s.length-1],i=new Array(o).fill(0),a=e.length,l=t==="complex64"?ji(n):n;if(a>1)for(let c=0;c<r/o;c++){const u=c*o;for(let h=0;h<o;h++)i[h]=Math.max(i[h],Hi(l[u+h],0,t).length)}return i}function Hi(n,e,t){let s;return Array.isArray(n)?s=`${parseFloat(n[0].toFixed(Oh))} + ${parseFloat(n[1].toFixed(Oh))}j`:qo(n)?s=`'${n}'`:t==="bool"?s=$m(n):s=parseFloat(n.toFixed(Oh)).toString(),ao(s,e)}function $m(n){return n===0?"false":"true"}function ec(n,e,t,s,r,o=!0){const i=t==="complex64"?2:1,a=e[0],l=e.length;if(l===0){if(t==="complex64"){const x=ji(n);return[Hi(x[0],0,t)]}return t==="bool"?[$m(n[0])]:[n[0].toString()]}if(l===1){if(a>km){const b=Gi*i;let y=Array.from(n.slice(0,b)),w=Array.from(n.slice((a-Gi)*i,a*i));return t==="complex64"&&(y=ji(y),w=ji(w)),["["+y.map(($,C)=>Hi($,r[C],t)).join(", ")+", ..., "+w.map(($,C)=>Hi($,r[a-Gi+C],t)).join(", ")+"]"]}return["["+(t==="complex64"?ji(n):Array.from(n)).map((b,y)=>Hi(b,r[y],t)).join(", ")+"]"]}const c=e.slice(1),u=s.slice(1),h=s[0]*i,d=[];if(a>km){for(let x=0;x<Gi;x++){const b=x*h,y=b+h;d.push(...ec(n.slice(b,y),c,t,u,r,!1))}d.push("...");for(let x=a-Gi;x<a;x++){const b=x*h,y=b+h;d.push(...ec(n.slice(b,y),c,t,u,r,x===a-1))}}else for(let x=0;x<a;x++){const b=x*h,y=b+h;d.push(...ec(n.slice(b,y),c,t,u,r,x===a-1))}const f=l===2?",":"";d[0]="["+(a>0?d[0]+f:"");for(let x=1;x<d.length-1;x++)d[x]=" "+d[x]+f;let g=`,
`;for(let x=2;x<l;x++)g+=`
`;return d[d.length-1]=" "+d[d.length-1]+"]"+(o?"":g),d}function ji(n){const e=[];for(let t=0;t<n.length;t+=2)e.push([n[t],n[t+1]]);return e}class jt{constructor(e,t,s){if(this.dtype=t,this.shape=e.slice(),this.size=ne(e),s!=null){const r=s.length;_(r===this.size,()=>`Length of values '${r}' does not match the size inferred by the shape '${this.size}'.`)}if(t==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=s||It(t,this.size),this.strides=Ie(e)}set(e,...t){t.length===0&&(t=[0]),_(t.length===this.rank,()=>`The number of provided coordinates (${t.length}) must match the rank (${this.rank})`);const s=this.locToIndex(t);this.values[s]=e}get(...e){e.length===0&&(e=[0]);let t=0;for(const r of e){if(r<0||r>=this.shape[t]){const o=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw new Error(o)}t++}let s=e[e.length-1];for(let r=0;r<e.length-1;++r)s+=this.strides[r]*e[r];return this.values[s]}locToIndex(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];let t=e[e.length-1];for(let s=0;s<e.length-1;++s)t+=this.strides[s]*e[s];return t}indexToLoc(e){if(this.rank===0)return[];if(this.rank===1)return[e];const t=new Array(this.shape.length);for(let s=0;s<t.length-1;++s)t[s]=Math.floor(e/this.strides[s]),e-=t[s]*this.strides[s];return t[t.length-1]=e,t}get rank(){return this.shape.length}toTensor(){return qn().makeTensor(this.values,this.shape,this.dtype)}}let qn=null,po=null;function TC(n){qn=n}function EC(n){po=n}class Ft{constructor(e,t,s,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||"float32",this.size=ne(e),this.strides=Ie(e),this.dataId=s,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const e=await this.data();return po.buffer(this.shape,this.dtype,e)}bufferSync(){return po.buffer(this.shape,this.dtype,this.dataSync())}async array(){const e=await this.data();return Kn(this.shape,e,this.dtype==="complex64")}arraySync(){return Kn(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const e=qn().read(this.dataId);if(this.dtype==="string"){const t=await e;try{return t.map(s=>Ks(s))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e}dataToGPU(e){return this.throwIfDisposed(),qn().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();const e=qn().readSync(this.dataId);if(this.dtype==="string")try{return e.map(t=>Ks(t))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}async bytes(){this.throwIfDisposed();const e=await qn().read(this.dataId);return this.dtype==="string"?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),qn().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(e=!1){return po.print(this,e)}clone(){return this.throwIfDisposed(),po.clone(this)}toString(e=!1){const t=this.dataSync();return SC(t,this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),po.cast(this,e)}variable(e=!0,t,s){return this.throwIfDisposed(),qn().makeVariable(this,e,t,s)}}Object.defineProperty(Ft,Symbol.hasInstance,{value:n=>!!n&&n.data!=null&&n.dataSync!=null&&n.throwIfDisposed!=null});function ee(){return Wu("Tensor",()=>Ft)}ee();class tc extends Ft{constructor(e,t,s,r){super(e.shape,e.dtype,e.dataId,r),this.trainable=t,this.name=s}assign(e){if(e.dtype!==this.dtype)throw new Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!Je(e.shape,this.shape))throw new Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);qn().disposeTensor(this),this.dataId=e.dataId,qn().incRef(this,null)}dispose(){qn().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(tc,Symbol.hasInstance,{value:n=>n instanceof Ft&&n.assign!=null&&n.assign instanceof Function});var Im;(function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"})(Im||(Im={}));var Ph;(function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"})(Ph||(Ph={}));var Lh;(function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"})(Lh||(Lh={}));var Mh;(function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"})(Mh||(Mh={}));var zh;(function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"})(zh||(zh={}));const RC={float32:Mh,int32:Ph,bool:Lh,complex64:zh};function Cn(n,e){if(n==="string"||e==="string"){if(n==="string"&&e==="string")return"string";throw new Error(`Can not upcast ${n} with ${e}`)}return RC[n][e]}function Bh(n){return Cn(n,"int32")}function Sm(n){return n!=null&&typeof n=="object"&&"texture"in n&&n.texture instanceof WebGLTexture}function Nm(n){return typeof GPUBuffer<"u"&&n!=null&&typeof n=="object"&&"buffer"in n&&n.buffer instanceof GPUBuffer}function St(n,e){if(n.dtype===e.dtype)return[n,e];const t=Cn(n.dtype,e.dtype);return[n.cast(t),e.cast(t)]}function Tm(n){const e=[];return Em(n,e,new Set),e}function Em(n,e,t){if(n==null)return;if(n instanceof Ft){e.push(n);return}if(!DC(n))return;const s=n;for(const r in s){const o=s[r];t.has(o)||(t.add(o),Em(o,e,t))}}function DC(n){return Array.isArray(n)||typeof n=="object"}function Vh(n){return n.kernelName!=null}class Rm{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(const e in this.registeredVariables)this.registeredVariables[e].dispose()}}class fo{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Rm}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const e=this.getSortedBackends();for(let t=0;t<e.length;t++){const s=e[t];if(await this.initializeBackend(s).success){await this.setBackend(s);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:e,asyncInit:t}=this.initializeBackendsAndReturnBest();if(t)throw new Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry))if(e in this.registryFactory){const{asyncInit:t}=this.initializeBackend(e);if(t)return null}else return null;return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,t,s=1){return e in this.registryFactory?(Rn(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:t,priority:s},!0)}async setBackend(e){if(this.registryFactory[e]==null)throw new Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,this.registry[e]==null){this.backendInstance=null;const{success:t,asyncInit:s}=this.initializeBackend(e);if(!(s?await t:t))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new vC(this.backendInstance),!0}setupRegisteredKernels(){pm(this.backendName).forEach(t=>{t.setupFunc!=null&&t.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){pm(e).forEach(s=>{s.disposeFunc!=null&&s.disposeFunc(this.registry[e])})}initializeBackend(e){const t=this.registryFactory[e];if(t==null)throw new Error(`Cannot initialize backend ${e}, no registration found.`);try{const s=t.factory();if(s&&!(s instanceof Du)&&typeof s.then=="function"){const r=++this.pendingBackendInitId,o=s.then(i=>r<this.pendingBackendInitId?!1:(this.registry[e]=i,this.pendingBackendInit=null,!0)).catch(i=>(r<this.pendingBackendInitId||(this.pendingBackendInit=null,Rn(`Initialization of backend ${e} failed`),Rn(i.stack||i.message)),!1));return this.pendingBackendInit=o,{success:o,asyncInit:!0}}else return this.registry[e]=s,{success:!0,asyncInit:!1}}catch(s){return Rn(`Initialization of backend ${e} failed`),Rn(s.stack||s.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw new Error(`${e} backend not found in registry`);this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((e,t)=>this.registryFactory[t].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){const e=this.getSortedBackends();for(let t=0;t<e.length;t++){const s=e[t],{success:r,asyncInit:o}=this.initializeBackend(s);if(o||r)return{name:s,asyncInit:o}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,t){const s=this.state.tensorInfo.get(t),r=s.backend,o=this.readSync(t),i=r.refCount(t);r.disposeData(t,!0),s.backend=e,e.move(t,o,s.shape,s.dtype,i),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,t){let s=null;if(t==null){if(typeof e!="function")throw new Error("Please provide a function to tidy()");t=e}else{if(typeof e!="string"&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof t!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");s=e}let r;return this.scopedRun(()=>this.startScope(s),()=>this.endScope(r),()=>(r=t(),r instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r))}scopedRun(e,t,s){e();try{const r=s();return t(),r}catch(r){throw t(),r}}nextTensorId(){return fo.nextTensorId++}nextVariableId(){return fo.nextVariableId++}clone(e){const t=W.runKernel(mi,{x:e}),s={x:e},r=i=>({x:()=>{const a="float32",l={x:i},c={dtype:a};return W.runKernel(ni,l,c)}}),o=[];return this.addTapeNode(this.state.activeScope.name,s,[t],r,o,{}),t}runKernel(e,t,s){if(this.backendName==null&&this.backend,!(hm(e,this.backendName)!=null))throw new Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:t,attrs:s})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,t,s){const r=this.backend.numDataIds();let o=0;s.forEach(l=>{o+=l.dtype==="complex64"?3:1});const i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],a=r-t-o-i;if(a>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${a} data ids) after running '${e}'`)}runKernelFunc(e){let t,s=[];const r=this.isTapeOn(),o=this.state.numBytes,i=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let a;this.backendName==null&&this.backend;let l;const c=Vh(e)?e.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Vh(e)){const{kernelName:g,inputs:x,attrs:b}=e;this.backendName==null&&this.backend;const y=hm(g,this.backendName);_(y!=null,()=>`Cannot find registered kernel '${g}' for backend '${this.backendName}'`),a=()=>{const w=this.backend.numDataIds();l=y.kernelFunc({inputs:x,attrs:b,backend:this.backend});const $=Array.isArray(l)?l:[l];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(g,w,$);const C=$.map(N=>N.rank!=null?N:this.makeTensorFromTensorInfo(N));if(r){const N=this.getTensorsForGradient(g,x,C);s=this.saveTensorsForBackwardMode(N)}return C}}else{const{forwardFunc:g}=e,x=b=>{r&&(s=b.map(y=>this.keep(this.clone(y))))};a=()=>{const b=this.backend.numDataIds();l=this.tidy(()=>g(this.backend,x));const y=Array.isArray(l)?l:[l];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,b,y),y}}const{inputs:u,attrs:h}=e,d=Vh(e)?null:e.backwardsFunc;let f;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?t=a():(f=this.profiler.profileKernel(c,u,()=>a()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(f),t=f.outputs)}),r&&this.addTapeNode(c,u,t,d,s,h),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-o,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-i,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(u).map(g=>u[g]!=null?u[g].shape:null),outputShapes:t.map(g=>g.shape),kernelTimeMs:f.timeMs,extraInfo:f.extraInfo}),Array.isArray(l)?t:t[0]}saveTensorsForBackwardMode(e){return e.map(s=>this.keep(this.clone(s)))}getTensorsForGradient(e,t,s){const r=dm(e);if(r!=null){const o=r.inputsToSave||[],i=r.outputsToSave||[];let a;r.saveAllInputs?(_(Array.isArray(t),()=>"saveAllInputs is true, expected inputs to be an array."),a=Object.keys(t).map(c=>t[c])):a=o.map(c=>t[c]);const l=s.filter((c,u)=>i[u]);return a.concat(l)}return[]}makeTensor(e,t,s,r){if(e==null)throw new Error("Values passed to engine.makeTensor() are null");s=s||"float32",r=r||this.backend;let o=e;s==="string"&&qo(e[0])&&(o=e.map(l=>js(l)));const i=r.write(o,t,s),a=new Ft(t,s,i,this.nextTensorId());if(this.trackTensor(a,r),s==="string"){const l=this.state.tensorInfo.get(i),c=Zv(o);this.state.numBytes+=c-l.bytes,l.bytes=c}return a}makeTensorFromDataId(e,t,s,r){s=s||"float32";const o={dataId:e,shape:t,dtype:s};return this.makeTensorFromTensorInfo(o,r)}makeTensorFromTensorInfo(e,t){const{dataId:s,shape:r,dtype:o}=e,i=new Ft(r,o,s,this.nextTensorId());return this.trackTensor(i,t),i}makeVariable(e,t=!0,s,r){s=s||this.nextVariableId().toString(),r!=null&&r!==e.dtype&&(e=e.cast(r));const o=new tc(e,t,s,this.nextTensorId());if(this.state.registeredVariables[o.name]!=null)throw new Error(`Variable with name ${o.name} was already registered`);return this.state.registeredVariables[o.name]=o,this.incRef(o,this.backend),o}trackTensor(e,t){this.state.numTensors++,e.dtype==="string"&&this.state.numStringTensors++;let s=0;e.dtype!=="complex64"&&e.dtype!=="string"&&(s=e.size*qa(e.dtype)),this.state.numBytes+=s,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:s})),e instanceof tc||this.track(e)}incRef(e,t){this.trackTensor(e,t),this.backend.incRef(e.dataId)}removeDataId(e,t){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===t&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;const t=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,e.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=t.bytes),e.dtype!=="complex64"&&e.dtype!=="string"){const s=e.size*qa(e.dtype);this.state.numBytes-=s}t.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,t.backend)}disposeVariables(){for(const e in this.state.registeredVariables){const t=this.state.registeredVariables[e];this.disposeVariable(t)}}disposeVariable(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]}memory(){const e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,e.reasons==null&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}async profile(e){this.state.profiling=!0;const t=this.state.numBytes,s=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(r=>r.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-s;for(const r of this.state.activeProfile.kernels)r.kernelTimeMs=await r.kernelTimeMs,r.extraInfo=await r.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(e,t,s,r,o,i){const a={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:s,saved:o},l=dm(e);l!=null&&(r=l.gradFunc),r!=null&&(a.gradient=c=>(c=c.map((u,h)=>{if(u==null){const d=s[h],f=Jt(d.size,d.dtype);return this.makeTensor(f,d.shape,d.dtype)}return u}),r(c.length>1?c:c[0],o,i))),this.state.activeTape.push(a)}keep(e){return e.kept=!0,e}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){const t={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t}endScope(e){const t=Tm(e),s=new Set(t.map(o=>o.id));for(let o=0;o<this.state.activeScope.track.length;o++){const i=this.state.activeScope.track[o];!i.kept&&!s.has(i.id)&&i.dispose()}const r=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach(o=>{!o.kept&&o.scopeId===r.id&&this.track(o)})}gradients(e,t,s,r=!1){if(_(t.length>0,()=>"gradients() received an empty list of xs."),s!=null&&s.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${s.dtype}'`);const o=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",e));_(o instanceof Ft,()=>"The result y returned by f() must be a tensor.");const i=$C(this.state.activeTape,t,o);if(!r&&i.length===0&&t.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const a={};a[o.id]=s??AC(o.shape),IC(a,i,c=>this.tidy(c),_C);const l=t.map(c=>a[c.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(c=>{for(const u of c.saved)u.dispose()}),this.state.activeTape=null),{value:o,grads:l}})}customGrad(e){return _(Lu(e),()=>"The f passed in customGrad(f) must be a function."),(...t)=>{_(t.every(a=>a instanceof Ft),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let s;const r={};t.forEach((a,l)=>{r[l]=a});const o=(a,l)=>(s=e(...t,l),_(s.value instanceof Ft,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),_(Lu(s.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),s.value),i=(a,l)=>{const c=s.gradFunc(a,l),u=Array.isArray(c)?c:[c];_(u.length===t.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),_(u.every(d=>d instanceof Ft),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const h={};return u.forEach((d,f)=>{h[f]=()=>d}),h};return this.runKernelFunc({forwardFunc:o,backwardsFunc:i,inputs:r})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,t){return this.state.tensorInfo.get(e).backend.readToGPU(e,t)}async time(e){const t=pn(),s=await this.backend.time(e);return s.wallMs=pn()-t,s}track(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Rm;for(const e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}fo.nextTensorId=0,fo.nextVariableId=0;function AC(n){const e=zu(ne(n),"float32");return W.makeTensor(e,n,"float32")}function Dm(){const n=Uf();if(n._tfengine==null){const e=new eC(n);n._tfengine=new fo(e)}return rC(n._tfengine.ENV),TC(()=>n._tfengine),n._tfengine}const W=Dm();function _C(n,e){const t={a:n,b:e};return W.runKernel(uo,t)}function FC(){return typeof navigator<"u"&&navigator!=null}function Am(n){if(n||FC()){if(n||(n=navigator),n.product==="ReactNative")return!0;const e=n.userAgent||n.vendor||(typeof window<"u"?window.opera:"");if(!e){const t=n;return t.userAgentData&&t.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))}return!1}function _m(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}const fn=J();fn.registerFlag("DEBUG",()=>!1,n=>{n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),fn.registerFlag("IS_BROWSER",()=>_m()),fn.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"),fn.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)),fn.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor)),fn.registerFlag("PROD",()=>!1),fn.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>fn.getBool("DEBUG")),fn.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0),fn.registerFlag("IS_TEST",()=>!1),fn.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>fn.getBool("DEBUG")),fn.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1),fn.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1),fn.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);function nc(n,e){let t=n;if(Pn(n))return e==="string"?[]:[n.length];if(Sm(n)){const r=n.channels||"RGBA";return[n.height,n.width*r.length]}else if(Nm(n))return[n.buffer.size/(e==null?4:qa(e))];if(!Array.isArray(n))return[];const s=[];for(;Array.isArray(t)||Pn(t)&&e!=="string";)s.push(t.length),t=t[0];return Array.isArray(n)&&J().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&Fm(n,s,[]),s}function Fm(n,e,t){if(t=t||[],!Array.isArray(n)&&!Pn(n)){_(e.length===0,()=>`Element arr[${t.join("][")}] is a primitive, but should be an array/TypedArray of ${e[0]} elements`);return}_(e.length>0,()=>`Element arr[${t.join("][")}] should be a primitive, but is an array of ${n.length} elements`),_(n.length===e[0],()=>`Element arr[${t.join("][")}] should have ${e[0]} elements, but has ${n.length} elements`);const s=e.slice(1);for(let r=0;r<n.length;++r)Fm(n[r],s,t.concat(r))}function Om(n,e,t,s){if(n!=="string_or_numeric"){if(n==null)throw new Error("Expected dtype cannot be null.");if(n!=="numeric"&&n!==e||n==="numeric"&&e==="string")throw new Error(`Argument '${t}' passed to '${s}' must be ${n} tensor, but got ${e} tensor`)}}function M(n,e,t,s="numeric"){if(n instanceof ee())return Om(s,n.dtype,e,t),n;let r=lo(n);if(r!=="string"&&["bool","int32","float32"].indexOf(s)>=0&&(r=s),Om(s,r,e,t),n==null||!Pn(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){const l=n==null?"null":n.constructor.name;throw new Error(`Argument '${e}' passed to '${t}' must be a Tensor or TensorLike, but got '${l}'`)}const o=nc(n,r);!Pn(n)&&!Array.isArray(n)&&(n=[n]);const a=r!=="string"?br(n,r):yr(n,[],!0);return W.makeTensor(a,o,r)}function Pm(n,e,t,s="numeric"){if(!Array.isArray(n))throw new Error(`Argument ${e} passed to ${t} must be a \`Tensor[]\` or \`TensorLike[]\``);return n.map((o,i)=>M(o,`${e}[${i}]`,t,s))}const OC="__op";function j(n){const e=Object.keys(n);if(e.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${e.length} keys.`);let t=e[0];const s=n[t];t.endsWith("_")&&(t=t.substring(0,t.length-1)),t=t+OC;const r=(...o)=>{W.startScope(t);try{const i=s(...o);return Bu(i)&&console.error("Cannot return a Promise inside of tidy."),W.endScope(i),i}catch(i){throw W.endScope(null),i}};return Object.defineProperty(r,"name",{value:t,configurable:!0}),r}function PC(n,e){const t=M(n,"real","complex"),s=M(e,"imag","complex");Fu(t.shape,s.shape,`real and imag shapes, ${t.shape} and ${s.shape}, must match in call to tf.complex().`);const r={real:t,imag:s};return W.runKernel(Yu,r)}const mo=j({complex_:PC});function sc(n,e,t,s){if(s==null)s=lo(n);else if(s==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(Nm(n)||Sm(n)){if(s!=="float32"&&s!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${s}.`);return W.backend.createTensorFromGPUData(n,e||t,s)}if(!Pn(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(e!=null){Es(e);const r=ne(e),o=ne(t);_(r===o,()=>`Based on the provided shape, [${e}], the tensor should have ${r} values but has ${o}`);for(let i=0;i<t.length;++i){const a=t[i],l=i===t.length-1?a!==ne(e.slice(i)):!0;_(t[i]===e[i]||!l,()=>`Error creating a new Tensor. Inferred shape (${t}) does not match the provided shape (${e}). `)}}return!Pn(n)&&!Array.isArray(n)&&(n=[n]),e=e||t,n=s!=="string"?br(n,s):yr(n,[],!0),W.makeTensor(n,e,s)}function Lm(n,e,t){const s=nc(n,t);return sc(n,e,s,t)}class go{static join(e){return new go(e).slice()}constructor(e){if(this.shards=[],this.previousShardIndex=0,e==null||(e instanceof Array||(e=[e]),e=e.map(s=>Pn(s)?s.buffer:s),e.length===0))return;this.bufferUniformSize=e[0].byteLength;let t=0;for(let s=0;s<e.length;s++){const r=e[s];s!==e.length-1&&r.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const o=t+r.byteLength;this.shards.push({buffer:r,start:t,end:o}),t=o}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(e=0,t=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(e=isNaN(Number(e))?0:e,t=isNaN(Number(t))?0:t,e=Math.max(0,e),t=Math.min(this.byteLength,t),t<=e)return new ArrayBuffer(0);const s=this.findShardForByte(e);if(s===-1)throw new Error(`Could not find start shard for byte ${e}`);const r=t-e,o=new ArrayBuffer(r),i=new Uint8Array(o);let a=0;for(let l=s;l<this.shards.length;l++){const c=this.shards[l],h=e+a-c.start,d=a,g=Math.min(t,c.end)-c.start,x=new Uint8Array(c.buffer,h,g-h);if(i.set(x,d),a+=x.length,t<c.end)break}return o}findShardForByte(e){if(this.shards.length===0||e<0||e>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(e/this.bufferUniformSize),this.previousShardIndex;function t(r){return e<r.start?-1:e>=r.end?1:0}if(t(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;const s=LC(this.shards,t);return s===-1?-1:(this.previousShardIndex=s,this.previousShardIndex)}}function LC(n,e){let t=0,s=n.length;for(;t<=s;){const r=Math.floor((s-t)/2)+t,o=e(n[r]);if(o===0)return r;o<0?s=r:t=r+1}return-1}function ls(){return W}function Mm(){return W.memory()}function Y(n,e){return W.tidy(n,e)}function Ue(n){Tm(n).forEach(t=>t.dispose())}function cs(n){return W.keep(n)}function zm(n,e,t=1){return W.registerBackend(n,e,t)}function MC(){return W.backend}const Bm=4;async function Vm(n,e){const t=[],s=[],r=Array.isArray(n)?n.map(i=>i.name):Object.keys(n);for(let i=0;i<r.length;++i){const a=r[i],l=Array.isArray(n)?n[i].tensor:n[a];if(l.dtype!=="float32"&&l.dtype!=="int32"&&l.dtype!=="bool"&&l.dtype!=="string"&&l.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${a}': ${l.dtype}`);const c={name:a,shape:l.shape,dtype:l.dtype};if(l.dtype==="string"){const u=new Promise(async h=>{const d=await l.bytes(),f=d.reduce((b,y)=>b+y.length,0)+Bm*d.length,g=new Uint8Array(f);let x=0;for(let b=0;b<d.length;b++){const y=d[b],w=new Uint8Array(new Uint32Array([y.length]).buffer);g.set(w,x),x+=Bm,g.set(y,x),x+=y.length}h(g)});s.push(u)}else s.push(l.data());e!=null&&(c.group=e),t.push(c)}const o=await Promise.all(s);return{data:zC(o),specs:t}}function zC(n){if(n===null)throw new Error(`Invalid input value: ${JSON.stringify(n)}`);let e=0;const t=[];n.forEach(o=>{if(e+=o.byteLength,t.push(o.byteLength===o.buffer.byteLength?o:new o.constructor(o)),!(o instanceof Float32Array||o instanceof Int32Array||o instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${o.constructor.name}`)});const s=new Uint8Array(e);let r=0;return t.forEach(o=>{s.set(new Uint8Array(o.buffer),r),r+=o.byteLength}),s.buffer}const Wh=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Wm(n){return Wh?Buffer.byteLength(n,"utf8"):new Blob([n]).size}function BC(n){if(Wh)return Buffer.from(n).toString("base64");const e=new Uint8Array(n);let t="";for(let s=0,r=e.length;s<r;s++)t+=String.fromCharCode(e[s]);return btoa(t)}function VC(n){if(Wh){const s=Buffer.from(n,"base64");return s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength)}const e=atob(n),t=new Uint8Array(e.length);for(let s=0;s<e.length;++s)t.set([e.charCodeAt(s)],s);return t.buffer}function WC(n){return go.join(n)}function Um(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:Wm(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:Wm(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:new go(n.weightData).byteLength}}class rn{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return rn.instance==null&&(rn.instance=new rn),rn.instance}static registerSaveRouter(e){rn.getInstance().saveRouters.push(e)}static registerLoadRouter(e){rn.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return rn.getHandlers(e,"save")}static getLoadHandlers(e,t){return rn.getHandlers(e,"load",t)}static getHandlers(e,t,s){const r=[];return(t==="load"?rn.getInstance().loadRouters:rn.getInstance().saveRouters).forEach(i=>{const a=i(e,s);a!==null&&r.push(a)}),r}}const UC=n=>rn.getSaveHandlers(n);const Uh="tensorflowjs",Gh=1,wr="models_store",qs="model_info_store";function Gm(){if(!J().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const n=typeof window>"u"?self:window,e=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(e==null)throw new Error("The current browser does not appear to support IndexedDB.");return e}function Hh(n){const e=n.result;e.createObjectStore(wr,{keyPath:"modelPath"}),e.createObjectStore(qs,{keyPath:"modelPath"})}class vr{constructor(e){if(this.indexedDB=Gm(),e==null||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,t){return new Promise((s,r)=>{const o=this.indexedDB.open(Uh,Gh);o.onupgradeneeded=()=>Hh(o),o.onsuccess=()=>{const i=o.result;if(t==null){const a=i.transaction(wr,"readonly"),c=a.objectStore(wr).get(this.modelPath);c.onsuccess=()=>{if(c.result==null)return i.close(),r(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));s(c.result.modelArtifacts)},c.onerror=u=>(i.close(),r(c.error)),a.oncomplete=()=>i.close()}else{t.weightData=go.join(t.weightData);const a=Um(t),l=i.transaction(qs,"readwrite");let c=l.objectStore(qs),u;try{u=c.put({modelPath:this.modelPath,modelArtifactsInfo:a})}catch(d){return r(d)}let h;u.onsuccess=()=>{h=i.transaction(wr,"readwrite");const d=h.objectStore(wr);let f;try{f=d.put({modelPath:this.modelPath,modelArtifacts:t,modelArtifactsInfo:a})}catch(g){return r(g)}f.onsuccess=()=>s({modelArtifactsInfo:a}),f.onerror=g=>{c=l.objectStore(qs);const x=c.delete(this.modelPath);x.onsuccess=()=>(i.close(),r(f.error)),x.onerror=b=>(i.close(),r(f.error))}},u.onerror=d=>(i.close(),r(u.error)),l.oncomplete=()=>{h==null?i.close():h.oncomplete=()=>i.close()}}},o.onerror=i=>r(o.error)})}}vr.URL_SCHEME="indexeddb://";const Hm=n=>J().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(vr.URL_SCHEME)?GC(n.slice(vr.URL_SCHEME.length)):null;rn.registerSaveRouter(Hm),rn.registerLoadRouter(Hm);function GC(n){return new vr(n)}function HC(n){return n.startsWith(vr.URL_SCHEME)?n.slice(vr.URL_SCHEME.length):n}class jC{constructor(){this.indexedDB=Gm()}async listModels(){return new Promise((e,t)=>{const s=this.indexedDB.open(Uh,Gh);s.onupgradeneeded=()=>Hh(s),s.onsuccess=()=>{const r=s.result,o=r.transaction(qs,"readonly"),a=o.objectStore(qs).getAll();a.onsuccess=()=>{const l={};for(const c of a.result)l[c.modelPath]=c.modelArtifactsInfo;e(l)},a.onerror=l=>(r.close(),t(a.error)),o.oncomplete=()=>r.close()},s.onerror=r=>t(s.error)})}async removeModel(e){return e=HC(e),new Promise((t,s)=>{const r=this.indexedDB.open(Uh,Gh);r.onupgradeneeded=()=>Hh(r),r.onsuccess=()=>{const o=r.result,i=o.transaction(qs,"readwrite"),a=i.objectStore(qs),l=a.get(e);let c;l.onsuccess=()=>{if(l.result==null)return o.close(),s(new Error(`Cannot find model with path '${e}' in IndexedDB.`));{const u=a.delete(e),h=()=>{c=o.transaction(wr,"readwrite");const f=c.objectStore(wr).delete(e);f.onsuccess=()=>t(l.result.modelArtifactsInfo),f.onerror=g=>s(l.error)};u.onsuccess=h,u.onerror=d=>(h(),o.close(),s(l.error))}},l.onerror=u=>(o.close(),s(l.error)),i.oncomplete=()=>{c==null?o.close():c.oncomplete=()=>o.close()}},r.onerror=o=>s(r.error)})}}const Rs="/",xo="tensorflowjs_models",jm="info",KC="model_topology",qC="weight_specs",XC="weight_data",YC="model_metadata";function Km(n){return{info:[xo,n,jm].join(Rs),topology:[xo,n,KC].join(Rs),weightSpecs:[xo,n,qC].join(Rs),weightData:[xo,n,XC].join(Rs),modelMetadata:[xo,n,YC].join(Rs)}}function qm(n){for(const e of Object.values(n))window.localStorage.removeItem(e)}function ZC(n){const e=n.split(Rs);if(e.length<3)throw new Error(`Invalid key format: ${n}`);return e.slice(1,e.length-1).join(Rs)}function JC(n){return n.startsWith(Cr.URL_SCHEME)?n.slice(Cr.URL_SCHEME.length):n}class Cr{constructor(e){if(!J().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,e==null||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=Km(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const t=JSON.stringify(e.modelTopology),s=JSON.stringify(e.weightSpecs),r=Um(e),o=go.join(e.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,s),this.LS.setItem(this.keys.weightData,BC(o));const i={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:e.signature!=null?e.signature:void 0,userDefinedMetadata:e.userDefinedMetadata!=null?e.userDefinedMetadata:void 0,modelInitializer:e.modelInitializer!=null?e.modelInitializer:void 0,initializerSignature:e.initializerSignature!=null?e.initializerSignature:void 0,trainingConfig:e.trainingConfig!=null?e.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(i)),{modelArtifactsInfo:r}}catch{throw qm(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){const e=JSON.parse(this.LS.getItem(this.keys.info));if(e==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(e.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const t={},s=JSON.parse(this.LS.getItem(this.keys.topology));if(s==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);t.modelTopology=s;const r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(r==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);t.weightSpecs=r;const o=this.LS.getItem(this.keys.modelMetadata);if(o!=null){const a=JSON.parse(o);t.format=a.format,t.generatedBy=a.generatedBy,t.convertedBy=a.convertedBy,a.signature!=null&&(t.signature=a.signature),a.userDefinedMetadata!=null&&(t.userDefinedMetadata=a.userDefinedMetadata),a.modelInitializer!=null&&(t.modelInitializer=a.modelInitializer),a.initializerSignature!=null&&(t.initializerSignature=a.initializerSignature),a.trainingConfig!=null&&(t.trainingConfig=a.trainingConfig)}const i=this.LS.getItem(this.keys.weightData);if(i==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return t.weightData=VC(i),t}}Cr.URL_SCHEME="localstorage://";const Xm=n=>J().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Cr.URL_SCHEME)?QC(n.slice(Cr.URL_SCHEME.length)):null;rn.registerSaveRouter(Xm),rn.registerLoadRouter(Xm);function QC(n){return new Cr(n)}class ek{constructor(){_(J().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),_(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const e={},t=xo+Rs,s=Rs+jm;for(let r=0;r<this.LS.length;++r){const o=this.LS.key(r);if(o.startsWith(t)&&o.endsWith(s)){const i=ZC(o);e[i]=JSON.parse(this.LS.getItem(o))}}return e}async removeModel(e){e=JC(e);const t=Km(e);if(this.LS.getItem(t.info)==null)throw new Error(`Cannot find model at path '${e}'`);const s=JSON.parse(this.LS.getItem(t.info));return qm(t),s}}const Ym="://";class us{constructor(){this.managers={}}static getInstance(){return us.instance==null&&(us.instance=new us),us.instance}static registerManager(e,t){_(e!=null,()=>"scheme must not be undefined or null."),e.endsWith(Ym)&&(e=e.slice(0,e.indexOf(Ym))),_(e.length>0,()=>"scheme must not be an empty string.");const s=us.getInstance();_(s.managers[e]==null,()=>`A model store manager is already registered for scheme '${e}'.`),s.managers[e]=t}static getManager(e){const t=us.getInstance().managers[e];if(t==null)throw new Error(`Cannot find model manager for scheme '${e}'`);return t}static getSchemes(){return Object.keys(us.getInstance().managers)}}class tk{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,t){return fetch(e,t)}now(){return performance.now()}encode(e,t){if(t!=="utf-8"&&t!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${t}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,t){return new TextDecoder(t).decode(e)}setTimeoutCustom(e,t){if(typeof window>"u"||!J().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(e,t);return}this.functionRefs.push(e),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},t),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",s=>{if(s.source===window&&s.data.name===this.messageName){s.stopPropagation();const r=this.functionRefs[s.data.index];r(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(e){return gm(e)}}if(J().get("IS_BROWSER")){J().setPlatform("browser",new tk);try{us.registerManager(Cr.URL_SCHEME,new ek)}catch{}try{us.registerManager(vr.URL_SCHEME,new jC)}catch{}}const nk={importFetch:()=>require("node-fetch")};let jh;class sk{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(e,t){return J().global.fetch!=null?J().global.fetch(e,t):(jh==null&&(jh=nk.importFetch()),jh(e,t))}now(){const e=process.hrtime();return e[0]*1e3+e[1]/1e6}encode(e,t){if(t!=="utf-8"&&t!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${t}`);return this.textEncoder.encode(e)}decode(e,t){return e.length===0?"":new this.util.TextDecoder(t).decode(e)}isTypedArray(e){return this.util.types.isFloat32Array(e)||this.util.types.isInt32Array(e)||this.util.types.isUint8Array(e)||this.util.types.isUint8ClampedArray(e)}}J().get("IS_NODE")&&!J().get("IS_BROWSER")&&J().setPlatform("node",new sk);function Ve(n,e="float32",t){return e=e||"float32",Es(n),new jt(n,e,t)}function rk(n,e){const t=M(n,"x","cast");if(!Yv(e))throw new Error(`Failed to cast to unknown dtype ${e}`);if(e==="string"&&t.dtype!=="string"||e!=="string"&&t.dtype==="string")throw new Error("Only strings can be casted to strings");const s={x:t},r={dtype:e};return W.runKernel(ni,s,r)}const be=j({cast_:rk});function ok(n){const t={x:M(n,"x","clone","string_or_numeric")};return W.runKernel(mi,t)}const kr=j({clone_:ok});function ik(n,e=!1){console.log(n.toString(e))}Dm(),EC({buffer:Ve,cast:be,clone:kr,print:ik});function ak(n,e){let t=M(n,"a","add"),s=M(e,"b","add");[t,s]=St(t,s);const r={a:t,b:s};return W.runKernel(uo,r)}const ue=j({add_:ak});function lk(n,e){let t=M(n,"a","floorDiv"),s=M(e,"b","floorDiv");[t,s]=St(t,s);const r={a:t,b:s};return W.runKernel(pi,r)}const Zm=j({floorDiv_:lk});function ck(n,e){let t=M(n,"a","div"),s=M(e,"b","div");if([t,s]=St(t,s),t.dtype==="int32"&&s.dtype==="int32")return Zm(t,s);const r={a:t,b:s},o={};return W.runKernel(ai,r,o)}const Ne=j({div_:ck});function uk(n,e){let t=M(n,"a","mul"),s=M(e,"b","mul");[t,s]=St(t,s);const r={a:t,b:s};return W.runKernel($i,r)}const V=j({mul_:uk});function hk(n){const e=M(n,"x","abs");if(e.dtype==="complex64"){const t={x:e};return W.runKernel(nl,t)}else{const t={x:e};return W.runKernel(Xa,t)}}const on=j({abs_:hk});function dk(n){const t={x:M(n,"x","acos")};return W.runKernel(Xo,t)}const pk=j({acos_:dk});function fk(n){const t={x:M(n,"x","acosh")};return W.runKernel(Yo,t)}const mk=j({acosh_:fk});function gk(n,e=null,t=!1){const r={x:M(n,"x","all","bool")},o={axis:e,keepDims:t};return W.runKernel(Gu,r,o)}const Jm=j({all_:gk});function xk(n,e=null,t=!1){const r={x:M(n,"x","any","bool")},o={axis:e,keepDims:t};return W.runKernel(Hu,r,o)}const Kh=j({any_:xk});function bk(n,e=0){const s={x:M(n,"x","argMax")},r={axis:e};return W.runKernel(Ya,s,r)}const Ki=j({argMax_:bk});function yk(n,e=0){const s={x:M(n,"x","argMin")},r={axis:e};return W.runKernel(Za,s,r)}const wk=j({argMin_:yk});function vk(n){const t={x:M(n,"x","asin")};return W.runKernel(Zo,t)}const Ck=j({asin_:vk});function kk(n){const t={x:M(n,"x","asinh")};return W.runKernel(Jo,t)}const $k=j({asinh_:kk});function Ik(n){const t={x:M(n,"x","atan")};return W.runKernel(Qo,t)}const Sk=j({atan_:Ik});function Nk(n,e){let t=M(n,"a","atan2"),s=M(e,"b","atan2");[t,s]=St(t,s);const r={a:t,b:s};return W.runKernel(ti,r)}const Tk=j({atan2_:Nk});function Ek(n){const t={x:M(n,"x","atanh")};return W.runKernel(ei,t)}const Rk=j({atanh_:Ek});function qi(n,e,t,s,r="NHWC",o){const i=n[3],a=[...e,i],l=As(r);return Kt(n,a,t,o,s,null,null,l)}function Ln(n,e,t,s,r,o,i="channelsLast"){const[a,l]=Xi(e);let c;if(i==="channelsLast")c=[a,l,n[3],n[3]];else if(i==="channelsFirst")c=[a,l,n[1],n[1]];else throw new Error(`Unknown dataFormat ${i}`);return Kt(n,c,t,s,r,o,!1,i)}function Ds(n,e,t,s,r,o,i="NDHWC"){const[a,l,c]=Xh(e);let u,h;if(i==="NDHWC")h="channelsLast",u=[a,l,c,n[4],n[4]];else if(i==="NCDHW")h="channelsFirst",u=[a,l,c,n[1],n[1]];else throw new Error(`Unknown dataFormat ${i}`);return Xs(n,u,t,s,r,!1,h,o)}function Kt(n,e,t,s,r,o,i=!1,a="channelsLast"){let[l,c,u,h]=[-1,-1,-1,-1];if(a==="channelsLast")[l,c,u,h]=n;else if(a==="channelsFirst")[l,h,c,u]=n;else throw new Error(`Unknown dataFormat ${a}`);const[d,f,,g]=e,[x,b]=Xi(t),[y,w]=Xi(s),$=bo(d,y),C=bo(f,w),{padInfo:N,outHeight:E,outWidth:F}=_k(r,c,u,x,b,$,C,o,a),O=i?g*h:g;let A;return a==="channelsFirst"?A=[l,O,E,F]:a==="channelsLast"&&(A=[l,E,F,O]),{batchSize:l,dataFormat:a,inHeight:c,inWidth:u,inChannels:h,outHeight:E,outWidth:F,outChannels:O,padInfo:N,strideHeight:x,strideWidth:b,filterHeight:d,filterWidth:f,effectiveFilterHeight:$,effectiveFilterWidth:C,dilationHeight:y,dilationWidth:w,inShape:n,outShape:A,filterShape:e}}function Xs(n,e,t,s,r,o=!1,i="channelsLast",a){let[l,c,u,h,d]=[-1,-1,-1,-1,-1];if(i==="channelsLast")[l,c,u,h,d]=n;else if(i==="channelsFirst")[l,d,c,u,h]=n;else throw new Error(`Unknown dataFormat ${i}`);const[f,g,x,,b]=e,[y,w,$]=Xh(t),[C,N,E]=Xh(s),F=bo(f,C),O=bo(g,N),A=bo(x,E),{padInfo:D,outDepth:S,outHeight:z,outWidth:U}=Fk(r,c,u,h,y,w,$,F,O,A,a),G=o?b*d:b;let K;return i==="channelsFirst"?K=[l,G,S,z,U]:i==="channelsLast"&&(K=[l,S,z,U,G]),{batchSize:l,dataFormat:i,inDepth:c,inHeight:u,inWidth:h,inChannels:d,outDepth:S,outHeight:z,outWidth:U,outChannels:G,padInfo:D,strideDepth:y,strideHeight:w,strideWidth:$,filterDepth:f,filterHeight:g,filterWidth:x,effectiveFilterDepth:F,effectiveFilterHeight:O,effectiveFilterWidth:A,dilationDepth:C,dilationHeight:N,dilationWidth:E,inShape:n,outShape:K,filterShape:e}}function Dk(n,e,t,s,r){s==null&&(s=qh(n,e,t));const o=n[0],i=n[1],a=Yi((o-e+2*s)/t+1,r),l=Yi((i-e+2*s)/t+1,r);return[a,l]}function Ak(n,e,t,s,r,o){r==null&&(r=qh(n,e[0],s[0]));const i=[0,0,0,t];for(let a=0;a<3;a++)n[a]+2*r>=e[a]&&(i[a]=Yi((n[a]-e[a]+2*r)/s[a]+1,o));return i}function qh(n,e,t,s=1){const r=bo(e,s);return Math.floor((n[0]*(t-1)-t+r)/2)}function Xi(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function Xh(n){return typeof n=="number"?[n,n,n]:n}function bo(n,e){return e<=1?n:n+(n-1)*(e-1)}function _k(n,e,t,s,r,o,i,a,l){let c,u,h;if(typeof n=="number"){c={top:n,bottom:n,left:n,right:n,type:n===0?"VALID":"NUMBER"};const f=Dk([e,t],o,s,n,a);u=f[0],h=f[1]}else if(n==="same"){u=Math.ceil(e/s),h=Math.ceil(t/r);const d=Math.max(0,(u-1)*s+o-e),f=Math.max(0,(h-1)*r+i-t),g=Math.floor(d/2),x=d-g,b=Math.floor(f/2),y=f-b;c={top:g,bottom:x,left:b,right:y,type:"SAME"}}else if(n==="valid")c={top:0,bottom:0,left:0,right:0,type:"VALID"},u=Math.ceil((e-o+1)/s),h=Math.ceil((t-i+1)/r);else if(typeof n=="object"){const d=l==="channelsLast"?n[1][0]:n[2][0],f=l==="channelsLast"?n[1][1]:n[2][1],g=l==="channelsLast"?n[2][0]:n[3][0],x=l==="channelsLast"?n[2][1]:n[3][1];c={top:d,bottom:f,left:g,right:x,type:d===0&&f===0&&g===0&&x===0?"VALID":"EXPLICIT"},u=Yi((e-o+d+f)/s+1,a),h=Yi((t-i+g+x)/r+1,a)}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:c,outHeight:u,outWidth:h}}function Fk(n,e,t,s,r,o,i,a,l,c,u){let h,d,f,g;if(n==="valid"&&(n=0),typeof n=="number"){h={top:n,bottom:n,left:n,right:n,front:n,back:n,type:n===0?"VALID":"NUMBER"};const b=Ak([e,t,s,1],[a,l,c],1,[r,o,i],n,u);d=b[0],f=b[1],g=b[2]}else if(n==="same"){d=Math.ceil(e/r),f=Math.ceil(t/o),g=Math.ceil(s/i);const x=(d-1)*r+a-e,b=(f-1)*o+l-t,y=(g-1)*i+c-s,w=Math.floor(x/2),$=x-w,C=Math.floor(b/2),N=b-C,E=Math.floor(y/2),F=y-E;h={top:C,bottom:N,left:E,right:F,front:w,back:$,type:"SAME"}}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:h,outDepth:d,outHeight:f,outWidth:g}}function Yi(n,e){if(!e)return Math.trunc(n);switch(e){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error(`Unknown roundingMode ${e}`)}}function $r(n){const[e,t,s]=Xi(n);return e===1&&t===1&&s===1}function Qt(n,e){return $r(n)||$r(e)}function Ir(n){return Xi(n).every(e=>e>0)}function As(n){if(n==="NHWC")return"channelsLast";if(n==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${n}`)}function mn(n,e,t){if(t!=null){if(typeof e=="string")throw Error(`Error in ${n}: pad must be an integer when using dimRoundingMode ${t} but got pad ${e}.`);if(typeof e=="number")_(io(e),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${t} but got pad ${e}.`);else if(typeof e=="object")e.forEach(s=>{s.forEach(r=>{_(io(r),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${t} but got pad ${r}.`)})});else throw Error(`Error in ${n}: Unknown padding parameter: ${e}`)}}function Ok(n,e){const s={x:M(n,"x","reshape","string_or_numeric")},r={shape:e};return W.runKernel(Pl,s,r)}const H=j({reshape_:Ok});function Pk(n,e,t,s,r){const o=M(n,"x","avgPool","float32"),i=1;_(Qt(t,i),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${t} and dilations '${i}'`);let a=o,l=!1;o.rank===3&&(l=!0,a=H(o,[1,o.shape[0],o.shape[1],o.shape[2]])),_(a.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${a.rank}.`),mn("avgPool",s,r);const c={x:a},u={filterSize:e,strides:t,pad:s,dimRoundingMode:r};let h=W.runKernel(Ja,c,u);return h=be(h,o.dtype),l?H(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const Yh=j({avgPool_:Pk});function Lk(n,e,t,s,r,o="NDHWC"){const i=M(n,"x","avgPool3d","float32");let a=i,l=!1;i.rank===4&&(l=!0,a=H(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),_(a.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${a.rank}.`),_(o==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${o}`),_(typeof t=="number"&&t>0||Array.isArray(t)&&t[0]>0&&t[1]>0&&t[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${t}'`),mn("avgPool3d",s,r);const c={x:a},u={filterSize:e,strides:t,pad:s,dimRoundingMode:r,dataFormat:o};let h=W.runKernel(Qa,c,u);return h=be(h,a.dtype),l?H(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const Mk=j({avgPool3d_:Lk});function zk(n,e=0){_(n.length>=1,()=>"Pass at least one tensor to concat");const t=Pm(n,"tensors","concat","string_or_numeric");if(t[0].dtype==="complex64"&&t.forEach(o=>{if(o.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${o.dtype}. `)}),t.length===1)return kr(t[0]);const s=t,r={axis:e};return W.runKernel(sl,s,r)}const gn=j({concat_:zk});function Bk(n,e,t=!1,s=!1){let r=M(n,"a","matMul"),o=M(e,"b","matMul");[r,o]=St(r,o);const i={a:r,b:o},a={transposeA:t,transposeB:s};return W.runKernel(el,i,a)}const Qe=j({matMul_:Bk});function Vk(n){const t={x:M(n,"x","sigmoid","float32")};return W.runKernel(Oi,t)}const yo=j({sigmoid_:Vk});function Wk(n,e,t){const s=M(n,"x","slice","string_or_numeric");if(s.rank===0)throw new Error("Slicing scalar is not possible");const r={x:s},o={begin:e,size:t};return W.runKernel(Vl,r,o)}const dt=j({slice_:Wk});function Uk(n){const t={x:M(n,"x","tanh","float32")};return W.runKernel(Vi,t)}const rc=j({tanh_:Uk});function Gk(n,e,t){const s=M(n,"x","batchToSpaceND"),r=e.reduce((a,l)=>a*l);_(s.rank>=1+e.length,()=>`input rank is ${s.rank} but should be > than blockShape.length ${e.length}`),_(t.length===e.length,()=>`crops.length is ${t.length} but should be equal to blockShape.length  ${e.length}`),_(s.shape[0]%r===0,()=>`input tensor batch is ${s.shape[0]} but is not divisible by the product of the elements of blockShape ${e.join(" * ")} === ${r}`);const o={x:s},i={blockShape:e,crops:t};return W.runKernel(tl,o,i)}const Zh=j({batchToSpaceND_:Gk});function Hk(n){let e;return n.rank===0||n.rank===1?e=H(n,[1,1,1,n.size]):n.rank===2?e=H(n,[1,1,n.shape[0],n.shape[1]]):n.rank===3?e=H(n,[1,n.shape[0],n.shape[1],n.shape[2]]):e=n,e}function jk(n,e,t,s,r,o){o==null&&(o=.001);const i=M(n,"x","batchNorm"),a=M(e,"mean","batchNorm"),l=M(t,"variance","batchNorm");let c;r!=null&&(c=M(r,"scale","batchNorm"));let u;s!=null&&(u=M(s,"offset","batchNorm")),_(a.rank===l.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),_(u==null||a.rank===u.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),_(c==null||a.rank===c.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const d={x:Hk(i),scale:c,offset:u,mean:a,variance:l},f={varianceEpsilon:o},g=W.runKernel(dl,d,f);return H(g,i.shape)}const oc=j({batchNorm_:jk});function Kk(n,e,t,s,r,o){const i=M(n,"x","batchNorm"),a=M(e,"mean","batchNorm"),l=M(t,"variance","batchNorm");let c;r!=null&&(c=M(r,"scale","batchNorm"));let u;return s!=null&&(u=M(s,"offset","batchNorm")),_(i.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${i.rank}.`),_(a.rank===2||a.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${a.rank}.`),_(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${l.rank}.`),c!=null&&_(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${c.rank}.`),u!=null&&_(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${u.rank}.`),oc(i,a,l,u,c,o)}const qk=j({batchNorm2d_:Kk});function Xk(n,e,t,s,r,o){const i=M(n,"x","batchNorm"),a=M(e,"mean","batchNorm"),l=M(t,"variance","batchNorm");let c;r!=null&&(c=M(r,"scale","batchNorm"));let u;return s!=null&&(u=M(s,"offset","batchNorm")),_(i.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${i.rank}.`),_(a.rank===3||a.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${a.rank}.`),_(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${l.rank}.`),c!=null&&_(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${c.rank}.`),u!=null&&_(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${u.rank}.`),oc(i,a,l,u,c,o)}const Yk=j({batchNorm3d_:Xk});function Zk(n,e,t,s,r,o){const i=M(n,"x","batchNorm"),a=M(e,"mean","batchNorm"),l=M(t,"variance","batchNorm");let c;r!=null&&(c=M(r,"scale","batchNorm"));let u;return s!=null&&(u=M(s,"offset","batchNorm")),_(i.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${i.rank}.`),_(a.rank===4||a.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${a.rank}.`),_(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${l.rank}.`),c!=null&&_(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${c.rank}.`),u!=null&&_(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${u.rank}.`),oc(i,a,l,u,c,o)}const Jk=j({batchNorm4d_:Zk});function Qk(n,e,t){const s=M(n,"x","bincount"),r=M(e,"weights","bincount");_(s.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${s.dtype}`),_(t>=0,()=>`size must be non-negative, but got ${t}.`),_(r.size===s.size||r.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${s.shape}, weights shape: ${r.shape}.`);const o={x:s,weights:r},i={size:t};return W.runKernel(qu,o,i)}const e$=j({bincount_:Qk});function t$(n,e){let t=M(n,"broadcastTo","x");const s=t.shape;if(Es(e),e.length<t.rank)throw new Error(`broadcastTo(): shape.length=${e.length} < input.rank=${t.rank}.`);if(e.length>t.rank){const c=t.shape.slice();for(;c.length<e.length;)c.unshift(1);t=H(t,c)}const r=t.shape,o=Array.from(e);for(let c=e.length-1;c>=0;c--)if(r[c]===e[c])o[c]=1;else if(t.shape[c]!==1)throw new Error(`broadcastTo(): [${s}] cannot be broadcast to [${e}].`);if(o.map((c,u)=>c>1?u:-1).filter(c=>c>=0).length===0)return kr(t);const a={x:t},l={reps:o};return W.runKernel(Wi,a,l)}const Zi=j({broadcastTo_:t$});function n$(n){const t={x:M(n,"x","ceil","float32")};return W.runKernel(si,t)}const s$=j({ceil_:n$});function ic(n,e,t){Es(n),t=t||lo(e);const s={shape:n,value:e,dtype:t};return W.runKernel(hh,{},s)}function r$(n,e,t){const s=M(n,"x","clipByValue");if(_(e<=t,()=>`Error in clip: min (${e}) must be less than or equal to max (${t}).`),e===t)return ic(s.shape,e,s.dtype);const r={x:s},o={clipValueMin:e,clipValueMax:t};return W.runKernel(ri,r,o)}const Dn=j({clipByValue_:r$});function o$(n){return gn(n,0)}const i$=j({concat1d_:o$});function a$(n,e){return gn(n,e)}const l$=j({concat2d_:a$});function c$(n,e){return gn(n,e)}const u$=j({concat3d_:c$});function h$(n,e){return gn(n,e)}const d$=j({concat4d_:h$});function p$(n,e,t,s,r="NHWC",o=[1,1],i){const a=M(n,"x","conv2d","float32"),l=M(e,"filter","conv2d","float32");let c=a,u=!1;a.rank===3&&(u=!0,c=H(a,[1,a.shape[0],a.shape[1],a.shape[2]])),_(c.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${c.rank}.`),_(l.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${l.rank}.`),mn("conv2d",s,i);const h=r==="NHWC"?c.shape[3]:c.shape[1];_(h===l.shape[2],()=>`Error in conv2d: depth of input (${h}) must match input depth for filter ${l.shape[2]}.`),_(Qt(t,o),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${t} and dilations '${o}'`),_(Ir(o),()=>"Error in conv2D: Dilated rates should be larger than 0."),_(Ir(t),()=>"Error in conv2D: Strides should be larger than 0.");const d={x:c,filter:l},f={strides:t,pad:s,dataFormat:r,dilations:o,dimRoundingMode:i},g=W.runKernel(rl,d,f);return u?H(g,[g.shape[1],g.shape[2],g.shape[3]]):g}const Sr=j({conv2d_:p$});function f$(n,e,t,s,r="NWC",o=1,i){const a=M(n,"x","conv1d"),l=M(e,"filter","conv1d");let c=a,u=!1;a.rank===2&&(u=!0,c=H(a,[1,a.shape[0],a.shape[1]])),_(c.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${c.rank}.`),_(l.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${l.rank}.`),mn("conv1d",s,i),_(c.shape[2]===l.shape[1],()=>`Error in conv1d: depth of input (${c.shape[2]}) must match input depth for filter ${l.shape[1]}.`),_(Qt(t,o),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${t} and dilation '${o}'`),_(Ir(o),()=>"Error in conv1D: Dilated rates should be larger than 0."),_(Ir(t),()=>"Error in conv1D: Stride should be larger than 0."),_(r==="NWC",()=>`Error in conv1d: got dataFormat of ${r} but only NWC is currently supported.`);const h=H(l,[1,l.shape[0],l.shape[1],l.shape[2]]),d=H(c,[c.shape[0],1,c.shape[1],c.shape[2]]),b=Sr(d,h,[1,t],s,"NHWC",[1,o],i);return u?H(b,[b.shape[2],b.shape[3]]):H(b,[b.shape[0],b.shape[2],b.shape[3]])}const Qm=j({conv1d_:f$});function m$(n,e,t,s,r,o="NHWC",i){_(n.length===e.rank,()=>`Length of inShape (${n.length}) and rank of dy (${e.rank}) must match`);let a=n,l=e,c=!1;e.rank===3&&(c=!0,l=H(e,[1,e.shape[0],e.shape[1],e.shape[2]]),a=[1,n[0],n[1],n[2]]),_(a.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${a.length}.`),_(l.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${l.rank}`),_(t.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${t.rank}`);const u=o==="NHWC"?a[3]:a[1],h=o==="NHWC"?l.shape[3]:l.shape[1];_(u===t.shape[2],()=>`Error in conv2dDerInput: depth of input (${u}) must match input depth for filter ${t.shape[2]}.`),_(h===t.shape[3],()=>`Error in conv2dDerInput: depth of output (${h}) must match output depth for filter ${t.shape[3]}.`),mn("conv2dDerInput",r,i);const d={dy:l,filter:t},f={strides:s,pad:r,dataFormat:o,dimRoundingMode:i,inputShape:a},g=W.runKernel(ol,d,f);return c?H(g,[g.shape[1],g.shape[2],g.shape[3]]):g}const Jh=j({conv2DBackpropInput_:m$});function g$(n,e,t,s,r,o){const i=M(n,"x","conv2dTranspose"),a=M(e,"filter","conv2dTranspose");return Jh(t,i,a,s,r,"NHWC",o)}const eg=j({conv2dTranspose_:g$});function x$(n,e,t,s,r="NDHWC",o=[1,1,1]){const i=M(n,"x","conv3d"),a=M(e,"filter","conv3d");let l=i,c=!1;i.rank===4&&(c=!0,l=H(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),_(l.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${l.rank}.`),_(a.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${a.rank}.`),_(l.shape[4]===a.shape[3],()=>`Error in conv3d: depth of input (${l.shape[4]}) must match input depth for filter ${a.shape[3]}.`),_(Qt(t,o),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${t} and dilations '${o}'`),_(r==="NDHWC",()=>`Error in conv3d: got dataFormat of ${r} but only NDHWC is currently supported.`),_(Ir(o),()=>"Error in conv3D: Dilated rates should be larger than 0."),_(Ir(t),()=>"Error in conv3D: Strides should be larger than 0.");const u={x:l,filter:a},h={strides:t,pad:s,dataFormat:r,dilations:o},d=W.runKernel(il,u,h);return c?H(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const b$=j({conv3d_:x$});function y$(n,e,t,s,r){_(n.length===e.rank,()=>`Length of inShape (${n.length}) and rank of dy (${e.rank}) must match`);let o=n,i=e,a=!1;e.rank===4&&(a=!0,i=H(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]]),o=[1,n[0],n[1],n[2],n[3]]);const l=o[4],c=i.shape[4];_(o.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${o.length}.`),_(i.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${i.rank}`),_(t.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${t.rank}`),_(l===t.shape[3],()=>`Error in conv3dDerInput: depth of input (${l}) must match input depth for filter ${t.shape[3]}.`),_(c===t.shape[4],()=>`Error in conv3dDerInput: depth of output (${c}) must match output depth for filter ${t.shape[4]}.`);const u={dy:i,filter:t},h={pad:r,strides:s,inputShape:o},d=W.runKernel(Qu,u,h);return a?H(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const tg=j({conv3DBackpropInput_:y$});function w$(n,e,t,s,r){const o=M(n,"x","conv3dTranspose"),i=M(e,"filter","conv3dTranspose");return tg(t,o,i,s,r)}const v$=j({conv3dTranspose_:w$});function C$(n){const t={x:M(n,"x","cos","float32")};return W.runKernel(oi,t)}const Qh=j({cos_:C$});function k$(n){const t={x:M(n,"x","cosh","float32")};return W.runKernel(ii,t)}const ng=j({cosh_:k$});function $$(n,e=0,t=!1,s=!1){const o={x:M(n,"x","cumprod")},i={axis:e,exclusive:t,reverse:s};return W.runKernel(eh,o,i)}const ed=j({cumprod_:$$});function I$(n,e=0,t=!1,s=!1){const o={x:M(n,"x","cumsum")},i={axis:e,exclusive:t,reverse:s};return W.runKernel(al,o,i)}const sg=j({cumsum_:I$});function S$(n,e,t,s=!1){const r=M(n,"x","denseBincount"),o=M(e,"weights","denseBincount");_(r.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${r.dtype}`),_(r.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${r.rank}.`),_(t>=0,()=>`size must be non-negative, but got ${t}.`),_(o.size===r.size||o.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${r.shape}, weights shape: ${o.shape}.`);const i={x:r,weights:o},a={size:t,binaryOutput:s};return W.runKernel(nh,i,a)}const rg=j({denseBincount_:S$});function N$(n,e,t="NHWC"){const s=M(n,"x","depthToSpace","float32"),r=t==="NHWC"?s.shape[1]:s.shape[2],o=t==="NHWC"?s.shape[2]:s.shape[3],i=t==="NHWC"?s.shape[3]:s.shape[1];_(e>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${e}`),_(r*e>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${r} and ${e}  for depthToSpace with input shape
    ${s.shape}`),_(o*e>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${o} and ${e} for depthToSpace with input shape
        ${s.shape}`),_(i%(e*e)===0,()=>`Dimension size must be evenly divisible by ${e*e} but is ${i} for depthToSpace with input shape ${s.shape}`);const a={x:s},l={blockSize:e,dataFormat:t};return W.runKernel(sh,a,l)}const T$=j({depthToSpace_:N$});function E$(n,e,t,s,r="NHWC",o=[1,1],i){const a=M(n,"x","depthwiseConv2d","float32"),l=M(e,"filter","depthwiseConv2d","float32");let c=a,u=!1;a.rank===3&&(u=!0,c=H(a,[1,a.shape[0],a.shape[1],a.shape[2]])),_(c.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${c.rank}.`),_(l.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${l.rank}.`);const h=r==="NHWC"?c.shape[3]:c.shape[1];_(h===l.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${h}) must match the inChannels dimension in filter ${l.shape[2]}.`),mn("depthwiseConv2d",s,i);const d={x:c,filter:l},f={strides:t,pad:s,dataFormat:r,dilations:o,dimRoundingMode:i},g=W.runKernel(ll,d,f);return u?H(g,[g.shape[1],g.shape[2],g.shape[3]]):g}const td=j({depthwiseConv2d_:E$});function R$(n,e,t,s,r=[1,1],o="NHWC"){const i=M(n,"x","dilation2d"),a=M(e,"filter","dilation2d");_(i.rank===3||i.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${i.rank}.`),_(a.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${a.rank}.`),_(o==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${o}`);let l=i,c=!1;i.rank===3&&(l=H(i,[1,i.shape[0],i.shape[1],i.shape[2]]),c=!0),_(l.shape[3]===a.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${l.shape[3]} vs ${a.shape[2]}`);const u={x:l,filter:a},h={strides:t,pad:s,dilations:r},d=W.runKernel(cl,u,h);return c?H(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const D$=j({dilation2d_:R$});function wo(n,e){const t=n.length,s=[];for(let r=0;r<t;r++){const o=t-1-r,i=n[o]||1;(e[e.length-1-r]||1)>1&&i===1&&s.unshift(o)}return s}function Ot(n,e){const t=[];for(let s=0;s<e.length;s++){const r=n[n.length-s-1],o=e.length-s-1,i=e[o];(r==null||r===1&&i>1)&&t.unshift(o)}return t}function Oe(n,e){const t=Math.max(n.length,e.length),s=new Array(t);for(let r=0;r<t;r++){let o=n[n.length-r-1];o==null&&(o=1);let i=e[e.length-r-1];if(i==null&&(i=1),o===1)s[t-r-1]=i;else if(i===1)s[t-r-1]=o;else if(o!==i){const a=`Operands could not be broadcast together with shapes ${n} and ${e}.`;throw Error(a)}else s[t-r-1]=o}return s}function A$(n,e){let t=M(n,"a","equal","string_or_numeric"),s=M(e,"b","equal","string_or_numeric");[t,s]=St(t,s),Oe(t.shape,s.shape);const r={a:t,b:s};return W.runKernel(ul,r)}const hs=j({equal_:A$});function _$(n,e,t){const s=M(e,"a","where"),r=M(t,"b","where"),o=M(n,"condition","where","bool"),i=Oe(Oe(o.shape,s.shape),r.shape),a=Zi(o,i),l=Zi(s,i),c=Zi(r,i),u={condition:a,t:l,e:c};return W.runKernel(Bl,u)}const an=j({where_:_$});function F$(n){const t={x:M(n,"x","zerosLike")};return W.runKernel(ql,t)}const je=j({zerosLike_:F$});function O$(n,e){let t=M(n,"a","div"),s=M(e,"b","div");[t,s]=St(t,s);const r=Ne(t,s),o=je(r),i=hs(s,o);return an(i,o,r)}const P$=j({divNoNan_:O$});function L$(n,e){const t=M(n,"t1","dot"),s=M(e,"t2","dot");_((t.rank===1||t.rank===2)&&(s.rank===1||s.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${t.rank} and ${s.rank}.`);const r=t.rank===1?t.size:t.shape[1],o=s.rank===1?s.size:s.shape[0];if(_(r===o,()=>`Error in dot: inner dimensions of inputs must match, but got ${r} and ${o}.`),t.rank===1&&s.rank===1){const i=H(t,[1,-1]),a=H(s,[-1,1]),l=Qe(i,a);return H(l,[])}else if(t.rank===1&&s.rank===2){const i=H(t,[1,-1]),a=H(s,[s.shape[0],s.shape[1]]),l=Qe(i,a);return H(l,[l.size])}else if(t.rank===2&&s.rank===1){const i=H(s,[-1,1]),a=Qe(t,i);return H(a,[a.size])}else{const i=H(s,[s.shape[0],s.shape[1]]);return Qe(t,i)}}const M$=j({dot_:L$});function z$(n,...e){const t=e.map((r,o)=>M(r,`tensors${o}`,"einsum")),s={equation:n};return W.runKernel(lh,t,s)}const Ji=j({einsum_:z$});function B$(n){const t={x:M(n,"x","elu","float32")};return W.runKernel(li,t)}const ac=j({elu_:B$});function V$(n){let e=M(n,"x","erf");_(e.dtype==="int32"||e.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),e.dtype==="int32"&&(e=be(e,"float32"));const t={x:e};return W.runKernel(ci,t)}const og=j({erf_:V$});function nd(n,e){for(let t=0;t<n.length;++t)if(n[n.length-t-1]!==e-1-t)return!1;return!0}function ig(n,e,t){const s=n.length+e.length,r=[];let o=0,i=0;for(let a=0;a<s;a++)t.indexOf(a)===-1?r.push(n[o++]):r.push(e[i++]);return r}function Ut(n,e){const t=[],s=n.length;for(let o=0;o<s;o++)e.indexOf(o)===-1&&t.push(n[o]);const r=e.map(o=>n[o]);return[t,r]}function At(n,e){const t=e.map(s=>1);return ig(n,t,e)}function qt(n,e,t){_(nd(e,t),()=>`${n} supports only inner-most axes for now. Got axes ${e} and rank-${t} input.`)}function wt(n,e){if(nd(n,e))return null;const t=[];for(let s=0;s<e;++s)n.indexOf(s)===-1&&t.push(s);return n.forEach(s=>t.push(s)),t}function Ys(n){return n.map((e,t)=>[t,e]).sort((e,t)=>e[1]-t[1]).map(e=>e[0])}function Nt(n,e){const t=[];for(let s=e-n;s<e;++s)t.push(s);return t}function W$(n,e=null,t=!1){const r={x:M(n,"x","max")},o={reductionIndices:e,keepDims:t};return W.runKernel(Cl,r,o)}const Xn=j({max_:W$});function U$(n,e=null,t=!1){const r={x:M(n,"x","min")},o={axis:e,keepDims:t};return W.runKernel(Sl,r,o)}const lc=j({min_:U$});function G$(n,e){let t=M(n,"base","pow"),s=M(e,"exp","pow");[t,s]=St(t,s);const r={a:t,b:s};return W.runKernel(Ii,r)}const Nr=j({pow_:G$});function et(n,e){if((Pn(n)&&e!=="string"||Array.isArray(n))&&e!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(e==="string"&&Pn(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return sc(n,[],[],e)}function H$(n){const t={x:M(n,"x","sqrt","float32")};return W.runKernel(Li,t)}const en=j({sqrt_:H$});function j$(n){const e=M(n,"x","square"),t={};return W.runKernel("Square",{x:e},t)}const ft=j({square_:j$});function K$(n,e=null,t=!1){let s=M(n,"x","sum");s.dtype==="bool"&&(s=be(s,"int32"));const r={x:s},o={axis:e,keepDims:t};return W.runKernel(Wl,r,o)}const Se=j({sum_:K$});function q$(n,e="euclidean",t=null,s=!1){n=M(n,"x","norm");const r=ag(n,e,t);let o=r.shape;if(s){const i=Be(t,n.shape);o=At(r.shape,i)}return H(r,o)}function ag(n,e,t=null){if(n.rank===0)return on(n);if(n.rank!==1&&t===null)return ag(H(n,[-1]),e,t);if(n.rank===1||typeof t=="number"||Array.isArray(t)&&t.length===1){if(e===1)return Se(on(n),t);if(e===1/0)return Xn(on(n),t);if(e===-1/0)return lc(on(n),t);if(e==="euclidean"||e===2)return en(Se(Nr(on(n),et(2,"int32")),t));throw new Error(`Error in norm: invalid ord value: ${e}`)}if(Array.isArray(t)&&t.length===2){if(e===1)return Xn(Se(on(n),t[0]),t[1]-1);if(e===1/0)return Xn(Se(on(n),t[1]),t[0]);if(e===-1/0)return lc(Se(on(n),t[1]),t[0]);if(e==="fro"||e==="euclidean")return en(Se(ft(n),t));throw new Error(`Error in norm: invalid ord value: ${e}`)}throw new Error(`Error in norm: invalid axis: ${t}`)}const cc=j({norm_:q$});function X$(n,e=null,t=!1){return cc(n,"euclidean",e,t)}const Y$=j({euclideanNorm_:X$});function Z$(n){const t={x:M(n,"x","exp")};return W.runKernel(ui,t)}const ds=j({exp_:Z$});function J$(n,e=0){const t=M(n,"x","expandDims","string_or_numeric");_(e<=t.rank,()=>"Axis must be <= rank of the tensor");const s={input:t},r={dim:e};return W.runKernel(hl,s,r)}const xn=j({expandDims_:J$});function Q$(n){const t={x:M(n,"x","expm1")};return W.runKernel(hi,t)}const eI=j({expm1_:Q$});function tI(n,e){const t=M(n,"x","tile","string_or_numeric");_(t.rank===e.length,()=>`Error in transpose: rank of input ${t.rank} must match length of reps ${e}.`);const s={x:t},r={reps:e};return W.runKernel(Wi,s,r)}const Yn=j({tile_:tI});function nI(n,e,t,s="float32"){e==null&&(e=n);const r=Ve([n,e],s),o=n<=e?n:e;for(let a=0;a<o;++a)r.set(1,a,a);const i=H(r.toTensor(),[n,e]);if(t==null)return i;if(t.length===1)return Yn(xn(i,0),[t[0],1,1]);if(t.length===2)return Yn(xn(xn(i,0),0),[t[0],t[1],1,1]);if(t.length===3)return Yn(xn(xn(xn(i,0),0),0),[t[0],t[1],t[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${t.length}D.`)}const lg=j({eye_:nI});function sI(n){const t={x:M(n,"x","floor","float32")};return W.runKernel(di,t)}const uc=j({floor_:sI});function rI(n,e,t=0,s=0){const r=M(n,"x","gather"),o=M(e,"indices","gather","int32"),i={x:r,indices:o},a={axis:t,batchDims:s};return W.runKernel(pl,i,a)}const sd=j({gather_:rI});function oI(n,e){let t=M(n,"a","greater","string_or_numeric"),s=M(e,"b","greater","string_or_numeric");[t,s]=St(t,s),Oe(t.shape,s.shape);const r={a:t,b:s};return W.runKernel(fl,r)}const An=j({greater_:oI});function iI(n,e){let t=M(n,"a","greaterEqual","string_or_numeric"),s=M(e,"b","greaterEqual","string_or_numeric");[t,s]=St(t,s),Oe(t.shape,s.shape);const r={a:t,b:s};return W.runKernel(fi,r)}const Tr=j({greaterEqual_:iI});function aI(n){const t={input:M(n,"input","imag")};return W.runKernel(fh,t)}const rd=j({imag_:aI});function lI(n){const t={x:M(n,"x","isFinite")};return W.runKernel(gi,t)}const cI=j({isFinite_:lI});function uI(n){const t={x:M(n,"x","isInf")};return W.runKernel(xi,t)}const hI=j({isInf_:uI});function dI(n){const t={x:M(n,"x","isNaN")};return W.runKernel(bi,t)}const pI=j({isNaN_:dI});function fI(n,e=.2){const s={x:M(n,"x","leakyRelu")},r={alpha:e};return W.runKernel(ml,s,r)}const od=j({leakyRelu_:fI});function mI(n,e){let t=M(n,"a","less","string_or_numeric"),s=M(e,"b","less","string_or_numeric");[t,s]=St(t,s),Oe(t.shape,s.shape);const r={a:t,b:s};return W.runKernel(gl,r)}const hc=j({less_:mI});function gI(n,e){let t=M(n,"a","lessEqual","string_or_numeric"),s=M(e,"b","lessEqual","string_or_numeric");[t,s]=St(t,s),Oe(t.shape,s.shape);const r={a:t,b:s};return W.runKernel(xl,r)}const vo=j({lessEqual_:gI});function xI(n,e=5,t=1,s=1,r=.5){const o=M(n,"x","localResponseNormalization");_(o.rank===4||o.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${o.rank}.`),_(io(e),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${e}.`);let i=o,a=!1;o.rank===3&&(a=!0,i=H(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const l={x:i},c={depthRadius:e,bias:t,alpha:s,beta:r},u=W.runKernel(vl,l,c);return a?H(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const bI=j({localResponseNormalization_:xI});function yI(n){const t={x:M(n,"x","log","float32")};return W.runKernel(yi,t)}const ps=j({log_:yI});function wI(n){const t={x:M(n,"x","log1p")};return W.runKernel(wi,t)}const cg=j({log1p_:wI});function vI(n,e){_(Lu(n),()=>"The f passed in variableGrads(f) must be a function"),_(e==null||Array.isArray(e)&&e.every(c=>c instanceof tc),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const t=e!=null;if(!t){e=[];for(const c in W.registeredVariables)e.push(W.registeredVariables[c])}const s=t?e.filter(c=>!c.trainable):null,r=e.length;e=e.filter(c=>c.trainable),_(e.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${r} variables is trainable.`);const o=!0,{value:i,grads:a}=W.gradients(n,e,null,o);_(a.some(c=>c!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),_(i.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${i.rank} tensor`);const l={};return e.forEach((c,u)=>{a[u]!=null&&(l[c.name]=a[u])}),s?.forEach(c=>l[c.name]=null),{value:i,grads:l}}function Co(n){return W.customGrad(n)}function CI(n){const t={x:M(n,"x","neg")};return W.runKernel(Tl,t)}const Tt=j({neg_:CI});function kI(n){const t={x:M(n,"x","softplus")};return W.runKernel(Pi,t)}const Qi=j({softplus_:kI});function $I(n){const e=M(n,"x","logSigmoid");return Co(s=>({value:Tt(Qi(Tt(s))),gradFunc:i=>V(i,yo(Tt(s)))}))(e)}const II=j({logSigmoid_:$I});function SI(n,e){let t=M(n,"a","sub"),s=M(e,"b","sub");[t,s]=St(t,s);const r={a:t,b:s};return W.runKernel(zi,r)}const Re=j({sub_:SI});function NI(n,e=-1){const t=M(n,"logits","logSoftmax");if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${t.rank} and axis was ${e}`);return Co((r,o)=>{const a=Xn(r,e,!0),l=Re(r,a),c=Re(be(l,"float32"),ps(Se(ds(l),e,!0)));return o([c]),{value:c,gradFunc:(h,d)=>{const[f]=d,g=!0,x=ds(f);return Re(h,V(Se(h,e,g),x))}}})(t)}const ug=j({logSoftmax_:NI});function TI(n,e=null,t=!1){const s=M(n,"x","logSumExp"),r=Be(e,s.shape),o=Xn(s,r,!0),i=Re(s,o),a=ds(i),l=Se(a,r),c=ps(l),u=ue(H(o,c.shape),c);if(t){const h=At(u.shape,r);return H(u,h)}return u}const hg=j({logSumExp_:TI});function EI(n,e){const t=M(n,"a","logicalAnd","bool"),s=M(e,"b","logicalAnd","bool");Oe(t.shape,s.shape);const r={a:t,b:s};return W.runKernel(bl,r)}const _s=j({logicalAnd_:EI});function RI(n){const t={x:M(n,"x","logicalNot","bool")};return W.runKernel(yl,t)}const id=j({logicalNot_:RI});function DI(n,e){const t=M(n,"a","logicalOr","bool"),s=M(e,"b","logicalOr","bool");Oe(t.shape,s.shape);const r={a:t,b:s};return W.runKernel(wl,r)}const dg=j({logicalOr_:DI});function AI(n,e){const t=M(n,"a","logicalXor","bool"),s=M(e,"b","logicalXor","bool");return Oe(t.shape,s.shape),_s(dg(n,e),id(_s(n,e)))}const _I=j({logicalXor_:AI});function FI(n,e,t,s,r){const o=M(n,"x","maxPool"),i=1;let a=o,l=!1;o.rank===3&&(l=!0,a=H(o,[1,o.shape[0],o.shape[1],o.shape[2]])),_(a.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${a.rank}.`),_(Qt(t,i),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${t} and dilations '${i}'`),mn("maxPool",s,r);const c={x:a},u={filterSize:e,strides:t,pad:s,dimRoundingMode:r},h=W.runKernel(kl,c,u);return l?H(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const ad=j({maxPool_:FI});function OI(n,e=[1,1,1],t,s,r,o="NDHWC"){const i=M(n,"x","maxPool3d");let a=i,l=!1;i.rank===4&&(l=!0,a=H(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),_(a.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${a.rank}.`),_(o==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${o}`),mn("maxPool3d",s,r);const c={x:a},u={filterSize:e,strides:t,pad:s,dimRoundingMode:r,dataFormat:o},h=W.runKernel($l,c,u);return l?H(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const PI=j({maxPool3d_:OI});function LI(n,e){let t=M(n,"a","maximum"),s=M(e,"b","maximum");[t,s]=St(t,s),t.dtype==="bool"&&(t=be(t,"int32"),s=be(s,"int32")),Oe(t.shape,s.shape);const r={a:t,b:s};return W.runKernel(vi,r)}const Zs=j({maximum_:LI});function MI(n,e=null,t=!1){const r={x:M(n,"x","mean")},o={axis:e,keepDims:t};return W.runKernel(Il,r,o)}const _t=j({mean_:MI});function Gt(n,e="float32"){if(Es(n),e==="complex64"){const s=Gt(n,"float32"),r=Gt(n,"float32");return mo(s,r)}const t=Jt(ne(n),e);return W.makeTensor(t,n,e)}function Js(n,e="float32"){if(Es(n),e==="complex64"){const s=Js(n,"float32"),r=Gt(n,"float32");return mo(s,r)}const t=zu(ne(n),e);return W.makeTensor(t,n,e)}function zI(n,e){let t=M(n,"a","minimum"),s=M(e,"b","minimum");[t,s]=St(t,s),t.dtype==="bool"&&(t=be(t,"int32"),s=be(s,"int32")),Oe(t.shape,s.shape);const r={a:t,b:s};return W.runKernel(Ci,r)}const ea=j({minimum_:zI});function BI(n,e,t){_(t==="reflect"||t==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${t}.`);const s=M(n,"x","mirrorPad");if(s.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");_(e.length===s.rank,()=>`Padding doesn't match input. Must be ${s.rank}. Got ${e.length}.`);const r=t==="reflect"?1:0;for(let a=0;a<s.rank;a++)_(e[a].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),_(e[a][0]>=0&&e[a][0]<=s.shape[a]-r&&e[a][1]>=0&&e[a][1]<=s.shape[a]-r,()=>`Padding in dimension ${a} cannot be greater than or equal to ${s.shape[a]-r} or less than 0 for input of shape ${s.shape}`);const o={paddings:e,mode:t},i={x:s};return W.runKernel(Nl,i,o)}const VI=j({mirrorPad_:BI});function WI(n,e){let t=M(n,"a","mod"),s=M(e,"b","mod");[t,s]=St(t,s);const r={a:t,b:s};return W.runKernel(ki,r)}const UI=j({mod_:WI});function GI(n,e=null,t=!1){n=M(n,"x","moments");const s=Be(e,n.shape),r=_t(n,s,t);let o=r.shape;t||(o=At(r.shape,s));const i=ft(Re(be(n,"float32"),H(r,o))),a=_t(i,s,t);return{mean:r,variance:a}}const ld=j({moments_:GI});function HI(n,e){let t=M(n,"a","notEqual","string_or_numeric"),s=M(e,"b","notEqual","string_or_numeric");[t,s]=St(t,s),Oe(t.shape,s.shape);const r={a:t,b:s};return W.runKernel(El,r)}const dc=j({notEqual_:HI});function jI(n,e,t=1,s=0,r="int32"){if(e<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${e}`);const i={indices:M(n,"indices","oneHot","int32")},a={dtype:r,depth:e,onValue:t,offValue:s};return W.runKernel(Dl,i,a)}const pg=j({oneHot_:jI});function KI(n){const t={x:M(n,"x","onesLike")};return W.runKernel(Rl,t)}const Mn=j({onesLike_:KI});function qI(n,e,t=0){const s=M(n,"x","pad");if(s.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const r={paddings:e,constantValue:t},o={x:s};return W.runKernel(_l,o,r)}const cd=j({pad_:qI});function XI(n,e,t){const s=M(n,"x","spaceToBatchND");_(s.rank>=1+e.length,()=>`input rank ${s.rank} should be > than [blockShape] ${e.length}`),_(t.length===e.length,()=>`paddings.shape[0] ${t.length} must be equal to [blockShape] ${e.length}`),_(s.shape.reduce((i,a,l)=>l>0&&l<=e.length?i&&(a+t[l-1][0]+t[l-1][1])%e[l-1]===0:i,!0),()=>`input spatial dimensions ${s.shape.slice(1)} with paddings ${t.toString()} must be divisible by blockShapes ${e.toString()}`);const r={x:s},o={blockShape:e,paddings:t};return W.runKernel(Ul,r,o)}const ud=j({spaceToBatchND_:XI});function YI(n,e,t,s,r,o,i){r==null&&(r=[1,1]),o==null&&(o=1),s===0&&(s="valid");const a=M(n,"x","maxPool");let l=a,c=!1;a.rank===3&&(c=!0,l=H(a,[1,a.shape[0],a.shape[1],a.shape[2]])),_(Qt(o,r),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${o} and dilations '${r}'`);const u=Ln(l.shape,e,o,r,s),h=[u.dilationHeight,u.dilationWidth];let d;s==="same"?d=JI([u.filterHeight,u.filterWidth],h):d=[[0,0],[0,0]];const f=h[0]===1&&h[1]===1,[g,x]=ZI([u.inHeight,u.inWidth],h,d),b=f?s:"valid",y=f?l:ud(l,h,g),$=(t==="avg"?()=>Yh(y,e,o,b,i):()=>ad(y,e,o,b,i))(),C=f?$:Zh($,h,x);return c?H(C,[C.shape[1],C.shape[2],C.shape[3]]):C}function ZI(n,e,t){const s=t.map(u=>u[0]),r=t.map(u=>u[1]),o=n.concat(s,r),i=e.map((u,h)=>(u-o[h]%u)%u),a=r.map((u,h)=>u+i[h]),l=e.map((u,h)=>[s[h],a[h]]),c=e.map((u,h)=>[0,i[h]]);return[l,c]}function JI(n,e){const s=n.map((i,a)=>i+(i-1)*(e[a]-1)).map(i=>i-1),r=s.map(i=>Math.floor(i/2)),o=s.map((i,a)=>i-r[a]);return s.map((i,a)=>[r[a],o[a]])}const QI=j({pool_:YI});function eS(n,e){const t=M(n,"x","prelu"),s=M(e,"alpha","prelu"),r={x:t,alpha:s};return W.runKernel(Fl,r)}const hd=j({prelu_:eS});function tS(n,e=null,t=!1){let s=M(n,"x","prod");s.dtype==="bool"&&(s=be(s,"int32"));const r={x:s},o={axis:e,keepDims:t};return W.runKernel(Ol,r,o)}const nS=j({prod_:tS});var pc={exports:{}},sS=pc.exports,fg;function rS(){return fg||(fg=1,(function(n){(function(e,t,s){function r(l){var c=this,u=a();c.next=function(){var h=2091639*c.s0+c.c*23283064365386963e-26;return c.s0=c.s1,c.s1=c.s2,c.s2=h-(c.c=h|0)},c.c=1,c.s0=u(" "),c.s1=u(" "),c.s2=u(" "),c.s0-=u(l),c.s0<0&&(c.s0+=1),c.s1-=u(l),c.s1<0&&(c.s1+=1),c.s2-=u(l),c.s2<0&&(c.s2+=1),u=null}function o(l,c){return c.c=l.c,c.s0=l.s0,c.s1=l.s1,c.s2=l.s2,c}function i(l,c){var u=new r(l),h=c&&c.state,d=u.next;return d.int32=function(){return u.next()*4294967296|0},d.double=function(){return d()+(d()*2097152|0)*11102230246251565e-32},d.quick=d,h&&(typeof h=="object"&&o(h,u),d.state=function(){return o(u,{})}),d}function a(){var l=4022871197,c=function(u){u=String(u);for(var h=0;h<u.length;h++){l+=u.charCodeAt(h);var d=.02519603282416938*l;l=d>>>0,d-=l,d*=l,l=d>>>0,d-=l,l+=d*4294967296}return(l>>>0)*23283064365386963e-26};return c}t&&t.exports?t.exports=i:this.alea=i})(sS,n)})(pc)),pc.exports}var fc={exports:{}},oS=fc.exports,mg;function iS(){return mg||(mg=1,(function(n){(function(e,t,s){function r(a){var l=this,c="";l.x=0,l.y=0,l.z=0,l.w=0,l.next=function(){var h=l.x^l.x<<11;return l.x=l.y,l.y=l.z,l.z=l.w,l.w^=l.w>>>19^h^h>>>8},a===(a|0)?l.x=a:c+=a;for(var u=0;u<c.length+64;u++)l.x^=c.charCodeAt(u)|0,l.next()}function o(a,l){return l.x=a.x,l.y=a.y,l.z=a.z,l.w=a.w,l}function i(a,l){var c=new r(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,f=(c.next()>>>0)/4294967296,g=(d+f)/(1<<21);while(g===0);return g},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&o(u,c),h.state=function(){return o(c,{})}),h}t&&t.exports?t.exports=i:this.xor128=i})(oS,n)})(fc)),fc.exports}var mc={exports:{}},aS=mc.exports,gg;function lS(){return gg||(gg=1,(function(n){(function(e,t,s){function r(a){var l=this,c="";l.next=function(){var h=l.x^l.x>>>2;return l.x=l.y,l.y=l.z,l.z=l.w,l.w=l.v,(l.d=l.d+362437|0)+(l.v=l.v^l.v<<4^(h^h<<1))|0},l.x=0,l.y=0,l.z=0,l.w=0,l.v=0,a===(a|0)?l.x=a:c+=a;for(var u=0;u<c.length+64;u++)l.x^=c.charCodeAt(u)|0,u==c.length&&(l.d=l.x<<10^l.x>>>4),l.next()}function o(a,l){return l.x=a.x,l.y=a.y,l.z=a.z,l.w=a.w,l.v=a.v,l.d=a.d,l}function i(a,l){var c=new r(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,f=(c.next()>>>0)/4294967296,g=(d+f)/(1<<21);while(g===0);return g},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&o(u,c),h.state=function(){return o(c,{})}),h}t&&t.exports?t.exports=i:this.xorwow=i})(aS,n)})(mc)),mc.exports}var gc={exports:{}},cS=gc.exports,xg;function uS(){return xg||(xg=1,(function(n){(function(e,t,s){function r(a){var l=this;l.next=function(){var u=l.x,h=l.i,d,f;return d=u[h],d^=d>>>7,f=d^d<<24,d=u[h+1&7],f^=d^d>>>10,d=u[h+3&7],f^=d^d>>>3,d=u[h+4&7],f^=d^d<<7,d=u[h+7&7],d=d^d<<13,f^=d^d<<9,u[h]=f,l.i=h+1&7,f};function c(u,h){var d,f=[];if(h===(h|0))f[0]=h;else for(h=""+h,d=0;d<h.length;++d)f[d&7]=f[d&7]<<15^h.charCodeAt(d)+f[d+1&7]<<13;for(;f.length<8;)f.push(0);for(d=0;d<8&&f[d]===0;++d);for(d==8?f[7]=-1:f[d],u.x=f,u.i=0,d=256;d>0;--d)u.next()}c(l,a)}function o(a,l){return l.x=a.x.slice(),l.i=a.i,l}function i(a,l){a==null&&(a=+new Date);var c=new r(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,f=(c.next()>>>0)/4294967296,g=(d+f)/(1<<21);while(g===0);return g},h.int32=c.next,h.quick=h,u&&(u.x&&o(u,c),h.state=function(){return o(c,{})}),h}t&&t.exports?t.exports=i:this.xorshift7=i})(cS,n)})(gc)),gc.exports}var xc={exports:{}},hS=xc.exports,bg;function dS(){return bg||(bg=1,(function(n){(function(e,t,s){function r(a){var l=this;l.next=function(){var u=l.w,h=l.X,d=l.i,f,g;return l.w=u=u+1640531527|0,g=h[d+34&127],f=h[d=d+1&127],g^=g<<13,f^=f<<17,g^=g>>>15,f^=f>>>12,g=h[d]=g^f,l.i=d,g+(u^u>>>16)|0};function c(u,h){var d,f,g,x,b,y=[],w=128;for(h===(h|0)?(f=h,h=null):(h=h+"\0",f=0,w=Math.max(w,h.length)),g=0,x=-32;x<w;++x)h&&(f^=h.charCodeAt((x+32)%h.length)),x===0&&(b=f),f^=f<<10,f^=f>>>15,f^=f<<4,f^=f>>>13,x>=0&&(b=b+1640531527|0,d=y[x&127]^=f+b,g=d==0?g+1:0);for(g>=128&&(y[(h&&h.length||0)&127]=-1),g=127,x=512;x>0;--x)f=y[g+34&127],d=y[g=g+1&127],f^=f<<13,d^=d<<17,f^=f>>>15,d^=d>>>12,y[g]=f^d;u.w=b,u.X=y,u.i=g}c(l,a)}function o(a,l){return l.i=a.i,l.w=a.w,l.X=a.X.slice(),l}function i(a,l){a==null&&(a=+new Date);var c=new r(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,f=(c.next()>>>0)/4294967296,g=(d+f)/(1<<21);while(g===0);return g},h.int32=c.next,h.quick=h,u&&(u.X&&o(u,c),h.state=function(){return o(c,{})}),h}t&&t.exports?t.exports=i:this.xor4096=i})(hS,n)})(xc)),xc.exports}var bc={exports:{}},pS=bc.exports,yg;function fS(){return yg||(yg=1,(function(n){(function(e,t,s){function r(a){var l=this,c="";l.next=function(){var h=l.b,d=l.c,f=l.d,g=l.a;return h=h<<25^h>>>7^d,d=d-f|0,f=f<<24^f>>>8^g,g=g-h|0,l.b=h=h<<20^h>>>12^d,l.c=d=d-f|0,l.d=f<<16^d>>>16^g,l.a=g-h|0},l.a=0,l.b=0,l.c=-1640531527,l.d=1367130551,a===Math.floor(a)?(l.a=a/4294967296|0,l.b=a|0):c+=a;for(var u=0;u<c.length+20;u++)l.b^=c.charCodeAt(u)|0,l.next()}function o(a,l){return l.a=a.a,l.b=a.b,l.c=a.c,l.d=a.d,l}function i(a,l){var c=new r(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,f=(c.next()>>>0)/4294967296,g=(d+f)/(1<<21);while(g===0);return g},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&o(u,c),h.state=function(){return o(c,{})}),h}t&&t.exports?t.exports=i:this.tychei=i})(pS,n)})(bc)),bc.exports}var yc={exports:{}},mS=dC(Ka),gS=yc.exports,wg;function xS(){return wg||(wg=1,(function(n){(function(e,t,s){var r=256,o=6,i=52,a="random",l=s.pow(r,o),c=s.pow(2,i),u=c*2,h=r-1,d;function f(C,N,E){var F=[];N=N==!0?{entropy:!0}:N||{};var O=y(b(N.entropy?[C,$(t)]:C??w(),3),F),A=new g(F),D=function(){for(var S=A.g(o),z=l,U=0;S<c;)S=(S+U)*r,z*=r,U=A.g(1);for(;S>=u;)S/=2,z/=2,U>>>=1;return(S+U)/z};return D.int32=function(){return A.g(4)|0},D.quick=function(){return A.g(4)/4294967296},D.double=D,y($(A.S),t),(N.pass||E||function(S,z,U,G){return G&&(G.S&&x(G,A),S.state=function(){return x(A,{})}),U?(s[a]=S,z):S})(D,O,"global"in N?N.global:this==s,N.state)}function g(C){var N,E=C.length,F=this,O=0,A=F.i=F.j=0,D=F.S=[];for(E||(C=[E++]);O<r;)D[O]=O++;for(O=0;O<r;O++)D[O]=D[A=h&A+C[O%E]+(N=D[O])],D[A]=N;(F.g=function(S){for(var z,U=0,G=F.i,K=F.j,X=F.S;S--;)z=X[G=h&G+1],U=U*r+X[h&(X[G]=X[K=h&K+z])+(X[K]=z)];return F.i=G,F.j=K,U})(r)}function x(C,N){return N.i=C.i,N.j=C.j,N.S=C.S.slice(),N}function b(C,N){var E=[],F=typeof C,O;if(N&&F=="object")for(O in C)try{E.push(b(C[O],N-1))}catch{}return E.length?E:F=="string"?C:C+"\0"}function y(C,N){for(var E=C+"",F,O=0;O<E.length;)N[h&O]=h&(F^=N[h&O]*19)+E.charCodeAt(O++);return $(N)}function w(){try{var C;return d&&(C=d.randomBytes)?C=C(r):(C=new Uint8Array(r),(e.crypto||e.msCrypto).getRandomValues(C)),$(C)}catch{var N=e.navigator,E=N&&N.plugins;return[+new Date,e,E,e.screen,$(t)]}}function $(C){return String.fromCharCode.apply(0,C)}if(y(s.random(),t),n.exports){n.exports=f;try{d=mS}catch{}}else s["seed"+a]=f})(typeof self<"u"?self:gS,[],Math)})(yc)),yc.exports}var dd,vg;function bS(){if(vg)return dd;vg=1;var n=rS(),e=iS(),t=lS(),s=uS(),r=dS(),o=fS(),i=xS();return i.alea=n,i.xor128=e,i.xorwow=t,i.xorshift7=s,i.xor4096=r,i.tychei=o,dd=i,dd}var pd=bS();class Cg{constructor(e,t,s,r,o){this.mean=e,this.stdDev=t,this.dtype=s,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const i=o||Math.random();this.random=pd.alea(i.toString())}nextValue(){if(!isNaN(this.nextVal)){const r=this.nextVal;return this.nextVal=NaN,r}let e,t,s=!1;for(;!s;){let r,o,i;do r=2*this.random()-1,o=2*this.random()-1,i=r*r+o*o;while(i>=1||i===0);const a=Math.sqrt(-2*Math.log(i)/i);e=this.mean+this.stdDev*r*a,t=this.mean+this.stdDev*o*a,(!this.truncated||this.isValidTruncated(e))&&(s=!0)}return(!this.truncated||this.isValidTruncated(t))&&(this.nextVal=this.convertValue(t)),this.convertValue(e)}convertValue(e){return this.dtype==null||this.dtype==="float32"?e:Math.round(e)}isValidTruncated(e){return e<=this.upper&&e>=this.lower}}class yS{constructor(e=0,t=1,s,r){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=e,this.range=t-e,this.dtype=s,r==null&&(r=Math.random()),typeof r=="number"&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${e} - ${t} <= 1 and dtype is not float`);this.random=pd.alea(r)}convertValue(e){return this.canReturnFloat()?e:Math.round(e)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}function wS(n,e=0,t=1,s,r){if(Es(n),s!=null&&s==="bool")throw new Error(`Unsupported data type ${s}`);const o=new Cg(e,t,s,!1,r),i=Ve(n,s);for(let a=0;a<i.values.length;a++)i.values[a]=o.nextValue();return i.toTensor()}const vS=j({randomNormal_:wS});function CS(n,e=0,t=1,s="float32",r){Es(n);const o=Ve(n,s),i=new yS(e,t,null,r);for(let a=0;a<o.values.length;a++)o.values[a]=i.nextValue();return o.toTensor()}const ta=j({randomUniform_:CS});function na(n,e,t=1,s="float32"){if(t===0)throw new Error("Cannot have a step of zero");const r={start:n,stop:e,step:t,dtype:s};return W.runKernel(vh,{},r)}function kS(n){const t={input:M(n,"input","real")};return W.runKernel(Ch,t)}const wc=j({real_:kS});function $S(n){const t={x:M(n,"x","reciprocal")};return W.runKernel(Si,t)}const IS=j({reciprocal_:$S});function SS(n){const t={x:M(n,"x","relu")};return W.runKernel(Ni,t)}const Er=j({relu_:SS});function NS(n){const t={x:M(n,"x","relu6")};return W.runKernel(Ti,t)}const kg=j({relu6_:NS});function TS(n,e){const s={x:M(n,"x","reverse")},r={dims:e};return W.runKernel(zl,s,r)}const Rr=j({reverse_:TS});function ES(n){const t={x:M(n,"x","round")};return W.runKernel(Ei,t)}const $g=j({round_:ES});function RS(n){const t={x:M(n,"x","rsqrt","float32")};return W.runKernel(Ri,t)}const Ig=j({rsqrt_:RS});function DS(n){const t={x:M(n,"x","selu")};return W.runKernel(Di,t)}const Sg=j({selu_:DS});function AS(n,e,t,s,r,o=[1,1],i="NHWC"){const a=M(n,"x","separableConv2d"),l=M(e,"depthwiseFilter","separableConv2d"),c=M(t,"pointwiseFilter","separableConv2d");let u=a,h=!1;if(a.rank===3&&(h=!0,u=H(a,[1,a.shape[0],a.shape[1],a.shape[2]])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");_(u.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${u.rank}.`),_(l.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${l.rank}.`),_(c.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${l.rank}.`),_(c.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${c.shape[0]}.`),_(c.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${c.shape[1]}.`);const d=l.shape[2],f=l.shape[3];_(c.shape[2]===d*f,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${d*f}, but got ${c.shape[2]}.`);const g=td(u,l,s,r,i,o),b=Sr(g,c,1,"valid",i);return h?H(b,[b.shape[1],b.shape[2],b.shape[3]]):b}const Ng=j({separableConv2d_:AS});function _S(n){const t={x:M(n,"x","sign")};return W.runKernel(Fi,t)}const FS=j({sign_:_S});function OS(n){const t={x:M(n,"x","sin","float32")};return W.runKernel(Ai,t)}const Tg=j({sin_:OS});function PS(n){const t={x:M(n,"x","sinh")};return W.runKernel(_i,t)}const Eg=j({sinh_:PS});function LS(n,e,t){const s=M(n,"x","slice1d");return _(s.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${s.rank} tensor`),dt(s,[e],[t])}const fd=j({slice1d_:LS});function MS(n,e,t){const s=M(n,"x","slice2d");return _(s.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${s.rank} tensor`),dt(s,e,t)}const Rg=j({slice2d_:MS});function zS(n,e,t){const s=M(n,"x","slice3d");return _(s.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${s.rank} tensor`),dt(s,e,t)}const md=j({slice3d_:zS});function BS(n,e,t){const s=M(n,"x","slice4d");return _(s.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${s.rank} tensor`),dt(s,e,t)}const vc=j({slice4d_:BS});function VS(n,e=-1){const t=M(n,"logits","softmax","float32");if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${t.rank} and dim was ${e}`);const s={logits:t},r={dim:e};return W.runKernel(Hl,s,r)}const gd=j({softmax_:VS});function WS(n){_(n.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${n.dtype}.`);const e={input:n};return W.runKernel(uh,e)}const Dg=j({fft_:WS});function US(n){_(n.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${n.dtype}.`);const e={input:n};return W.runKernel(ph,e)}const xd=j({ifft_:US});function GS(n){const e=n.shape[n.shape.length-1],t=n.size/e;let s;if(e<=2){const r=H(n,[t,e]);s=xd(r)}else{const r=[t,2*(e-1)],o=H(wc(n),[t,e]),i=H(rd(n),[t,e]),a=Rr(dt(o,[0,1],[t,e-2]),1),l=V(Rr(dt(i,[0,1],[t,e-2]),1),et(-1)),c=gn([o,a],1),u=gn([i,l],1),h=H(mo(c,u),[r[0],r[1]]);s=xd(h)}if(s=wc(s),n.rank===3&&n.shape[0]!==0){const r=s,o=n.shape[0];s=H(s,[o,s.shape[0]/o,s.shape[1]]),r.dispose()}return s}const HS=j({irfft_:GS});function jS(n,e,t=0){const r={x:M(n,"x","split")},o={numOrSizeSplits:e,axis:t};return W.runKernel(Gl,r,o)}const _n=j({split_:jS});function KS(n,e){_(n.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${n.dtype}`);let t=n.shape[n.shape.length-1];const s=n.size/t;let r;if(e!=null&&e<t){const g=n.shape.map(b=>0),x=n.shape.map(b=>b);x[n.shape.length-1]=e,r=dt(n,g,x),t=e}else if(e!=null&&e>t){const g=n.shape.map(x=>x);g[n.shape.length-1]=e-t,r=gn([n,Gt(g)],n.shape.length-1),t=e}else r=n;const o=je(r),i=H(mo(r,o),[s,t]),a=Dg(i),l=Math.floor(t/2)+1,c=wc(a),u=rd(a),h=_n(c,[l,t-l],c.shape.length-1),d=_n(u,[l,t-l],u.shape.length-1),f=r.shape.slice();return f[r.shape.length-1]=l,H(mo(h[0],d[0]),f)}const qS=j({rfft_:KS});function XS(n,e){let t=M(n,"a","squaredDifference"),s=M(e,"b","squaredDifference");[t,s]=St(t,s),Oe(t.shape,s.shape);const r={a:t,b:s},o={};return W.runKernel(Mi,r,o)}const YS=j({squaredDifference_:XS});function ZS(n,e){const t=M(n,"x","squeeze","string_or_numeric");return H(t,Us(t.shape,e).newShape)}const sa=j({squeeze_:ZS});function JS(n,e=0){const t=Pm(n,"tensors","stack","string_or_numeric");_(t.length>=1,()=>"Pass at least one tensor to tf.stack"),t.length>0&&_(e<=t[0].rank,()=>"Axis must be <= rank of the tensor");const s=t,r={axis:e};return W.runKernel(Al,s,r)}const Fs=j({stack_:JS});function QS(n,e=0){const s={x:M(n,"x","step")},r={alpha:e};return W.runKernel(Ui,s,r)}const ra=j({step_:QS});function e2(n,e,t,s,r=0,o=0,i=0,a=0,l=0){const u={x:M(n,"x","stridedSlice","string_or_numeric")},h={begin:e,end:t,strides:s,beginMask:r,endMask:o,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:l};return W.runKernel(Nh,u,h)}const t2=j({stridedSlice_:e2});function n2(n){const t={x:M(n,"x","tan","float32")};return W.runKernel(Bi,t)}const s2=j({tan_:n2});function kn(n,e){Of(n);const t=nc(n,e);if(t.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return sc(n,null,t,e)}function bd(n,e,t){if(Of(n),e!=null&&e.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const s=nc(n,t);if(s.length!==2&&s.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(s.length===1&&e==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return sc(n,e,s,t)}function Dr(n,e,t){const s=e.shape.length,r=s>1?e.shape[s-1]:1,o=t.length;let i=1;for(let h=r;h<o;++h)i*=t[h];const a=r<1?1:r,l=ne(e.shape)/a,c=[...Ie(t.slice(0,r)),1],u=ne(t);return{sliceRank:r,numUpdates:l,sliceSize:i,strides:c,outputSize:u}}function r2(n,e=1,t=!0){const s=M(n,"x","topk");if(s.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const r=s.shape[s.shape.length-1];if(e<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${e}`);if(e>r)throw new Error(`'k' passed to topk() must be <= the last dimension (${r}) but got ${e}`);const o={x:s},i={k:e,sorted:t},[a,l]=W.runKernel(Th,o,i);return{values:a,indices:l}}const o2=j({topk_:r2});function i2(n,e=0,t=1,s,r){if(Es(n),s!=null&&s==="bool")throw new Error("Unsupported data type $ { dtype }");const o=new Cg(e,t,s,!0,r),i=Ve(n,s);for(let a=0;a<i.values.length;a++)i.values[a]=o.nextValue();return i.toTensor()}const Ag=j({truncatedNormal_:i2});function a2(n,e=0){const t=M(n,"x","unique","string_or_numeric");_(t.rank>0,()=>"The input tensor must be at least 1D");const s={x:t},r={axis:e},[o,i]=W.runKernel(Rh,s,r);return{values:o,indices:i}}const l2=j({unique_:a2});function c2(n,e,t){const s=M(n,"x","unsortedSegmentSum"),r=M(e,"segmentIds","unsortedSegmentSum","int32");_(io(t),()=>"numSegments must be of dtype int");const o={x:s,segmentIds:r},i={numSegments:t};return W.runKernel(Kl,o,i)}const _g=j({unsortedSegmentSum_:c2});function u2(n,e=0){const t=M(n,"x","unstack","string_or_numeric");_(e>=-t.shape.length&&e<t.shape.length,()=>`Axis = ${e} is not in [-${t.shape.length}, ${t.shape.length})`);const s={value:t},r={axis:e};return W.runKernel(jl,s,r)}const Ar=j({unstack_:u2});function h2(n,e=!0,t,s){return W.makeVariable(n,e,t,s)}function Fg(n,e){const t=[];for(let o=0;o<e.length;o++)e[o]&&t.push(o);const s=Ve(n,"int32"),r=Ve([t.length,n.length],"int32");for(let o=0;o<t.length;o++){const i=s.indexToLoc(t[o]),a=o*n.length;r.values.set(i,a)}return r.toTensor()}function d2(n,e,t){const s=M(n,"x","transpose");if(e==null&&(e=s.shape.map((i,a)=>a).reverse()),_(s.rank===e.length,()=>`Error in transpose: rank of input ${s.rank} must match length of perm ${e}.`),e.forEach(i=>{_(i>=0&&i<s.rank,()=>`All entries in 'perm' must be between 0 and ${s.rank-1} but got ${e}`)}),s.rank<=1)return s.clone();const r={x:s},o={perm:e};return s.dtype==="complex64"?Y(()=>{let i=wc(s),a=rd(s);return i=W.runKernel(ho,{x:i},o),a=W.runKernel(ho,{x:a},o),t&&(a=Tt(a)),mo(i,a)}):W.runKernel(ho,r,o)}const Ke=j({transpose_:d2});function p2(n,e){if(e==null)return n.shape.slice();if(Je(n.shape,e))return e;if(n.shape.length===e.length){const t=[];for(let s=0;s<n.shape.length;s++)e[s]==null&&n.shape[s]!=null?t.push(n.shape[s]):t.push(e[s]);return t}return e}function f2(n,e,t,s){const r=M(n,"x","dropout");if(_(r.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${r.dtype} tensor instead.`),_(e>=0&&e<1,()=>`rate must be a float in the range [0, 1), but got ${e}.`),e===0)return n instanceof Ft?r.clone():r;const o=p2(r,t),i=1-e,a=Ne(uc(ue(ta(o,0,1,"float32",s),i)),i);return V(r,a)}const m2=j({dropout_:f2});function g2(n,e,t,s,r,o="NHWC",i){let a=n;n.rank===3&&(a=H(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let l=e;l.rank===3&&(l=H(e,[1,e.shape[0],e.shape[1],e.shape[2]])),_(a.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${a.shape}.`),_(l.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${l.shape}.`),_(t.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${t}.`);const c=o==="NHWC"?a.shape[3]:a.shape[1],u=o==="NHWC"?l.shape[3]:l.shape[1];_(c===t[2],()=>`Error in conv2dDerFilter: depth of input ${c}) must match input depth in filter (${t[2]}.`),_(u===t[3],()=>`Error in conv2dDerFilter: depth of dy (${u}) must match output depth for filter (${t[3]}).`),mn("conv2dDerFilter",r,i);const h={x:a,dy:l},d={strides:s,pad:r,dataFormat:o,dimRoundingMode:i,filterShape:t};return W.runKernel(Zu,h,d)}const yd=j({conv2DBackpropFilter_:g2});function wd(n,e,t){if(t==null||t==="linear")return n;if(t==="relu")return V(n,ra(e));throw new Error(`Cannot compute gradient for fused activation ${t}.`)}function vd(n,e){let t=e;const s=Ot(n.shape,e.shape);return s.length>0&&(t=Se(t,s)),H(t,n.shape)}function Cd(n,e,t,s){if(e==="linear")return n;if(e==="relu")return Er(n);if(e==="elu")return ac(n);if(e==="relu6")return kg(n);if(e==="prelu")return hd(n,t);if(e==="leakyrelu")return od(n,s);if(e==="sigmoid")return yo(n);throw new Error(`Unknown fused activation ${e}.`)}const kd=(n,e)=>!(n>0)||e==="linear";function x2({x:n,filter:e,strides:t,pad:s,dataFormat:r="NHWC",dilations:o=[1,1],dimRoundingMode:i,bias:a,activation:l="linear",preluActivationWeights:c,leakyreluAlpha:u}){if(l=l||"linear",kd(W.state.gradientDepth,l)===!1){_(r==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${r} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let E=Sr(n,e,t,s,r,o,i);return a!=null&&(E=ue(E,a)),Cd(E,l,c,u)}const h=M(n,"x","conv2d","float32"),d=M(e,"filter","conv2d","float32");let f=h,g=!1;h.rank===3&&(g=!0,f=H(h,[1,h.shape[0],h.shape[1],h.shape[2]])),_(f.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${f.rank}.`),_(d.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${d.rank}.`),mn("fused conv2d",s,i);const x=r==="NHWC"?f.shape[3]:f.shape[1];_(d.shape[2]===x,()=>`Error in conv2d: depth of input (${x}) must match input depth for filter ${d.shape[2]}.`),_(Qt(t,o),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${t} and dilations '${o}'`);const b=Kt(f.shape,d.shape,t,o,s,i);let y;a!=null&&(y=M(a,"bias","fused conv2d"),[y]=St(y,h),r==="NHWC"?Oe(b.outShape,y.shape):(_(y.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${y.shape.length}.`),_(y.shape.length===0||y.shape[0]===b.outChannels||y.shape[0]===1,()=>`Error in fused conv2d: bias shape (${y.shape}) is not compatible with the number of output channels (${b.outChannels})`)));let w;if(c!=null){const E=c.shape;if(_(E.length<=1||E.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${E.length}.`),E.length===1)_(E[0]===1||E[0]===b.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${E}) is not compatible with the number of output channels (${b.outChannels}).`);else if(E.length===3)try{Oe(E,b.outShape)}catch{const O=`Error in fused conv2d: PReLU activation weights (${E}) is not compatible with the output shape of the conv2d (${b.outShape}).`;throw Error(O)}w=M(c,"prelu weights","fused conv2d")}const $=(E,F)=>{_(r==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${r} but only NHWC is currently supported.`);const[O,A,D,S]=F,z=wd(E,D,l);_($r(o),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${o}'`);const U=Jh(A.shape,z,O,t,s),G=yd(A,z,O.shape,t,s),K=[U,G];if(S!=null){const X=vd(S,z);K.push(X)}return K},C={x:f,filter:d,bias:y,preluActivationWeights:w},N={strides:t,pad:s,dataFormat:r,dilations:o,dimRoundingMode:i,activation:l,leakyreluAlpha:u};return a==null?Co((F,O,A)=>{let D=W.runKernel(Yl,C,N);return A([O,F,D]),g&&(D=H(D,[D.shape[1],D.shape[2],D.shape[3]])),{value:D,gradFunc:$}})(f,d):Co((F,O,A,D)=>{let S=W.runKernel(Yl,C,N);return D([O,F,S,A]),g&&(S=H(S,[S.shape[1],S.shape[2],S.shape[3]])),{value:S,gradFunc:$}})(f,d,y)}const b2=j({fusedConv2d_:x2});function y2(n,e,t,s,r,o=[1,1],i){let a=n;n.rank===3&&(a=H(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let l=e;l.rank===3&&(l=H(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const c={x:a,dy:l},u={strides:s,pad:r,dimRoundingMode:i,dilations:o,filterShape:t};return W.runKernel(rh,c,u)}const w2=j({depthwiseConv2dNativeBackpropFilter_:y2});function v2(n,e,t,s,r,o=[1,1],i){let a=e,l=!1;e.rank===3&&(l=!0,a=H(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const c={dy:a,filter:t},u={strides:s,pad:r,dimRoundingMode:i,dilations:o,inputShape:n},h=W.runKernel(oh,c,u);return l?H(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const C2=j({depthwiseConv2dNativeBackpropInput_:v2});function k2({a:n,b:e,transposeA:t=!1,transposeB:s=!1,bias:r,activation:o="linear",preluActivationWeights:i,leakyreluAlpha:a=.2}){if(kd(W.state.gradientDepth,o)===!1){let S=Qe(n,e,t,s);return r!=null&&(S=ue(S,r)),Cd(S,o,i,a)}let l=M(n,"a","fused matMul"),c=M(e,"b","fused matMul");[l,c]=St(l,c);const u=t?l.shape[l.rank-2]:l.shape[l.rank-1],h=s?c.shape[c.rank-1]:c.shape[c.rank-2],d=t?l.shape[l.rank-1]:l.shape[l.rank-2],f=s?c.shape[c.rank-2]:c.shape[c.rank-1],g=l.shape.slice(0,-2),x=c.shape.slice(0,-2),b=ne(g),y=ne(x);_(u===h,()=>`Error in fused matMul: inner shapes (${u}) and (${h}) of Tensors with shapes ${l.shape} and ${c.shape} and transposeA=${t} and transposeB=${s} must match.`);const $=Oe(l.shape.slice(0,-2),c.shape.slice(0,-2)).concat([d,f]),C=t?H(l,[b,u,d]):H(l,[b,d,u]),N=s?H(c,[y,f,h]):H(c,[y,h,f]);let E;r!=null&&(E=M(r,"bias","fused matMul"),[E]=St(E,l),Oe($,E.shape));let F;i!=null&&(F=M(i,"prelu weights","fused matMul"));const O=(S,z)=>{const[U,G,K,X]=z,Q=wd(H(S,K.shape),K,o);let Z,te;if(!t&&!s?(Z=Qe(Q,G,!1,!0),te=Qe(U,Q,!0,!1)):!t&&s?(Z=Qe(Q,G,!1,!1),te=Qe(Q,U,!0,!1)):t&&!s?(Z=Qe(G,Q,!1,!0),te=Qe(U,Q,!1,!1)):(Z=Qe(G,Q,!0,!0),te=Qe(Q,U,!0,!0)),r!=null){const re=vd(X,Q);return[Z,te,re]}else return[Z,te]},A={a:C,b:N,bias:E,preluActivationWeights:F},D={transposeA:t,transposeB:s,activation:o,leakyreluAlpha:a};return r==null?Co((z,U,G)=>{const K=W.runKernel(Xl,A,D);return G([z,U,K]),{value:H(K,$),gradFunc:O}})(C,N):Co((z,U,G,K)=>{const X=W.runKernel(Xl,A,D);return K([z,U,X,G]),{value:H(X,$),gradFunc:O}})(C,N,E)}const Og=j({fusedMatMul_:k2});function $2(n,e,t,s,r="bilinear",o=0){const i=M(n,"image","cropAndResize"),a=M(e,"boxes","cropAndResize","float32"),l=M(t,"boxInd","cropAndResize","int32"),c=a.shape[0];_(i.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${i.rank}.`),_(a.rank===2&&a.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${c},4] but had shape ${a.shape}.`),_(l.rank===1&&l.shape[0]===c,()=>`Error in cropAndResize: boxInd must be have size [${c}] but had shape ${a.shape}.`),_(s.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${s.length}.`),_(s[0]>=1&&s[1]>=1,()=>`cropSize must be atleast [1,1], but was ${s}`),_(r==="bilinear"||r==="nearest",()=>`method must be bilinear or nearest, but was ${r}`);const u={image:i,boxes:a,boxInd:l},h={method:r,extrapolationValue:o,cropSize:s};return W.runKernel(th,u,h)}const I2=j({cropAndResize_:$2});function S2(n){const e=M(n,"image","flipLeftRight","float32");_(e.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${e.rank}.`);const t={image:e};return W.runKernel(dh,t,{})}const N2=j({flipLeftRight_:S2});function T2(n){const e=M(n,"image","grayscaleToRGB"),t=e.rank-1,s=e.shape[t];_(e.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${e.rank}.`),_(s===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${s}.`);const r=new Array(e.rank);return r.fill(1,0,t),r[t]=3,Yn(e,r)}const E2=j({grayscaleToRGB_:T2});function R2(n){const e=M(n,"image","RGBToGrayscale"),t=e.rank-1,s=e.shape[t];_(e.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${e.rank}.`),_(s===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${s}.`);const r=e.dtype,o=be(e,"float32"),i=kn([.2989,.587,.114]);let a;switch(e.rank){case 2:a=Ji("ij,j->i",o,i);break;case 3:a=Ji("ijk,k->ij",o,i);break;case 4:a=Ji("ijkl,l->ijk",o,i);break;case 5:a=Ji("ijklm,m->ijkl",o,i);break;case 6:a=Ji("ijklmn,n->ijklm",o,i);break;default:throw new Error("Not a valid tensor rank.")}return a=xn(a,-1),be(a,r)}const D2=j({rgbToGrayscale_:R2});function A2(n,e,t=0,s=.5){const r=M(n,"image","rotateWithOffset","float32");_(r.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${r.rank}.`);const o={image:r},i={radians:e,fillValue:t,center:s};return W.runKernel(Dh,o,i)}const _2=j({rotateWithOffset_:A2});function ko(n,e,t,s,r,o){s==null&&(s=.5),r==null&&(r=Number.NEGATIVE_INFINITY),o==null&&(o=0);const i=n.shape[0];return t=Math.min(t,i),_(0<=s&&s<=1,()=>`iouThreshold must be in [0, 1], but was '${s}'`),_(n.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${n.rank}'`),_(n.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${n.shape[1]}`),_(e.rank===1,()=>"scores must be a 1D tensor"),_(e.shape[0]===i,()=>`scores has incompatible shape with boxes. Expected ${i}, but was ${e.shape[0]}`),_(0<=o&&o<=1,()=>`softNmsSigma must be in [0, 1], but was '${o}'`),{maxOutputSize:t,iouThreshold:s,scoreThreshold:r,softNmsSigma:o}}function F2(n,e,t,s=.5,r=Number.NEGATIVE_INFINITY){const o=M(n,"boxes","nonMaxSuppression","float32"),i=M(e,"scores","nonMaxSuppression","float32"),a=ko(o,i,t,s,r);t=a.maxOutputSize,s=a.iouThreshold,r=a.scoreThreshold;const l={maxOutputSize:t,iouThreshold:s,scoreThreshold:r};return W.runKernel(bh,{boxes:o,scores:i},l)}const O2=j({nonMaxSuppression_:F2});function P2(n,e,t){const s=L2(n,e,t),r=s<0?-(s+1):s;n.splice(r,0,e)}function L2(n,e,t){return z2(n,e,t||M2)}function M2(n,e){return n>e?1:n<e?-1:0}function z2(n,e,t){let s=0,r=n.length,o=0,i=!1;for(;s<r;){o=s+(r-s>>>1);const a=t(e,n[o]);a>0?s=o+1:(r=o,i=!a)}return i?s:-s-1}function $d(n,e,t,s,r){return Nd(n,e,t,s,r,0)}function Id(n,e,t,s,r,o){return Nd(n,e,t,s,r,0,!1,o,!0)}function Sd(n,e,t,s,r,o){return Nd(n,e,t,s,r,o,!0)}function Nd(n,e,t,s,r,o,i=!1,a=!1,l=!1){const c=[];for(let b=0;b<e.length;b++)e[b]>r&&c.push({score:e[b],boxIndex:b,suppressBeginIndex:0});c.sort(Pg);const u=o>0?-.5/o:0,h=[],d=[];for(;h.length<t&&c.length>0;){const b=c.pop(),{score:y,boxIndex:w,suppressBeginIndex:$}=b;if(y<r)break;let C=!1;for(let N=h.length-1;N>=$;--N){const E=B2(n,w,h[N]);if(E>=s){C=!0;break}if(b.score=b.score*V2(s,u,E),b.score<=r)break}b.suppressBeginIndex=h.length,C||(b.score===y?(h.push(w),d.push(b.score)):b.score>r&&P2(c,b,Pg))}const f=h.length,g=t-f;a&&g>0&&(h.push(...new Array(g).fill(0)),d.push(...new Array(g).fill(0)));const x={selectedIndices:h};return i&&(x.selectedScores=d),l&&(x.validOutputs=f),x}function B2(n,e,t){const s=n.subarray(e*4,e*4+4),r=n.subarray(t*4,t*4+4),o=Math.min(s[0],s[2]),i=Math.min(s[1],s[3]),a=Math.max(s[0],s[2]),l=Math.max(s[1],s[3]),c=Math.min(r[0],r[2]),u=Math.min(r[1],r[3]),h=Math.max(r[0],r[2]),d=Math.max(r[1],r[3]),f=(a-o)*(l-i),g=(h-c)*(d-u);if(f<=0||g<=0)return 0;const x=Math.max(o,c),b=Math.max(i,u),y=Math.min(a,h),w=Math.min(l,d),$=Math.max(y-x,0)*Math.max(w-b,0);return $/(f+g-$)}function V2(n,e,t){const s=Math.exp(e*t*t);return t<=n?s:0}function Pg(n,e){return n.score-e.score||n.score===e.score&&e.boxIndex-n.boxIndex}async function W2(n,e,t,s=.5,r=Number.NEGATIVE_INFINITY){const o=M(n,"boxes","nonMaxSuppressionAsync"),i=M(e,"scores","nonMaxSuppressionAsync"),a=ko(o,i,t,s,r);t=a.maxOutputSize,s=a.iouThreshold,r=a.scoreThreshold;const l=await Promise.all([o.data(),i.data()]),c=l[0],u=l[1],{selectedIndices:h}=$d(c,u,t,s,r);return o!==n&&o.dispose(),i!==e&&i.dispose(),kn(h,"int32")}const U2=W2;function G2(n,e,t,s=.5,r=Number.NEGATIVE_INFINITY,o=0){const i=M(n,"boxes","nonMaxSuppression"),a=M(e,"scores","nonMaxSuppression"),l=ko(i,a,t,s,r,o);t=l.maxOutputSize,s=l.iouThreshold,r=l.scoreThreshold,o=l.softNmsSigma;const c={boxes:i,scores:a},u={maxOutputSize:t,iouThreshold:s,scoreThreshold:r,softNmsSigma:o},h=W.runKernel(wh,c,u);return{selectedIndices:h[0],selectedScores:h[1]}}const H2=j({nonMaxSuppressionWithScore_:G2});async function j2(n,e,t,s=.5,r=Number.NEGATIVE_INFINITY,o=0){const i=M(n,"boxes","nonMaxSuppressionAsync"),a=M(e,"scores","nonMaxSuppressionAsync"),l=ko(i,a,t,s,r,o);t=l.maxOutputSize,s=l.iouThreshold,r=l.scoreThreshold,o=l.softNmsSigma;const c=await Promise.all([i.data(),a.data()]),u=c[0],h=c[1],{selectedIndices:d,selectedScores:f}=Sd(u,h,t,s,r,o);return i!==n&&i.dispose(),a!==e&&a.dispose(),{selectedIndices:kn(d,"int32"),selectedScores:kn(f)}}const K2=j2;function q2(n,e,t,s=.5,r=Number.NEGATIVE_INFINITY,o=!1){const i=M(n,"boxes","nonMaxSuppression"),a=M(e,"scores","nonMaxSuppression"),l=ko(i,a,t,s,r,null),c=l.maxOutputSize,u=l.iouThreshold,h=l.scoreThreshold,d={boxes:i,scores:a},f={maxOutputSize:c,iouThreshold:u,scoreThreshold:h,padToMaxOutputSize:o},g=W.runKernel(yh,d,f);return{selectedIndices:g[0],validOutputs:g[1]}}const X2=j({nonMaxSuppressionPadded_:q2});async function Y2(n,e,t,s=.5,r=Number.NEGATIVE_INFINITY,o=!1){const i=M(n,"boxes","nonMaxSuppressionAsync"),a=M(e,"scores","nonMaxSuppressionAsync"),l=ko(i,a,t,s,r,null),c=l.maxOutputSize,u=l.iouThreshold,h=l.scoreThreshold,[d,f]=await Promise.all([i.data(),a.data()]),{selectedIndices:g,validOutputs:x}=Id(d,f,c,u,h,o);return i!==n&&i.dispose(),a!==e&&a.dispose(),{selectedIndices:kn(g,"int32"),validOutputs:et(x,"int32")}}const Z2=Y2;function J2(n,e,t=!1,s=!1){const r=M(n,"images","resizeBilinear");_(r.rank===3||r.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${r.rank}.`),_(e.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${e}.`),_(s===!1||t===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let o=r,i=!1;r.rank===3&&(i=!0,o=H(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const a={images:o},l={alignCorners:t,halfPixelCenters:s,size:e},c=W.runKernel(Ml,a,l);return i?H(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const Lg=j({resizeBilinear_:J2});function Q2(n,e,t=!1,s=!1){const r=M(n,"images","resizeNearestNeighbor");_(r.rank===3||r.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${r.rank}.`),_(e.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${e}.`),_(r.dtype==="float32"||r.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),_(s===!1||t===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let o=r,i=!1;r.rank===3&&(i=!0,o=H(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const a={images:o},l={alignCorners:t,halfPixelCenters:s,size:e},c=W.runKernel(Ll,a,l);return i?H(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const Mg=j({resizeNearestNeighbor_:Q2});function eN(n,e="binary",t=!1,s=.5){const r=M(n,"image","threshold"),o=.2989,i=.587,a=.114,l=r.shape[0]*r.shape[1];let c=V(kn([s]),255),u,h,d,f;if(_(r.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${r.rank}.`),_(r.shape[2]===3||r.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${r.shape[2]}.`),_(r.dtype==="int32"||r.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${r.dtype}.`),_(e==="otsu"||e==="binary",()=>`Method must be binary or otsu, but was ${e}`),r.shape[2]===3){[u,h,d]=_n(r,[1,1,1],-1);const b=V(u,o),y=V(h,i),w=V(d,a);f=ue(ue(b,y),w)}else f=n;if(e==="otsu"){const b=e$(be($g(f),"int32"),Lm([]),256);c=tN(b,l)}const g=t?vo(f,c):An(f,c);return be(V(g,255),"int32")}function tN(n,e){let t=kn([-1]),s=kn([0]),r=kn([0]),o,i,a,l,c,u;for(let h=0;h<n.size-1;h++){o=dt(n,0,h+1),i=dt(n,h+1),c=Ne(Se(o),e),u=Ne(Se(i),e);const d=Se(V(o,na(0,o.size)));a=Ne(d,Se(o));const f=ic(i.shape,o.size),g=ue(na(0,i.size),f),x=V(i,g);l=Ne(Se(x),Se(i));const b=Re(a,l),y=Re(a,l),w=V(c,u);r=V(V(w,b),y);const $=An(r,s);s=an($,r,s),t=an($,kn([h]),t)}return t}const nN=j({threshold_:eN});function sN(n,e,t="nearest",s="constant",r=0,o){const i=M(n,"image","transform","float32"),a=M(e,"transforms","transform","float32");_(i.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${i.rank}.`),_(a.rank===2&&(a.shape[0]===i.shape[0]||a.shape[0]===1)&&a.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),_(o==null||o.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${o}.`);const l={image:i,transforms:a},c={interpolation:t,fillMode:s,fillValue:r,outputShape:o};return W.runKernel(Eh,l,c)}const rN=j({transform_:sN});function oN(n,e,t){const s=M(n,"a","bandPart");_(s.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${s.rank}.`);const r=s.shape,[o,i]=s.shape.slice(-2);let a,l;typeof e=="number"?(_(e%1===0,()=>`bandPart(): numLower must be an integer, got ${e}.`),_(e<=o,()=>`bandPart(): numLower (${e}) must not be greater than the number of rows (${o}).`),a=M(e<0?o:e,"numLower","bandPart")):(_(e.dtype==="int32",()=>"bandPart(): numLower's dtype must be an int32."),a=an(hc(e,0),o,ea(e,o))),typeof t=="number"?(_(t%1===0,()=>`bandPart(): numUpper must be an integer, got ${t}.`),_(t<=i,()=>`bandPart(): numUpper (${t}) must not be greater than the number of columns (${i}).`),l=M(t<0?i:t,"numUpper","bandPart")):(_(t.dtype==="int32",()=>"bandPart(): numUpper's dtype must be an int32."),l=an(hc(t,0),i,ea(t,i)));const c=H(na(0,o,1,"int32"),[-1,1]),u=na(0,i,1,"int32"),h=Re(c,u),d=_s(vo(h,a),Tr(h,Tt(l))),f=Gt([o,i],s.dtype);return H(Fs(Ar(H(s,[-1,o,i])).map(g=>an(d,g,f))),r)}const iN=j({bandPart_:oN});function aN(n){let e;if(Array.isArray(n)){e=!1,_(n!=null&&n.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const r=n[0].shape[0];for(let o=1;o<n.length;++o)_(n[o].shape[0]===r,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${n[o].shape[0]} vs. ${r})`)}else e=!0,n=_n(n,n.shape[0],0).map(r=>sa(r,[0]));_(n.length<=n[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${n.length}) exceeds number of dimensions (${n[0].shape[0]}).`);const t=[],s=n;for(let r=0;r<n.length;++r)t.push(W.tidy(()=>{let o=s[r];if(r>0)for(let i=0;i<r;++i){const a=V(Se(V(t[i],o)),t[i]);o=Re(o,a)}return Ne(o,cc(o,"euclidean"))}));return e?Fs(t,0):t}const lN=j({gramSchmidt_:aN});function cN(n,e=!1){if(_(n.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${n.rank}`),n.rank===2)return zg(n,e);{const t=n.shape.slice(0,n.shape.length-2).reduce((l,c)=>l*c),s=Ar(H(n,[t,n.shape[n.shape.length-2],n.shape[n.shape.length-1]]),0),r=[],o=[];s.forEach(l=>{const[c,u]=zg(l,e);r.push(c),o.push(u)});const i=H(Fs(r,0),n.shape),a=H(Fs(o,0),n.shape);return[i,a]}}function zg(n,e=!1){return W.tidy(()=>{_(n.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${n.shape.length}D Tensor.`);const t=n.shape[0],s=n.shape[1];let r=lg(t),o=kr(n);const i=bd([[1]],[1,1]);let a=kr(i);const l=t>=s?s:t;for(let c=0;c<l;++c){const u=o,h=a,d=r;[a,o,r]=W.tidy(()=>{const f=dt(o,[c,c],[t-c,1]),g=cc(f),x=dt(o,[c,c],[1,1]),b=an(An(x,0),bd([[-1]]),bd([[1]])),y=Re(x,V(b,g)),w=Ne(f,y);w.shape[0]===1?a=kr(i):a=gn([i,dt(w,[1,0],[w.shape[0]-1,w.shape[1]])],0);const $=Tt(Ne(Qe(b,y),g)),C=dt(o,[c,0],[t-c,s]),N=V($,a),E=Ke(a);if(c===0)o=Re(C,Qe(N,Qe(E,C)));else{const A=Re(C,Qe(N,Qe(E,C)));o=gn([dt(o,[0,0],[c,s]),A],0)}const F=Ke(N),O=dt(r,[0,c],[t,r.shape[1]-c]);if(c===0)r=Re(O,Qe(Qe(O,a),F));else{const A=Re(O,Qe(Qe(O,a),F));r=gn([dt(r,[0,0],[t,c]),A],1)}return[a,o,r]}),Ue([u,h,d])}return!e&&t>s&&(r=dt(r,[0,0],[t,s]),o=dt(o,[0,0],[s,s])),[r,o]})}const uN=j({qr_:cN});const Os={flipLeftRight:N2,grayscaleToRGB:E2,resizeNearestNeighbor:Mg,resizeBilinear:Lg,rgbToGrayscale:D2,rotateWithOffset:_2,cropAndResize:I2,nonMaxSuppression:O2,nonMaxSuppressionAsync:U2,nonMaxSuppressionWithScore:H2,nonMaxSuppressionWithScoreAsync:K2,nonMaxSuppressionPadded:X2,nonMaxSuppressionPaddedAsync:Z2,threshold:nN,transform:rN},hN={bandPart:iN,gramSchmidt:lN,qr:uN};const dN=new Map,pN=new Map;class $o{getClassName(){return this.constructor.className}static fromConfig(e,t){return new e(t)}}class zn{constructor(){this.classNameMap={}}static getMap(){return zn.instance==null&&(zn.instance=new zn),zn.instance}static register(e){zn.getMap().classNameMap[e.className]=[e,e.fromConfig]}}function ce(n,e,t){_(n.className!=null,()=>"Class being registered does not have the static className property defined."),_(typeof n.className=="string",()=>"className is required to be a string, but got type "+typeof n.className),_(n.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof e>"u"&&(e="Custom"),typeof t>"u"&&(t=n.className);const s=t,r=e+">"+s;return zn.register(n),dN.set(r,n),pN.set(n,r),n}class Qs extends $o{minimize(e,t=!1,s){const{value:r,grads:o}=this.computeGradients(e,s);if(s!=null){const i=s.map(a=>({name:a.name,tensor:o[a.name]}));this.applyGradients(i)}else this.applyGradients(o);return Ue(o),t?r:(r.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(e,t){return vI(e,t)}dispose(){this.iterations_!=null&&Ue(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:et(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(e){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(e){return this.iterations_=(await e[0].tensor.data())[0],e.slice(1)}}Object.defineProperty(Qs,Symbol.hasInstance,{value:n=>n.minimize!=null&&n.computeGradients!=null&&n.applyGradients!=null});class Bg extends Qs{static get className(){return"Adadelta"}constructor(e,t,s=null){super(),this.learningRate=e,this.rho=t,this.epsilon=s,this.accumulatedGrads=[],this.accumulatedUpdates=[],s==null&&(this.epsilon=W.backend.epsilon())}applyGradients(e){(Array.isArray(e)?e.map(s=>s.name):Object.keys(e)).forEach((s,r)=>{const o=W.registeredVariables[s],i=!1;this.accumulatedGrads[r]==null&&(this.accumulatedGrads[r]={originalName:`${s}/accum_grad`,variable:Y(()=>je(o).variable(i))}),this.accumulatedUpdates[r]==null&&(this.accumulatedUpdates[r]={originalName:`${s}/accum_var`,variable:Y(()=>je(o).variable(i))});const a=Array.isArray(e)?e[r].tensor:e[s];if(a==null)return;const l=this.accumulatedGrads[r].variable,c=this.accumulatedUpdates[r].variable;Y(()=>{const u=ue(V(l,this.rho),V(ft(a),1-this.rho)),h=V(Ne(en(ue(c,this.epsilon)),en(ue(l,this.epsilon))),a),d=ue(V(c,this.rho),V(ft(h),1-this.rho));l.assign(u),c.assign(d);const f=ue(V(h,-this.learningRate),o);o.assign(f)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(Ue(this.accumulatedGrads.map(e=>e.variable)),Ue(this.accumulatedUpdates.map(e=>e.variable)))}async getWeights(){const e=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(e){e=await this.extractIterations(e);const t=e.length/2,s=!1;this.accumulatedGrads=e.slice(0,t).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.accumulatedUpdates=e.slice(t,t*2).map(r=>({originalName:r.name,variable:r.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.rho,t.epsilon)}}class Vg extends Qs{static get className(){return"Adagrad"}constructor(e,t=.1){super(),this.learningRate=e,this.initialAccumulatorValue=t,this.accumulatedGrads=[]}applyGradients(e){(Array.isArray(e)?e.map(s=>s.name):Object.keys(e)).forEach((s,r)=>{const o=W.registeredVariables[s];this.accumulatedGrads[r]==null&&(this.accumulatedGrads[r]={originalName:`${s}/accumulator`,variable:Y(()=>ic(o.shape,this.initialAccumulatorValue).variable(!1))});const i=Array.isArray(e)?e[r].tensor:e[s];if(i==null)return;const a=this.accumulatedGrads[r].variable;Y(()=>{const l=ue(a,ft(i));a.assign(l);const c=ue(V(Ne(i,en(ue(l,W.backend.epsilon()))),-this.learningRate),o);o.assign(c)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&Ue(this.accumulatedGrads.map(e=>e.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);const t=!1;this.accumulatedGrads=e.map(s=>({originalName:s.name,variable:s.tensor.variable(t)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(e,t){return new e(t.learningRate,t.initialAccumulatorValue)}}class Wg extends Qs{static get className(){return"Adam"}constructor(e,t,s,r=null){super(),this.learningRate=e,this.beta1=t,this.beta2=s,this.epsilon=r,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],Y(()=>{this.accBeta1=et(t).variable(),this.accBeta2=et(s).variable()}),r==null&&(this.epsilon=W.backend.epsilon())}applyGradients(e){const t=Array.isArray(e)?e.map(s=>s.name):Object.keys(e);Y(()=>{const s=Re(1,this.accBeta1),r=Re(1,this.accBeta2);t.forEach((o,i)=>{const a=W.registeredVariables[o],l=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${o}/m`,variable:Y(()=>je(a).variable(l))}),this.accumulatedSecondMoment[i]==null&&(this.accumulatedSecondMoment[i]={originalName:`${o}/v`,variable:Y(()=>je(a).variable(l))});const c=Array.isArray(e)?e[i].tensor:e[o];if(c==null)return;const u=this.accumulatedFirstMoment[i].variable,h=this.accumulatedSecondMoment[i].variable,d=ue(V(u,this.beta1),V(c,1-this.beta1)),f=ue(V(h,this.beta2),V(ft(c),1-this.beta2)),g=Ne(d,s),x=Ne(f,r);u.assign(d),h.assign(f);const b=ue(V(Ne(g,ue(en(x),this.epsilon)),-this.learningRate),a);a.assign(b)}),this.accBeta1.assign(V(this.accBeta1,this.beta1)),this.accBeta2.assign(V(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Ue(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedSecondMoment!=null&&Ue(this.accumulatedSecondMoment.map(e=>e.variable))}async getWeights(){const e=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(e){e=await this.extractIterations(e),Y(()=>{this.accBeta1.assign(Nr(this.beta1,this.iterations_+1)),this.accBeta2.assign(Nr(this.beta2,this.iterations_+1))});const t=e.length/2,s=!1;this.accumulatedFirstMoment=e.slice(0,t).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.accumulatedSecondMoment=e.slice(t,t*2).map(r=>({originalName:r.name,variable:r.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)}}class Ug extends Qs{static get className(){return"Adamax"}constructor(e,t,s,r=null,o=0){super(),this.learningRate=e,this.beta1=t,this.beta2=s,this.epsilon=r,this.decay=o,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],Y(()=>{this.iteration=et(0).variable(),this.accBeta1=et(t).variable()}),r==null&&(this.epsilon=W.backend.epsilon())}applyGradients(e){const t=Array.isArray(e)?e.map(s=>s.name):Object.keys(e);Y(()=>{const s=Re(1,this.accBeta1),r=Ne(-this.learningRate,ue(V(this.iteration,this.decay),1));t.forEach((o,i)=>{const a=W.registeredVariables[o],l=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${o}/m`,variable:je(a).variable(l)}),this.accumulatedWeightedInfNorm[i]==null&&(this.accumulatedWeightedInfNorm[i]={originalName:`${o}/v`,variable:je(a).variable(l)});const c=Array.isArray(e)?e[i].tensor:e[o];if(c==null)return;const u=this.accumulatedFirstMoment[i].variable,h=this.accumulatedWeightedInfNorm[i].variable,d=ue(V(u,this.beta1),V(c,1-this.beta1)),f=V(h,this.beta2),g=on(c),x=Zs(f,g);u.assign(d),h.assign(x);const b=ue(V(Ne(r,s),Ne(d,ue(x,this.epsilon))),a);a.assign(b)}),this.iteration.assign(ue(this.iteration,1)),this.accBeta1.assign(V(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Ue(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedWeightedInfNorm!=null&&Ue(this.accumulatedWeightedInfNorm.map(e=>e.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(e){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)}}class Td extends Qs{static get className(){return"SGD"}constructor(e){super(),this.learningRate=e,this.setLearningRate(e)}applyGradients(e){(Array.isArray(e)?e.map(s=>s.name):Object.keys(e)).forEach((s,r)=>{const o=Array.isArray(e)?e[r].tensor:e[s];if(o==null)return;const i=W.registeredVariables[s];Y(()=>{const a=ue(V(this.c,o),i);i.assign(a)})}),this.incrementIterations()}setLearningRate(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=cs(et(-e))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(e){if(e=await this.extractIterations(e),e.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(e,t){return new e(t.learningRate)}}class Gg extends Td{static get className(){return"Momentum"}constructor(e,t,s=!1){super(e),this.learningRate=e,this.momentum=t,this.useNesterov=s,this.accumulations=[],this.m=et(this.momentum)}applyGradients(e){(Array.isArray(e)?e.map(s=>s.name):Object.keys(e)).forEach((s,r)=>{const o=W.registeredVariables[s];this.accumulations[r]==null&&(this.accumulations[r]={originalName:`${s}/momentum`,variable:Y(()=>je(o).variable(!1))});const i=this.accumulations[r].variable,a=Array.isArray(e)?e[r].tensor:e[s];a!=null&&Y(()=>{let l;const c=ue(V(this.m,i),a);this.useNesterov?l=ue(V(this.c,ue(a,V(c,this.m))),o):l=ue(V(this.c,c),o),i.assign(c),o.assign(l)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&Ue(this.accumulations.map(e=>e.variable))}setMomentum(e){this.momentum=e}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);const t=!1;this.accumulations=e.map(s=>({originalName:s.name,variable:s.tensor.variable(t)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)}}class Hg extends Qs{static get className(){return"RMSProp"}constructor(e,t=.9,s=0,r=null,o=!1){if(super(),this.learningRate=e,this.decay=t,this.momentum=s,this.epsilon=r,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=o,r==null&&(this.epsilon=W.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(e){(Array.isArray(e)?e.map(s=>s.name):Object.keys(e)).forEach((s,r)=>{const o=W.registeredVariables[s],i=!1;this.accumulatedMeanSquares[r]==null&&(this.accumulatedMeanSquares[r]={originalName:`${s}/rms`,variable:Y(()=>je(o).variable(i))}),this.accumulatedMoments[r]==null&&(this.accumulatedMoments[r]={originalName:`${s}/momentum`,variable:Y(()=>je(o).variable(i))}),this.accumulatedMeanGrads[r]==null&&this.centered&&(this.accumulatedMeanGrads[r]={originalName:`${s}/mg`,variable:Y(()=>je(o).variable(i))});const a=Array.isArray(e)?e[r].tensor:e[s];if(a==null)return;const l=this.accumulatedMeanSquares[r].variable,c=this.accumulatedMoments[r].variable;Y(()=>{const u=ue(V(l,this.decay),V(ft(a),1-this.decay));if(this.centered){const h=this.accumulatedMeanGrads[r].variable,d=ue(V(h,this.decay),V(a,1-this.decay)),f=Ne(V(a,this.learningRate),en(Re(u,ue(ft(d),this.epsilon)))),g=ue(V(c,this.momentum),f);l.assign(u),h.assign(d),c.assign(g);const x=Re(o,g);o.assign(x)}else{const h=ue(V(l,this.decay),V(ft(a),1-this.decay)),d=ue(V(c,this.momentum),Ne(V(a,this.learningRate),en(ue(h,this.epsilon))));l.assign(h),c.assign(d);const f=Re(o,d);o.assign(f)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&Ue(this.accumulatedMeanSquares.map(e=>e.variable)),this.accumulatedMeanGrads!=null&&this.centered&&Ue(this.accumulatedMeanGrads.map(e=>e.variable)),this.accumulatedMoments!=null&&Ue(this.accumulatedMoments.map(e=>e.variable))}async getWeights(){const e=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&e.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(e){e=await this.extractIterations(e);const t=this.centered?e.length/3:e.length/2,s=!1;this.accumulatedMeanSquares=e.slice(0,t).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.accumulatedMoments=e.slice(t,t*2).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.centered&&(this.accumulatedMeanGrads=e.slice(t*2,t*3).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)}}const fN=[Bg,Vg,Wg,Ug,Gg,Hg,Td];function mN(){for(const n of fN)ce(n)}function Ed(n,e){const t=n.shape.length,s=e.shape.length;if(t<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${t}.`);if(s<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${s}.`);if(e.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.shape[s-1]>t)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${e.shape[s-1]} vs. ${t}`);if(ne(n.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${n.shape}.`);const r=e.shape,o=r[r.length-1];let i=1;for(let h=0;h<r.length-1;++h)i*=r[h];const a=n.shape,l=r.slice();l.pop();let c=1;for(let h=o;h<t;++h)c*=a[h],l.push(a[h]);const u=[...Ie(n.shape).map(h=>h/c),1].slice(0,o);return[l,i,c,u]}const Rd=-2,gN=-1;function jg(n,e,t){const s=n.shape.length;_(s===e.length,()=>`Error in slice${s}D: Length of begin ${e} must match the rank of the array (${s}).`),_(s===t.length,()=>`Error in slice${s}D: Length of size ${t} must match the rank of the array (${s}).`);for(let r=0;r<s;++r)_(e[r]+t[r]<=n.shape[r],()=>`Error in slice${s}D: begin[${r}] + size[${r}] (${e[r]+t[r]}) would overflow input.shape[${r}] (${n.shape[r]})`)}function Kg(n,e,t){const s=[];for(let r=0;r<n.length;r++)s[r]=Math.ceil((e[r]-n[r])/t[r]);return s}function qg(n,e,t){let s=t.length;for(let r=0;r<t.length;r++)if(t[r]>1){s=r;break}for(let r=s+1;r<t.length;r++)if(e[r]>0||t[r]!==n[r])return!1;return!0}function Xg(n,e){let t=n.length>0?n[n.length-1]:1;for(let s=0;s<n.length-1;s++)t+=n[s]*e[s];return t}function Dd(n,e,t){let s;const r=n.shape.length;typeof e=="number"?s=[e,...new Array(r-1).fill(0)]:e.length<r?s=e.concat(new Array(r-e.length).fill(0)):s=e.slice(),s.forEach(i=>{_(i!==-1,()=>"slice() does not support negative begin indexing.")});let o;return t==null?o=new Array(r).fill(-1):typeof t=="number"?o=[t,...new Array(r-1).fill(-1)]:t.length<r?o=t.concat(new Array(r-t.length).fill(-1)):o=t,o=o.map((i,a)=>i>=0?i:(_(i===-1,()=>`Negative size values should be exactly -1 but got ${i} for the slice() size at index ${a}.`),n.shape[a]-s[a])),[s,o]}function Yg(n,e,t,s,r,o,i,a,l){let c;if(s==null?(c=new Array(e.length),c.fill(1)):c=s,i!=null&&(i&i-1)!==0)throw new Error("Multiple ellipses in slice is not allowed.");let u=!1;const h={dims:c.length,numAddAxisAfterEllipsis:0,begin:e.slice(),end:t.slice(),strides:c.slice(),beginMask:r,endMask:o,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:l};for(let $=0;$<h.dims;$++)u&&(1<<$&a)!==0&&h.numAddAxisAfterEllipsis++,1<<$&i&&(u=!0);u||(h.ellipsisMask|=1<<h.dims,h.dims++);const d={dims:n.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};xN(h,d);let f=!0,g=!0,x=!0;const b=[],y=[];for(let $=0;$<n.length;++$){if(d.strides[$]===0)throw Error(`strides[${$}] must be non-zero`);const C=!!(d.shrinkAxisMask&1<<$),N=n[$];if(N===-1){b.push(C?1:-1);continue}const E=[d.beginMask&1<<$,d.endMask&1<<$],F=[d.strides[$]>0?0:-1,d.strides[$]>0?N:N-1];if(C&&d.strides[$]<=0)throw Error("only stride 1 allowed on non-range indexing.");x=x&&d.strides[$]===1;const O=!!(d.beginMask&1<<$&&d.endMask&1<<$);if(d.beginValid&&d.endValid){if(C){const z=d.begin[$]<0?N+d.begin[$]:d.begin[$];if(d.begin[$]=z,d.end[$]=d.begin[$]+1,z<0||z>=N)throw Error(`slice index ${d.begin[$]} of dimension ${$} out of bounds.`)}else d.begin[$]=Zg(d.begin[$],0,d.strides[$],N,E,F),d.end[$]=Zg(d.end[$],1,d.strides[$],N,E,F);const S=d.strides[$]===1&&d.begin[$]===0&&d.end[$]===N;f=f&&S,g=g&&($===0&&d.strides[$]===1||S)}else f=f&&d.strides[$]===1&&O,g=g&&($===0&&d.strides[$]===1||O);let A,D=!1;if(d.beginValid&&d.endValid?(A=d.end[$]-d.begin[$],D=!0):C?(A=1,D=!0):O&&N>=0&&(d.strides[$]<0?A=-N:A=N,D=!0),D){let S;A===0||A<0!=d.strides[$]<0?S=0:S=Math.trunc(A/d.strides[$])+(A%d.strides[$]!==0?1:0),b.push(S)}else b.push(-1)}for(let $=0;$<d.finalShapeGatherIndices.length;++$){const C=d.finalShapeGatherIndices[$];C>=0?y.push(b[C]):C===Rd&&y.push(1)}return{finalShapeSparse:y.filter(($,C)=>d.finalShapeGatherIndices[C]!==Rd),finalShape:y,isIdentity:f,sliceDim0:g,isSimpleSlice:x,begin:d.begin,end:d.end,strides:d.strides}}function xN(n,e){e.beginMask=0,e.endMask=0,e.shrinkAxisMask=0;let t=0;e.beginValid=n.begin!=null,e.endValid=n.end!=null,e.begin=new Array(e.dims),e.end=new Array(e.dims),e.strides=new Array(e.dims),e.finalShapeGatherIndices=[],e.finalShapeGatherIndicesSparse=[],e.inputShapeGatherIndicesSparse=new Array(e.dims);for(let s=0;s<n.dims;s++)if(1<<s&n.ellipsisMask){const r=Math.min(e.dims-(n.dims-s)+1+n.numAddAxisAfterEllipsis,e.dims);for(;t<r;t++)e.begin[t]=0,e.end[t]=0,e.strides[t]=1,e.beginMask|=1<<t,e.endMask|=1<<t,e.finalShapeGatherIndices.push(t),e.finalShapeGatherIndicesSparse.push(-1),e.inputShapeGatherIndicesSparse[t]=s}else if(1<<s&n.newAxisMask)e.finalShapeGatherIndices.push(Rd),e.finalShapeGatherIndicesSparse.push(-1);else{if(t===e.begin.length)throw Error(`Index out of range using input dim ${t}; input has only ${e.dims} dims, ${e.begin.length}.`);n.begin!=null&&(e.begin[t]=n.begin[s]),n.end!=null&&(e.end[t]=n.end[s]),e.strides[t]=n.strides[s],n.beginMask&1<<s&&(e.beginMask|=1<<t),n.endMask&1<<s&&(e.endMask|=1<<t),n.shrinkAxisMask&1<<s?(e.finalShapeGatherIndices.push(gN),e.finalShapeGatherIndicesSparse.push(-1),e.shrinkAxisMask|=1<<t):(e.finalShapeGatherIndices.push(t),e.finalShapeGatherIndicesSparse.push(s)),e.inputShapeGatherIndicesSparse[t]=s,t++}}function Zg(n,e,t,s,r,o){if(r[e])return t>0?o[e]:o[e+1&1];{const i=n<0?s+n:n;return i<o[0]?o[0]:i>o[1]?o[1]:i}}class bN{static sgd(e){return new Td(e)}static momentum(e,t,s=!1){return new Gg(e,t,s)}static rmsprop(e,t=.9,s=0,r=null,o=!1){return new Hg(e,t,s,r,o)}static adam(e=.001,t=.9,s=.999,r=null){return new Wg(e,t,s,r)}static adadelta(e=.001,t=.95,s=null){return new Bg(e,t,s)}static adamax(e=.002,t=.9,s=.999,r=null,o=0){return new Ug(e,t,s,r,o)}static adagrad(e,t=.1){return new Vg(e,t)}}const Io=bN;const yN=typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:n=>n();function Jg(){return new Promise(n=>yN(()=>n()))}function Ad(n,e){const t=n[0].length;n.forEach((r,o)=>{_(r.length===t,()=>`Error in concat${t}D: rank of tensors[${o}] must be the same as the rank of the rest (${t})`)}),_(e>=0&&e<t,()=>`Error in concat${t}D: axis must be between 0 and ${t-1}.`);const s=n[0];n.forEach((r,o)=>{for(let i=0;i<t;i++)_(i===e||r[i]===s[i],()=>`Error in concat${t}D: Shape of tensors[${o}] (${r}) does not match the shape of the rest (${s}) along the non-concatenated axis ${o}.`)})}function fs(n,e){const t=n[0].slice();for(let s=1;s<n.length;s++)t[e]+=n[s][e];return t}var Zn;(function(n){n[n.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",n[n.VALUE_ROWIDS=1]="VALUE_ROWIDS",n[n.ROW_LENGTHS=2]="ROW_LENGTHS",n[n.ROW_SPLITS=3]="ROW_SPLITS",n[n.ROW_LIMITS=4]="ROW_LIMITS",n[n.ROW_STARTS=5]="ROW_STARTS"})(Zn||(Zn={}));function Qg(n,e,t){let s=new Array;if(t==null&&e==null)return s;if(e==null)for(;s.length<n+t.length;)s.push(-1);else s=e.slice();if(t==null)return s;if(n+t.length!==s.length)throw new Error(`rt input.shape and shape=${e} are incompatible: rt input.rank = ${n+t.length}, but shape.rank = ${s.length}`);for(let r=1;r<t.length;++r){const o=t[r],i=s[s.length-t.length+r],a=s[i];if(o>=0)if(a>=0){if(a!==o)throw new Error(`rt input.shape and shape=${e} are incompatible: rt input.shape[${r+n}] = ${o} but shape[${r+n}] = ${a}`)}else s[i]=o}return s}function ex(n){const e={FIRST_DIM_SIZE:Zn.FIRST_DIM_SIZE,VALUE_ROWIDS:Zn.VALUE_ROWIDS,ROW_LENGTHS:Zn.ROW_LENGTHS,ROW_SPLITS:Zn.ROW_SPLITS,ROW_LIMITS:Zn.ROW_LIMITS,ROW_STARTS:Zn.ROW_STARTS},t=[];for(const s of n)if(s in e)t.push(e[s]);else break;return t}function tx(n){return n.length===0?0:n[0]===Zn.FIRST_DIM_SIZE?n.length-1:n.length}function nx(n,e){if(n==null||e==null)return;const t=n.length,s=e.length;if(t>=s)throw new Error(`defaultValue.shape=${n} and ragged tensor flatValues.shape=${e}, are incompatible: defaultValue.rank = ${t} must be less than ragged tensor input flatValues.rank = ${s})`);for(let r=0;r<Math.min(t,s-1);++r){const o=n[r],i=e[r+1];if(o>=0&&i>=0&&o!==1&&o!==i)throw new Error(`defaultValue.shape=${n}, and ragged tensor input flatValues.shape=${e} are incompatible: defaultValue.shape[${r-n.length}] = ${o} but ragged tensor input.flatValues.shape[${r-n.length}] = ${i}`)}}const _d=30;function Cc(n){return n<=_d?n:Mu(n,Math.floor(Math.sqrt(n)))}function Fd(n,e,t){const s=t*(typeof n=="number"?n:n[0]),r=e*(typeof n=="number"?n:n[1]);return[s,r]}function oa(n,e,t,s=!0){let r=[];if(s)r=r.concat(e.slice(0)),r.push(n[0]/t),r=r.concat(n.slice(1));else{r=r.concat(n[0]);const o=e.length;for(let i=0;i<o;++i)r=r.concat([n[i+1]/e[i],e[i]]);r=r.concat(n.slice(o+1))}return r}function ia(n,e,t=!0){const s=[];if(t){s.push(e);for(let r=e+1;r<n;++r)r<=2*e?(s.push(r),s.push(r-(e+1))):s.push(r)}else{const r=[],o=[];for(let i=1;i<n;++i)i>=e*2+1||i%2===1?o.push(i):r.push(i);s.push(...r),s.push(0),s.push(...o)}return s}function aa(n,e,t,s=!0){const r=[];s?r.push(n[0]/t):r.push(n[0]*t);for(let o=1;o<n.length;++o)o<=e.length?s?r.push(e[o-1]*n[o]):r.push(n[o]/e[o-1]):r.push(n[o]);return r}function Od(n,e){const t=[0];for(let s=0;s<e;++s)t.push(n[s][0]);return t}function Pd(n,e,t){const s=n.slice(0,1);for(let r=0;r<t;++r)s.push(n[r+1]-e[r][0]-e[r][1]);return s}const kc=1.7580993408473768,$c=1.0507009873554805;const Ld=.3275911,Md=.254829592,zd=-.284496736,Bd=1.421413741,Vd=-1.453152027,Wd=1.061405429;function Ps(n,e){if(n.length!==e.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${n.length}, imag: ${e.length}.`);const t=new Float32Array(n.length*2);for(let s=0;s<t.length;s+=2)t[s]=n[s/2],t[s+1]=e[s/2];return t}function sx(n){const e=new Float32Array(n.length/2),t=new Float32Array(n.length/2);for(let s=0;s<n.length;s+=2)e[s/2]=n[s],t[s/2]=n[s+1];return{real:e,imag:t}}function rx(n){const e=Math.ceil(n.length/4),t=new Float32Array(e),s=new Float32Array(e);for(let r=0;r<n.length;r+=4)t[Math.floor(r/4)]=n[r],s[Math.floor(r/4)]=n[r+1];return{real:t,imag:s}}function ox(n){const e=Math.floor(n.length/4),t=new Float32Array(e),s=new Float32Array(e);for(let r=2;r<n.length;r+=4)t[Math.floor(r/4)]=n[r],s[Math.floor(r/4)]=n[r+1];return{real:t,imag:s}}function Ud(n,e){const t=n[e*2],s=n[e*2+1];return{real:t,imag:s}}function ix(n,e,t,s){n[s*2]=e,n[s*2+1]=t}function ax(n,e){const t=new Float32Array(n/2),s=new Float32Array(n/2);for(let r=0;r<Math.ceil(n/2);r++){const o=(e?2:-2)*Math.PI*(r/n);t[r]=Math.cos(o),s[r]=Math.sin(o)}return{real:t,imag:s}}function lx(n,e,t){const s=(t?2:-2)*Math.PI*(n/e),r=Math.cos(s),o=Math.sin(s);return{real:r,imag:o}}const Gd="->",wN=/->/g,cx=",",ux="...";function Hd(n,e){n=n.replace(/\s/g,"");const t=(n.length-n.replace(wN,"").length)/Gd.length;if(t<1)throw new Error("Equations without an arrow are not supported.");if(t>1)throw new Error(`Equation must contain exactly one arrow ("${Gd}").`);const[s,r]=n.split(Gd);_(s.indexOf(ux)===-1,()=>`The ellipsis notation ("${ux}") is not supported yet.`);const o=s.split(cx),i=o.length;if(e!==i)throw new Error(`Expected ${i} input tensors, received ${e}`);if(i>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const a=[];for(let d=0;d<r.length;++d){const f=r[d];if(!o.some(g=>g.indexOf(f)!==-1))throw new Error(`Output subscripts contain the label ${f} not present in the input subscripts.`);a.indexOf(f)===-1&&a.push(f)}for(let d=0;d<s.length;++d){const f=s[d];a.indexOf(f)===-1&&f!==cx&&a.push(f)}const l=new Array(o.length);for(let d=0;d<i;++d){if(new Set(o[d].split("")).size!==o[d].length)throw new Error(`Found duplicate axes in input component ${o[d]}. Support for duplicate axes in input is not implemented yet.`);l[d]=[];for(let f=0;f<o[d].length;++f)l[d].push(a.indexOf(o[d][f]))}const c=a.length,u=r.length,h=[];for(let d=u;d<c;++d)h.push(d);return{allDims:a,summedDims:h,idDims:l}}function jd(n,e){let t=new Array(n);t.fill(-1);for(let r=0;r<e.length;++r)t[e[r]]=r;const s=[];for(let r=0;r<n;++r)t[r]===-1&&s.push(r);return t=t.filter(r=>r!==-1),{permutationIndices:t,expandDims:s}}function Kd(n,e,t){const s=new Array(n);for(let r=0;r<t.length;++r){const o=t[r].shape;for(let i=0;i<e[r].length;++i)s[e[r][i]]===void 0?s[e[r][i]]=o[i]:_(s[e[r][i]]===o[i],()=>`Expected dimension ${s[e[r][i]]} at axis ${i} of input shaped ${JSON.stringify(o)}, but got dimension ${o[i]}`)}}function qd(n,e){const t=n,s=[];let r=0;n.length===0&&t.push(-1),r=n.length+1;for(let i=0;i<r;++i)s.push([]);const o=[];for(let i=0;i<t.length;++i){const a=t[i],l=vN(e,a);for(const c of l)o.indexOf(c)===-1&&(s[i].push(c),o.push(c))}return{path:t,steps:s}}function Xd(n){return n.every((e,t)=>e===t)}function vN(n,e){const t=[];for(let s=0;s<n.length;++s)(n[s].length===0||n[s].indexOf(e)!==-1||e===-1)&&t.push(s);return t}function Yd(n,e,t=0){let s=[];if(typeof e=="number")_(n.shape[t]%e===0,()=>"Number of splits must evenly divide the axis."),s=new Array(e).fill(n.shape[t]/e);else{const r=e.reduce((i,a)=>(a===-1&&(i+=1),i),0);_(r<=1,()=>"There should be only one negative value in split array.");const o=e.indexOf(-1);if(o!==-1){const i=e.reduce((a,l)=>l>0?a+l:a);e[o]=n.shape[t]-i}_(n.shape[t]===e.reduce((i,a)=>i+a),()=>"The sum of sizes must match the size of the axis dimension."),s=e}return s}function hx(n){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${n}`}function dx(n,e){return`indices(${n}, 0) is invalid: ${e} < 0`}function px(n,e,t){return`indices(${n}, 0) is invalid: ${e} >= ${t}`}function fx(n,e){return`only one output dimension may be -1, not both ${n} and ${e}`}function mx(n,e){return`size ${n} must be non-negative, not ${e}`}function gx(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function xx(n,e){const t=ne(n),s=ne(e);return`Input to reshape is a SparseTensor with ${t}
  dense values, but the requested shape requires a multiple of ${s}. inputShape=${n} outputShape= ${e}`}function bx(n,e){const t=ne(n),s=ne(e);return`Input to reshape is a tensor with ${t} dense values, but the requested shape has ${s}. inputShape=${n} outputShape=${e}`}function Zd(){return"segment ids must be >= 0"}function yx(){return"segment ids are not increasing"}function wx(n,e){return`Segment id ${n} out of range [0, ${e}), possibly because segmentIds input is not sorted.`}function vx(n,e,t){return`Bad: indices[${n}] == ${e} out of range [0, ${t})`}function CN(n,e){let t=!1,s;for(n<=_d?(s=n,t=!0):s=Mu(n,Math.floor(Math.sqrt(n)));!t;)s>e||s===n?t=!0:s=Mu(n,s+1);return s}function kN(n,e,t){const s=[],r=n.length;for(let o=0;o<r;o++)o!==e?s.push(n[o]):s.push(t);return s}function Cx(n,e,t,s){const r=e.shape.length,o=n.shape.length;if(s!==0&&(s<-r||s>r))throw new Error(`Expect batchDims in the range of [-${r}, ${r}], but got ${s}`);if(s<0&&(s+=r),s>o)throw new Error(`batchDims (${s}) must be less than rank(x) (
    ${o}).`);if(t<s)throw new Error(`batchDims (${s}) must be less than or equal to axis (${t}).`);for(let h=0;h<s;++h)if(n.shape[h]!==e.shape[h])throw new Error(`x.shape[${h}]: ${n.shape[h]} should be equal to indices.shape[${h}]: ${e.shape[h]}.`);const i=n.shape[t],a=[];let l=1,c=1,u=1;for(let h=0;h<s;++h)a.push(n.shape[h]),l*=n.shape[h];for(let h=s;h<t;h++)a.push(n.shape[h]),c*=n.shape[h];for(let h=s;h<r;h++)a.push(e.shape[h]);for(let h=t+1;h<o;h++)a.push(n.shape[h]),u*=n.shape[h];return{batchSize:l,sliceSize:u,outerSize:c,dimSize:i,outputShape:a}}function Ls(n){try{return n.map(e=>Ks(e))}catch(e){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${e}`)}}function kx(n){return n.map(e=>js(e))}var $N=Object.freeze({__proto__:null,ERF_A1:Md,ERF_A2:zd,ERF_A3:Bd,ERF_A4:Vd,ERF_A5:Wd,ERF_P:Ld,PARALLELIZE_THRESHOLD:_d,get RowPartitionType(){return Zn},SELU_SCALE:$c,SELU_SCALEALPHA:kc,applyActivation:Cd,assertAndGetBroadcastShape:Oe,assertAxesAreInnerMostDims:qt,assertParamsConsistent:Ad,assignToTypedArray:ix,axesAreInnerMostDims:nd,calculateShapes:Dr,checkEinsumDimSizes:Kd,checkPadOnDimRoundingMode:mn,combineLocations:ig,combineRaggedTensorToTensorShapes:Qg,complexWithEvenIndex:rx,complexWithOddIndex:ox,computeConv2DInfo:Kt,computeConv3DInfo:Xs,computeDefaultPad:qh,computeDilation2DInfo:qi,computeOptimalWindowSize:Cc,computeOutAndReduceShapes:Ut,computeOutShape:fs,computePool2DInfo:Ln,computePool3DInfo:Ds,convertConv2DDataFormat:As,decodeEinsumEquation:Hd,eitherStridesOrDilationsAreOne:Qt,expandShapeToKeepDim:At,exponent:lx,exponents:ax,fromStringArrayToUint8:kx,fromUint8ToStringArray:Ls,getAxesPermutation:wt,getBroadcastDims:wo,getComplexWithIndex:Ud,getEinsumComputePath:qd,getEinsumPermutation:jd,getFusedBiasGradient:vd,getFusedDyActivation:wd,getImageCenter:Fd,getInnerMostAxes:Nt,getPermuted:ia,getRaggedRank:tx,getReductionAxes:Ot,getReshaped:oa,getReshapedPermuted:aa,getRowPartitionTypesHelper:ex,getSliceBeginCoords:Od,getSliceSize:Pd,getSparseFillEmptyRowsIndicesDenseShapeMismatch:hx,getSparseFillEmptyRowsNegativeIndexErrorMessage:dx,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:px,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:gx,getSparseReshapeInputOutputMismatchErrorMessage:bx,getSparseReshapeInputOutputMultipleErrorMessage:xx,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:fx,getSparseReshapeNegativeOutputDimErrorMessage:mx,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:vx,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:Zd,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:yx,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:wx,getUndoAxesPermutation:Ys,isIdentityPermutation:Xd,mergeRealAndImagArrays:Ps,prepareAndValidate:Ed,prepareSplitSize:Yd,shouldFuse:kd,splitRealAndImagArrays:sx,stridesOrDilationsArePositive:Ir,tupleValuesAreOne:$r,upcastType:Cn,validateDefaultValueShape:nx,warn:Rn});mN();const $x={kernelName:Xa,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>V(n,ra(be(t,"float32"),-1))}}};const IN={kernelName:Xo,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>{const s=ft(be(t,"float32")),r=en(Re(et(1),s));return Tt(Ne(n,r))}}}};const SN={kernelName:Yo,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>{const s=en(Re(ft(be(t,"float32")),1));return Ne(n,s)}}}};const NN={kernelName:uo,inputsToSave:["a","b"],gradFunc:(n,e)=>{const[t,s]=e,r=Oe(t.shape,s.shape);return{a:()=>{let a=n;const l=Ot(t.shape,r);return l.length>0&&(a=Se(a,l)),H(a,t.shape)},b:()=>{let a=n;const l=Ot(s.shape,r);return l.length>0&&(a=Se(a,l)),H(a,s.shape)}}}};const TN={kernelName:Uu,saveAllInputs:!0,gradFunc:(n,e)=>{const t={};return e.forEach((s,r)=>{t[r]=()=>n.clone()}),t}};const EN={kernelName:Ya,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>je(t)}}};const RN={kernelName:Za,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>je(t)}}};const DN={kernelName:Zo,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>Ne(n,en(Re(et(1),ft(be(t,"float32")))))}}};const AN={kernelName:Jo,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>{const s=en(ue(et(1),ft(be(t,"float32"))));return Ne(n,s)}}}};const _N={kernelName:ti,inputsToSave:["a","b"],gradFunc:(n,e)=>{const[t,s]=e,r=Oe(t.shape,s.shape);return{a:()=>{const a=ue(ft(t),ft(s));let l=V(n,Ne(s,a));const c=Ot(t.shape,r);return c.length>0&&(l=Se(l,c)),H(l,t.shape)},b:()=>{const a=ue(ft(t),ft(s));let l=Tt(V(n,Ne(t,a)));const c=Ot(s.shape,r);return c.length>0&&(l=Se(l,c)),H(l,s.shape)}}}};const FN={kernelName:Qo,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>Ne(n,ue(ft(be(t,"float32")),1))}}};const ON={kernelName:ei,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>Ne(n,Re(et(1),ft(be(t,"float32"))))}}};function PN(n,e,t,s,r,o){const i=M(n,"dy","avgPool3dGrad"),a=M(e,"input","avgPool3dGrad");let l=i,c=a,u=!1;a.rank===4&&(u=!0,l=H(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]]),c=H(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),_(l.rank===5,()=>`Error in avgPool3dGrad: dy must be rank 5 but got rank ${l.rank}.`),_(c.rank===5,()=>`Error in avgPool3dGrad: input must be rank 5 but got rank ${c.rank}.`),mn("avgPool3dGrad",r,o);const h={dy:l,input:c},d={filterSize:t,strides:s,pad:r,dimRoundingMode:o},f=W.runKernel(Ku,h,d);return u?H(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}const LN=j({avgPool3dGrad_:PN});const MN={kernelName:Qa,inputsToSave:["x"],gradFunc:(n,e,t)=>{const[s]=e,{filterSize:r,strides:o,pad:i,dimRoundingMode:a}=t;return{x:()=>LN(n,s,r,o,i,a)}}};function zN(n,e,t,s,r){const o=M(n,"dy","avgPoolGrad"),i=M(e,"input","avgPoolGrad");_(i.rank===o.rank,()=>`Rank of input (${i.rank}) does not match rank of dy (${o.rank})`);let a=i,l=o,c=!1;i.rank===3&&(c=!0,a=H(i,[1,i.shape[0],i.shape[1],i.shape[2]]),l=H(o,[1,o.shape[0],o.shape[1],o.shape[2]])),_(l.rank===4,()=>`Error in avgPoolGrad: dy must be rank 4 but got rank ${l.rank}.`),_(a.rank===4,()=>`Error in avgPoolGrad: input must be rank 4 but got rank ${a.rank}.`);const u={dy:l,input:a},h={filterSize:t,strides:s,pad:r},d=W.runKernel(ju,u,h);return c?H(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const BN=j({avgPoolGrad_:zN});const VN={kernelName:Ja,inputsToSave:["x"],gradFunc:(n,e,t)=>{const[s]=e,{filterSize:r,strides:o,pad:i}=t;return{x:()=>BN(n,s,r,o,i)}}};const WN={kernelName:el,inputsToSave:["a","b"],gradFunc:(n,e,t)=>{const[s,r]=e,{transposeA:o,transposeB:i}=t;return!o&&!i?{a:()=>Qe(n,r,!1,!0),b:()=>Qe(s,n,!0,!1)}:!o&&i?{a:()=>Qe(n,r,!1,!1),b:()=>Qe(n,s,!0,!1)}:o&&!i?{a:()=>Qe(r,n,!1,!0),b:()=>Qe(s,n,!1,!1)}:{a:()=>Qe(r,n,!0,!0),b:()=>Qe(n,s,!0,!0)}}};const UN={kernelName:tl,gradFunc:(n,e,t)=>{const{blockShape:s,crops:r}=t;return{x:()=>ud(n,s,r)}}};const GN={kernelName:iC,gradFunc:(n,e,t)=>{const s=t,r=s.inputShape,o=s.shape,i=Array.from(o);for(let l=r.length-1;l>=0;l--)if(r[l]===o[l])i[l]=1;else if(r[l]!==1)throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${o}].`);const a=[];for(let l=0;l<i.length;l++)i[l]>1&&a.push(l);return{x:()=>Se(n,a,!0)}}};const HN={kernelName:ni,gradFunc:n=>({x:()=>n.clone()})};const jN={kernelName:si,gradFunc:n=>({x:()=>je(n)})};const KN={kernelName:ri,inputsToSave:["x"],gradFunc:(n,e,t)=>{const[s]=e,{clipValueMin:r,clipValueMax:o}=t;return{x:()=>an(_s(Tr(s,r),vo(s,o)),n,je(n))}}};const qN={kernelName:nl,inputsToSave:["x"],gradFunc:$x.gradFunc};const XN={kernelName:sl,saveAllInputs:!0,gradFunc:(n,e,t)=>{const s=e.map(l=>l.shape),{axis:r}=t,o=Be(r,e[0].shape)[0],i=s.map(l=>l[o]);return _n(n,i,o).map(l=>()=>l)}};const YN={kernelName:rl,inputsToSave:["x","filter"],gradFunc:(n,e,t)=>{const[s,r]=e,{dilations:o,strides:i,pad:a,dataFormat:l}=t;return _($r(o),()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${o}'`),{x:()=>Jh(s.shape,n,r,i,a,l),filter:()=>yd(s,n,r.shape,i,a,l)}}};const ZN={kernelName:ol,inputsToSave:["dy","filter"],gradFunc:(n,e,t)=>{const[s,r]=e,{strides:o,pad:i,dataFormat:a,dimRoundingMode:l}=t;return{dy:()=>Sr(n,r,o,i,a,1,l),filter:()=>yd(n,s,r.shape,o,i,a,l)}}};function JN(n,e,t,s,r){let o=n;n.rank===4&&(o=H(n,[1,n.shape[0],n.shape[1],n.shape[2],n.shape[3]]));let i=e;i.rank===4&&(i=H(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]])),_(o.rank===5,()=>`Error in conv3dDerFilter: input must be rank 5, but got shape ${o.shape}.`),_(i.rank===5,()=>`Error in conv3dDerFilter: dy must be rank 5, but got shape ${i.shape}.`),_(t.length===5,()=>`Error in conv3dDerFilter: filterShape must be length 5, but got ${t}.`),_(o.shape[4]===t[3],()=>`Error in conv3dDerFilter: depth of input ${o.shape[4]}) must match input depth in filter (${t[3]}.`),_(i.shape[4]===t[4],()=>`Error in conv3dDerFilter: depth of dy (${i.shape[4]}) must match output depth for filter (${t[4]}).`);const a={x:o,dy:i},l={strides:s,pad:r,filterShape:t};return W.runKernel(Ju,a,l)}const QN=j({conv3DBackpropFilter_:JN});const eT={kernelName:il,inputsToSave:["x","filter"],gradFunc:(n,e,t)=>{const{dilations:s,strides:r,pad:o}=t;_($r(s),()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`);const[i,a]=e;return{x:()=>tg(i.shape,n,a,r,o),filter:()=>QN(i,n,a.shape,r,o)}}};const tT={kernelName:oi,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>V(Tt(Tg(be(t,"float32"))),n)}}};const nT={kernelName:ii,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>V(Eg(be(t,"float32")),n)}}};const sT={kernelName:al,inputsToSave:["x"],gradFunc:(n,e,t)=>{const[s]=e,{axis:r,exclusive:o,reverse:i}=t;return{x:()=>{const a=wt([r],s.rank);let l=sg(n,r,o,!i);return a!=null&&(l=Ke(l,a)),l}}}};const rT={kernelName:ll,inputsToSave:["x","filter"],gradFunc:(n,e,t)=>{const{dilations:s,strides:r,pad:o,dimRoundingMode:i}=t,a=s??[1,1];_($r(a),()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`);const[l,c]=e;return _(l.rank===4,()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${l.rank}.`),_(c.rank===4,()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${c.rank}.`),_(l.shape[3]===c.shape[2],()=>`Error in gradient of depthwiseConv2d: number of input channels (${l.shape[3]}) must match the inChannels dimension in filter ${c.shape[2]}.`),_(Qt(r,a),()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${r} and dilations '${a}'.`),mn("depthwiseConv2d",o,i),{x:()=>C2(l.shape,n,c,r,o,a,i),filter:()=>w2(l,n,c.shape,r,o,a,i)}}};const oT={kernelName:cl,inputsToSave:["x","filter"],gradFunc:(n,e,t)=>{const[s,r]=e,o={x:s,filter:r,dy:n},i={x:s,filter:r,dy:n};return{x:()=>W.runKernel(ih,o,t),filter:()=>W.runKernel(ah,i,t)}}};const iT={kernelName:li,outputsToSave:[!0],gradFunc:(n,e)=>{const[t]=e,s={dy:n,y:t};return{x:()=>W.runKernel(ch,s)}}};const aT={kernelName:ci,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e,s=V(ds(Tt(ft(t))),2/Math.sqrt(Math.PI));return{x:()=>V(n,s)}}};const lT={kernelName:ui,outputsToSave:[!0],gradFunc:(n,e)=>{const[t]=e;return{x:()=>V(n,t)}}};const cT={kernelName:hl,inputsToSave:["input"],gradFunc:(n,e)=>{const[t]=e;return{input:()=>H(n,t.shape)}}};const uT={kernelName:hi,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>V(n,ds(t))}}};const hT={kernelName:di,gradFunc:n=>({x:()=>je(n)})};const dT={kernelName:pi,inputsToSave:["a","b"],gradFunc:(n,e)=>{const[t,s]=e,r=Oe(t.shape,s.shape);return{a:()=>{const a=Ne(n,be(s,"float32")),l=Ot(t.shape,r);return l.length>0?H(Se(a,l),t.shape):a},b:()=>{let a=V(n,be(t,"float32"));const l=Ot(s.shape,r);l.length>0&&(a=H(Se(a,l),s.shape));const c=ft(s);return Tt(Ne(a,be(c,"float32")))}}}};const pT={kernelName:dl,inputsToSave:["x","mean","variance","scale"],gradFunc:(n,e,t)=>{const{varianceEpsilon:s}=t,[r,o,i,a]=e,l=a??et(1),c=Ot(o.shape,r.shape),u=[];if(o.rank===1){for(let C=0;C<r.shape.length-1;++C)u.push(r.shape[C]);u.push(1)}const h=Re(r,o),d=V(n,l),f=Ig(ue(i,et(s))),g=V(V(V(f,f),f),et(-.5));return{x:()=>o.rank===1?H(V(V(n,Yn(H(f,[1,1,1,o.shape[0]]),u)),l),r.shape):H(V(V(n,f),l),r.shape),mean:()=>{let C=V(V(f,et(-1)),d);return o.rank===1&&(C=Se(C,c)),H(C,o.shape)},variance:()=>{let C=V(V(g,h),d);return o.rank===1&&(C=Se(C,c)),H(C,o.shape)},scale:()=>{const C=V(h,f);let N=V(n,C);return o.rank===1&&(N=Se(N,c)),H(N,o.shape)},offset:()=>{let C=n;return o.rank===1&&(C=Se(C,c)),H(C,o.shape)}}}};const fT={kernelName:pl,inputsToSave:["x","indices"],gradFunc:(n,e,t)=>{const[s,r]=e,{axis:o,batchDims:i}=t,a=Be(o,s.shape)[0],l=(c,u,h)=>()=>{const d=c.shape,f=u.size,g=d.slice(0,a),x=g.length,b=d.slice(o,d.length).slice(1),y=b.length,w=Ix(0,x),$=Ix(x+1,x+1+y),C=Sx([g,[f],b]),N=H(h,C),E=H(u,[f]),F=Sx([[x],w,$]),O=Ke(N,F);let A=_g(O,E,c.shape[a]);const D=Ys(F);return A=Ke(A,D),A};if(i===1){const c=s.shape[0],u=s.split(c,0);return{x:()=>Fs(u.map((f,g)=>l(f,r.slice(g,1),n.slice(g,1))())).reshape(s.shape),indices:()=>r}}else return{x:l(s,r,n),indices:()=>r}}};function Ix(n,e){const t=[];for(let s=n;s<e;++s)t.push(s);return t}function Sx(n){const e=[];for(let t=0;t<n.length;++t)for(let s=0;s<n[t].length;++s)e.push(n[t][s]);return e}const mT={kernelName:fi,inputsToSave:["a","b"],gradFunc:(n,e)=>{const[t,s]=e;return{a:()=>je(t),b:()=>je(s)}}};const gT={kernelName:mi,gradFunc:n=>({x:()=>be(n,"float32")})};const xT={kernelName:gi,gradFunc:n=>({x:()=>je(n)})};const bT={kernelName:xi,gradFunc:n=>({x:()=>je(n)})};const yT={kernelName:bi,gradFunc:n=>({x:()=>je(n)})};const wT={kernelName:ml,inputsToSave:["x"],gradFunc:(n,e,t)=>{const[s]=e,{alpha:r}=t,o=An(s,0);return{x:()=>an(o,n,V(n,r))}}};const vT={kernelName:wi,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>Ne(n,ue(t,1))}}};const CT={kernelName:yi,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>Ne(n,be(t,"float32"))}}};const kT={kernelName:lC,inputsToSave:[],outputsToSave:[!0],gradFunc:(n,e,t)=>{const[s]=e,{axis:r}=t;return{logits:()=>{const i=ds(s);return Re(n,V(Se(n,r,!0),i))}}}};function $T(n,e,t,s=5,r=1,o=1,i=.5){const a={x:n,y:e,dy:t},l={depthRadius:s,bias:r,alpha:o,beta:i};return W.runKernel(mh,a,l)}const IT=j({localResponseNormalizationBackprop_:$T});const ST={kernelName:vl,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,e,t)=>{const[s,r]=e,{depthRadius:o,bias:i,alpha:a,beta:l}=t;return{x:()=>IT(s,r,n,o,i,a,l)}}};function Nx(n,e,t,s){return e.rank<t.rank&&(e=H(e,At(e.shape,s))),n.rank<t.rank&&(n=H(n,At(n.shape,s))),{x:()=>V(n,be(hs(t,e),n.dtype))}}const Tx={kernelName:Cl,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,e,t)=>{const s=t,{reductionIndices:r}=s,o=e[0],i=e[1],a=Be(r,o.shape),l=Nx(n,i,o,a);return{x:()=>l.x()}}};const NT={kernelName:vi,inputsToSave:["a","b"],gradFunc:(n,e)=>{const[t,s]=e;return{a:()=>V(n,be(Tr(t,s),"float32")),b:()=>V(n,be(hc(t,s),"float32"))}}};function TT(n,e,t,s,r,o,i){const a=M(n,"dy","maxPool3dGrad"),l=M(e,"input","maxPool3dGrad"),c=M(t,"output","maxPool3dGrad");let u=a,h=l,d=c,f=!1;l.rank===4&&(f=!0,u=H(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]]),h=H(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]]),d=H(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]])),_(u.rank===5,()=>`Error in maxPool3dGrad: dy must be rank 5 but got rank ${u.rank}.`),_(h.rank===5,()=>`Error in maxPool3dGrad: input must be rank 5 but got rank ${h.rank}.`),_(d.rank===5,()=>`Error in maxPool3dGrad: output must be rank 5 but got rank ${d.rank}.`),mn("maxPool3dGrad",o,i);const g={dy:u,input:h,output:d},x={filterSize:s,strides:r,pad:o,dimRoundingMode:i},b=W.runKernel(xh,g,x);return f?H(b,[b.shape[1],b.shape[2],b.shape[3],b.shape[4]]):b}const ET=j({maxPool3dGrad_:TT});const RT={kernelName:$l,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,e,t)=>{const[s,r]=e,{filterSize:o,strides:i,pad:a,dimRoundingMode:l}=t;return{x:()=>ET(n,s,r,o,i,a,l)}}};function DT(n,e,t,s,r,o,i){const a=M(n,"dy","maxPoolGrad"),l=M(e,"input","maxPoolGrad"),c=M(t,"output","maxPoolGrad");_(l.rank===a.rank,()=>`Rank of input (${l.rank}) does not match rank of dy (${a.rank})`),_(a.rank===4,()=>`Error in maxPoolGrad: dy must be rank 4 but got rank ${a.rank}.`),_(l.rank===4,()=>`Error in maxPoolGrad: input must be rank 4 but got rank ${l.rank}.`),mn("maxPoolGrad",o,i);const u={dy:a,input:l,output:c},h={filterSize:s,strides:r,pad:o,dimRoundingMode:i};return W.runKernel(gh,u,h)}const AT=j({maxPoolGrad_:DT});const _T={kernelName:kl,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,e,t)=>{const[s,r]=e,{filterSize:o,strides:i,pad:a}=t;return{x:()=>AT(n,s,r,o,i,a)}}};const FT={kernelName:Il,inputsToSave:["x"],gradFunc:(n,e,t)=>{const[s]=e,{axis:r}=t,o=Be(r,s.shape),a=Ut(s.shape,o)[1],l=ne(a);return{x:()=>{const u=s.shape.slice();o.forEach(f=>{u[f]=1});const h=H(n,u);return Ne(V(h,Js(s.shape,"float32")),l)}}}};const OT={kernelName:Sl,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,e,t)=>{const s=t,{axis:r}=s,[o,i]=e,a=Be(r,o.shape),l=Nx(n,i,o,a);return{x:()=>l.x()}}};const PT={kernelName:Ci,inputsToSave:["a","b"],gradFunc:(n,e)=>{const[t,s]=e;return{a:()=>V(n,be(vo(t,s),"float32")),b:()=>V(n,be(An(t,s),"float32"))}}};const LT={kernelName:Nl,inputsToSave:["x"],gradFunc:(n,e,t)=>{const s=e[0],{paddings:r}=t,o=r.map(i=>i[0]);return{x:()=>dt(n,o,s.shape)}}};const MT={kernelName:ki,inputsToSave:["a","b"],gradFunc:(n,e)=>{const[t,s]=e,r=Oe(t.shape,s.shape);return{a:()=>{const a=Ot(t.shape,r);return a.length>0?H(Se(n,a),t.shape):n},b:()=>{const a=V(n,Tt(uc(Ne(t,s)))),l=Ot(s.shape,r);return l.length>0?H(Se(a,l),s.shape):a}}}};const zT={kernelName:$i,inputsToSave:["a","b"],gradFunc:(n,e)=>{const[t,s]=e,r=Oe(t.shape,s.shape);return{a:()=>{const a=V(n,be(s,"float32")),l=Ot(t.shape,r);return l.length>0?H(Se(a,l),t.shape):a},b:()=>{const a=V(n,be(t,"float32")),l=Ot(s.shape,r);return l.length>0?H(Se(a,l),s.shape):a}}}};const BT={kernelName:Tl,gradFunc:n=>({x:()=>Tt(n)})};const VT={kernelName:Dl,inputsToSave:["indices"],gradFunc:(n,e)=>{const t=e[0];return{indices:()=>Gt(t.shape,"float32")}}};const WT={kernelName:Rl,gradFunc:n=>({x:()=>je(n)})};const UT={kernelName:Al,saveAllInputs:!0,gradFunc:(n,e,t)=>{const{axis:s}=t;return Ar(n,s).map(o=>()=>o)}};const Ex={kernelName:_l,inputsToSave:["x"],gradFunc:(n,e,t)=>{const s=e[0],{paddings:r}=t,o=r.map(i=>i[0]);return{x:()=>dt(n,o,s.shape)}}};const GT={kernelName:Ii,inputsToSave:["a","b"],outputsToSave:[!0],gradFunc:(n,e)=>{const[t,s,r]=e,o=t,i=s,a=Oe(o.shape,i.shape);return{a:()=>{const u=be(i,"float32");let h=V(n,V(u,Nr(o,Re(u,et(1)))));const d=Ot(o.shape,a);return d.length>0&&(h=Se(h,d)),H(h,o.shape)},b:()=>{const u=An(o,0),h=an(u,ps(o),je(o));let d=V(n,V(r,h));const f=Ot(i.shape,a);return f.length>0&&(d=Se(d,f)),H(d,i.shape)}}}};const HT={kernelName:Fl,inputsToSave:["x","alpha"],gradFunc:(n,e)=>{const[t,s]=e,r=An(t,0);return{x:()=>an(r,n,V(n,s)),alpha:()=>{let o=an(r,je(n),V(n,t));const i=Ot(s.shape,n.shape);return i.length>0&&(o=Se(o,i)),H(o,s.shape)}}}};function jT(n,e,t){const s=n.shape.slice();s[t]=1;const r=H(e,s),o=ed(n,t,!0,!1),i=ed(n,t,!0,!0),a=V(o,i);return V(r,a)}function KT(n,e,t){const s=n.shape.length,r=s-t.length,o=wt(t,s);let i=n;o!=null&&(i=Ke(n,o));const a=i.shape.slice(),c=a.splice(s-t.length,t.length).reduce((d,f)=>d*f,1);a.push(c);const u=i.reshape(a);let h=jT(u,e,r);if(h=h.reshape(i.shape),o!=null){const d=Ys(o);h=Ke(h,d)}return h}const qT={kernelName:Ol,inputsToSave:["x"],gradFunc:(n,e,t)=>{const[s]=e,{axis:r}=t;let o=[];return r==null?o=s.shape.map((i,a)=>a):typeof r=="number"?o=[r]:o=r,{x:()=>KT(s,n,o)}}};const XT={kernelName:ai,inputsToSave:["a","b"],gradFunc:(n,e)=>{const[t,s]=e,r=Oe(t.shape,s.shape);return{a:()=>{const a=Ne(n,be(s,"float32")),l=Ot(t.shape,r);return l.length>0?H(Se(a,l),t.shape):a},b:()=>{let a=V(n,be(t,"float32"));const l=Ot(s.shape,r);l.length>0&&(a=H(Se(a,l),s.shape));const c=ft(s);return Tt(Ne(a,be(c,"float32")))}}}};const YT={kernelName:Si,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>Ne(n,Tt(ft(t)))}}};const ZT={kernelName:Ti,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e,s=V(vo(t,6),ra(t));return{x:()=>V(n,be(s,"float32"))}}};const JT={kernelName:Ni,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>V(n,be(ra(t),"float32"))}}};const QT={kernelName:Pl,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>H(n,t.shape)}}};const eE={kernelName:Ml,inputsToSave:["images"],gradFunc:(n,e,t)=>{const[s]=e,r={dy:n,images:s};return{images:()=>W.runKernel($h,r,t)}}};const tE={kernelName:Ll,inputsToSave:["images"],gradFunc:(n,e,t)=>{const[s]=e,r={dy:n,images:s};return{images:()=>W.runKernel(kh,r,t)}}};const nE={kernelName:zl,gradFunc:(n,e,t)=>{const{dims:s}=t,r=Be(s,n.shape);return{x:()=>Rr(n,r)}}};const sE={kernelName:Ei,gradFunc:n=>({x:()=>je(n)})};const rE={kernelName:Ri,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>Tt(Ne(n,V(Nr(t,1.5),2)))}}};const oE={kernelName:Bl,inputsToSave:["condition"],gradFunc:(n,e)=>{const[t]=e;return{condition:()=>be(je(t),"float32"),t:()=>V(n,be(t,n.dtype)),e:()=>V(n,be(id(t),n.dtype))}}};const iE={kernelName:Di,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>{const s=An(t,et(0)),r=et(kc),o=et($c),i=V(n,o),a=V(V(n,r),ds(be(t,"float32")));return an(s,i,a)}}}};const aE={kernelName:Oi,outputsToSave:[!0],gradFunc:(n,e)=>{const[t]=e;return{x:()=>V(n,V(t,Re(et(1),t)))}}};const lE={kernelName:Fi,gradFunc:n=>({x:()=>je(n)})};const cE={kernelName:Ai,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>V(Qh(be(t,"float32")),n)}}};const uE={kernelName:_i,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>V(ng(be(t,"float32")),n)}}};const hE={kernelName:Vl,inputsToSave:["x"],gradFunc:(n,e,t)=>{const[s]=e,{begin:r,size:o}=t,i=s.shape,[a,l]=Dd(s,r,o),c=[];for(let u=0;u<n.rank;u++)c.push([a[u],i[u]-a[u]-l[u]]);return{x:()=>cd(n,c)}}};const dE={kernelName:Hl,outputsToSave:[!0],gradFunc:(n,e,t)=>{const[s]=e,{dim:r}=t,o=!0,i=V(n,s);return{logits:()=>Re(i,V(Se(i,[r],o),s))}}};const pE={kernelName:Pi,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>V(n,yo(t))}}};const Rx={kernelName:Ul,gradFunc:(n,e,t)=>{const{blockShape:s,paddings:r}=t;return{x:()=>Zh(n,s,r)}}};const Dx={kernelName:Gl,gradFunc:(n,e,t)=>{const{axis:s}=t;return{x:()=>gn(n,s)}}};const fE={kernelName:Li,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>Ne(n,V(en(be(t,"float32")),2))}}};const mE={kernelName:Ih,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>V(n,V(be(t,"float32"),2))}}};const gE={kernelName:Mi,inputsToSave:["a","b"],gradFunc:(n,e)=>{const[t,s]=e,r=et(2);return{a:()=>V(n,V(r,Re(t,s))),b:()=>V(n,V(r,Re(s,t)))}}};const xE={kernelName:Ui,gradFunc:n=>({x:()=>je(n)})};const bE={kernelName:zi,inputsToSave:["a","b"],gradFunc:(n,e)=>{const[t,s]=e,r=Oe(t.shape,s.shape);return{a:()=>{let a=n;const l=Ot(t.shape,r);return l.length>0&&(a=Se(a,l)),H(a,t.shape)},b:()=>{let a=n;const l=Ot(s.shape,r);return l.length>0&&(a=Se(a,l)),H(Tt(a),s.shape)}}}};const yE={kernelName:Wl,inputsToSave:["x"],gradFunc:(n,e,t)=>{const[s]=e,r=s.shape.slice(),{axis:o}=t;Be(o,s.shape).forEach(c=>{r[c]=1});const a=H(n,r),l=V(a,Js(s.shape,"float32"));return{x:()=>l}}};const wE={kernelName:Bi,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>Ne(n,ft(Qh(t)))}}};const vE={kernelName:Vi,outputsToSave:[!0],gradFunc:(n,e)=>{const[t]=e;return{x:()=>V(Re(et(1),ft(t)),n)}}};const CE={kernelName:Wi,inputsToSave:["x"],gradFunc:(n,e,t)=>{const[s]=e,{reps:r}=t;return{x:()=>{let i=je(s);if(s.rank===1)for(let a=0;a<r[0];++a)i=ue(i,dt(n,[a*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(let a=0;a<r[0];++a)for(let l=0;l<r[1];++l)i=ue(i,dt(n,[a*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(let a=0;a<r[0];++a)for(let l=0;l<r[1];++l)for(let c=0;c<r[2];++c)i=ue(i,dt(n,[a*s.shape[0],l*s.shape[1],c*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else if(s.rank===4)for(let a=0;a<r[0];++a)for(let l=0;l<r[1];++l)for(let c=0;c<r[2];++c)for(let u=0;u<r[3];++u)i=ue(i,dt(n,[a*s.shape[0],l*s.shape[1],c*s.shape[2],u*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]));else throw new Error(`Gradient for tile operation is not implemented for rank-${s.rank} tensors yet.`);return i}}}};const kE={kernelName:ho,gradFunc:(n,e,t)=>{const s=t,{perm:r}=s,o=Ys(r);return{x:()=>Ke(n,o)}}};const $E={kernelName:jl,gradFunc:(n,e,t)=>{const s=t,{axis:r}=s;return{value:()=>Fs(n,r)}}};const IE={kernelName:Kl,inputsToSave:["segmentIds"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>SE(n,t)}}};function SE(n,e){const t=Zs(e,je(e)),s=sd(n,t);let r=Tr(e,et(0,"int32"));const o=s.rank-r.rank;for(let a=0;a<o;++a)r=xn(r,a+1);r=_s(r,Js(s.shape,"bool"));const i=je(s);return an(r,s,i)}const NE={kernelName:ql,gradFunc:n=>({x:()=>je(n)})};const TE=[$x,IN,SN,NN,TN,EN,RN,DN,AN,_N,FN,ON,MN,VN,WN,UN,GN,HN,jN,KN,qN,XN,ZN,YN,eT,tT,nT,sT,rT,oT,XT,iT,aT,lT,cT,uT,dT,hT,pT,fT,mT,gT,xT,bT,yT,wT,vT,CT,kT,ST,Tx,Tx,NT,RT,_T,FT,OT,PT,LT,MT,zT,BT,VT,WT,UT,Ex,Ex,GT,HT,qT,YT,ZT,JT,QT,eE,tE,nE,sE,rE,oE,iE,aE,lE,cE,uE,hE,dE,pE,Rx,Rx,Dx,Dx,fE,gE,mE,xE,bE,yE,wE,vE,CE,kE,$E,IE,NE];for(const n of TE)uC(n);ee().prototype.abs=function(){return this.throwIfDisposed(),on(this)};ee().prototype.acos=function(){return this.throwIfDisposed(),pk(this)};ee().prototype.acosh=function(){return this.throwIfDisposed(),mk(this)};ee().prototype.add=function(n){return this.throwIfDisposed(),ue(this,n)};ee().prototype.all=function(n,e){return this.throwIfDisposed(),Jm(this,n,e)};ee().prototype.any=function(n,e){return this.throwIfDisposed(),Kh(this,n,e)};ee().prototype.argMax=function(n){return this.throwIfDisposed(),Ki(this,n)};ee().prototype.argMin=function(n){return this.throwIfDisposed(),wk(this,n)};ee().prototype.asScalar=function(){return this.throwIfDisposed(),_(this.size===1,()=>"The array must have only 1 element."),H(this,[])};ee().prototype.asType=function(n){return this.throwIfDisposed(),be(this,n)};ee().prototype.as1D=function(){return this.throwIfDisposed(),H(this,[this.size])};ee().prototype.as2D=function(n,e){return this.throwIfDisposed(),H(this,[n,e])};ee().prototype.as3D=function(n,e,t){return this.throwIfDisposed(),H(this,[n,e,t])};ee().prototype.as4D=function(n,e,t,s){return this.throwIfDisposed(),H(this,[n,e,t,s])};ee().prototype.as5D=function(n,e,t,s,r){return this.throwIfDisposed(),H(this,[n,e,t,s,r])};ee().prototype.asin=function(){return this.throwIfDisposed(),Ck(this)};ee().prototype.asinh=function(){return this.throwIfDisposed(),$k(this)};ee().prototype.atan=function(){return this.throwIfDisposed(),Sk(this)};ee().prototype.atan2=function(n){return this.throwIfDisposed(),Tk(this,n)};ee().prototype.atanh=function(){return this.throwIfDisposed(),Rk(this)},ee().prototype.avgPool=function(n,e,t,s){return this.throwIfDisposed(),Yh(this,n,e,t,s)};ee().prototype.batchToSpaceND=function(n,e){return this.throwIfDisposed(),Zh(this,n,e)};ee().prototype.batchNorm=function(n,e,t,s,r){return this.throwIfDisposed(),oc(this,n,e,t,s,r)};ee().prototype.broadcastTo=function(n){return this.throwIfDisposed(),Zi(this,n)};ee().prototype.cast=function(n){return this.throwIfDisposed(),be(this,n)};ee().prototype.ceil=function(){return this.throwIfDisposed(),s$(this)};ee().prototype.clipByValue=function(n,e){return this.throwIfDisposed(),Dn(this,n,e)};ee().prototype.concat=function(n,e){return this.throwIfDisposed(),n instanceof Ft&&(n=[n]),gn([this,...n],e)};ee().prototype.conv1d=function(n,e,t,s,r,o){return this.throwIfDisposed(),Qm(this,n,e,t,s,r,o)};ee().prototype.conv2dTranspose=function(n,e,t,s,r){return this.throwIfDisposed(),eg(this,n,e,t,s,r)};ee().prototype.conv2d=function(n,e,t,s,r,o){return this.throwIfDisposed(),Sr(this,n,e,t,s,r,o)};ee().prototype.cos=function(){return this.throwIfDisposed(),Qh(this)};ee().prototype.cosh=function(){return this.throwIfDisposed(),ng(this)};ee().prototype.cumprod=function(n,e,t){return this.throwIfDisposed(),ed(this,n,e,t)};ee().prototype.cumsum=function(n,e,t){return this.throwIfDisposed(),sg(this,n,e,t)};ee().prototype.depthToSpace=function(n,e){return this.throwIfDisposed(),T$(this,n,e)};ee().prototype.depthwiseConv2d=function(n,e,t,s,r,o){return this.throwIfDisposed(),td(this,n,e,t,s,r,o)};ee().prototype.dilation2d=function(n,e,t,s,r){return this.throwIfDisposed(),D$(this,n,e,t,s,r)};ee().prototype.divNoNan=function(n){return this.throwIfDisposed(),P$(this,n)};ee().prototype.div=function(n){return this.throwIfDisposed(),Ne(this,n)};ee().prototype.dot=function(n){return this.throwIfDisposed(),M$(this,n)};ee().prototype.elu=function(){return this.throwIfDisposed(),ac(this)};ee().prototype.equal=function(n){return this.throwIfDisposed(),hs(this,n)};ee().prototype.erf=function(){return this.throwIfDisposed(),og(this)};ee().prototype.euclideanNorm=function(n,e){return this.throwIfDisposed(),Y$(this,n,e)};ee().prototype.exp=function(){return this.throwIfDisposed(),ds(this)};ee().prototype.expandDims=function(n){return this.throwIfDisposed(),xn(this,n)};ee().prototype.expm1=function(){return this.throwIfDisposed(),eI(this)};ee().prototype.fft=function(){return this.throwIfDisposed(),Dg(this)};ee().prototype.flatten=function(){return this.throwIfDisposed(),H(this,[this.size])};ee().prototype.floor=function(){return this.throwIfDisposed(),uc(this)};ee().prototype.floorDiv=function(n){return this.throwIfDisposed(),Zm(this,n)};ee().prototype.gather=function(n,e,t){return this.throwIfDisposed(),sd(this,n,e,t)};ee().prototype.greaterEqual=function(n){return this.throwIfDisposed(),Tr(this,n)};ee().prototype.greater=function(n){return this.throwIfDisposed(),An(this,n)};ee().prototype.ifft=function(){return this.throwIfDisposed(),xd(this)};ee().prototype.irfft=function(){return this.throwIfDisposed(),HS(this)};ee().prototype.isFinite=function(){return this.throwIfDisposed(),cI(this)};ee().prototype.isInf=function(){return this.throwIfDisposed(),hI(this)};ee().prototype.isNaN=function(){return this.throwIfDisposed(),pI(this)};ee().prototype.leakyRelu=function(n){return this.throwIfDisposed(),od(this,n)};ee().prototype.lessEqual=function(n){return this.throwIfDisposed(),vo(this,n)};ee().prototype.less=function(n){return this.throwIfDisposed(),hc(this,n)};ee().prototype.localResponseNormalization=function(n,e,t,s){return this.throwIfDisposed(),bI(this,n,e,t,s)};ee().prototype.logSigmoid=function(){return this.throwIfDisposed(),II(this)};ee().prototype.logSoftmax=function(n){return this.throwIfDisposed(),ug(this,n)};ee().prototype.logSumExp=function(n,e){return this.throwIfDisposed(),hg(this,n,e)};ee().prototype.log=function(){return this.throwIfDisposed(),ps(this)};ee().prototype.log1p=function(){return this.throwIfDisposed(),cg(this)};ee().prototype.logicalAnd=function(n){return this.throwIfDisposed(),_s(this,n)};ee().prototype.logicalNot=function(){return this.throwIfDisposed(),id(this)};ee().prototype.logicalOr=function(n){return this.throwIfDisposed(),dg(this,n)};ee().prototype.logicalXor=function(n){return this.throwIfDisposed(),_I(this,n)};ee().prototype.matMul=function(n,e,t){return this.throwIfDisposed(),Qe(this,n,e,t)},ee().prototype.maxPool=function(n,e,t,s){return this.throwIfDisposed(),ad(this,n,e,t,s)};ee().prototype.max=function(n,e){return this.throwIfDisposed(),Xn(this,n,e)};ee().prototype.maximum=function(n){return this.throwIfDisposed(),Zs(this,n)};ee().prototype.mean=function(n,e){return this.throwIfDisposed(),_t(this,n,e)};ee().prototype.min=function(n,e){return this.throwIfDisposed(),lc(this,n,e)};ee().prototype.minimum=function(n){return this.throwIfDisposed(),ea(this,n)};ee().prototype.mirrorPad=function(n,e){return this.throwIfDisposed(),VI(this,n,e)};ee().prototype.mod=function(n){return this.throwIfDisposed(),UI(this,n)};ee().prototype.mul=function(n){return this.throwIfDisposed(),V(this,n)};ee().prototype.neg=function(){return this.throwIfDisposed(),Tt(this)};ee().prototype.norm=function(n,e,t){return this.throwIfDisposed(),cc(this,n,e,t)};ee().prototype.notEqual=function(n){return this.throwIfDisposed(),dc(this,n)};ee().prototype.oneHot=function(n,e=1,t=0){return this.throwIfDisposed(),pg(this,n,e,t)};ee().prototype.onesLike=function(){return this.throwIfDisposed(),Mn(this)};ee().prototype.pad=function(n,e){return this.throwIfDisposed(),cd(this,n,e)},ee().prototype.pool=function(n,e,t,s,r,o){return this.throwIfDisposed(),QI(this,n,e,t,s,r,o)};ee().prototype.pow=function(n){return this.throwIfDisposed(),Nr(this,n)};ee().prototype.prelu=function(n){return this.throwIfDisposed(),hd(this,n)};ee().prototype.prod=function(n,e){return this.throwIfDisposed(),nS(this,n,e)};ee().prototype.reciprocal=function(){return this.throwIfDisposed(),IS(this)};ee().prototype.relu=function(){return this.throwIfDisposed(),Er(this)};ee().prototype.relu6=function(){return this.throwIfDisposed(),kg(this)};ee().prototype.reshapeAs=function(n){return this.throwIfDisposed(),H(this,n.shape)};ee().prototype.reshape=function(n){return this.throwIfDisposed(),H(this,n)};ee().prototype.resizeBilinear=function(n,e,t){return this.throwIfDisposed(),Lg(this,n,e,t)};ee().prototype.resizeNearestNeighbor=function(n,e,t){return this.throwIfDisposed(),Mg(this,n,e,t)};ee().prototype.reverse=function(n){return this.throwIfDisposed(),Rr(this,n)};ee().prototype.rfft=function(){return this.throwIfDisposed(),qS(this)};ee().prototype.round=function(){return this.throwIfDisposed(),$g(this)};ee().prototype.rsqrt=function(){return this.throwIfDisposed(),Ig(this)};ee().prototype.selu=function(){return this.throwIfDisposed(),Sg(this)};ee().prototype.separableConv2d=function(n,e,t,s,r,o){return this.throwIfDisposed(),Ng(this,n,e,t,s,r,o)};ee().prototype.sigmoid=function(){return this.throwIfDisposed(),yo(this)};ee().prototype.sign=function(){return this.throwIfDisposed(),FS(this)};ee().prototype.sin=function(){return this.throwIfDisposed(),Tg(this)};ee().prototype.sinh=function(){return this.throwIfDisposed(),Eg(this)};ee().prototype.slice=function(n,e){return this.throwIfDisposed(),dt(this,n,e)};ee().prototype.softmax=function(n){return this.throwIfDisposed(),gd(this,n)};ee().prototype.softplus=function(){return this.throwIfDisposed(),Qi(this)};ee().prototype.spaceToBatchND=function(n,e){return this.throwIfDisposed(),ud(this,n,e)};ee().prototype.split=function(n,e){return this.throwIfDisposed(),_n(this,n,e)};ee().prototype.sqrt=function(){return this.throwIfDisposed(),en(this)};ee().prototype.square=function(){return this.throwIfDisposed(),ft(this)};ee().prototype.squaredDifference=function(n){return this.throwIfDisposed(),YS(this,n)};ee().prototype.squeeze=function(n){return this.throwIfDisposed(),sa(this,n)};ee().prototype.stack=function(n,e){this.throwIfDisposed();const t=n instanceof Ft?[this,n]:[this,...n];return Fs(t,e)};ee().prototype.step=function(n){return this.throwIfDisposed(),ra(this,n)};ee().prototype.stridedSlice=function(n,e,t,s,r,o,i,a){return this.throwIfDisposed(),t2(this,n,e,t,s,r,o,i,a)};ee().prototype.sub=function(n){return this.throwIfDisposed(),Re(this,n)};ee().prototype.sum=function(n,e){return this.throwIfDisposed(),Se(this,n,e)};ee().prototype.tan=function(){return this.throwIfDisposed(),s2(this)};ee().prototype.tanh=function(){return this.throwIfDisposed(),rc(this)};ee().prototype.tile=function(n){return this.throwIfDisposed(),Yn(this,n)};ee().prototype.toBool=function(){return this.throwIfDisposed(),be(this,"bool")};ee().prototype.toFloat=function(){return this.throwIfDisposed(),be(this,"float32")};ee().prototype.toInt=function(){return this.throwIfDisposed(),be(this,"int32")};ee().prototype.topk=function(n,e){return this.throwIfDisposed(),o2(this,n,e)};ee().prototype.transpose=function(n){return this.throwIfDisposed(),Ke(this,n)};ee().prototype.unique=function(n){return this.throwIfDisposed(),l2(this,n)};ee().prototype.unsortedSegmentSum=function(n,e){return this.throwIfDisposed(),_g(this,n,e)};ee().prototype.unstack=function(n){return this.throwIfDisposed(),Ar(this,n)};ee().prototype.where=function(n,e){return this.throwIfDisposed(),an(n,this,e)};ee().prototype.zerosLike=function(){return this.throwIfDisposed(),je(this)};class ms extends Error{constructor(e){super(e),Object.setPrototypeOf(this,ms.prototype)}}class Bn extends Error{constructor(e){super(e),Object.setPrototypeOf(this,Bn.prototype)}}class B extends Error{constructor(e){super(e),Object.setPrototypeOf(this,B.prototype)}}class Me extends Error{constructor(e){super(e),Object.setPrototypeOf(this,Me.prototype)}}class Jd extends Error{constructor(e){super(e),Object.setPrototypeOf(this,Jd.prototype)}}class Ax{constructor(e){this.maxEntries=e||100,this.cache=new Map}get(e){let t;return this.cache.has(e)&&(t=this.cache.get(e),this.cache.delete(e),this.cache.set(e,t)),t}put(e,t){if(this.cache.has(e))this.cache.delete(e);else if(this.cache.size>=this.maxEntries){const s=this.cache.keys().next().value;this.cache.delete(s)}this.cache.set(e,t)}getMaxEntries(){return this.maxEntries}setMaxEntries(e){if(e<0)throw new Error(`The maxEntries of LRU caches must be at least 0, but got ${e}.`);if(this.maxEntries>e)for(let t=0;t<this.maxEntries-e;t++){const s=this.cache.keys().next().value;this.cache.delete(s)}this.maxEntries=e}}function _r(n,e){if(Array.isArray(n)){let t=[];for(let s=0;s<e;s++)t=t.concat(n);return t}else{const t=new Array(e);return t.fill(n),t}}function gs(n,e){if(!n)throw new Jd(e)}function _x(n,e){let t=0;for(const s of n)s===e&&t++;return t}function bn(n){return n.length===1?n[0]:n}function st(n){return Array.isArray(n)?n:[n]}function Ms(n){const t=n.replace(/(.)([A-Z][a-z0-9]+)/g,"$1_$2").replace(/([a-z])([A-Z])/g,"$1_$2").toLowerCase();return t[0]!=="_"?t:"private"+t}function Fr(n){return n.length<=1||n.indexOf("_")===-1?n:n.replace(/[_]+(\w|$)/g,(e,t)=>t.toUpperCase())}let Vn={};function Qd(n){if(n==null)return null;const e={};return e.className=n.getClassName(),e.config=n.getConfig(),e}function ep(n){if(!(n==null||typeof n!="object"))if(Array.isArray(n))n.forEach(e=>ep(e));else{const e=Object.keys(n);for(const t of e){const s=n[t];s!=null&&typeof s=="object"&&(!Array.isArray(s)&&s.type==="ndarray"&&typeof s.value=="number"?n[t]=s.value:ep(s))}}}function la(n,e={},t={},s="object",r=!1){if(typeof n=="string"){const o=n;let i;if(o in t)i=t[o];else if(o in Vn)i=Vn[o];else if(i=e[o],i==null)throw new B(`Unknown ${s}: ${n}. This may be due to one of the following reasons:
1. The ${s} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${s} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);return i}else{const o=n;if(o.className==null||o.config==null)throw new B(`${s}: Improper config format: ${JSON.stringify(o)}.
'className' and 'config' must set.`);const i=o.className;let a,l;if(i in t?[a,l]=t[i]:i in Vn?[a,l]=Vn.className:i in e&&([a,l]=e[i]),a==null)throw new B(`Unknown ${s}: ${i}. This may be due to one of the following reasons:
1. The ${s} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${s} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);if(l!=null){const c={};for(const f of Object.keys(Vn))c[f]=Vn[f];for(const f of Object.keys(t))c[f]=t[f];const u=o.config;u.customObjects=c;const h=Object.assign({},Vn);for(const f of Object.keys(t))Vn[f]=t[f];ep(o.config);const d=l(a,o.config,t,r);return Vn=Object.assign({},h),d}else{const c=Object.assign({},Vn);for(const h of Object.keys(t))Vn[h]=t[h];const u=new a(o.config);return Vn=Object.assign({},c),u}}}function EE(n,e){return n<e?-1:n>e?1:0}function Ic(n,e){return-1*EE(n,e)}function er(n){if(n==null)return n;const e=[];for(const t of n)e.indexOf(t)===-1&&e.push(t);return e}function RE(n){if(n==null)throw new B(`Invalid value in obj: ${JSON.stringify(n)}`);for(const e in n)if(n.hasOwnProperty(e))return!1;return!0}function Or(n,e,t){if(t!=null&&n.indexOf(t)<0)throw new B(`${t} is not a valid ${e}.  Valid values are ${n} or null/undefined.`)}function tp(n,e,t=0,s=1/0){return gs(t>=0),gs(s>=t),Array.isArray(n)&&n.length>=t&&n.length<=s&&n.every(r=>typeof r===e)}function Ht(n,e){Array.isArray(n)?(_(n.length>0,()=>`${e} is unexpectedly an empty array.`),n.forEach((t,s)=>Ht(t,`element ${s+1} of ${e}`))):_(Number.isInteger(n)&&n>0,()=>`Expected ${e} to be a positive integer, but got ${Fx(n)}.`)}function Fx(n){return n===null?"null":Array.isArray(n)?"["+n.map(e=>Fx(e)).join(",")+"]":typeof n=="string"?`"${n}"`:`${n}`}function DE(n,e,t){let s=t!=null?t():pn(),r;return(...i)=>{const a=t!=null?t():pn();return a-s<e||(s=a,r=n(...i)),r}}function Ox(n){return n==="relu"?"relu":n==="linear"?"linear":n==="elu"?"elu":null}let AE=0;function Px(){return AE++}const Sc={};function Nc(n=""){return n in Sc||(Sc[n]=0),Sc[n]+=1,n+Sc[n].toString()}const _E=["channelsFirst","channelsLast"],FE=["nearest","bilinear"],OE=["valid","same","causal"],PE=["max","avg"],LE=["sum","mul","concat","ave"];const So=new Map;function Et(n){Or(_E,"DataFormat",n)}function ME(n){Or(FE,"InterpolationFormat",n)}function Fn(n){Or(OE,"PaddingMode",n)}function Lx(n){Or(PE,"PoolMode",n)}const ca=[],Mx="/";function Pr(n,e){ca.push(n);try{const t=e();return ca.pop(),t}catch(t){throw ca.pop(),t}}function zE(){return ca.length===0?"":ca.join(Mx)+Mx}function zx(n){if(!Vx(n))throw new Error("Not a valid tensor name: '"+n+"'");return zE()+n}function Bx(n){if(!Vx(n))throw new Error("Not a valid tensor name: '"+n+"'");So.has(n)||So.set(n,0);const e=So.get(n);if(So.set(n,So.get(n)+1),e>0){const t=`${n}_${e}`;return So.set(t,1),t}else return n}const BE=new RegExp(/^[A-Za-z0-9][-A-Za-z0-9\._\/]*$/);function Vx(n){return!!n.match(BE)}function VE(n){return n===parseInt(n.toString(),10)}function tr(n,e,t){e==null&&(e=0),t==null&&(t=n.length);let s=1;for(let r=e;r<t;++r)s*=n[r];return s}function No(n){if(n.length===0)return Number.NaN;let e=Number.POSITIVE_INFINITY;for(let t=0;t<n.length;t++){const s=n[t];s<e&&(e=s)}return e}function nr(n){if(n.length===0)return Number.NaN;let e=Number.NEGATIVE_INFINITY;for(let t=0;t<n.length;t++){const s=n[t];s>e&&(e=s)}return e}function Jn(n,e){if(e<n)throw new B(`end (${e}) < begin (${n}) is forbidden.`);const t=[];for(let s=n;s<e;++s)t.push(s);return t}let np;function Pt(){return np==null&&(np=MC().epsilon()),np}function Qn(){return"channelsLast"}function xs(n,e){return be(n,e)}function ua(n,e=-1){const t=n.shape.slice();return e<0&&(e=t.length+e+1),t.splice(e,0,1),H(n,t)}function WE(n,e){return Y(()=>{if(n.shape.length!==2)throw new B(`repeat() expects a rank-2 tensor, but received a rank-${n.shape.length} tensor.`);const t=ua(n,1);return op(t,[1,e,1])})}function UE(n){const e=[tr(n.shape)];return H(n,e)}function GE(n){if(n.rank<=1)throw new B(`batchFlatten requires a minimum rank of 2. Got rank: ${n.rank}.`);const e=[n.shape[0],tr(n.shape,1)];return H(n,e)}function Lr(n,e,t){return Y(()=>{switch(n.rank){case 1:return fd(n,e,t);case 2:return Rg(n,[e,0],[t,n.shape[1]]);case 3:return md(n,[e,0,0],[t,n.shape[1],n.shape[2]]);case 4:return vc(n,[e,0,0,0],[t,n.shape[1],n.shape[2],n.shape[3]]);case 5:return dt(n,[e,0,0,0,0],[t,n.shape[1],n.shape[2],n.shape[3],n.shape[4]]);case 6:return dt(n,[e,0,0,0,0,0],[t,n.shape[1],n.shape[2],n.shape[3],n.shape[4],n.shape[5]]);default:throw new B(`sliceAlongFirstAxis() received an unsupported tensor rank: ${n.rank}`)}})}function sp(n,e,t){return Y(()=>{switch(n.rank){case 1:return fd(n,e,t);case 2:return Rg(n,[0,e],[n.shape[0],t]);case 3:return md(n,[0,0,e],[n.shape[0],n.shape[1],t]);case 4:return vc(n,[0,0,0,e],[n.shape[0],n.shape[1],n.shape[2],t]);default:throw new B(`sliceAlongLastAxis() received an unsupported tensor rank: ${n.rank}`)}})}function Tc(n,e,t,s){return Y(()=>{switch(n.rank){case 1:return fd(n,e,t);case 2:switch(s){case 1:return Lr(n,e,t);case 2:return sp(n,e,t);default:throw new B(`The axis is not within the rank of the tensor ${s}`)}case 3:switch(s){case 1:return Lr(n,e,t);case 2:return md(n,[0,e,0],[n.shape[0],t,n.shape[2]]);case 3:return sp(n,e,t);default:throw new B(`The axis is not within the rank of the tensor ${s}`)}case 4:switch(s){case 1:return Lr(n,e,t);case 2:return vc(n,[0,e,0,0],[n.shape[0],t,n.shape[2],n.shape[3]]);case 3:return vc(n,[0,0,e,0],[n.shape[0],n.shape[1],t,n.shape[3]]);case 4:return sp(n,e,t);default:throw new B(`The axis is not within the rank of the tensor ${s}`)}default:throw new B(`sliceAlongLastAxis() received an unsupported tensor rank: ${n.rank}`)}})}function rp(n,e=-1){let t;return e<0&&(t=n[0].rank,t!==0?e=t:e=0),e===n[0].rank&&(e=-1),gn(n,e)}function Wx(n,e){switch(n.rank){case 1:return i$([n,e]);case 2:return l$([n,e],0);case 3:return u$([n,e],0);case 4:return d$([n,e],0);default:throw new B(`concatAlongFirstAxis() received an unsupported tensor rank: ${n.rank}`)}}function op(n,e){if(Array.isArray(e)||(e=[e]),n.rank!==e.length)throw new B(`The length of input n (${e.length}) does not match the number of dimensions in input x (${n.rank})`);return Yn(n,e)}function Ec(n,e=0,t=1,s,r){return vS(n,e,t,s,r)}function bs(n,e,t,s){if(n.rank<2||e.rank<2)throw new Me(`dot requires both inputs to be rank >= 2 but got x shape = ${n.shape} and y shape = ${e.shape}`);if(e.rank>=3){const r=n.shape.slice(-1)[0],o=e.shape.slice(-2)[0];if(r!==o)throw new Me(`If rank y >= 3, then the second last dim of y must equal the last dim of x but got x shape = ${n.shape} and  y shape = ${e.shape}`)}if(n.rank===2&&e.rank===2)return Og({a:n,b:e,transposeA:!1,transposeB:!1,bias:s?ip(n.rank,s,Qn()):null,activation:t});{const r=n.shape.slice(),o=r.pop();n=H(n,[-1,o]);const i=e.shape.slice(),a=i.pop(),l=i.pop(),c=[...i,a],u=Array.from({length:e.rank},(g,x)=>x===0?e.rank-2:x<=e.rank-2?x-1:x);e=H(Ke(e,u),[l,-1]);const h=[...r,...c];return H(Og({a:n,b:e,transposeA:!1,transposeB:!1,bias:s?ip(n.rank,s,Qn()):null,activation:t}),h)}}function Ux(n,e,t){return Y(()=>(Array.isArray(e)?e=kn(e,"int32"):e=be(e,"int32"),sd(n,e,t)))}function ha(n){return V(n,n)}function ip(n,e,t){const s=e.shape;if(e.rank!==1&&e.rank!==n)throw new B(`Unexpected bias dimensions: ${e.rank}; expected it to be 1 or ${n}`);if(n===5){if(t==="channelsFirst")return s.length===1?H(e,[1,s[0],1,1,1]):H(e,[1,s[3],s[0],s[1],s[2]]);if(t==="channelsLast")return s.length===1?H(e,[1,1,1,1,s[0]]):H(e,[1].concat(s))}else if(n===4){if(t==="channelsFirst")return s.length===1?H(e,[1,s[0],1,1]):H(e,[1,s[2],s[0],s[1]]);if(t==="channelsLast")return s.length===1?H(e,[1,1,1,s[0]]):H(e,[1].concat(s))}else if(n===3){if(t==="channelsFirst")return s.length===1?H(e,[1,s[0],1]):H(e,[1,s[1],s[0]]);if(t==="channelsLast")return s.length===1?H(e,[1,1,s[0]]):H(e,[1].concat(s))}else if(n<3)return e;throw new B(`Unsupported input rank by biasAdd: ${e.rank}`)}function es(n,e,t){return Y(()=>(t==null&&(t=Qn()),Et(t),ue(n,ip(n.rank,e,t))))}function HE(n,e=1){if(e!==1)throw new Me(`Support for alpha values other than 1 (${e}) is not implemented yet.`);return ac(n)}function jE(n){return Y(()=>Ne(n,ue(on(n),1)))}function Gx(n,e,t,s){return Y(()=>m2(n,e,t,s))}function KE(n){return Y(()=>{const e=ue(.5,V(.2,n));return Dn(e,0,1)})}function da(n,e,t=!1){return t?n():e()}const qE=["fanIn","fanOut","fanAvg"],XE=["normal","uniform","truncatedNormal"];function YE(n){Or(qE,"FanMode",n)}function ZE(n){Or(XE,"Distribution",n)}class Wn extends $o{fromConfigUsesCustomObjects(){return!1}getConfig(){return{}}}class Hx extends Wn{apply(e,t){return Gt(e,t)}}Hx.className="Zeros",ce(Hx);class ap extends Wn{apply(e,t){return Js(e,t)}}ap.className="Ones",ce(ap);class jx extends Wn{constructor(e){if(super(),typeof e!="object")throw new B(`Expected argument of type ConstantConfig but got ${e}`);if(e.value===void 0)throw new B(`config must have value set but got ${e}`);this.value=e.value}apply(e,t){return Y(()=>V(et(this.value),Js(e,t)))}getConfig(){return{value:this.value}}}jx.className="Constant",ce(jx);class Kx extends Wn{constructor(e){super(),this.DEFAULT_MINVAL=-.05,this.DEFAULT_MAXVAL=.05,this.minval=e.minval||this.DEFAULT_MINVAL,this.maxval=e.maxval||this.DEFAULT_MAXVAL,this.seed=e.seed}apply(e,t){return ta(e,this.minval,this.maxval,t,this.seed)}getConfig(){return{minval:this.minval,maxval:this.maxval,seed:this.seed}}}Kx.className="RandomUniform",ce(Kx);class qx extends Wn{constructor(e){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=e.mean||this.DEFAULT_MEAN,this.stddev=e.stddev||this.DEFAULT_STDDEV,this.seed=e.seed}apply(e,t){if(t=t||"float32",t!=="float32"&&t!=="int32")throw new Me(`randomNormal does not support dType ${t}.`);return Ec(e,this.mean,this.stddev,t,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}qx.className="RandomNormal",ce(qx);class Xx extends Wn{constructor(e){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=e.mean||this.DEFAULT_MEAN,this.stddev=e.stddev||this.DEFAULT_STDDEV,this.seed=e.seed}apply(e,t){if(t=t||"float32",t!=="float32"&&t!=="int32")throw new Me(`truncatedNormal does not support dType ${t}.`);return Ag(e,this.mean,this.stddev,t,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}Xx.className="TruncatedNormal",ce(Xx);class Yx extends Wn{constructor(e){super(),this.gain=e.gain!=null?e.gain:1}apply(e,t){return Y(()=>{if(e.length!==2||e[0]!==e[1])throw new B("Identity matrix initializer can only be used for 2D square matrices.");return V(this.gain,lg(e[0]))})}getConfig(){return{gain:this.gain}}}Yx.className="Identity",ce(Yx);function JE(n,e="channelsLast"){let t,s;if(Et(e),n.length===2)t=n[0],s=n[1];else if([3,4,5].indexOf(n.length)!==-1){if(e==="channelsFirst"){const r=tr(n,2);t=n[1]*r,s=n[0]*r}else if(e==="channelsLast"){const r=tr(n,0,n.length-2);t=n[n.length-2]*r,s=n[n.length-1]*r}}else{const r=tr(n);t=Math.sqrt(r),s=Math.sqrt(r)}return[t,s]}class $n extends Wn{constructor(e){if(super(),e.scale<0)throw new B(`scale must be a positive float. Got: ${e.scale}`);this.scale=e.scale==null?1:e.scale,this.mode=e.mode==null?"fanIn":e.mode,YE(this.mode),this.distribution=e.distribution==null?"normal":e.distribution,ZE(this.distribution),this.seed=e.seed}apply(e,t){const s=JE(e),r=s[0],o=s[1];let i=this.scale;if(this.mode==="fanIn"?i/=Math.max(1,r):this.mode==="fanOut"?i/=Math.max(1,o):i/=Math.max(1,(r+o)/2),this.distribution==="normal"){const a=Math.sqrt(i);if(t=t||"float32",t!=="float32"&&t!=="int32")throw new Me(`${this.getClassName()} does not support dType ${t}.`);return Ag(e,0,a,t,this.seed)}else{const a=Math.sqrt(3*i);return ta(e,-a,a,t,this.seed)}}getConfig(){return{scale:this.scale,mode:this.mode,distribution:this.distribution,seed:this.seed}}}$n.className="VarianceScaling",ce($n);class lp extends $n{constructor(e){super({scale:1,mode:"fanAvg",distribution:"uniform",seed:e==null?null:e.seed})}getClassName(){return $n.className}}lp.className="GlorotUniform",ce(lp);class cp extends $n{constructor(e){super({scale:1,mode:"fanAvg",distribution:"normal",seed:e==null?null:e.seed})}getClassName(){return $n.className}}cp.className="GlorotNormal",ce(cp);class up extends $n{constructor(e){super({scale:2,mode:"fanIn",distribution:"normal",seed:e==null?null:e.seed})}getClassName(){return $n.className}}up.className="HeNormal",ce(up);class hp extends $n{constructor(e){super({scale:2,mode:"fanIn",distribution:"uniform",seed:e==null?null:e.seed})}getClassName(){return $n.className}}hp.className="HeUniform",ce(hp);class dp extends $n{constructor(e){super({scale:1,mode:"fanIn",distribution:"normal",seed:e==null?null:e.seed})}getClassName(){return $n.className}}dp.className="LeCunNormal",ce(dp);class pp extends $n{constructor(e){super({scale:1,mode:"fanIn",distribution:"uniform",seed:e==null?null:e.seed})}getClassName(){return $n.className}}pp.className="LeCunUniform",ce(pp);class Zx extends Wn{constructor(e){super(),this.DEFAULT_GAIN=1,this.ELEMENTS_WARN_SLOW=2e3,this.gain=e.gain==null?this.DEFAULT_GAIN:e.gain,this.seed=e.seed}apply(e,t){return Y(()=>{if(e.length<2)throw new Me("Shape must be at least 2D.");if(t!=="int32"&&t!=="float32"&&t!==void 0)throw new TypeError(`Unsupported data type ${t}.`);t=t;const s=ne(e.slice(0,-1)),r=e[e.length-1],o=s*r;o>this.ELEMENTS_WARN_SLOW&&console.warn(`Orthogonal initializer is being called on a matrix with more than ${this.ELEMENTS_WARN_SLOW} (${o}) elements: Slowness may result.`);const i=[Math.max(r,s),Math.min(r,s)],a=Ec(i,0,1,t,this.seed),l=hN.qr(a,!1);let c=l[0];const h=l[1].flatten().stridedSlice([0],[Math.min(r,s)*Math.min(r,s)],[Math.min(r,s)+1]);return c=V(c,h.sign()),s<r&&(c=c.transpose()),V(et(this.gain),c.reshape(e))})}getConfig(){return{gain:this.gain,seed:this.seed}}}Zx.className="Orthogonal",ce(Zx);const Jx={constant:"Constant",glorotNormal:"GlorotNormal",glorotUniform:"GlorotUniform",heNormal:"HeNormal",heUniform:"HeUniform",identity:"Identity",leCunNormal:"LeCunNormal",leCunUniform:"LeCunUniform",ones:"Ones",orthogonal:"Orthogonal",randomNormal:"RandomNormal",randomUniform:"RandomUniform",truncatedNormal:"TruncatedNormal",varianceScaling:"VarianceScaling",zeros:"Zeros"};function Qx(n,e={}){return la(n,zn.getMap().classNameMap,e,"initializer")}function vt(n){return Qd(n)}function bt(n){if(typeof n=="string"){const e=n in Jx?Jx[n]:n;if(e==="GlorotNormal")return new cp;if(e==="GlorotUniform")return new lp;if(e==="HeNormal")return new up;if(e==="HeUniform")return new hp;if(e==="LeCunNormal")return new dp;if(e==="LeCunUniform")return new pp;{const t={};return t.className=e,t.config={},Qx(t)}}else return n instanceof Wn?n:Qx(n)}function fp(n){return Array.isArray(n)&&Array.isArray(n[0])}function Rc(n){return n.length===0?[]:Array.isArray(n[0])?n:[n]}function De(n){let e;if(Array.isArray(n)){if(n.length!==1)throw new B(`Expected Tensor length to be 1; got ${n.length}`);e=n[0]}else e=n;return e}function Xe(n){if(Array.isArray(n)&&Array.isArray(n[0])){if(n.length===1)return n=n,n[0];throw new B(`Expected exactly 1 Shape; got ${n.length}`)}else return n}function Dc(n){let e=0;for(const t of n)t.shape.length===0?e+=1:e+=t.shape.reduce((s,r)=>s*r);return e}const eb="Variable";class QE{constructor(e,t="float32",s=eb,r=!0,o=null){this.dtype=t??"float32",this.shape=e.shape,this.id=Px(),s=s??eb,this.originalName=zx(s),this.name=Bx(this.originalName),this.trainable_=r,this.constraint=o,this.val=h2(e,this.trainable_,this.name,this.dtype)}read(){return this.assertNotDisposed(),this.val}write(e){return this.assertNotDisposed(),eR(this.val,e),this.val.id!==e.id&&(this.val.assign(e),this.constraint!=null&&this.val.assign(this.constraint.apply(this.val))),this}dispose(){this.assertNotDisposed(),this.val.dispose()}assertNotDisposed(){if(this.val.isDisposed)throw new Error(`LayersVariable ${this.name} is already disposed.`)}get trainable(){return this.trainable_}set trainable(e){this.trainable_=e,this.val.trainable=e}}function eR(n,e){if(n.shape.toString()!==e.shape.toString())throw new Error("Shape mismatch: "+JSON.stringify(n.shape)+" vs. "+JSON.stringify(e.shape))}function mp(n){return n.map(e=>e.read())}function gp(n){n.forEach(e=>{e[0].write(e[1])})}class Lt{constructor(e){this.dtype=e.dtype,this.shape=e.shape,e.shape!=null?this.ndim=e.shape.length:this.ndim=e.ndim,this.maxNDim=e.maxNDim,this.minNDim=e.minNDim,this.axes=e.axes||{}}}class ys{constructor(e,t,s,r,o,i,a){this.dtype=e,this.shape=t,this.sourceLayer=s,this.inputs=r,this.callArgs=o,this.outputTensorIndex=a,this.id=Px(),i!=null&&(this.originalName=zx(i),this.name=Bx(this.originalName)),this.rank=t.length}}let tR=0;class Ac{constructor(e,t){this.callArgs=t,this.id=tR++,this.outboundLayer=e.outboundLayer,this.inboundLayers=e.inboundLayers,this.nodeIndices=e.nodeIndices,this.tensorIndices=e.tensorIndices,this.inputTensors=e.inputTensors,this.outputTensors=e.outputTensors,this.inputMasks=e.inputMasks,this.outputMasks=e.outputMasks,this.inputShapes=e.inputShapes,this.outputShapes=e.outputShapes;for(const s of e.inboundLayers)s?.outboundNodes.push(this);e.outboundLayer.inboundNodes.push(this)}getConfig(){const e=[];for(const t of this.inboundLayers)t!=null?e.push(t.name):e.push(null);return{outboundLayer:this.outboundLayer?this.outboundLayer.name:null,inboundLayers:e,nodeIndices:this.nodeIndices,tensorIndices:this.tensorIndices}}}let nR=0;class We extends $o{constructor(e={}){super(),this._callHook=null,this._addedWeightNames=[],this._stateful=!1,this.id=nR++,this.activityRegularizer=null,this.inputSpec=null,this.supportsMasking=!1,this._trainableWeights=[],this._nonTrainableWeights=[],this._losses=[],this._updates=[],this._built=!1,this.inboundNodes=[],this.outboundNodes=[];let t=e.name;if(!t){const s=this.getClassName();t=Ms(s)+"_"+Nc(s)}if(this.name=t,this.trainable_=e.trainable==null?!0:e.trainable,e.inputShape!=null||e.batchInputShape!=null){let s;if(e.batchInputShape!=null)s=e.batchInputShape;else if(e.inputShape!=null){let o=null;e.batchSize!=null&&(o=e.batchSize),s=[o].concat(e.inputShape)}this.batchInputShape=s;let r=e.dtype;r==null&&(r=e.inputDType),r==null&&(r="float32"),this.dtype=r}e.weights!=null?this.initialWeights=e.weights:this.initialWeights=null,this._refCount=null,this.fastWeightInitDuringBuild=!1}static nodeKey(e,t){return e.name+"_ib-"+t.toString()}getNodeAtIndex(e,t){if(this.inboundNodes.length===0)throw new Bn(`The layer has never been called and thus has no defined ${t}.`);if(this.inboundNodes.length<=e)throw new B(`Asked to get ${t} at node ${e}, but the layer has only ${this.inboundNodes.length} inbound nodes.`);return this.inboundNodes[e]}getInputAt(e){return bn(this.getNodeAtIndex(e,"input").inputTensors)}getOutputAt(e){return bn(this.getNodeAtIndex(e,"output").outputTensors)}get input(){if(this.inboundNodes.length>1)throw new ms(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer input" is ill-defined. Use \`getInputAt(nodeIndex)\` instead.`);if(this.inboundNodes.length===0)throw new ms(`Layer ${this.name} is not connected, no input to return.`);return bn(this.getNodeAtIndex(0,"input").inputTensors)}get output(){if(this.inboundNodes.length===0)throw new ms(`Layer ${this.name} has no inbound nodes.`);if(this.inboundNodes.length>1)throw new ms(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer output" is ill-defined. Use \`getOutputAt(nodeIndex)\` instead.`);return bn(this.getNodeAtIndex(0,"output").outputTensors)}get losses(){return this._losses}calculateLosses(){return this.losses.map(e=>e())}get updates(){return this._updates}get built(){return this._built}set built(e){this._built=e}get trainable(){return this.trainable_}set trainable(e){this._trainableWeights.forEach(t=>t.trainable=e),this.trainable_=e}get trainableWeights(){return this.trainable_?this._trainableWeights.filter(e=>e.trainable):[]}set trainableWeights(e){this._trainableWeights=e}get nonTrainableWeights(){return this.trainable?this._trainableWeights.filter(e=>!e.trainable).concat(this._nonTrainableWeights):this._trainableWeights.concat(this._nonTrainableWeights)}set nonTrainableWeights(e){this._nonTrainableWeights=e}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}get stateful(){return this._stateful}resetStates(){if(!this.stateful)throw new Error("Cannot call the resetStates() method of a non-stateful Layer object.")}assertInputCompatibility(e){const t=st(e);if(this.inputSpec==null||this.inputSpec.length===0)return;const s=st(this.inputSpec);if(t.length!==s.length)throw new B(`Layer ${this.name} expects ${s.length} inputs, but it received ${t.length} input tensors. Input received: ${e}`);for(let r=0;r<t.length;r++){const o=t[r],i=s[r];if(i==null)continue;const a=o.rank;if(i.ndim!=null&&a!==i.ndim)throw new B(`Input ${r} is incompatible with layer ${this.name}: expected ndim=${i.ndim}, found ndim=${a}`);if(i.maxNDim!=null&&a>i.maxNDim)throw new B(`Input ${r} is incompatible with layer ${this.name}: expected max_ndim=${i.maxNDim}, found ndim=${a}`);if(i.minNDim!=null&&a<i.minNDim)throw new B(`Input ${r} is incompatible with layer ${this.name}: expected min_ndim=${i.minNDim}, found ndim=${a}.`);if(i.dtype!=null&&o.dtype!==i.dtype)throw new B(`Input ${r} is incompatible with layer ${this.name} : expected dtype=${i.dtype}, found dtype=${o.dtype}.`);if(i.axes){const l=o.shape;for(const c in i.axes){const u=Number(c),h=i.axes[c],d=u>=0?l[u]:l[l.length+u];if(h!=null&&[h,null].indexOf(d)===-1)throw new B(`Input ${r} is incompatible with layer ${this.name}: expected axis ${u} of input shape to have value ${h} but got shape ${l}.`)}}if(i.shape!=null)for(let l=0;l<i.shape.length;++l){const c=i.shape[l],u=o.shape[l];if(c!=null&&u!=null&&c!==u)throw new B(`Input ${r} is incompatible with layer ${this.name}: expected shape=${i.shape}, found shape=${o.shape}.`)}}}call(e,t){return e}invokeCallHook(e,t){this._callHook!=null&&this._callHook(e,t)}setCallHook(e){this._callHook=e}clearCallHook(){this._callHook=null}apply(e,t){t=t||{},this.assertNotDisposed();const s=st(e),r=oR(e),o=iR(e);if(r===o)throw new B("Arguments to apply() must be all SymbolicTensors or all Tensors");return Pr(this.name,()=>{if(!this.built){this.assertInputCompatibility(e);const i=[];for(const a of st(e))i.push(a.shape);this.build(bn(i)),this.built=!0,this.initialWeights&&this.setWeights(this.initialWeights),this._refCount===null&&o&&(this._refCount=1)}if(this.assertInputCompatibility(e),o){let i=this.call(e,t);this.supportsMasking&&this.setMaskMetadata(e,i);const a=st(i),l=[];for(let c of a)s.indexOf(c)!==-1&&(c=c.clone()),l.push(c);if(i=bn(l),this.activityRegularizer!=null)throw new Me("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return i}else{const i=sR(e),a=this.computeOutputShape(i);let l;const c=rR(e);if(this.warnOnIncompatibleInputShape(Array.isArray(e)?i[0]:i),a!=null&&a.length>0&&Array.isArray(a[0])?l=a.map((u,h)=>new ys(c,u,this,st(e),t,this.name,h)):l=new ys(c,a,this,st(e),t,this.name),this.addInboundNode(e,l,null,null,i,a,t),this._refCount++,this.activityRegularizer!=null)throw new Me("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return l}})}warnOnIncompatibleInputShape(e){if(this.batchInputShape!=null)if(e.length!==this.batchInputShape.length)console.warn(`The rank of the input tensor provided (shape: ${JSON.stringify(e)}) does not match that of the batchInputShape (${JSON.stringify(this.batchInputShape)}) of the layer ${this.name}`);else{let t=!1;this.batchInputShape.forEach((s,r)=>{s!=null&&e[r]!=null&&e[r]!==s&&(t=!0)}),t&&console.warn(`The shape of the input tensor (${JSON.stringify(e)}) does not match the expectation of layer ${this.name}: ${JSON.stringify(this.batchInputShape)}`)}}get outputShape(){if(this.inboundNodes==null||this.inboundNodes.length===0)throw new ms(`The layer ${this.name} has never been called and thus has no defined output shape.`);const e=[];for(const t of this.inboundNodes){const s=JSON.stringify(t.outputShapes);e.indexOf(s)===-1&&e.push(s)}if(e.length===1){const t=this.inboundNodes[0].outputShapes;return Array.isArray(t)&&Array.isArray(t[0])&&t.length===1?t[0]:t}else throw new ms(`The layer ${this.name} has multiple inbound nodes with different output shapes. Hence the notion of "output shape" is ill-defined for the layer.`)}countParams(){if(!this.built)throw new Bn(`You tried to call countParams() on ${this.name}, but the layer is not built yet. Build it first by calling build(batchInputShape).`);return Dc(this.weights)}build(e){this.built=!0}getWeights(e=!1){return mp(e?this.trainableWeights:this.weights)}setWeights(e){Y(()=>{const t=this.weights;if(t.length!==e.length)throw new B(`You called setWeights(weights) on layer "${this.name}" with a weight list of length ${e.length}, but the layer was expecting ${t.length} weights. Provided weights: ${e}...`);if(t.length===0)return;const s=[],r=mp(t);for(let o=0;o<r.length;++o){const i=r[o],a=t[o],l=e[o];if(!Je(i.shape,l.shape))throw new B(`Layer weight shape ${i.shape} not compatible with provided weight shape ${l.shape}`);s.push([a,l])}gp(s)})}addWeight(e,t,s,r,o,i,a,l){if(this._addedWeightNames.indexOf(e)!==-1)throw new B(`Duplicate weight name ${e} for layer ${this.name}`);this._addedWeightNames.push(e),s==null&&(s="float32"),this.fastWeightInitDuringBuild&&(r=l!=null?l():bt("zeros"));const c=r.apply(t,s),u=new QE(c,s,e,i,a);return c.dispose(),o!=null&&this.addLoss(()=>o.apply(u.read())),i==null&&(i=!0),i?this._trainableWeights.push(u):this._nonTrainableWeights.push(u),u}setFastWeightInitDuringBuild(e){this.fastWeightInitDuringBuild=e}addLoss(e){e==null||Array.isArray(e)&&e.length===0||(e=st(e),this._losses!==void 0&&this._losses!==null&&this.losses.push(...e))}computeOutputShape(e){return e}computeMask(e,t){if(!this.supportsMasking){if(t!=null)if(Array.isArray(t))t.forEach(s=>{if(s!=null)throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`)});else throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`);return null}return t}setMaskMetadata(e,t,s){if(!this.supportsMasking)return;const r=this.computeMask(e,s),o=st(t),i=st(r);if(o.length!==i.length)throw new Error(`${this.name} outputs ${o.length} tensors but ${o.length} masks for those tensors`);for(let a=0;a<o.length;a++)o[a].kerasMask=i[a]}addInboundNode(e,t,s,r,o,i,a=null){const l=st(e);t=st(t),s=st(s),r=st(r),o=Rc(o),i=Rc(i);const c=[],u=[],h=[];for(const d of l)c.push(d.sourceLayer),u.push(d.nodeIndex),h.push(d.tensorIndex);new Ac({outboundLayer:this,inboundLayers:c,nodeIndices:u,tensorIndices:h,inputTensors:l,outputTensors:t,inputMasks:s,outputMasks:r,inputShapes:o,outputShapes:i},a);for(let d=0;d<t.length;d++)t[d].sourceLayer=this,t[d].nodeIndex=this.inboundNodes.length-1,t[d].tensorIndex=d}getConfig(){const e={name:this.name,trainable:this.trainable};return this.batchInputShape!=null&&(e.batchInputShape=this.batchInputShape),this.dtype!=null&&(e.dtype=this.dtype),e}disposeWeights(){return this.weights.forEach(e=>e.dispose()),this.weights.length}assertNotDisposed(){if(this._refCount===0)throw new Error(`Layer '${this.name}' is already disposed.`)}dispose(){if(!this.built)throw new Error(`Cannot dispose Layer ${this.name} because it has not been built yet.`);if(this._refCount===null)throw new Error(`Cannot dispose Layer ${this.name} because it has not been used yet.`);this.assertNotDisposed();let e=0;return--this._refCount===0&&(e=this.disposeWeights()),{refCountAfterDispose:this._refCount,numDisposedVariables:e}}}function sR(n){n=st(n);const e=[];for(const t of n)e.push(t.shape);return bn(e)}function rR(n){return"float32"}function tb(n,e,t){if((e==null||t!=null&&t>0)&&(e=n.sourceLayer,t=n.nodeIndex),e.inboundNodes.length===0)return[n];{const s=e.inboundNodes[t];if(s.inboundLayers.length===0)return s.inputTensors;{const r=[];for(let o=0;o<s.inboundLayers.length;o++){const i=s.inputTensors[o],a=s.inboundLayers[o],l=s.nodeIndices[o],c=tb(i,a,l);for(const u of c)r.indexOf(u)===-1&&r.push(u)}return r}}}function oR(n){let e=!0;for(const t of st(n))if(!(t instanceof ys)){e=!1;break}return e}function iR(n){let e=!0;for(const t of st(n))if(t instanceof ys){e=!1;break}return e}class pa extends We{constructor(e){if(super({dtype:e.dtype,name:e.name!=null?e.name:Nc("input").toString()}),e.batchSize==null&&(e.batchSize=null),e.sparse==null&&(e.sparse=!1),this.trainable=!1,this.built=!0,this.sparse=e.sparse,e.inputShape!=null&&e.batchInputShape!=null)throw new B("Only provide the inputShape OR batchInputShape argument to inputLayer, not both at the same time.");let t=e.batchInputShape;if(t==null){if(e.inputShape==null)throw new B("An InputLayer should be passed either a `batchInputShape` or an `inputShape`.");t=[e.batchSize].concat(e.inputShape)}else if(e.batchSize!=null)throw new B("Cannot specify batchSize if batchInputShape is specified when creating an InputLayer.");const s=e.dtype||"float32";this.batchInputShape=t,this.dtype=s,this.inputSpec=[{shape:t}];const r=new ys(this.dtype,this.batchInputShape,this,[],{},this.name);r.nodeIndex=0,r.tensorIndex=0,new Ac({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:[r],outputTensors:[r],inputMasks:[null],outputMasks:[null],inputShapes:[t],outputShapes:[t]})}apply(e,t){throw new B(`Cannot pass any input to an InputLayer's apply() method. InputLayer name: ${this.name}`)}dispose(){return{refCountAfterDispose:this._refCount,numDisposedVariables:0}}getConfig(){return{batchInputShape:this.batchInputShape,dtype:this.dtype,sparse:this.sparse,name:this.name}}}pa.className="InputLayer",ce(pa);function aR(n){if(n.batchShape==null&&n.shape==null)throw new Error("Please provide to Input either a `shape` or a `batchShape` argument. Note that `shape` does not include the batch dimension.");if(n.batchShape!=null&&n.shape!=null)throw new B("Please provide either a `shape` or `batchShape` argument to Input, but not both.");let e=n.batchShape;n.shape!=null&&e==null&&(e=[null].concat(n.shape));let t=n.dtype;return t==null&&(t="float32"),new pa({batchInputShape:e,name:n.name,dtype:t,sparse:n.sparse}).inboundNodes[0].outputTensors[0]}function lR(n,e){if(n.dtype==null||n.dtype===e.dtype)return e;try{return be(e,n.dtype)}catch{throw new B(`The dtype of the feed (${e.dtype}) can not be cast to the dtype of the key '${n.name}' (${n.dtype}).`)}}class sr{constructor(e){if(this.id2Value={},this.id2Mask={},this.name2Id={},e instanceof sr)for(const t in e.id2Value)this.id2Value[t]=e.id2Value[t],t in e.id2Mask&&(this.id2Mask[t]=e.id2Mask[t]);else{if(e==null)return;for(const t of e)this.add(t.key,t.value)}}add(e,t,s){if(this.id2Value[e.id]==null)this.id2Value[e.id]=lR(e,t),this.name2Id[e.name]=e.id,s!=null&&(this.id2Mask[e.id]=s);else throw new B(`Duplicate key: name=${e.name}, id=${e.id}`);return this}addFeed(e){this.add(e.key,e.value)}hasKey(e){return this.id2Value[e.id]!=null}names(){return Object.keys(this.name2Id)}getValue(e){if(e instanceof ys){if(this.id2Value[e.id]==null)throw new B(`Nonexistent key: ${e.name}`);return this.id2Value[e.id]}else{const t=this.name2Id[e];if(t==null)throw new B(`Feed dict has no SymbolicTensor name: ${e}`);return this.id2Value[t]}}getMask(e){if(e instanceof ys){if(this.id2Value[e.id]==null)throw new B(`Nonexistent key: ${e.name}`);return this.id2Mask[e.id]}else{const t=this.name2Id[e];if(t==null)throw new B(`Feed dict has no SymbolicTensor name: ${e}`);return this.id2Mask[t]}}disposeMasks(){this.id2Mask!=null&&Ue(this.id2Mask)}}const _c=new Ax,Fc=new Ax;function cR(n){_c?.setMaxEntries(n),Fc?.setMaxEntries(n)}function fa(n,e,t,s){const r=t==null?!1:t.training,o=Array.isArray(n),i=o?n:[n],a=i.map(g=>g.name),l=[],c=e.names();for(const g of a)c.indexOf(g)!==-1?l.push(e.getValue(g)):l.push(null);const u=a.join(",")+"|"+e.names().sort().join(",");let h=_c.get(u),d;if(h==null){const g=uR(i,e);h=g.sorted,d=g.recipientCounts,_c.put(u,h),Fc.put(u,d)}d={},r||Object.assign(d,Fc.get(u));const f=new sr(e);for(let g=0;g<h.length;++g){const x=h[g],b=x.sourceLayer;if(b instanceof pa)continue;const y=[],w=[],$=[];let C=!1;for(const A of x.inputs){const D=f.getValue(A),S=f.getMask(A);y.push(D),w.push(S),S!=null&&(C=!0),r||(d[A.name]--,d[A.name]===0&&!e.hasKey(A)&&a.indexOf(A.name)===-1&&!D.isDisposed&&A.sourceLayer.stateful!==!0&&$.push(D))}C&&(t=t||{},t.mask=w[0]);const N=st(b.apply(y,t));let E=null;b.supportsMasking&&(E=b.computeMask(y,w));const F=dR(x),O=Array.isArray(F)?F:[F];for(let A=0;A<O.length;++A){f.hasKey(O[A])||f.add(O[A],N[A],Array.isArray(E)?E[0]:E);const D=a.indexOf(O[A].name);D!==-1&&(l[D]=N[A])}r||Ue($)}return f.disposeMasks(),o?l:l[0]}function uR(n,e){_(n!=null&&n.length>0,()=>"Expected at least one fetch, got none");let t=[],s={};if(n.length===1){const r=nb(n[0],e);t=r.sorted,s=r.recipientMap}else{const r=new Set;for(const o of n){const{sorted:i,recipientMap:a}=nb(o,e);for(const l of i)r.has(l.name)||(t.push(l),r.add(l.name));for(const l in a)s[l]==null&&(s[l]=new Set),a[l].forEach(c=>s[l].add(c))}}return{sorted:t,recipientCounts:hR(s)}}function hR(n){const e={};for(const t in n)e[t]=n[t].size;return e}function nb(n,e){const t=new Set,s=[],r={};for(const a of e.names())t.add(a);const o=[],i=[];for(o.push(n);o.length>0;){const a=o[o.length-1];if(t.has(a.name)){o.pop();continue}const l=i[i.length-1]===o.length-1;if(a.inputs.length===0||l)o.pop(),s.push(a),t.add(a.name),l&&i.pop();else{i.push(o.length-1);for(const c of a.inputs)r[c.name]==null&&(r[c.name]=new Set),r[c.name].add(a.name),!t.has(c.name)&&o.push(c)}}return{sorted:s,recipientMap:r}}function dR(n){let e;if(n.sourceLayer.inboundNodes.length===1)e=n.sourceLayer.output;else{let t=null;for(let s=0;s<n.sourceLayer.inboundNodes.length;++s)for(const r of n.sourceLayer.inboundNodes[s].outputTensors)if(r.id===n.id){t=s;break}e=n.sourceLayer.getOutputAt(t)}return e}J().registerFlag("TOPOLOGICAL_SORT_CACHE_MAX_ENTRIES",()=>100,cR);function xp(n,e){return Y(()=>en(Se(V(n,n),e,!0)))}class ma extends $o{getConfig(){return{}}}class sb extends ma{constructor(e){super(),this.defaultMaxValue=2,this.defaultAxis=0,this.maxValue=e.maxValue!=null?e.maxValue:this.defaultMaxValue,this.axis=e.axis!=null?e.axis:this.defaultAxis}apply(e){return Y(()=>{const t=xp(e,this.axis),s=Dn(t,0,this.maxValue);return V(e,Ne(s,ue(Pt(),t)))})}getConfig(){return{maxValue:this.maxValue,axis:this.axis}}}sb.className="MaxNorm",ce(sb);class rb extends ma{constructor(e){super(),this.defaultAxis=0,this.axis=e.axis!=null?e.axis:this.defaultAxis}apply(e){return Y(()=>Ne(e,ue(Pt(),xp(e,this.axis))))}getConfig(){return{axis:this.axis}}}rb.className="UnitNorm",ce(rb);class ob extends ma{apply(e){return Er(e)}}ob.className="NonNeg",ce(ob);class ib extends ma{constructor(e){super(),this.defaultMinValue=0,this.defaultMaxValue=1,this.defaultRate=1,this.defaultAxis=0,this.minValue=e.minValue!=null?e.minValue:this.defaultMinValue,this.maxValue=e.maxValue!=null?e.maxValue:this.defaultMaxValue,this.rate=e.rate!=null?e.rate:this.defaultRate,this.axis=e.axis!=null?e.axis:this.defaultAxis}apply(e){return Y(()=>{const t=xp(e,this.axis),s=ue(V(this.rate,Dn(t,this.minValue,this.maxValue)),V(1-this.rate,t));return V(e,Ne(s,ue(Pt(),t)))})}getConfig(){return{minValue:this.minValue,maxValue:this.maxValue,rate:this.rate,axis:this.axis}}}ib.className="MinMaxNorm",ce(ib);const ab={maxNorm:"MaxNorm",minMaxNorm:"MinMaxNorm",nonNeg:"NonNeg",unitNorm:"UnitNorm"};function Mt(n){return Qd(n)}function lb(n,e={}){return la(n,zn.getMap().classNameMap,e,"constraint")}function zt(n){if(n==null)return null;if(typeof n=="string"){const t={className:n in ab?ab[n]:n,config:{}};return lb(t)}else return n instanceof ma?n:lb(n)}async function Mr(n){if(n==null)return;const e=[],t=[],s=[];for(const r in n){const o=n[r];if(typeof o!="number"){const i=o;e.push(i.data()),t.push(r),s.push(i)}}if(e.length>0){const r=await Promise.all(e);for(let o=0;o<r.length;++o)n[t[o]]=r[o][0];Ue(s)}}function cb(n){if(n!=null)for(const e in n){const t=n[e];typeof t!="number"&&t.dispose()}}var ub;(function(n){n[n.SILENT=0]="SILENT",n[n.VERBOSE=1]="VERBOSE"})(ub||(ub={}));const pR=125;class ga{constructor(){this.validationData=null}setParams(e){this.params=e}async onEpochBegin(e,t){}async onEpochEnd(e,t){}async onBatchBegin(e,t){}async onBatchEnd(e,t){}async onTrainBegin(e){}async onTrainEnd(e){}setModel(e){}}class fR{constructor(e,t=10){e==null&&(e=[]),this.callbacks=e,this.queueLength=t}append(e){this.callbacks.push(e)}setParams(e){for(const t of this.callbacks)t.setParams(e)}setModel(e){for(const t of this.callbacks)t.setModel(e)}async onEpochBegin(e,t){t==null&&(t={});for(const s of this.callbacks)await s.onEpochBegin(e,t)}async onEpochEnd(e,t){t==null&&(t={});for(const s of this.callbacks)await s.onEpochEnd(e,t)}async onBatchBegin(e,t){t==null&&(t={});for(const s of this.callbacks)await s.onBatchBegin(e,t)}async onBatchEnd(e,t){t==null&&(t={});for(const s of this.callbacks)await s.onBatchEnd(e,t)}async onTrainBegin(e){e==null&&(e={});for(const t of this.callbacks)await t.onTrainBegin(e)}async onTrainEnd(e){e==null&&(e={});for(const t of this.callbacks)await t.onTrainEnd(e)}}class mR extends ga{constructor(){super()}async onEpochBegin(e){this.seen=0,this.totals={}}async onBatchEnd(e,t){t==null&&(t={});const s=t.size==null?0:t.size;this.seen+=s;for(const r in t){const o=t[r];if(typeof o=="number")this.totals.hasOwnProperty(r)||(this.totals[r]=0),this.totals[r]=this.totals[r]+o*s;else{let i;r in this.totals?i=this.totals[r]:this.totals[r]=0;const a=Y(()=>ue(this.totals[r],V(o,s)));this.totals[r]=a,i?.dispose()}}}async onEpochEnd(e,t){if(t!=null)for(const s of this.params.metrics)this.totals[s]!=null&&(typeof this.totals[s]=="number"?t[s]=this.totals[s]/this.seen:Y(()=>{const r=V(Ne(1,this.seen),this.totals[s]);t[s]=r,this.totals[s].dispose(),cs(t[s])}))}}class gR extends ga{async onTrainBegin(e){this.epoch=[],this.history={}}async onEpochEnd(e,t){t==null&&(t={}),this.epoch.push(e);for(const s in t)this.history[s]==null&&(this.history[s]=[]),this.history[s].push(t[s])}async syncData(){const e=[],t=[],s=[];for(const o in this.history){const i=this.history[o];for(let a=0;a<i.length;++a)if(typeof i[a]!="number"){const l=i[a];e.push(l.data()),t.push(o),s.push(a)}}const r=await Promise.all(e);for(let o=0;o<r.length;++o)this.history[t[o]][s[o]].dispose(),this.history[t[o]][s[o]]=r[o][0]}}class xR extends ga{constructor(e,t){if(super(),this.currentEpoch=0,this.nowFunc=e.nowFunc,this.nextFrameFunc=e.nextFrameFunc||Jg,this.yieldEvery=t||"auto",this.yieldEvery==="auto"&&(this.yieldEvery=pR),this.yieldEvery==="never"&&e.onYield!=null)throw new Error("yieldEvery is `never` but you provided an `onYield` callback. Either change `yieldEvery` or remove the callback");Pu(this.yieldEvery)&&(this.maybeWait=DE(this.maybeWait.bind(this),this.yieldEvery,this.nowFunc)),this.trainBegin=e.onTrainBegin,this.trainEnd=e.onTrainEnd,this.epochBegin=e.onEpochBegin,this.epochEnd=e.onEpochEnd,this.batchBegin=e.onBatchBegin,this.batchEnd=e.onBatchEnd,this.yield=e.onYield}async maybeWait(e,t,s){const r=[];this.yield!=null&&(await Mr(s),r.push(this.yield(e,t,s))),r.push(this.nextFrameFunc()),await Promise.all(r)}async onEpochBegin(e,t){this.currentEpoch=e,this.epochBegin!=null&&(await Mr(t),await this.epochBegin(e,t))}async onEpochEnd(e,t){const s=[];this.epochEnd!=null&&(await Mr(t),s.push(this.epochEnd(e,t))),this.yieldEvery==="epoch"&&s.push(this.nextFrameFunc()),await Promise.all(s)}async onBatchBegin(e,t){this.batchBegin!=null&&(await Mr(t),await this.batchBegin(e,t))}async onBatchEnd(e,t){const s=[];this.batchEnd!=null&&(await Mr(t),s.push(this.batchEnd(e,t))),this.yieldEvery==="batch"?s.push(this.nextFrameFunc()):Pu(this.yieldEvery)&&s.push(this.maybeWait(this.currentEpoch,e,t)),await Promise.all(s)}async onTrainBegin(e){this.trainBegin!=null&&(await Mr(e),await this.trainBegin(e))}async onTrainEnd(e){this.trainEnd!=null&&(await Mr(e),await this.trainEnd(e))}}function hb(n,e){return n==null&&(n={}),n instanceof ga?[n]:Array.isArray(n)&&n[0]instanceof ga?n:st(n).map(s=>new xR(s,e))}class Un{constructor(){}static registerCallbackConstructor(e,t){_(e>=0&&Number.isInteger(e),()=>`Verbosity level is expected to be an integer >= 0, but got ${e}`),Un.checkForDuplicate(t),Un.constructors[e]==null&&(Un.constructors[e]=[]),Un.constructors[e].push(t)}static checkForDuplicate(e){for(const t in Un.constructors)Un.constructors[+t].forEach(r=>{if(r===e)throw new B("Duplicate callback constructor.")})}static clear(){Un.constructors={}}static createCallbacks(e){const t=[];for(const s in Un.constructors){const r=+s;e>=r&&t.push(...Un.constructors[r])}return t.map(s=>new s)}}Un.constructors={};function db(n,e,t,s,r,o,i,a,l){const c=new gR,u=[new mR,...Un.createCallbacks(e)];n!=null&&u.push(...n),u.push(c);const h=new fR(u);return h.setParams({epochs:t,initialEpoch:s,samples:r,steps:o,batchSize:i,verbose:e,doValidation:a,metrics:l}),{callbackList:h,history:c}}function zs(n,e={},t=!1){return la(n,zn.getMap().classNameMap,e,"layer",t)}function Oc(n,e){return Y(()=>{n.dtype!=="float32"&&(n=be(n,"float32"));const t=Se(ha(n),e,!0),s=ic(t.shape,Pt()),r=en(Zs(t,s));return Ne(n,r)})}function Pc(n,e){return Y(()=>_t(ha(Re(e,n)),-1))}function bp(n,e){return Y(()=>_t(on(Re(e,n)),-1))}function yp(n,e){return Y(()=>{const t=Re(n,e),s=Dn(on(n),Pt(),Number.MAX_VALUE),r=on(Ne(t,s));return V(100,_t(r,-1))})}function bR(n,e){return Y(()=>{const t=Dn(e,Pt(),Number.MAX_VALUE),s=ps(ue(1,t)),r=Dn(n,Pt(),Number.MAX_VALUE),o=ps(ue(1,r));return _t(ha(Re(s,o)),-1)})}function yR(n,e){return Y(()=>{const t=Zs(0,Re(1,V(n,e)));return _t(ha(t),-1)})}function wR(n,e){return Y(()=>{const t=Zs(0,Re(1,V(n,e)));return _t(t,-1)})}function vR(n,e){return Y(()=>{const t=Se(V(n,e),-1),s=Xn(V(Re(1,n),e),-1);return Zs(0,ue(1,Re(s,t)))})}function CR(n,e){return Y(()=>{const t=Math.log(2),s=Re(e,n),r=Re(ue(s,Qi(V(-2,s))),t);return _t(r,-1)})}function xa(n,e,t=!1){return Y(()=>{if(t)e=gd(e);else{const s=Se(e,e.shape.length-1,!0);e=Ne(e,s)}return e=Dn(e,Pt(),1-Pt()),Tt(Se(V(be(n,"float32"),ps(e)),e.shape.length-1))})}function Lc(n,e,t=!1){return Y(()=>{const s=be(uc(UE(n)),"int32");e=Dn(e,Pt(),1-Pt());const r=e.shape,o=H(pg(s,r[r.length-1]),r);return xa(o,e,t)})}function kR(n,e){if(!Je(n.shape,e.shape))throw new B(`logits and labels must have the same shape, but got shapes ${JSON.stringify(n.shape)} and ${JSON.stringify(e.shape)}`);return Y(()=>{const t=Er(e),s=Tt(on(e));return ue(Re(t,V(e,n)),cg(ds(s)))})}function Mc(n,e){return Y(()=>{let t;return t=Dn(e,Pt(),1-Pt()),t=ps(Ne(t,Re(1,t))),_t(kR(n,t),-1)})}function $R(n,e){return Y(()=>{const t=Dn(n,Pt(),1),s=Dn(e,Pt(),1);return Se(V(n,ps(Ne(t,s))),-1)})}function IR(n,e){return Y(()=>{const t=ps(ue(Pt(),e));return _t(Re(e,V(n,t)),-1)})}function pb(n,e){return Y(()=>{const t=Oc(n,-1),s=Oc(e,-1),r=V(t,s);return Tt(Se(r,-1))})}const zc={meanSquaredError:Pc,meanAbsoluteError:bp,meanAbsolutePercentageError:yp,meanSquaredLogarithmicError:bR,squaredHinge:yR,hinge:wR,categoricalHinge:vR,logcosh:CR,categoricalCrossentropy:xa,sparseCategoricalCrossentropy:Lc,binaryCrossentropy:Mc,kullbackLeiblerDivergence:$R,poisson:IR,cosineProximity:pb};function wp(n){if(typeof n=="string"){if(n in zc)return zc[n];let e=`Unknown loss ${n}`;throw n.toLowerCase().includes("softmaxcrossentropy")&&(e=`Unknown loss ${n}. Use "categoricalCrossentropy" as the string name for tf.losses.softmaxCrossEntropy`),new B(e)}else return n}function fb(n,e){return Y(()=>{const t=V(.5,Mn(e)),s=xs(An(e,t),n.dtype);return _t(hs(n,s),-1)})}function mb(n,e){return Y(()=>xs(hs(Ki(n,-1),Ki(e,-1)),"float32"))}function SR(n,e){return Y(()=>be(Se(_s(hs(n,1),hs(e,1))),"float32"))}function NR(n,e){return Y(()=>be(Se(_s(hs(n,0),hs(e,1))),"float32"))}function TR(n,e){return Y(()=>{const t=SR(n,e),s=NR(n,e),r=ue(t,s);return be(an(An(r,0),Ne(t,r),0),"float32")})}function ER(n,e){return Mc(n,e)}function RR(n,e){return n.rank===e.rank&&(n=sa(n,[n.rank-1])),e=Ki(e,-1),e.dtype!==n.dtype&&(e=be(e,n.dtype)),be(hs(n,e),"float32")}const DR=Pc,AR=Pc,_R=bp,FR=bp,OR=yp,PR=yp,gb=xa,LR=pb,xb=Lc,Bc={binaryAccuracy:fb,categoricalAccuracy:mb,precision:TR,categoricalCrossentropy:gb,sparseCategoricalCrossentropy:xb,mse:DR,MSE:AR,mae:_R,MAE:FR,mape:OR,MAPE:PR,cosine:LR};function MR(n){if(typeof n=="string"&&n in Bc)return Bc[n];if(typeof n!="string"&&n!=null)return n;throw new B(`Unknown metric ${n}`)}function Vc(n){if(gs(n!==null,`Unknown LossOrMetricFn ${n}`),typeof n=="string")return n;{let e;for(const t of Object.keys(zc))if(zc[t]===n){e=t;break}if(e!==void 0)return e;for(const t of Object.keys(Bc))if(Bc[t]===n){e=t;break}return e!==void 0?e:n.name}}function zR(n){const e={Adagrad:()=>Io.adagrad(.01),Adadelta:()=>Io.adadelta(1,.95,Pt()),Adam:()=>Io.adam(.001,.9,.999,Pt()),Adamax:()=>Io.adamax(.002,.9,.999,Pt(),0),RMSProp:()=>Io.rmsprop(.001,.9,0,Pt()),SGD:()=>Io.sgd(.01)};if(e.adagrad=e.Adagrad,e.adadelta=e.Adadelta,e.adam=e.Adam,e.adamax=e.Adamax,e.rmsprop=e.RMSProp,e.sgd=e.SGD,n in e)return e[n]();throw new B(`Unknown Optimizer ${n}`)}const bb=1*1024*1024;function yb(n,e,t=!1){if(n==null||typeof n!="object"||Object.getPrototypeOf(n)!==Object.prototype||!vp(n))throw new Error("User-defined metadata is expected to be a JSON object, but is not.");if(t){const s=JSON.stringify(n);s.length>bb&&console.warn(`User-defined metadata of model "${e}" is too large in size (length=${s.length} when serialized). It is not recommended to store such large objects in user-defined metadata. Please make sure its serialized length is <= ${bb}.`)}}function vp(n){if(n===null)return!0;if(typeof n=="object")if(Object.getPrototypeOf(n)===Object.prototype){const e=Object.keys(n);for(const t of e)if(typeof t!="string"||!vp(n[t]))return!1;return!0}else if(Array.isArray(n)){for(const e of n)if(!vp(e))return!1;return!0}else return!1;else{const e=typeof n;return e==="string"||e==="number"||e==="boolean"}}function BR(n,e,t,s=console.log){const r=WR(n),o=["Layer (type)","Input Shape","Output shape","Param #"];r?(e=e||90,t=t||[.32,.61,.89,1]):(e=e||115,t=t||[.24,.48,.7,.8,1]),t[t.length-1]<=1&&(t=t.map(u=>Math.floor(e*u)));let i;if(!r){o.push("Receives inputs"),i=[];for(const u in n.nodesByDepth)i.push(...n.nodesByDepth[u])}s("_".repeat(e)),Wc(o,t,s),s("=".repeat(e));const a=n.layers;for(let u=0;u<a.length;++u)r?UR(a[u],t,s):GR(a[u],t,i,s),s((u===a.length-1?"=":"_").repeat(e));n.checkTrainableWeightsConsistency();const l=VR(n),c=Dc(n.nonTrainableWeights);s(`Total params: ${l+c}`),s(`Trainable params: ${l}`),s(`Non-trainable params: ${c}`),s("_".repeat(e))}function VR(n){let e;return n.collectedTrainableWeights!=null?e=Dc(n.collectedTrainableWeights):e=Dc(n.trainableWeights),e}function WR(n){let e=!0;const t=[],s=[];for(const r in n.nodesByDepth)t.push(n.nodesByDepth[r]);for(const r of t){if(r.length>1||r.length===1&&r[0].inboundLayers.length>1){e=!1;break}s.push(...r)}if(e)for(const r of n.layers){let o=!1;for(const i of r.inboundNodes)if(s.indexOf(i)!==-1)if(o){e=!1;break}else o=!0;if(!e)break}return e}function Wc(n,e,t=console.log){let s="";for(let r=0;r<n.length;++r)r>0&&(s=s.slice(0,s.length-1)+" "),s+=n[r],s=s.slice(0,e[r]),s+=" ".repeat(e[r]-s.length);t(s)}function UR(n,e,t){let s,r;try{r=n.inboundNodes.map(l=>JSON.stringify(l.inputShapes)).join(",")}catch{r="multiple"}try{s=JSON.stringify(n.outputShape)}catch{s="multiple"}const o=n.name,i=n.getClassName(),a=[`${o} (${i})`,r,s,n.countParams().toString()];Wc(a,e,t)}function GR(n,e,t,s){let r,o;try{o=n.inboundNodes.map(h=>JSON.stringify(h.inputShapes)).join(",")}catch{o="multiple"}try{r=JSON.stringify(n.outputShape)}catch{r="multiple"}const i=[];for(const h of n.inboundNodes)if(!(t!=null&&t.length>0&&t.indexOf(h)===-1))for(let d=0;d<h.inboundLayers.length;++d){const f=h.inboundLayers[d].name,g=h.nodeIndices[d],x=h.tensorIndices[d];i.push(`${f}[${g}][${x}]`)}const a=n.name,l=n.getClassName(),c=i.length===0?"":i[0],u=[`${a} (${l})`,o,r,n.countParams().toString(),c];Wc(u,e,s);for(let h=1;h<i.length;++h)Wc(["","","","",i[h]],e,s)}function wb(n,e,t){return(n==="inboundNodes"||n==="outputLayers"||n==="inputLayers")&&e===0&&typeof t=="string"}function Cp(n,e){if(n===null)return null;if(typeof n=="string")return Fr(n);if(typeof n=="number"||typeof n=="boolean")return n;if(n instanceof Array){const t=[],s=n.length;for(let r=0;r<s;++r){const o=n[r];wb(e,r,o)?t.push(o):t.push(Cp(o,e))}return t}else{const t={};for(const s of Object.keys(n)){const r=n[s];if(s==="name"&&typeof r=="string")t[s]=r;else{const o=Fr(s);t[o]=Cp(r,o)}}return t}}function kp(n,e){if(n==null)return null;if(typeof n=="string")return Ms(n);if(typeof n=="number"||typeof n=="boolean")return n;if(n instanceof Array){const t=[],s=n.length;for(let r=0;r<s;++r){const o=n[r];wb(e,r,o)?t.push(o):t.push(kp(o,e))}return t}else{const t={};for(const s of Object.keys(n)){const r=n[s],o=Ms(s);(s==="name"||s==="className")&&typeof r=="string"?t[o]=r:t[o]=kp(r,s)}return t}}const vb="4.22.0";const HR=n=>{const e=Object.keys(n);if(e.length===0)return!1;const t=e[0].split("/");return!isNaN(parseInt(t[t.length-1],10))};class ts extends We{constructor(e){if(super({}),this.containerNodes=new Set,this.name=e.name,this.name==null){const w=this.getClassName().toLowerCase();this.name=Nc(w)}if(this.supportsMasking=!1,this.trainable_=!0,Array.isArray(e.inputs)?this.inputs=e.inputs.slice():this.inputs=[e.inputs],Array.isArray(e.outputs)?this.outputs=e.outputs.slice():this.outputs=[e.outputs],er(this.inputs).length!==this.inputs.length)throw new B(`The list of inputs passed to the model is redundant. All inputs should only appear once. Found: ${this.inputs.map(w=>w.name)}`);er(this.outputs).length!==this.outputs.length&&console.warn(`The list of outputs passed to the model is redundant. All outputs should only appear once. Found: ${this.outputs.map(w=>w.name)}`),this.inputLayers=[],this.inputLayersNodeIndices=[],this.inputLayersTensorIndices=[],this.outputLayers=[],this.outputLayersNodeIndices=[],this.outputLayersTensorIndices=[],this.layers=[],this.internalContainerRefs=[];for(const w of this.outputs){const $=w.sourceLayer,C=w.nodeIndex,N=w.tensorIndex;this.outputLayers.push($),this.outputLayersNodeIndices.push(C),this.outputLayersTensorIndices.push(N)}for(const w of this.inputs){const $=w.sourceLayer,C=w.nodeIndex,N=w.tensorIndex;gs(C===0,"input layer has >1 nodes"),gs(N===0,"input layer has >1 tensors"),this.inputLayers.push($),this.inputLayersNodeIndices.push(C),this.inputLayersTensorIndices.push(N)}this.inputNames=[],this.outputNames=[],this.feedInputShapes=[],this.feedInputNames=[],this.feedOutputNames=[];for(let w=0;w<this.inputLayers.length;w++){const $=this.inputLayers[w];if(!($ instanceof pa))throw new TypeError(`Input layers to a LayersModel must be InputLayer objects. Received inputs: ${e.inputs}. Input ${w} (0-based) originates from layer type ${$.getClassName()}.`);this.inputNames.push($.name),this.feedInputShapes.push($.batchInputShape),this.feedInputNames.push($.name)}for(const w of this.outputLayers)this.outputNames.push(w.name);this.internalInputShapes=this.inputs.map(w=>w.shape),this.internalOutputShapes=this.outputs.map(w=>w.shape);const t={},s={},r={},o={},i={},a=[],l=(w,$,C,N,E,F)=>{(N==null||E==null||F==null)&&(N=w.sourceLayer,E=w.nodeIndex,F=w.tensorIndex);const O=N.inboundNodes[E];if(C.indexOf(O)!==-1)throw new Bn(`The tensor ${w.name} at layer "${N.name}" is part of a cycle.`);if($.indexOf(O)!==-1)return;this.containerNodes.add(ts.nodeKey(N,E)),N.id in i||(i[N.id]=Object.keys(i).length),C.indexOf(O)===-1&&C.push(O);const A=O.inboundLayers.length;for(let D=0;D<A;D++){const S=O.inputTensors[D],z=O.inboundLayers[D],U=O.nodeIndices[D],G=O.tensorIndices[D];l(S,$,C,z,U,G)}for($.push(O);C.indexOf(O)>=0;)C.splice(C.indexOf(O),1);a.push(O)},c=[],u=[];for(const w of this.outputs)l(w,c,u);const h=a.slice().reverse();for(const w of h){s[w.id]=w,w.id in t||(t[w.id]=0);let $=t[w.id];const C=r[w.outboundLayer.id]==null?0:r[w.outboundLayer.id];$=Math.max($,C),r[w.outboundLayer.id]=$,o[w.outboundLayer.id]=w.outboundLayer,t[w.id]=$;for(let N=0;N<w.inboundLayers.length;N++){const E=w.inboundLayers[N],F=w.nodeIndices[N],O=E.inboundNodes[F],A=t[O.id]==null?0:t[O.id];t[O.id]=Math.max($+1,A),s[O.id]=O}}const d={};for(const w in t){const $=t[w];$ in d||(d[$]=[]),d[$].push(s[w])}const f={};for(const w in r){const $=r[w];$ in f||(f[$]=[]),f[$].push(o[w])}let g=Object.keys(f).map(w=>parseInt(w,10)).sort(Ic);this.layers=[];for(const w of g){const $=f[w];$.sort((C,N)=>{const E=i[C.id],F=i[N.id];return E<F?-1:E>F?1:0});for(const C of $)C instanceof ts&&this.internalContainerRefs.push(C),this.layers.push(C)}this.layersByDepth=f,g=Object.keys(d).map(w=>parseInt(w,10)).sort(Ic);const x=this.inputs.slice(),b=[];for(const w of g)for(const $ of d[w]){const C=$.outboundLayer;if(C!=null){for(const N of $.inputTensors)if(x.indexOf(N)===-1)throw new Bn(`Graph disconnected: cannot obtain value for tensor ${N} at layer "${C.name}". The following previous layers were accessed without issue: ${b}`);for(const N of $.outputTensors)x.push(N);b.push(C.name)}}this.nodesByDepth=d;const y=this.layers.map(w=>w.name);for(const w of y){const $=y.filter(C=>C===w).length;if($!==1)throw new Bn(`The name "${w}" is used ${$} times in the model. All layer names should be unique. Layer names: `+JSON.stringify(y))}this.outboundNodes=[],this.inboundNodes=[],new Ac({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:this.inputs.map(w=>null),outputMasks:this.outputs.map(w=>null),inputShapes:this.inputs.map(w=>w.shape),outputShapes:this.outputs.map(w=>w.shape)}),this.built=!0,this._refCount=1}assertNotDisposed(){if(this._refCount===0)throw new Error(`Container '${this.name}' is already disposed.`)}dispose(){this.assertNotDisposed();const e={refCountAfterDispose:null,numDisposedVariables:0};if(--this._refCount===0){for(const t of this.layers)e.numDisposedVariables+=t.dispose().numDisposedVariables;for(const t of this.internalContainerRefs)e.numDisposedVariables+=t.dispose().numDisposedVariables}return e.refCountAfterDispose=this._refCount,e}get trainable(){return this.trainable_}set trainable(e){this.layers.forEach(t=>{t._trainableWeights.forEach(s=>s.trainable=e)}),this.trainable_=e}get trainableWeights(){if(this._trainableWeights.length>0)throw new B("Container instance unexpectedly contains _trainableWeights.The trainable weights of a Container are a union of the trainable weights of its consituent Layers. Its own _trainableWeights must remain an empty Array.");if(!this.trainable)return[];let e=[];for(const t of this.layers)e=e.concat(t.trainableWeights);return e}get nonTrainableWeights(){const e=[];for(const t of this.layers)e.push(...t.nonTrainableWeights);if(!this.trainable){const t=[];for(const s of this.layers)t.push(...s.trainableWeights);return t.concat(e)}return e}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}loadWeights(e,t=!0){const s={};let r=0;const o=HR(e);o&&this.parseWeights(e);for(const a of this.layers)for(const[l,c]of a.weights.entries()){const u=o?`${c.name.split("/").slice(0,-1).join("/")+"/"}${l}`:c.originalName;if(s[u]!=null)throw new B(`Duplicate weight name: ${u}`);s[u]=c,r++}const i=[];for(const a in e){let l=a;if(s[a]==null){const c=a.split("/");l=c.slice(0,-2).concat([c[c.length-1]]).join("/")}if(s[l]!=null)i.push([s[l],e[a]]);else if(t)throw new B(`Provided weight data has no target variable: ${a}`);delete s[l]}if(t){const a=[];for(const l in s)a.push(l);if(a.length>0)throw new B(`${a.length} of ${r} weights are not set: ${a}`)}gp(i)}parseWeights(e){for(const t in Object.keys(e)){const s=t.split("/"),r=["vars","layer_checkpoint_dependencies"],o=s.map(i=>i.startsWith("_")?i.slice(1):i).filter(i=>!r.includes(i)).join("/");o!==t&&(e[o]=e[t],delete e[t])}}updatedConfig(){const e=this.getConfig(),t={};return t.className=this.getClassName(),t.config=e,t.kerasVersion=`tfjs-layers ${vb}`,t.backend="TensorFlow.js",t}toJSON(e,t=!0){const s=kp(this.updatedConfig());return t?JSON.stringify(s):s}call(e,t){return Y(()=>{e=st(e);const s=new sr;for(let r=0;r<this.inputs.length;++r)s.add(this.inputs[r],e[r]);return fa(this.outputs,s,t)})}computeMask(e,t){return Y(()=>{e=st(e);let s;return t==null?s=_r(null,e.length):s=st(t),this.runInternalGraph(e,s)[1]})}computeOutputShape(e){const t=Rc(e);if(t.length!==this.inputLayers.length)throw new B(`Invalid inputShape argument ${e}: model has ${this.inputLayers.length} tensor inputs.`);const s={};for(let a=0;a<t.length;a++){const l=this.inputLayers[a],c=t[a],u=l.name+"_0_0";s[u]=c}const r=Object.keys(this.nodesByDepth).map(a=>parseInt(a,10)).sort(Ic);if(r.length>1)for(const a of r){const l=this.nodesByDepth[a];for(const c of l){const u=c.outboundLayer;if(this.inputLayers.map(x=>x.id).indexOf(u.id)!==-1)continue;const h=[];for(let x=0;x<c.inboundLayers.length;x++){const b=c.inboundLayers[x],y=c.nodeIndices[x],w=c.tensorIndices[x],$=`${b.name}_${y}_${w}`,C=s[$];h.push(C)}const d=u.computeOutputShape(bn(h)),f=Rc(d),g=u.inboundNodes.indexOf(c);for(let x=0;x<f.length;x++){const b=`${u.name}_${g}_${x}`;s[b]=f[x]}}}const o=[],i=[];for(let a=0;a<this.outputLayers.length;a++){const l=this.outputLayers[a],c=this.outputLayersNodeIndices[a],u=this.outputLayersTensorIndices[a],h=`${l.name}_${c}_${u}`;i.push(h)}for(let a=0;a<i.length;a++){const l=i[a];gs(l in s),o.push(s[l])}return bn(o)}runInternalGraph(e,t){t==null&&(t=_r(null,e.length));const s={};for(let l=0;l<this.inputs.length;++l){const c=this.inputs[l],u=e[l],h=t[l];s[c.id]=[u,h]}const r=Object.keys(this.nodesByDepth).map(l=>parseInt(l,10)).sort(Ic);for(const l of r){const c=this.nodesByDepth[l];for(const u of c){const h=u.outboundLayer,d=u.inputTensors,f=u.outputTensors,g=new Array;for(const x of d)x.id in s&&g.push(s[x.id]);if(g.length===d.length){let x={},b,y,w,$;if(u.callArgs!=null&&(x=u.callArgs),g.length===1){const[C,N]=g[0];x.mask==null&&(x.mask=N),w=st(h.call(C,x)),$=st(h.computeMask(C,N)),b=[C],y=[N]}else b=g.map(C=>C[0]),y=g.map(C=>C[1]),x.mask==null&&(x.mask=y),w=st(h.call(b,x)),$=st(h.computeMask(b,y));if(h.activityRegularizer)throw new Me("LayersModel invocation with concrete Tensor value(s) in the presence of activity regularizer(s) is not supported yet.");for(let C=0;C<f.length;++C){const N=f[C],E=w[C],F=$[C];s[N.id]=[E,F]}}}}const o=[],i=[],a=[];for(const l of this.outputs){gs(l.id in s,`Could not compute output ${l.name} : ${l.id}`);const[c,u]=s[l.id];a.push(c.shape),o.push(c),i.push(u)}return[o,i,a]}buildNodeConversionMap(e){const t={};let s;for(const r of this.layers){s=r instanceof ts?1:0;for(let o=0;o<r.inboundNodes.length;o++){const i=ts.nodeKey(r,o);this.containerNodes.has(i)&&(t[i]=s,s+=1)}}return t}getLayer(e,t){if(t!=null)return this.findLayer(t);if(e==null)throw new B("Provide either a layer name or layer index");if(typeof e=="number")return this.findLayer(e);for(const s of this.layers)if(s.name===e)return s;throw new B(`No such layer: ${e}`)}findLayer(e){if(this.layers.length<=e)throw new B(`Was asked to retrieve layer at index ${e}, but model only has ${this.layers.length} layer(s).`);return this.layers[e]}calculateLosses(){return Y(()=>{const e=[];for(const t of this.layers)for(let s=0;s<t.inboundNodes.length;++s){const r=ts.nodeKey(t,s);this.containerNodes.has(r)&&e.push(...t.calculateLosses())}return e})}getConfig(){const e={name:this.name},t=this.buildNodeConversionMap(this.layers),s=[];for(const i of this.layers){const a=i.getClassName(),l=i.getConfig(),c=[];for(let h=0;h<i.inboundNodes.length;h++){const d=i.inboundNodes[h],f=ts.nodeKey(i,h);let g={};if(this.containerNodes.has(f)){if(d.callArgs)try{JSON.stringify(d.callArgs),g=d.callArgs}catch{console.warn(`Layer ${i.name} was passed non-serializable keyword arguments: ${d.callArgs}. They will not be included in the serialized model (and thus will be missing at deserialization time).`),g={}}if(d.inboundLayers.length>0){const x=[];for(let b=0;b<d.inboundLayers.length;b++){const y=d.inboundLayers[b],w=d.nodeIndices[b],$=d.tensorIndices[b],C=ts.nodeKey(y,w);let N=t[C];N==null&&(N=0),x.push([y.name,N,$,g])}c.push(x)}}}const u={};u.name=i.name,u.className=a,u.config=l,u.inboundNodes=c,s.push(u)}e.layers=s;const r=[];for(let i=0;i<this.inputLayers.length;i++){const a=this.inputLayers[i],l=this.inputLayersNodeIndices[i],c=ts.nodeKey(a,l);if(!this.containerNodes.has(c))continue;let u=t[c];u==null&&(u=0);const h=this.inputLayersTensorIndices[i];r.push([a.name,u,h])}e.inputLayers=r;const o=[];for(let i=0;i<this.outputLayers.length;i++){const a=this.outputLayers[i],l=this.outputLayersNodeIndices[i],c=ts.nodeKey(a,l);if(!this.containerNodes.has(c))continue;let u=t[c];u==null&&(u=0);const h=this.outputLayersTensorIndices[i];o.push([a.name,u,h])}return e.outputLayers=o,e}static fromConfig(e,t,s={},r=!1){const o={},i={};function a(b,y){b.name in i?i[b.name].push(y):i[b.name]=[y]}function l(b,y){const w=[];let $;for(const C of y){const N=C[0],E=C[1],F=C[2];if($=C[3]==null?{}:C[3],!(N in o)){a(b,y);return}const O=o[N];if(O.inboundNodes.length<=E){a(b,y);return}const A=O.inboundNodes[E];w.push(A.outputTensors[F])}w.length>0&&b.apply(bn(w),$)}function c(b){const y=b.name,w=zs(b,t.customObjects!=null?t.customObjects:{});w.setFastWeightInitDuringBuild(r),o[y]=w,b.inboundNodes.forEach(C=>{if(!(C instanceof Array))throw new B(`Corrupted configuration, expected array for nodeData: ${C}`);a(w,C)})}const u=t.name,h=t.layers;for(const b of h)c(b);for(;!RE(i);)for(const b of h){const y=o[b.name];if(y.name in i){const w=i[y.name];delete i[y.name];for(const $ of w)l(y,$)}}const d=[],f=[],g=t.inputLayers;for(const b of g){const y=b[0],w=b[1],$=b[2];gs(y in o);const N=o[y].inboundNodes[w].outputTensors;d.push(N[$])}const x=t.outputLayers;for(const b of x){const y=b[0],w=b[1],$=b[2];gs(y in o);const N=o[y].inboundNodes[w].outputTensors;f.push(N[$])}return new e({inputs:d,outputs:f,name:u})}get stateful(){if(this._stateful)throw new B("Container instance unexpectedly has _stateful = true. The statefulness of a Container is determined by the Layers it contains. Its _stateful property must remain the default false.");for(const e of this.layers)if(e.stateful)return!0;return!1}resetStates(){Y(()=>{this.layers.forEach(e=>{e.stateful&&e.resetStates()})})}}function jR(n,e,t){const s=e.length;if(n==null||Array.isArray(n)&&n.length===0)return e.map(r=>null);if(s===1)return Array.isArray(n)&&n.length===1?n:typeof n=="object"&&e[0]in n?[n[e[0]]]:[n];if(Array.isArray(n)){if(n.length!==s)throw new Error(`Provided ${t} is an array of ${n.length} element(s), but the model has ${s} outputs. Make sure a set of weights is provided for each model output.`);return n}else if(typeof n=="object"&&Object.keys(n).length>0&&typeof n[Object.keys(n)[0]]=="object"){const r=[];return e.forEach(o=>{o in n?r.push(n[o]):r.push(null)}),r}else throw new Error(`The model has multiple (${s}) outputs, so ${t} must be either an array with ${s} elements or an object with ${e} keys. Provided ${t} not understood: ${JSON.stringify(n)}`)}function Cb(n,e){return jR(n,e,"classWeight")}async function kb(n,e,t,s){if(t!=null){const r=Y(()=>{if(n.shape.length===1)return kr(n);if(n.shape.length===2){if(n.shape[1]>1)return Ki(n,1);if(n.shape[1]===1)return H(n,[n.shape[0]]);throw new Error(`Encountered unexpected last-dimension size (${n.shape[1]}) during handling of class weights. The size is expected to be >= 1.`)}else throw new Error(`Unexpected rank of target (y) tensor (${n.rank}) during handling of class weights. The rank is expected to be 1 or 2.`)}),o=Array.from(await r.data());Ue(r);const i=[];return o.forEach(a=>{if(t[a]==null)throw new Error(`classWeight must contain all classes in the training data. The class ${a} exists in the data but not in classWeight`);i.push(t[a])}),kn(i,"float32")}else return null}function KR(n,e){return V(n,e)}const qR=32;function $b(n,e){let t,s;const r=e;t=r.xs,s=r.ys,_(t!=null&&s!=null,()=>`A Dataset iterator for fitDataset() is expected to generate objects of the form \`{xs: xVal, ys: yVal}\`, where the two values may be \`tf.Tensor\`, an array of Tensors, or a map of string to Tensor.  The provided Dataset instead generates ${e}`);const o=Ib("input",n.inputNames,t),i=Ib("output",n.outputNames,s),a=o[0].shape[0];_(o.length===n.inputs.length,()=>`LayersModel has ${n.inputs.length} inputs, but the dataset provides ${o.length} inputs.  (Expected input keys: ${JSON.stringify(n.inputNames)})`),_(i.length===n.outputs.length,()=>`LayersModel has ${n.outputs.length} outputs, but the dataset provides ${i.length} outputs.  (Expected output keys: ${JSON.stringify(n.outputNames)})`);for(let l=0;l<o.length;l++)_(o[l].shape[0]===a,()=>`Batch size mismatch: input ${n.inputNames[l]} has ${o[l].shape[0]}; expected  ${a} based on input ${n.inputNames[0]}.`);for(let l=0;l<i.length;l++)_(i[l].shape[0]===a,()=>`Batch size mismatch: output ${n.outputNames[l]} has ${i[l].shape[0]}; expected  ${a} based on input ${n.inputNames[0]}.`);return{xs:o,ys:i}}function Ib(n,e,t){if(t instanceof Ft)return[t];if(Array.isArray(t))return _(t.length===e.length,()=>`Received an array of ${t.length} Tensors, but expected ${e.length} to match the ${n} keys ${e}.`),t;{const s=[];for(const r of e){if(t[r]==null)throw new B(`The feature data generated by the dataset lacks the required ${n} key '${r}'.`);s.push(t[r])}return s}}function XR(n){if(n.length===3)throw new Me("Validation with sample weights is not implemented yet.");return{xs:n[0],ys:n[1]}}async function YR(n,e,t){const s=t.batchesPerEpoch!=null;if(_(n.optimizer!=null,()=>"You must compile a model before training/testing. Use LayersModel.compile(modelCompileConfig)."),_(t!=null,()=>"For fitDataset(), the 2nd argument (config) is required, but it is not provided in this call."),_(t.epochs!=null&&t.epochs>0&&Number.isInteger(t.epochs),()=>`For fitDataset(), config.epochs is expected to be a positive integer, but got ${t.epochs}`),_(!s||t.batchesPerEpoch>0&&Number.isInteger(t.batchesPerEpoch),()=>`For fitDataset(), config.batchesPerEpoch is expected to be a positive integer if specified, but got ${t.batchesPerEpoch}`),_(t.validationSplit==null,()=>"`validationSplit` is not supported by `fitDataset()`. Use validationData instead."),n.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");n.isTraining=!0;try{const r=t.validationData!=null;let o,i;if(r)if(Sb(t.validationData))_(t.validationBatches==null||t.validationBatches>0&&Number.isInteger(t.validationBatches),()=>`For fitDataset() with dataset-based validation, config.validationBatches is expected not to be provided, or to be a positive integer, but got ${t.validationBatches}`);else{const b=XR(t.validationData);o=b.xs,i=b.ys}const a=n.makeTrainFunction(),l=n.getDedupedMetricsNames();let c;r?c=l.slice().concat(l.map(b=>"val_"+b)):c=l.slice();const u=hb(t.callbacks,t.yieldEvery),h=t.verbose==null?1:t.verbose,{callbackList:d,history:f}=db(u,h,t.epochs,null,null,ZR(e,t),null,r,c);d.setModel(n),n.history=f,await d.onTrainBegin(),n.stopTraining_=!1;let g=t.initialEpoch==null?0:t.initialEpoch,x=await e.iterator();for(;g<t.epochs;){const b={};await d.onEpochBegin(g);let y=0,w=0;for(s||(x=await e.iterator());!s||y<t.batchesPerEpoch;){const $=await x.next();if(s&&$.done){console.warn(`You provided \`batchesPerEpoch\` as ${t.batchesPerEpoch}, but your dataset iterator ran out of data after ${y} batches; interrupting training. Make sure that your dataset can generate at least \`batchesPerEpoch * epochs\` batches (in this case, ${t.batchesPerEpoch*t.epochs} batches). You may need to use the repeat() function when building your dataset.`);break}if($.value!=null){const{xs:C,ys:N}=$b(n,$.value),E={};E.batch=w,E.size=C[0].shape[0],await d.onBatchBegin(w,E);const F=[];if(t.classWeight!=null){const D=Cb(t.classWeight,n.outputNames);for(let S=0;S<D.length;++S)F.push(await kb(N[S],null,D[S]))}const O=C.concat(N).concat(F),A=a(O);Ue(O);for(let D=0;D<l.length;++D){const S=l[D],z=A[D];E[S]=z,cs(z)}await d.onBatchEnd(w,E),cb(E),w++,y++}if(s?y>=t.batchesPerEpoch:$.done){if(r){let C;Sb(t.validationData)?C=st(await n.evaluateDataset(t.validationData,{batches:t.validationBatches})):C=st(n.evaluate(o,i,{batchSize:t.validationBatchSize==null?qR:t.validationBatchSize,verbose:0}));for(let N=0;N<n.metricsNames.length;++N)b[`val_${n.metricsNames[N]}`]=C[N]}break}if(n.stopTraining_)break}if(await d.onEpochEnd(g,b),g++,n.stopTraining_)break}return await d.onTrainEnd(),await n.history.syncData(),n.history}finally{n.isTraining=!1}}function ZR(n,e){let t=null;return e.batchesPerEpoch!=null?t=e.batchesPerEpoch:Number.isFinite(n.size)&&(t=n.size),t}function Sb(n){return typeof n.iterator=="function"}function JR(n){return typeof n.next=="function"}async function QR(n,e,t){t=t||{};const s=t.batches!=null,r=n.testFunction;let o=[];if(t.verbose>0)throw new Me("Verbose mode is not implemented yet.");_(!s||t.batches>0&&Number.isInteger(t.batches),()=>`Test loop expects \`batches\` to be a positive integer, but received ${JSON.stringify(t.batches)}`);const i=JR(e)?e:await e.iterator();let a=0,l=0;for(;!s||l<t.batches;){const c=await i.next();if(o=Y(()=>{if(c.value){const{xs:u,ys:h}=$b(n,c.value),d=u.concat(h),f=Y(()=>r(d));if(Ue(d),l===0)for(let x=0;x<f.length;++x)o.push(et(0));const g=d[0].shape[0];for(let x=0;x<f.length;++x){const b=f[x],y=o[x];o[x]=Y(()=>ue(o[x],V(g,b))),l>0&&Ue(y)}Ue(f),a+=g,++l}return o}),c.done){s&&console.warn(`Your dataset iterator ran out of data during evaluateDataset(). Interrupting evalution. Make sure that your dataset can generate at least \`batches\` batches (in this case, ${t.batches} batches). You may need to use the repeat() function when building your dataset.`);break}}for(let c=0;c<o.length;++c){const u=o[c];o[c]=Ne(o[c],a),Ue(u)}return bn(o)}function $p(n){_(n>0&&Number.isInteger(n),()=>`batchSize is required to be a positive integer, but got ${n}`)}function ba(n,e,t){return n==null?[null]:Array.isArray(n)?n.map(s=>Lr(s,e,t-e)):Lr(n,e,t-e)}function Ip(n,e){return Y(()=>n==null?null:Array.isArray(n)?n.map(t=>Ip(t,e)):Ux(n,e.dtype==="int32"?e:be(e,"int32")))}function Sp(n,e){const t=[];let s=0,r=null;for(;s<n;)r=s+e,r>=n&&(r=n),t.push([s,r]),s=r;return t}function Nb(n){const e=[];n instanceof Ft&&(n=[n]);for(let t=0;t<n.length;++t){const s=n[t];if(s.rank===1)e.push(ua(s,1));else{if(s.rank===0)throw new Error("Expected tensor to be at least 1D, but received a 0D tensor (scalar).");e.push(s)}}return e}function ns(n,e){if(n==null)return;const t=[];if(e instanceof Ft)t.push(e.id);else if(Array.isArray(e))e.forEach(r=>t.push(r.id));else if(e!=null)for(const r in e){const o=e[r];t.push(o.id)}const s=[];if(n instanceof Ft)t.indexOf(n.id)===-1&&s.push(n);else if(Array.isArray(n))n.forEach(r=>{t.indexOf(r.id)===-1&&s.push(r)});else if(n!=null)for(const r in n){const o=n[r];t.indexOf(o.id)===-1&&s.push(o)}s.forEach(r=>{r.isDisposed||r.dispose()})}function eD(n){return n instanceof Ft}function Np(n){return Array.isArray(n)}function Tb(n){return!eD(n)&&!Np(n)}function Eb(n,e,t,s=!0,r=""){if(e==null||e.length===0){if(n!=null){let i=!1;if(Np(n)&&n.length>0)i=!0;else if(Tb(n)){for(const a in n)if(n.hasOwnProperty(a)){i=!0;break}}else i=!0;if(i)throw new B(`Error when checking model ${r} expected no data, but got ${n}`)}return[]}if(n==null)return e.map(i=>null);let o;if(Tb(n)){n=n,o=[];for(const i of e){if(n[i]==null)throw new B(`No data provided for "${i}". Need data for each key in: ${e}`);o.push(n[i])}}else if(Np(n)){if(n=n,n.length!==e.length)throw new B(`Error when checking model ${r}: the Array of Tensors that you are passing to your model is not the size the model expected. Expected to see ${e.length} Tensor(s), but instead got the following list of Tensor(s): ${n}`);o=n}else{if(n=n,e.length>1)throw new B(`The model ${r} expects ${e.length} Tensor(s), but only received one Tensor. Found: Tensor with shape ${n.shape}`);o=[n]}if(o=Nb(o),t!=null)for(let i=0;i<e.length;++i){if(t[i]==null)continue;const a=o[i];if(a.shape.length!==t[i].length)throw new B(`Error when checking ${r}: expected ${e[i]} to have ${t[i].length} dimension(s). but got array with shape ${a.shape}`);for(let l=0;l<t[i].length;++l){if(l===0&&!s)continue;const c=a.shape[l],u=t[i][l];if(u!=null&&u>=0&&c!==u)throw new B(`${r} expected a batch of elements where each example has shape [${t[i].slice(1,t[i].length)}] (i.e.,tensor shape [*,${t[i].slice(1,t[i].length)}]) but the ${r} received an input with ${a.shape[0]} examples, each with shape [${a.shape.slice(1,a.shape.length)}] (tensor shape [${a.shape}])`)}}return o}function tD(n,e,t){const s=er(n.map(o=>o.shape[0]));s.sort();const r=er(e.map(o=>o.shape[0]));if(r.sort(),s.length>1)throw new B(`All input Tensors (x) should have the same number of samples. Got array shapes: ${JSON.stringify(n.map(o=>o.shape))}`);if(r.length>1)throw new B(`All target Tensors (y) should have the same number of samples. Got array shapes: ${JSON.stringify(e.map(o=>o.shape))}`);if(s.length>0&&r.length>0&&!Je(s,r))throw new B(`Input Tensors should have the same number of samples as target Tensors. Found ${s[0]} input sample(s) and ${r[0]} target sample(s).`)}function nD(n,e,t){const s=[Pc,Mc,xa];for(let r=0;r<n.length;++r){const o=n[r],i=e[r],a=t[r];if(i!=null){if(i===xa&&o.shape[o.shape.length-1]===1)throw new B(`You are passing a target array of shape ${o.shape} while using a loss 'categorical_crossentropy'. 'categorical_crossentropy'expects targets to be binary matrices (1s and 0s) of shape [samples, classes].`);if(s.indexOf(i)!==-1){const l=o.shape.slice(1),c=a.slice(1);for(let u=0;u<l.length;++u){const h=l[u],d=c[u];if(d!=null&&h!==d)throw new B(`A target Tensor with shape ${o.shape} was passed for an output of shape ${a}, while using a loss function that expects targets to have the same shape as the output.`)}}}}}function Rb(n,e,t,s=!0,r=""){let o;if(Array.isArray(n)){if(n.length!==e.length)throw new B(`Error when checking model ${r}: the Array of Tensors that you are passing to your model is not the size the the model expected. Expected to see ${e.length} Tensor(s), but instead got ${n.length} Tensors(s).`);o=n}else{if(e.length>1)throw new B(`The model expects ${e.length} ${r} Tensors, but only received one Tensor. Found: array with shape ${JSON.stringify(n.shape)}.`);o=[n]}if(t!=null)for(let i=0;i<e.length;++i){if(t[i]==null)continue;const a=o[i];if(a.shape.length!==t[i].length)throw new B(`Error when checking ${r}: expected ${e[i]} to have ${t[i].length} dimension(s), but got array with shape ${JSON.stringify(a.shape)}`);for(let l=0;l<t[i].length;++l){if(l===0&&!s)continue;const c=a.shape[l],u=t[i][l];if(u!=null&&u!==c)throw new B(`Error when checking ${r}: expected ${e[i]} to have shape ${JSON.stringify(t[i])} but got array with shape ${JSON.stringify(a.shape)}.`)}}}function sD(n,e){if(n==null||Array.isArray(n)&&n.length===0)return e.map(s=>[]);let t;if(typeof n=="string"||typeof n=="function")t=[n];else if(Array.isArray(n)||typeof n=="object")t=n;else throw new TypeError(`Type of metrics argument not understood. Expected an string,function, Array, or Object, found: ${n}`);if(Array.isArray(t))return e.map(s=>t);{const s=[];for(const r of e){let o=t.hasOwnProperty(r)?t[r]:[];Array.isArray(o)||(o=[o]),s.push(o)}return s}}const rD="layers-model";class To extends ts{constructor(e){super(e),this.isTraining=!1}summary(e,t,s=console.log){if(!this.built)throw new B("This model has never been called, thus its weights have not been created yet. So no summary can be displayed. Build the model first (e.g., by calling it on some test data).");BR(this,e,t,s)}compile(e){if(e.loss==null&&(e.loss=[]),this.loss=e.loss,typeof e.optimizer=="string")this.optimizer_=zR(e.optimizer),this.isOptimizerOwned=!0;else{if(!(e.optimizer instanceof Qs))throw new B("User-defined optimizer must be an instance of tf.Optimizer.");this.optimizer_=e.optimizer,this.isOptimizerOwned=!1}let t=[];if(!Array.isArray(e.loss)&&typeof e.loss!="string"&&typeof e.loss!="function"){e.loss=e.loss;for(const i in e.loss)if(this.outputNames.indexOf(i)===-1)throw new B(`Unknown entry in loss dictionary: "${i}". Only expected the following keys: ${this.outputNames}`);for(const i of this.outputNames)e.loss[i]==null&&console.warn(`Output "${i}" is missing from loss dictionary. We assume this was done on purpose, and we will not be expecting data to be passed to ${i} during training`),t.push(wp(e.loss[i]))}else if(Array.isArray(e.loss)){if(e.loss.length!==this.outputs.length)throw new B(`When passing an Array as loss, it should have one entry per model output. The model has ${this.outputs.length} output(s), but you passed loss=${e.loss}.`);t=e.loss.map(a=>wp(a))}else{const i=wp(e.loss);this.outputs.forEach(a=>{t.push(i)})}this.lossFunctions=t,this.feedOutputNames=[],this.feedOutputShapes=[],this.feedLossFns=[];for(let i=0;i<this.outputs.length;++i){const a=this.internalOutputShapes[i],l=this.outputNames[i];this.feedOutputNames.push(l),this.feedOutputShapes.push(a),this.feedLossFns.push(this.lossFunctions[i])}const s=[];this.metrics=e.metrics,this.metricsNames=["loss"],this.metricsTensors=[],Pr("loss",()=>{for(let i=0;i<this.outputs.length;++i){if(s.indexOf(i)!==-1)continue;const a=this.lossFunctions[i];this.outputs.length>1&&(this.metricsTensors.push([a,i]),this.metricsNames.push(this.outputNames[i]+"_loss"))}});const r=sD(e.metrics,this.outputNames),o=(i,a,l)=>{this.outputNames.length>1&&(a=this.outputNames[i]+"_"+a),this.metricsNames.push(a),this.metricsTensors.push([l,i])};Pr("metric",()=>{for(let i=0;i<this.outputs.length;++i){if(s.indexOf(i)!==-1)continue;const a=r[i];(c=>{let h,d,f;for(const g of c){if(typeof g=="string"&&["accuracy","acc","crossentropy","ce"].indexOf(g)!==-1){const b=this.internalOutputShapes[i];b[b.length-1]===1||this.lossFunctions[i]===Mc?["accuracy","acc"].indexOf(g)!==-1?d=fb:["crossentropy","ce"].indexOf(g)!==-1&&(d=ER):this.lossFunctions[i]===Lc?["accuracy","acc"].indexOf(g)!==-1?d=RR:["crossentropy","ce"].indexOf(g)!==-1&&(d=xb):["accuracy","acc"].indexOf(g)!==-1?d=mb:["crossentropy","ce"].indexOf(g)!==-1&&(d=gb);let y;["accuracy","acc"].indexOf(g)!==-1?y="acc":["crossentropy","ce"].indexOf(g)!==-1&&(y="ce"),f=d,h=""+y}else f=MR(g),h=""+Vc(g);let x;Pr(h,()=>{x=f}),o(i,h,x)}})(a)}}),this.collectedTrainableWeights=this.trainableWeights}checkTrainableWeightsConsistency(){this.collectedTrainableWeights!=null&&this.trainableWeights.length!==this.collectedTrainableWeights.length&&console.warn("Discrepancy between trainableweights and collected trainable weights. Did you set `model.trainable` without calling `model.compile()` afterwards?")}evaluate(e,t,s={}){const r=s.batchSize==null?32:s.batchSize;$p(r);const i=this.standardizeUserDataXY(e,t,!0,r);try{const a=i[0].concat(i[1]);this.makeTestFunction();const l=this.testFunction,c=this.testLoop(l,a,r,s.verbose,s.steps);return bn(c)}finally{ns(i[0],e),ns(i[1],t)}}async evaluateDataset(e,t){return this.makeTestFunction(),QR(this,e,t)}checkNumSamples(e,t,s,r="steps"){let o;if(s!=null){if(o=null,t!=null)throw new B(`If ${r} is set, batchSize must be null or undefined.Got batchSize = ${t}`)}else if(e!=null)Array.isArray(e)?o=e[0].shape[0]:o=e.shape[0];else throw new B(`Either the input data should have a defined shape, or ${r} shoud be specified.`);return o}execute(e,t){if(Array.isArray(t)&&t.length===0)throw new B("`outputs` is an empty Array, which is not allowed.");const s=Array.isArray(t),r=s?t:[t],o=this.retrieveSymbolicTensors(r),i=new sr;if(e instanceof Ft&&(e=[e]),Array.isArray(e)){if(e.length!==this.inputs.length)throw new B(`The number of inputs provided (${e.length}) does not match the number of inputs of this model (${this.inputs.length}).`);for(let l=0;l<this.inputs.length;++l)i.add(this.inputs[l],e[l])}else for(const l of this.inputs){const c=e[l.name];if(c==null)throw new B(`No value is provided for the model's input ${l.name}`);i.add(l,c)}const a=fa(o,i);return s?a:a[0]}retrieveSymbolicTensors(e){const t=_r(null,e.length);let s=e.length;for(const r of this.layers){const o=Array.isArray(r.output)?r.output:[r.output],i=o.map(a=>a.name);for(let a=0;a<e.length;++a){const l=i.indexOf(e[a]);if(l!==-1&&(t[a]=o[l],s--),s===0)break}if(s===0)break}if(s>0){const r=[];throw t.forEach((o,i)=>{o==null&&r.push(e[i])}),new B(`Cannot find SymbolicTensors for output name(s): ${JSON.stringify(r)}`)}return t}predictLoop(e,t=32,s=!1){return Y(()=>{const r=this.checkNumSamples(e);if(s)throw new Me("Verbose predictLoop() is not implemented yet.");const o=Sp(r,t),i=this.outputs.map(a=>[]);for(let a=0;a<o.length;++a)Y(()=>{const c=o[a][0],u=o[a][1],h=ba(e,c,u),d=[];if(Array.isArray(h))for(let g=0;g<h.length;++g)d.push({key:this.inputs[g],value:h[g]});else d.push({key:this.inputs[0],value:h});const f=new sr(d);return fa(this.outputs,f)}).forEach((c,u)=>i[u].push(c));return bn(i.map(a=>gn(a,0)))})}predict(e,t={}){const s=Nb(e);Rb(s,this.inputNames,this.feedInputShapes,!1);try{const r=t.batchSize==null?32:t.batchSize;return $p(r),this.predictLoop(s,r)}finally{ns(s,e)}}predictOnBatch(e){Rb(e,this.inputNames,this.feedInputShapes,!0);const t=(Array.isArray(e)?e[0]:e).shape[0];return this.predictLoop(e,t)}standardizeUserDataXY(e,t,s=!0,r){if(this.optimizer_==null)throw new Bn("You must compile a model before training/testing. Use LayersModel.compile(modelCompileArgs).");const o=[];for(let i=0;i<this.feedOutputShapes.length;++i){const a=this.feedOutputShapes[i];this.feedLossFns[i]===Lc?o.push(a.slice(0,a.length-1).concat([1])):o.push(a)}if(e=Eb(e,this.feedInputNames,this.feedInputShapes,!1,"input"),t=Eb(t,this.feedOutputNames,o,!1,"target"),tD(e,t),nD(t,this.feedLossFns,this.feedOutputShapes),this.stateful&&r!=null&&r>0&&e[0].shape[0]%r!==0)throw new B(`In a stateful network, you should only pass inputs with a number of samples that is divisible by the batch size ${r}. Found: ${e[0].shape[0]} sample(s).`);return[e,t]}async standardizeUserData(e,t,s,r,o=!0,i){const[a,l]=this.standardizeUserDataXY(e,t,o,i);if(s!=null)throw new Error("sample weight is not supported yet.");let c=null;if(r!=null){const u=Cb(r,this.outputNames);c=[];for(let h=0;h<u.length;++h)c.push(await kb(l[h],null,u[h]))}return[a,l,c]}testLoop(e,t,s,r=0,o){return Y(()=>{const i=this.checkNumSamples(t,s,o,"steps"),a=[];if(r>0)throw new Me("Verbose mode is not implemented yet.");if(o!=null)throw new Me("steps mode in testLoop() is not implemented yet");{const l=Sp(i,s),c=kn(Jn(0,i));for(let u=0;u<l.length;++u){const h=l[u][0],d=l[u][1],f=Lr(c,h,d-h),g=Ip(t,f),x=e(g);if(u===0)for(let b=0;b<x.length;++b)a.push(et(0));for(let b=0;b<x.length;++b){const y=x[b];a[b]=ue(a[b],V(d-h,y))}}for(let u=0;u<a.length;++u)a[u]=Ne(a[u],i)}return a})}getDedupedMetricsNames(){const e=this.metricsNames,t=[];for(let s=0;s<e.length;++s){const r=e[s];let o=r;if(_x(e,r)>1){const i=_x(e.slice(0,s),r);o+=`_${i}`}t.push(o)}return t}makeTrainFunction(){return e=>{const t=[],s=e.slice(0,this.inputs.length),r=e.slice(this.inputs.length,this.inputs.length+this.outputs.length),o=e.slice(this.inputs.length+this.outputs.length,this.inputs.length+this.outputs.length*2),i=[],a=()=>{const h=[];for(let x=0;x<this.inputs.length;++x)h.push({key:this.inputs[x],value:s[x]});const d=new sr(h),f=fa(this.outputs,d,{training:!0});let g;for(let x=0;x<this.lossFunctions.length;++x){const b=this.lossFunctions[x];let y=b(r[x],f[x]);o[x]!=null&&(y=KR(y,o[x]));const w=_t(y);t.push(w),x===0?g=y:g=ue(g,y)}for(let x=0;x<this.metricsTensors.length;++x){let b;if(this.outputs.length>1&&x<this.outputs.length)b=t[x];else{const y=this.metricsTensors[x][0],w=this.metricsTensors[x][1];b=_t(y(r[w],f[w]))}cs(b),i.push(b)}return g=_t(g),this.calculateLosses().forEach(x=>{g=ue(g,x)}),g},l=this.collectedTrainableWeights.map(h=>h.read());return[this.optimizer_.minimize(a,!0,l)].concat(i)}}makeTestFunction(){this.testFunction=e=>Y(()=>{const t=[];let s;const r=e.slice(0,this.inputs.length),o=e.slice(this.inputs.length,this.inputs.length+this.outputs.length),i=[];for(let c=0;c<this.inputs.length;++c)i.push({key:this.inputs[c],value:r[c]});const a=new sr(i),l=fa(this.outputs,a);for(let c=0;c<this.lossFunctions.length;++c){const u=this.lossFunctions[c],h=_t(u(o[c],l[c]));c===0?s=h:s=ue(s,h),t.push(s)}for(let c=0;c<this.metricsTensors.length;++c){const u=this.metricsTensors[c][0],h=this.metricsTensors[c][1],d=_t(u(o[h],l[h]));t.push(d)}return t})}async fit(e,t,s={}){if(this.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");this.isTraining=!0;let r,o,i,a,l,c,u,h,d;try{const f=s.batchSize==null?32:s.batchSize;$p(f);const x=await this.standardizeUserData(e,t,s.sampleWeight,s.classWeight,!1,f);r=x[0],o=x[1],d=x[2];let b=!1,y;if(s.validationData!=null&&s.validationData.length>0){if(b=!0,s.validationData.length===2)l=s.validationData[0],c=s.validationData[1];else throw s.validationData.length===3?new Me("validationData including sample weights is not supported yet."):new B(`When passing validation data, it must contain 2 (valX, valY) or 3 (valX, valY, valSampleWeight) items; ${s.validationData} is invalid.`);const D=await this.standardizeUserData(l,c,null,null,!0,f);u=D[0],h=D[1],y=u.concat(h)}else if(s.validationSplit!=null&&s.validationSplit>0&&s.validationSplit<1){b=!0;const A=Math.floor(r[0].shape[0]*(1-s.validationSplit)),D=r[0].shape[0];u=ba(r,A,D),i=r,r=ba(r,0,A),h=ba(o,A,D),a=o,o=ba(o,0,A),y=u.concat(h)}else s.validationSteps!=null&&(b=!0);const w=r.concat(o).concat(d);this.checkTrainableWeightsConsistency();const $=this.makeTrainFunction(),C=this.getDedupedMetricsNames();let N,E;b?(this.makeTestFunction(),N=this.testFunction,E=C.slice().concat(C.map(A=>"val_"+A))):(N=null,y=[],E=C.slice());const F=hb(s.callbacks,s.yieldEvery);return await this.fitLoop($,w,C,f,s.epochs,s.verbose,F,N,y,s.shuffle,E,s.initialEpoch,null,null)}finally{this.isTraining=!1,ns(r,e),ns(o,t),ns(i,e),ns(a,t),ns(u,l),ns(h,c),d!=null&&Ue(d)}}async fitLoop(e,t,s,r,o,i,a,l,c,u,h,d,f,g){r==null&&(r=32),o==null&&(o=1),u==null&&(u=!0),d==null&&(d=0);let x=!1;if(l!=null&&c!=null&&(x=!0),g!=null&&(x=!0,f==null))throw new B("Can only use `validationSteps` when doing step-wise training, i.e., `stepsPerEpoch` must be set.");const b=this.checkNumSamples(t,r,f,"steps_per_epoch");let y;b!=null&&(y=Jn(0,b)),i==null&&(i=1);const{callbackList:w,history:$}=db(a,i,o,d,b,f,r,x,h);w.setModel(this),this.history=$,await w.onTrainBegin(),this.stopTraining_=!1;for(let C=d;C<o;++C){await w.onEpochBegin(C);const N={};if(f!=null)throw new Me("stepsPerEpoch mode is not implemented yet.");{if(u==="batch")throw new Me("batch shuffling is not implemneted yet");u&&Kv(y);const E=kn(y),F=Sp(b,r);for(let O=0;O<F.length;++O){const A={};if(await w.onBatchBegin(O,A),Y(()=>{const D=F[O][0],S=F[O][1],z=Lr(E,D,S-D);A.batch=O,A.size=S-D;const U=Ip(t,z),G=e(U);for(let K=0;K<s.length;++K){const X=s[K],Q=G[K];A[X]=Q,cs(Q)}if(O===F.length-1&&x){const K=this.testLoop(l,c,r);for(let X=0;X<s.length;++X){const Q=s[X],Z=K[X];cs(Z),N["val_"+Q]=Z}}}),await w.onBatchEnd(O,A),cb(A),this.stopTraining_)break}E.dispose()}if(await w.onEpochEnd(C,N),this.stopTraining_)break}return await w.onTrainEnd(),await this.history.syncData(),this.history}async fitDataset(e,t){return YR(this,e,t)}async trainOnBatch(e,t){const s=await this.standardizeUserData(e,t),r=s[0],o=s[1],a=this.makeTrainFunction()(r.concat(o)),l=[];for(const c of a){const u=await c.data();l.push(u[0])}return Ue(a),ns(s[0],e),ns(s[1],t),bn(l)}getNamedWeights(e){const t=[],s=e!=null&&e.trainableOnly,r=s?this.trainableWeights:this.weights,o=this.getWeights(s);for(let i=0;i<r.length;++i)s&&!r[i].trainable||t.push({name:r[i].originalName,tensor:o[i]});return t}set stopTraining(e){this.stopTraining_=e}get stopTraining(){return this.stopTraining_}get optimizer(){return this.optimizer_}set optimizer(e){this.optimizer_!==e&&(this.optimizer_=e,this.isOptimizerOwned=!1)}dispose(){const e=super.dispose();if(e.refCountAfterDispose===0&&this.optimizer!=null&&this.isOptimizerOwned){const t=Mm().numTensors;this.optimizer_.dispose(),e.numDisposedVariables+=t-Mm().numTensors}return e}getLossIdentifiers(){let e;if(typeof this.loss=="string")e=Ms(this.loss);else if(Array.isArray(this.loss)){for(const t of this.loss)if(typeof t!="string")throw new Error("Serialization of non-string loss is not supported.");e=this.loss.map(t=>Ms(t))}else{const t=Object.keys(this.loss);e={};const s=this.loss;for(const r of t)if(typeof s[r]=="string")e[r]=Ms(s[r]);else throw new Error("Serialization of non-string loss is not supported.")}return e}getMetricIdentifiers(){if(typeof this.metrics=="string"||typeof this.metrics=="function")return[Ms(Vc(this.metrics))];if(Array.isArray(this.metrics))return this.metrics.map(e=>Ms(Vc(e)));{const e={};for(const t in this.metrics)e[t]=Ms(Vc(this.metrics[t]));return e}}getTrainingConfig(){return{loss:this.getLossIdentifiers(),metrics:this.getMetricIdentifiers(),optimizer_config:{class_name:this.optimizer.getClassName(),config:this.optimizer.getConfig()}}}loadTrainingConfig(e){if(e.weighted_metrics!=null)throw new Error("Loading weight_metrics is not supported yet.");if(e.loss_weights!=null)throw new Error("Loading loss_weights is not supported yet.");if(e.sample_weight_mode!=null)throw new Error("Loading sample_weight_mode is not supported yet.");const t=Cp(e.optimizer_config),s=zs(t);let r;if(typeof e.loss=="string")r=Fr(e.loss);else if(Array.isArray(e.loss))r=e.loss.map(i=>Fr(i));else if(e.loss!=null){r={};for(const i in e.loss)r[i]=Fr(e.loss[i])}let o;if(Array.isArray(e.metrics))o=e.metrics.map(i=>Fr(i));else if(e.metrics!=null){o={};for(const i in e.metrics)o[i]=Fr(e.metrics[i])}this.compile({loss:r,metrics:o,optimizer:s})}async save(e,t){if(typeof e=="string"){const c=UC(e);if(c.length===0)throw new B(`Cannot find any save handlers for URL '${e}'`);if(c.length>1)throw new B(`Found more than one (${c.length}) save handlers for URL '${e}'`);e=c[0]}if(e.save==null)throw new B("LayersModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");const s=await Vm(this.getNamedWeights(t)),a={modelTopology:this.toJSON(null,!1),format:rD,generatedBy:`TensorFlow.js tfjs-layers v${vb}`,convertedBy:null};if((t==null?!1:t.includeOptimizer)&&this.optimizer!=null){a.trainingConfig=this.getTrainingConfig();const c="optimizer",{data:u,specs:h}=await Vm(await this.optimizer.getWeights(),c);s.specs.push(...h),s.data=WC([s.data,u])}return this.userDefinedMetadata!=null&&(yb(this.userDefinedMetadata,this.name,!0),a.userDefinedMetadata=this.userDefinedMetadata),a.weightData=s.data,a.weightSpecs=s.specs,e.save(a)}setUserDefinedMetadata(e){yb(e,this.name),this.userDefinedMetadata=e}getUserDefinedMetadata(){return this.userDefinedMetadata}}To.className="Model",ce(To);class Db extends To{}Db.className="Functional",ce(Db);class ya extends To{constructor(e){if(super({inputs:[],outputs:[]}),e=e||{},this.trainable=!0,this.built=!1,this.name=e.name!=null?e.name:Nc("sequential_"),e.layers!=null)for(const t of e.layers)this.add(t)}checkShape(e){if(e.inboundNodes[0].outputTensors[0].shape.some(s=>s<0))throw new B(`Negative dimension size caused by adding layer ${e.name} with input shape [${e.inboundNodes[0].inputTensors[0].shape}]`)}add(e){const t=e instanceof ya||e instanceof To;let s;if(t){if(s=e,s.outputs.length!==1)throw new B("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");if(s.inputs.length!==1)throw new B("All layers in a Sequential model should have a single input tensor. For multi-input layers, use the functional API.")}if(this.outputs.length===0){if(e.inboundNodes.length===0){if(e.batchInputShape==null)throw new B("The first layer in a Sequential model must get an `inputShape` or `batchInputShape` argument.");const r=aR({batchShape:e.batchInputShape,dtype:e.dtype,name:e.name+"_input"});e.apply(r)}if(t)this.outputs=s.outputs,this.inputs=s.inputs;else{if(e.inboundNodes.length!==1)throw new B(`A layer added to a Sequential model must not already be connected somewhere else. LayersModel received layer ${e.name} which has ${e.inboundNodes.length} pre-existing inbound connections.`);if(e.inboundNodes[0].outputTensors.length!==1)throw new B("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(e),this.outputs=[e.inboundNodes[0].outputTensors[0]],this.inputs=tb(this.outputs[0])}this.inboundNodes=[],new Ac({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:_r(null,this.inputs.length),outputMasks:[null],inputShapes:this.inputs.map(r=>r.shape),outputShapes:this.outputs[0].shape})}else{const r=e.apply(this.outputs[0]);if(Array.isArray(r))throw new TypeError("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(e),this.outputs=[r],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}this.layers.push(e),this.built=!1}pop(){if(this.layers.length===0)throw new TypeError("There are no layers in the model.");if(this.layers.pop(),this.layers.length===0)this.outputs=[],this.inboundNodes=[],this.outboundNodes=[];else{const e=this.layers.length-1;this.layers[e].outboundNodes=[],this.outputs=[this.layers[e].output],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}}call(e,t){return this.model==null&&this.build(),this.model.call(e,t)}build(e){if(Xe(e),this.inputs.length===0||this.outputs.length===0)throw new TypeError("Sequential model cannot be built: model is empty. Add some layers first.");this.model=new To({inputs:this.inputs,outputs:this.outputs[0],name:this.name+"_model"}),this.model.trainable=this.trainable,this.supportsMasking=this.model.supportsMasking,this.inputLayers=this.model.inputLayers,this.inputLayersNodeIndices=this.model.inputLayersNodeIndices,this.inputLayersTensorIndices=this.model.inputLayersTensorIndices,this.outputLayers=this.model.outputLayers,this.outputLayersNodeIndices=this.model.outputLayersNodeIndices,this.outputLayersTensorIndices=this.model.outputLayersTensorIndices,this.nodesByDepth=this.model.nodesByDepth,this.containerNodes=this.model.containerNodes,this.outputNames=this.model.outputNames,this.inputNames=this.model.inputNames,this.built=!0}countParams(){return this.built||this.build(),super.countParams()}summary(e,t,s=console.log){this.built||this.build(),super.summary(e,t,s)}setWeights(e){this.model==null&&this.build(),this.model.setWeights(e)}evaluate(e,t,s={}){if(!this.built)throw new Bn("The model needs to be compiled before being used.");return this.model.evaluate(e,t,s)}async evaluateDataset(e,t){if(!this.built)throw new Bn("The model needs to be compiled before being used.");return this.model.evaluateDataset(e,t)}predict(e,t={}){return this.model==null&&this.build(),this.model.predict(e,t)}predictOnBatch(e){return this.model==null&&this.build(),this.model.predictOnBatch(e)}compile(e){this.build(),this.model.compile(e),this.optimizer_=this.model.optimizer,this.isOptimizerOwned=this.model.isOptimizerOwned,this.loss=this.model.loss,this.metrics=this.model.metrics,this.metricsTensors=this.model.metricsTensors,this.metricsNames=this.model.metricsNames}get optimizer(){return this.model==null?void 0:this.model.optimizer}set optimizer(e){this.model.optimizer=e}async fit(e,t,s={}){if(!this.built)throw new Bn("The model needs to be compiled before being used.");return this.model.fit(e,t,s)}async fitDataset(e,t){if(!this.built)throw new Bn("The model needs to be compiled before being used.");return this.model.fitDataset(e,t)}async trainOnBatch(e,t){return this.model.trainOnBatch(e,t)}static fromConfig(e,t,s={},r=!1){let o,i={};if(t instanceof Array){if(t[0].className==null||t[0].className==="Merge")throw new B("Legacy serialization format not supported yet.");o=t}else _(t.layers!=null,()=>"When the config data for a Sequential model is not an Array, it must be an Object that contains the 'layers' field."),o=t.layers,delete t.layers,i=t;const a=new e(i);if(!(a instanceof ya))throw new Me(`Sequential.fromConfig called on non-Sequential input: ${a}`);for(const l of o){const u=zs(l,void 0,r);r&&u.setFastWeightInitDuringBuild(!0),a.add(u)}return a}set stopTraining(e){if(this.model==null)throw new B("Cannot set the stopTraining property of a sequential model before it is compiled.");this.model.stopTraining=e}get stopTraining(){if(this.model==null)throw new B("Cannot get the stopTraining property of a sequential model before it is compiled.");return this.model.stopTraining}getConfig(){const e=[];for(const t of this.layers){const s={};s.className=t.getClassName(),s.config=t.getConfig(),e.push(s)}return{name:this.name,layers:e}}}ya.className="Sequential",ce(ya);let tn=class extends $o{getConfig(){return{}}};class Ab extends tn{apply(e,t=1){return HE(e,t)}}Ab.className="elu",ce(Ab);class _b extends tn{apply(e){return Sg(e)}}_b.className="selu",ce(_b);class Fb extends tn{apply(e){return Er(e)}}Fb.className="relu",ce(Fb);class Ob extends tn{apply(e){return Y(()=>ea(6,Er(e)))}}Ob.className="relu6",ce(Ob);class Pb extends tn{apply(e){return e}}Pb.className="linear",ce(Pb);class Lb extends tn{apply(e){return yo(e)}}Lb.className="sigmoid",ce(Lb);class Mb extends tn{apply(e){return KE(e)}}Mb.className="hardSigmoid",ce(Mb);class zb extends tn{apply(e){return Qi(e)}}zb.className="softplus",ce(zb);class Bb extends tn{apply(e){return jE(e)}}Bb.className="softsign",ce(Bb);class Vb extends tn{apply(e){return rc(e)}}Vb.className="tanh",ce(Vb);let Tp=class extends tn{apply(e,t=-1){return gd(e,t)}};Tp.className="softmax",ce(Tp);class Wb extends tn{apply(e,t=-1){return ug(e,t)}}Wb.className="logSoftmax",ce(Wb);class Ub extends tn{apply(e){return Y(()=>Y(()=>{const t=Math.sqrt(2),s=V(.5,ue(1,og(Ne(e,t))));return V(e,s)}))}}Ub.className="gelu",ce(Ub);class Gb extends tn{apply(e){return Y(()=>V(.5,V(e,ue(1,rc(V(en(Ne(2,Math.PI)),ue(e,V(.044715,Nr(e,3)))))))))}}Gb.className="gelu_new",ce(Gb);class Hb extends tn{apply(e){return Y(()=>V(e,rc(Qi(e))))}}Hb.className="mish",ce(Hb);class jb extends tn{apply(e,t=1){return Y(()=>V(yo(V(e,t)),e))}}jb.className="swish",ce(jb);function rr(n){return n.getClassName()}function Ep(n,e={}){return la(n,zn.getMap().classNameMap,e,"activation")}function or(n){if(n==null){const e={};return e.className="linear",e.config={},Ep(e)}if(typeof n=="string"){const e={};return e.className=n,e.config={},Ep(e)}else return n instanceof tn?n:Ep(n)}function oD(n){if(n!=null&&typeof n!="object")throw new Error(`Argument to L1L2 regularizer's constructor is expected to be an object, but received: ${n}`)}class Kb extends $o{}class qb extends Kb{constructor(e){super(),oD(e),this.l1=e==null||e.l1==null?.01:e.l1,this.l2=e==null||e.l2==null?.01:e.l2,this.hasL1=this.l1!==0,this.hasL2=this.l2!==0}apply(e){return Y(()=>{let t=Gt([1]);return this.hasL1&&(t=ue(t,Se(V(this.l1,on(e))))),this.hasL2&&(t=ue(t,Se(V(this.l2,ha(e))))),H(t,[])})}getConfig(){return{l1:this.l1,l2:this.l2}}static fromConfig(e,t){return new e({l1:t.l1,l2:t.l2})}}qb.className="L1L2",ce(qb);const Xb={l1l2:"L1L2"};function ct(n){return Qd(n)}function Yb(n,e={}){return la(n,zn.getMap().classNameMap,e,"regularizer")}function yt(n){if(n==null)return null;if(typeof n=="string"){const t={className:n in Xb?Xb[n]:n,config:{}};return Yb(t)}else return n instanceof Kb?n:Yb(n)}class Zb extends We{constructor(e){super(e??{}),this.supportsMasking=!0,e!=null&&(this.maxValue=e.maxValue)}call(e,t){e=De(e);let s=Er(e);return this.maxValue!=null&&(s=Dn(s,0,this.maxValue)),s}computeOutputShape(e){return e}getConfig(){const e={maxValue:this.maxValue},t=super.getConfig();return Object.assign(e,t),e}}Zb.className="ReLU",ce(Zb);class Jb extends We{constructor(e){super(e??{}),this.DEFAULT_ALPHA=.3,e==null&&(e={}),this.alpha=e.alpha==null?this.DEFAULT_ALPHA:e.alpha}call(e,t){const s=De(e);return od(s,this.alpha)}computeOutputShape(e){return e}getConfig(){const e={alpha:this.alpha},t=super.getConfig();return Object.assign(e,t),e}}Jb.className="LeakyReLU",ce(Jb);class Qb extends We{constructor(e){if(super(e??{}),this.DEFAULT_ALPHA_INITIALIZER="zeros",e==null&&(e={}),this.supportsMasking=!0,this.alphaInitializer=bt(e.alphaInitializer||this.DEFAULT_ALPHA_INITIALIZER),this.alphaRegularizer=yt(e.alphaRegularizer),this.alphaConstraint=zt(e.alphaConstraint),e.sharedAxes==null)this.sharedAxes=null;else if(Array.isArray(e.sharedAxes))this.sharedAxes=e.sharedAxes;else if(typeof e.sharedAxes=="number")this.sharedAxes=[e.sharedAxes];else throw new B(`Expected sharedAxes to be a number or an array of numbers, but got ${e.sharedAxes}`)}build(e){e=Xe(e);const t=e.slice(1);if(this.sharedAxes!=null)for(const r of this.sharedAxes)t[r-1]=1;this.alpha=this.addWeight("alpha",t,"float32",this.alphaInitializer,this.alphaRegularizer,!0,this.alphaConstraint);const s={};if(this.sharedAxes!=null)for(let r=1;r<e.length;++r)s[r]=e[r];this.inputSpec=[new Lt({ndim:e.length,axes:s})],this.built=!0}call(e,t){return e=De(e),hd(e,this.alpha.read())}getConfig(){const e={alphaInitializer:vt(this.alphaInitializer),alphaRegularizer:ct(this.alphaRegularizer),alphaConstraint:Mt(this.alphaConstraint),sharedAxes:this.sharedAxes},t=super.getConfig();return Object.assign(e,t),e}}Qb.className="PReLU",ce(Qb);let e0=class extends We{constructor(e){if(super(e??{}),this.DEFAULT_ALPHA=1,e==null&&(e={}),e.alpha!=null&&e.alpha!==this.DEFAULT_ALPHA)throw new Me(`Non-default alpha value (${e.alpha}) is not supported by the ELU layer yet.`);this.alpha=e.alpha==null?this.DEFAULT_ALPHA:e.alpha}call(e,t){const s=De(e);return ac(s)}computeOutputShape(e){return e}getConfig(){const e={alpha:this.alpha},t=super.getConfig();return Object.assign(e,t),e}};e0.className="ELU",ce(e0);class t0 extends We{constructor(e){super(e??{}),this.DEFAULT_THETA=1,e==null&&(e={}),this.theta=e.theta==null?this.DEFAULT_THETA:e.theta}call(e,t){const s=De(e);return V(s,be(An(s,this.theta),"float32"))}computeOutputShape(e){return e}getConfig(){const e={theta:this.theta},t=super.getConfig();return Object.assign(e,t),e}}t0.className="ThresholdedReLU",ce(t0);class n0 extends We{constructor(e){super(e??{}),this.DEFAULT_AXIS=1,e==null&&(e={}),this.softmax=new Tp().apply,this.axis=e.axis==null?this.DEFAULT_AXIS:e.axis}call(e,t){return Y(()=>{let s=De(e);const r=t.mask;if(r!=null){const o=V(Re(Js(s.shape),be(r,s.dtype)),et(-1e9));s=ue(s,o)}return this.axis instanceof Array?this.axis.length>1?ds(Re(s,hg(s,this.axis,!0))):this.softmax(s,this.axis[0]):this.softmax(s,this.axis)})}computeOutputShape(e){return e}getConfig(){const e={axis:this.axis},t=super.getConfig();return Object.assign(e,t),e}}n0.className="Softmax",ce(n0);function Eo(n,e,t){if(typeof n=="number")return _r(n,e);if(n.length!==e)throw new B(`The ${t} argument must be an integer or tuple of ${e} integers. Received: ${n.length} elements.`);for(let s=0;s<e;++s){const r=n[s];if(!VE(r))throw new B(`The ${t} argument must be an integer or tuple of ${e} integers. Received: ${JSON.stringify(n)} including a non-integer number ${r}`)}return n}function ss(n,e,t,s,r=1){if(n==null)return n;const o=e+(e-1)*(r-1);let i;return t==="same"?i=n:i=n-o+1,Math.floor((i+s-1)/s)}function ws(n,e,t,s){if(n==null)return null;if(s==="valid")n=n*e+nr([t-e,0]);else if(s==="same")n=n*e;else throw new B(`Unsupport padding mode: ${s}.`);return n}function Rp(n,e){return Y(()=>(Et(e),e==="channelsFirst"?Ke(n,[0,2,3,1]):n))}function s0(n,e){return Y(()=>(Et(e),e==="channelsFirst"?Ke(n,[0,2,3,4,1]):n))}function iD(n,e,t,s=1,r="valid",o,i=1){return Y(()=>{if(o==null&&(o=Qn()),Et(o),n.shape.length!==3)throw new B(`The input of a conv1dWithBias operation should be 3, but is ${n.shape.length} instead.`);if(e.shape.length!==3)throw new B(`The kernel for a conv1dWithBias operation should be 3, but is ${e.shape.length} instead`);if(t!=null&&t.shape.length!==1)throw new B(`The bias for a conv1dWithBias operation should be 1, but is ${t.shape.length} instead`);if(o==="channelsFirst"&&(n=Ke(n,[0,2,1])),r==="causal")throw new Me("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");let a=Qm(n,e,s,r==="same"?"same":"valid","NWC",i);return t!=null&&(a=es(a,t)),a})}function r0(n,e,t,s=[1,1],r="valid",o,i,a=null){return Y(()=>{if(o==null&&(o=Qn()),Et(o),n.rank!==3&&n.rank!==4)throw new B(`conv2dWithBiasActivation expects input to be of rank 3 or 4, but received ${n.rank}.`);if(e.rank!==3&&e.rank!==4)throw new B(`conv2dWithBiasActivation expects kernel to be of rank 3 or 4, but received ${n.rank}.`);let l=Rp(n,o);if(r==="causal")throw new Me("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");return l=b2({x:l,filter:e,strides:s,pad:r==="same"?"same":"valid",dilations:i,dataFormat:"NHWC",bias:t,activation:a}),o==="channelsFirst"&&(l=Ke(l,[0,3,1,2])),l})}function aD(n,e,t,s=[1,1,1],r="valid",o,i){return Y(()=>{if(o==null&&(o=Qn()),Et(o),n.rank!==4&&n.rank!==5)throw new B(`conv3dWithBias expects input to be of rank 4 or 5, but received ${n.rank}.`);if(e.rank!==4&&e.rank!==5)throw new B(`conv3dWithBias expects kernel to be of rank 4 or 5, but received ${n.rank}.`);let a=s0(n,o);if(r==="causal")throw new Me("The support for CAUSAL padding mode in conv3dWithBias is not implemented yet.");return a=b$(a,e,s,r==="same"?"same":"valid","NDHWC",i),t!=null&&(a=es(a,t)),o==="channelsFirst"&&(a=Ke(a,[0,4,1,2,3])),a})}class Uc extends We{constructor(e,t){if(super(t),this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",Uc.verifyArgs(t),this.rank=e,Ht(this.rank,"rank"),this.rank!==1&&this.rank!==2&&this.rank!==3)throw new Me(`Convolution layer for rank other than 1, 2, or 3 (${this.rank}) is not implemented yet.`);if(this.kernelSize=Eo(t.kernelSize,e,"kernelSize"),this.strides=Eo(t.strides==null?1:t.strides,e,"strides"),this.padding=t.padding==null?"valid":t.padding,Fn(this.padding),this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,Et(this.dataFormat),this.activation=or(t.activation),this.useBias=t.useBias==null?!0:t.useBias,this.biasInitializer=bt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.biasConstraint=zt(t.biasConstraint),this.biasRegularizer=yt(t.biasRegularizer),this.activityRegularizer=yt(t.activityRegularizer),this.dilationRate=Eo(t.dilationRate==null?1:t.dilationRate,e,"dilationRate"),this.rank===1&&Array.isArray(this.dilationRate)&&this.dilationRate.length!==1)throw new B(`dilationRate must be a number or an array of a single number for 1D convolution, but received ${JSON.stringify(this.dilationRate)}`);if(this.rank===2){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==2)throw new B(`dilationRate must be a number or array of two numbers for 2D convolution, but received ${JSON.stringify(this.dilationRate)}`)}else if(this.rank===3){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==3)throw new B(`dilationRate must be a number or array of three numbers for 3D convolution, but received ${JSON.stringify(this.dilationRate)}`)}}static verifyArgs(e){if(gs("kernelSize"in e,"required key 'kernelSize' not in config"),typeof e.kernelSize!="number"&&!tp(e.kernelSize,"number",1,3))throw new B(`BaseConv expects config.kernelSize to be number or number[] with length 1, 2, or 3, but received ${JSON.stringify(e.kernelSize)}.`)}getConfig(){const e={kernelSize:this.kernelSize,strides:this.strides,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,activation:rr(this.activation),useBias:this.useBias,biasInitializer:vt(this.biasInitializer),biasRegularizer:ct(this.biasRegularizer),activityRegularizer:ct(this.activityRegularizer),biasConstraint:Mt(this.biasConstraint)},t=super.getConfig();return Object.assign(e,t),e}}class Ro extends Uc{constructor(e,t){super(e,t),this.kernel=null,Ro.verifyArgs(t),this.filters=t.filters,Ht(this.filters,"filters"),this.kernelInitializer=bt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.kernelConstraint=zt(t.kernelConstraint),this.kernelRegularizer=yt(t.kernelRegularizer)}build(e){e=Xe(e);const t=this.dataFormat==="channelsFirst"?1:e.length-1;if(e[t]==null)throw new B(`The channel dimension of the input should be defined. Found ${e[t]}`);const s=e[t],r=this.kernelSize.concat([s,this.filters]);this.kernel=this.addWeight("kernel",r,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[{ndim:this.rank+2,axes:{[t]:s}}],this.built=!0}call(e,t){return Y(()=>{e=De(e);let s;const r=this.bias==null?null:this.bias.read(),o=Ox(this.activation.getClassName());if(o!=null&&this.rank===2)s=r0(e,this.kernel.read(),r,this.strides,this.padding,this.dataFormat,this.dilationRate,o);else{if(this.rank===1)s=iD(e,this.kernel.read(),r,this.strides[0],this.padding,this.dataFormat,this.dilationRate[0]);else if(this.rank===2)s=r0(e,this.kernel.read(),r,this.strides,this.padding,this.dataFormat,this.dilationRate);else if(this.rank===3)s=aD(e,this.kernel.read(),r,this.strides,this.padding,this.dataFormat,this.dilationRate);else throw new Me("convolutions greater than 3D are not implemented yet.");this.activation!=null&&(s=this.activation.apply(s))}return s})}computeOutputShape(e){e=Xe(e);const t=[],s=this.dataFormat==="channelsLast"?e.slice(1,e.length-1):e.slice(2);for(let o=0;o<s.length;++o){const i=ss(s[o],this.kernelSize[o],this.padding,this.strides[o],typeof this.dilationRate=="number"?this.dilationRate:this.dilationRate[o]);t.push(i)}let r=[e[0]];return this.dataFormat==="channelsLast"?(r=r.concat(t),r.push(this.filters)):(r.push(this.filters),r=r.concat(t)),r}getConfig(){const e={filters:this.filters,kernelInitializer:vt(this.kernelInitializer),kernelRegularizer:ct(this.kernelRegularizer),kernelConstraint:Mt(this.kernelConstraint)},t=super.getConfig();return Object.assign(e,t),e}static verifyArgs(e){if(!("filters"in e)||typeof e.filters!="number"||e.filters<1)throw new B(`Convolution layer expected config.filters to be a 'number' > 0 but got ${JSON.stringify(e.filters)}`)}}class wa extends Ro{constructor(e){super(2,e),wa.verifyArgs(e)}getConfig(){const e=super.getConfig();return delete e.rank,e}static verifyArgs(e){if(typeof e.kernelSize!="number"&&!tp(e.kernelSize,"number",1,2))throw new B(`Conv2D expects config.kernelSize to be number or number[] with length 1 or 2, but received ${JSON.stringify(e.kernelSize)}.`)}}wa.className="Conv2D",ce(wa);class va extends Ro{constructor(e){super(3,e),va.verifyArgs(e)}getConfig(){const e=super.getConfig();return delete e.rank,e}static verifyArgs(e){if(typeof e.kernelSize!="number"&&!(Array.isArray(e.kernelSize)&&(e.kernelSize.length===1||e.kernelSize.length===3)))throw new B(`Conv3D expects config.kernelSize to be number or [number, number, number], but received ${JSON.stringify(e.kernelSize)}.`)}}va.className="Conv3D",ce(va);class o0 extends wa{constructor(e){if(super(e),this.inputSpec=[new Lt({ndim:4})],this.padding!=="same"&&this.padding!=="valid")throw new B(`Conv2DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(e){if(e=Xe(e),e.length!==4)throw new B("Input should have rank 4; Received input shape: "+JSON.stringify(e));const t=this.dataFormat==="channelsFirst"?1:e.length-1;if(e[t]==null)throw new B("The channel dimension of the inputs should be defined. Found `None`.");const s=e[t],r=this.kernelSize.concat([this.filters,s]);this.kernel=this.addWeight("kernel",r,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new Lt({ndim:4,axes:{[t]:s}})],this.built=!0}call(e,t){return Y(()=>{let s=De(e);if(s.shape.length!==4)throw new B(`Conv2DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${s.shape.length}`);const r=s.shape,o=r[0];let i,a;this.dataFormat==="channelsFirst"?(i=2,a=3):(i=1,a=2);const l=r[i],c=r[a],u=this.kernelSize[0],h=this.kernelSize[1],d=this.strides[0],f=this.strides[1],g=ws(l,d,u,this.padding),x=ws(c,f,h,this.padding),b=[o,g,x,this.filters];this.dataFormat!=="channelsLast"&&(s=Ke(s,[0,2,3,1]));let y=eg(s,this.kernel.read(),b,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&(y=Ke(y,[0,3,1,2])),this.bias!=null&&(y=es(y,this.bias.read(),this.dataFormat)),this.activation!=null&&(y=this.activation.apply(y)),y})}computeOutputShape(e){e=Xe(e);const t=e.slice();let s,r,o;this.dataFormat==="channelsFirst"?(s=1,r=2,o=3):(s=3,r=1,o=2);const i=this.kernelSize[0],a=this.kernelSize[1],l=this.strides[0],c=this.strides[1];return t[s]=this.filters,t[r]=ws(t[r],l,i,this.padding),t[o]=ws(t[o],c,a,this.padding),t}getConfig(){const e=super.getConfig();return delete e.dilationRate,e}}o0.className="Conv2DTranspose",ce(o0);class i0 extends va{constructor(e){if(super(e),this.inputSpec=[new Lt({ndim:5})],this.padding!=="same"&&this.padding!=="valid")throw new B(`Conv3DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(e){if(e=Xe(e),e.length!==5)throw new B("Input should have rank 5; Received input shape: "+JSON.stringify(e));const t=this.dataFormat==="channelsFirst"?1:e.length-1;if(e[t]==null)throw new B("The channel dimension of the inputs should be defined. Found `None`.");const s=e[t],r=this.kernelSize.concat([this.filters,s]);this.kernel=this.addWeight("kernel",r,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new Lt({ndim:5,axes:{[t]:s}})],this.built=!0}call(e,t){return Y(()=>{let s=De(e);if(s.shape.length!==5)throw new B(`Conv3DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${s.shape.length}`);const r=s.shape,o=r[0];let i,a,l;this.dataFormat==="channelsFirst"?(l=2,i=3,a=4):(l=1,i=2,a=3);const c=r[l],u=r[i],h=r[a],d=this.kernelSize[0],f=this.kernelSize[1],g=this.kernelSize[2],x=this.strides[0],b=this.strides[1],y=this.strides[2],w=ws(c,x,d,this.padding),$=ws(u,b,f,this.padding),C=ws(h,y,g,this.padding),N=[o,w,$,C,this.filters];this.dataFormat!=="channelsLast"&&(s=Ke(s,[0,2,3,4,1]));let E=v$(s,this.kernel.read(),N,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&(E=Ke(E,[0,4,1,2,3])),this.bias!==null&&(E=es(E,this.bias.read(),this.dataFormat)),this.activation!==null&&(E=this.activation.apply(E)),E})}computeOutputShape(e){e=Xe(e);const t=e.slice();let s,r,o,i;this.dataFormat==="channelsFirst"?(s=1,r=2,o=3,i=4):(s=4,r=1,o=2,i=3);const a=this.kernelSize[0],l=this.kernelSize[1],c=this.kernelSize[2],u=this.strides[0],h=this.strides[1],d=this.strides[2];return t[s]=this.filters,t[r]=ws(t[r],u,a,this.padding),t[o]=ws(t[o],h,l,this.padding),t[i]=ws(t[i],d,c,this.padding),t}getConfig(){const e=super.getConfig();return delete e.dilationRate,e}}i0.className="Conv3DTranspose",ce(i0);class a0 extends Ro{constructor(e,t){if(super(e,t),this.DEFAULT_DEPTHWISE_INITIALIZER="glorotUniform",this.DEFAULT_POINTWISE_INITIALIZER="glorotUniform",this.depthwiseKernel=null,this.pointwiseKernel=null,t.filters==null)throw new B("The `filters` configuration field is required by SeparableConv, but is unspecified.");if(t.kernelInitializer!=null||t.kernelRegularizer!=null||t.kernelConstraint!=null)throw new B("Fields kernelInitializer, kernelRegularizer and kernelConstraint are invalid for SeparableConv2D. Use depthwiseInitializer, depthwiseRegularizer, depthwiseConstraint, pointwiseInitializer, pointwiseRegularizer and pointwiseConstraint instead.");if(t.padding!=null&&t.padding!=="same"&&t.padding!=="valid")throw new B(`SeparableConv${this.rank}D supports only padding modes: 'same' and 'valid', but received ${JSON.stringify(t.padding)}`);this.depthMultiplier=t.depthMultiplier==null?1:t.depthMultiplier,this.depthwiseInitializer=bt(t.depthwiseInitializer||this.DEFAULT_DEPTHWISE_INITIALIZER),this.depthwiseRegularizer=yt(t.depthwiseRegularizer),this.depthwiseConstraint=zt(t.depthwiseConstraint),this.pointwiseInitializer=bt(t.depthwiseInitializer||this.DEFAULT_POINTWISE_INITIALIZER),this.pointwiseRegularizer=yt(t.pointwiseRegularizer),this.pointwiseConstraint=zt(t.pointwiseConstraint)}build(e){if(e=Xe(e),e.length<this.rank+2)throw new B(`Inputs to SeparableConv${this.rank}D should have rank ${this.rank+2}, but received input shape: ${JSON.stringify(e)}`);const t=this.dataFormat==="channelsFirst"?1:e.length-1;if(e[t]==null||e[t]<0)throw new B(`The channel dimension of the inputs should be defined, but found ${JSON.stringify(e[t])}`);const s=e[t],r=this.kernelSize.concat([s,this.depthMultiplier]),o=[];for(let a=0;a<this.rank;++a)o.push(1);o.push(s*this.depthMultiplier,this.filters);const i=!0;this.depthwiseKernel=this.addWeight("depthwise_kernel",r,"float32",this.depthwiseInitializer,this.depthwiseRegularizer,i,this.depthwiseConstraint),this.pointwiseKernel=this.addWeight("pointwise_kernel",o,"float32",this.pointwiseInitializer,this.pointwiseRegularizer,i,this.pointwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,i,this.biasConstraint):this.bias=null,this.inputSpec=[new Lt({ndim:this.rank+2,axes:{[t]:s}})],this.built=!0}call(e,t){return Y(()=>{e=De(e);let s;if(this.rank===1)throw new Me("1D separable convolution is not implemented yet.");return this.rank===2&&(this.dataFormat==="channelsFirst"&&(e=Ke(e,[0,2,3,1])),s=Ng(e,this.depthwiseKernel.read(),this.pointwiseKernel.read(),this.strides,this.padding,this.dilationRate,"NHWC")),this.useBias&&(s=es(s,this.bias.read(),this.dataFormat)),this.activation!=null&&(s=this.activation.apply(s)),this.dataFormat==="channelsFirst"&&(s=Ke(s,[0,3,1,2])),s})}getConfig(){const e=super.getConfig();return delete e.rank,delete e.kernelInitializer,delete e.kernelRegularizer,delete e.kernelConstraint,e.depthwiseInitializer=vt(this.depthwiseInitializer),e.pointwiseInitializer=vt(this.pointwiseInitializer),e.depthwiseRegularizer=ct(this.depthwiseRegularizer),e.pointwiseRegularizer=ct(this.pointwiseRegularizer),e.depthwiseConstraint=Mt(this.depthwiseConstraint),e.pointwiseConstraint=Mt(this.pointwiseConstraint),e}}a0.className="SeparableConv";class l0 extends a0{constructor(e){super(2,e)}}l0.className="SeparableConv2D",ce(l0);class Gc extends Ro{constructor(e){super(1,e),Gc.verifyArgs(e),this.inputSpec=[{ndim:3}]}getConfig(){const e=super.getConfig();return delete e.rank,delete e.dataFormat,e}static verifyArgs(e){if(typeof e.kernelSize!="number"&&!tp(e.kernelSize,"number",1,1))throw new B(`Conv1D expects config.kernelSize to be number or number[] with length 1, but received ${JSON.stringify(e.kernelSize)}.`)}}Gc.className="Conv1D",ce(Gc);class c0 extends We{constructor(e){super(e),typeof e.cropping=="number"?this.cropping=[[e.cropping,e.cropping],[e.cropping,e.cropping]]:typeof e.cropping[0]=="number"?this.cropping=[[e.cropping[0],e.cropping[0]],[e.cropping[1],e.cropping[1]]]:this.cropping=e.cropping,this.dataFormat=e.dataFormat===void 0?"channelsLast":e.dataFormat,this.inputSpec=[{ndim:4}]}computeOutputShape(e){return this.dataFormat==="channelsFirst"?[e[0],e[1],e[2]-this.cropping[0][0]-this.cropping[0][1],e[3]-this.cropping[1][0]-this.cropping[1][1]]:[e[0],e[1]-this.cropping[0][0]-this.cropping[0][1],e[2]-this.cropping[1][0]-this.cropping[1][1],e[3]]}call(e,t){return Y(()=>{if(e=De(e),this.dataFormat==="channelsLast"){const s=Tc(e,this.cropping[0][0],e.shape[1]-this.cropping[0][0]-this.cropping[0][1],2);return Tc(s,this.cropping[1][0],e.shape[2]-this.cropping[1][1]-this.cropping[1][0],3)}else{const s=Tc(e,this.cropping[0][0],e.shape[2]-this.cropping[0][0]-this.cropping[0][1],3);return Tc(s,this.cropping[1][0],e.shape[3]-this.cropping[1][1]-this.cropping[1][0],4)}})}getConfig(){const e={cropping:this.cropping,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}}c0.className="Cropping2D",ce(c0);class u0 extends We{constructor(e){super(e),this.DEFAULT_SIZE=[2,2],this.inputSpec=[{ndim:4}],this.size=e.size==null?this.DEFAULT_SIZE:e.size,this.dataFormat=e.dataFormat==null?"channelsLast":e.dataFormat,Et(this.dataFormat),this.interpolation=e.interpolation==null?"nearest":e.interpolation,ME(this.interpolation)}computeOutputShape(e){if(this.dataFormat==="channelsFirst"){const t=e[2]==null?null:this.size[0]*e[2],s=e[3]==null?null:this.size[1]*e[3];return[e[0],e[1],t,s]}else{const t=e[1]==null?null:this.size[0]*e[1],s=e[2]==null?null:this.size[1]*e[2];return[e[0],t,s,e[3]]}}call(e,t){return Y(()=>{let s=De(e);const r=s.shape;if(this.dataFormat==="channelsFirst"){s=Ke(s,[0,2,3,1]);const o=this.size[0]*r[2],i=this.size[1]*r[3],a=this.interpolation==="nearest"?Os.resizeNearestNeighbor(s,[o,i]):Os.resizeBilinear(s,[o,i]);return Ke(a,[0,3,1,2])}else{const o=this.size[0]*r[1],i=this.size[1]*r[2];return this.interpolation==="nearest"?Os.resizeNearestNeighbor(s,[o,i]):Os.resizeBilinear(s,[o,i])}})}getConfig(){const e={size:this.size,dataFormat:this.dataFormat,interpolation:this.interpolation},t=super.getConfig();return Object.assign(e,t),e}}u0.className="UpSampling2D",ce(u0);function lD(n,e,t=[1,1],s="valid",r,o){return Y(()=>{r==null&&(r=Qn()),Et(r);let i=Rp(n,r);if(n.rank!==4)throw new B(`Input for depthwiseConv2d is required to be 4-D, but is instead ${n.rank}-D`);if(e.rank!==4)throw new B(`depthwiseKernel is required to be 4-D, but is instead ${e.rank}-D`);return i=td(i,e,t,s==="same"?"same":"valid","NHWC",o),r==="channelsFirst"&&(i=Ke(i,[0,3,1,2])),i})}class h0 extends Uc{constructor(e){super(2,e),this.depthwiseKernel=null,this.depthMultiplier=e.depthMultiplier==null?1:e.depthMultiplier,this.depthwiseInitializer=bt(e.depthwiseInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.depthwiseConstraint=zt(e.depthwiseConstraint),this.depthwiseRegularizer=yt(e.depthwiseRegularizer)}build(e){if(e=Xe(e),e.length<4)throw new B(`Inputs to DepthwiseConv2D should have rank 4. Received input shape: ${JSON.stringify(e)}.`);const t=this.dataFormat==="channelsFirst"?1:3;if(e[t]==null||e[t]<0)throw new B(`The channel dimension of the inputs to DepthwiseConv2D should be defined, but is not (${e[t]}).`);const s=e[t],r=[this.kernelSize[0],this.kernelSize[1],s,this.depthMultiplier];this.depthwiseKernel=this.addWeight("depthwise_kernel",r,null,this.depthwiseInitializer,this.depthwiseRegularizer,!0,this.depthwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[s*this.depthMultiplier],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(e,t){return Y(()=>{e=De(e);let s=lD(e,this.depthwiseKernel.read(),this.strides,this.padding,this.dataFormat,null);return this.useBias&&(s=es(s,this.bias.read(),this.dataFormat)),this.activation!=null&&(s=this.activation.apply(s)),s})}computeOutputShape(e){e=Xe(e);const t=this.dataFormat==="channelsFirst"?e[2]:e[1],s=this.dataFormat==="channelsFirst"?e[3]:e[2],r=this.dataFormat==="channelsFirst"?e[1]*this.depthMultiplier:e[3]*this.depthMultiplier,o=ss(t,this.kernelSize[0],this.padding,this.strides[0]),i=ss(s,this.kernelSize[1],this.padding,this.strides[1]);return this.dataFormat==="channelsFirst"?[e[0],r,o,i]:[e[0],o,i,r]}getConfig(){const e=super.getConfig();return e.depthMultiplier=this.depthMultiplier,e.depthwiseInitializer=vt(this.depthwiseInitializer),e.depthwiseRegularizer=ct(this.depthwiseRegularizer),e.depthwiseConstraint=Mt(this.depthwiseRegularizer),e}}h0.className="DepthwiseConv2D",ce(h0);function d0(n,e,t,s){if(Array.isArray(n)){if(e!=null||t!=null)throw new B("When inputs is an array, neither initialState or constants should be provided");s!=null&&(t=n.slice(n.length-s,n.length),n=n.slice(0,n.length-s)),n.length>1&&(e=n.slice(1,n.length)),n=n[0]}function r(o){return o==null||Array.isArray(o)?o:[o]}return e=r(e),t=r(t),{inputs:n,initialState:e,constants:t}}function p0(n,e,t,s=!1,r,o,i=!1,a=!1){return Y(()=>{const l=e.shape.length;if(l<3)throw new B(`Input should be at least 3D, but is ${l}D.`);const c=[1,0].concat(Jn(2,l));e=Ke(e,c),i&&console.warn("Backend rnn(): the unroll = true option is not applicable to the imperative deeplearn.js backend."),r!=null&&(r=be(be(r,"bool"),"float32"),r.rank===l-1&&(r=xn(r,-1)),r=Ke(r,c)),s&&(e=Rr(e,0),r!=null&&(r=Rr(r,0)));const u=[];let h,d=t;const f=e.shape[0],g=Ar(e);let x;r!=null&&(x=Ar(r));for(let y=0;y<f;++y){const w=g[y],$=Y(()=>n(w,d));if(r==null)h=$[0],d=$[1];else{const C=Y(()=>{const N=x[y],E=Re(Mn(N),N),F=ue(V($[0],N),V(d[0],E)),O=d.map((A,D)=>ue(V($[1][D],N),V(A,E)));return{output:F,newStates:O}});h=C.output,d=C.newStates}a&&u.push(h)}let b;return a&&(b=Fs(u,1)),[h,b,d]})}class ir extends We{constructor(e){super(e);let t;if(e.cell==null)throw new B("cell property is missing for the constructor of RNN.");if(Array.isArray(e.cell)?t=new _p({cells:e.cell}):t=e.cell,t.stateSize==null)throw new B("The RNN cell should have an attribute `stateSize` (tuple of integers, one integer per RNN state).");this.cell=t,this.returnSequences=e.returnSequences==null?!1:e.returnSequences,this.returnState=e.returnState==null?!1:e.returnState,this.goBackwards=e.goBackwards==null?!1:e.goBackwards,this._stateful=e.stateful==null?!1:e.stateful,this.unroll=e.unroll==null?!1:e.unroll,this.supportsMasking=!0,this.inputSpec=[new Lt({ndim:3})],this.stateSpec=null,this.states_=null,this.numConstants=null,this.keptStates=[]}getStates(){if(this.states_==null){const e=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;return Jn(0,e).map(t=>null)}else return this.states_}setStates(e){this.states_=e}computeOutputShape(e){fp(e)&&(e=e[0]),e=e;let t=this.cell.stateSize;Array.isArray(t)||(t=[t]);const s=t[0];let r;if(this.returnSequences?r=[e[0],e[1],s]:r=[e[0],s],this.returnState){const o=[];for(const i of t)o.push([e[0],i]);return[r].concat(o)}else return r}computeMask(e,t){return Y(()=>{Array.isArray(t)&&(t=t[0]);const s=this.returnSequences?t:null;if(this.returnState){const r=this.states.map(o=>null);return[s].concat(r)}else return s})}get states(){if(this.states_==null){const e=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1,t=[];for(let s=0;s<e;++s)t.push(null);return t}else return this.states_}set states(e){this.states_=e}build(e){if(this.numConstants!=null)throw new Me("Constants support is not implemented in RNN yet.");fp(e)&&(e=e[0]),e=e;const t=this.stateful?e[0]:null,s=e.slice(2);this.inputSpec[0]=new Lt({shape:[t,null,...s]});const r=[e[0]].concat(e.slice(2));this.cell.build(r);let o;if(Array.isArray(this.cell.stateSize)?o=this.cell.stateSize:o=[this.cell.stateSize],this.stateSpec!=null){if(!Je(this.stateSpec.map(i=>i.shape[i.shape.length-1]),o))throw new B(`An initialState was passed that is not compatible with cell.stateSize. Received stateSpec=${this.stateSpec}; However cell.stateSize is ${this.cell.stateSize}`)}else this.stateSpec=o.map(i=>new Lt({shape:[null,i]}));this.stateful&&this.resetStates()}resetStates(e,t=!1){Y(()=>{if(!this.stateful)throw new ms("Cannot call resetStates() on an RNN Layer that is not stateful.");const s=this.inputSpec[0].shape[0];if(s==null)throw new B("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.states_==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(r=>Gt([s,r])):this.states_=[Gt([s,this.cell.stateSize])];else if(e==null)Ue(this.states_),this.keptStates!=null&&(Ue(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(r=>Gt([s,r])):this.states_[0]=Gt([s,this.cell.stateSize]);else{if(Array.isArray(e)||(e=[e]),e.length!==this.states_.length)throw new B(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${e.length} state value(s). Input received: ${e}`);t===!0?this.keptStates.push(this.states_.slice()):Ue(this.states_);for(let r=0;r<this.states_.length;++r){const o=e[r],i=Array.isArray(this.cell.stateSize)?this.cell.stateSize[r]:this.cell.stateSize,a=[s,i];if(!Je(o.shape,a))throw new B(`State ${r} is incompatible with layer ${this.name}: expected shape=${a}, received shape=${o.shape}`);this.states_[r]=o}}this.states_=this.states_.map(r=>cs(r.clone()))})}apply(e,t){let s=t==null?null:t.initialState,r=t==null?null:t.constants;t==null&&(t={});const o=d0(e,s,r,this.numConstants);e=o.inputs,s=o.initialState,r=o.constants;let i=[],a=[];if(s!=null){t.initialState=s,i=i.concat(s),this.stateSpec=[];for(const c of s)this.stateSpec.push(new Lt({shape:c.shape}));a=a.concat(this.stateSpec)}if(r!=null&&(t.constants=r,i=i.concat(r),this.numConstants=r.length),i[0]instanceof ys){const c=[e].concat(i),u=this.inputSpec.concat(a),h=this.inputSpec;this.inputSpec=u;const d=super.apply(c,t);return this.inputSpec=h,d}else return super.apply(e,t)}call(e,t){return Y(()=>{const s=t==null?null:t.mask,r=t==null?null:t.training;let o=t==null?null:t.initialState;e=De(e),o==null&&(this.stateful?o=this.states_:o=this.getInitialState(e));const i=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;if(o.length!==i)throw new B(`RNN Layer has ${i} state(s) but was passed ${o.length} initial state(s).`);this.unroll&&console.warn("Ignoring unroll = true for RNN layer, due to imperative backend.");const a={training:r},c=p0((g,x)=>{const b=this.cell.call([g].concat(x),a);return[b[0],b.slice(1)]},e,o,this.goBackwards,s,null,this.unroll,this.returnSequences),u=c[0],h=c[1],d=c[2];this.stateful&&this.resetStates(d,r);const f=this.returnSequences?h:u;return this.returnState?[f].concat(d):f})}getInitialState(e){return Y(()=>{let t=Gt(e.shape);return t=Se(t,[1,2]),t=ua(t),Array.isArray(this.cell.stateSize)?this.cell.stateSize.map(s=>s>1?op(t,[1,s]):t):this.cell.stateSize>1?[op(t,[1,this.cell.stateSize])]:[t]})}get trainableWeights(){return this.trainable?this.cell.trainableWeights:[]}get nonTrainableWeights(){return this.trainable?this.cell.nonTrainableWeights:this.cell.weights}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),this.cell!=null&&this.cell.setFastWeightInitDuringBuild(e)}getConfig(){const e=super.getConfig(),t={returnSequences:this.returnSequences,returnState:this.returnState,goBackwards:this.goBackwards,stateful:this.stateful,unroll:this.unroll};this.numConstants!=null&&(t.numConstants=this.numConstants);const s=this.cell.getConfig();return this.getClassName()===ir.className&&(t.cell={className:this.cell.getClassName(),config:s}),Object.assign(Object.assign(Object.assign({},s),e),t)}static fromConfig(e,t,s={}){const r=t.cell,o=zs(r,s);return new e(Object.assign(t,{cell:o}))}}ir.className="RNN",ce(ir);class Hc extends We{}class Dp extends Hc{constructor(e){super(e),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=e.units,Ht(this.units,"units"),this.activation=or(e.activation==null?this.DEFAULT_ACTIVATION:e.activation),this.useBias=e.useBias==null?!0:e.useBias,this.kernelInitializer=bt(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=bt(e.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=bt(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=yt(e.kernelRegularizer),this.recurrentRegularizer=yt(e.recurrentRegularizer),this.biasRegularizer=yt(e.biasRegularizer),this.kernelConstraint=zt(e.kernelConstraint),this.recurrentConstraint=zt(e.recurrentConstraint),this.biasConstraint=zt(e.biasConstraint),this.dropout=No([1,nr([0,e.dropout==null?0:e.dropout])]),this.recurrentDropout=No([1,nr([0,e.recurrentDropout==null?0:e.recurrentDropout])]),this.dropoutFunc=e.dropoutFunc,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(e){e=Xe(e),this.kernel=this.addWeight("kernel",[e[e.length-1],this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(e,t){return Y(()=>{if(e=e,e.length!==2)throw new B(`SimpleRNNCell expects 2 input Tensors, got ${e.length}.`);let s=e[1];e=e[0];const r=t.training==null?!1:t.training;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=ar({ones:()=>Mn(e),rate:this.dropout,training:r,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=ar({ones:()=>Mn(s),rate:this.recurrentDropout,training:r,dropoutFunc:this.dropoutFunc}));let o;const i=this.dropoutMask,a=this.recurrentDropoutMask;i!=null?o=bs(V(e,i),this.kernel.read()):o=bs(e,this.kernel.read()),this.bias!=null&&(o=es(o,this.bias.read())),a!=null&&(s=V(s,a));let l=ue(o,bs(s,this.recurrentKernel.read()));return this.activation!=null&&(l=this.activation.apply(l)),[l,l]})}getConfig(){const e=super.getConfig(),t={units:this.units,activation:rr(this.activation),useBias:this.useBias,kernelInitializer:vt(this.kernelInitializer),recurrentInitializer:vt(this.recurrentInitializer),biasInitializer:vt(this.biasInitializer),kernelRegularizer:ct(this.kernelRegularizer),recurrentRegularizer:ct(this.recurrentRegularizer),biasRegularizer:ct(this.biasRegularizer),activityRegularizer:ct(this.activityRegularizer),kernelConstraint:Mt(this.kernelConstraint),recurrentConstraint:Mt(this.recurrentConstraint),biasConstraint:Mt(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout};return Object.assign(Object.assign({},e),t)}}Dp.className="SimpleRNNCell",ce(Dp);class f0 extends ir{constructor(e){e.cell=new Dp(e),super(e)}call(e,t){return Y(()=>{this.cell.dropoutMask!=null&&(Ue(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Ue(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=t==null?null:t.mask,r=t==null?null:t.training,o=t==null?null:t.initialState;return super.call(e,{mask:s,training:r,initialState:o})})}static fromConfig(e,t){return new e(t)}}f0.className="SimpleRNN",ce(f0);class Ap extends Hc{constructor(e){if(super(e),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",e.resetAfter)throw new B("GRUCell does not support reset_after parameter set to true.");this.units=e.units,Ht(this.units,"units"),this.activation=or(e.activation===void 0?this.DEFAULT_ACTIVATION:e.activation),this.recurrentActivation=or(e.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:e.recurrentActivation),this.useBias=e.useBias==null?!0:e.useBias,this.kernelInitializer=bt(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=bt(e.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=bt(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=yt(e.kernelRegularizer),this.recurrentRegularizer=yt(e.recurrentRegularizer),this.biasRegularizer=yt(e.biasRegularizer),this.kernelConstraint=zt(e.kernelConstraint),this.recurrentConstraint=zt(e.recurrentConstraint),this.biasConstraint=zt(e.biasConstraint),this.dropout=No([1,nr([0,e.dropout==null?0:e.dropout])]),this.recurrentDropout=No([1,nr([0,e.recurrentDropout==null?0:e.recurrentDropout])]),this.dropoutFunc=e.dropoutFunc,this.implementation=e.implementation,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(e){e=Xe(e);const t=e[e.length-1];this.kernel=this.addWeight("kernel",[t,this.units*3],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*3],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units*3],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(e,t){return Y(()=>{if(e=e,e.length!==2)throw new B(`GRUCell expects 2 input Tensors (inputs, h, c), got ${e.length}.`);const s=t.training==null?!1:t.training;let r=e[1];e=e[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=ar({ones:()=>Mn(e),rate:this.dropout,training:s,count:3,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=ar({ones:()=>Mn(r),rate:this.recurrentDropout,training:s,count:3,dropoutFunc:this.dropoutFunc}));const o=this.dropoutMask,i=this.recurrentDropoutMask;let a,l,c;0<this.dropout&&this.dropout<1&&(e=V(e,o[0]));let u=bs(e,this.kernel.read());this.useBias&&(u=es(u,this.bias.read())),0<this.recurrentDropout&&this.recurrentDropout<1&&(r=V(r,i[0]));const h=this.recurrentKernel.read(),[d,f]=_n(h,[2*this.units,this.units],h.rank-1),g=bs(r,d),[x,b,y]=_n(u,3,u.rank-1),[w,$]=_n(g,2,g.rank-1);a=this.recurrentActivation.apply(ue(x,w)),l=this.recurrentActivation.apply(ue(b,$));const C=bs(V(l,r),f);c=this.activation.apply(ue(y,C));const N=ue(V(a,r),V(ue(1,Tt(a)),c));return[N,N]})}getConfig(){const e=super.getConfig(),t={units:this.units,activation:rr(this.activation),recurrentActivation:rr(this.recurrentActivation),useBias:this.useBias,kernelInitializer:vt(this.kernelInitializer),recurrentInitializer:vt(this.recurrentInitializer),biasInitializer:vt(this.biasInitializer),kernelRegularizer:ct(this.kernelRegularizer),recurrentRegularizer:ct(this.recurrentRegularizer),biasRegularizer:ct(this.biasRegularizer),activityRegularizer:ct(this.activityRegularizer),kernelConstraint:Mt(this.kernelConstraint),recurrentConstraint:Mt(this.recurrentConstraint),biasConstraint:Mt(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation,resetAfter:!1};return Object.assign(Object.assign({},e),t)}}Ap.className="GRUCell",ce(Ap);class m0 extends ir{constructor(e){e.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),e.cell=new Ap(e),super(e)}call(e,t){return Y(()=>{this.cell.dropoutMask!=null&&(Ue(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Ue(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=t==null?null:t.mask,r=t==null?null:t.training,o=t==null?null:t.initialState;return super.call(e,{mask:s,training:r,initialState:o})})}static fromConfig(e,t){return t.implmentation===0&&(t.implementation=1),new e(t)}}m0.className="GRU",ce(m0);class jc extends Hc{constructor(e){super(e),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=e.units,Ht(this.units,"units"),this.activation=or(e.activation===void 0?this.DEFAULT_ACTIVATION:e.activation),this.recurrentActivation=or(e.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:e.recurrentActivation),this.useBias=e.useBias==null?!0:e.useBias,this.kernelInitializer=bt(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=bt(e.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=bt(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.unitForgetBias=e.unitForgetBias,this.kernelRegularizer=yt(e.kernelRegularizer),this.recurrentRegularizer=yt(e.recurrentRegularizer),this.biasRegularizer=yt(e.biasRegularizer),this.kernelConstraint=zt(e.kernelConstraint),this.recurrentConstraint=zt(e.recurrentConstraint),this.biasConstraint=zt(e.biasConstraint),this.dropout=No([1,nr([0,e.dropout==null?0:e.dropout])]),this.recurrentDropout=No([1,nr([0,e.recurrentDropout==null?0:e.recurrentDropout])]),this.dropoutFunc=e.dropoutFunc,this.implementation=e.implementation,this.stateSize=[this.units,this.units],this.dropoutMask=null,this.recurrentDropoutMask=null}build(e){var t;e=Xe(e);const s=e[e.length-1];this.kernel=this.addWeight("kernel",[s,this.units*4],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*4],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint);let r;if(this.useBias){if(this.unitForgetBias){const o=this.biasInitializer,i=this.units;r=new(t=class extends Wn{apply(l,c){const u=o.apply([i]),h=new ap().apply([i]),d=o.apply([i*2]);return Wx(Wx(u,h),d)}},t.className="CustomInit",t)}else r=this.biasInitializer;this.bias=this.addWeight("bias",[this.units*4],null,r,this.biasRegularizer,!0,this.biasConstraint)}else this.bias=null;this.built=!0}call(e,t){return Y(()=>{const s=t.training==null?!1:t.training;if(e=e,e.length!==3)throw new B(`LSTMCell expects 3 input Tensors (inputs, h, c), got ${e.length}.`);let r=e[1];const o=e[2];e=e[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=ar({ones:()=>Mn(e),rate:this.dropout,training:s,count:4,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=ar({ones:()=>Mn(r),rate:this.recurrentDropout,training:s,count:4,dropoutFunc:this.dropoutFunc}));const i=this.dropoutMask,a=this.recurrentDropoutMask;let l,c,u,h;0<this.dropout&&this.dropout<1&&(e=V(e,i[0]));let d=bs(e,this.kernel.read());0<this.recurrentDropout&&this.recurrentDropout<1&&(r=V(r,a[0])),d=ue(d,bs(r,this.recurrentKernel.read())),this.useBias&&(d=es(d,this.bias.read()));const[f,g,x,b]=_n(d,4,d.rank-1);l=this.recurrentActivation.apply(f),c=this.recurrentActivation.apply(g),u=ue(V(c,o),V(l,this.activation.apply(x))),h=this.recurrentActivation.apply(b);const y=V(h,this.activation.apply(u));return[y,y,u]})}getConfig(){const e=super.getConfig(),t={units:this.units,activation:rr(this.activation),recurrentActivation:rr(this.recurrentActivation),useBias:this.useBias,kernelInitializer:vt(this.kernelInitializer),recurrentInitializer:vt(this.recurrentInitializer),biasInitializer:vt(this.biasInitializer),unitForgetBias:this.unitForgetBias,kernelRegularizer:ct(this.kernelRegularizer),recurrentRegularizer:ct(this.recurrentRegularizer),biasRegularizer:ct(this.biasRegularizer),activityRegularizer:ct(this.activityRegularizer),kernelConstraint:Mt(this.kernelConstraint),recurrentConstraint:Mt(this.recurrentConstraint),biasConstraint:Mt(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation};return Object.assign(Object.assign({},e),t)}}jc.className="LSTMCell",ce(jc);class g0 extends ir{constructor(e){e.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),e.cell=new jc(e),super(e)}call(e,t){return Y(()=>{this.cell.dropoutMask!=null&&(Ue(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Ue(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=t==null?null:t.mask,r=t==null?null:t.training,o=t==null?null:t.initialState;return super.call(e,{mask:s,training:r,initialState:o})})}static fromConfig(e,t){return t.implmentation===0&&(t.implementation=1),new e(t)}}g0.className="LSTM",ce(g0);class _p extends Hc{constructor(e){super(e),this.cells=e.cells}get stateSize(){const e=[];for(const t of this.cells.slice().reverse())Array.isArray(t.stateSize)?e.push(...t.stateSize):e.push(t.stateSize);return e}call(e,t){return Y(()=>{e=e;let s=e.slice(1);const r=[];for(const a of this.cells.slice().reverse())Array.isArray(a.stateSize)?r.push(s.splice(0,a.stateSize.length)):r.push(s.splice(0,1));r.reverse();const o=[];let i;for(let a=0;a<this.cells.length;++a){const l=this.cells[a];s=r[a],a===0?i=[e[0]].concat(s):i=[i[0]].concat(s),i=l.call(i,t),o.push(i.slice(1))}s=[];for(const a of o.slice().reverse())s.push(...a);return[i[0]].concat(s)})}build(e){fp(e)&&(e=e[0]),e=e;let t;this.cells.forEach((s,r)=>{Pr(`RNNCell_${r}`,()=>{s.build(e),Array.isArray(s.stateSize)?t=s.stateSize[0]:t=s.stateSize,e=[e[0],t]})}),this.built=!0}getConfig(){const e=super.getConfig(),t=o=>({className:o.getClassName(),config:o.getConfig()}),r={cells:this.cells.map(t)};return Object.assign(Object.assign({},e),r)}static fromConfig(e,t,s={}){const r=[];for(const o of t.cells)r.push(zs(o,s));return new e({cells:r})}get trainableWeights(){if(!this.trainable)return[];const e=[];for(const t of this.cells)e.push(...t.trainableWeights);return e}get nonTrainableWeights(){const e=[];for(const t of this.cells)e.push(...t.nonTrainableWeights);if(!this.trainable){const t=[];for(const s of this.cells)t.push(...s.trainableWeights);return t.concat(e)}return e}getWeights(){const e=[];for(const t of this.cells)e.push(...t.weights);return mp(e)}setWeights(e){const t=[];for(const s of this.cells){const r=s.weights.length,o=e.splice(r);for(let i=0;i<s.weights.length;++i)t.push([s.weights[i],o[i]])}gp(t)}}_p.className="StackedRNNCells",ce(_p);function ar(n){const{ones:e,rate:t,training:s=!1,count:r=1,dropoutFunc:o}=n,i=()=>o!=null?o(e(),t):Gx(e(),t),a=()=>da(i,e,s);return!r||r<=1?cs(a().clone()):Array(r).fill(void 0).map(a).map(c=>cs(c.clone()))}var cD=function(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(t[s[r]]=n[s[r]]);return t};class x0 extends ir{constructor(e){if(e.unroll)throw new Me("Unrolling is not possible with convolutional RNNs.");if(Array.isArray(e.cell))throw new Me("It is not possible at the moment to stack convolutional cells.");super(e),this.inputSpec=[new Lt({ndim:5})]}call(e,t){return Y(()=>{if(this.cell.dropoutMask!=null&&(Ue(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Ue(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null),t&&t.constants)throw new B("ConvRNN2D cell does not support constants");const s=t==null?null:t.mask,r=t==null?null:t.training,o=t==null?null:t.initialState;return super.call(e,{mask:s,training:r,initialState:o})})}computeOutputShape(e){let t=this.computeSingleOutputShape(e);return this.returnSequences||(t=[t[0],...t.slice(2)]),this.returnState&&(t=[t,...Array(2).fill([e[0],...t.slice(-3)])]),t}getInitialState(e){return Y(()=>{const{stateSize:t}=this.cell,s=e.shape,r=this.computeSingleOutputShape(s),o=[r[0],...r.slice(2)],i=Gt(o);return Array.isArray(t)?Array(t.length).fill(i):[i]})}resetStates(e,t=!1){Y(()=>{if(!this.stateful)throw new ms("Cannot call resetStates() on an RNN Layer that is not stateful.");const s=this.inputSpec[0].shape,r=this.computeSingleOutputShape(s),o=[r[0],...r.slice(2)];if(s[0]==null)throw new B("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.getStates()==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>Gt(o)):this.states_=[Gt(o)];else if(e==null)Ue(this.states_),this.keptStates!=null&&(Ue(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>Gt(o)):this.states_[0]=Gt(o);else{if(Array.isArray(e)||(e=[e]),e.length!==this.states_.length)throw new B(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${e.length} state value(s). Input received: ${e}`);t?this.keptStates.push(this.states_.slice()):Ue(this.states_);for(let a=0;a<this.states_.length;++a){const l=e[a],c=o;if(!Je(l.shape,c))throw new B(`State ${a} is incompatible with layer ${this.name}: expected shape=${c}, received shape=${l.shape}`);this.states_[a]=l}}this.states_=this.states_.map(a=>cs(a.clone()))})}computeSingleOutputShape(e){const{dataFormat:t,filters:s,kernelSize:r,padding:o,strides:i,dilationRate:a}=this.cell,l=t==="channelsFirst",c=e[l?3:2],u=e[l?4:3],h=ss(c,r[0],o,i[0],a[0]),d=ss(u,r[1],o,i[1],a[1]);return[...e.slice(0,2),...l?[s,h,d]:[h,d,s]]}}x0.className="ConvRNN2D";class Fp extends jc{constructor(e){const{filters:t,kernelSize:s,strides:r,padding:o,dataFormat:i,dilationRate:a}=e;super(Object.assign(Object.assign({},e),{units:t})),this.filters=t,Ht(this.filters,"filters"),this.kernelSize=Eo(s,2,"kernelSize"),this.kernelSize.forEach(l=>Ht(l,"kernelSize")),this.strides=Eo(r||1,2,"strides"),this.strides.forEach(l=>Ht(l,"strides")),this.padding=o||"valid",Fn(this.padding),this.dataFormat=i||"channelsLast",Et(this.dataFormat),this.dilationRate=Eo(a||1,2,"dilationRate"),this.dilationRate.forEach(l=>Ht(l,"dilationRate"))}build(e){var t;e=Xe(e);const s=this.dataFormat==="channelsFirst"?1:e.length-1;if(e[s]==null)throw new B(`The channel dimension of the input should be defined. Found ${e[s]}`);const r=e[s],o=4,i=this.kernelSize.concat([r,this.filters*o]);this.kernel=this.addWeight("kernel",i,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint);const a=this.kernelSize.concat([this.filters,this.filters*o]);if(this.recurrentKernel=this.addWeight("recurrent_kernel",a,null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias){let l;if(this.unitForgetBias){const c=this.biasInitializer,u=this.filters;l=new(t=class extends Wn{apply(d,f){const g=c.apply([u]),x=Js([u]),b=c.apply([u*2]);return rp([g,x,b])}},t.className="CustomInit",t)}else l=this.biasInitializer;this.bias=this.addWeight("bias",[this.filters*o],null,l,this.biasRegularizer,!0,this.biasConstraint)}this.built=!0}call(e,t){return Y(()=>{if(e.length!==3)throw new B(`ConvLSTM2DCell expects 3 input Tensors (inputs, h, c), got ${e.length}.`);const s=t.training||!1,r=e[0],o=e[1],i=e[2],a=4;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=ar({ones:()=>Mn(r),rate:this.dropout,training:s,count:a,dropoutFunc:this.dropoutFunc}));const l=this.dropoutMask,c=(re,se,ae)=>!se||!se[ae]?re:V(se[ae],re);let u=c(r,l,0),h=c(r,l,1),d=c(r,l,2),f=c(r,l,3);0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=ar({ones:()=>Mn(o),rate:this.recurrentDropout,training:s,count:a,dropoutFunc:this.dropoutFunc}));const g=this.recurrentDropoutMask;let x=c(o,g,0),b=c(o,g,1),y=c(o,g,2),w=c(o,g,3);const $=3,[C,N,E,F]=_n(this.kernel.read(),a,$),[O,A,D,S]=this.useBias?_n(this.bias.read(),a):[null,null,null,null];u=this.inputConv(u,C,O,this.padding),h=this.inputConv(h,N,A,this.padding),d=this.inputConv(d,E,D,this.padding),f=this.inputConv(f,F,S,this.padding);const[z,U,G,K]=_n(this.recurrentKernel.read(),a,$);x=this.recurrentConv(x,z),b=this.recurrentConv(b,U),y=this.recurrentConv(y,G),w=this.recurrentConv(w,K);const X=this.recurrentActivation.apply(ue(u,x)),Q=this.recurrentActivation.apply(ue(h,b)),Z=ue(V(Q,i),V(X,this.activation.apply(ue(d,y)))),te=V(this.recurrentActivation.apply(ue(f,w)),this.activation.apply(Z));return[te,te,Z]})}getConfig(){const e=super.getConfig(),{units:t}=e,s=cD(e,["units"]),r={filters:this.filters,kernelSize:this.kernelSize,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,strides:this.strides};return Object.assign(Object.assign({},s),r)}inputConv(e,t,s,r){const o=Sr(e,t,this.strides,r||"valid",this.dataFormat==="channelsFirst"?"NCHW":"NHWC",this.dilationRate);return s?es(o,s,this.dataFormat):o}recurrentConv(e,t){return Sr(e,t,1,"same",this.dataFormat==="channelsFirst"?"NCHW":"NHWC")}}Fp.className="ConvLSTM2DCell",ce(Fp);class b0 extends x0{constructor(e){const t=new Fp(e);super(Object.assign(Object.assign({},e),{cell:t}))}static fromConfig(e,t){return new e(t)}}b0.className="ConvLSTM2D",ce(b0);class Op extends We{constructor(e){super(e),this.rate=Math.max(Math.min(e.rate,1),0),this.noiseShape=e.noiseShape,this.seed=e.seed,this.supportsMasking=!0}getNoiseShape(e){if(this.noiseShape==null)return this.noiseShape;const t=e.shape,s=[];for(let r=0;r<this.noiseShape.length;++r)s.push(this.noiseShape[r]==null?t[r]:this.noiseShape[r]);return s}call(e,t){return Y(()=>{this.invokeCallHook(e,t);const s=De(e);if(0<this.rate&&this.rate<1){const r=t.training==null?!1:t.training,o=this.getNoiseShape(s);return da(()=>Gx(s,this.rate,o,this.seed),()=>s,r)}return e})}getConfig(){const e={rate:this.rate,noiseShape:this.noiseShape,seed:this.seed},t=super.getConfig();return Object.assign(e,t),e}dispose(){return super.dispose()}}Op.className="Dropout",ce(Op);class y0 extends Op{constructor(e){super(e),this.inputSpec=[{ndim:3}]}getNoiseShape(e){const t=e.shape;return[t[0],1,t[2]]}}y0.className="SpatialDropout1D",ce(y0);class w0 extends We{constructor(e){if(super(e),this.activation=null,this.useBias=!0,this.kernel=null,this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",e.batchInputShape==null&&e.inputShape==null&&e.inputDim!=null){let t=null;e.batchSize!=null&&(t=e.batchSize),this.batchInputShape=[t,e.inputDim]}this.units=e.units,Ht(this.units,"units"),this.activation=or(e.activation),e.useBias!=null&&(this.useBias=e.useBias),this.kernelInitializer=bt(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.biasInitializer=bt(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelConstraint=zt(e.kernelConstraint),this.biasConstraint=zt(e.biasConstraint),this.kernelRegularizer=yt(e.kernelRegularizer),this.biasRegularizer=yt(e.biasRegularizer),this.activityRegularizer=yt(e.activityRegularizer),this.supportsMasking=!0,this.inputSpec=[{minNDim:2}]}build(e){e=Xe(e);const t=e[e.length-1];this.kernel==null&&(this.kernel=this.addWeight("kernel",[t,this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint))),this.inputSpec=[{minNDim:2,axes:{[-1]:t}}],this.built=!0}computeOutputShape(e){e=Xe(e);const t=e.slice();return t[t.length-1]=this.units,t}call(e,t){return Y(()=>{this.invokeCallHook(e,t);const s=De(e),r=Ox(this.activation.getClassName());let o;return r!=null?o=bs(s,this.kernel.read(),r,this.bias?this.bias.read():null):(o=bs(s,this.kernel.read()),this.bias!=null&&(o=es(o,this.bias.read())),this.activation!=null&&(o=this.activation.apply(o))),o})}getConfig(){const e={units:this.units,activation:rr(this.activation),useBias:this.useBias,kernelInitializer:vt(this.kernelInitializer),biasInitializer:vt(this.biasInitializer),kernelRegularizer:ct(this.kernelRegularizer),biasRegularizer:ct(this.biasRegularizer),activityRegularizer:ct(this.activityRegularizer),kernelConstraint:Mt(this.kernelConstraint),biasConstraint:Mt(this.biasConstraint)},t=super.getConfig();return Object.assign(e,t),e}}w0.className="Dense",ce(w0);class v0 extends We{constructor(e){e=e||{},super(e),this.inputSpec=[{minNDim:3}],this.dataFormat=e.dataFormat}computeOutputShape(e){e=Xe(e);for(const t of e.slice(1))if(t==null)throw new B(`The shape of the input to "Flatten" is not fully defined (got ${e.slice(1)}). Make sure to pass a complete "input_shape" or "batch_input_shape" argument to the first layer in your model.`);return[e[0],tr(e,1)]}call(e,t){return Y(()=>{this.invokeCallHook(e,t);let s=De(e);if(this.dataFormat==="channelsFirst"&&s.rank>1){const r=[0];for(let o=2;o<s.rank;++o)r.push(o);r.push(1),s=Ke(s,r)}return GE(s)})}getConfig(){const e={};this.dataFormat!=null&&(e.dataFormat=this.dataFormat);const t=super.getConfig();return Object.assign(e,t),e}}v0.className="Flatten",ce(v0);class C0 extends We{constructor(e){super(e),this.supportsMasking=!0,this.activation=or(e.activation)}call(e,t){return Y(()=>{this.invokeCallHook(e,t);const s=De(e);return this.activation.apply(s)})}getConfig(){const e={activation:rr(this.activation)},t=super.getConfig();return Object.assign(e,t),e}}C0.className="Activation",ce(C0);class k0 extends We{constructor(e){super(e),this.n=e.n,this.inputSpec=[{ndim:2}]}computeOutputShape(e){return[e[0],this.n,e[1]]}call(e,t){return Y(()=>(e=De(e),WE(e,this.n)))}getConfig(){const e={n:this.n},t=super.getConfig();return Object.assign(e,t),e}}k0.className="RepeatVector",ce(k0);class $0 extends We{constructor(e){super(e),this.targetShape=e.targetShape;for(let t=0;t<this.targetShape.length;++t)this.isUnknown(this.targetShape[t])&&(this.targetShape[t]=null)}isUnknown(e){return e<0||e==null}fixUnknownDimension(e,t){const s="Total size of new array must be unchanged.",r=t.slice();let o=1,i=null;for(let l=0;l<r.length;++l){const c=r[l];if(this.isUnknown(c))if(i===null)i=l;else throw new B("Can only specifiy one unknown dimension.");else o*=c}const a=tr(e);if(i!==null){if(o===0||a%o!==0)throw new B(s);r[i]=a/o}else if(a!==o)throw new B(s);return r}computeOutputShape(e){let t=!1;for(let s=0;s<e.length;++s)if(this.isUnknown(e[s])){t=!0;break}return t?e.slice(0,1).concat(this.targetShape):e.slice(0,1).concat(this.fixUnknownDimension(e.slice(1),this.targetShape))}call(e,t){return Y(()=>{this.invokeCallHook(e,t);const s=De(e),r=s.shape,o=r.slice(0,1).concat(this.fixUnknownDimension(r.slice(1),this.targetShape));return H(s,o)})}getConfig(){const e={targetShape:this.targetShape},t=super.getConfig();return Object.assign(e,t),e}}$0.className="Reshape",ce($0);class I0 extends We{constructor(e){if(super(e),e.dims==null)throw new Error("Required configuration field `dims` is missing during Permute constructor call.");if(!Array.isArray(e.dims))throw new Error(`Permute constructor requires \`dims\` to be an Array, but received ${e.dims} instead.`);const t=Jn(1,e.dims.length+1);if(!Je(e.dims.slice().sort(),t))throw new Error("Invalid permutation `dims`: "+JSON.stringify(e.dims)+" `dims` must contain consecutive integers starting from 1.");this.dims=e.dims,this.dimsIncludingBatch=[0].concat(this.dims),this.inputSpec=[new Lt({ndim:this.dims.length+1})]}computeOutputShape(e){e=Xe(e);const t=e.slice();return this.dims.forEach((s,r)=>{t[r+1]=e[s]}),t}call(e,t){return Ke(De(e),this.dimsIncludingBatch)}getConfig(){const e={dims:this.dims},t=super.getConfig();return Object.assign(e,t),e}}I0.className="Permute",ce(I0);class S0 extends We{constructor(e){super(e??{}),this.supportsMasking=!0,e!=null?this.maskValue=e.maskValue==null?0:e.maskValue:this.maskValue=0}computeOutputShape(e){return e}getConfig(){const e=super.getConfig(),t={maskValue:this.maskValue};return Object.assign(t,e),t}computeMask(e,t){const s=De(e);return Kh(dc(s,this.maskValue),-1)}call(e,t){return Y(()=>{this.invokeCallHook(e,t);const s=De(e),i=Kh(dc(s,this.maskValue),-1,!0);return V(s,be(i,s.dtype))})}}S0.className="Masking",ce(S0);class N0 extends We{constructor(e){if(super(e),this.embeddings=null,this.DEFAULT_EMBEDDINGS_INITIALIZER="randomUniform",e.batchInputShape==null&&e.inputShape==null){let t=null;e.batchSize!=null&&(t=e.batchSize),e.inputLength==null?this.batchInputShape=[t,null]:this.batchInputShape=[t].concat(st(e.inputLength))}this.inputDim=e.inputDim,Ht(this.inputDim,"inputDim"),this.outputDim=e.outputDim,Ht(this.outputDim,"outputDim"),this.embeddingsInitializer=bt(e.embeddingsInitializer||this.DEFAULT_EMBEDDINGS_INITIALIZER),this.embeddingsRegularizer=yt(e.embeddingsRegularizer),this.activityRegularizer=yt(e.activityRegularizer),this.embeddingsConstraint=zt(e.embeddingsConstraint),this.maskZero=e.maskZero,this.supportsMasking=e.maskZero,this.inputLength=e.inputLength}build(e){this.embeddings=this.addWeight("embeddings",[this.inputDim,this.outputDim],this.dtype,this.embeddingsInitializer,this.embeddingsRegularizer,!0,this.embeddingsConstraint),this.built=!0}warnOnIncompatibleInputShape(e){}computeMask(e,t){return Y(()=>this.maskZero?(e=De(e),dc(e,je(e))):null)}computeOutputShape(e){if(e=Xe(e),this.inputLength==null)return[...e,this.outputDim];const t=st(this.inputLength);if(t.length!==e.length-1)throw new B(`"inputLength" is ${this.inputLength}, but received input shape has shape ${e}`);{let s=0;for(let r=0;r<t.length;++r){const o=t[r],i=e[r+1];if(o!=null&&i!=null&&o!==i)throw new B(`"inputLength" is ${this.inputLength}, but received input shape has shape ${e}`);o==null&&(t[s]=i),s++}}return[e[0],...t,this.outputDim]}call(e,t){return Y(()=>{this.invokeCallHook(e,t);let s=De(e);s.dtype!=="int32"&&(s=xs(s,"int32"));const r=Ux(this.embeddings.read(),H(s,[s.size]));return H(r,Xe(this.computeOutputShape(s.shape)))})}getConfig(){const e={inputDim:this.inputDim,outputDim:this.outputDim,embeddingsInitializer:vt(this.embeddingsInitializer),embeddingsRegularizer:ct(this.embeddingsRegularizer),activityRegularizer:ct(this.activityRegularizer),embeddingsConstraint:Mt(this.embeddingsConstraint),maskZero:this.maskZero,inputLength:this.inputLength},t=super.getConfig();return Object.assign(e,t),e}}N0.className="Embedding",ce(N0);class zr extends We{constructor(e){super(e||{}),this.supportsMasking=!0}mergeFunction(e){throw new Me}computeElementwiseOpOutputShape(e,t){if(e==null||t==null)return null;if(e.length<t.length)return this.computeElementwiseOpOutputShape(t,e);if(t.length===0)return e;const s=e.slice(0,e.length-t.length);for(let r=0;r<t.length;++r){const o=e[e.length-t.length+r],i=t[r];if(o==null||i==null||o<0||i<0)s.push(null);else if(o===1)s.push(i);else if(i===1)s.push(o);else{if(o!==i)throw new B("Operands could not be broadcast together with shapes "+JSON.stringify(e)+" "+JSON.stringify(t));s.push(o)}}return s}build(e){if(Array.isArray(e)&&!Array.isArray(e[0])&&(e=[Xe(e)]),e=e,e.length<2)throw new B(`A merge layer should be called on an Array of at least 2 inputs. Got ${e.length} input(s).`);let t=[];for(const o of e)o!=null&&o[0]!==null&&t.push(o[0]);if(t=er(t),t.length>1)throw new B(`Can not merge tensors with different batch sizes. Got tensors with shapes: ${JSON.stringify(e)}.`);let s=e[0]==null?null:e[0].slice(1);for(let o=1;o<e.length;++o){const i=e[o]==null?null:e[o].slice(1);s=this.computeElementwiseOpOutputShape(s,i)}const r=e.map(o=>o.length);e.indexOf(null)===-1&&er(r).length===1?this.reshapeRequired=!1:this.reshapeRequired=!0}call(e,t){return Y(()=>{if(e=e,this.reshapeRequired){const s=[],r=e.map(o=>o.rank);if(r.indexOf(null)===-1){const o=nr(r);for(let i of e){const a=i.rank;for(let l=0;l<o-a;++l)i=ua(i,1);s.push(i)}return this.mergeFunction(s)}else{let o=!1;for(const l of e){const c=l.rank;if(c==null){const u=l.shape,h=u[0],d=u.slice(1).concat([h]);let f=H(l,[h].concat(tr(u.slice(1))));f=Ke(f,[1,0]),f=H(f,d),s.push(f),o=!0}else if(c>1){const u=Jn(1,c).concat([0]);s.push(Ke(l,u)),o=!0}else s.push(l)}let i=this.mergeFunction(s);const a=i.rank;if(o){if(a==null){const l=i.shape,c=l.length,u=l[c-1],h=[u].concat(l.slice(0,l.length-1));i=H(Ke(H(i,[-1,u]),[1,0]),h)}else if(a>1){const l=[a-1].concat(Jn(0,a-1));i=Ke(i,l)}}return i}}else return this.mergeFunction(e)})}computeOutputShape(e){e=e;let t;e[0]==null?t=null:t=e[0].slice(1);for(let r=1;r<e.length;++r){const o=e[r]==null?null:e[r].slice(1);t=this.computeElementwiseOpOutputShape(t,o)}let s=[];for(const r of e)r!=null&&r[0]!==null&&s.push(r[0]);return s=er(s),s.length===1?t=s.concat(t):t=[null].concat(t),t}computeMask(e,t){return Y(()=>{if(t==null)return null;if(!Array.isArray(t))throw new B("`mask` should be an Array");if(!Array.isArray(e))throw new B("`inputs` should be an Array");if(t.length!==e.length)throw new B(`The Array 'inputs' and 'mask' are expected to have the same length, but have different lengths (${e.length} vs ${t.length})`);if(t.every(r=>r==null))return null;t=t.map(r=>r==null?r:xn(r,0));let s=t[0];for(let r=1;r<t.length-1;++r)s=_s(s,t[r]);return s})}}class T0 extends zr{constructor(e){super(e)}mergeFunction(e){return Y(()=>{let t=e[0].clone();for(let s=1;s<e.length;++s)t=ue(t,e[s]);return t})}}T0.className="Add",ce(T0);class E0 extends zr{constructor(e){super(e)}mergeFunction(e){return Y(()=>{let t=e[0].clone();for(let s=1;s<e.length;++s)t=V(t,e[s]);return t})}}E0.className="Multiply",ce(E0);class R0 extends zr{constructor(e){super(e)}mergeFunction(e){return Y(()=>{let t=e[0].clone();for(let s=1;s<e.length;++s)t=ue(t,e[s]);return V(1/e.length,t)})}}R0.className="Average",ce(R0);class D0 extends zr{constructor(e){super(e)}mergeFunction(e){return Y(()=>{let t=e[0];for(let s=1;s<e.length;++s)t=Zs(t,e[s]);return t})}}D0.className="Maximum",ce(D0);class A0 extends zr{constructor(e){super(e)}mergeFunction(e){return Y(()=>{let t=e[0];for(let s=1;s<e.length;++s)t=ea(t,e[s]);return t})}}A0.className="Minimum",ce(A0);class _0 extends zr{constructor(e){super(e),this.DEFAULT_AXIS=-1,e==null&&(e={}),this.axis=e.axis==null?this.DEFAULT_AXIS:e.axis,this.supportsMasking=!0,this.reshapeRequired=!1}build(e){if(!(Array.isArray(e)&&Array.isArray(e[0]))||e.length===1)throw new B("A `Concatenate` layer should be called on a list of at least 2 inputs");e=e;let t=!0;for(const r of e)if(r!=null){t=!1;break}if(t)return;const s=[];for(let r=0;r<e.length;++r){const o=e[r].slice();o.splice(this.axis,1);let i=!1;for(const a of s)if(Je(a,o)){i=!0;break}i||s.push(o)}if(s.length>1)throw new B("A `Concatenate` layer requires inputs with matching shapes except for the concat axis. Got input shapes: "+JSON.stringify(e))}mergeFunction(e){return Y(()=>rp(e,this.axis))}computeOutputShape(e){if(!(Array.isArray(e)&&Array.isArray(e[0])))throw new B("A `Concatenate` layer should be called on a list of inputs.");const t=e,s=t[0].slice(),r=this.axis<0?s.length+this.axis:this.axis;for(const o of t.slice(1)){if(s[r]==null||o[r]==null){s[r]=null;break}s[r]+=o[r]}return s}computeMask(e,t){if(t==null)return null;if(!Array.isArray(t))throw new B("`mask` should be an array for Concatenate");if(!Array.isArray(e))throw new B("`inputs` should be an array for Concatenate");if(t.length!==e.length)throw new B(`Mismatch in the length of mask (${t.length}) and the legnth of inputs (${e.length})`);return Y(()=>{let s=!0;if(t.forEach(i=>{if(i!=null){s=!1;return}}),s)return null;const r=[];for(let i=0;i<e.length;++i)t[i]==null?r.push(be(Mn(e[i]),"bool")):t[i].rank<e[i].rank?r.push(xn(t[i],-1)):r.push(t[i]);const o=gn(r,this.axis);return Jm(o,-1,!1)})}getConfig(){const e={axis:this.axis},t=super.getConfig();return Object.assign(e,t),e}}_0.className="Concatenate",ce(_0);function Ca(n,e){for(;n<0;)n+=e;return n}function uD(n,e,t){if(n.shape.length>3||e.shape.length>3)throw new Me("batchDot is not implemented for tensors of 4D or higher rank yet");if(_(n.shape.length>=2,()=>`batchDot requires the rank of x to be >= 2, but got ${n.shape.length}`),_(n.shape.length>=2,()=>`batchDot requires the rank of y to be >= 2, but got ${e.shape.length}`),typeof t=="number"&&(t=[t,t]),n.dtype==="complex64"||e.dtype==="complex64")throw new Me("batchDot is not implemented for complex64-type Tensors yet.");const s=n.shape.length,r=e.shape.length;t==null&&(t=[s-1,r-2]);const o=t;return Y(()=>{let i;if(s>r){i=s-r;const l=[];for(let c=0;c<i;++c)l.push(1);e=H(e,e.shape.concat(l))}else if(r>s){i=r-s;const l=[];for(let c=0;c<i;++c)l.push(1);n=H(n,n.shape.concat(l))}else i=0;let a;if(n.shape.length===2&&e.shape.length===2)o[0]===o[1]?a=Se(V(n,e),o[0]):a=Se(V(Ke(n,[1,0]),e),o[1]);else{const l=o[0]!==n.shape.length-1,c=o[1]===e.shape.length-1;a=Qe(n,e,l,c)}if(i>0){let l;s>r?l=s+r-3:l=s-1;const c=[];for(let u=l;u<l+i;++u)c.push(u);a=sa(a,c)}return a.shape.length===1&&(a=xn(a,1)),a})}class F0 extends zr{constructor(e){super(e),this.axes=e.axes,this.normalize=e.normalize==null?!1:e.normalize,this.supportsMasking=!0,this.reshapeRequired=!1}build(e){_(Array.isArray(e)&&e.length===2&&Array.isArray(e[0])&&Array.isArray(e[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");const t=e[0],s=e[1];if(t.length>3||s.length>3)throw new Me("Dot layer does not support tensors of 4D or higher rank yet.");const r=this.interpretAxes(t,s);if(t[r[0]]!==s[r[1]])throw new B(`Dimension incompatibility: ${t[r[0]]} !== ${s[r[1]]}`)}mergeFunction(e){if(e.length!==2)throw new B(`A \`Dot\` layer must be called on exactly 2 inputs, but received ${e.length} input(s).`);let t=e[0],s=e[1],r;return Array.isArray(this.axes)?r=this.axes.map((o,i)=>Ca(o,e[i].shape.length)):r=[Ca(this.axes,t.shape.length),Ca(this.axes,s.shape.length)],this.normalize&&(t=Oc(t,r[0]),s=Oc(s,r[1])),uD(t,s,r)}interpretAxes(e,t){let s;return Array.isArray(this.axes)?s=this.axes:s=[Ca(this.axes,e.length),Ca(this.axes,t.length)],s}computeOutputShape(e){_(Array.isArray(e)&&e.length===2&&Array.isArray(e[0])&&Array.isArray(e[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");const t=e[0].slice(),s=e[1].slice();if(t.length>3||s.length>3)throw new Me("Dot layer does not support tensors of 4D or higher rank yet.");const r=this.interpretAxes(t,s);t.splice(r[0],1),s.splice(r[1],1),s.splice(0,1);const o=t.concat(s);return o.length===1&&o.push(1),o}computeMask(e,t){return null}getConfig(){const e={axes:this.axes,normalize:this.normalize},t=super.getConfig();return Object.assign(e,t),e}}F0.className="Dot",ce(F0);class O0 extends We{constructor(e){super(e),this.supportsMasking=!0,this.stddev=e.stddev}computeOutputShape(e){return e}getConfig(){const e=super.getConfig(),t={stddev:this.stddev};return Object.assign(t,e),t}call(e,t){return Y(()=>{this.invokeCallHook(e,t);const s=De(e);return da(()=>ue(Ec(s.shape,0,this.stddev),s),()=>s,t.training||!1)})}}O0.className="GaussianNoise",ce(O0);class P0 extends We{constructor(e){super(e),this.supportsMasking=!0,this.rate=e.rate}computeOutputShape(e){return e}getConfig(){const e=super.getConfig(),t={rate:this.rate};return Object.assign(t,e),t}call(e,t){return Y(()=>{this.invokeCallHook(e,t);const s=De(e);return this.rate>0&&this.rate<1?da(()=>{const o=Math.sqrt(this.rate/(1-this.rate));return V(s,Ec(s.shape,1,o))},()=>s,t.training||!1):s})}}P0.className="GaussianDropout",ce(P0);class L0 extends We{constructor(e){super(e),this.supportsMasking=!0,this.rate=e.rate,this.noiseShape=e.noiseShape}_getNoiseShape(e){return this.noiseShape||De(e).shape}computeOutputShape(e){return e}getConfig(){const e=super.getConfig(),t={rate:this.rate};return Object.assign(t,e),t}call(e,t){return Y(()=>{if(this.rate<1&&this.rate>0){const s=this._getNoiseShape(e);return da(()=>{const o=De(e),a=-1.6732632423543772*1.0507009873554805;let l=Tr(ta(s),this.rate);l=xs(l,"float32");const c=((1-this.rate)*(1+this.rate*a**2))**-.5,u=-c*a*this.rate,h=ue(V(o,l),V(ue(l,-1),a));return ue(V(h,c),u)},()=>De(e),t.training||!1)}return e})}}L0.className="AlphaDropout",ce(L0);function ka(n,e,t,s,r,o=.001){let i;if(n.rank===2)i=qk(n,e,t,s,r,o);else if(n.rank===3)i=Yk(n,e,t,s,r,o);else if(n.rank===4)i=Jk(n,e,t,s,r,o);else throw new Me(`batchNormalization is not implemented for array of rank ${n.rank} yet`);return i}function hD(n,e,t,s,r=.001){return Y(()=>{const o=ld(n,s),i=o.mean,a=o.variance;return[ka(n,i,a,t,e,r),i,a]})}function dD(n,e,t,s,r=.001){return Y(()=>{const o=ld(n,s),i=o.mean,a=o.variance,l=[];for(const g of Jn(0,n.rank))s.indexOf(g)!==-1?l.push(1):l.push(n.shape[g]);const c=H(i,l),u=H(a,l),h=e==null?null:H(e,l),d=t==null?null:H(t,l);return[ka(n,c,u,d,h,r),i,a]})}function pD(n,e,t,s,r=.001){return Je(s.slice().sort(),Jn(0,n.rank-1))?hD(n,e,t,s,r):dD(n,e,t,s,r)}class M0 extends We{constructor(e){e==null&&(e={}),super(e),this.supportsMasking=!0,this.axis=e.axis==null?-1:e.axis,this.momentum=e.momentum==null?.99:e.momentum,this.epsilon=e.epsilon==null?.001:e.epsilon,this.center=e.center==null?!0:e.center,this.scale=e.scale==null?!0:e.scale,this.betaInitializer=bt(e.betaInitializer||"zeros"),this.gammaInitializer=bt(e.gammaInitializer||"ones"),this.movingMeanInitializer=bt(e.movingMeanInitializer||"zeros"),this.movingVarianceInitializer=bt(e.movingVarianceInitializer||"ones"),this.betaConstraint=zt(e.betaConstraint),this.gammaConstraint=zt(e.gammaConstraint),this.betaRegularizer=yt(e.betaRegularizer),this.gammaRegularizer=yt(e.gammaRegularizer)}build(e){e=Xe(e);const t=this.axis>=0?this.axis:this.axis+e.length,s=e[t];if(s==null)throw new B(`Axis ${t} of input tensor should have a defined dimension but the layer received an input with shape ${JSON.stringify(e)}.`);this.inputSpec=[new Lt({ndim:e.length,axes:{[t]:s}})];const r=[s];this.scale&&(this.gamma=this.addWeight("gamma",r,null,this.gammaInitializer,this.gammaRegularizer,!0,this.gammaConstraint)),this.center&&(this.beta=this.addWeight("beta",r,null,this.betaInitializer,this.betaRegularizer,!0,this.betaConstraint)),this.movingMean=this.addWeight("moving_mean",r,null,this.movingMeanInitializer,null,!1),this.movingVariance=this.addWeight("moving_variance",r,null,this.movingVarianceInitializer,null,!1),this.built=!0}call(e,t){return Y(()=>{const s=t.training==null?!1:t.training,r=De(e),o=r.shape,i=o.length,a=Jn(0,i),l=this.axis>=0?this.axis:this.axis+i;a.splice(l,1);const c=_r(1,i);c[l]=o[l];const u=a.slice();u.sort();const h=!Je(u,Jn(0,i).slice(0,i-1)),d=()=>{if(h){const w=H(this.movingMean.read(),c),$=H(this.movingVariance.read(),c),C=this.center?H(this.beta.read(),c):null,N=this.scale?H(this.gamma.read(),c):null;return ka(r,w,$,C,N,this.epsilon)}else return ka(r,this.movingMean.read(),this.movingVariance.read(),this.beta==null?null:this.beta.read(),this.gamma==null?null:this.gamma.read(),this.epsilon)};if(!s)return d();const[f,g,x]=pD(r,this.gamma.read(),this.beta.read(),a,this.epsilon),b=(w,$,C)=>{Y(()=>{const N=1-C,E=w.read(),F=V(Re(E,$),N);w.write(Re(E,F))})};return b(this.movingMean,g,this.momentum),b(this.movingVariance,x,this.momentum),f})}getConfig(){const e={axis:this.axis,momentum:this.momentum,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:vt(this.betaInitializer),gammaInitializer:vt(this.gammaInitializer),movingMeanInitializer:vt(this.movingMeanInitializer),movingVarianceInitializer:vt(this.movingVarianceInitializer),betaRegularizer:ct(this.betaRegularizer),gammaRegularizer:ct(this.gammaRegularizer),betaConstraint:Mt(this.betaConstraint),gammaConstraint:Mt(this.gammaConstraint)},t=super.getConfig();return Object.assign(e,t),e}}M0.className="BatchNormalization",ce(M0);class z0 extends We{constructor(e){if(e==null&&(e={}),super(e),this.axis=e.axis==null?-1:e.axis,typeof this.axis=="number"){if(!Number.isInteger(this.axis))throw new Error(`Expected axis to be an integer, but received ${this.axis}`)}else if(Array.isArray(this.axis)){for(const t of this.axis)if(!Number.isInteger(t))throw new Error(`Expected axis to be an array of integers, but received ${JSON.stringify(this.axis)}`)}else throw new Error(`Expected axis to be an integer or an array of integers, but received ${JSON.stringify(this.axis)}`);this.epsilon=e.epsilon==null?.001:e.epsilon,this.center=e.center==null?!0:e.center,this.scale=e.scale==null?!0:e.scale,this.betaInitializer=bt(e.betaInitializer||"zeros"),this.gammaInitializer=bt(e.gammaInitializer||"ones"),this.betaRegularizer=yt(e.betaRegularizer),this.gammaRegularizer=yt(e.gammaRegularizer),this.supportsMasking=!0}build(e){e=Xe(e);const t=e.length;typeof this.axis=="number"&&(this.axis=[this.axis]);for(let o=0;o<this.axis.length;++o)this.axis[o]<0&&(this.axis[o]+=t);for(const o of this.axis)if(o<0||o>=t)throw new Error(`Invalid axis: ${o}`);if(this.axis.length!==er(this.axis).length)throw new Error(`Found duplicate axes in: ${this.axis}`);const s=this.axis.map(o=>e[o]),r=!0;this.scale?this.gamma=this.addWeight("gamma",s,"float32",this.gammaInitializer,this.gammaRegularizer,r):this.gamma=null,this.center?this.beta=this.addWeight("beta",s,"float32",this.betaInitializer,this.betaRegularizer,r):this.beta=null,this.built=!0}call(e,t){const s=De(e),r=s.shape,o=r.length;return Y(()=>{let{mean:a,variance:l}=ld(s,this.axis,!0);const c=_r(1,o);for(const x of this.axis)c[x]=r[x];const u=x=>x!=null&&x.shape.length!==o?H(x,c):x;let h=this.scale?u(this.gamma.read()):null,d=this.center?u(this.beta.read()):null;const f=[],g=[];for(let x=0;x<o;++x)this.axis.indexOf(x)!==-1?(f.push(r[x]),g.push(1)):(f.push(1),g.push(r[x]));return a=Yn(a,f),l=Yn(l,f),h!=null&&(h=Yn(h,g)),d!=null&&(d=Yn(d,g)),ka(s,a,l,d,h,this.epsilon)})}getConfig(){const e={axis:this.axis,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:vt(this.betaInitializer),gammaInitializer:vt(this.gammaInitializer),betaRegularizer:ct(this.betaRegularizer),gammaRegularizer:ct(this.gammaRegularizer)},t=super.getConfig();return Object.assign(e,t),e}}z0.className="LayerNormalization",ce(z0);function fD(n,e,t){return Y(()=>{if(n.rank!==4)throw new B(`temporalPadding expects input tensor to be 4-D, but received a ${n.rank}-D tensor.`);if(e==null&&(e=[[1,1],[1,1]]),e.length!==2||e[0].length!==2||e[1].length!==2)throw new B("spatial2dPadding expects `padding` to be an Array of two Arrays, each of which is an Array of two integers.");if(t==null&&(t=Qn()),t!=="channelsLast"&&t!=="channelsFirst")throw new B(`Unknown data format: ${t}. Supported data formats are 'channelsLast' and 'channelsFirst.`);let s;return t==="channelsFirst"?s=[[0,0],[0,0],e[0],e[1]]:s=[[0,0],e[0],e[1],[0,0]],cd(n,s)})}class B0 extends We{constructor(e){if(e==null&&(e={}),super(e),this.dataFormat=e.dataFormat==null?Qn():e.dataFormat,e.padding==null)this.padding=[[1,1],[1,1]];else if(typeof e.padding=="number")this.padding=[[e.padding,e.padding],[e.padding,e.padding]];else{if(e.padding=e.padding,e.padding.length!==2)throw new B(`ZeroPadding2D expects padding to be a length-2 array, but received a length-${e.padding.length} array.`);let t,s;if(typeof e.padding[0]=="number")t=[e.padding[0],e.padding[0]],s=[e.padding[1],e.padding[1]];else{if(e.padding=e.padding,e.padding[0].length!==2)throw new B(`ZeroPadding2D expects height padding to be a length-2 array, but received a length-${e.padding[0].length} array.`);if(t=e.padding[0],e.padding[1].length!==2)throw new B(`ZeroPadding2D expects width padding to be a length-2 array, but received a length-${e.padding[1].length} array.`);s=e.padding[1]}this.padding=[t,s]}this.inputSpec=[new Lt({ndim:4})]}computeOutputShape(e){e=Xe(e);let t,s;return this.dataFormat==="channelsFirst"?(e[2]!=null&&e[2]>=0?t=e[2]+this.padding[0][0]+this.padding[0][1]:t=null,e[3]!=null&&e[3]>=0?s=e[3]+this.padding[1][0]+this.padding[1][1]:s=null,[e[0],e[1],t,s]):(e[1]!=null&&e[1]>=0?t=e[1]+this.padding[0][0]+this.padding[0][1]:t=null,e[2]!=null&&e[2]>=0?s=e[2]+this.padding[1][0]+this.padding[1][1]:s=null,[e[0],t,s,e[3]])}call(e,t){return Y(()=>fD(De(e),this.padding,this.dataFormat))}getConfig(){const e={padding:this.padding,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}}B0.className="ZeroPadding2D",ce(B0);function Kc(n,e,t,s,r,o){return Y(()=>{Et(r),Lx(o),Fn(s),t==null&&(t=[1,1]),s==null&&(s="valid"),r==null&&(r=Qn()),o==null&&(o="max"),n=Rp(n,r);let i;const a=s==="same"?"same":"valid";return o==="max"?i=ad(n,e,t,a):i=Yh(n,e,t,a),r==="channelsFirst"&&(i=Ke(i,[0,3,1,2])),i})}function V0(n,e,t,s,r,o){return Y(()=>{Et(r),Lx(o),Fn(s),t==null&&(t=[1,1,1]),s==null&&(s="valid"),r==null&&(r=Qn()),o==null&&(o="max"),n=s0(n,r);let i;const a=s==="same"?"same":"valid";return o==="max"?i=PI(n,e,t,a):i=Mk(n,e,t,a),r==="channelsFirst"&&(i=Ke(i,[0,4,1,2,3])),i})}class W0 extends We{constructor(e){if(e.poolSize==null&&(e.poolSize=2),super(e),typeof e.poolSize=="number")this.poolSize=[e.poolSize];else if(Array.isArray(e.poolSize)&&e.poolSize.length===1&&typeof e.poolSize[0]=="number")this.poolSize=e.poolSize;else throw new B(`poolSize for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(e.poolSize)}`);if(Ht(this.poolSize,"poolSize"),e.strides==null)this.strides=this.poolSize;else if(typeof e.strides=="number")this.strides=[e.strides];else if(Array.isArray(e.strides)&&e.strides.length===1&&typeof e.strides[0]=="number")this.strides=e.strides;else throw new B(`strides for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(e.strides)}`);Ht(this.strides,"strides"),this.padding=e.padding==null?"valid":e.padding,Fn(this.padding),this.inputSpec=[new Lt({ndim:3})]}computeOutputShape(e){e=Xe(e);const t=ss(e[1],this.poolSize[0],this.padding,this.strides[0]);return[e[0],t,e[2]]}call(e,t){return Y(()=>{this.invokeCallHook(e,t),e=ua(De(e),2);const s=this.poolingFunction(De(e),[this.poolSize[0],1],[this.strides[0],1],this.padding,"channelsLast");return sa(s,[2])})}getConfig(){const e={poolSize:this.poolSize,padding:this.padding,strides:this.strides},t=super.getConfig();return Object.assign(e,t),e}}class U0 extends W0{constructor(e){super(e)}poolingFunction(e,t,s,r,o){return Et(o),Fn(r),Kc(e,t,s,r,o,"max")}}U0.className="MaxPooling1D",ce(U0);class G0 extends W0{constructor(e){super(e)}poolingFunction(e,t,s,r,o){return Et(o),Fn(r),Kc(e,t,s,r,o,"avg")}}G0.className="AveragePooling1D",ce(G0);class H0 extends We{constructor(e){if(e.poolSize==null&&(e.poolSize=[2,2]),super(e),this.poolSize=Array.isArray(e.poolSize)?e.poolSize:[e.poolSize,e.poolSize],e.strides==null)this.strides=this.poolSize;else if(Array.isArray(e.strides)){if(e.strides.length!==2)throw new B(`If the strides property of a 2D pooling layer is an Array, it is expected to have a length of 2, but received length ${e.strides.length}.`);this.strides=e.strides}else this.strides=[e.strides,e.strides];Ht(this.poolSize,"poolSize"),Ht(this.strides,"strides"),this.padding=e.padding==null?"valid":e.padding,this.dataFormat=e.dataFormat==null?"channelsLast":e.dataFormat,Et(this.dataFormat),Fn(this.padding),this.inputSpec=[new Lt({ndim:4})]}computeOutputShape(e){e=Xe(e);let t=this.dataFormat==="channelsFirst"?e[2]:e[1],s=this.dataFormat==="channelsFirst"?e[3]:e[2];return t=ss(t,this.poolSize[0],this.padding,this.strides[0]),s=ss(s,this.poolSize[1],this.padding,this.strides[1]),this.dataFormat==="channelsFirst"?[e[0],e[1],t,s]:[e[0],t,s,e[3]]}call(e,t){return Y(()=>(this.invokeCallHook(e,t),this.poolingFunction(De(e),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){const e={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}}class j0 extends H0{constructor(e){super(e)}poolingFunction(e,t,s,r,o){return Et(o),Fn(r),Kc(e,t,s,r,o,"max")}}j0.className="MaxPooling2D",ce(j0);class K0 extends H0{constructor(e){super(e)}poolingFunction(e,t,s,r,o){return Et(o),Fn(r),Kc(e,t,s,r,o,"avg")}}K0.className="AveragePooling2D",ce(K0);class q0 extends We{constructor(e){if(e.poolSize==null&&(e.poolSize=[2,2,2]),super(e),this.poolSize=Array.isArray(e.poolSize)?e.poolSize:[e.poolSize,e.poolSize,e.poolSize],e.strides==null)this.strides=this.poolSize;else if(Array.isArray(e.strides)){if(e.strides.length!==3)throw new B(`If the strides property of a 3D pooling layer is an Array, it is expected to have a length of 3, but received length ${e.strides.length}.`);this.strides=e.strides}else this.strides=[e.strides,e.strides,e.strides];Ht(this.poolSize,"poolSize"),Ht(this.strides,"strides"),this.padding=e.padding==null?"valid":e.padding,this.dataFormat=e.dataFormat==null?"channelsLast":e.dataFormat,Et(this.dataFormat),Fn(this.padding),this.inputSpec=[new Lt({ndim:5})]}computeOutputShape(e){e=Xe(e);let t=this.dataFormat==="channelsFirst"?e[2]:e[1],s=this.dataFormat==="channelsFirst"?e[3]:e[2],r=this.dataFormat==="channelsFirst"?e[4]:e[3];return t=ss(t,this.poolSize[0],this.padding,this.strides[0]),s=ss(s,this.poolSize[1],this.padding,this.strides[1]),r=ss(r,this.poolSize[2],this.padding,this.strides[2]),this.dataFormat==="channelsFirst"?[e[0],e[1],t,s,r]:[e[0],t,s,r,e[4]]}call(e,t){return Y(()=>(this.invokeCallHook(e,t),this.poolingFunction(De(e),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){const e={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}}class X0 extends q0{constructor(e){super(e)}poolingFunction(e,t,s,r,o){return Et(o),Fn(r),V0(e,t,s,r,o,"max")}}X0.className="MaxPooling3D",ce(X0);class Y0 extends q0{constructor(e){super(e)}poolingFunction(e,t,s,r,o){return Et(o),Fn(r),V0(e,t,s,r,o,"avg")}}Y0.className="AveragePooling3D",ce(Y0);class Z0 extends We{constructor(e){super(e),this.inputSpec=[new Lt({ndim:3})]}computeOutputShape(e){return[e[0],e[2]]}call(e,t){throw new Me}}class J0 extends Z0{constructor(e){super(e||{})}call(e,t){return Y(()=>{const s=De(e);return _t(s,1)})}}J0.className="GlobalAveragePooling1D",ce(J0);class Q0 extends Z0{constructor(e){super(e||{})}call(e,t){return Y(()=>{const s=De(e);return Xn(s,1)})}}Q0.className="GlobalMaxPooling1D",ce(Q0);class e1 extends We{constructor(e){super(e),this.dataFormat=e.dataFormat==null?"channelsLast":e.dataFormat,Et(this.dataFormat),this.inputSpec=[new Lt({ndim:4})]}computeOutputShape(e){return e=e,this.dataFormat==="channelsLast"?[e[0],e[3]]:[e[0],e[1]]}call(e,t){throw new Me}getConfig(){const e={dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}}class t1 extends e1{call(e,t){return Y(()=>{const s=De(e);return this.dataFormat==="channelsLast"?_t(s,[1,2]):_t(s,[2,3])})}}t1.className="GlobalAveragePooling2D",ce(t1);class n1 extends e1{call(e,t){return Y(()=>{const s=De(e);return this.dataFormat==="channelsLast"?Xn(s,[1,2]):Xn(s,[2,3])})}}n1.className="GlobalMaxPooling2D",ce(n1);class s1 extends We{constructor(e){super(e),this.layer=e.layer}build(e){this.built=!0}get trainable(){return this.layer!=null?this.layer.trainable:!1}set trainable(e){this.layer!=null&&(this.layer.trainable=e)}get trainableWeights(){return this.layer.trainableWeights}get nonTrainableWeights(){return this.layer.nonTrainableWeights}get updates(){return this.layer._updates}get losses(){return this.layer.losses}getWeights(){return this.layer.getWeights()}setWeights(e){this.layer.setWeights(e)}getConfig(){const e={layer:{className:this.layer.getClassName(),config:this.layer.getConfig()}},t=super.getConfig();return Object.assign(e,t),e}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),this.layer!=null&&this.layer.setFastWeightInitDuringBuild(e)}static fromConfig(e,t,s={}){const r=t.layer,o=zs(r,s);delete t.layer;const i={layer:o};return Object.assign(i,t),new e(i)}}class r1 extends s1{constructor(e){super(e),this.supportsMasking=!0}build(e){if(e=Xe(e),e.length<3)throw new B(`TimeDistributed layer expects an input shape >= 3D, but received input shape ${JSON.stringify(e)}`);this.inputSpec=[{shape:e}];const t=[e[0]].concat(e.slice(2));this.layer.built||(this.layer.build(t),this.layer.built=!0),super.build(e)}computeOutputShape(e){e=Xe(e);const t=[e[0]].concat(e.slice(2)),s=this.layer.computeOutputShape(t),r=e[1];return[s[0],r].concat(s.slice(1))}call(e,t){return Y(()=>(e=De(e),p0((i,a)=>[De(this.layer.call(i,t)),[]],e,[],!1,null,null,!1,!0)[1]))}}r1.className="TimeDistributed",ce(r1);function mD(n){Or(LE,"BidirectionalMergeMode",n)}const gD="concat";class o1 extends s1{constructor(e){super(e);const t=e.layer.getConfig(),s={};s.className=e.layer.getClassName(),s.config=t,this.forwardLayer=zs(s),t.goBackwards=t.goBackwards!==!0;const r={};if(r.className=e.layer.getClassName(),r.config=t,this.backwardLayer=zs(r),this.forwardLayer.name="forward_"+this.forwardLayer.name,this.backwardLayer.name="backward_"+this.backwardLayer.name,this.mergeMode=e.mergeMode===void 0?gD:e.mergeMode,mD(this.mergeMode),e.weights)throw new Me("weights support is not implemented for Bidirectional layer yet.");this._stateful=e.layer.stateful,this.returnSequences=e.layer.returnSequences,this.returnState=e.layer.returnState,this.supportsMasking=!0,this._trainable=!0,this.inputSpec=e.layer.inputSpec,this.numConstants=null}get trainable(){return this._trainable}set trainable(e){this._trainable=e,this.forwardLayer!=null&&(this.forwardLayer.trainable=e),this.backwardLayer!=null&&(this.backwardLayer.trainable=e)}getWeights(){return this.forwardLayer.getWeights().concat(this.backwardLayer.getWeights())}setWeights(e){const t=e.length,s=Math.floor(t/2);this.forwardLayer.setWeights(e.slice(0,s)),this.backwardLayer.setWeights(e.slice(s))}computeOutputShape(e){let t=this.forwardLayer.computeOutputShape(e);Array.isArray(t)&&Array.isArray(t[0])||(t=[t]),t=t;let s,r,o;return this.returnState&&(o=t.slice(1)),s=t[0],s=s,this.mergeMode==="concat"?(s[s.length-1]*=2,r=[s]):this.mergeMode==null?r=[s,s.slice()]:r=[s],this.returnState?this.mergeMode==null?r.concat(o).concat(o.slice()):[s].concat(o).concat(o.slice()):bn(r)}apply(e,t){let s=t==null?null:t.initialState,r=t==null?null:t.constants;t==null&&(t={});const o=d0(e,s,r,this.numConstants);if(e=o.inputs,s=o.initialState,r=o.constants,Array.isArray(e)&&(s=e.slice(1),e=e[0]),(s==null||s.length===0)&&r==null)return super.apply(e,t);const i=[],a=[];if(s!=null){const c=s.length;if(c%2>0)throw new B("When passing `initialState` to a Bidrectional RNN, the state should be an Array containing the states of the underlying RNNs.");t.initialState=s,i.push(...s);const u=s.map(h=>new Lt({shape:h.shape}));this.forwardLayer.stateSpec=u.slice(0,c/2),this.backwardLayer.stateSpec=u.slice(c/2),a.push(...u)}if(r!=null)throw new Me("Support for constants in Bidirectional layers is not implemented yet.");const l=i[0]instanceof ys;for(const c of i)if(c instanceof ys!==l)throw new B("The initial state of a Bidirectional layer cannot be specified as a mix of symbolic and non-symbolic tensors");if(l){const c=[e].concat(i),u=this.inputSpec.concat(a),h=this.inputSpec;this.inputSpec=u;const d=super.apply(c,t);return this.inputSpec=h,d}else return super.apply(e,t)}call(e,t){return Y(()=>{const s=t.initialState;let r,o;if(s==null)r=this.forwardLayer.call(e,t),o=this.backwardLayer.call(e,t);else{const l=s.slice(0,s.length/2),c=s.slice(s.length/2);r=this.forwardLayer.call(e,Object.assign(t,{initialState:l})),o=this.backwardLayer.call(e,Object.assign(t,{initialState:c}))}let i;this.returnState&&(Array.isArray(r)&&(i=r.slice(1).concat(o.slice(1))),r=r[0],o=o[0]),this.returnSequences&&(o=Rr(o,1));let a;return this.mergeMode==="concat"?a=rp([r,o]):this.mergeMode==="sum"?a=ue(r,o):this.mergeMode==="ave"?a=V(.5,ue(r,o)):this.mergeMode==="mul"?a=V(r,o):this.mergeMode==null&&(a=[r,o]),this.returnState?this.mergeMode==null?a.concat(i):[a].concat(i):a})}resetStates(e){this.forwardLayer.resetStates(),this.backwardLayer.resetStates()}build(e){Pr(this.forwardLayer.name,()=>{this.forwardLayer.build(e)}),Pr(this.backwardLayer.name,()=>{this.backwardLayer.build(e)}),this.built=!0}computeMask(e,t){Array.isArray(t)&&(t=t[0]);let s;if(this.returnSequences?this.mergeMode==null?s=[t,t]:s=t:this.mergeMode==null?s=[null,null]:s=null,this.returnState){const o=this.forwardLayer.states.map(i=>null);return Array.isArray(s)?s.concat(o).concat(o):[s].concat(o).concat(o)}else return s}get trainableWeights(){return this.forwardLayer.trainableWeights.concat(this.backwardLayer.trainableWeights)}get nonTrainableWeights(){return this.forwardLayer.nonTrainableWeights.concat(this.backwardLayer.nonTrainableWeights)}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),this.forwardLayer!=null&&this.forwardLayer.setFastWeightInitDuringBuild(e),this.backwardLayer!=null&&this.backwardLayer.setFastWeightInitDuringBuild(e)}getConfig(){const e={mergeMode:this.mergeMode},t=super.getConfig();return Object.assign(e,t),e}static fromConfig(e,t){const s=zs(t.layer);if(delete t.layer,t.numConstants!=null)throw new Me("Deserialization of a Bidirectional layer with numConstants present is not supported yet.");const r=t;return r.layer=s,new e(r)}}o1.className="Bidirectional",ce(o1);class i1 extends We{constructor(e){super(e),this.scale=e.scale,e.offset?this.offset=e.offset:this.offset=0}getConfig(){const e={scale:this.scale,offset:this.offset},t=super.getConfig();return Object.assign(e,t),e}call(e,t){return Y(()=>(e=De(e),e.dtype!=="float32"&&(e=xs(e,"float32")),ue(V(e,this.scale),this.offset)))}}i1.className="Rescaling",ce(i1);const{resizeBilinear:xD,cropAndResize:bD}=Os;class a1 extends We{constructor(e){super(e),this.height=e.height,this.width=e.width}centerCrop(e,t,s,r,o,i,a,l){return Y(()=>{let c,u=!1;const h=t/i,d=s/a,f=(r+t)/i,g=(o+s)/a,x=[h,d,f,g],b=[];e.rank===3?(u=!0,c=Fs([e])):c=e;for(let N=0;N<c.shape[0];N++)b.push(x);const y=Lm(b,[b.length,4]),w=na(0,b.length,1,"int32"),C=bD(c,y,w,[r,o],"nearest");return xs(u?De(Ar(C)):C,l)})}upsize(e,t,s,r){return Y(()=>{const o=xD(e,[t,s]);return xs(o,r)})}call(e,t){return Y(()=>{const s=De(e),r=s.dtype,o=s.shape,i=o[o.length-3],a=o[o.length-2];let l=0;i!==this.height&&(l=Math.floor((i-this.height)/2));let c=0;return a!==this.width&&(c=Math.floor((a-this.width)/2),c===0&&(c=1)),l>=0&&c>=0?this.centerCrop(s,l,c,this.height,this.width,i,a,r):this.upsize(e,this.height,this.width,r)})}getConfig(){const e={height:this.height,width:this.width},t=super.getConfig();return Object.assign(e,t),e}computeOutputShape(e){e=Xe(e);const t=e.length-3,s=e.length-2;return e[t]=this.height,e[s]=this.width,e}}a1.className="CenterCrop",ce(a1);function yD(n,e,t,s){let r=De(n);if(r.dtype!=="int32"&&(r=xs(r,"int32")),e==="int")return r;const o=r.shape;if(r.rank===0&&(r=xn(r,-1)),e==="oneHot"&&r.shape[r.shape.length-1]!==1&&(r=xn(r,-1)),r.rank>2)throw new B(`When outputMode is not int, maximum output rank is 2 Received outputMode ${e} and input shape ${o} which would result in output rank ${r.rank}.`);const i=["multiHot","oneHot"].includes(e),a=r;let l;if(typeof s<"u"&&e==="count"?l=rg(a,s,t,i):l=rg(a,[],t,i),e!=="tfIdf")return l;if(s)return V(l,s);throw new B("When outputMode is 'tfIdf', weights must be provided.")}class l1 extends We{constructor(e){super(e),this.numTokens=e.numTokens,e.outputMode?this.outputMode=e.outputMode:this.outputMode="multiHot"}getConfig(){const e={numTokens:this.numTokens,outputMode:this.outputMode},t=super.getConfig();return Object.assign(e,t),e}computeOutputShape(e){return e=Xe(e),e==null?[this.numTokens]:this.outputMode==="oneHot"&&e[e.length-1]!==1?(e.push(this.numTokens),e):(e[e.length-1]=this.numTokens,e)}call(e,t){return Y(()=>{e=De(e),e.dtype!=="int32"&&(e=xs(e,"int32"));let s;if(typeof t.countWeights<"u"){if(this.outputMode!=="count")throw new B(`countWeights is not used when outputMode !== count.
              Received countWeights=${t.countWeights}`);s=De(t.countWeights)}const r=Xn(e),o=lc(e),i=An(this.numTokens,r).bufferSync().get(0),a=Tr(o,0).bufferSync().get(0);if(!(i&&a))throw new B(`Input values must be between 0 < values <= numTokens with numTokens=${this.numTokens}`);return yD(e,this.outputMode,this.numTokens,s)})}}l1.className="CategoryEncoding",ce(l1);const wD=["bilinear","nearest"],c1=new Set(wD);class u1 extends We{constructor(e){if(super(e),this.height=e.height,this.width=e.width,e.interpolation)if(c1.has(e.interpolation))this.interpolation=e.interpolation;else throw new B(`Invalid interpolation parameter: ${e.interpolation} is not implemented`);else this.interpolation="bilinear";this.cropToAspectRatio=!!e.cropToAspectRatio}computeOutputShape(e){e=Xe(e);const t=e[2];return[this.height,this.width,t]}getConfig(){const e={height:this.height,width:this.width,interpolation:this.interpolation,cropToAspectRatio:this.cropToAspectRatio},t=super.getConfig();return Object.assign(e,t),e}call(e,t){return Y(()=>{const s=[this.height,this.width];if(this.interpolation==="bilinear")return Os.resizeBilinear(e,s,!this.cropToAspectRatio);if(this.interpolation==="nearest")return Os.resizeNearestNeighbor(e,s,!this.cropToAspectRatio);throw new Error(`Interpolation is ${this.interpolation} but only ${[...c1]} are supported`)})}}u1.className="Resizing",ce(u1);class h1{constructor(e){this.seed=e}next(){if(this.seed!==void 0)return this.seed++}}h1.className="RandomSeed";class d1 extends We{constructor(e){super(e),this.randomGenerator=new h1(e.seed)}getConfig(){const e={seed:this.randomGenerator.seed},t=super.getConfig();return Object.assign(e,t),e}}d1.className="BaseRandomLayer";const vD=["bilinear","nearest"],p1=new Set(vD);class f1 extends d1{constructor(e){super(e);const{factor:t,interpolation:s="bilinear"}=e;if(this.factor=t,Array.isArray(this.factor)&&this.factor.length===2)this.widthLower=this.factor[0],this.widthUpper=this.factor[1];else if(!Array.isArray(this.factor)&&this.factor>0)this.widthLower=-this.factor,this.widthUpper=this.factor;else throw new B(`Invalid factor: ${this.factor}. Must be positive number or tuple of 2 numbers`);if(this.widthLower<-1||this.widthUpper<-1)throw new B(`factor must have values larger than -1. Got: ${this.factor}`);if(this.widthUpper<this.widthLower)throw new B(`factor cannot have upper bound less than lower bound.
        Got upper bound: ${this.widthUpper}.
        Got lower bound: ${this.widthLower}
      `);if(s)if(p1.has(s))this.interpolation=s;else throw new B(`Invalid interpolation parameter: ${s} is not implemented`)}getConfig(){const e={factor:this.factor,interpolation:this.interpolation},t=super.getConfig();return Object.assign(e,t),e}computeOutputShape(e){e=Xe(e);const t=e[2];return[this.imgHeight,-1,t]}call(e,t){return Y(()=>{const s=De(e);this.imgHeight=s.shape[s.shape.length-3];const r=s.shape[s.shape.length-2];this.widthFactor=ta([1],1+this.widthLower,1+this.widthUpper,"float32",this.randomGenerator.next());let o=this.widthFactor.dataSync()[0]*r;o=Math.round(o);const i=[this.imgHeight,o];switch(this.interpolation){case"bilinear":return Os.resizeBilinear(e,i);case"nearest":return Os.resizeNearestNeighbor(e,i);default:throw new Error(`Interpolation is ${this.interpolation}
          but only ${[...p1]} are supported`)}})}}f1.className="RandomWidth",ce(f1);J().registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,n=>{n&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});var m1;(function(n){n[n.DT_INVALID=0]="DT_INVALID",n[n.DT_FLOAT=1]="DT_FLOAT",n[n.DT_DOUBLE=2]="DT_DOUBLE",n[n.DT_INT32=3]="DT_INT32",n[n.DT_UINT8=4]="DT_UINT8",n[n.DT_INT16=5]="DT_INT16",n[n.DT_INT8=6]="DT_INT8",n[n.DT_STRING=7]="DT_STRING",n[n.DT_COMPLEX64=8]="DT_COMPLEX64",n[n.DT_INT64=9]="DT_INT64",n[n.DT_BOOL=10]="DT_BOOL",n[n.DT_QINT8=11]="DT_QINT8",n[n.DT_QUINT8=12]="DT_QUINT8",n[n.DT_QINT32=13]="DT_QINT32",n[n.DT_BFLOAT16=14]="DT_BFLOAT16",n[n.DT_QINT16=15]="DT_QINT16",n[n.DT_QUINT16=16]="DT_QUINT16",n[n.DT_UINT16=17]="DT_UINT16",n[n.DT_COMPLEX128=18]="DT_COMPLEX128",n[n.DT_HALF=19]="DT_HALF",n[n.DT_RESOURCE=20]="DT_RESOURCE",n[n.DT_VARIANT=21]="DT_VARIANT",n[n.DT_UINT32=22]="DT_UINT32",n[n.DT_UINT64=23]="DT_UINT64",n[n.DT_FLOAT_REF=101]="DT_FLOAT_REF",n[n.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",n[n.DT_INT32_REF=103]="DT_INT32_REF",n[n.DT_UINT8_REF=104]="DT_UINT8_REF",n[n.DT_INT16_REF=105]="DT_INT16_REF",n[n.DT_INT8_REF=106]="DT_INT8_REF",n[n.DT_STRING_REF=107]="DT_STRING_REF",n[n.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",n[n.DT_INT64_REF=109]="DT_INT64_REF",n[n.DT_BOOL_REF=110]="DT_BOOL_REF",n[n.DT_QINT8_REF=111]="DT_QINT8_REF",n[n.DT_QUINT8_REF=112]="DT_QUINT8_REF",n[n.DT_QINT32_REF=113]="DT_QINT32_REF",n[n.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",n[n.DT_QINT16_REF=115]="DT_QINT16_REF",n[n.DT_QUINT16_REF=116]="DT_QUINT16_REF",n[n.DT_UINT16_REF=117]="DT_UINT16_REF",n[n.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",n[n.DT_HALF_REF=119]="DT_HALF_REF",n[n.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",n[n.DT_VARIANT_REF=121]="DT_VARIANT_REF",n[n.DT_UINT32_REF=122]="DT_UINT32_REF",n[n.DT_UINT64_REF=123]="DT_UINT64_REF"})(m1||(m1={}));var g1;(function(n){(function(e){e[e.LEGACY=0]="LEGACY",e[e.V1=1]="V1",e[e.V2=2]="V2"})(n.CheckpointFormatVersion||(n.CheckpointFormatVersion={}))})(g1||(g1={}));var x1;(function(n){n[n.FAIL=0]="FAIL",n[n.SHORTEST=1]="SHORTEST",n[n.LONGEST=2]="LONGEST"})(x1||(x1={}));function Ce(n,e){Array.isArray(n)||(n=[n]),n.forEach(t=>{t!=null&&_(t.dtype!=="complex64",()=>`${e} does not support complex64 tensors in the CPU backend.`)})}const CD=Fg;class qc extends Du{nextDataId(){return qc.nextDataId++}constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new Ff(this,ls())}write(e,t,s){this.firstUse&&(this.firstUse=!1,J().get("IS_NODE")&&Rn(`
============================
Hi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details. 
============================`));const r={id:this.nextDataId()};return this.data.set(r,{values:e,dtype:s,refCount:1}),r}makeTensorInfo(e,t,s){let r;if(t==="string"&&s!=null&&s.length>0&&qo(s[0])){const o=s.map(i=>js(i));r=this.write(o,e,t)}else r=this.write(s,e,t);return{dataId:r,shape:e,dtype:t}}refCount(e){return this.data.has(e)?this.data.get(e).refCount:0}incRef(e){const t=this.data.get(e);t.refCount++}decRef(e){if(this.data.has(e)){const t=this.data.get(e);t.refCount--}}move(e,t,s,r,o){this.data.set(e,{values:t,dtype:r,refCount:o})}numDataIds(){return this.data.numDataIds()}async read(e){return this.readSync(e)}readSync(e){const{dtype:t,complexTensorInfos:s}=this.data.get(e);if(t==="complex64"){const r=this.readSync(s.real.dataId),o=this.readSync(s.imag.dataId);return Ps(r,o)}return Qv(this.data.get(e).values,t)}bufferSync(e){const t=this.readSync(e.dataId);if(e.dtype==="string")try{const s=t.map(r=>Ks(r));return Ve(e.shape,e.dtype,s)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return Ve(e.shape,e.dtype,t)}makeOutput(e,t,s){return ls().makeTensorFromTensorInfo(this.makeTensorInfo(t,s,e),this)}disposeData(e,t=!1){if(this.data.has(e)){if(this.data.get(e).refCount--,!t&&this.data.get(e).refCount>0)return!1;const{complexTensorInfos:s}=this.data.get(e);s!=null&&(this.disposeData(s.real.dataId,!0),this.disposeData(s.imag.dataId,!0)),this.data.delete(e)}return!0}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}async time(e){const t=pn();return e(),{kernelMs:pn()-t}}memory(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}}where(e){Ce([e],"where");const t=this.readSync(e.dataId);return CD(e.shape,t)}dispose(){}floatPrecision(){return 32}epsilon(){return super.epsilon()}}qc.nextDataId=0;function b1(n){const e=new Float32Array(n.length);for(let t=0;t<n.length;++t)e[t]=Math.abs(n[t]);return e}const kD={kernelName:Xa,backendName:"cpu",kernelFunc:n=>{const{x:e}=n.inputs,t=n.backend;Ce(e,"abs");let s=new Float32Array(ne(e.shape));const r=t.data.get(e.dataId).values;return s=b1(r),t.makeOutput(s,e.shape,e.dtype)}};function Rt(n){return(e,t,s,r,o)=>{const i=Oe(e,t),a=i.length,l=Ie(i),c=ne(i),u=Zt(o,c),h=e.length,d=t.length,f=Ie(e),g=Ie(t),x=wo(e,i),b=wo(t,i);if(x.length+b.length===0)for(let y=0;y<u.length;++y)u[y]=n(s[y%s.length],r[y%r.length]);else for(let y=0;y<u.length;++y){const w=co(y,a,l),$=w.slice(-h);x.forEach(F=>$[F]=0);const C=as($,h,f),N=w.slice(-d);b.forEach(F=>N[F]=0);const E=as(N,d,g);u[y]=n(s[C],r[E])}return[u,i]}}function In(n){const{inputs:e,backend:t}=n,{real:s,imag:r}=e,o=t.data.get(s.dataId).values,i=t.data.get(r.dataId).values,a=t.makeTensorInfo(s.shape,"complex64"),l=t.data.get(a.dataId);return l.complexTensorInfos={real:t.makeTensorInfo(s.shape,"float32",o),imag:t.makeTensorInfo(r.shape,"float32",i)},a}const $D={kernelName:Yu,backendName:"cpu",kernelFunc:In};function Xc(n,e,t="float32"){if(t==="complex64"){const r=Xc(n,e,"float32"),o=Xc(n,e,"float32");return In({inputs:{real:r,imag:o},backend:n})}const s=Jt(ne(e),t);return n.makeTensorInfo(e,t,s)}function vs(n){const{inputs:e,backend:t}=n,{x:s}=e;return t.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const ID={kernelName:mi,backendName:"cpu",kernelFunc:vs};function Br(n){const{inputs:e,backend:t}=n,{input:s}=e,r=t.data.get(s.dataId).complexTensorInfos.real,o=t.data.get(r.dataId).values;return t.makeTensorInfo(r.shape,r.dtype,o)}const SD={kernelName:Ch,backendName:"cpu",kernelFunc:Br};function y1(n,e,t,s){if(s==="int32"){const r=Int32Array.from(n);return[e,"int32",r]}if(s==="bool"){const r=br([0],t),[o,i]=Rt((a,l)=>a!==l?1:0)(e,[],n,r,"bool");return[i,"bool",o]}throw new Error(`Error in Cast: failed to cast ${t} to ${s}`)}function lr(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{dtype:o}=s;if(o==="complex64"){if(r.dtype==="complex64")return vs({inputs:{x:r},backend:t});const u=Xc(t,r.shape,r.dtype),h=lr({inputs:{x:r},backend:t,attrs:{dtype:"float32"}}),d=In({inputs:{real:h,imag:u},backend:t});return t.disposeIntermediateTensorInfo(u),t.disposeIntermediateTensorInfo(h),d}if(r.dtype==="complex64"){const u=Br({inputs:{input:r},backend:t}),h=lr({inputs:{x:u},backend:t,attrs:{dtype:o}});return t.disposeIntermediateTensorInfo(u),h}if(!Mf(r.dtype,o)){const u=vs({inputs:{x:r},backend:t});return{dataId:u.dataId,shape:u.shape,dtype:o}}const i=t.data.get(r.dataId).values,[a,l,c]=y1(i,r.shape,r.dtype,o);return t.makeTensorInfo(a,l,c)}const ND={kernelName:ni,backendName:"cpu",kernelFunc:lr};function Bt(n,e,t,s){return t==null?({inputs:r,backend:o})=>{const{a:i,b:a}=r,l=o;Ce([i,a],n);const c=l.data.get(i.dataId).values,u=l.data.get(a.dataId).values,h=i.dtype==="string"?Ls(c):c,d=i.dtype==="string"?Ls(u):u,f=s||i.dtype,[g,x]=e(i.shape,a.shape,h,d,f);return l.makeTensorInfo(x,f,g)}:({inputs:r,backend:o})=>{const{a:i,b:a}=r,l=o;if(i.dtype==="complex64"||a.dtype==="complex64"){const c=lr({inputs:{x:i},backend:l,attrs:{dtype:"complex64"}}),u=l.data.get(c.dataId),h=u.complexTensorInfos.real,d=u.complexTensorInfos.imag,f=l.data.get(h.dataId).values,g=l.data.get(d.dataId).values,x=lr({inputs:{x:a},backend:l,attrs:{dtype:"complex64"}}),b=l.data.get(x.dataId),y=b.complexTensorInfos.real,w=b.complexTensorInfos.imag,$=l.data.get(y.dataId).values,C=l.data.get(w.dataId).values,[N,E,F]=t(i.shape,a.shape,f,g,$,C),O=l.makeTensorInfo(F,"float32",N),A=l.makeTensorInfo(F,"float32",E),D=In({inputs:{real:O,imag:A},backend:l});return l.disposeIntermediateTensorInfo(c),l.disposeIntermediateTensorInfo(x),l.disposeIntermediateTensorInfo(O),l.disposeIntermediateTensorInfo(A),D}else{const c=l.data.get(i.dataId).values,u=l.data.get(a.dataId).values,h=s||i.dtype,[d,f]=e(i.shape,a.shape,c,u,h);return l.makeTensorInfo(f,h,d)}}}function Pp(n){return(e,t,s,r,o,i)=>{const a=Oe(e,t),l=ne(a),c=a.length,u=Ie(a),h=Zt("float32",l),d=Zt("float32",l),f=wo(e,a),g=wo(t,a),x=Ps(s,r),b=Ps(o,i),y=e.length,w=Ie(e),$=t.length,C=Ie(t);if(f.length+g.length===0)for(let N=0;N<h.length;N++){const E=N%x.length,F=N%b.length,O=n(x[E*2],x[E*2+1],b[F*2],b[F*2+1]);h[N]=O.real,d[N]=O.imag}else for(let N=0;N<h.length;N++){const E=co(N,c,u),F=E.slice(-y);f.forEach(z=>F[z]=0);const O=as(F,y,w),A=E.slice(-$);g.forEach(z=>A[z]=0);const D=as(A,$,C),S=n(x[O*2],x[O*2+1],b[D*2],b[D*2+1]);h[N]=S.real,d[N]=S.imag}return[h,d,a]}}const w1=Rt(((n,e)=>n+e)),TD=Pp(((n,e,t,s)=>({real:n+t,imag:e+s}))),Do=Bt(uo,w1,TD),ED={kernelName:uo,backendName:"cpu",kernelFunc:Do};function Lp(n,e,t,s,r){const o=ne(s),i=Jt(r,t);for(let a=0;a<n.length;a++){const l=n[a];if(l<0)throw new Error("Input x must be non-negative!");l>=r||(o>0?i[l]+=e[a]:i[l]+=1)}return i}function v1(n,e,t,s=!1){const r=n.shape[0],o=n.shape[1],i=Ve([r,t],e.dtype);for(let a=0;a<r;a++)for(let l=0;l<o;l++){const c=n.get(a,l);if(c<0)throw new Error("Input x must be non-negative!");c>=t||(s?i.set(1,a,c):e.size>0?i.set(i.get(a,c)+e.get(a,l),a,c):i.set(i.get(a,c)+1,a,c))}return i}const C1=Rt(((n,e)=>n&e)),RD=Bt(Xu,C1),DD={kernelName:Xu,backendName:"cpu",kernelFunc:RD};function Cs(n){return(e,t,s)=>{const r=It(t,e.length);for(let o=0;o<e.length;++o)r[o]=n(e[o],s);return r}}function rt(n,e,t){const s=Cs(e);return cr(n,s,t)}function cr(n,e,t){return({inputs:s,attrs:r,backend:o})=>{const{x:i}=s;Ce(i,n);const a=o,l=a.data.get(i.dataId).values;let c;if(i.dtype==="string"){if(!Array.isArray(l))throw new Error("String tensor's value was not an instance of Array");c=Ls(l)}else c=l;const u=t||i.dtype,h=e(c,u,r);return a.makeTensorInfo(i.shape,u,h)}}const k1=Cs(n=>Math.ceil(n)),AD=cr(si,k1),_D={kernelName:si,backendName:"cpu",kernelFunc:AD};function $1(n,e,t,s){const r=It(t,ne(e));if(s&&t!=="string"){let o=0;n.forEach(i=>{const a=ne(i.shape);r.set(i.vals,o),o+=a})}else{let o=0;n.forEach(i=>{const a=t==="string"?Ls(i.vals):i.vals;let l=0;for(let c=0;c<i.shape[0];++c){const u=c*e[1]+o;for(let h=0;h<i.shape[1];++h)r[u+h]=a[l++]}o+=i.shape[1]})}return r}const I1=Rt((n,e)=>n===e?1:0),S1=Bt(ul,I1,null,"bool"),FD={kernelName:ul,backendName:"cpu",kernelFunc:S1};const N1=Cs(n=>Math.exp(n)),T1=cr(ui,N1,"float32"),OD={kernelName:ui,backendName:"cpu",kernelFunc:T1};const E1=Cs(n=>Math.expm1(n)),PD=cr(hi,E1),LD={kernelName:hi,backendName:"cpu",kernelFunc:PD};const R1=Cs(n=>Math.floor(n)),MD=cr(di,R1),zD={kernelName:di,backendName:"cpu",kernelFunc:MD};const D1=Rt((n,e)=>Math.floor(n/e)),BD=Bt(pi,D1,null,"int32"),VD={kernelName:pi,backendName:"cpu",kernelFunc:BD};function A1(n,e,t,s,r,o,i,a,l){const c=Ve([s,o],t);for(let u=0;u<s;u++){const h=[];let d=0;for(let f=0;f<r;f++){const g=n[u*r+f];d+=g*i[f],h.push(g)}if(d<0||d>=l/o)throw new Error(`Invalid indices: ${h} does not index into ${a}`);for(let f=0;f<o;f++)c.values[u*o+f]=e.get(...e.indexToLoc(d*o+f))}return c}function _1(n,e,t){const s=Ve(t,n.dtype);for(let r=0;r<s.size;++r){const i=s.indexToLoc(r).slice(),a=i[0],l=i[2],c=e.locToIndex([a,l]);i[2]=e.values[c];const u=n.locToIndex(i);0<=u&&u<n.values.length&&(s.values[r]=n.values[u])}return s}const F1=Rt((n,e)=>n>e?1:0),WD=Bt(fl,F1,null,"bool"),UD={kernelName:fl,backendName:"cpu",kernelFunc:WD};const O1=Rt((n,e)=>n>=e?1:0),GD=Bt(fi,O1,null,"bool"),HD={kernelName:fi,backendName:"cpu",kernelFunc:GD};const P1=Rt((n,e)=>n<e?1:0),jD=Bt(gl,P1,null,"bool"),KD={kernelName:gl,backendName:"cpu",kernelFunc:jD};const L1=Rt((n,e)=>n<=e?1:0),qD=Bt(xl,L1,null,"bool"),XD={kernelName:xl,backendName:"cpu",kernelFunc:qD};function M1(n,e,t){const s=(e-n)/(t-1),r=Jt(t,"float32");r[0]=n;for(let o=1;o<r.length;o++)r[o]=r[o-1]+s;return r}const z1=Cs(n=>Math.log(n)),YD=cr(yi,z1),ZD={kernelName:yi,backendName:"cpu",kernelFunc:YD};function B1(n,e,t,s){const r=Zt(s,ne(t));for(let o=0;o<r.length;++o){const i=o*e;let a=n[i];for(let l=0;l<e;++l){const c=n[i+l];(Number.isNaN(c)||c>a)&&(a=c)}r[o]=a}return r}const V1=Rt(((n,e)=>Math.max(n,e))),JD=Bt(vi,V1),QD={kernelName:vi,backendName:"cpu",kernelFunc:JD};const W1=Rt(((n,e)=>Math.min(n,e))),eA=Bt(Ci,W1),tA={kernelName:Ci,backendName:"cpu",kernelFunc:eA};const Mp=Rt(((n,e)=>n*e)),nA=Pp(((n,e,t,s)=>({real:n*t-e*s,imag:n*s+e*t}))),Yc=Bt($i,Mp,nA),sA={kernelName:$i,backendName:"cpu",kernelFunc:Yc};function U1(n,e,t){const s=Hs(-1,t);return Mp([],e,s,n,t)}function rA(n){const{inputs:e,backend:t}=n,{x:s}=e;Ce(s,"neg");const r=t.data.get(s.dataId).values,[o,i]=U1(r,s.shape,s.dtype);return t.makeTensorInfo(i,s.dtype,o)}const oA={kernelName:Tl,backendName:"cpu",kernelFunc:rA};const G1=Rt(((n,e)=>n!==e?1:0)),iA=Bt(El,G1,null,"bool"),aA={kernelName:El,backendName:"cpu",kernelFunc:iA};function zp(n,e,t,s,r){const o=e.length,i=ne(e),a=Ie(e),l=Ie(r),c=Zt(t,ne(r));for(let u=0;u<i;++u){const h=co(u,o,a),d=new Array(h.length);for(let g=0;g<d.length;g++)d[g]=h[s[g]];const f=as(d,o,l);c[f]=n[u]}return c}function yn(n){const{inputs:e,attrs:t,backend:s}=n,{x:r}=e,{perm:o}=t;Ce(r,"transpose");const i=r.shape.length,a=new Array(i);for(let h=0;h<a.length;h++)a[h]=r.shape[o[h]];const l=s.data.get(r.dataId).values,c=zp(l,r.shape,r.dtype,o,a);return{dataId:s.write(c,a,r.dtype),shape:a,dtype:r.dtype}}const lA={kernelName:ho,backendName:"cpu",kernelFunc:yn};function H1(n,e,t,s){const[r,o]=Ut(n,s),i=Cn(e,"int32"),a=Jt(ne(r),i),l=ne(o);for(let c=0;c<a.length;++c){const u=c*l;let h=1;for(let d=0;d<l;++d)h*=t[u+d];a[c]=h}return{outVals:a,outShape:r,outDtype:i}}function cA(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{axis:o,keepDims:i}=s;Ce(r,"prod");const a=r.shape.length,l=Be(o,r.shape),c=wt(l,a);let u=l,h=r;const d=[];c!=null&&(h=yn({inputs:{x:r},backend:t,attrs:{perm:c}}),d.push(h),u=Nt(u.length,a));const f=t.data.get(h.dataId).values,{outVals:g,outShape:x,outDtype:b}=H1(h.shape,h.dtype,f,u);let y=x;return i&&(y=At(x,l)),d.forEach(w=>t.disposeIntermediateTensorInfo(w)),t.makeTensorInfo(y,b,g)}const uA={kernelName:Ol,backendName:"cpu",kernelFunc:cA};function hA(n,e,t){n.forEach((s,r)=>{if(s<0||s>=t){const o=co(r,e.length,Ie(e)).join(",");throw new Error(`indices[${o}] = ${s} is not in [0, ${t})`)}})}function dA(n,e){for(let t=0;t<n.length;++t){const s=n[t],r=t===n.length-1?e:n[t+1].length;if(s.length===0)throw new Error("Ragged splits may not be empty");if(s[0]<0)throw new Error("Ragged splits must be non-negative");if(s[s.length-1]>r)throw new Error("Ragged splits must not point past values");for(let o=1;o<s.length;++o)if(s[o-1]>s[o])throw new Error("Ragged splits must be sorted in ascending order")}}function pA(n,e,t,s){const r=[];let o=0;const i=e.length-1+t.length,a=new Array(i).fill(null).map(()=>[0]);dA(t,s);let l=1;for(let c=0;c<e.length-1;++c){l*=e[c];const u=e[c+1];for(let h=1;h<l+1;++h)a[c].push(h*u)}for(let c=0;c<n.length;++c){let u=n[c],h=n[c]+1;for(let d=0;d<t.length;++d){const f=t[d],g=d+e.length-1;if(g>=0){const x=a[g],b=x[x.length-1]-f[u];for(let y=u;y<h;++y)a[g].push(f[y+1]+b)}u=f[u],h=f[h]}h!==u&&(r.push([u,h]),o+=h-u)}return{outSplits:a,valueSlices:r,numValues:o}}function fA(n){const e=[];for(let t=0;t<n.length;++t){const s=n[t].length,r=It("int32",s);e.push(r),n[t].forEach((o,i)=>r[i]=o)}return e}function j1(n,e){const t=n.slice(0,e);for(;t.length<e;)t.push(1);for(let s=e;s<n.length;s++)t[e-1]*=n[s];return t}function mA(n,e,t,s,r,o){const i=j1(e,2)[1],a=j1(o,2)[1];let l=0;for(const c of t)for(let u=c[0];u<c[1];++u){for(let h=0;h<s;++h)r[l*a+h]=n[u*i+h];++l}}function gA(n,e,t,s,r){const o=e.slice();o[0]=r;const i=It(t,ne(o)),a=n.length,l=a===0?0:a/e[0];return mA(n,e,s,l,i,o),[i,o]}function K1(n,e,t,s,r,o,i,a){if(n.length===0)throw new Error("paramsNestedSplits must be non empty");if(e[0].length===0)throw new Error("Split tensors must not be scalars");const l=e[0][0]-1;if(hA(o,i,l),s.length===0)throw new Error("params.rank must be nonzero");const c=s[0],{outSplits:u,valueSlices:h,numValues:d}=pA(o,i,n,c),f=fA(u),g=gA(t,s,r,h,d);return[f,g[0],g[1]]}const q1=2147483647;function X1(n,e,t,s,r,o,i){if(e.length>1)throw new Error("starts must be a scalar or vector");if(r.length>1)throw new Error("limits must be a scalar or vector");if(i.length>1)throw new Error("deltas must be a scalar or vector");const a=e.length===0,l=r.length===0,c=i.length===0,u=[];a||u.push(e[0]),l||u.push(r[0]),c||u.push(i[0]);for(let b=1;b<u.length;++b)if(u[b]!==u[b-1])throw new Error("starts, limits, and deltas must have the same shape");const h=u.length===0?1:u[0],d=It("int32",h+1);d[0]=0;for(let b=0;b<h;++b){const y=a?n[0]:n[b],w=l?s[0]:s[b],$=c?o[0]:o[b];if($===0)throw new Error("Requires delta != 0");let C;if($>0&&w<y||$<0&&w>y)C=0;else if(C=Math.ceil(Math.abs((w-y)/$)),C>q1)throw new Error(`Requires ((limit - start) / delta) <= ${q1}`);d[b+1]=d[b]+C}const f=d[h],g=It(t,f);let x=0;for(let b=0;b<h;++b){const y=d[b+1]-d[b];let w=a?n[0]:n[b];const $=c?o[0]:o[b];for(let C=0;C<y;++C)g[x++]=w,w+=$}return[d,g]}var Gn=Zn;class Zc{constructor(e,t,s,r,o,i,a,l,c,u){this.shape=e,this.shapeShape=t,this.values=s,this.valuesShape=r,this.valuesDType=o,this.defaultValue=i,this.defaultValueShape=a,this.rowPartitionValues=l,this.rowPartitionValuesShapes=c,this.rowPartitionTypes=ex(u),this.raggedRank=tx(this.rowPartitionTypes)}getRowPartitionTypeByDimension(e){return this.rowPartitionTypes[0]===Gn.FIRST_DIM_SIZE?this.rowPartitionTypes[e+1]:this.rowPartitionTypes[e]}getRowPartitionTensor(e){return this.rowPartitionTypes[0]===Gn.FIRST_DIM_SIZE?this.rowPartitionValues[e+1]:this.rowPartitionValues[e]}getMaxWidth(e){const t=this.getRowPartitionTensor(e-1);switch(this.getRowPartitionTypeByDimension(e-1)){case Gn.VALUE_ROWIDS:return Zc.getMaxWidthValueRowID(t);case Gn.ROW_SPLITS:return Zc.getMaxWidthRowSplit(t);default:throw new Error(`Cannot handle partition type ${Gn[this.getRowPartitionTypeByDimension(e-1)]}`)}}static getMaxWidthRowSplit(e){const t=e.length;if(t===0||t===1)return 0;let s=0;for(let r=0;r<t-1;++r){const o=e[r+1]-e[r];o>s&&(s=o)}return s}static getMaxWidthValueRowID(e){const t=e.length;if(t===0)return 0;let s=0,r=e[0],o=0;for(let i=1;i<t;++i){const a=e[i];a!==r&&(r=a,o=Math.max(i-s,o),s=i)}return Math.max(t-s,o)}tensorShapeFromTensor(e,t,s=!0){if(t.length===0){if(e[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return Z1(e,s)}calculateOutputSize(e){const t=this.valuesShape,s=this.defaultValueShape;nx(s,t);const r=this.tensorShapeFromTensor(this.shape,this.shapeShape),i=Qg(this.raggedRank,r,t);i[0]<0&&(i[0]=e);for(let a=1;a<=this.raggedRank;++a)i[a]<0&&(i[a]=this.getMaxWidth(a));return i}calculateFirstParentOutputIndex(e,t,s){const r=Math.min(e,s),o=[];let i=0;for(let a=0;a<r;++a,i+=t)o.push(i);for(let a=r;a<e;++a)o.push(-1);return _(o.length===e,()=>"Final length of result must be equal to firstDimension."),o}calculateOutputIndexRowSplit(e,t,s,r){const o=e.length,i=[];for(let a=0;a<o-1;++a){const l=e[a+1]-e[a];let c=Math.min(r,l),u=t[a];u===-1&&(c=0);for(let h=0;h<c;++h)i.push(u),u+=s;for(let h=0;h<l-c;++h)i.push(-1)}if(o>0&&i.length!==e[o-1])throw new Error("Invalid row split size.");return i}calculateOutputIndexValueRowID(e,t,s,r){const o=e.length,i=[];if(o===0)return[];let a=0,l=e[0];if(l>=t.length)throw new Error(`Got currentValueRowId=${l}, which is not less than ${t.length}`);let c=t[l];i.push(c);for(let u=1;u<o;++u){const h=e[u];if(h===l)c>=0&&(++a,a<r?c+=s:c=-1);else{if(a=0,l=h,h>=t.length)throw new Error(`Got nextValueRowId=${h} which is not less than ${t.length}`);c=t[h]}i.push(c)}if(i.length!==e.length)throw new Error("Invalid row ids.");return i}calculateOutputIndex(e,t,s,r){const o=this.getRowPartitionTensor(e),i=this.getRowPartitionTypeByDimension(e);switch(i){case Gn.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(o,t,s,r);case Gn.ROW_SPLITS:if(o.length-1>t.length)throw new Error(`Row partition size is greater than output size: ${o.length-1} > ${t.length}`);return this.calculateOutputIndexRowSplit(o,t,s,r);default:throw new Error(`Unsupported partition type: ${Gn[i]}`)}}getFirstDimensionSize(){const e=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");const t=this.rowPartitionTypes[0];switch(t){case Gn.FIRST_DIM_SIZE:return e[0];case Gn.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case Gn.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${Gn[t]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");const t=this.getFirstDimensionSize(),s=this.calculateOutputSize(t),r=new Array(this.raggedRank+1);r[r.length-1]=1;for(let l=r.length-2;l>=0;--l)r[l]=r[l+1]*s[l+1];const o=Z1(s,!1),i=It(this.valuesDType,ne(o));if(r[0]*s[0]>0){let l=this.calculateFirstParentOutputIndex(t,r[0],s[0]);for(let c=1;c<=this.raggedRank;++c)l=this.calculateOutputIndex(c-1,l,r[c],s[c]);this.setOutput(this.raggedRank,l,i,o)}return[o,i]}setOutput(e,t,s,r){if(s.length===0)return;const o=this.values,i=s;let a=r.slice();a=a.slice(e+1);const l=ne(a),c=t.length;let u=this.defaultValue;if(u.length!==l&&u.length!==1){const g=this.defaultValueShape;Y(()=>{const x=H(u,g);u=Zi(x,a).dataSync()})}let h=0,d=0,f=0;for(let g=0;g<=c;++g){let x=g<c?t[g]:-1;if(x===f){++f;continue}if(d<f){const b=o.subarray(h*l),y=i.subarray(d*l),w=(f-d)*l;Y1(y,b,w)}if(g>=c){const b=s.length;x=Math.floor(b/l)}if(x>f)if(this.defaultValue.length===1)i.subarray(f*l,x*l).fill(this.defaultValue[0]),f=x;else for(;x>f;){const b=i.slice(f*l);Y1(b,u,l),++f}x<0?(h=g+1,d=f):(h=g,d=f,f=d+1)}}}function Y1(n,e,t){for(let s=0;s<t;s++)n[s]=e[s]}function Z1(n,e){const t=[];for(let s of n){if(s<0){if(!e)throw new Error(`Dimension ${s} must be >= 0`);if(s<-1)throw new Error(`Dimension ${s} must be >= -1`);s=-1}t.push(s)}return t}function J1(n,e,t,s,r,o,i,a,l,c){return new Zc(n,e,t,s,r,o,i,a,l,c).compute()}function Q1(n,e,t,s){const r=n===e,o=n<e&&t<0,i=e<n&&t>1;if(r||o||i)return Jt(0,s);const a=Math.abs(Math.ceil((e-n)/t)),l=Jt(a,s);e<n&&t===1&&(t=-1),l[0]=n;for(let c=1;c<l.length;c++)l[c]=l[c-1]+t;return l}const ey=Cs(n=>1/Math.sqrt(n)),xA=cr(Ri,ey),bA={kernelName:Ri,backendName:"cpu",kernelFunc:xA};function Vr(n,e,t,s,r,o,i,a,l,c){const u=[s/r,r],h=n.values,d=e.values;if(s===0)return Ve(t,e.dtype);const f=l instanceof jt?l:Ve(u,e.dtype);typeof l=="string"||typeof l=="number"?f.values.fill(l):typeof l=="boolean"&&f.values.fill(+l);for(let g=0;g<o;g++){const x=[];let b=0;for(let y=0;y<i;y++){const w=h[g*i+y];x.push(w),b+=w*a[y]}if(b<0||b>=s/r)throw new Error(`Invalid indices: ${x} does not index into ${t}`);for(let y=0;y<r;y++)c?f.values[b*r+y]+=d[g*r+y]:f.values[b*r+y]=e.rank===0?d[0]:d[g*r+y]}return f}const yA=Cs(n=>1/(1+Math.exp(-n))),ty=rt(Oi,n=>1/(1+Math.exp(-n))),wA={kernelName:Oi,backendName:"cpu",kernelFunc:ty};function ny(n,e,t,s,r){const o=qg(s,e,t),i=ne(t),a=Ie(s);if(o){const h=Xg(e,a);return r==="string"?n.slice(h,h+i):n.subarray(h,h+i)}const l=r==="string"?Ls(n):n,c=Ve(s,r,l),u=Ve(t,r);for(let h=0;h<u.size;++h){const d=u.indexToLoc(h),f=d.map((g,x)=>g+e[x]);u.set(c.get(...f),...d)}return r==="string"?kx(u.values):u.values}function Wr(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{begin:o,size:i}=s;Ce(r,"slice");const[a,l]=Dd(r,o,i);jg(r,a,l);const c=t.data.get(r.dataId).values,u=ny(c,a,l,r.shape,r.dtype);return t.makeTensorInfo(l,r.dtype,u)}const vA={kernelName:Vl,backendName:"cpu",kernelFunc:Wr};function sy(n,e,t,s,r,o,i){const a=e[0],l=o[0],c=new Array(l),u=new Array(a),h=e[1];if(l===0){if(a!==0)throw new Error(hx(a));const b=It(t,0),y=It(r,0);return[b,[0,h],y,c,u]}let d=!0,f=0;const g=new Array(l).fill(0);for(let b=0;b<a;++b){const y=n[b*h];if(y<0)throw new Error(dx(b,y));if(y>=l)throw new Error(px(b,y,l));++g[y],d=d&&y>=f,f=y}let x=!0;for(let b=0;b<l;++b){const y=g[b]===0;c[b]=y,x=x&&!y,g[b]=Math.max(g[b],1),b>0&&(g[b]+=g[b-1])}if(x&&d){const b=n,y=s;for(let w=0;w<a;++w)u[w]=w;return[b,[a,h],y,c,u]}else{const b=g[l-1],y=It(t,b*h),w=It(r,b),$=new Array(l).fill(0);for(let C=0;C<a;++C){const N=n[C*h],E=$[N],F=(N===0?0:g[N-1])+E;$[N]++;for(let O=0;O<h;++O)y[F*h+O]=n[C*h+O];w[F]=s[C],u[C]=F}for(let C=0;C<l;++C)if($[C]===0){const E=C===0?0:g[C-1];y[E*h+0]=C;for(let F=1;F<h;++F)y[E*h+F]=0;w[E]=i}return[y,[b,h],w,c,u]}}function ry(n,e,t,s,r){const o=ne(s),i=e[0],a=r.length,l=[];let c=1,u=-1;for(let b=0;b<a;++b){const y=r[b];if(y===-1){if(u!==-1)throw new Error(fx(u,b));u=b,l.push(1)}else{if(y<0)throw new Error(mx(b,y));c*=y,l.push(y)}}if(u!==-1){if(c<=0)throw new Error(gx());const b=Math.trunc(o/c);if(c*b!==o)throw new Error(xx(s,l));l[u]=b}if(ne(l)!==o)throw new Error(bx(s,l));const d=s.length,f=[];if(d>0){f[d-1]=1;for(let b=d-2;b>=0;--b)f[b]=f[b+1]*s[b+1]}const g=[];if(a>0){g[a-1]=1;for(let b=a-2;b>=0;--b)g[b]=g[b+1]*l[b+1]}const x=It(t,i*a);for(let b=0;b<i;++b){let y=0;for(let w=0;w<d;++w)y+=n[b*d+w]*f[w];for(let w=0;w<a;++w)x[b*a+w]=Math.trunc(y/g[w]),y%=g[w]}return[x,[i,a],l]}function Bp(n,e,t,s,r,o=!1,i=0){const a=s.length,l=[e[0],n.length/e[0]],c=l[1],h=a>0?r[a-1]+1:0;if(h<0)throw new Error(Zd());const d=e.slice();d[0]=h;const f=d.reduce(($,C)=>$*C,1),g=It(t,f);if(a===0)return h>0&&g.fill(i),[g,d];if(h<=0)throw new Error(Zd());let x=0,b=1,y=0,w=r[x];for(;;){let $=0;if(b<a){if($=r[b],w===$){++b;continue}if(w>=$)throw new Error(yx())}if(w<0||w>=h)throw new Error(wx(w,h));w>y&&g.fill(i,y*c,w*c);for(let C=x;C<b;++C){const N=s[C];if(N<0||N>=l[0])throw new Error(vx(C,s[C],l[0]));for(let E=0;E<c;E++)g[w*c+E]+=n[N*c+E]}if(o)for(let C=0;C<c;C++)g[w*c+C]/=b-x;if(x=b,++b,y=w+1,w=$,b>a)break}return y<h&&g.fill(i,y*c,h*c),[g,d]}const CA=Cs(n=>Math.sqrt(n)),kA=rt(Li,n=>Math.sqrt(n)),$A={kernelName:Li,backendName:"cpu",kernelFunc:kA};const oy=Rt(((n,e)=>{const t=n-e;return t*t})),IA=Bt(Mi,oy),SA={kernelName:Mi,backendName:"cpu",kernelFunc:IA};const iy=Cs((n,e)=>{const{pattern:t,replaceGlobal:s,rewrite:r}=e;return n.replace(new RegExp(t,s?"g":""),r)}),NA=cr(Sh,iy),TA={kernelName:Sh,backendName:"cpu",kernelFunc:NA};function ay(n,e,t,s){const r=Ve(n,e.dtype);for(let o=0;o<r.size;o++){const i=r.indexToLoc(o),a=new Array(i.length);for(let l=0;l<a.length;l++)a[l]=i[l]*t[l]+s[l];r.set(e.get(...a),...i)}return r}class EA{constructor(e,t,s,r,o,i){this.separator=js(e),this.nGramWidths=t,this.leftPad=js(s),this.rightPad=js(r),this.padWidth=o,this.preserveShort=i}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,t){const s=this.getPadWidth(t);return Math.max(0,e+2*s-t+1)}createNGrams(e,t,s,r,o,i){for(let a=0;a<o;++a){const l=this.getPadWidth(i),c=Math.max(0,l-a),u=Math.max(0,l-(o-(a+1))),h=i-(c+u),d=t+(c>0?0:a-l);let f=0;f+=c*this.leftPad.length;for(let w=0;w<h;++w)f+=e[d+w].length;f+=u*this.rightPad.length;const g=c+u+h-1;f+=g*this.separator.length,s[r+a]=new Uint8Array(f);const x=s[r+a];let b=0;const y=w=>w.forEach($=>x[b++]=$);for(let w=0;w<c;++w)y(this.leftPad),y(this.separator);for(let w=0;w<h-1;++w)y(e[d+w]),y(this.separator);if(h>0){y(e[d+h-1]);for(let w=0;w<u;++w)y(this.separator),y(this.rightPad)}else{for(let w=0;w<u-1;++w)y(this.rightPad),y(this.separator);y(this.rightPad)}}}compute(e,t){const s=e.length,r=t.length;if(r>0){let l=t[0];if(l!==0)throw new Error(`First split value must be 0, got ${l}`);for(let c=1;c<r;++c){let u=t[c]>=l;if(u=u&&t[c]<=s,!u)throw new Error(`Invalid split value ${t[c]}, must be in [${l}, ${s}]`);l=t[c]}if(l!==s)throw new Error(`Last split value must be data size. Expected ${s}, got ${l}`)}const o=r-1,i=It("int32",r);if(s===0||r===0){const l=new Array(s);for(let c=0;c<=o;++c)i[c]=0;return[l,i]}i[0]=0;for(let l=1;l<=o;++l){const c=t[l]-t[l-1];let u=0;this.nGramWidths.forEach(h=>{u+=this.getNumNGrams(c,h)}),this.preserveShort&&c>0&&u===0&&(u=1),i[l]=i[l-1]+u}const a=new Array(i[o]);for(let l=0;l<o;++l){const c=t[l];let u=i[l];if(this.nGramWidths.forEach(h=>{const d=t[l+1]-t[l],f=this.getNumNGrams(d,h);this.createNGrams(e,c,a,u,f,h),u+=f}),this.preserveShort&&u===i[l]){const h=t[l+1]-t[l];if(h===0)continue;const d=h+2*this.padWidth;this.createNGrams(e,c,a,u,1,d)}}return[a,i]}}function ly(n,e,t,s,r,o,i,a){return new EA(t,s,r,o,i,a).compute(n,e)}function RA(n,e,t,s){if(!n.length)return;if(e.length===0){for(let o=0;o<n.length;++o)s.push(n.subarray(o,o+1));return}if(e.length===1){const o=e[0];let i=n.indexOf(o);for(;i!==-1;){const a=n.subarray(0,i);(!t||a.length!==0)&&s.push(a),n=n.subarray(i+1),i=n.indexOf(o)}(!t||n.length!==0)&&s.push(n);return}let r=0;for(let o=0;o<n.length+1;o++)if(o===n.length||e.indexOf(n[o])!==-1){const i=n.subarray(r,o);(!t||i.length!==0)&&s.push(i),r=o+1}}function cy(n,e,t){const s=n.length,r=[];let o=0,i=0;const a=new Array(s);for(let d=0;d<s;++d){const f=r.length;RA(n[d],e,t,r);const g=r.length-f;a[d]=g,o+=g,i=Math.max(i,g)}const l=It("int32",o*2),c=new Array(o),u=[s,i];let h=0;for(let d=0;d<s;++d)for(let f=0;f<a[d];++f)l[h*2]=d,l[h*2+1]=f,c[h]=r[h],++h;return[l,c,u]}function uy(n,e){const t=It("int32",n.length);for(let s=0;s<n.length;++s)t[s]=yC(n[s]).modulo(e).getLowBitsUnsigned();return t}const hy=Rt(((n,e)=>n-e)),DA=Pp(((n,e,t,s)=>({real:n-t,imag:e-s}))),Vp=Bt(zi,hy,DA),AA={kernelName:zi,backendName:"cpu",kernelFunc:Vp};function dy(n,e){const t=new Array(n.rank);for(let r=0;r<t.length;r++)t[r]=n.shape[r]*e[r];const s=Ve(t,n.dtype);for(let r=0;r<s.values.length;++r){const o=s.indexToLoc(r),i=new Array(n.rank);for(let l=0;l<i.length;l++)i[l]=o[l]%n.shape[l];const a=n.locToIndex(i);s.values[r]=n.values[a]}return s}const $a=(n,e)=>{const t=e.value-n.value;return t===0?n.index-e.index:t};function py(n,e,t=0,s=n.length-1){for(;s>t;){if(s-t>600){const a=s-t+1,l=e-t+1,c=Math.log(a),u=.5*Math.exp(2*c/3),h=.5*Math.sqrt(c*u*(a-u)/a)*Math.sign(l-a/2),d=Math.max(t,Math.floor(e-l*u/a+h)),f=Math.min(s,Math.floor(e+(a-l)*u/a+h));py(n,e,d,f)}const r=n[e];let o=t,i=s;for(oo(n,t,e),$a(n[s],r)>0&&oo(n,t,s);o<i;){for(oo(n,o,i),o++,i--;$a(n[o],r)<0;)o=o+1;for(;$a(n[i],r)>0;)i=i-1}$a(n[t],r)===0?oo(n,t,i):(i=i+1,oo(n,i,s)),i<=e&&(t=i+1),e<=i&&(s=i-1)}}function fy(n,e,t,s,r){const o=e[e.length-1],[i,a]=[n.length/o,o],l=Zt(t,i*s),c=Zt("int32",i*s);for(let h=0;h<i;h++){const d=h*a,f=n.subarray(d,d+a);let g=new Array(f.length);f.forEach((w,$)=>g[$]={value:w,index:$}),s<g.length&&(py(g,s),g=g.slice(0,s)),r&&g.sort($a);const x=h*s,b=l.subarray(x,x+s),y=c.subarray(x,x+s);for(let w=0;w<s;w++)b[w]=g[w].value,y[w]=g[w].index}const u=e.slice();return u[u.length-1]=s,[Ve(u,t,l),Ve(u,"int32",c)]}function my(n,e,t,s){const r=Be(e,t)[0],o=[1,t[0],1];for(let g=0;g<r;g++)o[0]*=t[g];o[1]=t[r];for(let g=r+1;g<t.length;g++)o[2]*=t[g];const i=new Map,a=new Int32Array(t[r]),l=new jt(o,s,n),c=[],u=o[0]===1&&o[2]===1;for(let g=0;g<t[r];g++){let x;if(u)x=n[g].toString();else{const y=[];for(let w=0;w<o[0];w++)for(let $=0;$<o[2];$++)y.push(l.get(w,g,$));x=y.join(",")}const b=i.get(x);if(b!=null)a[g]=b;else{const y=i.size;i.set(x,y),a[g]=y,c.push(g)}}const h=o.slice();h[1]=i.size;const d=new jt(h,s);c.forEach((g,x)=>{for(let b=0;b<o[0];b++)for(let y=0;y<o[2];y++)d.set(l.get(b,g,y),b,x,y)});const f=t.slice();return f[r]=h[1],{outputValues:d.values,outputShape:f,indices:a}}var _A=Object.freeze({__proto__:null,addImpl:w1,bincountImpl:Lp,bincountReduceImpl:v1,bitwiseAndImpl:C1,castImpl:y1,ceilImpl:k1,concatImpl:$1,equalImpl:I1,expImpl:N1,expm1Impl:E1,floorDivImpl:D1,floorImpl:R1,gatherNdImpl:A1,gatherV2Impl:_1,greaterEqualImpl:O1,greaterImpl:F1,lessEqualImpl:L1,lessImpl:P1,linSpaceImpl:M1,logImpl:z1,maxImpl:B1,maximumImpl:V1,minimumImpl:W1,multiplyImpl:Mp,negImpl:U1,notEqualImpl:G1,prodImpl:H1,raggedGatherImpl:K1,raggedRangeImpl:X1,raggedTensorToTensorImpl:J1,rangeImpl:Q1,rsqrtImpl:ey,scatterImpl:Vr,sigmoidImpl:yA,simpleAbsImpl:b1,sliceImpl:ny,sparseFillEmptyRowsImpl:sy,sparseReshapeImpl:ry,sparseSegmentReductionImpl:Bp,sqrtImpl:CA,squaredDifferenceImpl:oy,staticRegexReplaceImpl:iy,stridedSliceImpl:ay,stringNGramsImpl:ly,stringSplitImpl:cy,stringToHashBucketFastImpl:uy,subImpl:hy,tileImpl:dy,topKImpl:fy,transposeImpl:zp,uniqueImpl:my});zm("cpu",()=>new qc,1);const gy=rt(li,n=>n>=0?n:Math.exp(n)-1),FA={kernelName:li,backendName:"cpu",kernelFunc:gy};function xy(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{alpha:o}=s;Ce([r],"leakyRelu");const i=ne(r.shape),a=t.data.get(r.dataId).values,l=Zt("float32",i);for(let c=0;c<a.length;c++)l[c]=a[c]<0?o*a[c]:a[c];return t.makeTensorInfo(r.shape,"float32",l)}const OA={kernelName:ml,backendName:"cpu",kernelFunc:xy};const PA=Rt((n,e)=>n<0?e*n:n);function by(n){const{inputs:e,backend:t}=n,{x:s,alpha:r}=e;Ce([s,r],"prelu");const o=t.data.get(s.dataId).values,i=t.data.get(r.dataId).values,[a,l]=PA(s.shape,r.shape,o,i,"float32");return t.makeTensorInfo(l,"float32",a)}const LA={kernelName:Fl,backendName:"cpu",kernelFunc:by};const yy=rt(Ni,n=>Math.max(0,n)),MA={kernelName:Ni,backendName:"cpu",kernelFunc:yy};const wy=rt(Ti,n=>Math.min(Math.max(0,n),6)),zA={kernelName:Ti,backendName:"cpu",kernelFunc:wy};function Jc(n,e,t,s,r){if(t==="linear")return vs({inputs:{x:e},backend:n});if(t==="relu")return yy({inputs:{x:e},backend:n});if(t==="elu")return gy({inputs:{x:e},backend:n});if(t==="relu6")return wy({inputs:{x:e},backend:n});if(t==="prelu")return by({inputs:{x:e,alpha:s},backend:n});if(t==="leakyrelu")return xy({inputs:{x:e},backend:n,attrs:{alpha:r}});if(t==="sigmoid")return ty({inputs:{x:e},backend:n});throw new Error(`Activation ${t} has not been implemented for the CPU backend.`)}function pt(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{shape:o}=s,i=ne(r.shape),a=Lf(o,i),l=ne(a);_(i===l,()=>`The new shape (${a}) has ${l} elements and the old shape (${r.shape}) has ${i} elements. The new shape and old shape must have the same number of elements.`),t.incRef(r.dataId);const c=t.data.get(r.dataId);if(c.complexTensorInfos!=null){const u=c.complexTensorInfos.real,h=c.complexTensorInfos.imag;u.shape=a,h.shape=a}return{dataId:r.dataId,shape:a,dtype:r.dtype}}const BA={kernelName:Pl,backendName:"cpu",kernelFunc:pt};function vy(n){const{inputs:e,backend:t,attrs:s}=n,{a:r,b:o}=e,{transposeA:i,transposeB:a}=s;Ce([r,o],"matMul");const l=r.shape.length,c=o.shape.length,u=i?r.shape[l-2]:r.shape[l-1],h=a?o.shape[c-1]:o.shape[c-2],d=i?r.shape[l-1]:r.shape[l-2],f=a?o.shape[c-2]:o.shape[c-1],g=r.shape.slice(0,-2),x=o.shape.slice(0,-2),b=ne(g),y=ne(x),$=Oe(r.shape.slice(0,-2),o.shape.slice(0,-2)).concat([d,f]);_(u===h,()=>`Error in matMul: inner shapes (${u}) and (${h}) of Tensors with shapes ${r.shape} and ${o.shape} and transposeA=${i} and transposeB=${a} must match.`);const C=i?[b,u,d]:[b,d,u],N=a?[y,f,h]:[y,h,f],E=pt({inputs:{x:r},backend:t,attrs:{shape:C}}),F=pt({inputs:{x:o},backend:t,attrs:{shape:N}}),O=i?E.shape[1]:E.shape[2],A=i?E.shape[2]:E.shape[1],D=a?F.shape[1]:F.shape[2],S=Math.max(b,y),z=t.data.get(E.dataId).values,U=t.data.get(F.dataId).values,G=Ie(E.shape),K=Ie(F.shape),[X,Q,Z]=i?[G[0],1,G[1]]:[G[0],G[1],1],[te,re,se]=a?[1,K[1],K[0]]:[K[1],1,K[0]],ae=A*D,le=Ve([S,A,D],E.dtype),fe=le.values,pe=t.blockSize;for(let we=0;we<S;we++){const $e=we%b,Ee=we%y;for(let Te=0;Te<A;Te+=pe){const Fe=Math.min(Te+pe,A);for(let Pe=0;Pe<D;Pe+=pe){const Ye=Math.min(Pe+pe,D);for(let at=0;at<O;at+=pe){const mt=Math.min(at+pe,O);for(let lt=Te;lt<Fe;lt++)for(let Ze=Pe;Ze<Ye;Ze++){let _e=0;for(let Ae=at;Ae<mt;Ae++){const Nn=z[$e*X+lt*Q+Ae*Z],Ct=U[Ae*te+Ze*re+Ee*se];_e+=Nn*Ct}fe[we*ae+(lt*D+Ze)]+=_e}}}}}return t.disposeIntermediateTensorInfo(E),t.disposeIntermediateTensorInfo(F),t.makeTensorInfo($,le.dtype,le.values)}const VA={kernelName:el,backendName:"cpu",kernelFunc:vy};function WA(n){const{inputs:e,backend:t,attrs:s}=n,{a:r,b:o,bias:i,preluActivationWeights:a}=e,{transposeA:l,transposeB:c,activation:u,leakyreluAlpha:h}=s;let d,f,g;const x=[];d=vy({inputs:{a:r,b:o},attrs:{transposeA:l,transposeB:c},backend:t}),i&&(f=Do({inputs:{a:d,b:i},backend:t}),x.push(d),d=f),u&&(g=Jc(t,d,u,a,h),x.push(d),d=g);for(const y of x)t.disposeIntermediateTensorInfo(y);return d}const UA={kernelName:Xl,backendName:"cpu",kernelFunc:WA};const GA=rt(Xo,n=>Math.acos(n)),HA={kernelName:Xo,backendName:"cpu",kernelFunc:GA};const jA=rt(Yo,n=>Math.acosh(n)),KA={kernelName:Yo,backendName:"cpu",kernelFunc:jA};function qA(n){const{inputs:e,backend:t}=n,s=e;Ce(e,"addN");const r=s.map(a=>t.data.get(a.dataId).values),o=Ve(s[0].shape,s[0].dtype),i=o.values;for(let a=0;a<s.length;a++){const l=r[a];for(let c=0;c<i.length;c++)i[c]+=l[c]}return t.makeTensorInfo(o.shape,o.dtype,o.values)}const XA={kernelName:Uu,backendName:"cpu",kernelFunc:qA};function YA(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{axis:o,keepDims:i}=s;Ce(r,"all");const a=Be(o,r.shape);let l=a;const c=wt(l,r.shape.length);let u=r;c!=null&&(u=yn({inputs:{x:r},backend:t,attrs:{perm:c}}),l=Nt(l.length,r.shape.length)),qt("all",l,u.shape.length);const[h,d]=Ut(u.shape,l),f=ne(d),g=Jt(ne(h),u.dtype),x=t.data.get(u.dataId).values;for(let y=0;y<g.length;++y){const w=y*f;let $=x[w];for(let C=0;C<f;++C){const N=x[w+C];$=$&&N}g[y]=$}c!=null&&t.disposeIntermediateTensorInfo(u);const b=t.makeTensorInfo(h,u.dtype,g);if(i){const y=At(h,a),w=pt({inputs:{x:b},backend:t,attrs:{shape:y}});return t.disposeIntermediateTensorInfo(b),w}return b}const ZA={kernelName:Gu,backendName:"cpu",kernelFunc:YA};function JA(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{axis:o,keepDims:i}=s;Ce(r,"any");const a=Be(o,r.shape);let l=a;const c=wt(l,r.shape.length);let u=r;c!=null&&(u=yn({inputs:{x:r},backend:t,attrs:{perm:c}}),l=Nt(l.length,r.shape.length)),qt("any",l,u.shape.length);const[h,d]=Ut(u.shape,l),f=ne(d),g=Jt(ne(h),u.dtype),x=t.data.get(u.dataId).values;for(let y=0;y<g.length;++y){const w=y*f;let $=x[w];for(let C=0;C<f;++C){const N=x[w+C];$=$||N}g[y]=$}c!=null&&t.disposeIntermediateTensorInfo(u);const b=t.makeTensorInfo(h,u.dtype,g);if(i){const y=At(h,a),w=pt({inputs:{x:b},backend:t,attrs:{shape:y}});return t.disposeIntermediateTensorInfo(b),w}return b}const QA={kernelName:Hu,backendName:"cpu",kernelFunc:JA};function e_(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{axis:o}=s;Ce(r,"argMax");let i=Be(o,r.shape);const a=wt(i,r.shape.length);let l=r;const c=[];a!=null&&(l=yn({inputs:{x:r},backend:t,attrs:{perm:a}}),c.push(l),i=Nt(i.length,l.shape.length)),i=[i[0]],qt("argMax",i,l.shape.length);const[u,h]=Ut(l.shape,i),d=ne(u),f=Jt(d,"int32"),g=ne(h),x=t.data.get(l.dataId).values;for(let b=0;b<f.length;++b){const y=b*g;let w=x[y],$=0;for(let C=0;C<g;++C){const N=x[y+C];N>w&&(w=N,$=C)}f[b]=$}return c.forEach(b=>t.disposeIntermediateTensorInfo(b)),t.makeTensorInfo(u,"int32",f)}const t_={kernelName:Ya,backendName:"cpu",kernelFunc:e_};function n_(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{axis:o}=s;Ce(r,"argMin");let i=Be(o,r.shape);const a=wt(i,r.shape.length);let l=r;const c=[];a!=null&&(l=yn({inputs:{x:r},backend:t,attrs:{perm:a}}),c.push(l),i=Nt(i.length,l.shape.length)),i=[i[0]],qt("argMin",i,l.shape.length);const[u,h]=Ut(l.shape,i),d=ne(u),f=Jt(d,"int32"),g=ne(h),x=t.data.get(l.dataId).values;for(let b=0;b<f.length;++b){const y=b*g;let w=x[y],$=0;for(let C=0;C<g;++C){const N=x[y+C];N<w&&(w=N,$=C)}f[b]=$}return c.forEach(b=>t.disposeIntermediateTensorInfo(b)),t.makeTensorInfo(u,"int32",f)}const s_={kernelName:Za,backendName:"cpu",kernelFunc:n_};const r_=rt(Zo,n=>Math.asin(n)),o_={kernelName:Zo,backendName:"cpu",kernelFunc:r_};const i_=rt(Jo,n=>Math.asinh(n)),a_={kernelName:Jo,backendName:"cpu",kernelFunc:i_};const l_=rt(Qo,n=>Math.atan(n)),c_={kernelName:Qo,backendName:"cpu",kernelFunc:l_};const u_=Rt((n,e)=>Math.atan2(n,e)),h_=Bt(ti,u_),d_={kernelName:ti,backendName:"cpu",kernelFunc:h_};const p_=rt(ei,n=>Math.atanh(n)),f_={kernelName:ei,backendName:"cpu",kernelFunc:p_};function Wp(n,e,t,s,r,o){const i=r.strideHeight,a=r.strideWidth,l=r.dilationHeight,c=r.dilationWidth,u=r.effectiveFilterHeight,h=r.effectiveFilterWidth,d=r.padInfo.top,f=r.padInfo.left,g=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,x=Ve(r.outShape,t),b=x.values,y=r.outShape[1]*r.outShape[2]*r.outShape[3],w=r.outShape[2]*r.outShape[3],$=r.outShape[3];for(let C=0;C<r.batchSize;++C){const N=C*y,E=C*s[0];for(let F=0;F<r.inChannels;++F)for(let O=0;O<r.outHeight;++O){const A=O*i-d,D=Math.max(0,A),S=Math.min(r.inHeight,u+A),z=N+O*w;for(let U=0;U<r.outWidth;++U){const G=U*a-f,K=Math.max(0,G),X=Math.min(r.inWidth,h+G);let Q=g,Z=0,te=0;for(let se=D;se<S;se+=l){const ae=E+se*s[1];for(let le=K;le<X;le+=c){const fe=ae+le*s[2],pe=n[fe+F];o==="max"&&pe>Q?Q=pe:o==="avg"&&(Z+=pe,te++)}if(isNaN(Q))break}const re=z+U*$+F;b[re]=o==="avg"?Z/te:Q}}}return x}function Cy(n,e,t,s,r=!1,o=!1){const i=Ve(s.outShape,"int32"),a=s.strideHeight,l=s.strideWidth,c=s.dilationHeight,u=s.dilationWidth,h=s.effectiveFilterHeight,d=s.effectiveFilterWidth,f=s.padInfo.top,g=s.padInfo.left,x=Ve(e,t,n);for(let b=0;b<s.batchSize;++b)for(let y=0;y<s.inChannels;++y)for(let w=0;w<s.outHeight;++w){const $=w*a-f;let C=$;for(;C<0;)C+=c;const N=Math.min(s.inHeight,h+$);for(let E=0;E<s.outWidth;++E){const F=E*l-g;let O=F;for(;O<0;)O+=u;const A=Math.min(s.inWidth,d+F);let D=Number.NEGATIVE_INFINITY,S=-1;for(let z=C;z<N;z+=c){const U=z-$;for(let G=O;G<A;G+=u){const K=G-F,X=x.get(b,z,G,y);X>D&&(D=X,r?S=o?((b*s.inHeight+z)*s.inWidth+G)*s.inChannels+y:(z*s.inWidth+G)*s.inChannels+y:S=U*d+K)}}i.set(S,b,w,E,y)}}return i}function ky(n,e,t,s,r,o){const i=r.strideDepth,a=r.strideHeight,l=r.strideWidth,c=r.dilationDepth,u=r.dilationHeight,h=r.dilationWidth,d=r.effectiveFilterDepth,f=r.effectiveFilterHeight,g=r.effectiveFilterWidth,x=r.padInfo.front,b=r.padInfo.top,y=r.padInfo.left,w=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,$=Ve(r.outShape,t),C=$.values,N=r.outShape[1]*r.outShape[2]*r.outShape[3]*r.outShape[4],E=r.outShape[2]*r.outShape[3]*r.outShape[4],F=r.outShape[3]*r.outShape[4],O=r.outShape[4];for(let A=0;A<r.batchSize;++A){const D=A*N,S=A*s[0];for(let z=0;z<r.inChannels;++z)for(let U=0;U<r.outDepth;++U){const G=U*i-x;let K=G;for(;K<0;)K+=c;const X=Math.min(r.inDepth,d+G),Q=D+U*E;for(let Z=0;Z<r.outHeight;++Z){const te=Z*a-b;let re=te;for(;re<0;)re+=u;const se=Math.min(r.inHeight,f+te),ae=Q+Z*F;for(let le=0;le<r.outWidth;++le){const fe=le*l-y;let pe=fe;for(;pe<0;)pe+=h;const we=Math.min(r.inWidth,g+fe),$e=ae+le*O;let Ee=w,Te=0,Fe=0;for(let Ye=K;Ye<X;Ye+=c){const at=S+Ye*s[1];for(let mt=re;mt<se;mt+=u){const lt=at+mt*s[2];for(let Ze=pe;Ze<we;Ze+=h){const _e=lt+Ze*s[3],Ae=n[_e+z];if(o==="max"&&Ae>Ee?Ee=Ae:o==="avg"&&(Te+=Ae,Fe++),isNaN(Ee))break}if(isNaN(Ee))break}if(isNaN(Ee))break}const Pe=$e+z;C[Pe]=o==="avg"?Te/Math.max(Fe,1):Ee}}}}return $}function m_(n,e){const t=Ve(e.outShape,"int32"),s=e.strideDepth,r=e.strideHeight,o=e.strideWidth,i=e.dilationDepth,a=e.dilationHeight,l=e.dilationWidth,c=e.effectiveFilterDepth,u=e.effectiveFilterHeight,h=e.effectiveFilterWidth,d=e.padInfo.front,f=e.padInfo.top,g=e.padInfo.left;for(let x=0;x<e.batchSize;++x)for(let b=0;b<e.inChannels;++b)for(let y=0;y<e.outDepth;++y){const w=y*s-d;let $=w;for(;$<0;)$+=i;const C=Math.min(e.inDepth,c+w);for(let N=0;N<e.outHeight;++N){const E=N*r-f;let F=E;for(;F<0;)F+=a;const O=Math.min(e.inHeight,u+E);for(let A=0;A<e.outWidth;++A){const D=A*o-g;let S=D;for(;S<0;)S+=l;const z=Math.min(e.inWidth,h+D);let U=Number.NEGATIVE_INFINITY,G=-1;for(let K=$;K<C;K+=i){const X=K-w;for(let Q=F;Q<O;Q+=a){const Z=Q-E;for(let te=S;te<z;te+=l){const re=te-D,se=n.get(x,K,Q,te,b);se>=U&&(U=se,G=X*u*h+Z*u+re)}}}t.set(G,x,y,N,A,b)}}}return t}function g_(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e;Ce(r,"avgPool");const{filterSize:o,strides:i,pad:a,dimRoundingMode:l}=s,c=1;_(Qt(i,c),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=Ln(r.shape,o,i,c,a,l);let h;if(u.filterWidth===1&&u.filterHeight===1&&Je(u.inShape,u.outShape))h=vs({inputs:{x:r},backend:t});else{const d=t.data.get(r.dataId).values,f=Ie(r.shape),g=Wp(d,r.shape,r.dtype,f,u,"avg");h=t.makeTensorInfo(u.outShape,r.dtype,g.values)}return h}const x_={kernelName:Ja,backendName:"cpu",kernelFunc:g_};function b_(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{filterSize:o,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=s;Ce(r,"avgPool3d");const u=Ds(r.shape,o,i,1,a,l,c),h=t.data.get(r.dataId).values,d=ky(h,r.shape,r.dtype,Ie(r.shape),u,"avg");return t.makeTensorInfo(d.shape,"float32",d.values)}const y_={kernelName:Qa,backendName:"cpu",kernelFunc:b_};function w_(n){const{inputs:e,backend:t,attrs:s}=n,{dy:r,input:o}=e,{filterSize:i,strides:a,pad:l,dimRoundingMode:c}=s;Ce([r,o],"avgPool3DGrad");const u=Ds(o.shape,i,a,1,l,c),h=u.strideDepth,d=u.strideHeight,f=u.strideWidth,g=u.filterDepth,x=u.filterHeight,b=u.filterWidth,y=u.dilationDepth,w=u.dilationHeight,$=u.dilationWidth,C=u.effectiveFilterDepth,N=u.effectiveFilterHeight,E=u.effectiveFilterWidth,F=C-1-u.padInfo.front,O=E-1-u.padInfo.left,A=N-1-u.padInfo.top,D=Ve(o.shape,"float32"),S=1/(g*x*b),z=t.bufferSync(r);for(let U=0;U<u.batchSize;++U)for(let G=0;G<u.inChannels;++G)for(let K=0;K<u.inDepth;++K)for(let X=0;X<u.inHeight;++X)for(let Q=0;Q<u.inWidth;++Q){const Z=K-F,te=X-A,re=Q-O;let se=0;for(let ae=0;ae<C;ae+=y){const le=(Z+ae)/h;if(!(le<0||le>=u.outDepth||Math.floor(le)!==le))for(let fe=0;fe<N;fe+=w){const pe=(te+fe)/d;if(!(pe<0||pe>=u.outHeight||Math.floor(pe)!==pe))for(let we=0;we<E;we+=$){const $e=(re+we)/f;if($e<0||$e>=u.outWidth||Math.floor($e)!==$e)continue;const Ee=z.get(U,le,pe,$e,G);se+=Ee}}}D.set(se*S,U,K,X,Q,G)}return t.makeTensorInfo(D.shape,D.dtype,D.values)}const v_={kernelName:Ku,backendName:"cpu",kernelFunc:w_};function C_(n){const{inputs:e,backend:t,attrs:s}=n,{dy:r,input:o}=e,i=o;Ce([r,o],"avgPoolGrad");const{filterSize:a,strides:l,pad:c}=s,u=Ln(i.shape,a,l,1,c),h=u.strideHeight,d=u.strideWidth,f=u.filterHeight,g=u.filterWidth,x=u.dilationHeight,b=u.dilationWidth,y=u.effectiveFilterHeight,w=u.effectiveFilterWidth,$=w-1-u.padInfo.left,C=y-1-u.padInfo.top,N=Ve(i.shape,"float32"),E=1/(f*g),F=t.data.get(r.dataId).values,O=Ve(r.shape,"float32",F);for(let A=0;A<u.batchSize;++A)for(let D=0;D<u.inChannels;++D)for(let S=0;S<u.inHeight;++S)for(let z=0;z<u.inWidth;++z){const U=S-C,G=z-$;let K=0;for(let X=0;X<y;X+=x){const Q=(U+X)/h;if(!(Q<0||Q>=u.outHeight||Math.floor(Q)!==Q))for(let Z=0;Z<w;Z+=b){const te=(G+Z)/d;if(te<0||te>=u.outWidth||Math.floor(te)!==te)continue;const re=O.get(A,Q,te,D);K+=re}}N.set(K*E,A,S,z,D)}return t.makeTensorInfo(N.shape,N.dtype,N.values)}const k_={kernelName:ju,backendName:"cpu",kernelFunc:C_};function $_(n){const{inputs:e,backend:t,attrs:s}=n,{x:r,scale:o,offset:i,mean:a,variance:l}=e;_(a.shape.length===l.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),_(i==null||a.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),_(o==null||a.shape.length===o.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks."),Ce([r,a,l,o,i],"batchNorm");let{varianceEpsilon:c}=s;c==null&&(c=.001);const u=t.data.get(r.dataId).values,h=t.data.get(a.dataId).values,d=t.data.get(l.dataId).values,f=o?t.data.get(o.dataId).values:new Float32Array([1]),g=i?t.data.get(i.dataId).values:new Float32Array([0]),x=new Float32Array(u.length),b=g.length,y=f.length,w=d.length,$=h.length;let C=0,N=0,E=0,F=0;for(let O=0;O<u.length;++O)x[O]=g[C++]+(u[O]-h[N++])*f[E++]/Math.sqrt(d[F++]+c),C>=b&&(C=0),N>=$&&(N=0),E>=y&&(E=0),F>=w&&(F=0);return t.makeTensorInfo(r.shape,r.dtype,x)}const I_={kernelName:dl,backendName:"cpu",kernelFunc:$_};function S_(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{blockShape:o,crops:i}=s;Ce([r],"batchToSpaceND");const a=o.reduce((y,w)=>y*w),l=oa(r.shape,o,a),c=ia(l.length,o.length),u=aa(r.shape,o,a),h=Od(i,o.length),d=Pd(u,i,o.length),f=pt({inputs:{x:r},backend:t,attrs:{shape:l}}),g=yn({inputs:{x:f},backend:t,attrs:{perm:c}}),x=pt({inputs:{x:g},backend:t,attrs:{shape:u}}),b=Wr({inputs:{x},backend:t,attrs:{begin:h,size:d}});return t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(g),t.disposeIntermediateTensorInfo(x),b}const N_={kernelName:tl,backendName:"cpu",kernelFunc:S_};function T_(n){const{inputs:e,backend:t,attrs:s}=n,{x:r,weights:o}=e,{size:i}=s,a=t.data.get(r.dataId).values,l=t.data.get(o.dataId).values,c=Lp(a,l,o.dtype,o.shape,i);return t.makeTensorInfo([i],o.dtype,c)}const E_={kernelName:qu,backendName:"cpu",kernelFunc:T_};function R_(n){const{inputs:e,backend:t}=n,{s0:s,s1:r}=e,o=t.data.get(s.dataId).values,i=t.data.get(r.dataId).values,a=Oe(Array.from(o),Array.from(i));return t.makeTensorInfo([a.length],"int32",Int32Array.from(a))}const D_={kernelName:Gf,backendName:"cpu",kernelFunc:R_};const A_=rt(ri,(n,e)=>{const t=e;return n>t.clipValueMax?t.clipValueMax:n<t.clipValueMin?t.clipValueMin:n}),__={kernelName:ri,backendName:"cpu",kernelFunc:A_};const F_={kernelName:nl,backendName:"cpu",kernelFunc:n=>{const{x:e}=n.inputs,t=n.backend,s=new Float32Array(ne(e.shape)),r=t.data.get(e.dataId),o=r.complexTensorInfos.real,i=r.complexTensorInfos.imag,a=t.data.get(o.dataId).values,l=t.data.get(i.dataId).values;for(let c=0;c<a.length;c++){const u=a[c],h=l[c];s[c]=Math.hypot(u,h)}return t.makeOutput(s,e.shape,"float32")}};function Ao(n){const{inputs:e,backend:t}=n,{input:s}=e,r=t.data.get(s.dataId).complexTensorInfos.imag,o=t.data.get(r.dataId).values;return t.makeTensorInfo(r.shape,r.dtype,o)}const O_={kernelName:fh,backendName:"cpu",kernelFunc:Ao};function _o(n){const{inputs:e,backend:t,attrs:s}=n,{axis:r}=s,o=Be(r,e[0].shape)[0],i=e.map(x=>x.shape);Ad(i,o);let a=fs(e.map(x=>x.shape),o);if(ne(a)===0)return t.makeTensorInfo(a,e[0].dtype,[]);const l=e.filter(x=>ne(x.shape)>0);if(l.length===1)return vs({inputs:{x:l[0]},backend:t});if(l[0].dtype==="complex64"){const x=l.map(C=>Br({inputs:{input:C},backend:t})),b=l.map(C=>Ao({inputs:{input:C},backend:t})),y=_o({inputs:x,backend:t,attrs:{axis:o}}),w=_o({inputs:b,backend:t,attrs:{axis:o}}),$=In({inputs:{real:y,imag:w},backend:t});return x.forEach(C=>t.disposeIntermediateTensorInfo(C)),b.forEach(C=>t.disposeIntermediateTensorInfo(C)),t.disposeIntermediateTensorInfo(y),t.disposeIntermediateTensorInfo(w),$}const c=l.map(x=>{const y=[-1,ne(x.shape.slice(o))];return pt({inputs:{x},backend:t,attrs:{shape:y}})}),u=c.map(x=>({vals:t.data.get(x.dataId).values,shape:x.shape}));a=fs(c.map(x=>x.shape),1);const h=c[0].shape[0]===1,d=$1(u,a,e[0].dtype,h),f=fs(l.map(x=>x.shape),o),g=t.makeTensorInfo(f,e[0].dtype,d);return c.forEach(x=>t.disposeIntermediateTensorInfo(x)),g}const P_={kernelName:sl,backendName:"cpu",kernelFunc:_o};function $y(n){const{inputs:e,backend:t,attrs:s}=n,{x:r,filter:o}=e,{strides:i,pad:a,dataFormat:l,dilations:c,dimRoundingMode:u}=s;Ce([r,o],"conv2d");const h=As(l),d=Kt(r.shape,o.shape,i,c,a,u,!1,h),f=d.filterHeight,g=d.filterWidth,x=d.dilationHeight,b=d.dilationWidth,y=d.padInfo.left,w=d.padInfo.top,$=d.dataFormat==="channelsLast",C=new jt(d.outShape,r.dtype),N=Ie(r.shape),E=Ie(o.shape),F=N[0],O=$?N[1]:N[2],A=$?N[2]:1,D=$?1:N[1],S=C.strides[0],z=$?C.strides[1]:C.strides[2],U=$?C.strides[2]:1,G=$?1:C.strides[1],K=t.data.get(r.dataId).values,X=t.data.get(o.dataId).values,Q=C.values;for(let Z=0;Z<d.batchSize;++Z){const te=Z*F,re=Z*S;for(let se=0;se<d.outHeight;++se){const ae=re+se*z,le=se*d.strideHeight-w;for(let fe=0;fe<f;++fe){const pe=le+fe*x;if(pe<0||pe>=d.inHeight)continue;const we=fe*E[0],$e=te+pe*O;for(let Ee=0;Ee<d.outWidth;++Ee){const Te=ae+Ee*U,Fe=Ee*d.strideWidth-y;for(let Pe=0;Pe<g;++Pe){const Ye=Fe+Pe*b;if(Ye<0||Ye>=d.inWidth)continue;const at=we+Pe*E[1],mt=$e+Ye*A;let lt=at;for(let Ze=0;Ze<d.inChannels;++Ze){const _e=K[mt+Ze*D];for(let Ae=0;Ae<d.outChannels;++Ae)Q[Te+Ae*G]+=_e*X[lt+Ae];lt+=d.outChannels}}}}}}return t.makeTensorInfo(C.shape,C.dtype,Q)}const L_={kernelName:rl,backendName:"cpu",kernelFunc:$y};function M_(n){const{inputs:e,backend:t,attrs:s}=n,{x:r,dy:o}=e,{strides:i,pad:a,dataFormat:l,dimRoundingMode:c,filterShape:u}=s;Ce([r,o],"conv2dBackpropFilter");const h=As(l),d=Kt(r.shape,u,i,1,a,c,!1,h),{strideHeight:f,strideWidth:g,filterHeight:x,filterWidth:b}=d,y=d.dataFormat==="channelsLast",w=new jt(d.filterShape,"float32"),$=d.padInfo.left,C=d.padInfo.top,N=t.data.get(r.dataId).values,E=t.data.get(o.dataId).values,F=new jt(r.shape,r.dtype,N),O=new jt(o.shape,o.dtype,E);for(let A=0;A<x;++A){const D=Math.max(0,Math.ceil((C-A)/f)),S=Math.min(d.outHeight,(d.inHeight+C-A)/f);for(let z=0;z<b;++z){const U=Math.max(0,Math.ceil(($-z)/g)),G=Math.min(d.outWidth,(d.inWidth+$-z)/g);for(let K=0;K<d.inChannels;++K)for(let X=0;X<d.outChannels;++X){let Q=0;for(let Z=0;Z<d.batchSize;++Z)for(let te=D;te<S;++te){const re=A+te*f-C;for(let se=U;se<G;++se){const ae=z+se*g-$;y?Q+=F.get(Z,re,ae,K)*O.get(Z,te,se,X):Q+=F.get(Z,K,re,ae)*O.get(Z,X,te,se)}}w.set(Q,A,z,K,X)}}}return t.makeTensorInfo(w.shape,w.dtype,w.values)}const z_={kernelName:Zu,backendName:"cpu",kernelFunc:M_};function B_(n){const{inputs:e,backend:t,attrs:s}=n,{dy:r,filter:o}=e,{inputShape:i,strides:a,pad:l,dataFormat:c,dimRoundingMode:u}=s;Ce([r,o],"conv2dBackpropInput");const h=Ie(o.shape),d=Ie(r.shape);let f=As(c);const g=Kt(i,o.shape,a,1,l,u,!1,f),x=new jt(g.inShape,"float32"),b=x.values,y=t.data.get(r.dataId).values,w=t.data.get(o.dataId).values,[$,C,N]=h,{batchSize:E,filterHeight:F,filterWidth:O,inChannels:A,inHeight:D,inWidth:S,outChannels:z,outHeight:U,outWidth:G,strideHeight:K,strideWidth:X}=g;f=g.dataFormat;const Q=F-1-g.padInfo.top,Z=O-1-g.padInfo.left,te=f==="channelsLast",re=x.strides[0],se=te?x.strides[1]:x.strides[2],ae=te?x.strides[2]:1,le=te?1:x.strides[1],fe=d[0],pe=te?d[1]:d[2],we=te?d[2]:1,$e=te?1:d[1];for(let Ee=0;Ee<E;++Ee)for(let Te=0;Te<A;++Te)for(let Fe=0;Fe<D;++Fe){const Pe=Fe-Q,Ye=Math.max(0,Math.ceil(Pe/K)),at=Math.min(U,(F+Pe)/K);for(let mt=0;mt<S;++mt){const lt=mt-Z,Ze=Math.max(0,Math.ceil(lt/X)),_e=Math.min(G,(O+lt)/X);let Ae=0;for(let Ct=Ye;Ct<at;++Ct){const $s=Ct*K-Pe;for(let kt=Ze;kt<_e;++kt){const Vs=kt*X-lt,wn=fe*Ee+pe*Ct+we*kt,Tn=$*(F-1-$s)+C*(O-1-Vs)+N*Te;for(let os=0;os<z;++os){const Is=y[wn+$e*os],Ss=w[Tn+os];Ae+=Is*Ss}}}const Nn=re*Ee+se*Fe+ae*mt+le*Te;b[Nn]=Ae}}return t.makeTensorInfo(x.shape,x.dtype,x.values)}const V_={kernelName:ol,backendName:"cpu",kernelFunc:B_};function W_(n){const{inputs:e,backend:t,attrs:s}=n,{x:r,filter:o}=e,{strides:i,pad:a,dilations:l}=s;Ce([r,o],"conv3d");const c=Xs(r.shape,o.shape,i,l,a),{filterDepth:u,filterHeight:h,filterWidth:d,dilationDepth:f,dilationHeight:g,dilationWidth:x,padInfo:b}=c,y=b.front,w=b.left,$=b.top,C=new jt(c.outShape,r.dtype),N=t.data.get(r.dataId).values,E=t.data.get(o.dataId).values,F=C.values,O=Ie(r.shape),A=Ie(o.shape);for(let D=0;D<c.batchSize;++D){const S=D*O[0],z=D*C.strides[0];for(let U=0;U<c.outDepth;++U){const G=z+U*C.strides[1],K=U*c.strideDepth-y;for(let X=0;X<u;++X){const Q=K+X*f;if(Q<0||Q>=c.inDepth)continue;const Z=X*A[0],te=S+Q*O[1];for(let re=0;re<c.outHeight;++re){const se=G+re*C.strides[2],ae=re*c.strideHeight-$;for(let le=0;le<h;++le){const fe=ae+le*g;if(fe<0||fe>=c.inHeight)continue;const pe=Z+le*A[1],we=te+fe*O[2];for(let $e=0;$e<c.outWidth;++$e){const Ee=se+$e*c.outChannels,Te=$e*c.strideWidth-w;for(let Fe=0;Fe<d;++Fe){const Pe=Te+Fe*x;if(Pe<0||Pe>=c.inWidth)continue;const Ye=pe+Fe*A[2],at=we+Pe*c.inChannels;let mt=Ye;for(let lt=0;lt<c.inChannels;++lt){const Ze=N[at+lt];for(let _e=0;_e<c.outChannels;++_e)F[Ee+_e]+=Ze*E[mt+_e];mt+=c.outChannels}}}}}}}}return t.makeTensorInfo(C.shape,C.dtype,C.values)}const U_={kernelName:il,backendName:"cpu",kernelFunc:W_};function G_(n){const{inputs:e,backend:t,attrs:s}=n,{x:r,dy:o}=e,{strides:i,pad:a,filterShape:l}=s;Ce([r,o],"conv3dBackpropFilterV2");const c=Ie(r.shape),u=Ie(o.shape),h=Xs(r.shape,l,i,1,a),d=h.strideDepth,f=h.strideHeight,g=h.strideWidth,x=h.filterDepth,b=h.filterHeight,y=h.filterWidth,w=new jt(h.filterShape,"float32"),$=w.values,[C,N,E,F]=w.strides,O=t.data.get(o.dataId).values,[A,D,S,z]=u,U=t.data.get(r.dataId).values,[G,K,X,Q]=c,Z=h.padInfo.front,te=h.padInfo.left,re=h.padInfo.top;for(let se=0;se<x;++se){const ae=Math.max(0,Math.ceil((Z-se)/d)),le=Math.min(h.outDepth,(h.inDepth+Z-se)/d),fe=se*C;for(let pe=0;pe<b;++pe){const we=Math.max(0,Math.ceil((re-pe)/f)),$e=Math.min(h.outHeight,(h.inHeight+re-pe)/f),Ee=pe*N+fe;for(let Te=0;Te<y;++Te){const Fe=Math.max(0,Math.ceil((te-Te)/g)),Pe=Math.min(h.outWidth,(h.inWidth+te-Te)/g),Ye=Te*E+Ee;for(let at=0;at<h.inChannels;++at){const mt=at*F+Ye;for(let lt=0;lt<h.outChannels;++lt){let Ze=0;for(let _e=0;_e<h.batchSize;++_e){const Ae=_e*G,Nn=_e*A;for(let Ct=ae;Ct<le;++Ct){const kt=(se+Ct*d-Z)*K+Ae,Vs=Ct*D+Nn;for(let wn=we;wn<$e;++wn){const os=(pe+wn*f-re)*X+kt,Is=wn*S+Vs;for(let Ss=Fe;Ss<Pe;++Ss){const Ma=(Te+Ss*g-te)*Q+os,za=Ss*z+Is;Ze+=U[Ma+at]*O[za+lt]}}}}$[mt+lt]=Ze}}}}}return t.makeTensorInfo(w.shape,w.dtype,w.values)}const H_={kernelName:Ju,backendName:"cpu",kernelFunc:G_};function j_(n){const{inputs:e,backend:t,attrs:s}=n,{dy:r,filter:o}=e,{pad:i,strides:a,inputShape:l}=s;Ce([r],"conv3dBackpropInputV2");const c=Ie(r.shape),u=Ie(o.shape),h=Xs(l,o.shape,a,1,i),d=new jt(h.inShape,"float32"),f=d.values,[g,x,b,y]=d.strides,w=t.data.get(r.dataId).values,[$,C,N,E]=c,F=t.data.get(o.dataId).values,[O,A,D,S]=u,{batchSize:z,filterDepth:U,filterHeight:G,filterWidth:K,inChannels:X,inDepth:Q,inHeight:Z,inWidth:te,outChannels:re,outDepth:se,outHeight:ae,outWidth:le,strideDepth:fe,strideHeight:pe,strideWidth:we}=h,$e=U-1-h.padInfo.front,Ee=G-1-h.padInfo.top,Te=K-1-h.padInfo.left;for(let Fe=0;Fe<z;++Fe)for(let Pe=0;Pe<X;++Pe)for(let Ye=0;Ye<Q;++Ye){const at=Ye-$e,mt=Math.max(0,Math.ceil(at/fe)),lt=Math.min(se,(U+at)/fe);for(let Ze=0;Ze<Z;++Ze){const _e=Ze-Ee,Ae=Math.max(0,Math.ceil(_e/pe)),Nn=Math.min(ae,(G+_e)/pe);for(let Ct=0;Ct<te;++Ct){const $s=Ct-Te,kt=Math.max(0,Math.ceil($s/we)),Vs=Math.min(le,(K+$s)/we);let wn=0;for(let Tn=mt;Tn<lt;++Tn){const os=Tn*fe-at;for(let Is=Ae;Is<Nn;++Is){const Ss=Is*pe-_e;for(let Yr=kt;Yr<Vs;++Yr){const Ma=Yr*we-$s,za=$*Fe+C*Tn+N*Is+E*Yr,pf=O*(U-1-os)+A*(G-1-Ss)+D*(K-1-Ma)+S*Pe;for(let Ws=0;Ws<re;++Ws){const pr=w[za+Ws],ot=F[pf+Ws];wn+=pr*ot}}}}f[g*Fe+x*Ye+b*Ze+y*Ct+Pe]=wn}}}return t.makeTensorInfo(d.shape,d.dtype,d.values)}const K_={kernelName:Qu,backendName:"cpu",kernelFunc:j_};const q_=rt(oi,n=>Math.cos(n)),X_={kernelName:oi,backendName:"cpu",kernelFunc:q_};const Y_=rt(ii,n=>Math.cosh(n)),Z_={kernelName:ii,backendName:"cpu",kernelFunc:Y_};function J_(n){const{inputs:e,backend:t,attrs:s}=n,{image:r,boxes:o,boxInd:i}=e,{cropSize:a,method:l,extrapolationValue:c}=s,[u,h,d,f]=r.shape,g=o.shape[0],[x,b]=a,y=Ve([g,x,b,f],"float32"),w=t.data.get(o.dataId).values,$=t.data.get(i.dataId).values,C=t.data.get(r.dataId).values,N=Ie(r.shape),E=Ie(y.shape);for(let F=0;F<g;F++){const O=F*4,A=w[O],D=w[O+1],S=w[O+2],z=w[O+3],U=$[F];if(U>=u)continue;const G=x>1?(S-A)*(h-1)/(x-1):0,K=b>1?(z-D)*(d-1)/(b-1):0;for(let X=0;X<x;X++){const Q=x>1?A*(h-1)+X*G:.5*(A+S)*(h-1);if(Q<0||Q>h-1){for(let Z=0;Z<b;Z++)for(let te=0;te<f;te++){const re=te+Z*E[2]+X*E[1]+F*E[0];y.values[re]=c}continue}if(l==="bilinear"){const Z=Math.floor(Q),te=Math.ceil(Q),re=Q-Z;for(let se=0;se<b;se++){const ae=b>1?D*(d-1)+se*K:.5*(D+z)*(d-1);if(ae<0||ae>d-1){for(let we=0;we<f;we++){const $e=we+se*E[2]+X*E[1]+F*E[0];y.values[$e]=c}continue}const le=Math.floor(ae),fe=Math.ceil(ae),pe=ae-le;for(let we=0;we<f;we++){let $e=we+le*N[2]+Z*N[1]+U*N[0];const Ee=C[$e];$e=we+fe*N[2]+Z*N[1]+U*N[0];const Te=C[$e];$e=we+le*N[2]+te*N[1]+U*N[0];const Fe=C[$e];$e=we+fe*N[2]+te*N[1]+U*N[0];const Pe=C[$e],Ye=Ee+(Te-Ee)*pe,at=Fe+(Pe-Fe)*pe;$e=we+se*E[2]+X*E[1]+F*E[0],y.values[$e]=Ye+(at-Ye)*re}}}else for(let Z=0;Z<b;++Z){const te=b>1?D*(d-1)+Z*K:.5*(D+z)*(d-1);if(te<0||te>d-1){for(let ae=0;ae<f;ae++){const le=ae+Z*E[2]+X*E[1]+F*E[0];y.values[le]=c}continue}const re=Math.round(te),se=Math.round(Q);for(let ae=0;ae<f;ae++){const le=ae+re*N[2]+se*N[1]+U*N[0],fe=ae+Z*E[2]+X*E[1]+F*E[0];y.values[fe]=C[le]}}}}return t.makeTensorInfo(y.shape,y.dtype,y.values)}const Q_={kernelName:th,backendName:"cpu",kernelFunc:J_};function eF(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{axis:o,exclusive:i,reverse:a}=s;Ce(r,"cumprod");const l=wt([o],r.shape.length);let c=r;l!=null&&(c=yn({inputs:{x:r},backend:t,attrs:{perm:l}}));const u=Nt(1,r.shape.length)[0];if(u!==c.shape.length-1)throw new Error(`backend.cumprod in CPU expects an inner-most axis=${c.shape.length-1} but got axis=${u}`);const h=Cn(c.dtype,"int32"),d=zu(ne(c.shape),h),f=t.data.get(c.dataId).values,g=c.shape[c.shape.length-1],x=a?(y,w)=>y+g-w-1:(y,w)=>y+w;for(let y=0;y<f.length;y+=g)for(let w=0;w<g;w++){const $=x(y,w);if(w===0)d[$]=i?1:f[$];else{const C=x(y,w-1);d[$]=i?f[C]*d[C]:f[$]*d[C]}}const b=t.makeTensorInfo(c.shape,h,d);if(l!=null){const y=Ys(l),w=yn({inputs:{x:b},backend:t,attrs:{perm:y}});return t.disposeIntermediateTensorInfo(b),t.disposeIntermediateTensorInfo(c),w}return b}const tF={kernelName:eh,backendName:"cpu",kernelFunc:eF};function nF(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{axis:o,exclusive:i,reverse:a}=s;Ce(r,"cumsum");const l=wt([o],r.shape.length);let c=r;l!=null&&(c=yn({inputs:{x:r},backend:t,attrs:{perm:l}}));const u=Nt(1,r.shape.length)[0];if(u!==c.shape.length-1)throw new Error(`backend.cumsum in CPU expects an inner-most axis=${c.shape.length-1} but got axis=${u}`);const h=Cn(c.dtype,"int32"),d=Jt(ne(c.shape),h),f=t.data.get(c.dataId).values,g=c.shape[c.shape.length-1],x=a?(y,w)=>y+g-w-1:(y,w)=>y+w;for(let y=0;y<f.length;y+=g)for(let w=0;w<g;w++){const $=x(y,w);if(w===0)d[$]=i?0:f[$];else{const C=x(y,w-1);d[$]=i?f[C]+d[C]:f[$]+d[C]}}const b=t.makeTensorInfo(c.shape,h,d);if(l!=null){const y=Ys(l),w=yn({inputs:{x:b},backend:t,attrs:{perm:y}});return t.disposeIntermediateTensorInfo(b),t.disposeIntermediateTensorInfo(c),w}return b}const sF={kernelName:al,backendName:"cpu",kernelFunc:nF};function rF(n){const{inputs:e,backend:t,attrs:s}=n,{x:r,weights:o}=e,{size:i,binaryOutput:a}=s;if(r.shape.length===1){const l=t.data.get(r.dataId).values,c=t.data.get(o.dataId).values,u=Lp(l,c,o.dtype,o.shape,i);return t.makeTensorInfo([i],o.dtype,u)}else if(r.shape.length===2){const l=t.bufferSync(r),c=t.bufferSync(o),u=v1(l,c,i,a);return t.makeTensorInfo(u.shape,o.dtype,u.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${r.shape.length}.`)}const oF={kernelName:nh,backendName:"cpu",kernelFunc:rF};function iF(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{blockSize:o,dataFormat:i}=s;_(i==="NHWC",()=>`Only NHWC dataFormat supported on CPU for depthToSpace. Got ${i}`);const a=r.shape[0],l=r.shape[1],c=r.shape[2],u=r.shape[3],h=l*o,d=c*o,f=u/(o*o),g=t.data.get(r.dataId).values,x=new Float32Array(a*h*d*f);let b=0;for(let y=0;y<a;++y)for(let w=0;w<h;++w){const $=Math.floor(w/o),C=w%o;for(let N=0;N<d;++N){const E=Math.floor(N/o),F=N%o,O=(C*o+F)*f;for(let A=0;A<f;++A){const S=A+O+u*(E+c*($+l*y));x[b++]=g[S]}}}return t.makeTensorInfo([a,h,d,f],r.dtype,x)}const aF={kernelName:sh,backendName:"cpu",kernelFunc:iF};function Iy(n){const{inputs:e,backend:t,attrs:s}=n,{x:r,filter:o}=e,{strides:i,pad:a,dilations:l,dimRoundingMode:c}=s;Ce([r,o],"depthwiseConv2DNative");const u=Ie(r.shape),h=Ie(o.shape);let d=l;d==null&&(d=[1,1]),_(Qt(i,d),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${d}'`);const f=Kt(r.shape,o.shape,i,d,a,c,!0),{filterHeight:g,filterWidth:x,dilationHeight:b,dilationWidth:y,padInfo:w}=f,$=w.left,C=w.top,N=f.outChannels/f.inChannels,E=new jt(f.outShape,r.dtype),F=t.data.get(r.dataId).values,O=t.data.get(o.dataId).values,A=E.values;for(let D=0;D<f.batchSize;++D){const S=D*u[0],z=D*E.strides[0];for(let U=0;U<f.outHeight;++U){const G=z+U*E.strides[1],K=U*f.strideHeight-C;for(let X=0;X<g;++X){const Q=K+X*b;if(Q<0||Q>=f.inHeight)continue;const Z=X*h[0],te=S+Q*u[1];for(let re=0;re<f.outWidth;++re){const se=G+re*E.strides[2],ae=re*f.strideWidth-$;for(let le=0;le<x;++le){const fe=ae+le*y;if(fe<0||fe>=f.inWidth)continue;const pe=Z+le*h[1],we=te+fe*f.inChannels;let $e=se,Ee=pe;for(let Te=0;Te<f.inChannels;++Te){const Fe=F[we+Te];for(let Pe=0;Pe<N;++Pe)A[$e+Pe]+=Fe*O[Ee+Pe];$e+=N,Ee+=N}}}}}}return t.makeTensorInfo(E.shape,E.dtype,E.values)}const lF={kernelName:ll,backendName:"cpu",kernelFunc:Iy};function cF(n){const{inputs:e,backend:t,attrs:s}=n,{x:r,dy:o}=e,{strides:i,dilations:a,pad:l,dimRoundingMode:c,filterShape:u}=s;Ce([r,o],"depthwiseConv2dNativeBackpropFilter");const h=Kt(r.shape,u,i,a,l,c,!0),{strideHeight:d,strideWidth:f,filterHeight:g,filterWidth:x}=h,b=new jt(h.filterShape,"float32"),y=h.padInfo.left,w=h.padInfo.top,$=h.outChannels/h.inChannels,C=t.data.get(r.dataId).values,N=new jt(r.shape,r.dtype,C),E=t.data.get(o.dataId).values,F=new jt(o.shape,o.dtype,E);for(let O=0;O<g;++O){const A=Math.max(0,Math.ceil((w-O)/d)),D=Math.min(h.outHeight,(h.inHeight+w-O)/d);for(let S=0;S<x;++S){const z=Math.max(0,Math.ceil((y-S)/f)),U=Math.min(h.outWidth,(h.inWidth+y-S)/f);for(let G=0;G<h.outChannels;++G){const K=Math.trunc(G/$),X=G%$;let Q=0;for(let Z=0;Z<h.batchSize;++Z)for(let te=A;te<D;++te){const re=O+te*d-w;for(let se=z;se<U;++se){const ae=S+se*f-y;Q+=N.get(Z,re,ae,K)*F.get(Z,te,se,G)}}b.set(Q,O,S,K,X)}}}return t.makeTensorInfo(b.shape,b.dtype,b.values)}const uF={kernelName:rh,backendName:"cpu",kernelFunc:cF};function hF(n){const{inputs:e,backend:t,attrs:s}=n,{dy:r,filter:o}=e,{strides:i,dilations:a,pad:l,dimRoundingMode:c,inputShape:u}=s;Ce([r,o],"depthwiseConv2DNativeBackpropInput");const h=Ie(r.shape),d=Ie(o.shape),f=Kt(u,o.shape,i,a,l,c,!0),g=new jt(f.inShape,"float32"),x=g.values,[b,y,w]=g.strides,$=t.data.get(r.dataId).values,[C,N,E]=h,F=t.data.get(o.dataId).values,[O,A,D]=d,{batchSize:S,filterHeight:z,filterWidth:U,inChannels:G,inHeight:K,inWidth:X,outChannels:Q,outHeight:Z,outWidth:te,strideHeight:re,strideWidth:se}=f,ae=z-1-f.padInfo.top,le=U-1-f.padInfo.left,fe=Q/G;for(let pe=0;pe<S;++pe)for(let we=0;we<G;++we)for(let $e=0;$e<K;++$e){const Ee=$e-ae,Te=Math.max(0,Math.ceil(Ee/re)),Fe=Math.min(Z,(z+Ee)/re);for(let Pe=0;Pe<X;++Pe){const Ye=Pe-le,at=Math.max(0,Math.ceil(Ye/se)),mt=Math.min(te,(U+Ye)/se);let lt=0;for(let Ze=Te;Ze<Fe;++Ze){const _e=Ze*re-Ee;for(let Ae=at;Ae<mt;++Ae){const Nn=Ae*se-Ye,Ct=C*pe+N*Ze+E*Ae,$s=O*(z-1-_e)+A*(U-1-Nn)+D*we;for(let kt=0;kt<fe;++kt){const Vs=we*fe+kt,wn=$[Ct+Vs],Tn=F[$s+kt];lt+=wn*Tn}}}x[b*pe+y*$e+w*Pe+we]=lt}}return t.makeTensorInfo(g.shape,g.dtype,g.values)}const dF={kernelName:oh,backendName:"cpu",kernelFunc:hF};function pF(n){const{inputs:e,backend:t}=n,{x:s}=e,r=ne(s.shape),o=t.data.get(s.dataId).values,i=Ve([r,r],s.dtype),a=i.values;for(let c=0;c<o.length;c++)a[c*r+c]=o[c];const l=[...s.shape,...s.shape];return t.makeTensorInfo(l,i.dtype,i.values)}const fF={kernelName:Hf,backendName:"cpu",kernelFunc:pF};const mF={kernelName:cl,backendName:"cpu",kernelFunc:({inputs:n,backend:e,attrs:t})=>{const{x:s,filter:r}=n,{strides:o,pad:i,dilations:a}=t,l=e,c=l.data.get(s.dataId).values,u=s.shape.length,h=l.data.get(r.dataId).values,d=r.shape.length,{batchSize:f,inHeight:g,inWidth:x,inChannels:b,outHeight:y,outWidth:w,padInfo:$,strideHeight:C,strideWidth:N,filterHeight:E,filterWidth:F,dilationHeight:O,dilationWidth:A,outShape:D}=qi(s.shape,r.shape,o,i,"NHWC",a),S=ne(D),z=D.length,U=It(s.dtype,S);for(let K=0;K<f;++K)for(let X=0;X<y;++X){const Q=X*C-$.top;for(let Z=0;Z<w;++Z){const te=Z*N-$.left;for(let re=0;re<b;++re){let se=Number.MIN_SAFE_INTEGER;for(let le=0;le<E;++le){const fe=Q+le*O;if(fe>=0&&fe<g)for(let pe=0;pe<F;++pe){const we=te+pe*A;if(we>=0&&we<x){const $e=as([K,fe,we,re],u,Ie(s.shape)),Ee=as([le,pe,re],d,Ie(r.shape)),Te=c[$e]+h[Ee];Te>se&&(se=Te)}}}const ae=as([K,X,Z,re],z,Ie(D));U[ae]=se}}}return{dataId:l.write(br(U,s.dtype),D,s.dtype),shape:D,dtype:s.dtype}}};const gF={kernelName:ah,backendName:"cpu",kernelFunc:({inputs:n,backend:e,attrs:t})=>{const{x:s,filter:r,dy:o}=n,{strides:i,pad:a,dilations:l}=t,c=e,u=Kn(s.shape,c.data.get(s.dataId).values),h=Kn(r.shape,c.data.get(r.dataId).values),{batchSize:d,inHeight:f,inWidth:g,inChannels:x,outHeight:b,outWidth:y,padInfo:w,strideHeight:$,strideWidth:C,filterHeight:N,filterWidth:E,dilationHeight:F,dilationWidth:O,outShape:A}=qi(s.shape,r.shape,i,a,"NHWC",l);_(o.rank===A.length,()=>`Error in ${ah}, dy must have the same rank as output ${A.length}, but got ${o.rank}`);const D=Kn(A,c.data.get(o.dataId).values),S=Bf(r.shape,r.dtype);for(let U=0;U<d;++U)for(let G=0;G<b;++G){const K=G*$-w.top;for(let X=0;X<y;++X){const Q=X*C-w.left;for(let Z=0;Z<x;++Z){let te=Number.MIN_SAFE_INTEGER,re=0,se=0;for(let ae=0;ae<N;++ae){const le=K+ae*F;if(le>=0&&le<f)for(let fe=0;fe<E;++fe){const pe=Q+fe*O;if(pe>=0&&pe<g){const we=u[U][le][pe][Z]+h[ae][fe][Z];we>te&&(te=we,re=ae,se=fe)}}}S[re][se][Z]+=D[U][G][X][Z]}}}return{dataId:c.write(br(S,s.dtype),r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}};const xF={kernelName:ih,backendName:"cpu",kernelFunc:({inputs:n,backend:e,attrs:t})=>{const{x:s,filter:r,dy:o}=n,{strides:i,pad:a,dilations:l}=t,c=e,u=Kn(s.shape,c.data.get(s.dataId).values),h=Kn(r.shape,c.data.get(r.dataId).values),{batchSize:d,inHeight:f,inWidth:g,inChannels:x,outHeight:b,outWidth:y,padInfo:w,strideHeight:$,strideWidth:C,filterHeight:N,filterWidth:E,dilationHeight:F,dilationWidth:O,outShape:A}=qi(s.shape,r.shape,i,a,"NHWC",l);_(o.rank===A.length,()=>`Error in ${ih}, dy must have the same rank as output ${A.length}, but got ${o.rank}`);const D=Kn(A,c.data.get(o.dataId).values),S=Bf(s.shape,s.dtype);for(let U=0;U<d;++U)for(let G=0;G<b;++G){const K=G*$-w.top;for(let X=0;X<y;++X){const Q=X*C-w.left;for(let Z=0;Z<x;++Z){let te=Number.MIN_SAFE_INTEGER,re=K<0?0:K,se=Q<0?0:Q;for(let ae=0;ae<N;++ae){const le=K+ae*F;if(le>=0&&le<f)for(let fe=0;fe<E;++fe){const pe=Q+fe*O;if(pe>=0&&pe<g){const we=u[U][le][pe][Z]+h[ae][fe][Z];we>te&&(te=we,re=le,se=pe)}}}S[U][re][se][Z]+=D[U][G][X][Z]}}}return{dataId:c.write(br(S,s.dtype),s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};function bF(n){const{inputs:e,backend:t,attrs:s}=n,{image:r}=e,{canvas:o,options:i}=s,{contextOptions:a,imageOptions:l}=i||{},c=l?.alpha||1,u=a?.contextType||"2d";if(u!=="2d")throw new Error(`Context type ${a.contextType} is not supported by the CPU backend.`);const h=o.getContext(u,a?.contextAttributes||{});if(h==null)throw new Error(`Could not get the context with ${u} type.`);const[d,f]=r.shape.slice(0,2),g=r.shape.length===2?1:r.shape[2],x=t.data.get(r.dataId).values,b=r.dtype==="float32"?255:1,y=new Uint8ClampedArray(f*d*4);for(let $=0;$<d*f;++$){const C=[0,0,0,255*c];for(let E=0;E<g;E++){const F=x[$*g+E];if(r.dtype==="float32"){if(F<0||F>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${F}.`)}else if(r.dtype==="int32"&&(F<0||F>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${F}.`);g===1?(C[0]=F*b,C[1]=F*b,C[2]=F*b):C[E]=F*b}const N=$*4;y[N+0]=Math.round(C[0]),y[N+1]=Math.round(C[1]),y[N+2]=Math.round(C[2]),y[N+3]=Math.round(C[3])}o.width=f,o.height=d;const w=new ImageData(y,f,d);return h.putImageData(w,0,0),r}const yF={kernelName:aC,backendName:"cpu",kernelFunc:bF};function Ia(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{axis:o,keepDims:i}=s;Ce(r,"sum");let a;r.dtype==="bool"?a=lr({inputs:{x:r},backend:t,attrs:{dtype:"int32"}}):a=vs({inputs:{x:r},backend:t});const l=a.shape.length,c=Be(o,a.shape),u=wt(c,l);let h=c,d=a;u!=null&&(d=yn({inputs:{x:a},backend:t,attrs:{perm:u}}),h=Nt(h.length,l)),qt("sum",h,d.shape.length);const[f,g]=Ut(d.shape,h),x=Cn(d.dtype,"int32");let b=Xc(t,f,x);const y=ne(g),w=t.data.get(b.dataId).values,$=t.data.get(d.dataId).values;for(let C=0;C<w.length;++C){const N=C*y;let E=0;for(let F=0;F<y;++F)E+=$[N+F];w[C]=E}if(i){const C=At(b.shape,c),N=b;b=pt({inputs:{x:b},backend:t,attrs:{shape:C}}),t.disposeIntermediateTensorInfo(N)}return t.disposeIntermediateTensorInfo(a),u!=null&&t.disposeIntermediateTensorInfo(d),b}const wF={kernelName:Wl,backendName:"cpu",kernelFunc:Ia};function vF(n){const{inputs:e,backend:t,attrs:s}=n,{equation:r}=s,o=e,{allDims:i,summedDims:a,idDims:l}=Hd(r,o.length);Kd(i.length,l,o);const{path:c,steps:u}=qd(a,l),h=u.length;let d=null,f=i.length;const g=[];for(let x=0;x<h;++x){for(const b of u[x]){const{permutationIndices:y,expandDims:w}=jd(f,l[b]);let $;Xd(y)?$=o[b]:($=yn({inputs:{x:o[b]},backend:t,attrs:{perm:y}}),g.push($));const C=$.shape.slice();for(let N=0;N<w.length;++N)C.splice(w[N],0,1);Je($.shape,C)||($=pt({inputs:{x:$},backend:t,attrs:{shape:C}}),g.push($)),d===null?d=$:(d=Yc({inputs:{a:$,b:d},backend:t}),g.push(d))}x<h-1&&(c[x]>=0&&(d=Ia({inputs:{x:d},backend:t,attrs:{axis:c[x]-(i.length-f),keepDims:!1}}),g.push(d)),f--)}for(const x of g)x!==d&&t.disposeIntermediateTensorInfo(x);return d}const CF={kernelName:lh,backendName:"cpu",kernelFunc:vF};function kF(n){const{inputs:e,backend:t}=n,{dy:s,y:r}=e;Ce([s,r],"eluGrad");const o=new Float32Array(ne(r.shape)),i=t.data.get(r.dataId).values,a=t.data.get(s.dataId).values;for(let l=0;l<i.length;++l){const c=i[l];c>=0?o[l]=a[l]:o[l]=a[l]*(c+1)}return t.makeTensorInfo(r.shape,"float32",o)}const $F={kernelName:ch,backendName:"cpu",kernelFunc:kF};const IF=Ld,SF=Md,NF=zd,TF=Bd,EF=Vd,RF=Wd,DF=rt(ci,n=>{const e=Math.sign(n),t=Math.abs(n),s=1/(1+IF*t);return e*(1-((((RF*s+EF)*s+TF)*s+NF)*s+SF)*s*Math.exp(-t*t))}),AF={kernelName:ci,backendName:"cpu",kernelFunc:DF};function Qc(n){const{inputs:e,backend:t,attrs:s}=n,{input:r}=e,{dim:o}=s,i=r.shape.length,a=r.shape.slice();let l=o;return o<0&&(_(-(i+1)<=o,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),l=i+o+1),a.splice(l,0,1),pt({inputs:{x:r},backend:t,attrs:{shape:a}})}const _F={kernelName:hl,backendName:"cpu",kernelFunc:Qc};const FF=Rt((n,e)=>n/e),Up=Bt(ai,FF),Gp={kernelName:ai,backendName:"cpu",kernelFunc:Up};function Sy(n,e,t){const s=n.shape,r=s[0],o=s[1],i=t.data.get(n.dataId),a=i.complexTensorInfos.real,l=i.complexTensorInfos.imag,c=[r,o],u=ne(c),h=Zt("float32",u),d=Zt("float32",u);for(let b=0;b<r;b++){const y=Wr({inputs:{x:a},backend:t,attrs:{begin:[b,0],size:[1,o]}}),w=Wr({inputs:{x:l},backend:t,attrs:{begin:[b,0],size:[1,o]}}),$=In({inputs:{real:y,imag:w},backend:t}),{real:C,imag:N}=OF($,e,t),E=Ps(C,N);for(let F=0;F<o;F++){const O=Ud(E,F);h[b*o+F]=O.real,d[b*o+F]=O.imag}t.disposeIntermediateTensorInfo(y),t.disposeIntermediateTensorInfo(w),t.disposeIntermediateTensorInfo($)}const f=t.makeTensorInfo(c,"float32",h),g=t.makeTensorInfo(c,"float32",d),x=In({inputs:{real:f,imag:g},backend:t});return t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(g),x}function OF(n,e,t){const s=ne(n.shape),r=t.data.get(n.dataId),o=t.data.get(r.complexTensorInfos.real.dataId).values,i=t.data.get(r.complexTensorInfos.imag.dataId).values;if(PF(s)){const a=Hp(o,i,s,e,t),l=[n.shape[0],n.shape[1]];if(e){const c=t.makeTensorInfo(l,"float32",a.real),u=t.makeTensorInfo(l,"float32",a.imag),h=t.makeTensorInfo([],"float32",Hs(s,"float32")),d=vs({inputs:{x:h},backend:t}),f=Gp.kernelFunc({inputs:{a:c,b:h},backend:t}),g=Gp.kernelFunc({inputs:{a:u,b:d},backend:t}),x=t.data.get(f.dataId).values,b=t.data.get(g.dataId).values;return t.disposeIntermediateTensorInfo(c),t.disposeIntermediateTensorInfo(u),t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(g),{real:x,imag:b}}return a}else{const a=Ps(o,i),l=LF(a,s,e);return sx(l)}}function PF(n){return(n&n-1)===0}function Hp(n,e,t,s,r){if(t===1)return{real:n,imag:e};const o=Ps(n,e),i=t/2,a=rx(o),l=a.real,c=a.imag,u=[l.length],h=r.makeTensorInfo(u,"float32",l),d=r.makeTensorInfo(u,"float32",c),f=In({inputs:{real:h,imag:d},backend:r}),g=ox(o),x=g.real,b=g.imag,y=[x.length],w=r.makeTensorInfo(y,"float32",x),$=r.makeTensorInfo(y,"float32",b),C=In({inputs:{real:w,imag:$},backend:r}),N=Hp(l,c,i,s,r),E=N.real,F=N.imag,O=[E.length],A=r.makeTensorInfo(O,"float32",E),D=r.makeTensorInfo(O,"float32",F),S=In({inputs:{real:A,imag:D},backend:r}),z=Hp(x,b,i,s,r),U=z.real,G=z.imag,K=[U.length],X=r.makeTensorInfo(K,"float32",U),Q=r.makeTensorInfo(K,"float32",G),Z=In({inputs:{real:X,imag:Q},backend:r}),te=ax(t,s),re=[te.real.length],se=r.makeTensorInfo(re,"float32",te.real),ae=r.makeTensorInfo(re,"float32",te.imag),le=In({inputs:{real:se,imag:ae},backend:r}),fe=Yc({inputs:{a:le,b:Z},backend:r}),pe=Do({inputs:{a:S,b:fe},backend:r}),we=Vp({inputs:{a:S,b:fe},backend:r}),$e=Br({inputs:{input:pe},backend:r}),Ee=Br({inputs:{input:we},backend:r}),Te=Ao({inputs:{input:pe},backend:r}),Fe=Ao({inputs:{input:we},backend:r}),Pe=_o({inputs:[$e,Ee],backend:r,attrs:{axis:0}}),Ye=_o({inputs:[Te,Fe],backend:r,attrs:{axis:0}}),at=r.data.get(Pe.dataId).values,mt=r.data.get(Ye.dataId).values;return r.disposeIntermediateTensorInfo(h),r.disposeIntermediateTensorInfo(d),r.disposeIntermediateTensorInfo(f),r.disposeIntermediateTensorInfo(w),r.disposeIntermediateTensorInfo($),r.disposeIntermediateTensorInfo(C),r.disposeIntermediateTensorInfo(A),r.disposeIntermediateTensorInfo(D),r.disposeIntermediateTensorInfo(S),r.disposeIntermediateTensorInfo(X),r.disposeIntermediateTensorInfo(Q),r.disposeIntermediateTensorInfo(Z),r.disposeIntermediateTensorInfo(se),r.disposeIntermediateTensorInfo(ae),r.disposeIntermediateTensorInfo(le),r.disposeIntermediateTensorInfo(fe),r.disposeIntermediateTensorInfo(pe),r.disposeIntermediateTensorInfo(we),r.disposeIntermediateTensorInfo($e),r.disposeIntermediateTensorInfo(Te),r.disposeIntermediateTensorInfo(Ee),r.disposeIntermediateTensorInfo(Fe),r.disposeIntermediateTensorInfo(Pe),r.disposeIntermediateTensorInfo(Ye),{real:at,imag:mt}}function LF(n,e,t){const s=new Float32Array(e*2);for(let r=0;r<e;r++){let o=0,i=0;for(let a=0;a<e;a++){const l=lx(r*a,e,t),c=Ud(n,a);o+=c.real*l.real-c.imag*l.imag,i+=c.real*l.imag+c.imag*l.real}t&&(o/=e,i/=e),ix(s,o,i,r)}return s}function MF(n){const{inputs:e,backend:t}=n,{input:s}=e,r=ne(s.shape),o=s.shape[s.shape.length-1],i=r/o,a=pt({inputs:{x:s},backend:t,attrs:{shape:[i,o]}}),l=Sy(a,!1,t),c=pt({inputs:{x:l},backend:t,attrs:{shape:s.shape}});return t.disposeIntermediateTensorInfo(a),t.disposeIntermediateTensorInfo(l),c}const zF={kernelName:uh,backendName:"cpu",kernelFunc:MF};function jp(n){const{backend:e,attrs:t}=n,{shape:s,value:r,dtype:o}=t,i=o||lo(r),a=It(i,ne(s));return VF(a,r,i),e.makeTensorInfo(s,i,a)}const BF={kernelName:hh,backendName:"cpu",kernelFunc:jp};function VF(n,e,t){n.fill(e)}const WF={kernelName:dh,backendName:"cpu",kernelFunc:({inputs:n,attrs:e,backend:t})=>{const{image:s}=n,r=t,o=Zt(s.dtype,ne(s.shape)),[i,a,l,c]=s.shape,u=r.data.get(s.dataId).values;for(let d=0;d<i;d++){const f=d*l*a*c;for(let g=0;g<a;g++){const x=g*(l*c);for(let b=0;b<l;b++){const y=b*c;for(let w=0;w<c;w++){const $=Math.round(l-b-1),C=f+x+y+w;let N=u[C];if($>=0&&$<l){const E=$*c,F=f+x+E+w;N=u[F]}o[C]=N}}}}return{dataId:r.write(o,s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};function UF(n){const{inputs:e,backend:t,attrs:s}=n,{x:r,filter:o,bias:i,preluActivationWeights:a}=e,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d,activation:f,leakyreluAlpha:g}=s;let x=$y({inputs:{x:r,filter:o},backend:t,attrs:{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d}});if(i){const b=x;if(u==="NCHW"&&i.shape.length===1&&i.shape[0]!==1){const y=pt({inputs:{x:i},backend:t,attrs:{shape:[i.shape[0],1,1]}});x=Do({inputs:{a:x,b:y},backend:t}),t.disposeIntermediateTensorInfo(y)}else x=Do({inputs:{a:x,b:i},backend:t});t.disposeIntermediateTensorInfo(b)}if(f){const b=x;if(u==="NCHW"&&f==="prelu"&&a.shape.length===1&&a.shape[0]!==1){const y=pt({inputs:{x:a},backend:t,attrs:{shape:[a.shape[0],1,1]}});x=Jc(t,x,f,y,g),t.disposeIntermediateTensorInfo(y)}else x=Jc(t,x,f,a,g);t.disposeIntermediateTensorInfo(b)}return x}const GF={kernelName:Yl,backendName:"cpu",kernelFunc:UF};function HF(n){const{inputs:e,backend:t,attrs:s}=n,{x:r,filter:o,bias:i,preluActivationWeights:a}=e,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d,activation:f,leakyreluAlpha:g}=s;let x=Iy({inputs:{x:r,filter:o},backend:t,attrs:{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d}});if(i){const b=x;x=Do({inputs:{a:x,b:i},backend:t}),t.disposeIntermediateTensorInfo(b)}if(f){const b=x;x=Jc(t,x,f,a,g),t.disposeIntermediateTensorInfo(b)}return x}const jF={kernelName:um,backendName:"cpu",kernelFunc:HF};function KF(n){const{inputs:e,backend:t}=n,{params:s,indices:r}=e,o=ne(s.shape),i=r.shape,a=i[i.length-1],[l,c,u,h]=Ed(s,r);if(c===0)return t.makeTensorInfo(l,s.dtype,[]);const d=t.data.get(r.dataId).values,f=t.bufferSync(s),g=A1(d,f,s.dtype,c,a,u,h,s.shape,o);return t.makeTensorInfo(l,s.dtype,g.values)}const qF={kernelName:jf,backendName:"cpu",kernelFunc:KF};function XF(n){const{inputs:e,backend:t,attrs:s}=n,{x:r,indices:o}=e,{axis:i,batchDims:a}=s;Ce([r,o],"gatherV2");const l=Be(i,r.shape)[0],c=t.data.get(o.dataId).values,u=r.shape[l];for(let C=0;C<c.length;++C){const N=c[C];_(N<=u-1&&N>=0,()=>`GatherV2: the index value ${N} is not in [0, ${u-1}]`)}let h=a;a==null&&(h=0);const d=ne(o.shape),f=Cx(r,o,l,h),g=pt({inputs:{x:r},backend:t,attrs:{shape:[f.batchSize,f.outerSize,f.dimSize,f.sliceSize]}}),x=pt({inputs:{x:o},backend:t,attrs:{shape:[f.batchSize,d/f.batchSize]}}),b=[f.batchSize,f.outerSize,d/f.batchSize,f.sliceSize],y=t.bufferSync(x),w=t.bufferSync(g),$=_1(w,y,b);return t.disposeIntermediateTensorInfo(g),t.disposeIntermediateTensorInfo(x),t.makeTensorInfo(f.outputShape,$.dtype,$.values)}const YF={kernelName:pl,backendName:"cpu",kernelFunc:XF};function ZF(n){const{inputs:e,backend:t}=n,{input:s}=e,r=ne(s.shape),o=s.shape[s.shape.length-1],i=r/o,a=pt({inputs:{x:s},backend:t,attrs:{shape:[i,o]}}),l=Sy(a,!0,t),c=pt({inputs:{x:l},backend:t,attrs:{shape:s.shape}});return t.disposeIntermediateTensorInfo(a),t.disposeIntermediateTensorInfo(l),c}const JF={kernelName:ph,backendName:"cpu",kernelFunc:ZF};const QF=rt(gi,n=>Number.isFinite(n)?1:0,"bool"),eO={kernelName:gi,backendName:"cpu",kernelFunc:QF};const tO=rt(xi,n=>Math.abs(n)===1/0?1:0,"bool"),nO={kernelName:xi,backendName:"cpu",kernelFunc:tO};const sO=rt(bi,n=>Number.isNaN(n)?1:0,"bool"),rO={kernelName:bi,backendName:"cpu",kernelFunc:sO};function oO(n){const{backend:e,attrs:t}=n,{start:s,stop:r,num:o}=t,i=M1(s,r,o);return e.makeTensorInfo([i.length],"float32",i)}const iO={kernelName:Kf,backendName:"cpu",kernelFunc:oO};const aO=rt(wi,n=>Math.log1p(n)),lO={kernelName:wi,backendName:"cpu",kernelFunc:aO};const cO=Rt((n,e)=>n&&e),uO=Bt(bl,cO,null,"bool"),hO={kernelName:bl,backendName:"cpu",kernelFunc:uO};const dO=rt(yl,n=>n?0:1,"bool"),pO={kernelName:yl,backendName:"cpu",kernelFunc:dO};const fO=Rt((n,e)=>n||e),mO=Bt(wl,fO,null,"bool"),gO={kernelName:wl,backendName:"cpu",kernelFunc:mO};function xO(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{depthRadius:o,bias:i,alpha:a,beta:l}=s;Ce(r,"LRN");const c=r.shape[3],u=c-1,h=t.data.get(r.dataId).values,d=ne(r.shape),f=new Float32Array(d);function g(x){const b=x%c;let y=x-b+Math.max(0,b-o);const w=x-b+Math.min(b+o,u);let $=0;for(;y<=w;y++){const C=h[y];$+=C*C}return $}for(let x=0;x<d;x++){const b=g(x),y=h[x]*Math.pow(i+a*b,-l);f[x]=y}return t.makeTensorInfo(r.shape,r.dtype,f)}const bO={kernelName:vl,backendName:"cpu",kernelFunc:xO};function yO(n){const{inputs:e,backend:t,attrs:s}=n,{x:r,y:o,dy:i}=e,{depthRadius:a,bias:l,alpha:c,beta:u}=s;Ce(i,"LRNGrad");const h=ne(i.shape),d=i.shape[3],f=t.data.get(i.dataId).values,g=t.data.get(r.dataId).values,x=t.data.get(o.dataId).values,b=new Float32Array(h),y=h;for(let w=0;w<y;w++){const $=w%d,C=w-$+Math.max(0,$-a),N=w-$+Math.min(d,$+a+1);let E=0;for(let F=C;F<N;F++)E+=Math.pow(g[F],2);E=c*E+l;for(let F=C;F<N;F++){let O=-2*c*u*g[F]*x[w]/E;w===F&&(O+=Math.pow(E,-u)),O*=f[w],b[F]+=O}}return t.makeTensorInfo(i.shape,r.dtype,b)}const wO={kernelName:mh,backendName:"cpu",kernelFunc:yO};function Ny(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{reductionIndices:o,keepDims:i}=s,a=t;let l=r.shape;const c=l.length,u=Be(o,l);let h=u;const d=wt(h,c);let f=a.data.get(r.dataId).values;if(d!=null){const C=new Array(c);for(let N=0;N<C.length;N++)C[N]=l[d[N]];f=zp(f,l,r.dtype,d,C),h=Nt(h.length,c),l=C}Ce(r,"max"),qt("max",h,c);const[g,x]=Ut(l,h),b=ne(x),y=B1(f,b,g,r.dtype),w=a.write(y,g,r.dtype);let $=g;return i&&($=At(g,u)),{dataId:w,shape:$,dtype:r.dtype}}const vO={kernelName:Cl,backendName:"cpu",kernelFunc:Ny};function CO(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e;Ce(r,"maxPool");const{filterSize:o,strides:i,pad:a,dimRoundingMode:l}=s,c=1;_(Qt(i,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=Ln(r.shape,o,i,c,a,l);let h;if(u.filterWidth===1&&u.filterHeight===1&&Je(u.inShape,u.outShape))h=vs({inputs:{x:r},backend:t});else{const d=t.data.get(r.dataId).values,f=Ie(r.shape),g=Wp(d,r.shape,r.dtype,f,u,"max");h=t.makeTensorInfo(u.outShape,r.dtype,g.values)}return h}const kO={kernelName:kl,backendName:"cpu",kernelFunc:CO};function $O(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{filterSize:o,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=s;Ce(r,"maxPool3d");const u=Ds(r.shape,o,i,1,a,l,c),h=t.data.get(r.dataId).values,d=ky(h,r.shape,r.dtype,Ie(r.shape),u,"max");return t.makeTensorInfo(d.shape,"float32",d.values)}const IO={kernelName:$l,backendName:"cpu",kernelFunc:$O};function SO(n){const{inputs:e,backend:t,attrs:s}=n,{dy:r,input:o}=e,{filterSize:i,strides:a,pad:l,dimRoundingMode:c}=s;Ce([r,o],"maxPool3DGrad");const u=Ds(o.shape,i,a,1,l,c),h=t.bufferSync(o),d=m_(h,u),f=u.strideDepth,g=u.strideHeight,x=u.strideWidth,b=u.dilationDepth,y=u.dilationHeight,w=u.dilationWidth,$=u.effectiveFilterDepth,C=u.effectiveFilterHeight,N=u.effectiveFilterWidth,E=$-1-u.padInfo.front,F=N-1-u.padInfo.left,O=C-1-u.padInfo.top,A=Ve(o.shape,"float32"),D=t.bufferSync(r);for(let S=0;S<u.batchSize;++S)for(let z=0;z<u.inChannels;++z)for(let U=0;U<u.inDepth;++U)for(let G=0;G<u.inHeight;++G)for(let K=0;K<u.inWidth;++K){const X=U-E,Q=G-O,Z=K-F;let te=0;for(let re=0;re<$;re+=b){const se=(X+re)/f;if(!(se<0||se>=u.outDepth||Math.floor(se)!==se))for(let ae=0;ae<C;ae+=y){const le=(Q+ae)/g;if(!(le<0||le>=u.outHeight||Math.floor(le)!==le))for(let fe=0;fe<N;fe+=w){const pe=(Z+fe)/x;if(pe<0||pe>=u.outWidth||Math.floor(pe)!==pe)continue;const we=$*C*N-1-d.get(S,se,le,pe,z),$e=re*C*N+ae*N+fe,Ee=we===$e?1:0;if(Ee===0)continue;const Te=D.get(S,se,le,pe,z);te+=Te*Ee}}}A.set(te,S,U,G,K,z)}return t.makeTensorInfo(A.shape,A.dtype,A.values)}const NO={kernelName:xh,backendName:"cpu",kernelFunc:SO};function TO(n){const{inputs:e,backend:t,attrs:s}=n,{dy:r,input:o,output:i}=e,a=o;Ce([o,i],"maxPoolGrad");const{filterSize:l,strides:c,pad:u,dimRoundingMode:h}=s,d=Ln(a.shape,l,c,1,u,h),f=t.data.get(a.dataId).values,g=Ve(d.outShape,a.dtype,Cy(f,a.shape,a.dtype,d).values),x=d.strideHeight,b=d.strideWidth,y=d.dilationHeight,w=d.dilationWidth,$=d.effectiveFilterHeight,C=d.effectiveFilterWidth,N=C-1-d.padInfo.left,E=$-1-d.padInfo.top,F=Ve(a.shape,"float32"),O=t.data.get(r.dataId).values,A=Ve(r.shape,"float32",O);for(let D=0;D<d.batchSize;++D)for(let S=0;S<d.inChannels;++S)for(let z=0;z<d.inHeight;++z)for(let U=0;U<d.inWidth;++U){const G=z-E,K=U-N;let X=0;for(let Q=0;Q<$;Q+=y){const Z=(G+Q)/x;if(!(Z<0||Z>=d.outHeight||Math.floor(Z)!==Z))for(let te=0;te<C;te+=w){const re=(K+te)/b;if(re<0||re>=d.outWidth||Math.floor(re)!==re)continue;const se=$*C-1-g.get(D,Z,re,S),ae=Q*C+te,le=se===ae?1:0;if(le===0)continue;const fe=A.get(D,Z,re,S);X+=fe*le}}F.set(X,D,z,U,S)}return t.makeTensorInfo(F.shape,F.dtype,F.values)}const EO={kernelName:gh,backendName:"cpu",kernelFunc:TO};function RO(n,e,t,s,r){const o=Ie(e),i=Wp(n,e,t,o,r,"max"),a=Cy(n,e,t,r,!0,s);return[i.values,a.values]}const DO={kernelName:qf,backendName:"cpu",kernelFunc:({inputs:n,attrs:e,backend:t})=>{const{x:s}=n,{filterSize:r,strides:o,pad:i,includeBatchInIndex:a}=e,l=t;Ce(s,"MaxPoolWithArgmax");const c=l.data.get(s.dataId).values,u=Ln(s.shape,r,o,[1,1],i),[h,d]=RO(c,s.shape,s.dtype,a,u),f=l.write(h,u.outShape,s.dtype),g=l.write(d,u.outShape,s.dtype);return[{dataId:f,shape:u.outShape,dtype:s.dtype},{dataId:g,shape:u.outShape,dtype:"int32"}]}};function AO(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{axis:o,keepDims:i}=s,a=Be(o,r.shape),c=Ut(r.shape,a)[1],u=ne(c),h=[],d=t.makeTensorInfo([],"float32",new Float32Array([u]));h.push(d);const f=lr({inputs:{x:r},backend:t,attrs:{dtype:"float32"}});h.push(f);const g=Up({inputs:{a:f,b:d},backend:t});h.push(g);const x=Ia({inputs:{x:g},backend:t,attrs:{axis:o,keepDims:i}});return h.forEach(b=>t.disposeIntermediateTensorInfo(b)),x}const _O={kernelName:Il,backendName:"cpu",kernelFunc:AO};function FO(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{axis:o,keepDims:i}=s;Ce(r,"min");const a=Be(o,r.shape);let l=a;const c=wt(l,r.shape.length);let u=r;c!=null&&(u=yn({inputs:{x:r},backend:t,attrs:{perm:c}}),l=Nt(l.length,r.shape.length)),qt("min",l,u.shape.length);const[h,d]=Ut(u.shape,l),f=ne(d),g=Jt(ne(h),u.dtype),x=t.data.get(u.dataId).values;for(let y=0;y<g.length;++y){const w=y*f;let $=x[w];for(let C=0;C<f;++C){const N=x[w+C];(Number.isNaN(N)||N<$)&&($=N)}g[y]=$}c!=null&&t.disposeIntermediateTensorInfo(u);const b=t.makeTensorInfo(h,u.dtype,g);if(i){const y=At(h,a),w=pt({inputs:{x:b},backend:t,attrs:{shape:y}});return t.disposeIntermediateTensorInfo(b),w}return b}const OO={kernelName:Sl,backendName:"cpu",kernelFunc:FO};function PO(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{paddings:o,mode:i}=s;Ce(r,"mirrorPad");const a=o.map(($,C)=>$[0]+r.shape[C]+$[1]),l=o.map($=>$[0]),c=o.map(($,C)=>$[0]+r.shape[C]),u=i==="reflect"?0:1,h=t.data.get(r.dataId).values,d=r.shape.length,f=Ie(r.shape),g=ne(a),x=a.length,b=Ie(a),y=Zt(r.dtype,g);for(let $=0;$<g;$++){let C=co($,x,b);for(let E=0;E<x;E++)C[E]<l[E]?C[E]=l[E]*2-C[E]-u:C[E]>=c[E]&&(C[E]=(c[E]-1)*2-C[E]+u);C=C.map((E,F)=>E-l[F]);const N=as(C,d,f);y[$]=h[N]}return{dataId:t.write(y,a,r.dtype),shape:a,dtype:r.dtype}}const LO={kernelName:Nl,backendName:"cpu",kernelFunc:PO};const MO=Rt(((n,e)=>{const t=n%e;return n<0&&e<0||n>=0&&e>=0?t:(t+e)%e})),zO=Bt(ki,MO),BO={kernelName:ki,backendName:"cpu",kernelFunc:zO};function Ty(n){const{inputs:e,backend:t,attrs:s}=n,{logits:r}=e,{dim:o}=s,i=r.shape.length;let a=o;if(a===-1&&(a=i-1),a!==i-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${i} and dim was ${a}`);const l=Be([a],r.shape),c=Ny({inputs:{x:r},backend:t,attrs:{reductionIndices:l,keepDims:!1}}),u=At(c.shape,l),h=pt({inputs:{x:c},backend:t,attrs:{shape:u}}),d=Vp({inputs:{a:r,b:h},backend:t}),f=T1({inputs:{x:d},backend:t}),g=Ia({inputs:{x:f},backend:t,attrs:{axis:l,keepDims:!1}}),x=pt({inputs:{x:g},backend:t,attrs:{shape:u}}),b=Up({inputs:{a:f,b:x},backend:t});return t.disposeIntermediateTensorInfo(c),t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(g),t.disposeIntermediateTensorInfo(x),b}const VO={kernelName:Hl,backendName:"cpu",kernelFunc:Ty};function WO(n){const{inputs:e,backend:t,attrs:s}=n,{logits:r}=e,{numSamples:o,seed:i,normalized:a}=s;Ce(r,"multinomial");const l=a?r:Ty({inputs:{logits:r},backend:t,attrs:{dim:-1}}),c=l.shape[0],u=l.shape[1],h=t.data.get(l.dataId).values,d=[c,o],f=Jt(ne(d),"int32");for(let g=0;g<c;++g){const x=g*u,b=new Float32Array(u-1);b[0]=h[x];for(let $=1;$<b.length;++$)b[$]=b[$-1]+h[x+$];const y=pd.alea(i.toString()),w=g*o;for(let $=0;$<o;++$){const C=y();f[w+$]=b.length;for(let N=0;N<b.length;N++)if(C<b[N]){f[w+$]=N;break}}}return a||t.disposeIntermediateTensorInfo(l),t.makeTensorInfo(d,"int32",f)}const UO={kernelName:Xf,backendName:"cpu",kernelFunc:WO};const GO=$d;function HO(n){const{inputs:e,backend:t,attrs:s}=n,{boxes:r,scores:o}=e,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l}=s;Ce(r,"NonMaxSuppression");const c=t.data.get(r.dataId).values,u=t.data.get(o.dataId).values,{selectedIndices:h}=GO(c,u,i,a,l);return t.makeTensorInfo([h.length],"int32",new Int32Array(h))}const jO={kernelName:bh,backendName:"cpu",kernelFunc:HO};const KO=Id;function qO(n){const{inputs:e,backend:t,attrs:s}=n,{boxes:r,scores:o}=e,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,padToMaxOutputSize:c}=s;Ce(r,"NonMaxSuppressionPadded");const u=t.data.get(r.dataId).values,h=t.data.get(o.dataId).values,{selectedIndices:d,validOutputs:f}=KO(u,h,i,a,l,c);return[t.makeTensorInfo([d.length],"int32",new Int32Array(d)),t.makeTensorInfo([],"int32",new Int32Array([f]))]}const XO={kernelName:yh,backendName:"cpu",kernelFunc:qO};const YO=Sd;function ZO(n){const{inputs:e,backend:t,attrs:s}=n,{boxes:r,scores:o}=e,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,softNmsSigma:c}=s;Ce(r,"NonMaxSuppressionWithScore");const u=t.data.get(r.dataId).values,h=t.data.get(o.dataId).values,d=i,f=a,g=l,x=c,{selectedIndices:b,selectedScores:y}=YO(u,h,d,f,g,x);return[t.makeTensorInfo([b.length],"int32",new Int32Array(b)),t.makeTensorInfo([y.length],"float32",new Float32Array(y))]}const JO={kernelName:wh,backendName:"cpu",kernelFunc:ZO};function QO(n){const{inputs:e,backend:t,attrs:s}=n,{indices:r}=e,{dtype:o,depth:i,onValue:a,offValue:l}=s;Ce(r,"oneHot");const c=ne(r.shape),u=new Float32Array(c*i);u.fill(l);const h=t.data.get(r.dataId).values;for(let d=0;d<c;++d)h[d]>=0&&h[d]<i&&(u[d*i+h[d]]=a);return t.makeTensorInfo([...r.shape,i],o,u)}const e3={kernelName:Dl,backendName:"cpu",kernelFunc:QO};function eu(n){const{inputs:e,backend:t}=n,{x:s}=e;if(s.dtype==="string")throw new Error("zerosLike is not supported for string tensors");if(s.dtype==="complex64"){const r=Br({inputs:{input:s},backend:t}),o=eu({inputs:{x:r},backend:t}),i=Ao({inputs:{input:s},backend:t}),a=eu({inputs:{x:i},backend:t}),l=In({inputs:{real:o,imag:a},backend:t});return t.disposeIntermediateTensorInfo(r),t.disposeIntermediateTensorInfo(o),t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(a),l}else return jp({backend:t,attrs:{shape:s.shape,value:0,dtype:s.dtype}})}const t3={kernelName:ql,backendName:"cpu",kernelFunc:eu};function Ey(n){const{inputs:e,backend:t}=n,{x:s}=e;if(s.dtype==="string")throw new Error("onesLike is not supported for string tensors");if(s.dtype==="complex64"){const r=Br({inputs:{input:s},backend:t}),o=Ey({inputs:{x:r},backend:t}),i=Ao({inputs:{input:s},backend:t}),a=eu({inputs:{x:i},backend:t}),l=In({inputs:{real:o,imag:a},backend:t});return t.disposeIntermediateTensorInfo(r),t.disposeIntermediateTensorInfo(o),t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(a),l}else return jp({backend:t,attrs:{shape:s.shape,value:1,dtype:s.dtype}})}const n3={kernelName:Rl,backendName:"cpu",kernelFunc:Ey};function Ry(n){const{inputs:e,backend:t,attrs:s}=n,{axis:r}=s;if(e.length===1)return Qc({inputs:{input:e[0]},backend:t,attrs:{dim:r}});const o=e[0].shape,i=e[0].dtype;e.forEach(u=>{Fu(o,u.shape,"All tensors passed to stack must have matching shapes"),_(i===u.dtype,()=>"All tensors passed to stack must have matching dtypes")});const a=[],l=e.map(u=>{const h=Qc({inputs:{input:u},backend:t,attrs:{dim:r}});return a.push(h),h}),c=_o({inputs:l,backend:t,attrs:{axis:r}});return a.forEach(u=>t.disposeIntermediateTensorInfo(u)),c}const s3={kernelName:Al,backendName:"cpu",kernelFunc:Ry};function r3(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{paddings:o,constantValue:i}=s;Ce(r,"pad");const a=o.map((w,$)=>w[0]+r.shape[$]+w[1]),l=o.map(w=>w[0]),c=t.data.get(r.dataId).values,u=ne(r.shape),h=r.shape.length,d=Ie(r.shape),f=ne(a),g=a.length,x=Ie(a),b=Zt(r.dtype,f);i!==0&&b.fill(i);for(let w=0;w<u;w++){const C=co(w,h,d).map((E,F)=>E+l[F]),N=as(C,g,x);b[N]=c[w]}return{dataId:t.write(b,a,r.dtype),shape:a,dtype:r.dtype}}const Dy={kernelName:_l,backendName:"cpu",kernelFunc:r3};const o3=Rt((n,e)=>Math.pow(n,e)),i3=Bt(Ii,o3),a3={kernelName:Ii,backendName:"cpu",kernelFunc:i3};function l3(n){const{inputs:e,backend:t,attrs:s}=n,{paramsNestedSplits:r,paramsDenseValues:o,indices:i}=e,{outputRaggedRank:a}=s,l=r.map(y=>t.data.get(y.dataId).values),c=r.map(y=>y.shape),u=t.data.get(o.dataId).values,h=t.data.get(i.dataId).values,[d,f,g]=K1(l,c,u,o.shape,o.dtype,h,i.shape),x=d.map(y=>t.makeTensorInfo([y.length],"int32",y)),b=t.makeTensorInfo(g,o.dtype,f);return x.concat([b])}const c3={kernelName:Yf,backendName:"cpu",kernelFunc:l3};function u3(n){const{inputs:e,backend:t}=n,{starts:s,limits:r,deltas:o}=e,i=t.data.get(s.dataId).values,a=t.data.get(r.dataId).values,l=t.data.get(o.dataId).values,[c,u]=X1(i,s.shape,s.dtype,a,r.shape,l,o.shape),h=t.makeTensorInfo([c.length],"int32",c),d=t.makeTensorInfo([u.length],s.dtype,u);return[h,d]}const h3={kernelName:Zf,backendName:"cpu",kernelFunc:u3};function d3(n){const{inputs:e,backend:t,attrs:s}=n,{shape:r,values:o,defaultValue:i,rowPartitionTensors:a}=e,{rowPartitionTypes:l}=s,c=t.data.get(r.dataId).values,u=t.data.get(o.dataId).values,h=t.data.get(i.dataId).values,d=a.map(b=>t.data.get(b.dataId).values),f=a.map(b=>b.shape),[g,x]=J1(c,r.shape,u,o.shape,o.dtype,h,i.shape,d,f,l);return t.makeTensorInfo(g,o.dtype,x)}const p3={kernelName:Jf,backendName:"cpu",kernelFunc:d3};function f3(n){const{backend:e,attrs:t}=n,{start:s,stop:r,dtype:o,step:i}=t,a=Q1(s,r,i,o);return e.makeTensorInfo([a.length],o,a)}const m3={kernelName:vh,backendName:"cpu",kernelFunc:f3};const g3=rt(Si,n=>1/n),x3={kernelName:Si,backendName:"cpu",kernelFunc:g3};function b3(n){const{inputs:e,backend:t,attrs:s}=n,{images:r}=e,{alignCorners:o,halfPixelCenters:i,size:a}=s;Ce(r,"resizeBilinear");const l=Ie(r.shape),[c,u]=a,[h,d,f,g]=r.shape,x=t.data.get(r.dataId).values,b=new Float32Array(ne([h,c,u,g])),y=[o&&c>1?d-1:d,o&&u>1?f-1:f],w=[o&&c>1?c-1:c,o&&u>1?u-1:u];let $=0;const C=y[0]/w[0],N=y[1]/w[1];for(let E=0;E<h;E++)for(let F=0;F<c;F++){let O;i?O=C*(F+.5)-.5:O=C*F;const A=Math.max(0,Math.floor(O)),D=O-A,S=Math.min(d-1,Math.ceil(O)),z=E*l[0]+A*l[1],U=E*l[0]+S*l[1];for(let G=0;G<u;G++){let K;i?K=N*(G+.5)-.5:K=N*G;const X=Math.max(0,Math.floor(K)),Q=K-X,Z=Math.min(f-1,Math.ceil(K)),te=z+X*l[2],re=U+X*l[2],se=z+Z*l[2],ae=U+Z*l[2];for(let le=0;le<g;le++){const fe=x[te+le],pe=x[re+le],we=x[se+le],$e=x[ae+le],Ee=fe+(we-fe)*Q,Te=pe+($e-pe)*Q,Fe=Ee+(Te-Ee)*D;b[$++]=Fe}}}return t.makeTensorInfo([h,c,u,g],"float32",b)}const y3={kernelName:Ml,backendName:"cpu",kernelFunc:b3};function w3(n){const{inputs:e,backend:t,attrs:s}=n,{images:r,dy:o}=e,{alignCorners:i}=s;Ce([o,r],"resizeBilinearGrad");const a=Ie(r.shape),[l,c,u,h]=r.shape,[,d,f]=o.shape,g=new Float32Array(l*c*u*h),x=[i&&d>1?c-1:c,i&&f>1?u-1:u],b=[i&&d>1?d-1:d,i&&f>1?f-1:f],y=x[0]/b[0],w=x[1]/b[1],$=t.data.get(o.dataId).values;let C=0;for(let N=0;N<l;N++){const E=N*a[0];for(let F=0;F<d;F++){const O=F*y,A=Math.floor(O),D=Math.min(Math.ceil(O),c-1),S=E+A*a[1],z=E+D*a[1],U=O-A,G=1-U;for(let K=0;K<f;K++){const X=K*w,Q=Math.floor(X),Z=Math.min(Math.ceil(X),u-1),te=X-Q,re=1-te,se=S+Q*a[2],ae=S+Z*a[2],le=z+Q*a[2],fe=z+Z*a[2],pe=G*re,we=G*te,$e=U*re,Ee=U*te;for(let Te=0;Te<h;Te++){const Fe=$[C++];g[se+Te]+=Fe*pe,g[ae+Te]+=Fe*we,g[le+Te]+=Fe*$e,g[fe+Te]+=Fe*Ee}}}}return t.makeTensorInfo([l,u,c,h],"float32",g)}const v3={kernelName:$h,backendName:"cpu",kernelFunc:w3};function C3(n){const{inputs:e,backend:t,attrs:s}=n,{images:r}=e,{alignCorners:o,halfPixelCenters:i,size:a}=s;Ce(r,"resizeNearestNeighbor");const l=Ie(r.shape),[c,u]=a,[h,d,f,g]=r.shape,x=t.data.get(r.dataId).values,b=new Float32Array(h*c*u*g),y=[o&&c>1?d-1:d,o&&u>1?f-1:f],w=[o&&c>1?c-1:c,o&&u>1?u-1:u],$=y[0]/w[0],C=y[1]/w[1];let N=0;for(let E=0;E<h;E++){const F=E*l[0];for(let O=0;O<c;O++){const A=i?$*(O+.5):$*O;let D=Math.min(d-1,o?Math.round(A):Math.floor(A));i&&(D=Math.max(0,D));const S=F+D*l[1];for(let z=0;z<u;z++){const U=i?C*(z+.5):C*z;let G=Math.min(f-1,o?Math.round(U):Math.floor(U));i&&(G=Math.max(0,G));const K=S+G*l[2];for(let X=0;X<g;X++){const Q=x[K+X];b[N++]=Q}}}}return t.makeTensorInfo([h,c,u,g],r.dtype,b)}const k3={kernelName:Ll,backendName:"cpu",kernelFunc:C3};function $3(n){const{inputs:e,backend:t,attrs:s}=n,{images:r,dy:o}=e,{alignCorners:i}=s;Ce([o,r],"resizeNearestNeighborGrad");const a=Ie(r.shape),l=Ie(o.shape),[c,u,h,d]=r.shape,[,f,g]=o.shape,x=new Float32Array(c*u*h*d),b=t.data.get(o.dataId).values,y=[i&&f>1?u-1:u,i&&g>1?h-1:h],w=[i&&f>1?f-1:f,i&&g>1?g-1:g],$=y[0]/w[0],C=y[1]/w[1],N=1/$,E=1/C,F=Math.ceil(N)*2+2,O=Math.ceil(E)*2+2;for(let A=0;A<c;A++){const D=A*a[0];for(let S=0;S<u;S++){const z=D+S*a[1],U=Math.floor(S*N),G=Math.floor(U-F/2);for(let K=0;K<h;K++){const X=z+K*a[2],Q=Math.floor(K*E),Z=Math.floor(Q-O/2);for(let te=0;te<d;te++){let re=0;for(let se=0;se<F;se++){const ae=se+G;if(ae<0||ae>=f)continue;const le=D+ae*l[1],fe=ae*$,pe=Math.min(u-1,i?Math.round(fe):Math.floor(fe));if(S===pe)for(let we=0;we<O;we++){const $e=we+Z;if($e<0||$e>=g)continue;const Ee=le+$e*l[2],Te=$e*C,Fe=Math.min(h-1,i?Math.round(Te):Math.floor(Te));K===Fe&&(re+=b[Ee+te])}}x[X+te]=re}}}}return t.makeTensorInfo(r.shape,r.dtype,x)}const I3={kernelName:kh,backendName:"cpu",kernelFunc:$3};function S3(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{dims:o}=s;Ce(r,"reverse");const i=r.shape.length,a=Be(o,r.shape);if(i===0)return vs({inputs:{x:r},backend:t});const l=new jt(r.shape,r.dtype),c=t.bufferSync(r);for(let u=0;u<l.size;u++){const h=l.indexToLoc(u),d=h.slice();a.forEach(f=>d[f]=r.shape[f]-1-d[f]),l.set(c.get(...d),...h)}return t.makeTensorInfo(l.shape,l.dtype,l.values)}const N3={kernelName:zl,backendName:"cpu",kernelFunc:S3};const T3={kernelName:Dh,backendName:"cpu",kernelFunc:({inputs:n,attrs:e,backend:t})=>{const{image:s}=n,{radians:r,fillValue:o,center:i}=e,a=t,l=Zt(s.dtype,ne(s.shape)),[c,u,h,d]=s.shape,[f,g]=Fd(i,u,h),x=255,b=Math.sin(r),y=Math.cos(r),w=a.data.get(s.dataId).values;for(let C=0;C<c;C++){const N=C*h*u*d;for(let E=0;E<u;E++){const F=E*(h*d);for(let O=0;O<h;O++){const A=O*d;for(let D=0;D<d;D++){const S=[c,E,O,D],z=S[2],U=S[1];let G=(z-f)*y-(U-g)*b,K=(z-f)*b+(U-g)*y;G=Math.round(G+f),K=Math.round(K+g);let X=o;if(typeof o!="number"&&(D===3?X=x:X=o[D]),G>=0&&G<h&&K>=0&&K<u){const Z=K*(h*d),te=G*d,re=N+Z+te+D;X=w[re]}const Q=N+F+A+D;l[Q]=X}}}}return{dataId:a.write(l,s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};const E3=rt(Ei,n=>{const e=Math.floor(n);return n-e<.5?Math.floor(n):n-e>.5?Math.ceil(n):e%2===0?e:e+1}),R3={kernelName:Ei,backendName:"cpu",kernelFunc:E3};function D3(n){const{inputs:e,backend:t,attrs:s}=n,{indices:r,updates:o}=e,{shape:i}=s,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:h}=Dr(o,r,i),d=!0,f=t.bufferSync(r),g=t.bufferSync(o),x=Vr(f,g,i,h,c,l,a,u,0,d);return t.makeTensorInfo(i,x.dtype,x.values)}const A3={kernelName:Qf,backendName:"cpu",kernelFunc:D3};function _3(n,e){let t=0,s=n.length,r=0;for(;t<s;)r=Math.floor((t+s)/2),n[r]<e?t=r+1:s=r;return s}function F3(n,e){let t=0,s=n.length,r=0;for(;t<s;)r=Math.floor((t+s)/2),n[r]<=e?t=r+1:s=r;return s}function O3(n,e,t,s,r,o){const i=It("int32",t*r);for(let a=0;a<t;++a){const l=n.slice(a*s,(a+1)*s),c=a*r;for(let u=0;u<r;++u)i[c+u]=o==="left"?_3(l,e[u+c]):F3(l,e[u+c])}return i}function P3(n){const{inputs:e,backend:t,attrs:s}=n,{sortedSequence:r,values:o}=e,{side:i}=s,a=t.data.get(r.dataId).values,l=t.data.get(o.dataId).values,c=O3(a,l,r.shape[0],r.shape[1],o.shape[1],i);return t.makeTensorInfo(o.shape,"int32",c)}const L3={kernelName:tm,backendName:"cpu",kernelFunc:P3};function M3(n){const{inputs:e,backend:t}=n,{condition:s,t:r,e:o}=e;Ce([s,r,o],"select");const i=s.shape.length,a=t.data.get(s.dataId).values,l=t.data.get(r.dataId).values,c=t.data.get(o.dataId).values,u=Cn(r.dtype,o.dtype),h=Jt(ne(r.shape),u);let d=0;const f=i===0||i>1||r.shape.length===1?1:ne(r.shape.slice(1));for(let g=0;g<a.length;g++)for(let x=0;x<f;x++)a[g]===1?h[d++]=l[g]:h[d++]=c[g];return t.makeTensorInfo(r.shape,u,h)}const z3={kernelName:Bl,backendName:"cpu",kernelFunc:M3};const B3=kc,V3=$c,W3=rt(Di,n=>n>=0?V3*n:B3*(Math.exp(n)-1)),U3={kernelName:Di,backendName:"cpu",kernelFunc:W3};const G3=rt(Fi,n=>n<0?-1:n>0?1:0),H3={kernelName:Fi,backendName:"cpu",kernelFunc:G3};const j3=rt(Ai,n=>Math.sin(n)),K3={kernelName:Ai,backendName:"cpu",kernelFunc:j3};const q3=rt(_i,n=>Math.sinh(n)),X3={kernelName:_i,backendName:"cpu",kernelFunc:q3};const Ay=Math.log(11920928955078125e-23)+2,Y3=rt(Pi,n=>{const e=n>-Ay,t=n<Ay,s=Math.exp(n);let r;return t?r=s:e?r=n:r=Math.log(1+s),r}),Z3={kernelName:Pi,backendName:"cpu",kernelFunc:Y3};function J3(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{blockShape:o,paddings:i}=s;Ce([r],"spaceToBatchND");const a=ne(o),l=[[0,0]];l.push(...i);for(let E=1+o.length;E<r.shape.length;++E)l.push([0,0]);const c=Dy.kernelFunc({inputs:{x:r},backend:t,attrs:{paddings:l,constantValue:0}}),u=oa(c.shape,o,a,!1),h=ia(u.length,o.length,!1),d=aa(c.shape,o,a,!1),x=pt({inputs:{x:c},backend:t,attrs:{shape:u}}),w=yn({inputs:{x},backend:t,attrs:{perm:h}}),N=pt({inputs:{x:w},backend:t,attrs:{shape:d}});return t.disposeIntermediateTensorInfo(c),t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(w),N}const Q3={kernelName:Ul,backendName:"cpu",kernelFunc:J3};function eP(n){const{inputs:e,backend:t}=n,{indices:s,values:r,denseShape:o,defaultValue:i}=e;if(o.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
        ${o.shape}`);if(s.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
        ${s.shape}`);if(r.shape.length!==1)throw new Error(`Values must be a vector, saw:
        ${r.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);const a=t.data.get(s.dataId).values,l=t.data.get(r.dataId).values,c=t.data.get(o.dataId).values,u=t.data.get(i.dataId).values[0],[h,d,f,g,x]=sy(a,s.shape,s.dtype,l,r.dtype,c,u);return[t.makeTensorInfo(d,s.dtype,h),t.makeTensorInfo([d[0]],r.dtype,f),t.makeTensorInfo([g.length],"bool",new Uint8Array(g.map(b=>Number(b)))),t.makeTensorInfo([x.length],s.dtype,new Int32Array(x))]}const tP={kernelName:nm,backendName:"cpu",kernelFunc:eP};function nP(n){const{inputs:e,backend:t}=n,{inputIndices:s,inputShape:r,newShape:o}=e;if(s.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape
        ${s.shape}`);if(r.shape.length!==1)throw new Error(`Input shape should be a vector but received shape
        ${r.shape}`);if(o.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${o.shape}`);const i=Array.from(t.data.get(r.dataId).values),a=t.data.get(s.dataId).values,l=Array.from(t.data.get(o.dataId).values),[c,u,h]=ry(a,s.shape,s.dtype,i,l);return[t.makeTensorInfo(u,s.dtype,c),t.makeTensorInfo([h.length],o.dtype,new Int32Array(h))]}const sP={kernelName:sm,backendName:"cpu",kernelFunc:nP};function rP(n){const{inputs:e,backend:t}=n,{data:s,indices:r,segmentIds:o}=e;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.shape.length!==1)throw new Error(`Indices should be a vector but received shape
          ${r.shape}`);if(o.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
          ${o.shape}`);if(r.shape[0]!==o.shape[0])throw new Error("segmentIds and indices should have same size.");const i=t.data.get(s.dataId).values,a=t.data.get(r.dataId).values,l=t.data.get(o.dataId).values,[c,u]=Bp(i,s.shape,s.dtype,a,l,!0);return t.makeTensorInfo(u,s.dtype,c)}const oP={kernelName:rm,backendName:"cpu",kernelFunc:rP};function iP(n){const{inputs:e,backend:t}=n,{data:s,indices:r,segmentIds:o}=e;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.shape.length!==1)throw new Error(`Indices should be a vector but received shape
         ${r.shape}`);if(o.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
         ${o.shape}`);if(r.shape[0]!==o.shape[0])throw new Error("segmentIds and indices should have same size.");const i=t.data.get(s.dataId).values,a=t.data.get(r.dataId).values,l=t.data.get(o.dataId).values,[c,u]=Bp(i,s.shape,s.dtype,a,l);return t.makeTensorInfo(u,s.dtype,c)}const aP={kernelName:om,backendName:"cpu",kernelFunc:iP};function lP(n){const{inputs:e,backend:t,attrs:s}=n,{sparseIndices:r,sparseValues:o,defaultValue:i}=e,{outputShape:a}=s,{sliceRank:l,numUpdates:c,sliceSize:u,strides:h,outputSize:d}=Dr(o,r,a),f=!1,g=t.bufferSync(r);let x;switch(o.dtype){case"bool":{const b=t.bufferSync(o),y=!!t.data.get(i.dataId).values[0];x=Vr(g,b,a,d,u,c,l,h,y,f);break}case"float32":{const b=t.bufferSync(o),y=t.data.get(i.dataId).values[0];x=Vr(g,b,a,d,u,c,l,h,y,f);break}case"int32":{const b=t.bufferSync(o),y=t.data.get(i.dataId).values[0];x=Vr(g,b,a,d,u,c,l,h,y,f);break}case"string":{const b=t.bufferSync(o),y=Ks(t.data.get(i.dataId).values[0]);x=Vr(g,b,a,d,u,c,l,h,y,f);break}default:throw new Error(`Unsupported type ${o.dtype}`)}return t.makeTensorInfo(a,x.dtype,x.values)}const cP={kernelName:im,backendName:"cpu",kernelFunc:lP};function uP(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{numOrSizeSplits:o,axis:i}=s,a=Be(i,r.shape)[0],l=Yd(r,o,a),c=new Array(r.shape.length).fill(0),u=r.shape.slice();return l.map(h=>{const d=[...u];d[a]=h;const f=Wr({inputs:{x:r},backend:t,attrs:{begin:c,size:d}});return c[a]+=h,f})}const hP={kernelName:Gl,backendName:"cpu",kernelFunc:uP};const dP={kernelName:Ih,backendName:"cpu",kernelFunc:({inputs:n,backend:e})=>{const{x:t}=n,s=e;Ce(t,"square");const r=s.data.get(t.dataId).values,o=new Float32Array(r.length);for(let a=0;a<r.length;++a){const l=r[a];o[a]=l*l}return{dataId:s.write(o,t.shape,t.dtype),shape:t.shape,dtype:t.dtype}}};const pP=rt(Ui,(n,e)=>{const t=e;return isNaN(n)?NaN:n>0?1:t.alpha}),fP={kernelName:Ui,backendName:"cpu",kernelFunc:pP};function mP(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{begin:o,end:i,strides:a,beginMask:l,endMask:c,ellipsisMask:u,newAxisMask:h,shrinkAxisMask:d}=s;Ce(r,"stridedSlice");const{finalShapeSparse:f,finalShape:g,isIdentity:x,sliceDim0:b,isSimpleSlice:y,begin:w,end:$,strides:C}=Yg(r.shape,o,i,a,l,c,u,h,d);let N;if(x)N=pt({inputs:{x:r},backend:t,attrs:{shape:g}});else if(b||y){_(r.shape.length>=1,()=>`Input must have rank at least 1, got: ${r.shape.length}`);const E=Kg(w,$,C),F=Wr({inputs:{x:r},backend:t,attrs:{begin:w,size:E}});N=pt({inputs:{x:F},backend:t,attrs:{shape:g}}),t.disposeIntermediateTensorInfo(F)}else{const E=t.bufferSync(r),F=ay(f,E,C,w);N=t.makeTensorInfo(g,F.dtype,F.values)}return N}const gP={kernelName:Nh,backendName:"cpu",kernelFunc:mP};function xP(n){const{inputs:e,backend:t,attrs:s}=n,{separator:r,nGramWidths:o,leftPad:i,rightPad:a,padWidth:l,preserveShortSequences:c}=s,{data:u,dataSplits:h}=e,d=t.data.get(u.dataId).values,f=t.data.get(h.dataId).values,[g,x]=ly(d,f,r,o,i,a,l,c);return[t.makeTensorInfo([g.length],"string",g),t.makeTensorInfo(h.shape,"int32",x)]}const bP={kernelName:am,backendName:"cpu",kernelFunc:xP};function yP(n){const{inputs:e,backend:t,attrs:s}=n,{skipEmpty:r}=s,{input:o,delimiter:i}=e;if(o.dtype!=="string")throw new Error("Input must be of datatype string");if(o.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${o.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);const a=t.data.get(o.dataId).values,l=t.data.get(i.dataId).values[0],[c,u,h]=cy(a,l,r),d=u.length;return[t.makeTensorInfo([d,2],"int32",c),t.makeTensorInfo([d],"string",u),t.makeTensorInfo([2],"int32",new Int32Array(h))]}const wP={kernelName:lm,backendName:"cpu",kernelFunc:yP};function vP(n){const{inputs:e,backend:t,attrs:s}=n,{numBuckets:r}=s,{input:o}=e;if(o.dtype!=="string")throw new Error("Input must be of datatype string");if(r<=0)throw new Error("Number of buckets must be at least 1");const i=t.data.get(o.dataId).values,a=uy(i,r);return t.makeTensorInfo(o.shape,"int32",a)}const CP={kernelName:cm,backendName:"cpu",kernelFunc:vP};const kP=rt(Bi,n=>Math.tan(n)),$P={kernelName:Bi,backendName:"cpu",kernelFunc:kP};const IP=rt(Vi,n=>Math.tanh(n)),SP={kernelName:Vi,backendName:"cpu",kernelFunc:IP};function NP(n){const{inputs:e,backend:t}=n,{tensor:s,indices:r,updates:o}=e,{sliceRank:i,numUpdates:a,sliceSize:l,strides:c,outputSize:u}=Dr(o,r,s.shape),h=!1,d=t.bufferSync(r),f=t.bufferSync(o),g=t.bufferSync(s),x=Vr(d,f,s.shape,u,l,a,i,c,g,h);return t.makeTensorInfo(s.shape,x.dtype,x.values)}const TP={kernelName:em,backendName:"cpu",kernelFunc:NP};function EP(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{reps:o}=s;Ce(r,"tile");const i=dy(t.bufferSync(r),o);return t.makeTensorInfo(i.shape,i.dtype,i.values)}const RP={kernelName:Wi,backendName:"cpu",kernelFunc:EP};function DP(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{k:o,sorted:i}=s;Ce(r,"topk");const a=t.data.get(r.dataId).values,[l,c]=fy(a,r.shape,r.dtype,o,i);return[t.makeTensorInfo(l.shape,l.dtype,l.values),t.makeTensorInfo(c.shape,c.dtype,c.values)]}const AP={kernelName:Th,backendName:"cpu",kernelFunc:DP};function _P(n){const{inputs:e,attrs:t,backend:s}=n,{image:r,transforms:o}=e,{interpolation:i,fillMode:a,fillValue:l,outputShape:c}=t,[u,h,d,f]=r.shape,[g,x]=c??[h,d],b=[u,g,x,f],y=Ie(r.shape),w=y[0],$=y[1],C=y[2],N=Ie(b),E=N[0],F=N[1],O=N[2],A=Zt(r.dtype,ne(b));A.fill(l);const D=s.data.get(r.dataId).values,S=s.data.get(o.dataId).values;for(let U=0;U<u;++U){const G=o.shape[0]===1?S:S.subarray(U*8,U*8+8);for(let K=0;K<g;++K)for(let X=0;X<x;++X)for(let Q=0;Q<f;++Q){let Z;const te=G[6]*X+G[7]*K+1;if(te===0)continue;const re=(G[0]*X+G[1]*K+G[2])/te,se=(G[3]*X+G[4]*K+G[5])/te,ae=_y(re,d,a),le=_y(se,h,a);switch(i){case"nearest":Z=zP(D,h,d,w,$,C,U,le,ae,Q,l);break;case"bilinear":Z=BP(D,h,d,w,$,C,U,le,ae,Q,l);break;default:throw new Error(`Error in Transform: Expect 'nearest' or 'bilinear', but got ${i}`)}const fe=U*E+K*F+X*O+Q;A[fe]=Z}return s.makeTensorInfo(b,r.dtype,A)}return{dataId:s.write(A,b,r.dtype),shape:r.shape,dtype:r.dtype}}const FP={kernelName:Eh,backendName:"cpu",kernelFunc:_P};function _y(n,e,t){switch(t){case"reflect":return OP(n,e);case"wrap":return PP(n,e);case"nearest":return MP(n,e);default:return LP(n)}}function OP(n,e){let t=n;if(t<0)if(e<=1)t=0;else{const s=2*e;t<s&&(t=s*Math.trunc(-t/s)+t),t=t<-e?t+s:-t-1}else if(t>e-1)if(e<=1)t=0;else{const s=2*e;t-=s*Math.trunc(t/s),t>=e&&(t=s-t-1)}return Au(0,t,e-1)}function PP(n,e){let t=n;if(t<0)if(e<=1)t=0;else{const s=e-1;t+=e*(Math.trunc(-t/s)+1)}else if(t>e-1)if(e<=1)t=0;else{const s=e-1;t-=e*Math.trunc(t/s)}return Au(0,t,e-1)}function LP(n,e){return n}function MP(n,e){return Au(0,n,e-1)}function Sa(n,e,t,s,r,o,i,a,l,c,u){const h=i*s+a*r+l*o+c;return 0<=a&&a<e&&0<=l&&l<t?n[h]:u}function zP(n,e,t,s,r,o,i,a,l,c,u){const h=Math.round(a),d=Math.round(l);return Sa(n,e,t,s,r,o,i,h,d,c,u)}function BP(n,e,t,s,r,o,i,a,l,c,u){const h=Math.floor(a),d=Math.floor(l),f=h+1,g=d+1,x=(g-l)*Sa(n,e,t,s,r,o,i,h,d,c,u)+(l-d)*Sa(n,e,t,s,r,o,i,h,g,c,u),b=(g-l)*Sa(n,e,t,s,r,o,i,f,d,c,u)+(l-d)*Sa(n,e,t,s,r,o,i,f,g,c,u);return(f-a)*x+(a-h)*b}function VP(n){const{inputs:e,attrs:t,backend:s}=n,{axis:r}=t,{x:o}=e;Ce(o,"unique");const i=s.data.get(o.dataId).values,{outputValues:a,outputShape:l,indices:c}=my(i,r,o.shape,o.dtype);return[s.makeTensorInfo(l,o.dtype,a),s.makeTensorInfo([c.length],"int32",c)]}const WP={kernelName:Rh,backendName:"cpu",kernelFunc:VP};function UP(n){const{inputs:e,backend:t,attrs:s}=n,{value:r}=e;let{axis:o}=s;o<0&&(o+=r.shape.length);const i=r.shape.length,a=r.shape[o],l=new Array(i-1);let c=0;for(let f=0;f<i;f++)f!==o&&(l[c++]=r.shape[f]);const u=new Array(i).fill(0),h=r.shape.slice();h[o]=1;const d=new Array(a);for(let f=0;f<d.length;f++){u[o]=f;const g=Wr({inputs:{x:r},backend:t,attrs:{begin:u,size:h}});d[f]=pt({inputs:{x:g},backend:t,attrs:{shape:l}}),t.disposeIntermediateTensorInfo(g)}return d}const GP={kernelName:jl,backendName:"cpu",kernelFunc:UP};function HP(n){const{inputs:e,backend:t,attrs:s}=n,{x:r,segmentIds:o}=e,{numSegments:i}=s;Ce(r,"unsortedSegmentSum");const a=r.shape.length,l=o.shape.length,c=[],u=[],h=a-l;let d=o;for(let g=0;g<h;++g){const x=Qc({inputs:{input:d},backend:t,attrs:{dim:g+1}});d=x,u.push(x)}for(let g=0;g<i;++g){const x=Hs(g,"int32"),b=t.makeTensorInfo([],"int32",x),y=S1({inputs:{a:b,b:d},backend:t}),w=lr({inputs:{x:y},backend:t,attrs:{dtype:"float32"}}),$=Yc({inputs:{a:w,b:r},backend:t}),C=Ia({inputs:{x:$},backend:t,attrs:{axis:0,keepDims:!1}});c.push(C),u.push(b),u.push(y),u.push(w),u.push($),u.push(C)}const f=Ry({inputs:c,backend:t,attrs:{axis:0}});return u.forEach(g=>t.disposeIntermediateTensorInfo(g)),f}const jP={kernelName:Kl,backendName:"cpu",kernelFunc:HP};const KP=[UA,kD,HA,KA,ED,XA,ZA,QA,t_,s_,o_,a_,c_,d_,f_,x_,y_,v_,k_,VA,I_,N_,E_,DD,D_,ND,_D,__,$D,F_,P_,L_,z_,V_,U_,H_,K_,X_,Z_,Q_,tF,sF,oF,aF,lF,uF,dF,fF,mF,gF,xF,yF,CF,FA,$F,FD,AF,OD,_F,LD,zF,BF,WF,zD,VD,GF,jF,qF,YF,UD,HD,ID,JF,O_,eO,nO,rO,OA,KD,XD,iO,ZD,lO,hO,pO,gO,bO,wO,vO,QD,kO,IO,NO,EO,DO,_O,OO,tA,LO,BO,UO,sA,oA,jO,XO,JO,aA,e3,n3,s3,Dy,a3,LA,uA,c3,h3,p3,m3,SD,Gp,x3,MA,zA,BA,y3,v3,k3,I3,N3,T3,R3,bA,A3,L3,z3,U3,wA,H3,K3,X3,vA,VO,Z3,Q3,tP,sP,oP,aP,cP,hP,$A,dP,SA,TA,fP,gP,bP,wP,CP,AA,wF,$P,SP,TP,RP,AP,FP,lA,WP,GP,jP,t3];for(const n of KP)fm(n);const Ur={},tu={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function qP(n,e){Ur[n]=e}function rs(n,e){if(!(n in Ur)||e!=null){const s=YP(n,e);if(s!==null)Ur[n]=s;else return console.log("Could not get context for WebGL version",n),null}const t=Ur[n];return t==null||t.isContextLost()?(delete Ur[n],rs(n)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),Ur[n])}function XP(n){if(!J().getBool("IS_SAFARI")&&typeof OffscreenCanvas<"u"&&n===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}function YP(n,e){if(n!==1&&n!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");const t=e??XP(n);return t.addEventListener("webglcontextlost",s=>{s.preventDefault(),delete Ur[n]},!1),J().getBool("SOFTWARE_WEBGL_ENABLED")&&(tu.failIfMajorPerformanceCaveat=!1),n===1?t.getContext("webgl",tu)||t.getContext("experimental-webgl",tu):t.getContext("webgl2",tu)}var Na;(function(n){n[n.DENSE=0]="DENSE",n[n.SHARED_BATCH=1]="SHARED_BATCH"})(Na||(Na={}));var On;(function(n){n[n.RENDER=0]="RENDER",n[n.UPLOAD=1]="UPLOAD",n[n.PIXELS=2]="PIXELS",n[n.DOWNLOAD=3]="DOWNLOAD"})(On||(On={}));var Xt;(function(n){n[n.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",n[n.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",n[n.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",n[n.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",n[n.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"})(Xt||(Xt={}));function Ta(n,e){return[e,n]}function ZP(n,e){return n*e}function nu(n){const e=ne(n),t=Math.ceil(e/4);return Ou(t)}function Fo(n,e){return[Math.max(1,Math.ceil(e/2)),Math.max(1,Math.ceil(n/2))]}function JP(n,e){const[t,s]=Fo(n,e);return t*s*4}function Kp(n,e){const t=n;let s,r,o,i,a,l,c,u,h,d;return J().getNumber("WEBGL_VERSION")===2?(s=t.R32F,r=t.R16F,o=t.RGBA16F,i=t.RGBA32F,a=t.RED,c=4,u=1,h=t.HALF_FLOAT,d=t.FLOAT,l=t.RGBA8):(s=n.RGBA,r=n.RGBA,o=n.RGBA,i=t.RGBA,a=n.RGBA,c=4,u=4,h=e!=null?e.HALF_FLOAT_OES:null,d=n.FLOAT,l=n.RGBA),{internalFormatFloat:s,internalFormatHalfFloat:r,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:i,textureFormatFloat:a,downloadTextureFormat:l,downloadUnpackNumChannels:c,defaultNumChannels:u,textureTypeHalfFloat:h,textureTypeFloat:d}}function ye(n,e){const t=e();return J().getBool("DEBUG")&&QP(n),t}function QP(n){const e=n.getError();if(e!==n.NO_ERROR)throw new Error("WebGL Error: "+sL(n,e))}const eL=596e-10,tL=65504;function nL(n){return!!(J().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||n===0||eL<Math.abs(n)&&Math.abs(n)<tL)}function sL(n,e){switch(e){case n.NO_ERROR:return"NO_ERROR";case n.INVALID_ENUM:return"INVALID_ENUM";case n.INVALID_VALUE:return"INVALID_VALUE";case n.INVALID_OPERATION:return"INVALID_OPERATION";case n.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case n.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case n.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${e}`}}function su(n,e){return Bs(n,()=>n.getExtension(e),'Extension "'+e+'" not supported on this browser.')}function rL(n,e){const t=Bs(n,()=>n.createShader(n.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(ye(n,()=>n.shaderSource(t,e)),ye(n,()=>n.compileShader(t)),n.getShaderParameter(t,n.COMPILE_STATUS)===!1)throw console.log(n.getShaderInfoLog(t)),new Error("Failed to compile vertex shader.");return t}function oL(n,e){const t=Bs(n,()=>n.createShader(n.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(ye(n,()=>n.shaderSource(t,e)),ye(n,()=>n.compileShader(t)),J().get("ENGINE_COMPILE_ONLY"))return t;if(n.getShaderParameter(t,n.COMPILE_STATUS)===!1)throw Fy(e,n.getShaderInfoLog(t)),new Error("Failed to compile fragment shader.");return t}const iL=/ERROR: [0-9]+:([0-9]+):/g;function Fy(n,e){const t=iL.exec(e);if(t==null){console.log(`Couldn't parse line number in error: ${e}`),console.log(n);return}const s=+t[1],r=n.split(`
`),o=r.length.toString().length+2,i=r.map((h,d)=>ao((d+1).toString(),o)+h);let a=0;for(let h=0;h<i.length;h++)a=Math.max(i[h].length,a);const l=i.slice(0,s-1),c=i.slice(s-1,s),u=i.slice(s);console.log(l.join(`
`)),console.log(e.split(`
`)[0]),console.log(`%c ${ao(c[0],a)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(u.join(`
`))}function aL(n){return Bs(n,()=>n.createProgram(),"Unable to create WebGLProgram.")}function lL(n,e){if(ye(n,()=>n.linkProgram(e)),!J().get("ENGINE_COMPILE_ONLY")&&n.getProgramParameter(e,n.LINK_STATUS)===!1)throw console.log(n.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function qp(n,e){if(ye(n,()=>n.validateProgram(e)),n.getProgramParameter(e,n.VALIDATE_STATUS)===!1)throw console.log(n.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function cL(n,e){const t=Bs(n,()=>n.createBuffer(),"Unable to create WebGLBuffer");return ye(n,()=>n.bindBuffer(n.ARRAY_BUFFER,t)),ye(n,()=>n.bufferData(n.ARRAY_BUFFER,e,n.STATIC_DRAW)),t}function uL(n,e){const t=Bs(n,()=>n.createBuffer(),"Unable to create WebGLBuffer");return ye(n,()=>n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t)),ye(n,()=>n.bufferData(n.ELEMENT_ARRAY_BUFFER,e,n.STATIC_DRAW)),t}function hL(n){return Bs(n,()=>n.createTexture(),"Unable to create WebGLTexture.")}function dL(n,e){const t=J().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(n<=0||e<=0){const s=`[${n}x${e}]`;throw new Error("Requested texture size "+s+" is invalid.")}if(n>t||e>t){const s=`[${n}x${e}]`,r=`[${t}x${t}]`;throw new Error("Requested texture size "+s+" greater than WebGL maximum on this browser / GPU "+r+".")}}function pL(n){return Bs(n,()=>n.createFramebuffer(),"Unable to create WebGLFramebuffer.")}function Oy(n,e,t,s,r,o,i){const a=n.getAttribLocation(e,t);return a===-1?!1:(ye(n,()=>n.bindBuffer(n.ARRAY_BUFFER,s)),ye(n,()=>n.vertexAttribPointer(a,r,n.FLOAT,!1,o,i)),ye(n,()=>n.enableVertexAttribArray(a)),!0)}function fL(n,e,t){yL(n,t),ye(n,()=>n.activeTexture(n.TEXTURE0+t)),ye(n,()=>n.bindTexture(n.TEXTURE_2D,e))}function mL(n,e,t){return Bs(n,()=>n.getUniformLocation(e,t),'uniform "'+t+'" not present in program.')}function gL(n,e,t){return n.getUniformLocation(e,t)}function xL(n,e,t,s){ye(n,()=>fL(n,e,s)),ye(n,()=>n.uniform1i(t,s))}function Xp(n,e,t){ye(n,()=>n.bindFramebuffer(n.FRAMEBUFFER,t)),ye(n,()=>n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0))}function Py(n,e){ye(n,()=>n.bindFramebuffer(n.FRAMEBUFFER,e)),ye(n,()=>n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,null,0))}function ru(n){const e=n.checkFramebufferStatus(n.FRAMEBUFFER);if(e!==n.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+bL(n,e))}function bL(n,e){switch(e){case n.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case n.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${e}`}}function Bs(n,e,t){const s=ye(n,()=>e());if(s==null)throw new Error(t);return s}function yL(n,e){const t=n.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,s=e+n.TEXTURE0;if(s<n.TEXTURE0||s>t){const r=`[gl.TEXTURE0, gl.TEXTURE${t}]`;throw new Error(`textureUnit must be in ${r}.`)}}function Oo(n,e=2){return ne(n.slice(0,n.length-e))}function Po(n){if(n.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[n.length>1?n[n.length-2]:1,n[n.length-1]]}function ou(n){let e=[1,1,1];return n.length===0||n.length===1&&n[0]===1||(e=[Oo(n),...Po(n)]),e}function wL(n,e=!1){let t=J().getNumber("WEBGL_MAX_TEXTURE_SIZE"),s=J().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");s===1/0&&J().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE")&&(s=t/2),e&&(t=t*2,s=s*2,n=n.map((a,l)=>l>=n.length-2?_u(n[l]):n[l]),n.length===1&&(n=[2,n[0]])),n.length!==2&&(n=Us(n).newShape);let r=ne(n),o=null;n.length<=1&&r<=t?o=[1,r]:n.length===2&&n[0]<=t&&n[1]<=t?o=n:n.length===3&&n[0]*n[1]<=t&&n[2]<=t?o=[n[0]*n[1],n[2]]:n.length===3&&n[0]<=t&&n[1]*n[2]<=t?o=[n[0],n[1]*n[2]]:n.length===4&&n[0]*n[1]*n[2]<=t&&n[3]<=t?o=[n[0]*n[1]*n[2],n[3]]:n.length===4&&n[0]<=t&&n[1]*n[2]*n[3]<=t&&(o=[n[0],n[1]*n[2]*n[3]]);const i=o!=null&&Math.max(...o)>s&&Math.min(...o)<=(e?2:1)&&Math.min(...o)>0;if(o==null||i)if(e){const a=Oo(n);let l=2,c=2;n.length&&([l,c]=Po(n)),r=a*(l/2)*(c/2),o=Ou(r).map(u=>u*2)}else o=Ou(r);return o}function iu(n){return n%2===0}function au(n,e){if(n=n.slice(-2),e=e.slice(-2),Je(n,e)||!n.length||!e.length||n[0]===0||n[1]===0||e[0]===0||e[1]===0)return!0;if(n.length!==e.length){const t=n[n.length-1],s=e[e.length-1];if(t===s||iu(t)&&iu(s)&&(n[0]===1||e[0]===1))return!0}return n[1]===e[1]&&iu(n[0])&&iu(e[0])}let Yp,Zp;function vL(n){if(Yp==null){const e=rs(n);Yp=e.getParameter(e.MAX_TEXTURE_SIZE)}return Yp}function CL(n){if(Zp==null){const e=rs(n);Zp=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Zp)}function kL(n){if(n===0)return 0;let e;const t=rs(n);return Hn(t,"EXT_disjoint_timer_query_webgl2")&&n===2?e=2:Hn(t,"EXT_disjoint_timer_query")?e=1:e=0,e}function Hn(n,e){return n.getExtension(e)!=null}function Ly(n){try{if(rs(n)!=null)return!0}catch(e){return console.log("Error when getting WebGL context: ",e),!1}return!1}function $L(n){if(n===0)return!1;const e=rs(n);if(n===1){if(!Hn(e,"OES_texture_float"))return!1}else if(!Hn(e,"EXT_color_buffer_float"))return!1;return Jp(e)}function IL(n){if(n===0)return!1;const e=rs(n);if(n===1){if(!Hn(e,"OES_texture_float")||!Hn(e,"WEBGL_color_buffer_float"))return!1}else{if(Hn(e,"EXT_color_buffer_float"))return Jp(e);const s="EXT_color_buffer_half_float";if(Hn(e,s)){const r=e.getExtension(s);return SL(e,r)}return!1}return Jp(e)}function Jp(n){const e=Kp(n),t=n.createTexture();n.bindTexture(n.TEXTURE_2D,t),n.texImage2D(n.TEXTURE_2D,0,e.internalFormatFloat,1,1,0,e.textureFormatFloat,e.textureTypeFloat,null);const o=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,o),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,t,0);const i=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(t),n.deleteFramebuffer(o),i}function SL(n,e){const t=Kp(n,e),s=n.createTexture();n.bindTexture(n.TEXTURE_2D,s),n.texImage2D(n.TEXTURE_2D,0,t.internalFormatHalfFloat,1,1,0,t.textureFormatFloat,t.textureTypeHalfFloat,null);const i=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,i),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s,0);const a=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(s),n.deleteFramebuffer(i),a}function NL(n){return n!==2?!1:rs(n).fenceSync!=null}function Ea(n,e){Array.isArray(n)||(n=[n]),n.forEach(t=>{t!=null&&_(t.dtype!=="complex64",()=>`${e} does not support complex64 tensors in the WebGL backend.`)})}const ke=J();ke.registerFlag("HAS_WEBGL",()=>ke.getNumber("WEBGL_VERSION")>0),ke.registerFlag("WEBGL_VERSION",()=>Ly(2)?2:Ly(1)?1:0),ke.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1),ke.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>ke.get("WEBGL_VERSION")===2),ke.registerFlag("WEBGL_CPU_FORWARD",()=>!0),ke.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1),ke.registerFlag("WEBGL_PACK",()=>ke.getBool("HAS_WEBGL")),ke.registerFlag("WEBGL_PACK_NORMALIZATION",()=>ke.getBool("WEBGL_PACK")),ke.registerFlag("WEBGL_PACK_CLIP",()=>ke.getBool("WEBGL_PACK")),ke.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>ke.getBool("WEBGL_PACK")),ke.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>ke.getBool("WEBGL_PACK")),ke.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>ke.getBool("WEBGL_PACK")),ke.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>ke.getBool("WEBGL_PACK")),ke.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>ke.getBool("WEBGL_PACK")),ke.registerFlag("WEBGL_PACK_REDUCE",()=>ke.getBool("WEBGL_PACK")),ke.registerFlag("WEBGL_LAZILY_UNPACK",()=>ke.getBool("WEBGL_PACK")),ke.registerFlag("WEBGL_CONV_IM2COL",()=>ke.getBool("WEBGL_PACK")),ke.registerFlag("WEBGL_PACK_CONV2DTRANSPOSE",()=>ke.getBool("WEBGL_PACK")),ke.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>vL(ke.getNumber("WEBGL_VERSION"))),ke.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>CL(ke.getNumber("WEBGL_VERSION"))),ke.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{const n=ke.getNumber("WEBGL_VERSION");return n===0?0:kL(n)}),ke.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>ke.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!Am()),ke.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>$L(ke.getNumber("WEBGL_VERSION"))),ke.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>ke.getBool("WEBGL_FORCE_F16_TEXTURES")?!1:ke.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")),ke.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>IL(ke.getNumber("WEBGL_VERSION"))),ke.registerFlag("WEBGL_FENCE_API_ENABLED",()=>NL(ke.getNumber("WEBGL_VERSION"))),ke.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>ke.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0),ke.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,n=>{if(typeof n!="number")throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be a number but got ${n}.`);if(n<0&&n!==-1)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${n}.`)}),ke.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>Am()?1:-1,n=>{if(typeof n!="number")throw new Error(`WEBGL_FLUSH_THRESHOLD must be a number but got ${n}.`);if(n<0&&n!==-1)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${n}.`)}),ke.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128),ke.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1),ke.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5),ke.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128),ke.registerFlag("WEBGL_EXP_CONV",()=>!1),ke.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>ke.getBool("IS_TEST")),ke.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",()=>1/0),ke.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",()=>!1),ke.registerFlag("WEBGL2_ISNAN_CUSTOM",()=>!1),ke.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);function ln(){let n,e,t,s,r,o,i,a,l,c;return J().getNumber("WEBGL_VERSION")===2?(n="#version 300 es",e="in",t="out",s="in",r="texture",o="outputColor",i="out vec4 outputColor;",a=J().getBool("WEBGL2_ISNAN_CUSTOM")?`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `:"",l="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(n="",e="attribute",t="varying",s="varying",r="texture2D",o="gl_FragColor",i="",a=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,l=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:n,attribute:e,varyingVs:t,varyingFs:s,texture2D:r,output:o,defineOutput:i,defineSpecialNaN:a,defineSpecialInf:l,defineRound:c}}function Gr(n,e,t="index"){const s=Ie(e);return s.map((r,o)=>{const i=`int ${n[o]} = ${t} / ${r}`,a=o===s.length-1?`int ${n[o+1]} = ${t} - ${n[o]} * ${r}`:`index -= ${n[o]} * ${r}`;return`${i}; ${a};`}).join("")}function lu(n,e,t="index"){const s=Ie(e);return s.map((r,o)=>{const i=`int ${n[o]} = ${t} / outShapeStrides[${o}]`,a=o===s.length-1?`int ${n[o+1]} = ${t} - ${n[o]} * outShapeStrides[${o}]`:`index -= ${n[o]} * outShapeStrides[${o}]`;return`${i}; ${a};`}).join("")}function TL(n,e){const t=n.length,s=n.map(o=>`${e}[${o}]`),r=new Array(t-1);r[t-2]=s[t-1];for(let o=t-3;o>=0;--o)r[o]=`(${r[o+1]} * ${s[o+1]})`;return r}function EL(n,e,t="index"){const s=n.map((o,i)=>i),r=TL(s,e);return r.map((o,i)=>{const a=`int ${n[i]} = ${t} / ${r[i]}`,l=i===r.length-1?`int ${n[i+1]} = ${t} - ${n[i]} * ${r[i]}`:`index -= ${n[i]} * ${r[i]}`;return`${a}; ${l};`}).join("")}function Qp(n){const e=Ie(n).map(t=>t.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${e[0]} + coords.y * ${e[1]} + coords.z;
  }
`}function ef(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}const My=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;const{getBroadcastDims:zy}=$N;function RL(n,e,t){const s=[];if(n.forEach(f=>{const g=ne(f.shapeInfo.logicalShape);if(f.shapeInfo.isUniform?s.push(`uniform float ${f.name}${g>1?`[${g}]`:""};`):(s.push(`uniform sampler2D ${f.name};`),s.push(`uniform int offset${f.name};`)),t.enableShapeUniforms){const{uniformShape:x}=tf(t.packedInputs,f.shapeInfo.logicalShape,f.shapeInfo.texShape);switch(x.length){case 1:s.push(`uniform int ${f.name}Shape;`);break;case 2:s.push(`uniform ivec2 ${f.name}Shape;`);break;case 3:s.push(`uniform ivec3 ${f.name}Shape;`);break;case 4:s.push(`uniform ivec4 ${f.name}Shape;`);break}s.push(`uniform ivec2 ${f.name}TexShape;`)}}),t.enableShapeUniforms){switch(e.logicalShape.length){case 1:s.push("uniform int outShape;");break;case 2:s.push("uniform ivec2 outShape;"),s.push("uniform int outShapeStrides;");break;case 3:s.push("uniform ivec3 outShape;"),s.push("uniform ivec2 outShapeStrides;");break;case 4:s.push("uniform ivec4 outShape;"),s.push("uniform ivec3 outShapeStrides;");break}s.push("uniform ivec2 outTexShape;")}t.customUniforms&&t.customUniforms.forEach(f=>{s.push(`uniform ${f.type} ${f.name}${f.arrayIndex?`[${f.arrayIndex}]`:""};`)});const r=s.join(`
`),o=n.map(f=>DL(f,e,t.packedInputs,t.enableShapeUniforms)).join(`
`),i=e.texShape,a=ln(),l=FL(a);let c,u,h=LL(a);return e.isPacked?(c=AL(e.logicalShape,i,t.enableShapeUniforms),u=PL(a)):(c=_L(e.logicalShape,i,t.enableShapeUniforms),u=OL(a)),t.packedInputs&&(h+=VL),[h,l,u,r,c,o,t.userCode].join(`
`)}function Lo(n,e=!1){const t=n.shapeInfo.logicalShape;switch(t.length){case 0:return eM(n,e);case 1:return nM(n,e);case 2:return rM(n,e);case 3:return iM(n,e);case 4:return lM(n,e);case 5:return cM(n);case 6:return uM(n);default:throw new Error(`${t.length}-D input sampling is not yet supported`)}}function By(n,e){switch(n.shapeInfo.logicalShape.length){case 0:return QL(n);case 1:return tM(n,e);case 2:return sM(n,e);case 3:return oM(n,e);default:return aM(n,e)}}function DL(n,e,t=!1,s){let r="";t?r+=By(n,s):r+=Lo(n,s);const o=n.shapeInfo.logicalShape,i=e.logicalShape;return o.length<=i.length&&(t?r+=hM(n,e):r+=dM(n,e)),r}function AL(n,e,t){switch(n.length){case 0:return Vy();case 1:return WL(n,e,t);case 2:return ZL(n,e,t);case 3:return HL(n,e,t);default:return KL(n,e,t)}}function _L(n,e,t){switch(n.length){case 0:return Vy();case 1:return UL(n,e,t);case 2:return JL(n,e,t);case 3:return jL(n,e,t);case 4:return qL(n,e,t);case 5:return XL(n,e);case 6:return YL(n,e);default:throw new Error(`${n.length}-D output sampling is not yet supported`)}}function FL(n){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${n.texture2D}(textureSampler, uv).r;
    }
  `}function OL(n){return`
    void setOutput(float val) {
      ${n.output} = vec4(val, 0, 0, 0);
    }
  `}function PL(n){return`
    void setOutput(vec4 val) {
      ${n.output} = val;
    }
  `}function LL(n){return`${n.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${n.varyingFs} vec2 resultUV;
    ${n.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${n.defineSpecialNaN}
    ${n.defineSpecialInf}
    ${n.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${ML}
    ${zL}
    ${BL}
  `}const ML=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,zL=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,BL=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,VL=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function Vy(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function WL(n,e,t){const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];return s[0]===1?t?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${s[1]}.0);
      }
    `:s[1]===1?t?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${s[0]}.0);
      }
    `:t?`
    int getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      return 2 * (resTexRC.x * ${s[1]} + resTexRC.y);
    }
  `}function UL(n,e,t){return e[0]===1?t?`
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.x * ${e[1]}.0);
      }
    `:e[1]===1?t?`
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.y * ${e[0]}.0);
      }
    `:t?`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      return resTexRC.x * ${e[1]} + resTexRC.y;
    }
  `}function HL(n,e,t){if(t)return`
    ivec3 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec3(b, r, c);
    }
  `;const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)],r=Math.ceil(n[2]/2),o=r*Math.ceil(n[1]/2);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      int index = resTexRC.x * ${s[1]} + resTexRC.y;

      int b = index / ${o};
      index -= b * ${o};

      int r = 2 * (index / ${r});
      int c = imod(index, ${r}) * 2;

      return ivec3(b, r, c);
    }
  `}function jL(n,e,t){if(t)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${lu(["r","c","d"],n)}
    return ivec3(r, c, d);
  }
`;const s=Gr(["r","c","d"],n);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      ${s}
      return ivec3(r, c, d);
    }
  `}function KL(n,e,t){if(t)return`
    ivec4 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatchN = texelsInBatch * outShape[1];

      int b2 = index / texelsInBatchN;
      index -= b2 * texelsInBatchN;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec4(b2, b, r, c);
    }
  `;const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)],r=Math.ceil(n[n.length-1]/2),o=r*Math.ceil(n[n.length-2]/2);let i=o,a="",l="b, r, c";for(let c=2;c<n.length-1;c++)i*=n[n.length-c-1],a=`
      int b${c} = index / ${i};
      index -= b${c} * ${i};
    `+a,l=`b${c}, `+l;return`
    ivec${n.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      int index = resTexRC.x * ${s[1]} + resTexRC.y;

      ${a}

      int b = index / ${o};
      index -= b * ${o};

      int r = 2 * (index / ${r});
      int c = imod(index, ${r}) * 2;

      return ivec${n.length}(${l});
    }
  `}function qL(n,e,t){if(t)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${lu(["r","c","d","d2"],n)}
      return ivec4(r, c, d, d2);
    }
  `;const s=Gr(["r","c","d","d2"],n);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      ${s}
      return ivec4(r, c, d, d2);
    }
  `}function XL(n,e){const t=Gr(["r","c","d","d2","d3"],n);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${e[0]},
                             ${e[1]}));

      int index = resTexRC.x * ${e[1]} + resTexRC.y;

      ${t}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function YL(n,e){const t=Gr(["r","c","d","d2","d3","d4"],n);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;

      ${t}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function ZL(n,e,t){const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];if(Je(n,e))return t?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${s[0]}, ${s[1]}));
      }
    `;const r=Math.ceil(n[1]/2);return t?`
    ivec2 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));

      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;
      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));

      int index = resTexRC.x * ${s[1]} + resTexRC.y;
      int r = 2 * (index / ${r});
      int c = imod(index, ${r}) * 2;

      return ivec2(r, c);
    }
  `}function JL(n,e,t){return Je(n,e)?t?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${e[0]}, ${e[1]}));
      }
    `:n[1]===1?t?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${e[0]}, ${e[1]}));
        int index = resTexRC.x * ${e[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `:n[0]===1?t?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${e[0]}, ${e[1]}));
        int index = resTexRC.x * ${e[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `:t?`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      int r = index / outShape[1];
      int c = index - r * outShape[1];
      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      int r = index / ${n[1]};
      int c = index - r * ${n[1]};
      return ivec2(r, c);
    }
  `}function Hr(n){return`offset${n}`}function QL(n){const e=n.name,t="get"+e.charAt(0).toUpperCase()+e.slice(1),s=ln();return`
    vec4 ${t}() {
      return ${s.texture2D}(${e}, halfCR);
    }
  `}function eM(n,e){const t=n.name,s="get"+t.charAt(0).toUpperCase()+t.slice(1);if(n.shapeInfo.isUniform)return`float ${s}() {return ${t};}`;const[r,o]=n.shapeInfo.texShape;if(r===1&&o===1)return`
      float ${s}() {
        return sampleTexture(${t}, halfCR);
      }
    `;const i=Hr(t);if(e)return`
    float ${s}() {
      vec2 uv = uvFromFlat(${t}TexShape[0], ${t}TexShape[1], ${i});
      return sampleTexture(${t}, uv);
    }
  `;const[a,l]=n.shapeInfo.texShape;return`
    float ${s}() {
      vec2 uv = uvFromFlat(${a}, ${l}, ${i});
      return sampleTexture(${t}, uv);
    }
  `}function tM(n,e){const t=n.name,s="get"+t.charAt(0).toUpperCase()+t.slice(1),r=n.shapeInfo.texShape,o=ln();if(e)return`
    vec4 ${s}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${t}TexShape[0]) / 2.0), ceil(float(${t}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${o.texture2D}(${t}, uv);
    }
  `;const i=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)];return`
    vec4 ${s}(int index) {
      vec2 uv = packedUVfrom1D(
        ${i[0]}, ${i[1]}, index);
      return ${o.texture2D}(${t}, uv);
    }
  `}function nM(n,e){const t=n.name,s="get"+t.charAt(0).toUpperCase()+t.slice(1);if(n.shapeInfo.isUniform)return`
      float ${s}(int index) {
        ${Mo(n)}
      }
    `;const r=n.shapeInfo.texShape,o=r[0],i=r[1];if(i===1&&o===1)return`
      float ${s}(int index) {
        return sampleTexture(${t}, halfCR);
      }
    `;const a=Hr(t);return i===1?e?`
      float ${s}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / float(${t}TexShape[0]));
        return sampleTexture(${t}, uv);
      }
    `:`
      float ${s}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / ${o}.0);
        return sampleTexture(${t}, uv);
      }
    `:o===1?e?`
      float ${s}(int index) {
        vec2 uv = vec2((float(index + ${a}) + 0.5) / float(${t}TexShape[1]), 0.5);
        return sampleTexture(${t}, uv);
      }
    `:`
      float ${s}(int index) {
        vec2 uv = vec2((float(index + ${a}) + 0.5) / ${i}.0, 0.5);
        return sampleTexture(${t}, uv);
      }
    `:e?`
    float ${s}(int index) {
      vec2 uv = uvFromFlat(${t}TexShape[0], ${t}TexShape[1], index + ${a});
      return sampleTexture(${t}, uv);
    }
  `:`
    float ${s}(int index) {
      vec2 uv = uvFromFlat(${o}, ${i}, index + ${a});
      return sampleTexture(${t}, uv);
    }
  `}function sM(n,e){const t=n.shapeInfo.logicalShape,s=n.name,r="get"+s.charAt(0).toUpperCase()+s.slice(1),o=n.shapeInfo.texShape,i=o[0],a=o[1],l=ln();if(o!=null&&Je(t,o))return e?`
      vec4 ${r}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);

        return ${l.texture2D}(${s}, uv);
      }
    `:`
      vec4 ${r}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${a}.0, ${i}.0);

        return ${l.texture2D}(${s}, uv);
      }
    `;if(e)return`
    vec4 ${r}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${s}TexShape[0]) / 2.0), ceil(float(${s}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${s}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${l.texture2D}(${s}, uv);
    }
  `;const c=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)],u=Math.ceil(t[1]/2);return`
    vec4 ${r}(int row, int col) {
      vec2 uv = packedUVfrom2D(${u}, ${c[0]}, ${c[1]}, row, col);
      return ${l.texture2D}(${s}, uv);
    }
  `}function rM(n,e){const t=n.shapeInfo.logicalShape,s=n.name,r="get"+s.charAt(0).toUpperCase()+s.slice(1),o=n.shapeInfo.texShape;if(o!=null&&Je(t,o)){if(e)return`
      float ${r}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `;const d=o[0],f=o[1];return`
    float ${r}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${f}.0, ${d}.0);
      return sampleTexture(${s}, uv);
    }
  `}const{newShape:i,keptDims:a}=Us(t),l=i;if(l.length<t.length){const d=zo(n,l),f=["row","col"];return`
      ${Lo(d,e)}
      float ${r}(int row, int col) {
        return ${r}(${Bo(f,a)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${r}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${t[1]}, 1)));
        ${Mo(n)}
      }
    `;const c=o[0],u=o[1],h=Hr(s);return u===1?e?`
      float ${r}(int row, int col) {
        float index = dot(vec3(row, col, ${h}), vec3(${s}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${s}TexShape[0]));
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${r}(int row, int col) {
      float index = dot(vec3(row, col, ${h}), vec3(${t[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${c}.0);
      return sampleTexture(${s}, uv);
    }
  `:c===1?e?`
      float ${r}(int row, int col) {
        float index = dot(vec3(row, col, ${h}), vec3(${s}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${s}TexShape[1]), 0.5);
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${r}(int row, int col) {
      float index = dot(vec3(row, col, ${h}), vec3(${t[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${u}.0, 0.5);
      return sampleTexture(${s}, uv);
    }
  `:e?`
      float ${r}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${s}Shape[1] + col + ${h};
        vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index);
        return sampleTexture(${s}, uv);
      }
    `:`
  float ${r}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${t[1]} + col + ${h};
    vec2 uv = uvFromFlat(${c}, ${u}, index);
    return sampleTexture(${s}, uv);
  }
`}function oM(n,e){const t=n.shapeInfo.logicalShape,s=n.name,r="get"+s.charAt(0).toUpperCase()+s.slice(1),o=n.shapeInfo.texShape,i=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)];if(t[0]===1){const d=t.slice(1),f=[1,2],g=zo(n,d),x=["b","row","col"];return`
        ${By(g,e)}
        vec4 ${r}(int b, int row, int col) {
          return ${r}(${Bo(x,f)});
        }
      `}const a=ln();if(e)return`
    vec4 ${r}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${s}TexShape[0]) / 2.0), ceil(float(${s}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${s}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${s}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${a.texture2D}(${s}, uv);
    }
  `;const l=i[0],c=i[1],u=Math.ceil(t[2]/2),h=u*Math.ceil(t[1]/2);return`
    vec4 ${r}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${l}, ${c}, ${h}, ${u}, b, row, col);
      return ${a.texture2D}(${s}, uv);
    }
  `}function iM(n,e){const t=n.shapeInfo.logicalShape,s=n.name,r="get"+s.charAt(0).toUpperCase()+s.slice(1),o=t[1]*t[2],i=t[2],{newShape:a,keptDims:l}=Us(t),c=a;if(c.length<t.length){const x=zo(n,c),b=["row","col","depth"];return`
        ${Lo(x,e)}
        float ${r}(int row, int col, int depth) {
          return ${r}(${Bo(b,l)});
        }
      `}if(n.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${o}, ${i}, 1)));
        ${Mo(n)}
      }
    `;const u=n.shapeInfo.texShape,h=u[0],d=u[1],f=n.shapeInfo.flatOffset;if(d===o&&f==null)return e?`
      float ${r}(int row, int col, int depth) {
        int stride1 = ${s}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
        float ${r}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${i}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${d}.0, ${h}.0);
          return sampleTexture(${s}, uv);
        }
      `;if(d===i&&f==null)return e?`
      float ${r}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${s}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${r}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${t[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${d}.0, ${h}.0);
      return sampleTexture(${s}, uv);
    }
  `;const g=Hr(s);return e?`
    float ${r}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${s}Shape[1] * ${s}Shape[2];
      int stride1 = ${s}Shape[2];
      int index = row * stride0 + col * stride1 + depth + ${g};
      vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index);
      return sampleTexture(${s}, uv);
    }
    `:`
      float ${r}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${o} + col * ${i} + depth + ${g};
        vec2 uv = uvFromFlat(${h}, ${d}, index);
        return sampleTexture(${s}, uv);
      }
  `}function aM(n,e){const t=n.name,s="get"+t.charAt(0).toUpperCase()+t.slice(1),r=ln();if(e)return`
    vec4 ${s}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${t}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${t}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${t}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${t}TexShape[0]) / 2.0), ceil(float(${t}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${r.texture2D}(${t}, uv);
    }
  `;const o=n.shapeInfo.logicalShape,i=o.length,a=n.shapeInfo.texShape,l=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)],c=l[0],u=l[1],h=Math.ceil(o[i-1]/2);let d=h*Math.ceil(o[i-2]/2),f="int b, int row, int col",g=`b * ${d} + (row / 2) * ${h} + (col / 2)`;for(let x=2;x<i-1;x++)f=`int b${x}, `+f,d*=o[i-x-1],g=`b${x} * ${d} + `+g;return`
    vec4 ${s}(${f}) {
      int index = ${g};
      int texR = index / ${u};
      int texC = index - texR * ${u};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${u}, ${c});
      return ${r.texture2D}(${t}, uv);
    }
  `}function lM(n,e){const t=n.shapeInfo.logicalShape,s=n.name,r="get"+s.charAt(0).toUpperCase()+s.slice(1),o=t[3],i=t[2]*o,a=t[1]*i,{newShape:l,keptDims:c}=Us(t);if(l.length<t.length){const w=zo(n,l),$=["row","col","depth","depth2"];return`
      ${Lo(w,e)}
      float ${r}(int row, int col, int depth, int depth2) {
        return ${r}(${Bo($,c)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${a}, ${i}, ${o}, 1)));
        ${Mo(n)}
      }
    `;const u=n.shapeInfo.flatOffset,h=n.shapeInfo.texShape,d=h[0],f=h[1],g=`int stride2 = ${s}Shape[3];`,x=`int stride1 = ${s}Shape[2] * stride2;`,b=`int stride0 = ${s}Shape[1] * stride1;`;if(f===a&&u==null)return e?`
      float ${r}(int row, int col, int depth, int depth2) {
        ${g}
        ${x}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
      float ${r}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${i}, ${o}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${d}.0);
        return sampleTexture(${s}, uv);
      }
    `;if(f===o&&u==null)return e?`
      float ${r}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${s}Shape[1] * ${s}Shape[2], ${s}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
      float ${r}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${t[1]*t[2]}, ${t[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${d}.0);
        return sampleTexture(${s}, uv);
      }
    `;const y=Hr(s);return e?`
    float ${r}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${g}
      ${x}
      ${b}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index + ${y});
      return sampleTexture(${s}, uv);
    }
  `:`
    float ${r}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} +
          depth * ${o} + depth2;
      vec2 uv = uvFromFlat(${d}, ${f}, index + ${y});
      return sampleTexture(${s}, uv);
    }
  `}function cM(n){const e=n.shapeInfo.logicalShape,t=n.name,s="get"+t.charAt(0).toUpperCase()+t.slice(1),r=e[4],o=e[3]*r,i=e[2]*o,a=e[1]*i,{newShape:l,keptDims:c}=Us(e);if(l.length<e.length){const x=zo(n,l),b=["row","col","depth","depth2","depth3"];return`
      ${Lo(x)}
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        return ${s}(${Bo(b,c)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${a}, ${i}, ${o}, ${r})) +
          depth3;
        ${Mo(n)}
      }
    `;const u=n.shapeInfo.flatOffset,h=n.shapeInfo.texShape,d=h[0],f=h[1];if(f===a&&u==null)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${i}, ${o}, ${r}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${d}.0);
        return sampleTexture(${t}, uv);
      }
    `;if(f===r&&u==null)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${e[1]*e[2]*e[3]},
               ${e[2]*e[3]}, ${e[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${d}.0);
        return sampleTexture(${t}, uv);
      }
    `;const g=Hr(t);return`
    float ${s}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} + depth * ${o} +
          depth2 * ${r} + depth3 + ${g};
      vec2 uv = uvFromFlat(${d}, ${f}, index);
      return sampleTexture(${t}, uv);
    }
  `}function uM(n){const e=n.shapeInfo.logicalShape,t=n.name,s="get"+t.charAt(0).toUpperCase()+t.slice(1),{newShape:r,keptDims:o}=Us(e);if(r.length<e.length){const b=zo(n,r),y=["row","col","depth","depth2","depth3","depth4"];return`
      ${Lo(b)}
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${s}(${Bo(y,o)});
      }
    `}const i=e[5],a=e[4]*i,l=e[3]*a,c=e[2]*l,u=e[1]*c;if(n.shapeInfo.isUniform)return`
      float ${s}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${u}, ${c}, ${l}, ${a})) +
          dot(
            vec2(depth3, depth4),
            vec2(${i}, 1)));
        ${Mo(n)}
      }
    `;const h=n.shapeInfo.flatOffset,d=n.shapeInfo.texShape,f=d[0],g=d[1];if(g===u&&h==null)return`
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${c}, ${l}, ${a}, ${i})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${g}.0, ${f}.0);
        return sampleTexture(${t}, uv);
      }
    `;if(g===i&&h==null)return`
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${e[1]*e[2]*e[3]*e[4]},
               ${e[2]*e[3]*e[4]},
               ${e[3]*e[4]},
               ${e[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${g}.0, ${f}.0);
        return sampleTexture(${t}, uv);
      }
    `;const x=Hr(t);return`
    float ${s}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${u} + col * ${c} + depth * ${l} +
          depth2 * ${a} + depth3 * ${i} + depth4 + ${x};
      vec2 uv = uvFromFlat(${f}, ${g}, index);
      return sampleTexture(${t}, uv);
    }
  `}function Mo(n){const e=n.name,t=ne(n.shapeInfo.logicalShape);return t<2?`return ${e};`:`
    for (int i = 0; i < ${t}; i++) {
      if (i == index) {
        return ${e}[i];
      }
    }
  `}function hM(n,e){const t=n.name,s=t.charAt(0).toUpperCase()+t.slice(1),r="get"+s+"AtOutCoords",o=n.shapeInfo.logicalShape.length,i=e.logicalShape.length,a=zy(n.shapeInfo.logicalShape,e.logicalShape),l=it(i),c=i-o;let u;const h=["x","y","z","w","u","v"];o===0?u="":i<2&&a.length>=1?u="coords = 0;":u=a.map(w=>`coords.${h[w+c]} = 0;`).join(`
`);let d="";i<2&&o>0?d="coords":d=n.shapeInfo.logicalShape.map((w,$)=>`coords.${h[$+c]}`).join(", ");let f="return outputValue;";const x=ne(n.shapeInfo.logicalShape)===1,y=ne(e.logicalShape)===1;if(o===1&&!x&&!y)f=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(x&&!y)i===1?f=`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:f=`
        return vec4(outputValue.x);
      `;else if(a.length){const w=o-2,$=o-1;a.indexOf(w)>-1&&a.indexOf($)>-1?f="return vec4(outputValue.x);":a.indexOf(w)>-1?f="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":a.indexOf($)>-1&&(f="return vec4(outputValue.xx, outputValue.zz);")}return`
    vec4 ${r}() {
      ${l} coords = getOutputCoords();
      ${u}
      vec4 outputValue = get${s}(${d});
      ${f}
    }
  `}function dM(n,e){const t=n.name,s=t.charAt(0).toUpperCase()+t.slice(1),r="get"+s+"AtOutCoords",o=e.texShape,i=n.shapeInfo.texShape,a=n.shapeInfo.logicalShape.length,l=e.logicalShape.length;if(!n.shapeInfo.isUniform&&a===l&&n.shapeInfo.flatOffset==null&&Je(i,o))return`
      float ${r}() {
        return sampleTexture(${t}, resultUV);
      }
    `;const c=it(l),u=zy(n.shapeInfo.logicalShape,e.logicalShape),h=l-a;let d;const f=["x","y","z","w","u","v"];a===0?d="":l<2&&u.length>=1?d="coords = 0;":d=u.map(x=>`coords.${f[x+h]} = 0;`).join(`
`);let g="";return l<2&&a>0?g="coords":g=n.shapeInfo.logicalShape.map((x,b)=>`coords.${f[b+h]}`).join(", "),`
    float ${r}() {
      ${c} coords = getOutputCoords();
      ${d}
      return get${s}(${g});
    }
  `}function it(n){if(n<=1)return"int";if(n===2)return"ivec2";if(n===3)return"ivec3";if(n===4)return"ivec4";if(n===5)return"ivec5";if(n===6)return"ivec6";throw Error(`GPU for rank ${n} is not yet supported`)}function tf(n,e,t){const{newShape:s,keptDims:r}=Us(e),o=e.length,i=n&&o===3&&e[0]===1,a=i?e.slice(1):s,l=!n&&o>1&&!Je(e,t)&&s.length<o||i;return{useSqueezeShape:l,uniformShape:l?a:e,keptDims:r}}function zo(n,e){const t=JSON.parse(JSON.stringify(n));return t.shapeInfo.logicalShape=e,t}function Bo(n,e){return e.map(t=>n[t]).join(", ")}function pM(n,e,t,s){const r=t.map((u,h)=>{const d={logicalShape:u.shape,texShape:u.isUniform?null:u.texData.texShape,isUniform:u.isUniform,isPacked:u.isUniform?!1:u.texData.isPacked,flatOffset:null};return u.texData!=null&&u.texData.slice!=null&&u.texData.slice.flatOffset>0&&(d.flatOffset=u.texData.slice.flatOffset),{name:e.variableNames[h],shapeInfo:d}}),o=r.map(u=>u.shapeInfo),i={logicalShape:s.shape,texShape:s.texData.texShape,isUniform:!1,isPacked:s.texData.isPacked,flatOffset:null},a=RL(r,i,e),l=oL(n.gl,a),c=n.createProgram(l);return J().get("ENGINE_COMPILE_ONLY")?{program:e,fragmentShader:l,source:a,webGLProgram:c,inShapeInfos:o,outShapeInfo:i,variablesLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:(n.buildVao(c),Object.assign({program:e,fragmentShader:l,source:a,webGLProgram:c,inShapeInfos:o,outShapeInfo:i},Wy(n,e,c)))}function Wy(n,e,t){const s=[],r=[];let o,i,a,l=null,c=null;c=n.getUniformLocation(t,"NAN",!1),J().getNumber("WEBGL_VERSION")===1&&(l=n.getUniformLocation(t,"INFINITY",!1));const u=!1;for(const h of e.variableNames){const d={name:h,uniform:n.getUniformLocation(t,h,u),offset:n.getUniformLocation(t,`offset${h}`,u)};e.enableShapeUniforms&&(d.shape=n.getUniformLocation(t,`${h}Shape`,u),d.texShape=n.getUniformLocation(t,`${h}TexShape`,u)),s.push(d)}if(e.enableShapeUniforms&&(o=n.getUniformLocation(t,"outShape",u),a=n.getUniformLocation(t,"outShapeStrides",u),i=n.getUniformLocation(t,"outTexShape",u)),e.customUniforms)for(const h of e.customUniforms)r.push(n.getUniformLocation(t,h.name,u));return{variablesLocations:s,customUniformLocations:r,infLoc:l,nanLoc:c,outShapeLocation:o,outShapeStridesLocation:a,outTexShapeLocation:i}}function Uy(n,e){if(n.length!==e.length)throw Error(`Binary was compiled with ${n.length} inputs, but was executed with ${e.length} inputs`);n.forEach((t,s)=>{const r=t.logicalShape,o=e[s],i=o.shape;if(!Je(r,i))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${r} and ${i} must match`);if(t.isUniform&&o.isUniform)return;const a=t.texShape,l=o.isUniform?null:o.texData.texShape;if(!Je(a,l))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${a} and ${l} must match`)})}function fM(n,e,t,s,r){e.program.enableShapeUniforms||(Uy(e.inShapeInfos,t),Uy([e.outShapeInfo],[s]));const o=s.texData.texture,i=s.texData.texShape;s.texData.isPacked?n.setOutputPackedMatrixTexture(o.texture,i[0],i[1]):n.setOutputMatrixTexture(o.texture,i[0],i[1]),n.setProgram(e.webGLProgram),n.bindVertexArray(e.webGLProgram.vao),J().getNumber("WEBGL_VERSION")===1&&e.infLoc!==null&&n.gl.uniform1f(e.infLoc,1/0),e.nanLoc!==null&&n.gl.uniform1f(e.nanLoc,NaN);for(let l=0;l<t.length;++l){const c=t[l],{uniform:u,offset:h,shape:d,texShape:f}=e.variablesLocations[l];if(d){const{uniformShape:g}=tf(e.program.packedInputs,c.shape,c.texData.texShape);switch(g.length){case 1:n.gl.uniform1iv(d,new Int32Array(g));break;case 2:n.gl.uniform2iv(d,new Int32Array(g));break;case 3:n.gl.uniform3iv(d,new Int32Array(g));break;case 4:n.gl.uniform4iv(d,new Int32Array(g));break}}if(f&&n.gl.uniform2i(f,c.texData.texShape[0],c.texData.texShape[1]),u!=null){if(c.isUniform){if(ne(c.shape)<2)n.gl.uniform1f(u,c.uniformValues[0]);else{let g=c.uniformValues;g instanceof Float32Array||(g=new Float32Array(g)),n.gl.uniform1fv(u,g)}continue}c.texData.slice!=null&&h!=null&&n.gl.uniform1i(h,c.texData.slice.flatOffset),n.setInputMatrixTexture(c.texData.texture.texture,u,l)}}const a=e.outShapeLocation;if(a)switch(s.shape.length){case 1:n.gl.uniform1iv(a,new Int32Array(s.shape));break;case 2:n.gl.uniform2iv(a,new Int32Array(s.shape));break;case 3:n.gl.uniform3iv(a,new Int32Array(s.shape));break;case 4:n.gl.uniform4iv(a,new Int32Array(s.shape));break}if(e.outShapeStridesLocation){const l=Ie(s.shape);switch(s.shape.length){case 2:n.gl.uniform1iv(e.outShapeStridesLocation,new Int32Array(l));break;case 3:n.gl.uniform2iv(e.outShapeStridesLocation,new Int32Array(l));break;case 4:n.gl.uniform3iv(e.outShapeStridesLocation,new Int32Array(l));break}}if(e.outTexShapeLocation&&n.gl.uniform2i(e.outTexShapeLocation,s.texData.texShape[0],s.texData.texShape[1]),e.program.customUniforms&&r)for(let l=0;l<e.program.customUniforms.length;++l){const c=e.program.customUniforms[l],u=e.customUniformLocations[l],h=r[l];if(c.type==="float")n.gl.uniform1fv(u,h);else if(c.type==="vec2")n.gl.uniform2fv(u,h);else if(c.type==="vec3")n.gl.uniform3fv(u,h);else if(c.type==="vec4")n.gl.uniform4fv(u,h);else if(c.type==="int")n.gl.uniform1iv(u,h);else if(c.type==="ivec2")n.gl.uniform2iv(u,h);else if(c.type==="ivec3")n.gl.uniform3iv(u,h);else if(c.type==="ivec4")n.gl.uniform4iv(u,h);else throw Error(`uniform type ${c.type} is not supported yet.`)}n.executeProgram()}function mM(n,e,t){let s="";e.concat(t).forEach(i=>{const a=i.texData!=null&&i.texData.slice!=null&&i.texData.slice.flatOffset>0;if(n.enableShapeUniforms&&!i.isUniform){const l=i.texData.texShape,{useSqueezeShape:c,uniformShape:u,keptDims:h}=tf(n.packedInputs,i.shape,l);let d="",f="",g="";if(u.length===1&&n.packedInputs){const N=[Math.ceil(l[0]/2),Math.ceil(l[1]/2)];d=`${N[0]>1}_${N[1]>1}`}else if(u.length===2&&!n.packedInputs)f=`${u[0]>1}_${u[1]>1}`;else if(u.length>2&&!n.packedInputs){const N=Ie(u);g=`${N[0]===l[1]}_${N[N.length-1]===l[1]}`}const x=i.shape.length,b=u.length===2&&Je(i.shape,l),y=ne(i.shape)===1,w=wo(i.shape,t.shape),$=!n.packedInputs&&x===t.shape.length&&Je(l,t.texData.texShape),C=n.packedInputs||u.length>2?"":`${l[0]>1}_${l[1]>1}`;s+=`${x}_${$}_${c?h:""}_${u.length}_${y}_${w}_${b}_${d}_${f}_${g}_${C}_${a}`}else{const l=i.isUniform?"uniform":i.texData.texShape;s+=`${i.shape}_${l}_${a}`}});const r=n.userCode;let o=n.constructor.name;return o+="_"+s+"_"+r+`${J().getNumber("WEBGL_VERSION")}`,o}function nn(n){return J().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&n<=4}class gM{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=Na.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const t=ln();this.outputShape=e,this.enableShapeUniforms=nn(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?lu(["r","c","d"],e):Gr(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${t.output} = result;
      }
    `}}class xM{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=Na.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const t=ln();this.outputShape=e,this.enableShapeUniforms=nn(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?lu(["r","c","d"],e):Gr(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${t.output} = result;
      }
    `}}class bM{constructor(e){this.variableNames=["A"],this.outTexUsage=On.DOWNLOAD;const t=ln();this.outputShape=e,this.userCode=`
      ${My}

      void main() {
        float x = getAAtOutCoords();
        ${t.output} = encode_float(x);
      }
    `}}class yM{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=On.DOWNLOAD;const t=ln();this.outputShape=e,this.userCode=`
      ${My}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${t.output} = encode_float(x);
      }
    `}}const wM={R:0,G:1,B:2,A:3};class Gy{constructor(e,t=!1,s="RGBA"){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];const r=ln();this.outputShape=e,this.enableShapeUniforms=nn(this.outputShape.length);let o="result";t&&(o="floor(result * 255. + 0.5)");let i="";for(let a=0;a<s.length;a++){const l=s[a];i+=`
          if(offset == ${a}) {
            result = values[${wM[l]}];
          }`}this.userCode=`
      ${this.enableShapeUniforms?ef():Qp(e)}

      void main() {
        ivec3 coords = getOutputCoords();
        int flatIndex = getFlatIndex(coords);
        float result = 0.;
        int offset = imod(flatIndex, ${s.length});

        flatIndex = idiv(flatIndex, ${s.length}, 1.);

        int r = flatIndex / texShape[1];
        if (r < texShape[0]) {
          int c = imod(flatIndex, texShape[1]);
          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
          vec4 values = ${r.texture2D}(A, uv);
          ${i}
        }
        ${r.output} = vec4(${o}, 0., 0., 0.);
      }
    `}}class vM{constructor(e,t=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];const s=ln();this.outputShape=e,this.enableShapeUniforms=nn(this.outputShape.length);let r="",o="result";t&&(o="floor(result * 255. + 0.5)");for(let i=0;i<=1;i++)for(let a=0;a<=1;a++){const l=i*2+a;r+=`
          localCoords = coords;
          if(localCoords[2] + ${a} < ${this.enableShapeUniforms?"outShape[2]":`${e[2]}`}) {
          localCoords[2] += ${a};
          if (localCoords[1] + ${i} < ${this.enableShapeUniforms?"outShape[1]":`${e[1]}`}) {
            localCoords[1] += ${i};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${s.texture2D}(A, uv);

            if (offset == 0) {
              result[${l}] = values[0];
            } else if (offset == 1) {
              result[${l}] = values[1];
            } else if (offset == 2) {
              result[${l}] = values[2];
            } else {
              result[${l}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?ef():Qp(e)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${r}

          ${s.output} = ${o};
        }
    `}}function CM(n){const e=ln(),t=`${e.version}
    precision highp float;
    ${e.attribute} vec3 clipSpacePos;
    ${e.attribute} vec2 uv;
    ${e.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;return rL(n,t)}function kM(n){const e=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return cL(n,e)}function $M(n){const e=new Uint16Array([0,1,2,2,1,3]);return uL(n,e)}function Ra(n,e,t,s,r,o){dL(e,t);const i=hL(n),a=n.TEXTURE_2D;return ye(n,()=>n.bindTexture(a,i)),ye(n,()=>n.texParameteri(a,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE)),ye(n,()=>n.texParameteri(a,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)),ye(n,()=>n.texParameteri(a,n.TEXTURE_MIN_FILTER,n.NEAREST)),ye(n,()=>n.texParameteri(a,n.TEXTURE_MAG_FILTER,n.NEAREST)),J().getNumber("WEBGL_VERSION")===1?ye(n,()=>n.texImage2D(a,0,s,e,t,0,r,o,null)):ye(n,()=>n.texStorage2D(a,1,s,e,t)),ye(n,()=>n.bindTexture(n.TEXTURE_2D,null)),{texture:i,texShape:[t,e]}}function Hy(n){return n.internalFormatFloat}function IM(n,e,t,s){const[r,o]=Ta(e,t);return Ra(n,r,o,Hy(s),s.textureFormatFloat,n.FLOAT)}function jy(n){return n.internalFormatHalfFloat}function SM(n,e,t,s){const[r,o]=Ta(e,t);return Ra(n,r,o,jy(s),s.textureFormatFloat,s.textureTypeHalfFloat)}function Ky(n){return n.downloadTextureFormat}function NM(n,e,t,s){const[r,o]=Ta(e,t);return Ra(n,r,o,Ky(s),n.RGBA,n.UNSIGNED_BYTE)}function qy(n){return n.internalFormatPackedFloat}function TM(n,e,t,s){const[r,o]=Fo(e,t);return Ra(n,r,o,qy(s),n.RGBA,n.FLOAT)}function Xy(n){return n.internalFormatPackedHalfFloat}function EM(n,e,t,s){const[r,o]=Fo(e,t);return Ra(n,r,o,Xy(s),n.RGBA,s.textureTypeHalfFloat)}function RM(n,e,t){return ye(n,()=>n.bindBuffer(n.ARRAY_BUFFER,t)),Oy(n,e,"clipSpacePos",t,3,20,0)&&Oy(n,e,"uv",t,2,20,12)}function DM(n,e,t,s,r,o){ye(n,()=>n.bindTexture(n.TEXTURE_2D,e));let i,a,l;r instanceof Uint8Array?(i=new Uint8Array(t*s*4),a=n.UNSIGNED_BYTE,l=n.RGBA):(i=new Float32Array(t*s*4),a=n.FLOAT,l=o.internalFormatPackedFloat),i.set(r),J().getNumber("WEBGL_VERSION")===2?ye(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,t,s,n.RGBA,a,i)):ye(n,()=>n.texImage2D(n.TEXTURE_2D,0,l,t,s,0,n.RGBA,a,i)),ye(n,()=>n.bindTexture(n.TEXTURE_2D,null))}function AM(n,e,t){ye(n,()=>n.bindTexture(n.TEXTURE_2D,e)),t.data instanceof Uint8Array?J().getNumber("WEBGL_VERSION")===2?ye(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,t.width,t.height,n.RGBA,n.UNSIGNED_BYTE,t.data)):ye(n,()=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,t.width,t.height,0,n.RGBA,n.UNSIGNED_BYTE,t.data)):J().getNumber("WEBGL_VERSION")===2?ye(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,n.RGBA,n.UNSIGNED_BYTE,t)):ye(n,()=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t)),ye(n,()=>n.bindTexture(n.TEXTURE_2D,null))}function _M(n,e,t,s){const r=n.createBuffer();ye(n,()=>n.bindBuffer(n.PIXEL_PACK_BUFFER,r));const a=4*4*e*t;return ye(n,()=>n.bufferData(n.PIXEL_PACK_BUFFER,a,n.STREAM_READ)),ye(n,()=>n.readPixels(0,0,t,e,n.RGBA,n.FLOAT,0)),ye(n,()=>n.bindBuffer(n.PIXEL_PACK_BUFFER,null)),r}function FM(n,e,t){const s=n,r=new Float32Array(t);return s.bindBuffer(s.PIXEL_PACK_BUFFER,e),s.getBufferSubData(s.PIXEL_PACK_BUFFER,0,r),s.bindBuffer(s.PIXEL_PACK_BUFFER,null),r}function OM(n,e,t,s){const[r,o]=Ta(e,t),i=4,a=new Uint8Array(ZP(e*t,i));return ye(n,()=>n.readPixels(0,0,r,o,s.downloadTextureFormat,n.UNSIGNED_BYTE,a)),new Float32Array(a.buffer)}function PM(n,e,t,s,r,o,i,a){const l=n,c=new Float32Array(JP(o,i));return l.bindBuffer(l.PIXEL_PACK_BUFFER,e),l.getBufferSubData(l.PIXEL_PACK_BUFFER,0,c),l.bindBuffer(l.PIXEL_PACK_BUFFER,null),c}function LM(n,e,t){const s=new Float32Array(e*t*4);return ye(n,()=>n.readPixels(0,0,t,e,n.RGBA,n.FLOAT,s)),s}class nf{constructor(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];const t=J().getNumber("WEBGL_VERSION");if(e!=null?(this.gl=e,qP(t,e)):this.gl=rs(t),e=this.gl,J().getNumber("WEBGL_VERSION")===2){const o=e;this.createVertexArray=()=>ye(o,()=>o.createVertexArray()),this.bindVertexArray=i=>ye(o,()=>o.bindVertexArray(i)),this.deleteVertexArray=i=>ye(o,()=>o.deleteVertexArray(i)),this.getVertexArray=()=>ye(o,()=>o.getParameter(o.VERTEX_ARRAY_BINDING))}else if(e!=null){const o=e.getExtension("OES_vertex_array_object");if(o==null)throw new Error("All WebGL1 implementations are expected to offer OES_vertex_array_object.");this.createVertexArray=()=>ye(e,()=>o.createVertexArrayOES()),this.bindVertexArray=i=>ye(e,()=>o.bindVertexArrayOES(i)),this.deleteVertexArray=i=>ye(e,()=>o.deleteVertexArrayOES(i)),this.getVertexArray=()=>ye(e,()=>e.getParameter(o.VERTEX_ARRAY_BINDING_OES))}let s="WEBGL_color_buffer_float";const r="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),J().getNumber("WEBGL_VERSION")===1){const o="OES_texture_float",i="OES_texture_half_float";if(this.textureFloatExtension=su(this.gl,o),Hn(this.gl,i))this.textureHalfFloatExtension=su(this.gl,i);else if(J().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(s),Hn(this.gl,r))this.colorBufferHalfFloatExtension=su(this.gl,r);else if(J().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(s="EXT_color_buffer_float",Hn(this.gl,s))this.colorBufferFloatExtension=this.gl.getExtension(s);else if(Hn(this.gl,r))this.colorBufferHalfFloatExtension=this.gl.getExtension(r);else throw new Error("GL context does not support color renderable floats");this.vertexBuffer=kM(this.gl),this.indexBuffer=$M(this.gl),this.framebuffer=pL(this.gl),this.textureConfig=Kp(this.gl,this.textureHalfFloatExtension)}get debug(){return J().getBool("DEBUG")}dispose(){if(this.disposed)return;this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");const e=this.gl;ye(e,()=>e.finish()),ye(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,null)),ye(e,()=>e.deleteFramebuffer(this.framebuffer)),ye(e,()=>e.bindBuffer(e.ARRAY_BUFFER,null)),ye(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)),ye(e,()=>e.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(e,t){return this.throwIfDisposed(),IM(this.gl,e,t,this.textureConfig)}createFloat16MatrixTexture(e,t){return this.throwIfDisposed(),SM(this.gl,e,t,this.textureConfig)}createUnsignedBytesMatrixTexture(e,t){return this.throwIfDisposed(),NM(this.gl,e,t,this.textureConfig)}uploadPixelDataToTexture(e,t){this.throwIfDisposed(),AM(this.gl,e,t)}uploadDenseMatrixToTexture(e,t,s,r){this.throwIfDisposed(),DM(this.gl,e,t,s,r,this.textureConfig)}createFloat16PackedMatrixTexture(e,t){return this.throwIfDisposed(),EM(this.gl,e,t,this.textureConfig)}createPackedMatrixTexture(e,t){return this.throwIfDisposed(),TM(this.gl,e,t,this.textureConfig)}deleteMatrixTexture(e){this.throwIfDisposed(),this.outputTexture===e&&(Py(this.gl,this.framebuffer),this.outputTexture=null),ye(this.gl,()=>this.gl.deleteTexture(e))}downloadByteEncodedFloatMatrixFromOutputTexture(e,t,s){return this.downloadMatrixDriver(e,()=>OM(this.gl,t,s,this.textureConfig))}downloadPackedMatrixFromBuffer(e,t,s,r,o,i){return PM(this.gl,e,t,s,r,o,i,this.textureConfig)}downloadFloat32MatrixFromBuffer(e,t){return FM(this.gl,e,t)}createBufferFromTexture(e,t,s){this.bindTextureToFrameBuffer(e);const r=_M(this.gl,t,s,this.textureConfig);return this.unbindTextureToFrameBuffer(),r}createAndWaitForFence(){const e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,s;if(J().getBool("WEBGL_FENCE_API_ENABLED")){const r=e,o=r.fenceSync(r.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),s=()=>{const i=r.clientWaitSync(o,0,0);return i===r.ALREADY_SIGNALED||i===r.CONDITION_SATISFIED},t=o}else J().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(t=this.beginQuery(),this.endQuery(),s=()=>this.isQueryAvailable(t,J().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):s=()=>!0;return{query:t,isFencePassed:s}}downloadMatrixFromPackedTexture(e,t,s){return this.downloadMatrixDriver(e,()=>LM(this.gl,t,s))}createProgram(e){this.throwIfDisposed();const t=this.gl;this.vertexShader==null&&(this.vertexShader=CM(t));const s=aL(t);ye(t,()=>t.attachShader(s,this.vertexShader)),ye(t,()=>t.attachShader(s,e)),lL(t,s);const r=Object.assign(s,{vao:this.createVertexArray()});return this.debug&&qp(t,r),r}buildVao(e){this.setProgram(e),this.bindVertexArray(e.vao);const t=this.gl;ye(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer)),RM(t,e,this.vertexBuffer)}deleteProgram(e){this.throwIfDisposed(),e===this.program&&(this.program=null),e!=null&&(ye(this.gl,()=>this.gl.deleteProgram(e)),this.deleteVertexArray(e.vao))}setProgram(e){this.throwIfDisposed(),this.program=e,this.program!=null&&this.debug&&qp(this.gl,this.program),ye(this.gl,()=>this.gl.useProgram(e))}getUniformLocation(e,t,s=!0){return this.throwIfDisposed(),s?mL(this.gl,e,t):gL(this.gl,e,t)}getAttributeLocation(e,t){return this.throwIfDisposed(),ye(this.gl,()=>this.gl.getAttribLocation(e,t))}getUniformLocationNoThrow(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)}setInputMatrixTexture(e,t,s){this.throwIfDisposed(),this.throwIfNoProgram(),xL(this.gl,e,t,s)}setOutputMatrixTexture(e,t,s){this.setOutputMatrixTextureDriver(e,s,t)}setOutputPackedMatrixTexture(e,t,s){this.throwIfDisposed();const[r,o]=Fo(t,s);this.setOutputMatrixTextureDriver(e,r,o)}setOutputMatrixWriteRegion(e,t,s,r){this.setOutputMatrixWriteRegionDriver(s,e,r,t)}setOutputPackedMatrixWriteRegion(e,t,s,r){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){this.program!=null&&qp(this.gl,this.program),ru(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();const e=this.gl;if(this.debug){const t=this.getVertexArray();console.assert(t===this.program.vao,"VAO changed between setProgram and executeProgram!"),this.debugValidate()}ye(e,()=>e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),ye(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=su(this.gl,J().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(J().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const s=this.gl,r=this.getQueryTimerExtensionWebGL2(),o=s.createQuery();return s.beginQuery(r.TIME_ELAPSED_EXT,o),o}const e=this.getQueryTimerExtensionWebGL1(),t=e.createQueryEXT();return e.beginQueryEXT(e.TIME_ELAPSED_EXT,t),t}endQuery(){if(J().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const t=this.gl,s=this.getQueryTimerExtensionWebGL2();t.endQuery(s.TIME_ELAPSED_EXT);return}const e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(e){return await Pf(()=>this.disposed||this.isQueryAvailable(e,J().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(e,J().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}getQueryTime(e,t){if(t===0)return null;if(t===2){const s=this.gl;return s.getQueryParameter(e,s.QUERY_RESULT)/1e6}else{const s=this.getQueryTimerExtensionWebGL1();return s.getQueryObjectEXT(e,s.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(e,t){if(t===0)return!0;if(t===2){const s=this.gl,r=this.getQueryTimerExtensionWebGL2(),o=s.getQueryParameter(e,s.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(r.GPU_DISJOINT_EXT)),o&&!this.disjoint}else{const s=this.getQueryTimerExtensionWebGL1(),r=s.getQueryObjectEXT(e,s.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(s.GPU_DISJOINT_EXT)),r&&!this.disjoint}}pollFence(e){return new Promise(t=>{this.addItemToPoll(()=>e.isFencePassed(),()=>t())})}pollItems(){const e=MM(this.itemsToPoll.map(t=>t.isDoneFn));for(let t=0;t<=e;++t){const{resolveFn:s}=this.itemsToPoll[t];s()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}addItemToPoll(e,t){if(this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1)return;let s;"setTimeoutCustom"in J().platform&&(s=J().platform.setTimeoutCustom.bind(J().platform)),Pf(()=>(this.pollItems(),this.itemsToPoll.length===0),()=>0,null,s)}bindTextureToFrameBuffer(e){this.throwIfDisposed(),Xp(this.gl,e,this.framebuffer),this.debug&&ru(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture!=null?(Xp(this.gl,this.outputTexture,this.framebuffer),this.debug&&ru(this.gl)):Py(this.gl,this.framebuffer)}downloadMatrixDriver(e,t){this.bindTextureToFrameBuffer(e);const s=t();return this.unbindTextureToFrameBuffer(),s}setOutputMatrixTextureDriver(e,t,s){this.throwIfDisposed();const r=this.gl;Xp(r,e,this.framebuffer),this.debug&&ru(r),this.outputTexture=e,ye(r,()=>r.viewport(0,0,t,s)),ye(r,()=>r.scissor(0,0,t,s))}setOutputMatrixWriteRegionDriver(e,t,s,r){this.throwIfDisposed(),ye(this.gl,()=>this.gl.scissor(e,t,s,r))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(this.program==null)throw new Error("No GPU program is currently set.")}}function MM(n){let e=0;for(;e<n.length&&n[e]();++e);return e-1}const{addImpl:zM,bincountImpl:Yy,bincountReduceImpl:BM,bitwiseAndImpl:VM,castImpl:WM,ceilImpl:UM,concatImpl:GM,equalImpl:HM,expImpl:jM,expm1Impl:KM,floorImpl:qM,gatherNdImpl:XM,gatherV2Impl:YM,greaterImpl:ZM,greaterEqualImpl:JM,lessImpl:QM,lessEqualImpl:ez,linSpaceImpl:tz,logImpl:nz,maxImpl:sz,maximumImpl:rz,minimumImpl:oz,multiplyImpl:iz,negImpl:az,notEqualImpl:lz,prodImpl:cz,raggedGatherImpl:uz,raggedRangeImpl:hz,raggedTensorToTensorImpl:dz,rangeImpl:pz,rsqrtImpl:fz,scatterImpl:mz,sigmoidImpl:gz,simpleAbsImpl:Zy,sliceImpl:xz,sparseFillEmptyRowsImpl:bz,sparseReshapeImpl:yz,sparseSegmentReductionImpl:Jy,sqrtImpl:wz,staticRegexReplaceImpl:vz,stridedSliceImpl:Cz,stringNGramsImpl:kz,stringSplitImpl:$z,stringToHashBucketFastImpl:Iz,subImpl:Sz,tileImpl:Nz,topKImpl:Tz,transposeImpl:sf,uniqueImpl:Ez}=_A;function Qy(n,e){return["x","y","z","w","u","v"].slice(0,e).map(t=>`${n}.${t}`)}function cn(n,e){return e===1?[n]:Qy(n,e)}function Rz(n,e){if(n===1)return"rc";let t="";for(let s=0;s<n;s++)t+=e[s],s<n-1&&(t+=",");return t}class Dz{constructor(e){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.enableShapeUniforms=nn(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{const t=cn("rc",this.rank),s=it(this.rank),r=this.getOutOfBoundsCondition(t),o=this.getSetup(t),i=this.getOutput(t);this.userCode=`
        void main() {
          ${s} rc = getOutputCoords();

          if(${r}) {
            setOutput(vec4(0));
          } else {
            ${o}

            setOutput(vec4(${i}));
          }
        }
      `}}getSourceCoordsArr(e){const t=[];for(let s=0;s<=1;s++)for(let r=0;r<=1;r++){let o=`${s===0?"r":"rp1"}, ${r===0?"c":"cp1"}`;for(let i=2;i<this.rank;i++)o=`${e[e.length-1-i]},`+o;t.push(o)}return t}getOutOfBoundsCondition(e){if(this.rank===1)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let t="";for(let s=this.rank-2;s<this.rank;s++)t+=`${e[s]} >= ${this.enableShapeUniforms?`outShape[${s}]`:this.outputShape[s]}`,s<this.rank-1&&(t+="||");return t}getSetup(e){if(this.rank===1)return"";const t=e.slice(-2),s=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],r=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${t[0]};
      int c = ${t[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${s};
      bool rEdge = rp1 >= ${r};
    `}getOutput(e){const t=this.getSourceCoordsArr(e);return this.rank===1?`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?"outShape":this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`:`getA(${t[0]}),
            cEdge ? 0. : getA(${t[1]}),
            rEdge ? 0. : getA(${t[2]}),
            rEdge || cEdge ? 0. : getA(${t[3]})`}}class ew{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=e,this.enableShapeUniforms=nn(this.outputShape.length);let s="";for(let r=0;r<4;r++){let o="thisRC = rc;";r%2===1&&(o+="thisRC.z += 1;"),r>1&&(o+="thisRC.y += 1;"),s+=`
        ${o}
        ${r>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${r}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${r>0?"}":""}
      `}this.userCode=`
      ${Az(t,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?ef():Qp(e)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":e[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":e[2]};

        ${s}

        setOutput(result);
      }
    `}}function Az(n,e){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${e?EL(["r","c","d"],"inputShape"):Gr(["r","c","d"],n)}
      return ivec3(r, c, d);
    }
  `}class _z{constructor(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.usedTextures={},this.logEnabled=!1}acquireTexture(e,t,s){const r=nw(t,s),o=sw(e,r,s);o in this.freeTextures||(this.freeTextures[o]=[]),o in this.usedTextures||(this.usedTextures[o]=[]);const i=tw(e,r,this.gpgpu.gl,this.gpgpu.textureConfig,s);if(this.freeTextures[o].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=i,this.log();const l=this.freeTextures[o].pop();return this.usedTextures[o].push(l),l}let a;return r===Xt.PACKED_2X2_FLOAT32?a=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):r===Xt.PACKED_2X2_FLOAT16?a=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):r===Xt.UNPACKED_FLOAT32?a=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):r===Xt.UNPACKED_FLOAT16?a=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):r===Xt.PACKED_4X1_UNSIGNED_BYTE&&(a=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[o].push(a),this.numUsedTextures++,this._numBytesAllocated+=i,this.log(),a}releaseTexture(e,t,s,r){if(this.freeTextures==null)return;const o=nw(s,r),i=sw(t,o,r);i in this.freeTextures||(this.freeTextures[i]=[]);const a=tw(t,o,this.gpgpu.gl,this.gpgpu.textureConfig,r),l=J().getNumber("WEBGL_DELETE_TEXTURE_THRESHOLD");l!==-1&&this._numBytesAllocated>l?(this.gpgpu.deleteMatrixTexture(e.texture),this._numBytesAllocated-=a):(this.freeTextures[i].push(e),this.numFreeTextures++,this._numBytesFree+=a),this.numUsedTextures--;const c=this.usedTextures[i],u=c&&c.indexOf(e);if(u==null||u<0)throw new Error("Cannot release a texture that was never provided by this texture manager");c[u]=c[c.length-1],c.pop(),this.log()}log(){if(!this.logEnabled)return;const e=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${e})`);const t=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*t)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(const e in this.freeTextures)this.freeTextures[e].forEach(t=>{this.gpgpu.deleteMatrixTexture(t.texture)});for(const e in this.usedTextures)this.usedTextures[e].forEach(t=>{this.gpgpu.deleteMatrixTexture(t.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}}function Fz(n,e){const t=n;if(e===t.R32F)return 4;if(e===t.R16F)return 2;if(e===t.RGBA32F)return 16;if(e===n.RGBA)return 16;if(e===t.RGBA16F)return 8;if(e===t.RGBA8)return 4;throw new Error(`Unknown internal format ${e}`)}function tw(n,e,t,s,r){const o=Oz(e,s);let i;if(r){const[l,c]=Fo(n[0],n[1]);i=l*c}else{const[l,c]=Ta(n[0],n[1]);i=l*c}const a=Fz(t,o);return i*a}function Oz(n,e){switch(n){case Xt.PACKED_2X2_FLOAT32:return qy(e);case Xt.PACKED_2X2_FLOAT16:return Xy(e);case Xt.UNPACKED_FLOAT32:return Hy(e);case Xt.UNPACKED_FLOAT16:return jy(e);case Xt.PACKED_4X1_UNSIGNED_BYTE:return Ky(e);default:throw new Error(`Unknown physical texture type ${n}`)}}function Pz(n){return J().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?n?Xt.PACKED_2X2_FLOAT32:Xt.UNPACKED_FLOAT32:n?Xt.PACKED_2X2_FLOAT16:Xt.UNPACKED_FLOAT16}function nw(n,e){if(n===On.UPLOAD)return Xt.PACKED_2X2_FLOAT32;if(n===On.RENDER||n==null)return Pz(e);if(n===On.DOWNLOAD||n===On.PIXELS)return Xt.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${n}`)}function sw(n,e,t){return`${n[0]}_${n[1]}_${e}_${t}`}class ks{constructor(e,t){this.variableNames=["A"],this.outputShape=e,this.enableShapeUniforms=nn(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${t}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}}const jn="if (isnan(x)) return x;",Lz="return x;",rw="return abs(x);",Mz="return (x >= 0.0) ? x : (exp(x) - 1.0);",zz=jn+`
  return (x < 0.0) ? 0.0 : x;
`,Bz=jn+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,ur="return x;",Vz="return 1.0 / (1.0 + exp(-1.0 * x));";const Wz="return x;",Uz=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,Gz=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Hz=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,jz="return 1.0 / (1.0 + exp(-1.0 * x));";class hr{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=nn(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${t}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}}class Kz{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e,this.enableShapeUniforms=nn(this.outputShape.length);const t=e.length,s=cn("rc",t),r=it(t),o=Rz(t,s),i=s.slice(-2),a=t<=1?"rc":`vec2(${i.join(",")})`;this.userCode=`
      void main() {
        ${r} rc = getOutputCoords();
        vec4 packedInput = getA(${o});

        setOutput(getChannel(packedInput, ${a}));
      }
    `}}const qz=Fg,Xz=1e-7,Yz=1e-4,cu={};function Zz(n){return n in cu||(cu[n]={}),cu[n]}const Jz=J().getNumber("CPU_HANDOFF_SIZE_THRESHOLD"),Qz=600;function eB(){return J().global.screen==null?1024:J().global.screen.height*J().global.screen.width*window.devicePixelRatio*Qz/1024/1024}class uu extends Du{nextDataId(){return uu.nextDataId++}constructor(e){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!J().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let t;if(e!=null){if(e instanceof nf)t=e;else{const s=rs(J().getNumber("WEBGL_VERSION"),e);t=new nf(s)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{const s=rs(J().getNumber("WEBGL_VERSION"));t=new nf(s),this.binaryCache=Zz(J().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0}this.gpgpu=t,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new _z(this.gpgpu),this.numMBBeforeWarning=eB(),this.texData=new Ff(this,ls())}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}writeTexture(e,t,s,r,o,i){const a=this.makeTensorInfo(t,s),l=this.texData.get(a.dataId);l.isPacked=!1,l.texture={texture:e,texShape:[r,o]},l.texShape=[r,o];const c=ou(t),u=new Gy(c,!1,i),h=this.runWebGLProgram(u,[a],s,[[r,o]]);return h.shape=t,l.texture=null,this.disposeIntermediateTensorInfo(a),h.dataId}write(e,t,s){if((J().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||J().getBool("DEBUG"))&&this.checkNumericalProblems(e),s==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const r={id:this.nextDataId()};return this.texData.set(r,{shape:t,dtype:s,values:e,usage:On.UPLOAD,refCount:1}),r}refCount(e){return this.texData.has(e)?this.texData.get(e).refCount:0}incRef(e){const t=this.texData.get(e);t.refCount++}decRef(e){if(this.texData.has(e)){const t=this.texData.get(e);t.refCount--}}move(e,t,s,r,o){if(J().getBool("DEBUG")&&this.checkNumericalProblems(t),r==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:s,dtype:r,values:t,usage:On.UPLOAD,refCount:o})}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}readSync(e){const t=this.texData.get(e),{values:s,dtype:r,complexTensorInfos:o,slice:i,shape:a,isPacked:l}=t;if(i!=null){let d;l?d=new hr(a,ur):d=new ks(a,ur);const f=this.runWebGLProgram(d,[{dataId:e,shape:a,dtype:r}],r),g=this.readSync(f.dataId);return this.disposeIntermediateTensorInfo(f),g}if(s!=null)return this.convertAndCacheOnCPU(e);if(r==="string")return s;const c=this.activeTimers!=null;let u;c&&(u=pn());let h;if(r==="complex64"){const d=this.readSync(o.real.dataId),f=this.readSync(o.imag.dataId);h=Ps(d,f)}else h=this.getValuesFromTexture(e);return c&&(this.downloadWaitMs+=pn()-u),this.convertAndCacheOnCPU(e,h)}async read(e){if(this.pendingRead.has(e)){const g=this.pendingRead.get(e);return new Promise(x=>g.push(x))}const t=this.texData.get(e),{values:s,shape:r,slice:o,dtype:i,complexTensorInfos:a,isPacked:l}=t;if(o!=null){let g;l?g=new hr(r,ur):g=new ks(r,ur);const x=this.runWebGLProgram(g,[{dataId:e,shape:r,dtype:i}],i),b=this.read(x.dataId);return this.disposeIntermediateTensorInfo(x),b}if(s!=null)return this.convertAndCacheOnCPU(e);if(J().getBool("DEBUG")&&!J().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&J().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let c=null,u;if(i!=="complex64"&&J().get("WEBGL_BUFFER_SUPPORTED")){u=this.decode(e);const g=this.texData.get(u.dataId);c=this.gpgpu.createBufferFromTexture(g.texture.texture,...nu(r))}this.pendingRead.set(e,[]),i!=="complex64"&&await this.gpgpu.createAndWaitForFence();let h;if(i==="complex64"){const g=await Promise.all([this.read(a.real.dataId),this.read(a.imag.dataId)]),x=g[0],b=g[1];h=Ps(x,b)}else if(c==null)h=this.getValuesFromTexture(e);else{const g=ne(r);h=this.gpgpu.downloadFloat32MatrixFromBuffer(c,g)}if(u!=null&&this.disposeIntermediateTensorInfo(u),c!=null){const g=this.gpgpu.gl;ye(g,()=>g.deleteBuffer(c))}const d=this.convertAndCacheOnCPU(e,h),f=this.pendingRead.get(e);return this.pendingRead.delete(e),f.forEach(g=>g(d)),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e)&&ls().removeDataId(e,this),this.pendingDeletes--),d}readToGPU(e,t={}){const s=this.texData.get(e),{values:r,shape:o,slice:i,dtype:a,isPacked:l,texture:c}=s;if(a==="complex64")throw new Error("Does not support reading texture for complex64 dtype.");if(i!=null){let f;l?f=new hr(o,ur):f=new ks(o,ur);const g=this.runWebGLProgram(f,[{dataId:e,shape:o,dtype:a}],a),x=this.readToGPU(g,t);return this.disposeIntermediateTensorInfo(g),x}if(c==null)throw r!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");const u=this.decode(e,t.customTexShape),h=ls().makeTensorFromTensorInfo(u),d=this.texData.get(u.dataId);return Object.assign({tensorRef:h},d.texture)}bufferSync(e){const t=this.readSync(e.dataId);if(e.dtype==="string")try{const s=t.map(r=>Ks(r));return Ve(e.shape,e.dtype,s)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return Ve(e.shape,e.dtype,t)}checkNumericalProblems(e){if(e!=null)for(let t=0;t<e.length;t++){const s=e[t];if(!nL(s))throw J().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error(`The value ${s} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${s} cannot be represented on this device.`)}}getValuesFromTexture(e){const{shape:t,dtype:s,isPacked:r}=this.texData.get(e),o=ne(t);if(J().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){const d=this.decode(e),f=this.texData.get(d.dataId),g=this.gpgpu.downloadMatrixFromPackedTexture(f.texture.texture,...nu(t)).subarray(0,o);return this.disposeIntermediateTensorInfo(d),g}const i=J().getBool("WEBGL_PACK")&&r===!0,a=i?ou(t):t,l=i?new yM(a):new bM(a),c=this.runWebGLProgram(l,[{shape:a,dtype:s,dataId:e}],"float32"),u=this.texData.get(c.dataId),h=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(u.texture.texture,u.texShape[0],u.texShape[1]).subarray(0,o);return this.disposeIntermediateTensorInfo(c),h}timerAvailable(){return J().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(e){const t=this.activeTimers,s=[];let r=!1;this.programTimersStack==null?(this.programTimersStack=s,r=!0):this.activeTimers.push(s),this.activeTimers=s,e();const o=yr(this.activeTimers.map(l=>l.query)).filter(l=>l!=null),i=yr(this.activeTimers.map(l=>l.name)).filter(l=>l!=null);this.activeTimers=t,r&&(this.programTimersStack=null);const a={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if(J().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){const l=await Promise.all(o);a.kernelMs=qv(l),a.getExtraProfileInfo=()=>l.map((c,u)=>({name:i[u],ms:c})).map(c=>`${c.name}: ${c.ms}`).join(", ")}else a.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,a})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return J().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:pn(),endMs:null}}endTimer(e){return J().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=pn(),e)}async getQueryTime(e){if(J().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(e);const t=e;return t.endMs-t.startMs}disposeData(e,t=!1){if(this.pendingDisposal.has(e))return!1;if(!this.texData.has(e))return!0;if(t?this.texData.get(e).refCount=0:this.texData.get(e).refCount--,!t&&this.texData.get(e).refCount>0)return!1;if(this.pendingRead.has(e))return this.pendingDisposal.add(e),this.pendingDeletes++,!1;this.releaseGPUData(e);const{complexTensorInfos:s}=this.texData.get(e);return s!=null&&(this.disposeData(s.real.dataId,t),this.disposeData(s.imag.dataId,t)),this.texData.delete(e),!0}releaseGPUData(e){const{texture:t,dtype:s,texShape:r,usage:o,isPacked:i,slice:a}=this.texData.get(e),l=a&&a.origDataId||e,c=this.dataRefCount.get(l);c>1?this.dataRefCount.set(l,c-1):(this.dataRefCount.delete(l),t!=null&&(this.numBytesInGPU-=this.computeBytes(r,s),this.textureManager.releaseTexture(t,r,o,i)));const u=this.texData.get(e);u.texture=null,u.texShape=null,u.isPacked=!1,u.slice=null}getTexture(e){return this.uploadToGPU(e),this.texData.get(e).texture.texture}getDataInfo(e){return this.texData.get(e)}shouldExecuteOnCPU(e,t=Jz){return J().getBool("WEBGL_CPU_FORWARD")&&e.every(s=>this.texData.get(s.dataId).texture==null&&ne(s.shape)<t)}getGPGPUContext(){return this.gpgpu}where(e){Rn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");const t=e.dataSync();return qz(e.shape,t)}packedUnaryOp(e,t,s){const r=new hr(e.shape,t),o=this.compileAndRun(r,[e],s);return ls().makeTensorFromTensorInfo(o)}abs(e){if(this.shouldExecuteOnCPU([e])&&e.dtype!=="complex64"){const r=Zy(this.texData.get(e.dataId).values);return this.makeOutput(e.shape,e.dtype,r)}if(J().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,rw,e.dtype);const t=new ks(e.shape,rw),s=this.compileAndRun(t,[e]);return ls().makeTensorFromTensorInfo(s)}makeTensorInfo(e,t,s){let r;if(t==="string"&&s!=null&&s.length>0&&qo(s[0])){const o=s.map(i=>js(i));r=this.write(o,e,t)}else r=this.write(s,e,t);return this.texData.get(r).usage=null,{dataId:r,shape:e,dtype:t}}makeOutput(e,t,s){return ls().makeTensorFromTensorInfo(this.makeTensorInfo(e,t,s),this)}unpackTensor(e){const t=new Kz(e.shape);return this.runWebGLProgram(t,[e],e.dtype)}packTensor(e){const t=new Dz(e.shape);return this.runWebGLProgram(t,[e],e.dtype,null,!0)}packedReshape(e,t){const s=[Oo(e.shape),...Po(e.shape)],r={dtype:e.dtype,shape:s,dataId:e.dataId},o=[Oo(t),...Po(t)],i=new ew(o,s),a=!0,l=[s],c=this.runWebGLProgram(i,[r],e.dtype,l,a);return{dataId:c.dataId,shape:t,dtype:c.dtype}}decode(e,t){const s=this.texData.get(e),{isPacked:r,shape:o,dtype:i}=s;if(t!=null){const d=ne(o),f=t[0]*t[1]*4;_(d<=f,()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.")}const a=ou(o);let l;r?l=new xM(a):l=new gM(a);const c=!0,u=[t??nu(a)],h=this.runWebGLProgram(l,[{shape:a,dtype:i,dataId:e}],i,u,c,t);return{dtype:i,shape:o,dataId:h.dataId}}runWebGLProgram(e,t,s,r,o=!1,i){const a=this.makeTensorInfo(e.outputShape,s),l=this.texData.get(a.dataId);if(e.packedOutput&&(l.isPacked=!0),e.outPackingScheme===Na.DENSE){const y=i??nu(e.outputShape);l.texShape=y.map(w=>w*2)}if(e.outTexUsage!=null&&(l.usage=e.outTexUsage),ne(a.shape)===0)return l.values=Zt(a.dtype,0),a;const c=[],u=t.map(y=>{if(y.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let w=this.texData.get(y.dataId);if(w.texture==null){if(!e.packedInputs&&ne(y.shape)<=J().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:y.shape,texData:null,isUniform:!0,uniformValues:w.values};e.packedInputs&&(w.isPacked=!0,w.shape=y.shape)}if(this.uploadToGPU(y.dataId),!!w.isPacked!=!!e.packedInputs)y=w.isPacked?this.unpackTensor(y):this.packTensor(y),c.push(y),w=this.texData.get(y.dataId);else if(w.isPacked&&!au(w.shape,y.shape)){const $=y,C=y.shape;y.shape=w.shape,y=this.packedReshape(y,C),c.push(y),w=this.texData.get(y.dataId),$.shape=C}return{shape:y.shape,texData:w,isUniform:!1}});this.uploadToGPU(a.dataId);const h={shape:a.shape,texData:l,isUniform:!1},d=mM(e,u,h),f=this.getAndSaveBinary(d,()=>pM(this.gpgpu,e,u,h)),g=this.activeTimers!=null;let x;g&&(x=this.startTimer()),J().get("ENGINE_COMPILE_ONLY")||fM(this.gpgpu,f,u,h,r),c.forEach(y=>this.disposeIntermediateTensorInfo(y)),g&&(x=this.endTimer(x),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(x)}));const b=J().getNumber("WEBGL_FLUSH_THRESHOLD");if(b>0){const y=pn();y-this.lastGlFlushTime>b&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=y)}if(!J().getBool("WEBGL_LAZILY_UNPACK")&&l.isPacked&&o===!1){const y=this.unpackTensor(a);return this.disposeIntermediateTensorInfo(a),y}return a}compileAndRun(e,t,s,r,o=!1){return s=s||t[0].dtype,this.runWebGLProgram(e,t,s,r,o)}getAndSaveBinary(e,t){return e in this.binaryCache||(this.binaryCache[e]=t()),this.binaryCache[e]}getTextureManager(){return this.textureManager}dispose(){this.disposed||(J().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(t=>{this.gpgpu.deleteProgram(this.binaryCache[t].webGLProgram),delete this.binaryCache[t]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)}floatPrecision(){return this.floatPrecisionValue==null&&(this.floatPrecisionValue=Y(()=>{if(!J().get("WEBGL_RENDER_FLOAT32_ENABLED")){const e=J().getBool("DEBUG");J().set("DEBUG",!1);const t=this.abs(et(1e-8)).dataSync()[0];if(J().set("DEBUG",e),t>0)return 32}return 16})),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?Xz:Yz}uploadToGPU(e){const t=this.texData.get(e),{shape:s,dtype:r,values:o,texture:i,usage:a,isPacked:l}=t;if(i!=null)return;const c=this.activeTimers!=null;let u;c&&(u=pn());let h=t.texShape;if(h==null&&(h=wL(s,l),t.texShape=h),o!=null){const d=ou(s);let f,g=h[1],x=h[0];const b=o instanceof Uint8Array||o instanceof Uint8ClampedArray;(l||!b)&&([g,x]=Fo(h[0],h[1])),l?f=new vM(d,b):f=new Gy(d,b);const y=b?[x,g]:h,w=this.makeTensorInfo(y,r),$=this.texData.get(w.dataId);b?$.usage=On.PIXELS:$.usage=On.UPLOAD,$.texShape=y,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(w.dataId),g,x,o);const C=[[x,g]],E=this.runWebGLProgram(f,[w],r,C,!0),F=this.texData.get(E.dataId);t.texShape=F.texShape,t.isPacked=F.isPacked,t.usage=F.usage,J().get("ENGINE_COMPILE_ONLY")?this.disposeData(E.dataId):(t.texture=F.texture,t.values=null,this.texData.delete(E.dataId)),this.disposeIntermediateTensorInfo(w),c&&(this.uploadWaitMs+=pn()-u)}else{const d=this.acquireTexture(h,a,r,l);t.texture=d}}convertAndCacheOnCPU(e,t){const s=this.texData.get(e),{dtype:r}=s;return t!=null&&(s.values=tB(t,r)),s.values}acquireTexture(e,t,s,r){if(this.numBytesInGPU+=this.computeBytes(e,s),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){const o=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${o} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(e,t,r)}computeBytes(e,t){return e[0]*e[1]*qa(t)}checkCompileCompletion(){for(const[,e]of Object.entries(this.binaryCache))this.checkCompletion_(e)}async checkCompileCompletionAsync(){const e=[];if(this.gpgpu.parallelCompilationExtension){for(const[,t]of Object.entries(this.binaryCache))e.push(this.checkCompletionAsync_(t));return Promise.all(e)}else{for(const[,t]of Object.entries(this.binaryCache)){const s=new Promise(r=>{try{this.checkCompletion_(t),r(!0)}catch(o){throw o}});e.push(s)}return Promise.all(e)}}async checkCompletionAsync_(e){return this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(e):(await Jg(),this.checkCompletionAsync_(e))}checkCompletion_(e){if(this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(e.webGLProgram)),this.gpgpu.gl.getShaderParameter(e.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(Fy(e.source,this.gpgpu.gl.getShaderInfoLog(e.fragmentShader)),new Error("Failed to compile fragment shader.")):new Error("Failed to link vertex and fragment shaders.");return!0}getUniformLocations(){for(const e of Object.values(this.binaryCache)){this.gpgpu.buildVao(e.webGLProgram);const{variablesLocations:t,customUniformLocations:s,infLoc:r,nanLoc:o,outShapeLocation:i,outShapeStridesLocation:a,outTexShapeLocation:l}=Wy(this.gpgpu,e.program,e.webGLProgram);e.variablesLocations=t,e.customUniformLocations=s,e.infLoc=r,e.nanLoc=o,e.outShapeLocation=i,e.outShapeStridesLocation=a,e.outTexShapeLocation=l}}createTensorFromGPUData(e,t,s){e.channels=e.channels||"RGBA";const{texture:r,height:o,width:i,channels:a}=e,l=ls().backend;if(!l.gpgpu.gl.isTexture(r))throw new Error("The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.");const c=l.writeTexture(r,t,s,o,i,a);return ls().makeTensorFromDataId(c,t,s,l)}}uu.nextDataId=0;function tB(n,e){if(e==="float32"||e==="complex64")return n;if(e==="int32"||e==="bool"){const t=e==="int32"?new Int32Array(n.length):new Uint8Array(n.length);for(let s=0;s<t.length;++s)t[s]=Math.round(n[s]);return t}else throw new Error(`Unknown dtype ${e}`)}_m()&&zm("webgl",()=>new uu,2);const rf=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;class jr{constructor(e,t,s){this.variableNames=["A","B"],this.outputShape=Oe(t,s),this.enableShapeUniforms=nn(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${e}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}}const Kr=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`;class Vo{constructor(e,t,s,r=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=Oe(t,s);const o=this.outputShape.length;this.enableShapeUniforms=nn(o);let i="";if(r)if(o===0||ne(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          ${it(o)} coords = getOutputCoords();
        `,o===1)this.enableShapeUniforms?i+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:i+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{const l=cn("coords",o);this.enableShapeUniforms?i+=`
            bool nextRowOutOfBounds =
              (${l[o-2]} + 1) >= outShape[${o} - 2];
            bool nextColOutOfBounds =
              (${l[o-1]} + 1) >= outShape[${o} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:i+=`
            bool nextRowOutOfBounds =
              (${l[o-2]} + 1) >= ${this.outputShape[o-2]};
            bool nextColOutOfBounds =
              (${l[o-1]} + 1) >= ${this.outputShape[o-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${e}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${i}

        setOutput(result);
      }
    `}}function Sn(n){const{inputs:e,backend:t}=n,{x:s}=e;return t.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const nB={kernelName:mi,backendName:"webgl",kernelFunc:Sn};function dr(n){const{inputs:e,backend:t}=n,{real:s,imag:r}=e,o=t.makeTensorInfo(s.shape,"complex64"),i=t.texData.get(o.dataId),a=Sn({inputs:{x:s},backend:t}),l=Sn({inputs:{x:r},backend:t});return i.complexTensorInfos={real:a,imag:l},o}const sB={kernelName:Yu,backendName:"webgl",kernelFunc:dr};const ow="return (a < 0.) ? b * a : a;",iw=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function rB(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{alpha:o}=s,i=t.makeTensorInfo([],"float32",Hs(o,"float32")),a=J().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Vo(iw,r.shape,i.shape):new jr(ow,r.shape,i.shape),l=t.runWebGLProgram(a,[r,i],"float32");return t.disposeIntermediateTensorInfo(i),l}const oB={kernelName:ml,backendName:"webgl",kernelFunc:rB};const aw="return (a < 0.) ? b * a : a;",lw=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function iB(n){const{inputs:e,backend:t}=n,{x:s,alpha:r}=e,o=J().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Vo(lw,s.shape,r.shape):new jr(aw,s.shape,r.shape);return t.runWebGLProgram(o,[s,r],"float32")}const aB={kernelName:Fl,backendName:"webgl",kernelFunc:iB};const Wo="if (isnan(x)) return x;";function qe({opSnippet:n,packedOpSnippet:e,cpuKernelImpl:t,dtype:s}){return({inputs:r,backend:o})=>{const{x:i}=r,a=o,l=s||i.dtype;if(a.shouldExecuteOnCPU([i])&&t!=null){const h=a.texData.get(i.dataId),d=t(h.values,l);return a.makeTensorInfo(i.shape,l,d)}const c=J().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&e!=null;let u;return c?u=new hr(i.shape,e):u=new ks(i.shape,n),a.runWebGLProgram(u,[i],l)}}function Yt({opSnippet:n,packedOpSnippet:e,checkOutOfBounds:t=!1,supportsComplex:s=!1,cpuKernelImpl:r,dtype:o}){return({inputs:i,backend:a})=>{const{a:l,b:c}=i,u=a;if(s&&l.dtype==="complex64"){const g=u.texData.get(l.dataId),x=u.texData.get(c.dataId),[b,y]=[[g.complexTensorInfos.real,x.complexTensorInfos.real],[g.complexTensorInfos.imag,x.complexTensorInfos.imag]].map($=>{const[C,N]=$,E={dataId:C.dataId,dtype:C.dtype,shape:l.shape},F={dataId:N.dataId,dtype:N.dtype,shape:c.shape},O=new jr(n,l.shape,c.shape);return u.runWebGLProgram(O,[E,F],Cn(C.dtype,N.dtype))}),w=dr({inputs:{real:b,imag:y},backend:u});return u.disposeIntermediateTensorInfo(b),u.disposeIntermediateTensorInfo(y),w}const h=o||Cn(l.dtype,c.dtype);if((l.dtype==="string"||c.dtype==="string"||u.shouldExecuteOnCPU([l,c]))&&r!=null){const g=u.texData.get(l.dataId).values,x=u.texData.get(c.dataId).values,b=l.dtype==="string"?Ls(g):g,y=l.dtype==="string"?Ls(x):x,[w,$]=r(l.shape,c.shape,b,y,h),C=u.makeTensorInfo($,h),N=u.texData.get(C.dataId);return N.values=w,C}const d=J().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&e!=null;let f;return d?f=new Vo(e,l.shape,c.shape,t):f=new jr(n,l.shape,c.shape),u.runWebGLProgram(f,[l,c],h)}}function Da(n,e=!1){if(n==="linear")return e?Wz:Lz;if(n==="relu")return e?Gz:zz;if(n==="elu")return e?Uz:Mz;if(n==="relu6")return e?Hz:Bz;if(n==="prelu")return e?lw:aw;if(n==="leakyrelu")return e?iw:ow;if(n==="sigmoid")return e?jz:Vz;throw new Error(`Activation ${n} has not been implemented for the WebGL backend.`)}class cw{constructor(e,t,s,r=!1,o=!1,i=!1,a=null,l=!1,c=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=s,this.enableShapeUniforms=nn(this.outputShape.length);const u=r?e[1]:e[2],h=Math.ceil(u/2),d=r?"i * 2, rc.y":"rc.y, i * 2",f=o?"rc.z, i * 2":"i * 2, rc.z",g=r?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],x=o?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"];let b="",y="";a&&(l?b=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${a}
        }`:c?b=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${a}
        }`:b=`vec4 activation(vec4 x) {
          ${a}
        }`,y="result = activation(result);");const w=i?"result += getBiasAtOutCoords();":"";i&&this.variableNames.push("bias"),l&&this.variableNames.push("preluActivationWeights"),c&&this.variableNames.push("leakyreluAlpha");let $="rc.x",C="rc.x";e[0]<t[0]?$=`imod(rc.x, ${e[0]})`:t[0]<e[0]&&(C=`imod(rc.x, ${t[0]})`),this.userCode=`
      ${b}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${h}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        int batchA = ${$};
        int batchB = ${C};
        for (int i = 0; i < ${h}; i++) {
          vec4 a = getMatrixA(batchA, ${d});
          vec4 b = getMatrixB(batchB, ${f});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${g[0]} * ${x[0]});
          result += (${g[1]} * ${x[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${w}

        ${y}

        setOutput(result);
      }
    `}}const uw={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"};class hw{constructor(e,t,s){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=Oe(t,s),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${e}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}}const dw="return a * b;";function of(n){const{inputs:e,backend:t}=n,{a:s,b:r}=e,o=Cn(s.dtype,r.dtype);if(s.dtype==="complex64"){const a=t.texData.get(s.dataId),l=t.texData.get(r.dataId),c=new hw(uw.REAL,s.shape,r.shape),u=new hw(uw.IMAG,s.shape,r.shape),h=[{dataId:a.complexTensorInfos.real.dataId,dtype:a.complexTensorInfos.real.dtype,shape:s.shape},{dataId:a.complexTensorInfos.imag.dataId,dtype:a.complexTensorInfos.imag.dtype,shape:s.shape},{dataId:l.complexTensorInfos.real.dataId,dtype:l.complexTensorInfos.real.dtype,shape:r.shape},{dataId:l.complexTensorInfos.imag.dataId,dtype:l.complexTensorInfos.imag.dtype,shape:r.shape}],d=t.runWebGLProgram(c,h,"float32"),f=t.runWebGLProgram(u,h,"float32"),g=dr({inputs:{real:d,imag:f},backend:t});return t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(f),g}if(t.shouldExecuteOnCPU([s,r])){const a=t.texData.get(s.dataId),l=t.texData.get(r.dataId),[c,u]=iz(s.shape,r.shape,a.values,l.values,o),h=t.makeTensorInfo(u,o),d=t.texData.get(h.dataId);return d.values=c,h}let i;return J().getBool("WEBGL_PACK_BINARY_OPERATIONS")?i=new Vo(dw,s.shape,r.shape):i=new jr(dw,s.shape,r.shape),t.runWebGLProgram(i,[s,r],o)}const lB={kernelName:$i,backendName:"webgl",kernelFunc:of};function cB(n,e,t){const s=[Oo(n.shape),...Po(n.shape)],r={dtype:n.dtype,shape:s,dataId:n.dataId},o=[Oo(e),...Po(e)],i=new ew(o,s),a=!0,l=[s],c=t.runWebGLProgram(i,[r],n.dtype,l,a);return{dataId:c.dataId,shape:e,dtype:c.dtype}}function me(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{shape:o}=s,i=t,a=ne(r.shape),l=Lf(o,a),c=ne(l);_(a===c,()=>`The new shape (${l}) has ${c} elements and the old shape (${r.shape}) has ${a} elements. The new shape and old shape must have the same number of elements.`);const u=i.texData.get(r.dataId);return u.isPacked&&!au(r.shape,l)&&!(u.texture!==null&&au(u.shape,l))?cB(r,l,i):(i.incRef(r.dataId),{dataId:r.dataId,shape:l,dtype:r.dtype})}const uB={kernelName:Pl,backendName:"webgl",kernelFunc:me};class pw{constructor(e,t){this.variableNames=["x"];const{windowSize:s,batchSize:r,inSize:o,outSize:i}=e;this.outputShape=[r,i];const a=Math.floor(s/4)*4,l=s%4;let c="sumValue += dot(values, ones);";if(t!=null){const h=1/t;c=`sumValue += dot(values * ${io(h)?h.toPrecision(2):h}, ones);`}let u="";o%s>0&&(u=`
        if (inIdx < 0 || inIdx >= ${o}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${u}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${s};

        float sumValue = 0.0;

        for (int i = 0; i < ${a}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${c}
        }

        int inIdx = inOffset + ${a};
        if (${l===1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${c}
        } else if (${l===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${c}
        } else if (${l===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${c}
        }
        setOutput(sumValue);
      }
    `}}class hB{constructor(e,t){this.variableNames=["x"];const{windowSize:s,batchSize:r,inSize:o,outSize:i}=e;this.outputShape=[r,i];let a="0.0",l="";t==="prod"?a="1.0":t==="min"?(a="1.0 / 1e-20",l="min"):t==="max"&&(a="-1.0 / 1e-20",l="max");let c=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t==="sum"?c="sumValue":t==="prod"?c="prodValue":t==="all"?c="allValue":t==="any"&&(c="anyValue");const u=Math.floor(s/4)*4,h=s%4;let d=`
      if (${t==="sum"}) {
        sumValue += dot(values, ones);
      } else if (${t==="prod"}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${l}(values, minMaxValue);
        if (${t==="min"} || ${t==="max"}) {
          minMaxValue = ${l}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,f="vec4";t==="all"?(a="1.0",d=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,f="bvec4"):t==="any"&&(a="0.0",d=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,f="bvec4");let g="";o%s>0&&(g=`
        if (inIdx < 0 || inIdx >= ${o}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${a};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${g}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${s};

        vec4 minMaxValue = vec4(${a});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${u}; i += 4) {
          int inIdx = inOffset + i;
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${d}
        }

        int inIdx = inOffset + ${u};
        if (${h===1}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${d}
        } else if (${h===2}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${d}
        } else if (${h===3}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${d}
        }
        setOutput(${c});
      }
    `}}function dB(n){const e=[];for(;e.length===0||e[e.length-1].outSize!==1;){const t=e.length?e[e.length-1].outSize:n[1],s=Cc(t);e.push({inSize:t,windowSize:s,outSize:Math.ceil(t/s)})}return e}function qr(n,e,t,s){const r=dB(n.shape);let o=n;for(let i=0;i<r.length;i++){const{inSize:a,windowSize:l,outSize:c}=r[i];let u,h;t==="mean"?u=i===0?new pw({windowSize:l,inSize:a,batchSize:n.shape[0],outSize:c},a):new pw({windowSize:l,inSize:a,batchSize:n.shape[0],outSize:c}):u=new hB({windowSize:l,inSize:a,batchSize:n.shape[0],outSize:c},t),h=o,o=s.runWebGLProgram(u,[o],e),h.dataId!==n.dataId&&s.disposeIntermediateTensorInfo(h)}return o}class pB{constructor(e,t){this.variableNames=["A"];const s=new Array(e.length);for(let i=0;i<s.length;i++)s[i]=e[t[i]];this.outputShape=s,this.rank=s.length;const r=it(this.rank),o=fB(t);this.userCode=`
    void main() {
      ${r} resRC = getOutputCoords();
      setOutput(getA(${o}));
    }
    `}}function fB(n){const e=n.length;if(e>6)throw Error(`Transpose for rank ${e} is not yet supported`);const t=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],s=new Array(e);for(let r=0;r<n.length;r++)s[n[r]]=t[r];return s.join()}class mB{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;const s=new Array(e.length);for(let u=0;u<s.length;u++)s[u]=e[t[u]];if(this.outputShape=s,this.rank=s.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);const r=it(this.rank),o=Qy("rc",this.rank),i=new Array(this.rank);for(let u=0;u<t.length;u++)i[t[u]]=o[u];const a=`vec2(${i.slice(-2).join()})`,l=`++${o[this.rank-1]} < ${s[this.rank-1]}`,c=`getChannel(getA(${i.join()}), ${a})`;this.userCode=`
    void main() {
      ${r} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${c};
      if(${l}) {
        result[1] = ${c};
      }
      --${o[this.rank-1]};
      if(++${o[this.rank-2]} < ${s[this.rank-2]}) {
        result[2] = ${c};
        if(${l}) {
          result[3] = ${c};
        }
      }
      setOutput(result);
    }
    `}}function hu(n,e,t){const s=J().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new mB(n.shape,e):new pB(n.shape,e);return t.runWebGLProgram(s,[n],n.dtype)}function gB(n,e,t,s){const r=e,o=n.shape.length,i=Be(r,n.shape);let a=i;const l=wt(a,o),c=l!=null;let u=n;c&&(u=hu(n,l,s),a=Nt(a.length,o)),qt("sum",a,o);const[h,d]=Ut(u.shape,a);let f=h;t&&(f=At(h,i));const g=ne(d),b=ne(n.shape)/g,y=me({inputs:{x:u},attrs:{shape:[b,g]},backend:s}),w=Bh(n.dtype),$=qr(y,w,"sum",s),C=me({inputs:{x:$},attrs:{shape:f},backend:s});return s.disposeIntermediateTensorInfo(y),s.disposeIntermediateTensorInfo($),c&&s.disposeIntermediateTensorInfo(u),C}function du(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{axis:o,keepDims:i}=s;return gB(r,o,i,t)}const xB={kernelName:Wl,backendName:"webgl",kernelFunc:du};function un(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{perm:o}=s,i=t,a=r.shape.length,l=new Array(a);for(let u=0;u<l.length;u++)l[u]=r.shape[o[u]];let c;if(i.shouldExecuteOnCPU([r])){const h=i.texData.get(r.dataId).values,d=sf(h,r.shape,r.dtype,o,l);c=i.makeTensorInfo(l,r.dtype);const f=i.texData.get(c.dataId);f.values=d}else c=hu(r,o,i);return c}const bB={kernelName:ho,backendName:"webgl",kernelFunc:un};const fw=1e3;function pu({a:n,b:e,transposeA:t,transposeB:s,backend:r,bias:o=null,preluActivationWeights:i=null,leakyreluAlpha:a=0,activation:l=null}){const c=n.shape.length,u=e.shape.length,h=t?n.shape[c-2]:n.shape[c-1],d=s?e.shape[u-1]:e.shape[u-2],f=t?n.shape[c-1]:n.shape[c-2],g=s?e.shape[u-2]:e.shape[u-1],x=n.shape.slice(0,-2),b=e.shape.slice(0,-2),y=ne(x),w=ne(b),C=Oe(n.shape.slice(0,-2),e.shape.slice(0,-2)).concat([f,g]);_(h===d,()=>`Error in matMul: inner shapes (${h}) and (${d}) of Tensors with shapes ${n.shape} and ${e.shape} and transposeA=${t} and transposeB=${s} must match.`);const N=t?[y,h,f]:[y,f,h],E=s?[w,g,d]:[w,d,g],F=me({inputs:{x:n},backend:r,attrs:{shape:N}}),O=me({inputs:{x:e},backend:r,attrs:{shape:E}}),A=[F,O],D=Math.max(y,w),S=t?F.shape[1]:F.shape[2],z=o!=null,U=i!=null,G=l==="leakyrelu",K=l!=null?Da(l,!0):null,X=z||U||G||K!=null;let Q;if((f===1||g===1)&&S>fw&&X===!1){let te=F,re=O;t&&(te=un({inputs:{x:F},backend:r,attrs:{perm:[0,2,1]}}),A.push(te)),s&&(re=un({inputs:{x:O},backend:r,attrs:{perm:[0,2,1]}}),A.push(re));const se=g!==1,ae=g===1;let le=te;se&&(le=me({inputs:{x:te},backend:r,attrs:{shape:[D,S,1]}}),A.push(le));const fe=g===1?2:1;let pe=re;ae&&(pe=me({inputs:{x:re},backend:r,attrs:{shape:[D,1,S]}}),A.push(pe));const we=of({inputs:{a:le,b:pe},backend:r});Q=du({inputs:{x:we},backend:r,attrs:{axis:fe,keepDims:!0}}),A.push(we)}else{const te=Cn(n.dtype,e.dtype),re=new cw(N,E,[D,f,g],t,s,z,K,U,G),se=[F,O];if(o!=null&&se.push(o),U&&se.push(i),G){const ae=r.makeTensorInfo([],"float32",Hs(a,"float32"));se.push(ae),A.push(ae)}Q=r.runWebGLProgram(re,se,te)}const Z=me({inputs:{x:Q},backend:r,attrs:{shape:C}});A.push(Q);for(const te of A)r.disposeIntermediateTensorInfo(te);return Z}function yB(n){const{inputs:e,backend:t,attrs:s}=n,{a:r,b:o,bias:i,preluActivationWeights:a}=e,{transposeA:l,transposeB:c,activation:u,leakyreluAlpha:h}=s;return pu({a:r,b:o,transposeA:l,transposeB:c,backend:t,bias:i,preluActivationWeights:a,leakyreluAlpha:h,activation:u})}const wB={kernelName:Xl,backendName:"webgl",kernelFunc:yB};const mw="return abs(x);";function vB(n){const{inputs:e,backend:t}=n,{x:s}=e;if(t.shouldExecuteOnCPU([s])&&s.dtype!=="complex64"){const o=t.texData.get(s.dataId),i=Zy(o.values);return t.makeTensorInfo(s.shape,s.dtype,i)}let r;return J().getBool("WEBGL_PACK_UNARY_OPERATIONS")?r=new hr(s.shape,mw):r=new ks(s.shape,mw),t.runWebGLProgram(r,[s],s.dtype)}const CB={kernelName:Xa,backendName:"webgl",kernelFunc:vB};const kB=jn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,$B=qe({opSnippet:kB}),IB={kernelName:Xo,backendName:"webgl",kernelFunc:$B};const SB=jn+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`,NB=qe({opSnippet:SB}),TB={kernelName:Yo,backendName:"webgl",kernelFunc:NB};const gw="return a + b;",EB=Yt({opSnippet:gw,packedOpSnippet:gw,supportsComplex:!0,cpuKernelImpl:zM}),RB={kernelName:uo,backendName:"webgl",kernelFunc:EB};class DB{constructor(e,t){this.outputShape=[],this.outputShape=e,this.variableNames=t.map((o,i)=>`T${i}`);const s=[];this.variableNames.forEach(o=>{s.push(`float v${o} = get${o}AtOutCoords();`)});const r=this.variableNames.map(o=>`v${o}`).join(" + ");this.userCode=`
      void main() {
        ${s.join(`
        `)}

        float result = ${r};
        setOutput(result);
      }
    `}}class AB{constructor(e,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=t.map((o,i)=>`T${i}`);const s=[];this.variableNames.forEach(o=>{s.push(`vec4 v${o} = get${o}AtOutCoords();`)});const r=this.variableNames.map(o=>`v${o}`).join(" + ");this.userCode=`
      void main() {
        ${s.join(`
        `)}

        vec4 result = ${r};
        setOutput(result);
      }
    `}}function fu(n){const{inputs:e,backend:t}=n,s=e;if(s.length===1)return Sn({inputs:{x:s[0]},backend:t});if(s.length>J().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){const l=Math.floor(s.length/2),c=fu({inputs:s.slice(0,l),backend:t}),u=fu({inputs:s.slice(l),backend:t});return fu({inputs:[c,u],backend:t})}const r=s.map(l=>l.dtype).reduce((l,c)=>Cn(l,c)),o=s.map(l=>l.shape),a=J().getBool("WEBGL_PACK")?new AB(s[0].shape,o):new DB(s[0].shape,o);return t.runWebGLProgram(a,s,r)}const _B={kernelName:Uu,backendName:"webgl",kernelFunc:fu};function FB(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{axis:o,keepDims:i}=s,a=r.shape.length,l=Be(o,r.shape);let c=l;const u=wt(c,a);let h=r;u!=null&&(h=un({inputs:{x:r},backend:t,attrs:{perm:u}}),c=Nt(c.length,a)),qt("all",c,a);const[d,f]=Ut(h.shape,c),g=ne(f),x=me({inputs:{x:h},backend:t,attrs:{shape:[-1,g]}}),b=qr(x,x.dtype,"all",t);let y;if(i){const w=At(d,l);y=me({inputs:{x:b},backend:t,attrs:{shape:w}})}else y=me({inputs:{x:b},backend:t,attrs:{shape:d}});return t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(b),u!=null&&t.disposeIntermediateTensorInfo(h),y}const OB={kernelName:Gu,backendName:"webgl",kernelFunc:FB};function PB(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{axis:o,keepDims:i}=s,a=r.shape.length,l=Be(o,r.shape);let c=l;const u=wt(c,a);let h=r;u!=null&&(h=un({inputs:{x:r},backend:t,attrs:{perm:u}}),c=Nt(c.length,a)),qt("any",c,a);const[d,f]=Ut(h.shape,c),g=ne(f),x=me({inputs:{x:h},backend:t,attrs:{shape:[-1,g]}}),b=qr(x,x.dtype,"any",t);let y;if(i){const w=At(d,l);y=me({inputs:{x:b},backend:t,attrs:{shape:w}})}else y=me({inputs:{x:b},backend:t,attrs:{shape:d}});return t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(b),u!=null&&t.disposeIntermediateTensorInfo(h),y}const LB={kernelName:Hu,backendName:"webgl",kernelFunc:PB};class MB{constructor(e,t,s){this.variableNames=["A"];const{windowSize:r,batchSize:o,outSize:i}=e;s||this.variableNames.push("bestIndicesA"),this.outputShape=[o,i];const a=t==="max"?">":"<",l=s?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${r};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${r}; i++) {
          int inIdx = ${l};
          float candidate = getA(batch, inIdx);
          if (candidate ${a} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}}class zB{constructor(e,t,s,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,_(e.length>2,()=>`Packed arg${s.charAt(0).toUpperCase()+s.slice(1)} supports only inputs with rank above 2.`);const o=e[e.length-1],i=Math.ceil(o/t);this.outputShape=e.slice(0,-1),i>1&&this.outputShape.push(i),r||this.variableNames.push("bestIndicesA");const a=this.outputShape,l=a.length,c=it(l),u=cn("coords",l);let h,d;if(i===1){d=l+1;const O=it(d);h=`
        ${O} sourceLocR = ${O}(${u.join()}, 0);
        ++${u[l-1]};
        ${O} sourceLocG = ${O}(${u.join()}, 0);
        ++${u[l-2]};
        ${O} sourceLocA = ${O}(${u.join()}, 0);
        --${u[l-1]};
        ${O} sourceLocB = ${O}(${u.join()}, 0);
        --${u[l-2]};`}else d=l,h=`
        ${c} sourceLocR = coords;
        ++${u[l-1]};
        ${c} sourceLocG = coords;
        ++${u[l-2]};
        ${c} sourceLocA = coords;
        --${u[l-1]};
        ${c} sourceLocB = coords;
        --${u[l-2]};`;const f=["x","y","z","w","u","v"].slice(0,d),g="."+f[d-1],x=f.map(O=>"int "+O),b=cn("sourceLocR",d-1).concat("inIdx.r"),y=cn("sourceLocG",d-1).concat("inIdx.g"),w=cn("sourceLocB",d-1).concat("inIdx.b"),$=cn("sourceLocA",d-1).concat("inIdx.a"),C=s==="max"?"greaterThan":"lessThan",N=r?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${b.join()}),
                             getBestIndicesAChannel(${y.join()}),
                             getBestIndicesAChannel(${w.join()}),
                             getBestIndicesAChannel(${$.join()})));`,E=`vec4(
            getAChannel(${b.join()}),
            hasNextCol ? getAChannel(${y.join()}) : 0.,
            hasNextRow ? getAChannel(${w.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${$.join()}) : 0.)`,F=r?"":`
      float getBestIndicesAChannel(${x.join()}) {
        return getChannel(getBestIndicesA(${f.join()}),
                                          vec2(${f.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${x.join()}) {
        return getChannel(getA(${f.join()}),
                               vec2(${f.slice(-2).join()}));
      }
      ${F}
      void main() {
        ${c} coords = getOutputCoords();
        bool hasNextCol = ${u[l-1]} < ${a[l-1]-1};
        bool hasNextRow = ${u[l-2]} < ${a[l-2]-1};
        ${h}
        ivec4 srcIdx = ivec4(sourceLocR${g}, sourceLocG${g},
          sourceLocB${g}, sourceLocA${g}) * ${t};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${E};

        for (int i = 0; i < ${t}; i++) {
          inIdx = srcIdx;
          ${N}
          vec4 candidate = ${E};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${C}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}}function xw(n,e,t,s=null){let r=e.shape[0],o=e.shape[1];s!=null&&(r=s.shape[0],o=s.shape[1]);const i=Cc(o),a={windowSize:i,inSize:o,batchSize:r,outSize:Math.ceil(o/i)},l=new MB(a,t,s==null),c=[e];s!=null&&c.push(s);const u=n.runWebGLProgram(l,c,"int32");if(u.shape[1]===1)return u;const h=xw(n,e,t,u);return n.disposeIntermediateTensorInfo(u),h}function bw(n,e,t,s=null){const r=s!=null?s.shape:e.shape,o=r[r.length-1],i=Cc(o),a=new zB(r,i,t,s==null),l=s==null?[e]:[e,s],c=n.runWebGLProgram(a,l,"int32");if(c.shape.length===e.shape.length){const u=bw(n,e,t,c);return n.disposeIntermediateTensorInfo(c),u}return c}function yw(n,e,t,s){const r=[t];if(qt("arg"+s.charAt(0).toUpperCase()+s.slice(1),r,e.shape.length),!J().getBool("WEBGL_PACK_REDUCE")||e.shape.length<=2){const o=[],i=n.texData.get(e.dataId),a=i!==null&&i.isPacked;let l=e;a&&(l=n.unpackTensor(e),o.push(l));const[c,u]=Ut(l.shape,r),h=ne(u),d=me({inputs:{x:l},backend:n,attrs:{shape:[-1,h]}});o.push(d);const f=xw(n,d,s);o.push(f);const g=me({inputs:{x:f},backend:n,attrs:{shape:c}});return o.forEach(x=>n.disposeIntermediateTensorInfo(x)),g}return bw(n,e,s)}function BB(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{axis:o}=s;let i=Be(o,r.shape);const a=wt(i,r.shape.length);let l=r;const c=[];a!=null&&(l=un({inputs:{x:r},backend:t,attrs:{perm:a}}),c.push(l),i=Nt(i.length,l.shape.length)),qt("argMax",[i[0]],l.shape.length);const u=yw(t,l,i[0],"max");return c.forEach(h=>t.disposeIntermediateTensorInfo(h)),u}const VB={kernelName:Ya,backendName:"webgl",kernelFunc:BB};function WB(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{axis:o}=s;let i=Be(o,r.shape);const a=wt(i,r.shape.length);let l=r;const c=[];a!=null&&(l=un({inputs:{x:r},backend:t,attrs:{perm:a}}),c.push(l),i=Nt(i.length,l.shape.length)),qt("argMin",[i[0]],l.shape.length);const u=yw(t,l,i[0],"min");return c.forEach(h=>t.disposeIntermediateTensorInfo(h)),u}const UB={kernelName:Za,backendName:"webgl",kernelFunc:WB};const GB=jn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,HB=qe({opSnippet:GB}),jB={kernelName:Zo,backendName:"webgl",kernelFunc:HB};const KB=jn+"return log(x + sqrt(x * x + 1.0));",qB=qe({opSnippet:KB}),XB={kernelName:Jo,backendName:"webgl",kernelFunc:qB};const YB=jn+`
  return atan(x);
`,ZB=qe({opSnippet:YB}),JB={kernelName:Qo,backendName:"webgl",kernelFunc:ZB};const QB=rf+`
  return atan(a, b);
`,e4=`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Kr+`
  return result;
`,t4=Yt({opSnippet:QB,packedOpSnippet:e4}),n4={kernelName:ti,backendName:"webgl",kernelFunc:t4};const s4=jn+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,r4=qe({opSnippet:s4}),o4={kernelName:ei,backendName:"webgl",kernelFunc:r4};class Aa{constructor(e,t,s,r=!1,o=!1){if(this.variableNames=["x"],t==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const i=e.filterWidth,a=e.strideHeight,l=e.strideWidth,c=e.dilationHeight,u=e.dilationWidth,h=e.effectiveFilterHeight,d=e.effectiveFilterWidth,f=e.padInfo.top,g=e.padInfo.left;this.outputShape=e.outShape;const x=t==="avg",b=`((batch  * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + d`,y=`(xR * ${e.inWidth} + xC) * ${e.inChannels} + d`;let w="0.0";if(x||(w="-1.0 / 1e-20"),s){this.userCode=`
        const ivec2 strides = ivec2(${a}, ${l});
        const ivec2 pads = ivec2(${f}, ${g});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${h};
              wR += ${c}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${d};
                wC += ${u}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${r?o?b:y:`wR * ${d} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const $="max";let C=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t==="avg"&&(C="avgValue / max(count, 1.0)");const N=Math.floor(i/4)*4,E=i%4,F=`
      if (${x}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${$}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${a}, ${l});
      const ivec2 pads = ivec2(${f}, ${g});
      const float initializationValue = ${w};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${w});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${h};
            wR += ${c}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${N}; wC += 4) {
            int xC = xCCorner + wC * ${u};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              getValue(batch, xR, xC + 3 * ${u}, d)
            );

            ${F}
          }

          int xC = xCCorner + ${N};
          if (${E===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${F}
          } else if (${E===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              initializationValue,
              initializationValue
            );

            ${F}
          } else if (${E===3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              initializationValue
            );

            ${F}
          }
        }
        setOutput(${C});
      }
    `}}class af{constructor(e,t,s,r=!1,o=!1){if(this.variableNames=["x"],t==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const i=e.filterWidth,a=e.strideDepth,l=e.strideHeight,c=e.strideWidth,u=e.dilationDepth,h=e.dilationHeight,d=e.dilationWidth,f=e.effectiveFilterDepth,g=e.effectiveFilterHeight,x=e.effectiveFilterWidth,b=e.padInfo.front,y=e.padInfo.top,w=e.padInfo.left;this.outputShape=e.outShape;const $=t==="avg";let C="0.0";if($||(C="-1.0 / 1e-20"),s){this.userCode=`
        const ivec3 strides =
            ivec3(${a}, ${l}, ${c});
        const ivec3 pads = ivec3(${b}, ${y}, ${w});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${f};
              wD += ${u}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${e.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${g};
                wR += ${h}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${x};
                  wC += ${d}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${r?o?`(((batch * ${e.inDepth} + xD) * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`((xD * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`wD * ${g} * ${x} +
                      wR * ${x} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const N="max";let E=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t==="avg"&&(E="avgValue / max(count, 1.0)");const F=Math.floor(i/4)*4,O=i%4,A=`
      if (${$}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${N}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${a}, ${l}, ${c});
      const ivec3 pads = ivec3(${b}, ${y}, ${w});
      const float initializationValue = ${C};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${C});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${f};
            wD += ${u}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${g};
            wR += ${h}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${F}; wC += 4) {
              int xC = xCCorner + wC * ${d};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                getValue(batch, xD, xR, xC + 3 * ${d}, ch)
              );

              ${A}
            }

            int xC = xCCorner + ${F};
            if (${O===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${A}
            } else if (${O===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                initializationValue,
                initializationValue
              );

              ${A}
            } else if (${O===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                initializationValue
              );

              ${A}
            }
          }
        }
        setOutput(${E});
      }
    `}}function i4(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e;Ea(r,"avgPool");const{filterSize:o,strides:i,pad:a,dimRoundingMode:l}=s,c=1;_(Qt(i,c),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=Ln(r.shape,o,i,c,a,l);if(u.filterWidth===1&&u.filterHeight===1&&Je(u.inShape,u.outShape))return Sn({inputs:{x:r},backend:t});const h=new Aa(u,"avg",!1);return t.runWebGLProgram(h,[r],"float32")}const a4={kernelName:Ja,backendName:"webgl",kernelFunc:i4};function l4(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{filterSize:o,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=s,u=[1,1,1],h=Ds(r.shape,o,i,u,a,l,c),d=new af(h,"avg",!1);return t.runWebGLProgram(d,[r],"float32")}const c4={kernelName:Qa,backendName:"webgl",kernelFunc:l4};class u4{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;const t=e.filterHeight,s=e.filterWidth,r=e.strideHeight,o=e.strideWidth,i=e.dilationHeight,a=e.dilationWidth,l=e.effectiveFilterHeight,c=e.effectiveFilterWidth,u=l-1-e.padInfo.top,h=c-1-e.padInfo.left,d=1/(t*s);this.userCode=`
      const ivec2 pads = ivec2(${u}, ${h});
      const float avgMultiplier = float(${d});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${l};
            wR += ${i}) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${c};
            wC+= ${a}) {
            float dyC = float(dyCCorner + wC) / ${o}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}}class h4{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;const t=e.filterDepth,s=e.filterHeight,r=e.filterWidth,o=e.strideDepth,i=e.strideHeight,a=e.strideWidth,l=e.dilationDepth,c=e.dilationHeight,u=e.dilationWidth,h=e.effectiveFilterDepth,d=e.effectiveFilterHeight,f=e.effectiveFilterWidth,g=h-1-e.padInfo.front,x=d-1-e.padInfo.top,b=f-1-e.padInfo.left,y=1/(t*s*r);this.userCode=`
      const ivec3 pads = ivec3(${g}, ${x}, ${b});
      const float avgMultiplier = float(${y});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${h};
            wD += ${l}) {
          float dyD = float(dyDCorner + wD) / ${o}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${d};
              wR += ${c}) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${f};
                wC += ${u}) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function d4(n){const{inputs:e,backend:t,attrs:s}=n,{dy:r,input:o}=e,i=o,{filterSize:a,strides:l,pad:c,dimRoundingMode:u}=s,h=[1,1,1],d=Ds(i.shape,a,l,h,c,u),f=new h4(d);return t.runWebGLProgram(f,[r],i.dtype)}const p4={kernelName:Ku,backendName:"webgl",kernelFunc:d4};function f4(n){const{inputs:e,backend:t,attrs:s}=n,{dy:r,input:o}=e,i=o;Ea([r,o],"avgPoolGrad");const{filterSize:a,strides:l,pad:c}=s,u=Ln(i.shape,a,l,1,c),h=new u4(u);return t.runWebGLProgram(h,[r],i.dtype)}const m4={kernelName:ju,backendName:"webgl",kernelFunc:f4};function g4(n){const{inputs:e,backend:t,attrs:s}=n,{a:r,b:o}=e,{transposeA:i,transposeB:a}=s;return pu({a:r,b:o,transposeA:i,transposeB:a,backend:t})}const x4={kernelName:el,backendName:"webgl",kernelFunc:g4};class b4{constructor(e,t,s,r,o,i){this.outputShape=[],this.variableNames=["x","mean","variance"],Oe(e,t),Oe(e,s);let a="0.0";r!=null&&(Oe(e,r),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="1.0";o!=null&&(Oe(e,o),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${a};
        float scale = ${l};
        float inv = scale * inversesqrt(variance + float(${i}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}}class y4{constructor(e,t,s,r,o,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],Oe(e,t),Oe(e,s);let a="vec4(0.0)";r!=null&&(Oe(e,r),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="vec4(1.0)";o!=null&&(Oe(e,o),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        vec4 offset = ${a};
        vec4 scale = ${l};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${i}));

        setOutput((x - mean) * inv + offset);
      }
    `}}const w4={kernelName:dl,backendName:"webgl",kernelFunc:({inputs:n,backend:e,attrs:t})=>{const{x:s,mean:r,variance:o,offset:i,scale:a}=n;_(r.shape.length===o.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),_(i==null||r.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),_(a==null||r.shape.length===a.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:l}=t;l==null&&(l=.001);const c=[s,r,o];let u=null;i!=null&&(u=i.shape,c.push(i));let h=null;a!=null&&(h=a.shape,c.push(a));const d=J().getBool("WEBGL_PACK_NORMALIZATION")?new y4(s.shape,r.shape,o.shape,u,h,l):new b4(s.shape,r.shape,o.shape,u,h,l);return e.runWebGLProgram(d,c,c[0].dtype)}};class v4{constructor(e){this.variableNames=["source"],this.outputShape=e,this.rank=e.length;const t=it(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const s=C4(this.rank);let r;const o=e.map((i,a)=>`sourceLoc.${lf[a]} = start[${a}] + coords.${lf[a]};`);r=`
        ${t} sourceLoc;
        ${t} coords = getOutputCoords();
        ${o.join(`
`)}
      `,this.userCode=`
      void main() {
        ${r}
        setOutput(getSource(${s}));
      }
    `}}const lf=["x","y","z","w","u","v"];function C4(n){if(n===1)return"sourceLoc";if(n<=6)return lf.slice(0,n).map(e=>"sourceLoc."+e).join(",");throw Error(`Slicing for rank ${n} is not yet supported`)}class k4{constructor(e){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const t=it(this.rank),s=cn("coords",this.rank),r=cn("sourceLoc",this.rank),o=this.rank===1?"sourceLoc":`vec2(${r.slice(-2).join()})`,i=`getChannel(getSource(${r.join()}), ${o})`,a=`
      result.x = ${i};
      if (++${s[this.rank-1]} < ${e[this.rank-1]}) {
        ++${r[this.rank-1]};
        result.y = ${i};
        --${r[this.rank-1]};
      }
    `,l=this.rank===1?"":`
      --${s[this.rank-1]};
      if (++${s[this.rank-2]} < ${e[this.rank-2]}) {
        ++${r[this.rank-2]};
        result.z = ${i};
        if (++${s[this.rank-1]} < ${e[this.rank-1]}) {
          ++${r[this.rank-1]};
          result.w = ${i};
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            ${t}(${e.map((u,h)=>`start[${h}]`).join()});`:e.map((u,h)=>`${r[h]} = ${s[h]} + start[${h}];`).join(`
`);this.userCode=`
      void main() {
        ${t} coords = getOutputCoords();
        ${t} sourceLoc;
        ${c}
        vec4 result = vec4(0.);
        ${a}
        ${l}
        setOutput(result);
      }
    `}}function $4(n,e,t,s){const r=s.texData.get(n.dataId),o=s.makeTensorInfo(t,n.dtype),i=s.texData.get(o.dataId);Object.assign(i,r),i.refCount=1,i.shape=t,i.dtype=n.dtype;let a=Xg(e,Ie(n.shape));r.slice&&(a+=r.slice.flatOffset),i.slice={flatOffset:a,origDataId:r.slice&&r.slice.origDataId||n.dataId};const l=s.dataRefCount.get(i.slice.origDataId)||1;return s.dataRefCount.set(i.slice.origDataId,l+1),o}function Uo(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{begin:o,size:i}=s,[a,l]=Dd(r,o,i);if(jg(r,a,l),ne(l)===0)return t.makeTensorInfo(l,r.dtype,[]);if(t.shouldExecuteOnCPU([r])||r.dtype==="string"){const h=t.texData.get(r.dataId),d=xz(h.values,a,l,r.shape,r.dtype);return t.makeTensorInfo(l,r.dtype,d)}const{isPacked:c}=t.texData.get(r.dataId),u=qg(r.shape,a,l);if(c||!u){const h=J().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new k4(l):new v4(l),d=[a];return t.runWebGLProgram(h,[r],r.dtype,d)}return t.uploadToGPU(r.dataId),$4(r,a,l,t)}const I4={kernelName:Vl,backendName:"webgl",kernelFunc:Uo};const S4={kernelName:tl,backendName:"webgl",kernelFunc:n=>{const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{blockShape:o,crops:i}=s;_(r.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");const a=o.reduce((w,$)=>w*$),l=oa(r.shape,o,a),c=ia(l.length,o.length),u=aa(r.shape,o,a),h=Od(i,o.length),d=Pd(u,i,o.length),f=[],g=me({inputs:{x:r},backend:t,attrs:{shape:l}}),x=un({inputs:{x:g},backend:t,attrs:{perm:c}}),b=me({inputs:{x},backend:t,attrs:{shape:u}}),y=Uo({inputs:{x:b},backend:t,attrs:{begin:h,size:d}});return f.push(g),f.push(x),f.push(b),f.forEach(w=>t.disposeIntermediateTensorInfo(w)),y}};function N4(n){const{inputs:e,backend:t,attrs:s}=n,{x:r,weights:o}=e,{size:i}=s,a=t.readSync(r.dataId),l=t.readSync(o.dataId),c=Yy(a,l,o.dtype,o.shape,i);return t.makeTensorInfo([i],o.dtype,c)}const T4={kernelName:qu,backendName:"webgl",kernelFunc:N4};const E4=`
  int r = int(a.r) & int(b.r);
  int g = int(a.g) & int(b.g);
  int rb = int(a.b) & int(b.b);
  int ra = int(a.a) & int(b.a);
  return vec4(r, g, rb, ra);
`,R4=`
  return float(int(a.r) & int(b.r));
`;function D4(n){const{inputs:e,backend:t}=n,{a:s,b:r}=e,o=J().getBool("WEBGL_PACK_BINARY_OPERATIONS"),i=J().getNumber("WEBGL_VERSION");if(t.shouldExecuteOnCPU([s,r])||i===1){const l=t.texData.get(s.dataId).values,c=t.texData.get(r.dataId).values,[u,h]=VM(s.shape,r.shape,l,c,s.dtype),d=t.makeTensorInfo(h,s.dtype),f=t.texData.get(d.dataId);return f.values=u,d}let a;return o?a=new Vo(E4,s.shape,r.shape,!1):a=new jr(R4,s.shape,r.shape),t.runWebGLProgram(a,[s,r],s.dtype)}const A4={kernelName:Xu,backendName:"webgl",kernelFunc:D4};function _4(n){const{inputs:e,backend:t}=n,{s0:s,s1:r}=e,o=t.readSync(s.dataId),i=t.readSync(r.dataId),a=Oe(Array.from(o),Array.from(i));return t.makeTensorInfo([a.length],"int32",Int32Array.from(a))}const F4={kernelName:Gf,backendName:"webgl",kernelFunc:_4};const ww=Yt({opSnippet:"return float(a != b);",cpuKernelImpl:lz,dtype:"bool"}),O4={kernelName:El,backendName:"webgl",kernelFunc:ww};function _a(n){const{inputs:e,backend:t}=n,{input:s}=e,r=t.texData.get(s.dataId);return Sn({inputs:{x:r.complexTensorInfos.real},backend:t})}const P4={kernelName:Ch,backendName:"webgl",kernelFunc:_a};const L4="return float(int(x));";function M4(n,e){const t=new ks(n.shape,L4),s=e.runWebGLProgram(t,[n],"int32");return{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}function cf(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{dtype:o}=s;if(o==="complex64"){if(r.dtype==="complex64")return Sn({inputs:{x:r},backend:t});const i=Gt(r.shape),a=cf({inputs:{x:r},backend:t,attrs:{dtype:"float32"}}),l=dr({inputs:{real:a,imag:i},backend:t});return i.dispose(),t.disposeIntermediateTensorInfo(a),l}if(r.dtype==="complex64"){const i=_a({inputs:{input:r},backend:t}),a=cf({inputs:{x:i},backend:t,attrs:{dtype:o}});return t.disposeIntermediateTensorInfo(i),a}if(!Mf(r.dtype,o)){const i=Sn({inputs:{x:r},backend:t});return{dataId:i.dataId,shape:i.shape,dtype:o}}if(t.shouldExecuteOnCPU([r])){const i=t.texData.get(r.dataId).values,[a,l,c]=WM(i,r.shape,r.dtype,o);return t.makeTensorInfo(a,l,c)}if(o==="int32")return M4(r,t);if(o==="bool"){const i=t.makeTensorInfo([],"bool",Zt("bool",1)),l=ww({inputs:{a:r,b:i},backend:t});return t.disposeIntermediateTensorInfo(i),l}throw new Error(`Error in Cast: failed to cast ${r.dtype} to ${o}`)}const z4={kernelName:ni,backendName:"webgl",kernelFunc:cf};const vw="return ceil(x);",B4=qe({opSnippet:vw,packedOpSnippet:vw,cpuKernelImpl:UM}),V4={kernelName:si,backendName:"webgl",kernelFunc:B4};class W4{constructor(e){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}}class U4{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}}function G4(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{clipValueMin:o,clipValueMax:i}=s;let a;J().getBool("WEBGL_PACK_CLIP")?a=new U4(r.shape):a=new W4(r.shape);const l=[[o],[i]];return t.runWebGLProgram(a,[r],r.dtype,l)}const H4={kernelName:ri,backendName:"webgl",kernelFunc:G4};class j4{constructor(e){this.variableNames=["real","imag"],this.outputShape=e,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}}function Cw(n,e){return{dataId:e.dataId,dtype:e.dtype,shape:n.shape}}function K4(n){const{inputs:e,backend:t}=n,{x:s}=e,r=t.texData.get(s.dataId),o=new j4(s.shape),i=[Cw(s,r.complexTensorInfos.real),Cw(s,r.complexTensorInfos.imag)];return t.runWebGLProgram(o,i,i[0].dtype)}const q4={kernelName:nl,backendName:"webgl",kernelFunc:K4};class X4{constructor(e){this.outputShape=[],this.outputShape=fs(e,1),this.variableNames=e.map((i,a)=>`T${a}`);const t=new Array(e.length-1);t[0]=e[0][1];for(let i=1;i<t.length;i++)t[i]=t[i-1]+e[i][1];const s=[`if (yC < ${t[0]}) setOutput(getT0(yR, yC));`];for(let i=1;i<t.length;i++){const a=t[i-1];s.push(`else if (yC < ${t[i]}) setOutput(getT${i}(yR, yC-${a}));`)}const r=t.length,o=t[t.length-1];s.push(`else setOutput(getT${r}(yR, yC-${o}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${s.join(`
        `)}
      }
    `}}class Y4{constructor(e,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=fs(e,t);const s=this.outputShape,r=s.length,o=it(r),i=cn("coords",r),a=["x","y","z","w","u","v"].slice(0,r);this.variableNames=e.map((x,b)=>`T${b}`);const l=new Array(e.length-1);l[0]=e[0][t];for(let x=1;x<l.length;x++)l[x]=l[x-1]+e[x][t];const c=a[t],u=a.slice(-2),h=a.join();let d=`if (${c} < ${l[0]}) {
        return getChannel(
            getT0(${h}), vec2(${u.join()}));
        }`;for(let x=1;x<l.length;x++){const b=l[x-1];d+=`
        if (${c} < ${l[x]}  && ${c} >= ${l[x-1]}) {
          return getChannel(
            getT${x}(${mu(a,c,b)}),
            vec2(${mu(u,c,b)}));
        }`}const f=l.length,g=l[l.length-1];d+=`
        return getChannel(
          getT${f}(${mu(a,c,g)}),
          vec2(${mu(u,c,g)}));`,this.userCode=`
      float getValue(${a.map(x=>"int "+x)}) {
        ${d}
      }

      void main() {
        ${o} coords = getOutputCoords();
        vec4 result = vec4(getValue(${i}), 0., 0., 0.);

        ${i[r-1]} = ${i[r-1]} + 1;
        if (${i[r-1]} < ${s[r-1]}) {
          result.g = getValue(${i});
        }

        ${i[r-2]} = ${i[r-2]} + 1;
        if (${i[r-2]} < ${s[r-2]}) {
          result.a = getValue(${i});
        }

        ${i[r-1]} = ${i[r-1]} - 1;
        if (${i[r-2]} < ${s[r-2]} &&
            ${i[r-1]} < ${s[r-1]}) {
          result.b = getValue(${i});
        }
        setOutput(result);
      }
    `}}function mu(n,e,t){const s=n.indexOf(e);return n.map((o,i)=>i===s?`${o} - ${t}`:o).join()}function gu(n){const{inputs:e,backend:t}=n,{input:s}=e,r=t.texData.get(s.dataId);return Sn({inputs:{x:r.complexTensorInfos.imag},backend:t})}const Z4={kernelName:fh,backendName:"webgl",kernelFunc:gu};function Fa(n,e,t){const s=n[0].dtype;if(s==="complex64"){const f=n.map(w=>_a({inputs:{input:w},backend:t})),g=n.map(w=>gu({inputs:{input:w},backend:t})),x=Fa(f,e,t),b=Fa(g,e,t),y=dr({inputs:{real:x,imag:b},backend:t});return f.forEach(w=>t.disposeIntermediateTensorInfo(w)),g.forEach(w=>t.disposeIntermediateTensorInfo(w)),t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(b),y}let r=t.shouldExecuteOnCPU(n);if(s==="string"&&(r=!0),r){const f=n.map(C=>{const E=[-1,ne(C.shape.slice(e))];return me({inputs:{x:C},backend:t,attrs:{shape:E}})}),g=f.map(C=>({vals:t.readSync(C.dataId),shape:C.shape})),x=fs(f.map(C=>C.shape),1),b=f[0].shape[0]===1,y=GM(g,x,s,b),w=fs(n.map(C=>C.shape),e),$=t.makeTensorInfo(w,s,y);return f.forEach(C=>t.disposeIntermediateTensorInfo(C)),$}const o=n.filter(f=>ne(f.shape)>0),i=J().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&o[0].shape.length>1;if(o.length===1){const f=i?new ks(n[0].shape,ur):new hr(n[0].shape,ur);return t.runWebGLProgram(f,n,s)}const a=J().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(o.length>a){const f=[];for(let x=0;x<o.length;x+=a){const b=o.slice(x,x+a);f.push(Fa(b,e,t))}const g=Fa(f,e,t);for(const x of f)t.disposeIntermediateTensorInfo(x);return g}if(i){const f=new Y4(o.map(g=>g.shape),e);return t.runWebGLProgram(f,o,s)}const{tensors2D:l,outShape:c}=J4(o,e,t),u=new X4(l.map(f=>f.shape)),h=t.runWebGLProgram(u,l,s);l.forEach(f=>t.disposeIntermediateTensorInfo(f));const d=me({inputs:{x:h},attrs:{shape:c},backend:t});return t.disposeIntermediateTensorInfo(h),d}function J4(n,e,t){const s=fs(n.map(o=>o.shape),e);return{tensors2D:n.map(o=>me({inputs:{x:o},attrs:{shape:[-1,ne(o.shape.slice(e))]},backend:t})),outShape:s}}function kw(n){const{inputs:e,backend:t,attrs:s}=n,{axis:r}=s,o=Be(r,e[0].shape)[0],i=e.map(c=>c.shape);Ad(i,o);const a=fs(e.map(c=>c.shape),o);if(ne(a)===0)return t.makeTensorInfo(a,e[0].dtype,[]);const l=e.filter(c=>ne(c.shape)>0);return l.length===1?Sn({inputs:{x:l[0]},backend:t}):Fa(l,o,t)}const Q4={kernelName:sl,backendName:"webgl",kernelFunc:kw};class $w{constructor(e,t=!1,s=null,r=!1,o=!1){this.variableNames=["x","W"],this.outputShape=e.outShape;const i=e.padInfo.top,a=e.padInfo.left,l=e.strideHeight,c=e.strideWidth,u=e.dilationHeight,h=e.dilationWidth,d=e.filterHeight,f=e.filterWidth,g=Math.floor(e.inChannels/4)*4,x=e.inChannels%4,b=e.dataFormat==="channelsLast",y=b?1:2,w=b?2:3,$=b?3:1;let C="",N="";s&&(r?C=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:o?C=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:C=`
          float activation(float x) {
            ${s}
          }
        `,N="result = activation(result);");const E=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),o&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${C}

      const ivec2 strides = ivec2(${l}, ${c});
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${$}];

        ivec2 xRCCorner =
            ivec2(coords[${y}], coords[${w}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${d}; wR++) {
          int xR = xRCorner + wR * ${u};

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${f}; wC++) {
            int xC = xCCorner + wC * ${h};

            if (xC < 0 || xC >= ${e.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${g}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${b}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${x===1}) {

              if (${b}) {
                dotProd +=
                    getX(batch, xR, xC, ${g}) *
                    getW(wR, wC, ${g}, d2);
              } else {
                dotProd +=
                    getX(batch, ${g}, xR, xC) *
                    getW(wR, wC, ${g}, d2);
              }

            } else if (${x===2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${g}, d2),
                getW(wR, wC, ${g} + 1, d2)
              );

              if (${b}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${g}),
                  getX(batch, xR, xC, ${g} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${g}, xR, xC),
                  getX(batch, ${g} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${x===3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${g}, d2),
                getW(wR, wC, ${g} + 1, d2),
                getW(wR, wC, ${g} + 2, d2)
              );

              if (${b}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${g}),
                  getX(batch, xR, xC, ${g} + 1),
                  getX(batch, xR, xC, ${g} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${g}, xR, xC),
                  getX(batch, ${g} + 1, xR, xC),
                  getX(batch, ${g} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${E}
        ${N}
        setOutput(result);
      }
    `}}class eV{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;const t=e.padInfo.front,s=e.padInfo.top,r=e.padInfo.left,o=e.strideDepth,i=e.strideHeight,a=e.strideWidth,l=e.dilationDepth,c=e.dilationHeight,u=e.dilationWidth,h=e.filterDepth,d=e.filterHeight,f=e.filterWidth,g=Math.floor(e.inChannels/4)*4,x=e.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${o}, ${i}, ${a});
      const ivec3 pads = ivec3(${t}, ${s}, ${r});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${h}; wF++) {
          int xF = xFCorner + wF * ${l};

          if (xF < 0 || xF >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${d}; wR++) {
            int xR = xRCorner + wR * ${c};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${f}; wC++) {
              int xC = xCCorner + wC * ${u};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${g}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${x===1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${g}) *
                  getW(wF, wR, wC, ${g}, d2);
              } else if (${x===2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${g}),
                  getX(batch, xF, xR, xC, ${g} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${g}, d2),
                  getW(wF, wR, wC, ${g} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${x===3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${g}),
                  getX(batch, xF, xR, xC, ${g} + 1),
                  getX(batch, xF, xR, xC, ${g} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${g}, d2),
                  getW(wF, wR, wC, ${g} + 1, d2),
                  getW(wF, wR, wC, ${g} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class Iw{constructor(e,t=!1,s=null,r=!1,o=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=nn(this.outputShape.length);const i=e.padInfo.left,a=e.strideWidth,l=e.dilationWidth,c=e.filterHeight,u=e.filterWidth,h=u;let d=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let b=0;b<u;b++)d+=`
           vec4 xTexelC${b*2};
           int xTexelC${b*2}Ready;
           vec4 xTexelC${b*2+1};
           int xTexelC${b*2+1}Ready;
           vec4 xC${b};`;d+=`
     for (int r = 0; r < ${c}; r++) {
      for (int d1 = 0; d1 < ${e.inChannels}; d1 += 2) {
       `;for(let b=0;b<u;b++)d+=`
           xTexelC${b*2} = vec4(0.0);
           xTexelC${b*2}Ready = 0;
           xTexelC${b*2+1} = vec4(0.0);
           xTexelC${b*2+1}Ready = 0;
           xC${b} = vec4(0.0);`;d+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let b=0;b<(h+1)/2;b++){const y=b*2;if(d+=`
           xC = xCCorner + ${y*l};
           `,a===1){if(y<u&&(i%2===1?(d+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${y}Ready == 0) {
                   xTexelC${y} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${y}.zw = vec2(0.0);
                   }
                   xTexelC${y}Ready = 1;
                 }
               `,l===1&&y>0?d+=`
                 xC${y} = vec4(xTexelC${y-2}.zw, xTexelC${y}.xy);
                 `:d+=`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${y} = vec4(previous.zw, xTexelC${y}.xy);
                   } else {
                     xC${y} = vec4(0.0, 0.0, xTexelC${y}.xy);
                   }
                   `):d+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${y}Ready == 0) {
                   xTexelC${y} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${y}.zw = vec2(0.0);
                   }
                   xTexelC${y}Ready = 1;
                 }

                 xC${y} = xTexelC${y};
                 `,y+1<u)){const w=i%2===0?_u(l):l;l%2===0&&i%2===1||l%2!==0&&i%2!==1?(d+=`
                   xCOffset = xC + imod(pads[1], 2) + ${w};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${y+1}Ready == 0) {
                     xTexelC${y+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${y+1}.zw = vec2(0.0);
                     }
                     xTexelC${y+1}Ready = 1;
                   }
                   `,l>1?d+=`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${y+1} = vec4(previous.zw, xTexelC${y+1}.xy);
                     } else {
                      xC${y+1} = vec4(0.0, 0.0, xTexelC${y+1}.xy);
                     }
                     `:d+=`
                     xC${y+1} = vec4(xTexelC${y}.zw, xTexelC${y+1}.xy);
                     `):w===1?d+=`
                     xC${y+1} = xTexelC${y};
                     `:d+=`
                     xCOffset = xC + ${w};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${y+1}Ready == 0) {
                       xTexelC${y+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${y+1}.zw = vec2(0.0);
                       }
                       xTexelC${y+1}Ready = 1;
                     }

                     xC${y+1} = xTexelC${y+1};
                     `}}else y<u&&(i%2===1?(d+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${y}Ready == 0) {
                   xTexelC${y} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${y}.zw = vec2(0.0);
                   }
                   xTexelC${y}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${y+1}Ready == 0) {
                   xTexelC${y+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${y+1}.zw = vec2(0.0);
                   }
                   xTexelC${y+1}Ready = 1;
                 }

                 xC${y} = vec4(xTexelC${y}.zw, xTexelC${y+1}.zw);
               `,y+1<u&&(d+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${y+1} = vec4(xTexelC${y+1}.xy, final.xy);
                 `)):(d+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${y}Ready == 0) {
                   xTexelC${y} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${y}.zw = vec2(0.0);
                   }
                   xTexelC${y}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${y+1}Ready == 0) {
                   xTexelC${y+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${y+1}.zw = vec2(0.);
                   }
                   xTexelC${y+1}Ready = 1;
                 }

                 xC${y} = vec4(
                   xTexelC${y}.xy, xTexelC${y+1}.xy);
               `,y+1<u&&(d+=`
                   xC${y+1} = vec4(xTexelC${y}.zw, xTexelC${y+1}.zw);
                 `)));y<u&&(d+=`
             wTexel = getW(r, ${y}, d1, d2);
             dotProd += xC${y}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${e.inChannels}) {
               dotProd += xC${y}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,y+1<u&&(d+=`
               wTexel = getW(r, ${y+1}, d1, d2);
               dotProd += xC${y+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${e.inChannels}) {
                 dotProd += xC${y+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}d+=`
     }
   `,d+=`
     }
   `,d+=`
     }
   `;let f="",g="";s&&(r?f=`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${s}
         }`:o?f=`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${s}
         }`:f=`vec4 activation(vec4 x) {
           ${s}
         }`,g="result = activation(result);");const x=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),o&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
       ${f}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${d}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${x}
         ${g}
         setOutput(result);
       }
     `}}class tV{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=e,this.enableShapeUniforms=nn(this.outputShape.length);const{dataFormat:s}=t,r=ln(),o=s==="channelsLast",i=o?1:2,a=o?2:3,l=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${e[2]} && pos < ${e[1]}) {`;let c="";for(let u=0;u<=1;u++)for(let h=0;h<=1;h++)c+=`
          blockIndex = rc.z + ${h};
          pos = rc.y + ${u};

          ${l}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${i}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${a}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${o}) {
                  innerDims = vec2(d1, ch);
                  result[${u*2+h}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${u*2+h}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${c}

        ${r.output} = result;
      }
    `}}function xu(n,e){const t=n.length;return t>=3?e?[...n.slice(0,-3),n[t-3]*n[t-2],n[t-1]]:[...n.slice(0,-3),n[t-3],n[t-2]*n[t-1]]:!e&&t===1&&n[0]>1?[n[0],1]:null}function Sw({x:n,filter:e,convInfo:t,backend:s,bias:r=null,preluActivationWeights:o=null,leakyreluAlpha:i=0,activation:a=null}){const l=n.shape,c=s.texData.get(n.dataId),u=t.inChannels,h=l[0]*l[1]*l[2],d=t.outChannels,f=t.dataFormat==="channelsLast",g=!1,x=!1;let b;const y=[];if(o!=null){const C=xu(o.shape,f);C!=null&&(o=me({inputs:{x:o},backend:s,attrs:{shape:C}}),y.push(o))}if(r!=null){const C=xu(r.shape,f);C!=null&&(r=me({inputs:{x:r},backend:s,attrs:{shape:C}}),y.push(r))}if(!((h===1||d===1)&&u>fw)&&c.isPacked&&f&&c.texture!=null&&l[2]%2!==0&&Je(c.shape.slice(-3),l.slice(-3))){const C=l[0]*l[1]*(l[2]+1),N={dataId:n.dataId,shape:[1,C,t.inChannels],dtype:n.dtype},E=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,_(au(c.shape,N.shape),()=>`packed reshape ${c.shape} to ${N.shape} isn't free`);const F=me({inputs:{x:e},backend:s,attrs:{shape:[1,t.inChannels,t.outChannels]}});y.push(F);const O=pu({a:N,b:F,backend:s,transposeA:g,transposeB:x,bias:r,activation:a,preluActivationWeights:o,leakyreluAlpha:i}),A=s.texData.get(O.dataId);_(A.isPacked,()=>"batchMatMul result is expected to be packed"),c.shape=E,A.shape=t.outShape,b=Sn({inputs:{x:O},backend:s}),b.shape=t.outShape,y.push(O)}else{const C=t.outHeight*t.outWidth,N=me({inputs:{x:n},backend:s,attrs:{shape:f?[t.batchSize,C,t.inChannels]:[t.batchSize,t.inChannels,C]}}),E=me({inputs:{x:e},backend:s,attrs:{shape:[1,t.inChannels,t.outChannels]}}),F=pu({a:f?N:E,b:f?E:N,transposeA:!f,transposeB:x,backend:s,bias:r,activation:a,preluActivationWeights:o,leakyreluAlpha:i});b=me({inputs:{x:F},backend:s,attrs:{shape:t.outShape}}),y.push(N),y.push(E),y.push(F)}for(const C of y)s.disposeIntermediateTensorInfo(C);return b}function Nw({x:n,filter:e,convInfo:t,backend:s,bias:r=null,preluActivationWeights:o=null,leakyreluAlpha:i=0,activation:a=null}){const{filterWidth:l,filterHeight:c,inChannels:u,outWidth:h,outHeight:d,dataFormat:f}=t,g=f==="channelsLast",x=l*c*u,b=d*h,y=[t.batchSize,x,b],w=!0,$=!1,C=[];if(o!=null){const Z=xu(o.shape,g);Z!=null&&(o=me({inputs:{x:o},backend:s,attrs:{shape:Z}}),C.push(o))}if(r!=null){const Z=xu(r.shape,g);Z!=null&&(r=me({inputs:{x:r},backend:s,attrs:{shape:Z}}),C.push(r))}const N=me({inputs:{x:e},backend:s,attrs:{shape:[1,x,ne(e.shape)/x]}});C.push(N);const E=new tV(y,t),F=[n.shape,[t.padInfo.top,t.padInfo.left],[t.strideHeight,t.strideWidth],[t.dilationHeight,t.dilationWidth],[t.inChannels],[t.filterWidth*t.inChannels],[t.outWidth]],O=s.runWebGLProgram(E,[n],"float32",F),A=me({inputs:{x:O},backend:s,attrs:{shape:y}});C.push(O),C.push(A);const D=r!=null,S=o!=null,z=a==="leakyrelu",U=a?Da(a,!0):null,G=new cw(g?A.shape:N.shape,g?N.shape:A.shape,g?[t.batchSize,b,t.outChannels]:[t.batchSize,t.outChannels,b],w,$,D,U,S,z),K=g?[A,N]:[N,A];if(r&&K.push(r),S&&K.push(o),z){const Z=s.makeTensorInfo([],"float32",Hs(i,"float32"));K.push(Z),C.push(Z)}const X=s.runWebGLProgram(G,K,"float32"),Q=me({inputs:{x:X},backend:s,attrs:{shape:t.outShape}});C.push(X);for(const Z of C)s.disposeIntermediateTensorInfo(Z);return Q}function nV(n){const{inputs:e,backend:t,attrs:s}=n,{x:r,filter:o}=e,{strides:i,pad:a,dataFormat:l,dilations:c,dimRoundingMode:u}=s,h=As(l),d=Kt(r.shape,o.shape,i,c,a,u,!1,h);let f;if(d.filterHeight===1&&d.filterWidth===1&&d.dilationHeight===1&&d.dilationWidth===1&&d.strideHeight===1&&d.strideWidth===1&&(d.padInfo.type==="SAME"||d.padInfo.type==="VALID"))f=Sw({x:r,filter:o,convInfo:d,backend:t});else if(d.strideWidth<=2&&h==="channelsLast"&&J().getBool("WEBGL_EXP_CONV")){const x=new Iw(d),b=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]];f=t.runWebGLProgram(x,[r,o],"float32",b)}else if(J().getBool("WEBGL_CONV_IM2COL"))f=Nw({x:r,filter:o,convInfo:d,backend:t});else{const x=new $w(d);f=t.runWebGLProgram(x,[r,o],"float32")}const g=me({inputs:{x:f},backend:t,attrs:{shape:d.outShape}});return t.disposeIntermediateTensorInfo(f),g}const sV={kernelName:rl,backendName:"webgl",kernelFunc:nV};class rV{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const t=e.strideHeight,s=e.strideWidth,r=e.padInfo.top,o=e.padInfo.left,i=e.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${r};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${s} - ${o};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              ${i?`float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);`:`float dyValue = getDy(b, d2, yR, yC);
              float xValue = getX(b, d1, xR, xC);
              dotProd += (xValue * dyValue);`}
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class oV{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const t=e.filterHeight,s=e.filterWidth,r=e.strideHeight,o=e.strideWidth,i=e.dataFormat==="channelsLast",a=t-1-e.padInfo.top,l=s-1-e.padInfo.left,c=i?1:2,u=i?2:3,h=i?3:1;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${l});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${h}];

        ivec2 dyCorner = ivec2(coords[${c}], coords[${u}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            float dyC = float(dyCCorner + wC) / ${o}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${s} - 1 - wC;

            for (int d2 = 0; d2 < ${e.outChannels}; d2++) {

              if (${i}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}}class iV{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const t=e.strideDepth,s=e.strideHeight,r=e.strideWidth,o=e.padInfo.front,i=e.padInfo.top,a=e.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yF = 0; yF < ${e.outDepth}; yF++) {
            int xF = wF + yF * ${t} - ${o};

            if (xF < 0 || xF >= ${e.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${e.outHeight}; yR++) {
              int xR = wR + yR * ${s} - ${i};

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${e.outWidth}; yC++) {
                int xC = wC + yC * ${r} - ${a};

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class aV{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const t=e.filterDepth,s=e.filterHeight,r=e.filterWidth,o=e.strideDepth,i=e.strideHeight,a=e.strideWidth,l=t-1-e.padInfo.front,c=s-1-e.padInfo.top,u=r-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${l}, ${c}, ${u});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${t}; wF++) {
          float dyF = float(dyFCorner + wF) / ${o}.0;

          if (dyF < 0.0 || dyF >= ${e.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${t} - 1 - wF;

          for (int wR = 0; wR < ${s}; wR++) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${s} - 1 - wR;

            for (int wC = 0; wC < ${r}; wC++) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${r} - 1 - wC;

              for (int d2 = 0; d2 < ${e.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function lV(n){const{inputs:e,backend:t,attrs:s}=n,{x:r,dy:o}=e,{strides:i,pad:a,dataFormat:l,dimRoundingMode:c,filterShape:u}=s,h=As(l),d=Kt(r.shape,u,i,1,a,c,!1,h),f=new rV(d);return t.runWebGLProgram(f,[r,o],"float32")}const cV={kernelName:Zu,backendName:"webgl",kernelFunc:lV};class uV{constructor(e){this.variableNames=["dy","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"strides",type:"vec2"}],this.outputShape=e.inShape,this.enableShapeUniforms=nn(this.outputShape.length);const t=e.filterHeight,s=e.filterWidth,r=t-1-e.padInfo.top,o=s-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${r}, ${o});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];

        ivec2 dyCorner = ivec2(coords[1], coords[2]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        vec4 result = vec4(0.);
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / strides[0];
          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);
          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            int wCPerm = ${s} - 1 - wC;

            float dyC = float(dyCCorner + wC) / strides[1];
            bool idyCVal = (dyC >= 0.0) && (dyC < ${e.outWidth}.0)
              && (fract(dyC) == 0.0);
            int idyC = int(dyC);

            float dyC2 = float(dyCCorner + wC + 1) / strides[1];
            bool idyCVal2 = (dyC2 >= 0.0) && (dyC2 < ${e.outWidth}.0)
              && (fract(dyC2) == 0.0);
            int idyC2 = int(dyC2);

            if (idyCVal && idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec4 dySample2 = (idyC / 2 == idyC2 / 2) ?
                  dySample : getDy(batch, idyR, idyC2, d2);

                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));

                dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample2.xy : dySample2.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC2, d2);
                vec2 dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            }
          }
        }
        setOutput(result);
      }
    `}}function hV(n){const{inputs:e,backend:t,attrs:s}=n,{dy:r,filter:o}=e,{inputShape:i,strides:a,pad:l,dataFormat:c,dimRoundingMode:u}=s,h=As(c),d=Kt(i,o.shape,a,1,l,u,!1,h);if(J().getBool("WEBGL_PACK_CONV2DTRANSPOSE")&&h==="channelsLast"){const f=[[d.strideHeight,d.strideWidth]],g=new uV(d);return t.runWebGLProgram(g,[r,o],"float32",f)}else{const f=new oV(d);return t.runWebGLProgram(f,[r,o],"float32")}}const dV={kernelName:ol,backendName:"webgl",kernelFunc:hV};function pV(n){const{inputs:e,backend:t,attrs:s}=n,{x:r,filter:o}=e,{strides:i,pad:a,dilations:l}=s,c=Xs(r.shape,o.shape,i,l,a),u=new eV(c);return t.runWebGLProgram(u,[r,o],"float32")}const fV={kernelName:il,backendName:"webgl",kernelFunc:pV};function mV(n){const{inputs:e,backend:t,attrs:s}=n,{x:r,dy:o}=e,{strides:i,pad:a,filterShape:l}=s,c=Xs(r.shape,l,i,1,a),u=new iV(c);return t.runWebGLProgram(u,[r,o],"float32")}const gV={kernelName:Ju,backendName:"webgl",kernelFunc:mV};function xV(n){const{inputs:e,backend:t,attrs:s}=n,{dy:r,filter:o}=e,{pad:i,strides:a,inputShape:l}=s,c=Xs(l,o.shape,a,1,i),u=new aV(c);return t.runWebGLProgram(u,[r,o],"float32")}const bV={kernelName:Qu,backendName:"webgl",kernelFunc:xV};const yV=Wo+`
  return cos(x);
`,wV=`
  vec4 result = cos(x);
  bvec4 isNaN = isnan(x);
  ${Kr}
  return result;
`,vV=qe({opSnippet:yV,packedOpSnippet:wV}),CV={kernelName:oi,backendName:"webgl",kernelFunc:vV};const kV=qe({opSnippet:`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`}),$V={kernelName:ii,backendName:"webgl",kernelFunc:kV};class IV{constructor(e,t,s,r,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];const[i,a,l,c]=e,[u]=t,[h,d]=s;this.outputShape=[u,h,d,c];const f=r==="bilinear"?1:0,[g,x]=[`${a-1}.0`,`${l-1}.0`],[b,y,w]=h>1?[`${(a-1)/(h-1)}`,"(y2-y1) * height_ratio",`y1*${g} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${g}`],[$,C,N]=d>1?[`${(l-1)/(d-1)}`,"(x2-x1) * width_ratio",`x1*${x} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${x}`];this.userCode=`
      const float height_ratio = float(${b});
      const float width_ratio = float(${$});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${i}) {
          return;
        }

        float height_scale = ${y};
        float width_scale = ${C};

        float in_y = ${w};
        if( in_y < 0.0 || in_y > ${g} ) {
          setOutput(float(${o}));
          return;
        }
        float in_x = ${N};
        if( in_x < 0.0 || in_x > ${x} ) {
          setOutput(float(${o}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${f} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}}const SV={kernelName:th,backendName:"webgl",kernelFunc:n=>{const{inputs:e,backend:t,attrs:s}=n,{image:r,boxes:o,boxInd:i}=e,{cropSize:a,method:l,extrapolationValue:c}=s,u=new IV(r.shape,o.shape,a,l,c);return t.runWebGLProgram(u,[r,o,i],"float32")}};var Oa;(function(n){n.Prod="*",n.Sum="+"})(Oa||(Oa={}));class Tw{constructor(e,t,s,r){this.op=e,this.outputShape=t,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];const o=this.outputShape.length,i=this.op===Oa.Prod?"1.0":"0.0",a=s?i:`getX(${Ew(o,"coords",this.op)})`,l=this.outputShape[this.outputShape.length-1];let c="",u="";s?(c=r?`end != ${l-1}`:"end != 0",u=r?"end + 1":"end - 1"):(c=r?`end + pow2 < ${l}`:"end >= pow2",u=r?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${it(o)} coords = getOutputCoords();
        int end = ${Rw(o,"coords",this.op)};
        float val = ${a};
        int pow2 = int(pow(2.0, index));
        if (${c}) {
          int idx = ${u};
          ${Rw(o,"coords",this.op)} = idx;
          val ${this.op}= getX(${Ew(o,"coords",this.op)});
        }
        setOutput(val);
      }
    `}}function Ew(n,e,t){if(n===1)return`${e}`;if(n===2)return`${e}.x, ${e}.y`;if(n===3)return`${e}.x, ${e}.y, ${e}.z`;if(n===4)return`${e}.x, ${e}.y, ${e}.z, ${e}.w`;throw new Error(`Cumulative ${t} for rank ${n} is not yet supported`)}function Rw(n,e,t){if(n===1)return`${e}`;if(n===2)return`${e}.y`;if(n===3)return`${e}.z`;if(n===4)return`${e}.w`;throw new Error(`Cumulative ${t} for rank ${n} is not yet supported`)}function Dw(n,e,t,s,r,o){const i=e.shape.length,a=wt([s],i);let l=e;a!=null&&(l=un({inputs:{x:e},backend:t,attrs:{perm:a}}));const c=Nt(1,i)[0];if(c!==i-1)throw new Error(`WebGL cumprod shader expects an inner-most axis=${e.shape.length-1} but got axis=${s}`);const u=l.shape[c];let h=Sn({inputs:{x:l},backend:t});for(let d=0;d<=Math.ceil(Math.log2(u))-1;d++){const f=new Tw(n,l.shape,!1,o),g=[[d]],x=h;h=t.runWebGLProgram(f,[h],h.dtype,g),t.disposeIntermediateTensorInfo(x)}if(r){const d=new Tw(n,l.shape,r,o),f=h;h=t.runWebGLProgram(d,[h],h.dtype),t.disposeIntermediateTensorInfo(f)}if(a!=null){const d=Ys(a),f=un({inputs:{x:h},backend:t,attrs:{perm:d}});return t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(l),f}return h}function NV(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{axis:o,exclusive:i,reverse:a}=s;return Dw(Oa.Prod,r,t,o,i,a)}const TV={kernelName:eh,backendName:"webgl",kernelFunc:NV};function EV(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{axis:o,exclusive:i,reverse:a}=s;return Dw(Oa.Sum,r,t,o,i,a)}const RV={kernelName:al,backendName:"webgl",kernelFunc:EV};function DV(n){const{inputs:e,backend:t,attrs:s}=n,{x:r,weights:o}=e,{size:i,binaryOutput:a}=s;if(r.shape.length===1){const l=t.readSync(r.dataId),c=t.readSync(o.dataId),u=Yy(l,c,o.dtype,o.shape,i);return t.makeTensorInfo([i],o.dtype,u)}else if(r.shape.length===2){const l=t.bufferSync(r),c=t.bufferSync(o),u=BM(l,c,i,a);return t.makeTensorInfo(u.shape,o.dtype,u.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${r.shape.length}.`)}const AV={kernelName:nh,backendName:"webgl",kernelFunc:DV};class _V{constructor(e,t,s){this.variableNames=["x"],this.outputShape=[],this.outputShape=e,this.blockSize=t,this.dataFormat=s,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${t};
      int offset_h = imod(h, ${t});
      int in_w = w / ${t};
      int offset_w = imod(w, ${t});
      int offset_d = (offset_h * ${t} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"}getWidthCoordString(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"}getDepthCoordString(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"}getOutputDepthSize(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}function FV(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{blockSize:o,dataFormat:i}=s,a=r.shape[0],l=i==="NHWC"?r.shape[1]:r.shape[2],c=i==="NHWC"?r.shape[2]:r.shape[3],u=i==="NHWC"?r.shape[3]:r.shape[1],h=l*o,d=c*o,f=u/(o*o),g=i==="NHWC"?[a,h,d,f]:[a,f,h,d],x=new _V(g,o,i);return t.runWebGLProgram(x,[r],r.dtype)}const OV={kernelName:sh,backendName:"webgl",kernelFunc:FV};class Aw{constructor(e,t=!1,s=null,r=!1,o=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=nn(this.outputShape.length);const i=e.filterHeight,a=e.filterWidth,l=e.outChannels/e.inChannels;let c="",u="";s&&(r?c=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:o?c=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:c=`
          float activation(float x) {
            ${s}
          }
        `,u="result = activation(result);");const h=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),o&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${c}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${l};
        int q = d2 - d1 * ${l};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${i}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${a}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${h}
        ${u}
        setOutput(result);
      }
    `}}class _w{constructor(e,t=!1,s=null,r=!1,o=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=nn(this.outputShape.length);const i=e.outChannels/e.inChannels,a=e.padInfo.left,l=e.strideWidth,c=e.dilationWidth,u=e.filterHeight,h=e.filterWidth,d=h;let f=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let y=0;y<h;y++)f+=`
          vec4 xTexelC${y*2};
          int xTexelC${y*2}Ready;
          vec4 xTexelC${y*2+1};
          int xTexelC${y*2+1}Ready;
          vec4 xC${y};`;f+=`
    for (int r = 0; r < ${u}; r++) {
      `;for(let y=0;y<h;y++)f+=`
          xTexelC${y*2} = vec4(0.0);
          xTexelC${y*2}Ready = 0;
          xTexelC${y*2+1} = vec4(0.0);
          xTexelC${y*2+1}Ready = 0;
          xC${y} = vec4(0.0);`;f+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let y=0;y<(d+1)/2;y++){const w=y*2;if(f+=`
          xC = xCCorner + ${w*c};
          `,l===1){if(w<h&&(a%2===1?(f+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${w}Ready == 0) {
                  xTexelC${w} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${w}.zw = vec2(0.0);
                  }
                  xTexelC${w}Ready = 1;
                }
              `,c===1&&w>0?f+=`
                xC${w} = vec4(xTexelC${w-2}.zw, xTexelC${w}.xy);
                `:f+=`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${w} = vec4(previous.zw, xTexelC${w}.xy);
                  } else {
                    xC${w} = vec4(0.0, 0.0, xTexelC${w}.xy);
                  }
                  `):f+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${w}Ready == 0) {
                  xTexelC${w} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${w}.zw = vec2(0.0);
                  }
                  xTexelC${w}Ready = 1;
                }

                xC${w} = xTexelC${w};
                `,w+1<h)){const $=a%2===0?_u(c):c;c%2===0&&a%2===1||c%2!==0&&a%2!==1?(f+=`
                  xCOffset = xC + imod(pads[1], 2) + ${$};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${w+1}Ready == 0) {
                    xTexelC${w+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${w+1}.zw = vec2(0.0);
                    }
                    xTexelC${w+1}Ready = 1;
                  }
                  `,c>1?f+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${w+1} = vec4(previous.zw, xTexelC${w+1}.xy);
                    } else {
                     xC${w+1} = vec4(0.0, 0.0, xTexelC${w+1}.xy);
                    }
                    `:f+=`
                    xC${w+1} = vec4(xTexelC${w}.zw, xTexelC${w+1}.xy);
                    `):$===1?f+=`
                    xC${w+1} = xTexelC${w};
                    `:f+=`
                    xCOffset = xC + ${$};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${w+1}Ready == 0) {
                      xTexelC${w+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${w+1}.zw = vec2(0.0);
                      }
                      xTexelC${w+1}Ready = 1;
                    }

                    xC${w+1} = xTexelC${w+1};
                    `}}else w<h&&(a%2===1?(f+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${w}Ready == 0) {
                  xTexelC${w} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${w}.zw = vec2(0.0);
                  }
                  xTexelC${w}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${w+1}Ready == 0) {
                  xTexelC${w+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${w+1}.zw = vec2(0.0);
                  }
                  xTexelC${w+1}Ready = 1;
                }

                xC${w} = vec4(xTexelC${w}.zw, xTexelC${w+1}.zw);
              `,w+1<h&&(f+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${w+1} = vec4(xTexelC${w+1}.xy, final.xy);
                `)):(f+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${w}Ready == 0) {
                  xTexelC${w} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${w}.zw = vec2(0.0);
                  }
                  xTexelC${w}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${w+1}Ready == 0) {
                  xTexelC${w+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${w+1}.zw = vec2(0.);
                  }
                  xTexelC${w+1}Ready = 1;
                }

                xC${w} = vec4(
                  xTexelC${w}.xy, xTexelC${w+1}.xy);
              `,w+1<h&&(f+=`
                  xC${w+1} = vec4(xTexelC${w}.zw, xTexelC${w+1}.zw);
                `)));w<h&&(f+=`
            wTexel = getW(r, ${w}, d1, q);
            dotProd += xC${w} * vec4(wTexel.xz, wTexel.xz);
          `,w+1<h&&(f+=`
              wTexel = getW(r, ${w+1}, d1, q);
              dotProd += xC${w+1} * vec4(wTexel.xz, wTexel.xz);
            `))}f+=`
    }
  `,f+=`
      }
    `;let g="",x="";s&&(r?g=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:o?g=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:g=`vec4 activation(vec4 x) {
          ${s}
        }`,x="result = activation(result);");const b=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),o&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${g}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${i};
        int q = d2 - d1 * ${i};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${f}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${b}
        ${x}
        setOutput(result);
      }
    `}}function PV(n){const{inputs:e,backend:t,attrs:s}=n,{x:r,filter:o}=e,{strides:i,pad:a,dilations:l,dimRoundingMode:c}=s;let u=l;u==null&&(u=[1,1]),_(Qt(i,u),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${u}'`);const h=Kt(r.shape,o.shape,i,u,a,c,!0);let d;J().getBool("WEBGL_PACK_DEPTHWISECONV")&&h.strideWidth<=2&&h.outChannels/h.inChannels===1?d=new _w(h):d=new Aw(h);const f=[[h.padInfo.top,h.padInfo.left],[h.strideHeight,h.strideWidth],[h.dilationHeight,h.dilationWidth],[h.inHeight,h.inWidth]];return t.runWebGLProgram(d,[r,o],"float32",f)}const LV={kernelName:ll,backendName:"webgl",kernelFunc:PV};class MV{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const t=e.strideHeight,s=e.strideWidth,r=e.padInfo.top,o=e.padInfo.left,i=e.outChannels/e.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${i} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${r};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${s} - ${o};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class zV{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const t=e.filterHeight,s=e.filterWidth,r=e.strideHeight,o=e.strideWidth,i=t-1-e.padInfo.top,a=s-1-e.padInfo.left,l=e.outChannels/e.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            float dyC = float(dyCCorner + wC) / ${o}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${s} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${l}; dm++) {
              int d2 = d1 * ${l} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function BV(n){const{inputs:e,backend:t,attrs:s}=n,{x:r,dy:o}=e,{strides:i,dilations:a,pad:l,dimRoundingMode:c,filterShape:u}=s,h=Kt(r.shape,u,i,a,l,c,!0),d=new MV(h);return t.runWebGLProgram(d,[r,o],"float32")}const VV={kernelName:rh,backendName:"webgl",kernelFunc:BV};function WV(n){const{inputs:e,backend:t,attrs:s}=n,{dy:r,filter:o}=e,{strides:i,dilations:a,pad:l,dimRoundingMode:c,inputShape:u}=s,h=Kt(u,o.shape,i,a,l,c,!0),d=new zV(h);return t.runWebGLProgram(d,[r,o],"float32")}const UV={kernelName:oh,backendName:"webgl",kernelFunc:WV};class GV{constructor(e){this.variableNames=["X"],this.outputShape=[e,e],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}}function HV(n){const{inputs:e,backend:t}=n,{x:s}=e,r=[...s.shape,...s.shape],o=ne(s.shape),i=me({inputs:{x:s},backend:t,attrs:{shape:[o]}}),a=new GV(o),l=t.runWebGLProgram(a,[i],i.dtype),c=me({inputs:{x:l},backend:t,attrs:{shape:r}});return t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(l),c}const jV={kernelName:Hf,backendName:"webgl",kernelFunc:HV};class KV{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;const{inHeight:t,inWidth:s,padInfo:r,strideHeight:o,strideWidth:i,filterHeight:a,filterWidth:l,dilationHeight:c,dilationWidth:u}=e,{top:h,left:d}=r;this.userCode=`
      const ivec2 strides = ivec2(${o}, ${i});
      const ivec2 pads = ivec2(${h}, ${d});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${a}; h++) {
          int hIn = hBeg + h * ${c};

          if (hIn >= 0 && hIn < ${t}) {
            for (int w = 0; w < ${l}; w++) {
              int wIn = wBeg + w * ${u};

              if (wIn >= 0 && wIn < ${s}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}}function qV(n){const{inputs:e,backend:t,attrs:s}=n,{x:r,filter:o}=e,{strides:i,pad:a,dilations:l}=s,c=qi(r.shape,o.shape,i,a,"NHWC",l);let u;const h=new KV(c);u=t.runWebGLProgram(h,[r,o],"float32");const d=me({inputs:{x:u},backend:t,attrs:{shape:c.outShape}});return t.disposeIntermediateTensorInfo(u),d}const XV={kernelName:cl,backendName:"webgl",kernelFunc:qV};function YV(n){const{inputs:e,backend:t,attrs:s}=n,{equation:r}=s,o=e,{allDims:i,summedDims:a,idDims:l}=Hd(r,o.length);Kd(i.length,l,o);const{path:c,steps:u}=qd(a,l),h=u.length;let d=null,f=i.length;const g=[];for(let x=0;x<h;++x){for(const b of u[x]){const{permutationIndices:y,expandDims:w}=jd(f,l[b]);let $;Xd(y)?$=o[b]:($=un({inputs:{x:o[b]},backend:t,attrs:{perm:y}}),g.push($));const C=$.shape.slice();for(let N=0;N<w.length;++N)C.splice(w[N],0,1);Je($.shape,C)||($=me({inputs:{x:$},backend:t,attrs:{shape:C}}),g.push($)),d===null?d=$:(d=of({inputs:{a:$,b:d},backend:t}),g.push(d))}x<h-1&&(c[x]>=0&&(d=du({inputs:{x:d},backend:t,attrs:{axis:c[x]-(i.length-f),keepDims:!1}}),g.push(d)),f--)}for(const x of g)x!==d&&t.disposeIntermediateTensorInfo(x);return d}const ZV={kernelName:lh,backendName:"webgl",kernelFunc:YV};const JV=qe({opSnippet:"return (x >= 0.0) ? x : (exp(x) - 1.0);",packedOpSnippet:`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`}),QV={kernelName:li,backendName:"webgl",kernelFunc:JV};const eW="return (b >= 0.0) ? a : a * (b + 1.0);",tW=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,nW={kernelName:ch,backendName:"webgl",kernelFunc:n=>{const{inputs:e,backend:t}=n,{dy:s,y:r}=e,o=J().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Vo(tW,s.shape,r.shape):new jr(eW,s.shape,r.shape);return t.runWebGLProgram(o,[s,r],s.dtype)}};const sW=Yt({opSnippet:"return float(a == b);",packedOpSnippet:`
  return vec4(equal(a, b));
`,dtype:"bool",cpuKernelImpl:HM}),rW={kernelName:ul,backendName:"webgl",kernelFunc:sW};const oW=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${Ld};
  float a1 = ${Md};
  float a2 = ${zd};
  float a3 = ${Bd};
  float a4 = ${Vd};
  float a5 = ${Wd};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`,iW=qe({opSnippet:oW}),aW={kernelName:ci,backendName:"webgl",kernelFunc:iW};const lW=Wo+`
  return exp(x);
`,Fw=qe({opSnippet:lW,packedOpSnippet:`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:jM,dtype:"float32"}),cW={kernelName:ui,backendName:"webgl",kernelFunc:Fw};function uf(n){const{inputs:e,attrs:t,backend:s}=n,{dim:r}=t,{input:o}=e,i=o.shape.length,a=o.shape.slice();let l=r;return r<0&&(_(-(i+1)<=r,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),l=i+r+1),a.splice(l,0,1),me({inputs:{x:o},backend:s,attrs:{shape:a}})}const uW={kernelName:hl,backendName:"webgl",kernelFunc:uf};const Ow="return exp(x) - 1.0;",hW=qe({opSnippet:Ow,packedOpSnippet:Ow,cpuKernelImpl:KM}),dW={kernelName:hi,backendName:"webgl",kernelFunc:hW};class Pw{constructor(e,t,s){this.variableNames=["real","imag"];const r=t[1];this.outputShape=t;const o=s?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,i=s?`${r}.0`:"1.0";let a;if(e==="real")a="return real * expR - imag * expI;";else if(e==="imag")a="return real * expI + imag * expR;";else throw new Error(`FFT component must be either "real" or "imag", got ${e}.`);this.userCode=`
      const float exponentMultiplier = ${o};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${a}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${r});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${r}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${i};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}}function Lw(n,e,t){const s=t.texData.get(n.dataId),r=ne(n.shape),o=n.shape[n.shape.length-1],i=r/o,a=me({inputs:{x:n},backend:t,attrs:{shape:[i,o]}}),l=a.shape,c=new Pw("real",l,e),u=new Pw("imag",l,e),h=[{dataId:s.complexTensorInfos.real.dataId,dtype:s.complexTensorInfos.real.dtype,shape:l},{dataId:s.complexTensorInfos.imag.dataId,dtype:s.complexTensorInfos.imag.dtype,shape:l}],d=t.runWebGLProgram(c,h,"float32"),f=t.runWebGLProgram(u,h,"float32"),g=dr({inputs:{real:d,imag:f},backend:t});t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(f);const x=me({inputs:{x:g},backend:t,attrs:{shape:n.shape}});return t.disposeIntermediateTensorInfo(a),t.disposeIntermediateTensorInfo(g),x}function pW(n){const{inputs:e,backend:t}=n,{input:s}=e;return Lw(s,!1,t)}const fW={kernelName:uh,backendName:"webgl",kernelFunc:pW};class mW{constructor(e,t){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=e,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}}function Pa(n){const{backend:e,attrs:t}=n,{shape:s,value:r}=t;let{dtype:o}=t;if(o=o||lo(r),o==="string"){const i=It(o,ne(s));return i.fill(r),e.makeTensorInfo(s,o,i)}else{const i=new mW(s,r),a=[[r]];return e.runWebGLProgram(i,[],o,a)}}const gW={kernelName:hh,backendName:"webgl",kernelFunc:Pa};class xW{constructor(e){this.variableNames=["Image"],this.outputShape=[];const t=e[2];this.outputShape=e,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${t} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${t}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}}const bW={kernelName:dh,backendName:"webgl",kernelFunc:({inputs:n,backend:e})=>{const{image:t}=n,s=e,r=new xW(t.shape);return s.runWebGLProgram(r,[t],t.dtype)}};const Mw="return floor(x);",yW=qe({opSnippet:Mw,packedOpSnippet:Mw,cpuKernelImpl:qM}),wW={kernelName:di,backendName:"webgl",kernelFunc:yW};const vW=Yt({opSnippet:`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,packedOpSnippet:`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,dtype:"int32"}),CW={kernelName:pi,backendName:"webgl",kernelFunc:vW};class kW{constructor(e){this.variableNames=["A"];const t=ln(),[s,r]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${r}.0, ${s}.0);

        vec4 values = ${t.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}}class $W{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;const t=ln(),[s,r]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${r}.0, ${s}.0);
            vec4 values = ${t.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${t.output} = result;
      }
    `}}const IW={kernelName:cC,backendName:"webgl",kernelFunc:SW};let Go,hf=J().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function SW(n){const{inputs:e,backend:t,attrs:s}=n;let{pixels:r}=e;const{numChannels:o}=s,i=typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement,a=typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement,[l,c]=i?[r.videoWidth,r.videoHeight]:[r.width,r.height],u=[c,l],h=[c,l,o];if(a||i){const x=J().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(Go==null||x!==hf)&&(hf=x,Go=document.createElement("canvas").getContext("2d",{willReadFrequently:hf})),Go.canvas.width=l,Go.canvas.height=c,Go.drawImage(r,0,0,l,c),r=Go.canvas}const d=t.makeTensorInfo(u,"int32");t.texData.get(d.dataId).usage=On.PIXELS,t.gpgpu.uploadPixelDataToTexture(t.getTexture(d.dataId),r);const f=J().getBool("WEBGL_PACK")?new $W(h):new kW(h),g=t.runWebGLProgram(f,[d],"int32");return t.disposeData(d.dataId),g}function NW(n){const{inputs:e,backend:t,attrs:s}=n,{x:r,filter:o,bias:i,preluActivationWeights:a}=e,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d,activation:f,leakyreluAlpha:g}=s,x=As(u),b=Kt(r.shape,o.shape,l,h,c,d,!1,x);let y;const w=[],$=i!=null,C=a!=null,N=f==="leakyrelu",E=()=>{const O=[r,o],A=(D,S)=>{if(S==="NCHW"&&D.shape.length===1&&D.shape[0]!==1){const z=me({inputs:{x:D},backend:t,attrs:{shape:[D.shape[0],1,1]}});return w.push(z),z}return D};if($&&O.push(A(i,u)),C&&O.push(A(a,u)),N){const D=t.makeTensorInfo([],"float32",Hs(g,"float32"));O.push(D),w.push(D)}return O};if(b.filterHeight===1&&b.filterWidth===1&&b.dilationHeight===1&&b.dilationWidth===1&&b.strideHeight===1&&b.strideWidth===1&&(b.padInfo.type==="SAME"||b.padInfo.type==="VALID"))y=Sw({x:r,filter:o,convInfo:b,backend:t,bias:i,activation:f,preluActivationWeights:a,leakyreluAlpha:g});else if(b.strideWidth<=2&&x==="channelsLast"&&J().getBool("WEBGL_EXP_CONV")){const O=f?Da(f,!0):null,A=new Iw(b,$,O,C,N),D=[[b.padInfo.top,b.padInfo.left],[b.strideHeight,b.strideWidth],[b.dilationHeight,b.dilationWidth],[b.inHeight,b.inWidth]],S=E();y=t.runWebGLProgram(A,S,"float32",D)}else if(J().getBool("WEBGL_CONV_IM2COL"))y=Nw({x:r,filter:o,convInfo:b,backend:t,bias:i,activation:f,preluActivationWeights:a,leakyreluAlpha:g});else{const O=f?Da(f,!1):null,A=new $w(b,$,O,C,N),D=E();y=t.runWebGLProgram(A,D,"float32")}const F=me({inputs:{x:y},backend:t,attrs:{shape:b.outShape}});return w.push(y),w.forEach(O=>t.disposeIntermediateTensorInfo(O)),F}const TW={kernelName:Yl,backendName:"webgl",kernelFunc:NW};function EW(n){const{inputs:e,backend:t,attrs:s}=n,{x:r,filter:o,bias:i,preluActivationWeights:a}=e,{strides:l,pad:c,dilations:u,dimRoundingMode:h,activation:d,leakyreluAlpha:f}=s,g=[];let x=u;x==null&&(x=[1,1]),_(Qt(l,x),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${l} and dilations '${x}'`);const b=Kt(r.shape,o.shape,l,x,c,h,!0),y=J().getBool("WEBGL_PACK_DEPTHWISECONV")&&b.strideWidth<=2&&b.outChannels/b.inChannels===1,w=d?Da(d,y):null,$=[r,o],C=i!=null,N=a!=null,E=d==="leakyrelu";if(C&&$.push(i),N&&$.push(a),E){const D=t.makeTensorInfo([],"float32",Hs(f,"float32"));$.push(D),g.push(D)}let F;y?F=new _w(b,C,w,N,E):F=new Aw(b,C,w,N,E);const O=[[b.padInfo.top,b.padInfo.left],[b.strideHeight,b.strideWidth],[b.dilationHeight,b.dilationWidth],[b.inHeight,b.inWidth]],A=t.runWebGLProgram(F,$,"float32",O);return g.forEach(D=>t.disposeIntermediateTensorInfo(D)),A}const RW={kernelName:um,backendName:"webgl",kernelFunc:EW};class DW{constructor(e,t,s,r){this.sliceDim=e,this.strides=t,this.paramsShape=r,this.variableNames=["x","indices"],this.outputShape=s;const o=it(s.length);let i=`
    int index;`;for(let a=0;a<this.sliceDim;a++)i+=`
          index = round(getIndices(coords[0], ${a}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[a]};
          flattenIndex += index * ${this.strides[a]};`;this.userCode=`
         void main() {
          ${o} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${i}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}}function AW(n){const{inputs:e,backend:t}=n,{params:s,indices:r}=e,o=r.shape,i=o[o.length-1],a=ne(s.shape),[l,c,u,h]=Ed(s,r),d=me({inputs:{x:r},backend:t,attrs:{shape:[c,i]}}),f=me({inputs:{x:s},backend:t,attrs:{shape:[ne(s.shape)/u,u]}});if(t.shouldExecuteOnCPU([s,r])||s.dtype==="string"){const y=t.readSync(r.dataId),w=t.bufferSync(s),$=XM(y,w,s.dtype,c,i,u,h,s.shape,a);return t.makeTensorInfo(l,s.dtype,$.values)}const g=new DW(i,h,[c,u],s.shape),x=t.runWebGLProgram(g,[f,d],f.dtype),b=me({inputs:{x},backend:t,attrs:{shape:l}});return t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(x),b}const _W={kernelName:jf,backendName:"webgl",kernelFunc:AW};class FW{constructor(e,t){this.variableNames=["A","indices"],this.outputShape=t,this.rank=t.length;const s=it(this.rank),r=OW(e);this.userCode=`
      void main() {
        ${s} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${e[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${r}));
      }
    `}}function OW(n,e){const t=["resRC.x","resRC.y","resRC.z","resRC.w"],s=[];for(let r=0;r<n.length;r++)r===2?s.push("index"):s.push(`${t[r]}`);return s.join()}function zw(n){const{inputs:e,backend:t,attrs:s}=n,{x:r,indices:o}=e,{axis:i,batchDims:a}=s,l=Be(i,r.shape)[0];if(J().get("DEBUG")){const w=t.readSync(o.dataId),$=r.shape[l];for(let C=0;C<w.length;++C){const N=w[C];_(N<=$-1&&N>=0,()=>`GatherV2: the index value ${N} is not in [0, ${$-1}]`)}}const c=Cx(r,o,l,a),u=ne(o.shape),h=[],d=me({inputs:{x:r},backend:t,attrs:{shape:[c.batchSize,c.outerSize,c.dimSize,c.sliceSize]}}),f=me({inputs:{x:o},backend:t,attrs:{shape:[c.batchSize,u/c.batchSize]}});h.push(d),h.push(f);const g=[c.batchSize,c.outerSize,u/c.batchSize,c.sliceSize];if(t.shouldExecuteOnCPU([r,o])||r.dtype==="string"){const w=t.bufferSync(f),$=t.bufferSync(d),C=YM($,w,g);return h.forEach(N=>t.disposeIntermediateTensorInfo(N)),t.makeTensorInfo(c.outputShape,C.dtype,C.values)}const x=new FW(d.shape,g),b=t.runWebGLProgram(x,[d,f],d.dtype);h.push(b);const y=me({inputs:{x:b},backend:t,attrs:{shape:c.outputShape}});return h.forEach(w=>t.disposeIntermediateTensorInfo(w)),y}const PW={kernelName:pl,backendName:"webgl",kernelFunc:zw};const LW=Yt({opSnippet:"return float(a > b);",packedOpSnippet:`
  return vec4(greaterThan(a, b));
`,cpuKernelImpl:ZM,dtype:"bool"}),MW={kernelName:fl,backendName:"webgl",kernelFunc:LW};const zW=Yt({opSnippet:"return float(a >= b);",packedOpSnippet:`
  return vec4(greaterThanEqual(a, b));
`,dtype:"bool",cpuKernelImpl:JM}),BW={kernelName:fi,backendName:"webgl",kernelFunc:zW};function VW(n){const{inputs:e,backend:t}=n,{input:s}=e;return Lw(s,!0,t)}const WW={kernelName:ph,backendName:"webgl",kernelFunc:VW};const UW=qe({opSnippet:"return float(!isnan(x) && !isinf(x));",dtype:"bool"}),GW={kernelName:gi,backendName:"webgl",kernelFunc:UW};const HW=qe({opSnippet:"return float(isinf(x));",dtype:"bool"}),jW={kernelName:xi,backendName:"webgl",kernelFunc:HW};const KW=qe({opSnippet:"return float(isnan(x));",dtype:"bool"}),qW={kernelName:bi,backendName:"webgl",kernelFunc:KW};const XW=Yt({opSnippet:"return float(a < b);",packedOpSnippet:`
  return vec4(lessThan(a, b));
`,cpuKernelImpl:QM,dtype:"bool"}),YW={kernelName:gl,backendName:"webgl",kernelFunc:XW};const ZW=Yt({opSnippet:"return float(a <= b);",packedOpSnippet:`
  return vec4(lessThanEqual(a, b));
`,cpuKernelImpl:ez,dtype:"bool"}),JW={kernelName:xl,backendName:"webgl",kernelFunc:ZW};function QW(n){const{backend:e,attrs:t}=n,{start:s,stop:r,num:o}=t,i=tz(s,r,o);return e.makeTensorInfo([i.length],"float32",i)}const eU={kernelName:Kf,backendName:"webgl",kernelFunc:QW};const tU=Wo+`
  return x < 0.0 ? 0./0. : log(x);
`,nU=qe({opSnippet:tU,packedOpSnippet:`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,cpuKernelImpl:nz}),sU={kernelName:yi,backendName:"webgl",kernelFunc:nU};const rU=Wo+`
  return log(1.0 + x);
`,oU=qe({opSnippet:rU}),iU={kernelName:wi,backendName:"webgl",kernelFunc:oU};const aU=Yt({opSnippet:"return float(a >= 1.0 && b >= 1.0);",packedOpSnippet:`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,dtype:"bool"}),lU={kernelName:bl,backendName:"webgl",kernelFunc:aU};const cU=qe({opSnippet:"return float(!(x >= 1.0));"}),uU={kernelName:yl,backendName:"webgl",kernelFunc:cU};const hU=Yt({opSnippet:"return float(a >= 1.0 || b >= 1.0);",packedOpSnippet:`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,dtype:"bool"}),dU={kernelName:wl,backendName:"webgl",kernelFunc:hU};class pU{constructor(e,t,s,r,o){this.variableNames=["x"],this.outputShape=[];const i=t,a=e[3]-1;this.outputShape=e;let l;const c=`float(${s}) + float(${r}) * sum`;o===.5?l=`inversesqrt(${c})`:o===1?l=`1.0/(${c})`:l=`exp(log(${c}) * float(-${o}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${i}; j <= ${i}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${a}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${l};
        setOutput(val);
      }
    `}}class fU{constructor(e,t,s,r,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;const i=t,a=e[3]-1;this.outputShape=e;let l;const c=`float(${s}) + float(${r}) * sum`;o===.5?l=`inversesqrt(${c})`:o===1?l=`1.0/(${c})`:l=`exp(log(${c}) * float(-${o}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${i};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${i}; j <= ${i}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${a}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${l};
        setOutput(result);
      }
    `}}const mU={kernelName:vl,backendName:"webgl",kernelFunc:n=>{const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{depthRadius:o,bias:i,alpha:a,beta:l}=s,c=J().getBool("WEBGL_PACK_NORMALIZATION")?new fU(r.shape,o,i,a,l):new pU(r.shape,o,i,a,l);return t.runWebGLProgram(c,[r],r.dtype)}};class gU{constructor(e,t,s,r,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=t,this.bias=s,this.alpha=r,this.beta=o,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${t})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${t} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${r}) * norm + float(${s});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${r})
                * float(${o})
                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${o});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}}const xU={kernelName:mh,backendName:"webgl",kernelFunc:n=>{const{inputs:e,backend:t,attrs:s}=n,{x:r,y:o,dy:i}=e,{depthRadius:a,bias:l,alpha:c,beta:u}=s,h=new gU(r.shape,a,l,c,u);return t.runWebGLProgram(h,[r,o,i],r.dtype)}};function bU(n,e,t,s){const r=ne(e),i=ne(n.shape)/r,a=me({inputs:{x:n},attrs:{shape:[i,r]},backend:s}),l=qr(a,n.dtype,"max",s),c=me({inputs:{x:l},attrs:{shape:t},backend:s});return s.disposeIntermediateTensorInfo(a),s.disposeIntermediateTensorInfo(l),c}function Bw(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{reductionIndices:o,keepDims:i}=s,a=r.shape.length,l=Be(o,r.shape);let c=l;const u=wt(c,a),h=u!=null,d=t.shouldExecuteOnCPU([r]);let f=r;if(h){if(d){const $=t.texData.get(f.dataId).values,C=new Array(a);for(let F=0;F<C.length;F++)C[F]=r.shape[u[F]];const N=sf($,r.shape,r.dtype,u,C);f=t.makeTensorInfo(C,r.dtype);const E=t.texData.get(f.dataId);E.values=N}else f=hu(r,u,t);c=Nt(c.length,a)}qt("max",c,a);const[g,x]=Ut(f.shape,c);let b=g;i&&(b=At(g,l));let y;if(d){const $=t.texData.get(f.dataId).values,C=sz($,ne(x),b,r.dtype);y=t.makeTensorInfo(b,r.dtype);const N=t.texData.get(y.dataId);N.values=C}else y=bU(f,x,b,t);return h&&t.disposeIntermediateTensorInfo(f),y}const yU={kernelName:Cl,backendName:"webgl",kernelFunc:Bw};const wU=rf+`
  return max(a, b);
`,vU=`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Kr+`
  return result;
`,CU=Yt({opSnippet:wU,packedOpSnippet:vU,cpuKernelImpl:rz}),kU={kernelName:vi,backendName:"webgl",kernelFunc:CU};function $U(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e;Ea(r,"maxPool");const{filterSize:o,strides:i,pad:a,dimRoundingMode:l}=s,c=1;_(Qt(i,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=Ln(r.shape,o,i,c,a,l);if(u.filterWidth===1&&u.filterHeight===1&&Je(u.inShape,u.outShape))return Sn({inputs:{x:r},backend:t});const h=new Aa(u,"max",!1);return t.runWebGLProgram(h,[r],r.dtype)}const IU={kernelName:kl,backendName:"webgl",kernelFunc:$U};function SU(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{filterSize:o,strides:i,pad:a,dataFormat:l,dimRoundingMode:c}=s,u=[1,1,1],h=Ds(r.shape,o,i,u,a,c,l),d=new af(h,"max",!1);return t.runWebGLProgram(d,[r],r.dtype)}const NU={kernelName:$l,backendName:"webgl",kernelFunc:SU};class TU{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;const t=e.strideHeight,s=e.strideWidth,r=e.dilationHeight,o=e.effectiveFilterHeight,i=e.effectiveFilterWidth,a=o-1-e.padInfo.top,l=i-1-e.padInfo.left,c=o*i-1;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${l});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${o};
          wR += ${r}) {
          float dyR = float(dyRCorner + wR) / ${t}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${i}; wC++) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${c} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${i} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}}class EU{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;const t=e.strideDepth,s=e.strideHeight,r=e.strideWidth,o=e.dilationDepth,i=e.dilationHeight,a=e.dilationWidth,l=e.effectiveFilterDepth,c=e.effectiveFilterHeight,u=e.effectiveFilterWidth,h=l-1-e.padInfo.front,d=c-1-e.padInfo.top,f=u-1-e.padInfo.left,g=l*c*u-1;this.userCode=`
      const ivec3 pads = ivec3(${h}, ${d}, ${f});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${l};
           wD += ${o}) {
          float dyD = float(dyDCorner + wD) / ${t}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${c};
              wR += ${i}) {
            float dyR = float(dyRCorner + wR) / ${s}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${u};
                wC += ${a}) {
              float dyC = float(dyCCorner + wC) / ${r}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${g} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${c} * ${u} +
                  wR * ${u} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function RU(n){const{inputs:e,backend:t,attrs:s}=n,{dy:r,input:o}=e,i=o,{filterSize:a,strides:l,pad:c,dimRoundingMode:u}=s,h=[1,1,1],d=Ds(i.shape,a,l,h,c,u),f=new af(d,"max",!0),g=t.runWebGLProgram(f,[i],i.dtype),x=new EU(d),b=t.runWebGLProgram(x,[r,g],i.dtype);return t.disposeIntermediateTensorInfo(g),b}const DU={kernelName:xh,backendName:"webgl",kernelFunc:RU};function AU(n){const{inputs:e,backend:t,attrs:s}=n,{dy:r,input:o,output:i}=e,a=o;Ea([o,i],"maxPoolGrad");const{filterSize:l,strides:c,pad:u,dimRoundingMode:h}=s,d=Ln(a.shape,l,c,1,u,h),f=!0,g=new Aa(d,"max",f),x=t.runWebGLProgram(g,[a],a.dtype),b=new TU(d),y=t.runWebGLProgram(b,[r,x],a.dtype);return t.disposeIntermediateTensorInfo(x),y}const _U={kernelName:gh,backendName:"webgl",kernelFunc:AU};function FU(n,e,t,s){let r=new Aa(t,"max",!1);const o=s.runWebGLProgram(r,[n],"float32");r=new Aa(t,"max",!0,!0,e);const i=s.runWebGLProgram(r,[n],"float32");return[o,i]}const OU={kernelName:qf,backendName:"webgl",kernelFunc:({inputs:n,attrs:e,backend:t})=>{const{x:s}=n,{filterSize:r,strides:o,pad:i,includeBatchInIndex:a}=e,l=t;_(s.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${s.shape.length}.`);const c=[1,1];_(Qt(o,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '${c}'`);const u=Ln(s.shape,r,o,c,i),[h,d]=FU(s,a,u,l);return[h,d]}};function PU(n,e,t,s){const r=ne(e),i=ne(n.shape)/r,a=me({inputs:{x:n},attrs:{shape:[i,r]},backend:s}),l=qr(a,"float32","mean",s),c=me({inputs:{x:l},attrs:{shape:t},backend:s});return s.disposeIntermediateTensorInfo(a),s.disposeIntermediateTensorInfo(l),c}const LU={kernelName:Il,backendName:"webgl",kernelFunc:({inputs:n,attrs:e,backend:t})=>{const{x:s}=n,{keepDims:r,axis:o}=e,i=t,a=s.shape.length,l=Be(o,s.shape);let c=l;const u=wt(c,a),h=u!=null,d=i.shouldExecuteOnCPU([s]),f=[];let g=s;if(h){if(d){const C=i.texData.get(g.dataId).values,N=new Array(a);for(let O=0;O<N.length;O++)N[O]=s.shape[u[O]];const E=sf(C,s.shape,s.dtype,u,N);g=i.makeTensorInfo(N,s.dtype);const F=i.texData.get(g.dataId);F.values=E}else g=hu(s,u,i);f.push(g),c=Nt(c.length,a)}qt("sum",c,a);const[x,b]=Ut(g.shape,c);let y=x;r&&(y=At(x,l));const w=PU(g,b,y,i);for(const $ of f)i.disposeIntermediateTensorInfo($);return w}};function MU(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{axis:o,keepDims:i}=s,a=r.shape.length,l=Be(o,r.shape);let c=l;const u=wt(c,a);let h=r;u!=null&&(h=un({inputs:{x:r},backend:t,attrs:{perm:u}}),c=Nt(c.length,r.shape.length)),qt("min",c,a);const[d,f]=Ut(h.shape,c),g=ne(f),x=me({inputs:{x:h},backend:t,attrs:{shape:[-1,g]}}),b=qr(x,x.dtype,"min",t);let y;if(i){const w=At(d,l);y=me({inputs:{x:b},backend:t,attrs:{shape:w}})}else y=me({inputs:{x:b},backend:t,attrs:{shape:d}});return t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(b),u!=null&&t.disposeIntermediateTensorInfo(h),y}const zU={kernelName:Sl,backendName:"webgl",kernelFunc:MU};const BU=rf+`
  return min(a, b);
`,VU=`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Kr+`
  return result;
`,WU=Yt({opSnippet:BU,packedOpSnippet:VU,cpuKernelImpl:oz}),UU={kernelName:Ci,backendName:"webgl",kernelFunc:WU};class GU{constructor(e,t,s){this.variableNames=["x"],this.outputShape=t.map((u,h)=>u[0]+e[h]+u[1]);const r=e.length,o=it(r),i=t.map(u=>u[0]).join(","),a=t.map((u,h)=>u[0]+e[h]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r),c=s==="reflect"?0:1;if(r===1){this.userCode=`
        int start = ${i};
        int end = ${a};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${c};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${c};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${o} start = ${o}(${i});
      ${o} end = ${o}(${a});

      void main() {
        ${o} outC = getOutputCoords();
        for (int i = 0; i < ${r}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${c};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${c};
          }
        }
        ${o} coords = outC - start;
        setOutput(getX(${l}));
      }
    `}}class HU{constructor(e,t,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map((g,x)=>g[0]+e[x]+g[1]);const r=e.length,o=it(r),i=t.map(g=>g[0]).join(","),a=t.map((g,x)=>g[0]+e[x]).join(","),l=cn("rc",r),c=cn("source",r),u=`${l[r-1]} < ${this.outputShape[r-1]}`,h=r===1?"source":`vec2(${c.slice(-2).join()})`,d=s==="reflect"?0:1;let f="";if(r===1){const g=`
        ${o} source = rc;
        if (source < start) {
          source = start * 2 - source - ${d};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${d};
        }
        source -= start;
      `;f=`
        ${o} rc = outputLoc;
        ${g}
        result[0] = getChannel(getX(${c.join()}), ${h});
        ${l[r-1]} += 1;
        if(${u}) {
          ${g}
          result[1] = getChannel(getX(${c.join()}), ${h});
        }
      `}else{const g=`
        ${o} source = rc;
        ${o} lt = ${o}(lessThan(source, start));
        ${o} gte = ${o}(greaterThanEqual(source, end));
        ${o} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${d}) +
                gte * ((end - 1) * 2 - source + ${d});
        source -= start;
      `;f=`
        ${o} rc = outputLoc;
        ${g}
        result[0] = getChannel(getX(${c.join()}), ${h});
        ${l[r-1]} += 1;
        if(${u}) {
          ${g}
          result[1] = getChannel(getX(${c.join()}), ${h});
        }
        rc = outputLoc;
        ${l[r-2]} += 1;
        if(${l[r-2]} < ${this.outputShape[r-2]}) {
          ${g}
          result[2] = getChannel(getX(${c.join()}), ${h});
          ${l[r-1]} += 1;
          if(${u}) {
            ${g}
            result[3] = getChannel(getX(${c.join()}), ${h});
          }
        }
      `}this.userCode=`
      const ${o} start = ${o}(${i});
      const ${o} end = ${o}(${a});

      void main() {
        ${o} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${f}
        setOutput(result);
      }
    `}}const jU={kernelName:Nl,backendName:"webgl",kernelFunc:({inputs:n,backend:e,attrs:t})=>{const{x:s}=n,{paddings:r,mode:o}=t,i=J().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new HU(s.shape,r,o):new GU(s.shape,r,o);return e.runWebGLProgram(i,[s],s.dtype)}};const KU=`if (b == 0.0) return NAN;
  return mod(a, b);`,qU=`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+Kr+`
  return result;
`,XU=Yt({opSnippet:KU,packedOpSnippet:qU}),YU={kernelName:ki,backendName:"webgl",kernelFunc:XU};class ZU{constructor(e,t,s){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[e,s],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${t-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${t-1}));
      }
    `}}const Vw=Yt({opSnippet:`
if (a == b) {
  return 1.0;
};
return a / b;`,packedOpSnippet:`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,checkOutOfBounds:!0}),JU={kernelName:ai,backendName:"webgl",kernelFunc:Vw};const Ww="return a - b;",Uw=Yt({opSnippet:Ww,packedOpSnippet:Ww,supportsComplex:!0,cpuKernelImpl:Sz}),QU={kernelName:zi,backendName:"webgl",kernelFunc:Uw};function Gw(n){const{inputs:e,backend:t,attrs:s}=n,{logits:r}=e,{dim:o}=s,i=Be([o],r.shape),a=Bw({inputs:{x:r},backend:t,attrs:{reductionIndices:i,keepDims:!1}}),l=At(a.shape,i),c=me({inputs:{x:a},backend:t,attrs:{shape:l}}),u=Uw({inputs:{a:r,b:c},backend:t}),h=Fw({inputs:{x:u},backend:t}),d=du({inputs:{x:h},backend:t,attrs:{axis:i,keepDims:!1}}),f=me({inputs:{x:d},backend:t,attrs:{shape:l}}),g=Vw({inputs:{a:h,b:f},backend:t});return t.disposeIntermediateTensorInfo(a),t.disposeIntermediateTensorInfo(c),t.disposeIntermediateTensorInfo(u),t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(f),g}const eG={kernelName:Hl,backendName:"webgl",kernelFunc:Gw};function tG(n){const{inputs:e,backend:t,attrs:s}=n,{logits:r}=e,{numSamples:o,seed:i,normalized:a}=s,l=a?r:Gw({inputs:{logits:r},backend:t,attrs:{dim:r.shape.length-1}}),c=l.shape[0],u=l.shape[1],h=new ZU(c,u,o),d=[[i]],f=t.runWebGLProgram(h,[l],"int32",d);return a||t.disposeIntermediateTensorInfo(l),f}const nG={kernelName:Xf,backendName:"webgl",kernelFunc:tG};const sG=jn+`
  return -x;
`,rG=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function oG(n){const{inputs:e,backend:t}=n,{x:s}=e;if(t.shouldExecuteOnCPU([s])){const o=t.texData.get(s.dataId),[i,a]=az(o.values,s.shape,s.dtype);return t.makeTensorInfo(a,s.dtype,i)}let r;return J().getBool("WEBGL_PACK_UNARY_OPERATIONS")?r=new hr(s.shape,rG):r=new ks(s.shape,sG),t.runWebGLProgram(r,[s],s.dtype)}const iG={kernelName:Tl,backendName:"webgl",kernelFunc:oG};const aG=$d;function lG(n){Rn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:t,attrs:s}=n,{boxes:r,scores:o}=e,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l}=s,c=t.readSync(r.dataId),u=t.readSync(o.dataId),{selectedIndices:h}=aG(c,u,i,a,l);return t.makeTensorInfo([h.length],"int32",new Int32Array(h))}const cG={kernelName:bh,backendName:"webgl",kernelFunc:lG};const uG=Id;function hG(n){Rn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:t,attrs:s}=n,{boxes:r,scores:o}=e,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,padToMaxOutputSize:c}=s,u=t.readSync(r.dataId),h=t.readSync(o.dataId),{selectedIndices:d,validOutputs:f}=uG(u,h,i,a,l,c);return[t.makeTensorInfo([d.length],"int32",new Int32Array(d)),t.makeTensorInfo([],"int32",new Int32Array([f]))]}const dG={kernelName:yh,backendName:"webgl",kernelFunc:hG};const pG=Sd;function fG(n){Rn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:t,attrs:s}=n,{boxes:r,scores:o}=e,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,softNmsSigma:c}=s,u=t.readSync(r.dataId),h=t.readSync(o.dataId),d=i,f=a,g=l,x=c,{selectedIndices:b,selectedScores:y}=pG(u,h,d,f,g,x);return[t.makeTensorInfo([b.length],"int32",new Int32Array(b)),t.makeTensorInfo([y.length],"float32",new Float32Array(y))]}const mG={kernelName:wh,backendName:"webgl",kernelFunc:fG};class gG{constructor(e,t,s,r){this.variableNames=["indices"],this.outputShape=[e,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${r}), float(${s}),
                      float(index == coords.y)));
      }
    `}}const xG={kernelName:Dl,backendName:"webgl",kernelFunc:n=>{const{inputs:e,backend:t,attrs:s}=n,{indices:r}=e,{dtype:o,depth:i,onValue:a,offValue:l}=s,c=ne(r.shape),u=new gG(c,i,a,l),h=me({inputs:{x:r},backend:t,attrs:{shape:[c]}}),d=t.runWebGLProgram(u,[h],o);t.disposeIntermediateTensorInfo(h);const f=[...r.shape,i],g=me({inputs:{x:d},backend:t,attrs:{shape:f}});return t.disposeIntermediateTensorInfo(d),g}};function bu(n){const{inputs:e,backend:t}=n,{x:s}=e;if(s.dtype==="complex64"){const r=_a({inputs:{input:s},backend:t}),o=bu({inputs:{x:r},backend:t}),i=gu({inputs:{input:s},backend:t}),a=bu({inputs:{x:i},backend:t}),l=dr({inputs:{real:o,imag:a},backend:t});return t.disposeIntermediateTensorInfo(r),t.disposeIntermediateTensorInfo(o),t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(a),l}else return Pa({attrs:{shape:s.shape,dtype:s.dtype,value:s.dtype==="string"?"":0},backend:t})}const bG={kernelName:ql,backendName:"webgl",kernelFunc:bu};function Hw(n){const{inputs:e,backend:t}=n,{x:s}=e;if(s.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(s.dtype==="complex64"){const r=_a({inputs:{input:s},backend:t}),o=Hw({inputs:{x:r},backend:t}),i=gu({inputs:{input:s},backend:t}),a=bu({inputs:{x:i},backend:t}),l=dr({inputs:{real:o,imag:a},backend:t});return t.disposeIntermediateTensorInfo(r),t.disposeIntermediateTensorInfo(o),t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(a),l}else return Pa({attrs:{shape:s.shape,dtype:s.dtype,value:1},backend:t})}const yG={kernelName:Rl,backendName:"webgl",kernelFunc:Hw};function wG(n){const{inputs:e,backend:t,attrs:s}=n,{axis:r}=s;if(e.length===1)return uf({inputs:{input:e[0]},backend:t,attrs:{dim:r}});const o=e[0].shape,i=e[0].dtype;e.forEach(u=>{Fu(o,u.shape,"All tensors passed to stack must have matching shapes"),_(i===u.dtype,()=>"All tensors passed to stack must have matching dtypes")});const a=[],l=e.map(u=>{const h=uf({inputs:{input:u},backend:t,attrs:{dim:r}});return a.push(h),h}),c=kw({inputs:l,backend:t,attrs:{axis:r}});return a.forEach(u=>t.disposeIntermediateTensorInfo(u)),c}const vG={kernelName:Al,backendName:"webgl",kernelFunc:wG};class CG{constructor(e,t,s){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map((c,u)=>c[0]+e[u]+c[1]);const r=e.length,o=it(r),i=t.map(c=>c[0]).join(","),a=t.map((c,u)=>c[0]+e[u]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r);if(r===1){this.userCode=`
        int start = ${i};
        int end = ${a};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${o} start = ${o}(${i});
      ${o} end = ${o}(${a});

      void main() {
        ${o} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${o} coords = outC - start;
          setOutput(getX(${l}));
        }
      }
    `}}class kG{constructor(e,t,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map((x,b)=>x[0]+e[b]+x[1]);const r=e.length,o=it(r),i=t.map(x=>x[0]).join(","),a=t.map((x,b)=>x[0]+e[b]).join(","),l=cn("rc",r),c=cn("source",r),u=`${l[r-1]} < ${this.outputShape[r-1]}`,h=r===1?"source":`vec2(${c.slice(-2).join()})`,d=[`${o} rc = outputLoc;`,`${l[r-1]} += 1;
       if(${u}) {
      `,r===1?"":`}
       rc = outputLoc;
       ${l[r-2]} += 1;
       if(${l[r-2]} < ${this.outputShape[r-2]}) {`,r===1?"":`  ${l[r-1]} += 1;
         if(${u}) {`],f=r===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))";let g="";for(let x=0,b=r===1?2:4;x<b;x++)g+=`
        ${d[x]}
        if (${f}) {
          result[${x}] = float(value);
        } else {
          ${o} source = rc - start;
          result[${x}] = getChannel(getX(${c.join()}), ${h});
        }
      `;g+=r===1?"} ":"}}",this.userCode=`
      const ${o} start = ${o}(${i});
      const ${o} end = ${o}(${a});

      void main() {
        ${o} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${g}
        setOutput(result);
      }
    `}}const jw=n=>{const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{paddings:o,constantValue:i}=s;if(ne(r.shape)===0){const c=o.map((u,h)=>u[0]+r.shape[h]+u[1]);return Pa({backend:t,attrs:{shape:c,value:i,dtype:r.dtype}})}const a=J().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new kG(r.shape,o,i):new CG(r.shape,o,i),l=[[i]];return t.runWebGLProgram(a,[r],r.dtype,l)},$G={kernelName:_l,backendName:"webgl",kernelFunc:jw};const IG=`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,SG=`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  bvec4 isNaN1 = lessThan(a, vec4(0.0));
  bvec4 isNaN2 = lessThan(floor(b), b);
  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);
  `+Kr+`
  return result;
`,NG=Yt({opSnippet:IG,packedOpSnippet:SG}),TG={kernelName:Ii,backendName:"webgl",kernelFunc:NG};function EG(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{axis:o,keepDims:i}=s,a=r.shape.length,l=[],c=Be(o,r.shape);let u=c;const h=wt(u,a);let d=r;h!=null&&(d=un({inputs:{x:r},backend:t,attrs:{perm:h}}),u=Nt(u.length,a),l.push(d)),qt("prod",u,a);let f;if(t.shouldExecuteOnCPU([d])){const g=t.texData.get(d.dataId).values,{outVals:x,outShape:b,outDtype:y}=cz(d.shape,d.dtype,g,u);f=t.makeTensorInfo(b,y,x)}else{const[g,x]=Ut(d.shape,u),b=ne(x),y=me({inputs:{x:d},backend:t,attrs:{shape:[-1,b]}}),w=Bh(r.dtype),$=qr(y,w,"prod",t);f=me({inputs:{x:$},backend:t,attrs:{shape:g}}),l.push(y),l.push($)}if(i){l.push(f);const g=At(f.shape,c);f=me({inputs:{x:f},backend:t,attrs:{shape:g}})}return l.forEach(g=>t.disposeIntermediateTensorInfo(g)),f}const RG={kernelName:Ol,backendName:"webgl",kernelFunc:EG};function DG(n){const{inputs:e,backend:t,attrs:s}=n,{paramsNestedSplits:r,paramsDenseValues:o,indices:i}=e,{outputRaggedRank:a}=s,l=r.map(y=>t.readSync(y.dataId)),c=r.map(y=>y.shape),u=t.readSync(o.dataId),h=t.readSync(i.dataId),[d,f,g]=uz(l,c,u,o.shape,o.dtype,h,i.shape,a),x=d.map(y=>t.makeTensorInfo([y.length],"int32",y)),b=t.makeTensorInfo(g,o.dtype,f);return x.concat([b])}const AG={kernelName:Yf,backendName:"webgl",kernelFunc:DG};function _G(n){const{inputs:e,backend:t}=n,{starts:s,limits:r,deltas:o}=e,i=t.readSync(s.dataId),a=t.readSync(r.dataId),l=t.readSync(o.dataId),[c,u]=hz(i,s.shape,s.dtype,a,r.shape,l,o.shape),h=t.makeTensorInfo([c.length],"int32",c),d=t.makeTensorInfo([u.length],s.dtype,u);return[h,d]}const FG={kernelName:Zf,backendName:"webgl",kernelFunc:_G};function OG(n){const{inputs:e,backend:t,attrs:s}=n,{shape:r,values:o,defaultValue:i,rowPartitionTensors:a}=e,{rowPartitionTypes:l}=s,c=t.readSync(r.dataId),u=t.readSync(o.dataId),h=t.readSync(i.dataId),d=a.map(b=>t.readSync(b.dataId)),f=a.map(b=>b.shape),[g,x]=dz(c,r.shape,u,o.shape,o.dtype,h,i.shape,d,f,l);return t.makeTensorInfo(g,o.dtype,x)}const PG={kernelName:Jf,backendName:"webgl",kernelFunc:OG};const Kw=n=>{const{backend:e,attrs:t}=n,{start:s,stop:r,step:o,dtype:i}=t,a=pz(s,r,o,i);return e.makeTensorInfo([a.length],i,a)},LG={kernelName:vh,backendName:"webgl",kernelFunc:Kw};const MG=qe({opSnippet:"return 1.0 / x;"}),zG={kernelName:Si,backendName:"webgl",kernelFunc:MG};const BG=jn+`
  return (x < 0.0) ? 0.0 : x;
`,VG=qe({opSnippet:BG,packedOpSnippet:`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`}),WG={kernelName:Ni,backendName:"webgl",kernelFunc:VG};const UG=jn+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,GG=qe({opSnippet:UG,packedOpSnippet:`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`}),HG={kernelName:Ti,backendName:"webgl",kernelFunc:GG};class jG{constructor(e,t,s,r,o){this.variableNames=["A"],this.outputShape=[];const[i,a,l,c]=e;this.outputShape=[i,t,s,c];const u=[r&&t>1?a-1:a,r&&s>1?l-1:l],h=[r&&t>1?t-1:t,r&&s>1?s-1:s];let d;o?d="(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":d="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${u[0]/h[0]},
          ${u[1]/h[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${l}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${d};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}}class KG{constructor(e,t,s,r,o){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,a,l,c]=e;this.outputShape=[i,t,s,c];const u=[r&&t>1?a-1:a,r&&s>1?l-1:l],h=[r&&t>1?t-1:t,r&&s>1?s-1:s];let d;o?d="(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":d="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${u[0]/h[0]},
          ${u[1]/h[1]},
          ${u[1]/h[1]});
      const vec3 inputShapeRC = vec3(${a}.0, ${l}.0,
                                     ${l}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${d};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${c-1};
        bool hasNextRow = coords.z < ${s-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}}function qG(n){const{inputs:e,backend:t,attrs:s}=n,{images:r}=e,{alignCorners:o,halfPixelCenters:i,size:a}=s,[l,c]=a,u=J().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new KG(r.shape,l,c,o,i):new jG(r.shape,l,c,o,i);return t.runWebGLProgram(u,[r],"float32")}const XG={kernelName:Ml,backendName:"webgl",kernelFunc:qG};class YG{constructor(e,t,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;const[,r,o]=t,[,i,a]=e,l=[s&&i>1?r-1:r,s&&a>1?o-1:o],c=[s&&i>1?i-1:i,s&&a>1?a-1:a],u=l[0]/c[0],h=l[1]/c[1],d=1/u,f=1/h,g=Math.ceil(d)*2+2,x=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${u});
        const float widthScale = float(${h});

        const float invHeightScale = float(${d});
        const float invWidthScale = float(${f});

        const int winHeight = int(${g});
        const int winWidth = int(${x});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${a}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${r-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${o-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}function ZG(n){const{inputs:e,backend:t,attrs:s}=n,{images:r,dy:o}=e,{alignCorners:i}=s,a=new YG(o.shape,r.shape,i);return t.runWebGLProgram(a,[o],o.dtype)}const JG={kernelName:$h,backendName:"webgl",kernelFunc:ZG};class QG{constructor(e,t,s,r,o){this.variableNames=["A"],this.outputShape=[];const[i,a,l,c]=e;this.outputShape=[i,t,s,c];const u=[r&&t>1?a-1:a,r&&s>1?l-1:l],h=[r&&t>1?t-1:t,r&&s>1?s-1:s],d=r?"0.5":"0.0";let f;o?f="max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":f="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${u[0]/h[0]},
          ${u[1]/h[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${l}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}}class eH{constructor(e,t,s,r,o){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,a,l,c]=e;this.outputShape=[i,t,s,c];const u=[r&&t>1?a-1:a,r&&s>1?l-1:l],h=[r&&t>1?t-1:t,r&&s>1?s-1:s],d=r?"0.5":"0.0";let f;o?f="max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":f="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${u[0]/h[0]},
          ${u[1]/h[1]},
          ${u[1]/h[1]});
      const vec3 inputShapeRC = vec3(${a}.0, ${l}.0,
                                     ${l}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${c-1};
        bool hasNextRow = coords.z < ${s-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}}function tH(n){const{inputs:e,backend:t,attrs:s}=n,{images:r}=e,{alignCorners:o,halfPixelCenters:i,size:a}=s,[l,c]=a,u=J().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new eH(r.shape,l,c,o,i):new QG(r.shape,l,c,o,i);return t.runWebGLProgram(u,[r],r.dtype)}const nH={kernelName:Ll,backendName:"webgl",kernelFunc:tH};class sH{constructor(e,t,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;const[,r,o]=t,[,i,a]=e,l=[s&&i>1?r-1:r,s&&a>1?o-1:o],c=[s&&i>1?i-1:i,s&&a>1?a-1:a],u=l[0]/c[0],h=l[1]/c[1],d=1/u,f=1/h,g=Math.ceil(d)*2+2,x=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${u});
        const float widthScale = float(${h});

        const float invHeightScale = float(${d});
        const float invWidthScale = float(${f});

        const int winHeight = int(${g});
        const int winWidth = int(${x});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${a}) {
              continue;
            }

            float sourceFracRow =
              float(${l[0]}) *
                (float(dyR) / float(${c[0]}));

            float sourceFracCol =
                float(${l[1]}) *
                  (float(dyC) / float(${c[1]}));

            int sourceNearestRow = int(min(
                float(int(${r}) - 1),
                ${s} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${o}) - 1),
                ${s} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}function rH(n){const{inputs:e,backend:t,attrs:s}=n,{images:r,dy:o}=e,{alignCorners:i}=s,a=new sH(o.shape,r.shape,i);return t.runWebGLProgram(a,[o],o.dtype)}const oH={kernelName:kh,backendName:"webgl",kernelFunc:rH};class iH{constructor(e,t){this.variableNames=["x"];const s=e.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);if(this.outputShape=e,s===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${e[0]} - coord - 1));
        }
      `;return}const r=a=>t.indexOf(a)!==-1&&e[a]!==1?`${e[a]} - coords[${a}] - 1`:`coords[${a}]`,o=e.map((a,l)=>r(l)).join(","),i=it(s);this.userCode=`
      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${o}));
      }
    `}}class aH{constructor(e,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;const s=e.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);this.outputShape=e;const r=cn("rc",s),o=`${r[s-1]} + 1 < ${this.outputShape[s-1]}`,i=`${r[s-2]} + 1 < ${this.outputShape[s-2]}`,a=it(s);s===1?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${e[0]} - rc - 1),
            ${e[0]} - rc - 1);
          if(${o}){
              result.g = getChannel(getX(${e[0]} - (rc  + 1) - 1),
                ${e[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:this.userCode=`
        void main() {
          ${a} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${l(r.slice())};
          if(${o}){
            result.g = ${c(r.slice())};
          }
          if(${i}) {
            result.b = ${u(r.slice())};
            if(${o}) {
              result.a = ${h(r.slice())};
            }
          }
          setOutput(result);
        }
    `;function l(g){return d(g)}function c(g){return g[s-1]="("+g[s-1]+" + 1)",d(g)}function u(g){return g[s-2]="("+g[s-2]+" + 1)",d(g)}function h(g){return g[s-1]="("+g[s-1]+" + 1)",g[s-2]="("+g[s-2]+" + 1)",d(g)}function d(g){const x=e.map((w,$)=>f($,g)),b=x.join(","),y=x.slice(-2).join(",");return`getChannel(getX(${b}), vec2(${y}))`}function f(g,x){return t.indexOf(g)!==-1&&e[g]!==1?`${e[g]} - ${x[g]} - 1`:`${x[g]}`}}}function lH(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{dims:o}=s,i=r.shape.length,a=Be(o,r.shape);if(i===0)return Sn({inputs:{x:r},backend:t});const l=J().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new aH(r.shape,a):new iH(r.shape,a);return t.runWebGLProgram(l,[r],r.dtype)}const cH={kernelName:zl,backendName:"webgl",kernelFunc:lH};class uH{constructor(e,t){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];const s=e[1],r=e[2];this.outputShape=e;let o="";typeof t=="number"?o=`float outputValue = ${t.toFixed(2)};`:o=`
        vec3 fill = vec3(${t.join(",")});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${o}
          if(coordX >= 0 && coordX < ${r} && coordY >= 0 && coordY < ${s}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}}const hH={kernelName:Dh,backendName:"webgl",kernelFunc:({inputs:n,attrs:e,backend:t})=>{const{image:s}=n,{radians:r,fillValue:o,center:i}=e,a=t,l=new uH(s.shape,o),[c,u]=Fd(i,s.shape[1],s.shape[2]),h=[[c,u,Math.sin(r),Math.cos(r)]];return a.runWebGLProgram(l,[s],s.dtype,h)}};const dH=qe({opSnippet:`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`}),pH={kernelName:Ei,backendName:"webgl",kernelFunc:dH};const fH=qe({opSnippet:"return inversesqrt(x);",cpuKernelImpl:fz}),mH={kernelName:Ri,backendName:"webgl",kernelFunc:fH};class df{constructor(e,t,s,r,o,i,a=!0,l=!1){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;const c=it(o.length),u=it(i.length);let h="";s===1?h="i":s===2&&(h="i, j");const d=`getIndices(${h})`;let f="";r===1?f="i":r===2&&(f="i, coords[1]");const g=`getUpdates(${f})`;let x="";l&&(x="coords[0], coords[1]");const b=`getDefaultValue(${x})`,y=t>1?"strides[j]":"strides";this.userCode=`
        ${c} strides = ${c}(${o});

        void main() {
          ${u} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${e}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${t}; j++) {
              int index = round(${d});
              flattenedIndex += index * ${y};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${g};
              found = true;
            }
          }
          setOutput(mix(${b}, sum, float(found)));
        }
      `}}class gH{constructor(e,t,s,r,o,i,a=!0,l=!1){this.variableNames=["updates","indices","defaultValue"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=i;const c=it(o.length),u=it(i.length);let h="";s===1?h="i":s===2&&(h="i, j");const d=`getIndices(${h})`;let f="";r===1?f="i":r===2&&(f="i, coords[1]");const g=`getUpdates(${f})`;let x="";l&&(x="coords[0], coords[1]");const b=`getDefaultValue(${x})`,y=t>1?"strides[j]":"strides",w=t>1?"strides[j + 1]":"strides";this.userCode=`
        ${c} strides = ${c}(${o});

        void main() {
          ${u} coords = getOutputCoords();
          vec4 sum = vec4(0.);
          vec4 found = vec4(0.);
          for (int i = 0; i < ${e}; i+=2) {
            ivec2 flattenedIndex = ivec2(0);
            for (int j = 0; j < ${t}; j+=2) {
              ivec4 index = round(${d});
              flattenedIndex += index.xz * ${y};
              if (j + 1 < ${t}) {
                flattenedIndex += index.yw * ${w};
              }
            }
            if (flattenedIndex[0] == coords[0] || flattenedIndex[1] == coords[0] ||
                flattenedIndex[0] == coords[0] + 1 || flattenedIndex[1] == coords[0] + 1) {
              vec4 updVals = ${g};
              if (flattenedIndex[0] == coords[0]) {
                sum.xy += updVals.xy;
                found.xy = vec2(1.);
              } else if (flattenedIndex[0] == coords[0] + 1) {
                sum.zw += updVals.xy;
                found.zw = vec2(1.);
              }
              if (flattenedIndex[1] == coords[0]) {
                sum.xy += updVals.zw;
                found.xy = vec2(1.);
              } else if (flattenedIndex[1] == coords[0] + 1) {
                sum.zw += updVals.zw;
                found.zw = vec2(1.);
              }
            }
          }
          setOutput(mix(${b}, sum, found));
        }
      `}}function xH(n){const{inputs:e,backend:t,attrs:s}=n,{indices:r,updates:o}=e,{shape:i}=s,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:h}=Dr(o,r,i),d=[h/c,c];if(h===0)return t.makeTensorInfo(i,r.dtype);const f=me({inputs:{x:r},backend:t,attrs:{shape:[l,a]}}),g=me({inputs:{x:o},backend:t,attrs:{shape:[l,c]}}),x=t.makeTensorInfo([],"float32",new Float32Array([0]));let b;J().getBool("WEBGL_PACK")?b=new gH(l,a,f.shape.length,g.shape.length,u,d):b=new df(l,a,f.shape.length,g.shape.length,u,d);const y=t.runWebGLProgram(b,[g,f,x],g.dtype),w=me({inputs:{x:y},backend:t,attrs:{shape:i}});return t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(g),t.disposeIntermediateTensorInfo(y),t.disposeIntermediateTensorInfo(x),w}const bH={kernelName:Qf,backendName:"webgl",kernelFunc:xH};class yH{constructor(e,t,s,r){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[e,s];const o="while (left < right) {",i=`for (int i = 0; i < ${Math.ceil(Math.log2(t+1))}; ++i) { if (left >= right) break;`,a=J().getNumber("WEBGL_VERSION")===2?o:i,l=r==="left"?"<":"<=";this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${a}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${l} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}}function wH(n){const{inputs:e,backend:t,attrs:s}=n,{sortedSequence:r,values:o}=e,{side:i}=s,a=new yH(r.shape[0],r.shape[1],o.shape[1],i),l=[[r.shape[1]]];return t.runWebGLProgram(a,[r,o],"int32",l)}const vH={kernelName:tm,backendName:"webgl",kernelFunc:wH};class CH{constructor(e,t,s){this.variableNames=["c","a","b"],this.outputShape=t;let r,o;if(s>4)throw Error(`Where for rank ${s} is not yet supported`);if(s===1)o="resRC",r="resRC";else{const a=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],c=[];for(let u=0;u<t.length;u++)c.push(`${a[u]}`),u<e&&l.push(`${a[u]}`);r=l.join(),o=c.join()}const i=it(s);this.userCode=`
      void main() {
        ${i} resRC = getOutputCoords();
        float cVal = getC(${r});
        if (cVal >= 1.0) {
          setOutput(getA(${o}));
        } else {
          setOutput(getB(${o}));
        }
      }
    `}}function kH(n){const{inputs:e,backend:t}=n,{condition:s,t:r,e:o}=e,i=new CH(s.shape.length,r.shape,r.shape.length);return t.runWebGLProgram(i,[s,r,o],Cn(r.dtype,o.dtype))}const $H={kernelName:Bl,backendName:"webgl",kernelFunc:kH};const IH=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${kc};
  float scale = ${$c};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,SH=qe({opSnippet:IH}),NH={kernelName:Di,backendName:"webgl",kernelFunc:SH};const TH=Wo+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,EH=qe({opSnippet:TH,packedOpSnippet:`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:gz}),RH={kernelName:Oi,backendName:"webgl",kernelFunc:EH};const DH=qe({opSnippet:`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`}),AH={kernelName:Fi,backendName:"webgl",kernelFunc:DH};const _H=Wo+`
  return sin(x);
`,FH=`
  vec4 result = sin(x);
  bvec4 isNaN = isnan(x);
  ${Kr}
  return result;
`,OH=qe({opSnippet:_H,packedOpSnippet:FH}),PH={kernelName:Ai,backendName:"webgl",kernelFunc:OH};const LH=qe({opSnippet:`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`}),MH={kernelName:_i,backendName:"webgl",kernelFunc:LH};const zH=qe({opSnippet:`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`}),BH={kernelName:Pi,backendName:"webgl",kernelFunc:zH};const VH={kernelName:Ul,backendName:"webgl",kernelFunc:n=>{const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{blockShape:o,paddings:i}=s;_(r.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");const a=o.reduce((y,w)=>y*w),l=[[0,0]];l.push(...i);for(let y=1+o.length;y<r.shape.length;++y)l.push([0,0]);const c=[],u=jw({inputs:{x:r},backend:t,attrs:{paddings:l,constantValue:0}}),h=oa(u.shape,o,a,!1),d=ia(h.length,o.length,!1),f=aa(u.shape,o,a,!1),g=me({inputs:{x:u},backend:t,attrs:{shape:h}}),x=un({inputs:{x:g},backend:t,attrs:{perm:d}}),b=me({inputs:{x},backend:t,attrs:{shape:f}});return c.push(u),c.push(g),c.push(x),c.forEach(y=>t.disposeIntermediateTensorInfo(y)),b}};function WH(n){const{inputs:e,backend:t}=n,{indices:s,values:r,denseShape:o,defaultValue:i}=e;if(o.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
         ${o.shape}`);if(s.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
         ${s.shape}`);if(r.shape.length!==1)throw new Error(`Values must be a vector, saw:
         ${r.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);const a=t.readSync(s.dataId),l=t.readSync(r.dataId),c=t.readSync(o.dataId),u=t.readSync(i.dataId)[0],[h,d,f,g,x]=bz(a,s.shape,s.dtype,l,r.dtype,c,u);return[t.makeTensorInfo(d,s.dtype,h),t.makeTensorInfo([d[0]],r.dtype,f),t.makeTensorInfo([g.length],"bool",new Uint8Array(g.map(b=>Number(b)))),t.makeTensorInfo([x.length],s.dtype,new Int32Array(x))]}const UH={kernelName:nm,backendName:"webgl",kernelFunc:WH};function GH(n){const{inputs:e,backend:t}=n,{inputIndices:s,inputShape:r,newShape:o}=e;if(s.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape ${s.shape}`);if(r.shape.length!==1)throw new Error(`Input shape should be a vector but received shape ${r.shape}`);if(o.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${o.shape}`);const i=Array.from(t.readSync(r.dataId)),a=t.readSync(s.dataId),l=Array.from(t.readSync(o.dataId)),[c,u,h]=yz(a,s.shape,s.dtype,i,l);return[t.makeTensorInfo(u,s.dtype,c),t.makeTensorInfo([h.length],o.dtype,new Int32Array(h))]}const HH={kernelName:sm,backendName:"webgl",kernelFunc:GH};function jH(n){const{inputs:e,backend:t}=n,{data:s,indices:r,segmentIds:o}=e;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.shape.length!==1)throw new Error(`Indices should be a vector but received shape
              ${r.shape}`);if(o.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
              ${o.shape}`);const i=t.readSync(s.dataId),a=t.readSync(r.dataId),l=t.readSync(o.dataId),[c,u]=Jy(i,s.shape,s.dtype,a,l,!0);return t.makeTensorInfo(u,s.dtype,c)}const KH={kernelName:rm,backendName:"webgl",kernelFunc:jH};function qH(n){const{inputs:e,backend:t}=n,{data:s,indices:r,segmentIds:o}=e;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.shape.length!==1)throw new Error(`Indices should be a vector but received shape
             ${r.shape}`);if(o.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
             ${o.shape}`);const i=t.readSync(s.dataId),a=t.readSync(r.dataId),l=t.readSync(o.dataId),[c,u]=Jy(i,s.shape,s.dtype,a,l);return t.makeTensorInfo(u,s.dtype,c)}const XH={kernelName:om,backendName:"webgl",kernelFunc:qH};function YH(n){const{inputs:e,backend:t,attrs:s}=n,{sparseIndices:r,sparseValues:o,defaultValue:i}=e,{outputShape:a}=s,{sliceRank:l,numUpdates:c,sliceSize:u,strides:h,outputSize:d}=Dr(o,r,a),f=!1;if(o.dtype==="string"){const y=t.bufferSync(r),w=t.bufferSync(o),$=Ks(t.readSync(i.dataId)[0]),C=mz(y,w,a,d,u,c,l,h,$,f);return t.makeTensorInfo(a,C.dtype,C.values)}const g=new df(c,l,r.shape.length,o.shape.length,h,[d,1],f),x=t.runWebGLProgram(g,[o,r,i],o.dtype),b=me({inputs:{x},backend:t,attrs:{shape:a}});return t.disposeIntermediateTensorInfo(x),b}const ZH={kernelName:im,backendName:"webgl",kernelFunc:YH};function JH(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{numOrSizeSplits:o,axis:i}=s,a=Be(i,r.shape)[0],l=Yd(r,o,a),c=r.shape.length,u=new Array(c).fill(0),h=r.shape.slice();return l.map(d=>{const f=[...h];f[a]=d;const g=Uo({inputs:{x:r},backend:t,attrs:{begin:u,size:f}});return u[a]+=d,g})}const QH={kernelName:Gl,backendName:"webgl",kernelFunc:JH};const qw="return sqrt(x);",e6=qe({opSnippet:qw,packedOpSnippet:qw,cpuKernelImpl:wz}),t6={kernelName:Li,backendName:"webgl",kernelFunc:e6};const n6=qe({opSnippet:"return x * x;"}),s6={kernelName:Ih,backendName:"webgl",kernelFunc:n6};const Xw="return (a - b) * (a - b);",r6=Yt({opSnippet:Xw,packedOpSnippet:Xw}),o6={kernelName:Mi,backendName:"webgl",kernelFunc:r6};function i6(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e;if(r.dtype!=="string")throw new Error("Input must be of datatype string");const o=t.readSync(r.dataId),i=Ls(o),a=vz(i,"string",s);return t.makeTensorInfo(r.shape,"string",a)}const a6={kernelName:Sh,backendName:"webgl",kernelFunc:i6};function l6({inputs:n,attrs:e,backend:t}){const{x:s}=n,r=jn+`
    return x > 0.0 ? 1.0 : float(${e.alpha});
  `,o=new ks(s.shape,r);return t.runWebGLProgram(o,[s],s.dtype)}const c6={kernelName:Ui,backendName:"webgl",kernelFunc:l6};class u6{constructor(e,t,s){this.variableNames=["x"],this.outputShape=s;const r=s.length,o=it(s.length),i=it(s.length);let a="";if(r===1)a="coords * strides + begin";else{let l=0;a=s.map((c,u)=>(l++,s.length===1?`coords * strides[${u}] + begin[${u}]`:`coords[${l-1}] * strides[${u}] + begin[${u}]`)).join(",")}this.userCode=`
      ${o} begin = ${o}(${e});
      ${o} strides = ${o}(${t});

      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${a}));
      }
    `}}function h6(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{begin:o,end:i,strides:a,beginMask:l,endMask:c,ellipsisMask:u,newAxisMask:h,shrinkAxisMask:d}=s,{finalShapeSparse:f,finalShape:g,isIdentity:x,sliceDim0:b,isSimpleSlice:y,begin:w,end:$,strides:C}=Yg(r.shape,o,i,a,l,c,u,h,d);let N;if(x)N=me({inputs:{x:r},backend:t,attrs:{shape:g}});else if(b||y){_(r.shape.length>=1,()=>`Input must have rank at least 1, got: ${r.shape.length}`);const F=Kg(w,$,C),O=Uo({inputs:{x:r},backend:t,attrs:{begin:w,size:F}});N=me({inputs:{x:O},backend:t,attrs:{shape:g}}),t.disposeIntermediateTensorInfo(O)}else if(t.shouldExecuteOnCPU([r])){const O=t.readSync(r.dataId),A=Ve(r.shape,r.dtype,O),D=Cz(f,A,C,w);N=t.makeTensorInfo(g,r.dtype,D.values)}else{const O=new u6(w,C,f);N=t.runWebGLProgram(O,[r],r.dtype)}const E=me({inputs:{x:N},backend:t,attrs:{shape:g}});return t.disposeIntermediateTensorInfo(N),E}const d6={kernelName:Nh,backendName:"webgl",kernelFunc:h6};function p6(n){const{inputs:e,backend:t,attrs:s}=n,{separator:r,nGramWidths:o,leftPad:i,rightPad:a,padWidth:l,preserveShortSequences:c}=s,{data:u,dataSplits:h}=e,d=t.readSync(u.dataId),f=t.readSync(h.dataId),[g,x]=kz(d,f,r,o,i,a,l,c);return[t.makeTensorInfo([g.length],"string",g),t.makeTensorInfo(h.shape,"int32",x)]}const f6={kernelName:am,backendName:"webgl",kernelFunc:p6};function m6(n){const{inputs:e,backend:t,attrs:s}=n,{skipEmpty:r}=s,{input:o,delimiter:i}=e;if(o.dtype!=="string")throw new Error("Input must be of datatype string");if(o.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${o.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);const a=t.readSync(o.dataId),l=t.readSync(i.dataId)[0],[c,u,h]=$z(a,l,r),d=u.length;return[t.makeTensorInfo([d,2],"int32",c),t.makeTensorInfo([d],"string",u),t.makeTensorInfo([2],"int32",new Int32Array(h))]}const g6={kernelName:lm,backendName:"webgl",kernelFunc:m6};function x6(n){const{inputs:e,backend:t,attrs:s}=n,{numBuckets:r}=s,{input:o}=e;if(o.dtype!=="string")throw new Error("Input must be of datatype string");if(r<=0)throw new Error("Number of buckets must be at least 1");const i=t.readSync(o.dataId),a=Iz(i,r);return t.makeTensorInfo(o.shape,"int32",a)}const b6={kernelName:cm,backendName:"webgl",kernelFunc:x6};const y6=qe({opSnippet:"return tan(x);"}),w6={kernelName:Bi,backendName:"webgl",kernelFunc:y6};const v6=qe({opSnippet:`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`}),C6={kernelName:Vi,backendName:"webgl",kernelFunc:v6};function k6(n){const{inputs:e,backend:t,attrs:s}=n,{tensor:r,indices:o,updates:i}=e,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:h}=Dr(i,o,r.shape),d=[h/c,c];if(h===0)return t.makeTensorInfo(r.shape,o.dtype);const f=me({inputs:{x:o},backend:t,attrs:{shape:[l,a]}}),g=me({inputs:{x:i},backend:t,attrs:{shape:[l,c]}}),x=me({inputs:{x:r},backend:t,attrs:{shape:d}}),b=new df(l,a,f.shape.length,g.shape.length,u,d,!1,!0),y=t.runWebGLProgram(b,[g,f,x],x.dtype),w=me({inputs:{x:y},backend:t,attrs:{shape:r.shape}});return t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(g),t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(y),w}const $6={kernelName:em,backendName:"webgl",kernelFunc:k6};class I6{constructor(e,t){this.variableNames=["A"];const s=new Array(e.length);for(let i=0;i<s.length;i++)s[i]=e[i]*t[i];this.outputShape=s,this.rank=s.length;const r=it(this.rank),o=S6(e);this.userCode=`
      void main() {
        ${r} resRC = getOutputCoords();
        setOutput(getA(${o}));
      }
    `}}function S6(n){const e=n.length;if(e>5)throw Error(`Tile for rank ${e} is not yet supported`);if(e===1)return`imod(resRC, ${n[0]})`;const t=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],s=[];for(let r=0;r<n.length;r++)s.push(`imod(${t[r]}, ${n[r]})`);return s.join()}function Yw(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{reps:o}=s;if(r.dtype==="string"||r.shape.length>5){const l=t.readSync(r.dataId),c=r.dtype==="string"?l.map(d=>Ks(d)):l,u=Ve(r.shape,r.dtype,c),h=Nz(u,o);return t.makeTensorInfo(h.shape,h.dtype,h.values)}const i=new I6(r.shape,o);return t.runWebGLProgram(i,[r],r.dtype)}const N6={kernelName:Wi,backendName:"webgl",kernelFunc:Yw};class T6{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=e,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}}class E6{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=e,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}}function Xr(n,e){e!==null&&n.disposeIntermediateTensorInfo(e)}function Zw(n){let e=1;for(;e<n;)e*=2;return e}function R6(n){const{inputs:e,backend:t,attrs:s}=n,{x:r}=e,{k:o,sorted:i}=s,a=J().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),l=J().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),c=r.shape,u=c[c.length-1];if(t.shouldExecuteOnCPU([r])||u<a||o>l){const D=t.readSync(r.dataId),[S,z]=Tz(D,c,r.dtype,o,i);return[t.makeTensorInfo(S.shape,S.dtype,S.values),t.makeTensorInfo(z.shape,z.dtype,z.values)]}if(o===0)return c[c.length-1]=0,[t.makeTensorInfo(c,r.dtype,[]),t.makeTensorInfo(c,"int32",[])];if(u===1)return[r,Pa({attrs:{shape:c,dtype:"int32",value:0},backend:t})];const h=t.texData.get(r.dataId),d=h!==null&&h.isPacked,f=d?t.unpackTensor(r):r,x=ne(c)/u,b=me({inputs:{x:f},attrs:{shape:[x,u]},backend:t});d&&Xr(t,f);const y=Zw(o),w=Zw(u);let $=null;const C=()=>$===null?[b,b]:[b,$],N=(D,S,z)=>{const U=C(),G=new T6(z),X=[[u],[$===null?1:0],[Number.NEGATIVE_INFINITY],[D],[S]],Q=$;$=t.runWebGLProgram(G,U,"int32",X),Xr(t,Q)};for(let D=1;D<y;D*=2){const S=D*2;for(let z=D;z>=1;z/=2)N(S,z,[x,w])}for(let D=w;D>y;D/=2){const S=C(),z=new E6([x,D/2]),G=[[u],[$===null?1:0],[y]],K=$;$=t.runWebGLProgram(z,S,"int32",G),Xr(t,K);const X=y/2,Q=X*2;for(let Z=X;Z>=1;Z/=2)N(Q,Z,$.shape)}let E=$;$=Uo({inputs:{x:$},backend:t,attrs:{begin:0,size:[x,o]}}),Xr(t,E);let F=zw({inputs:{x:b,indices:$},backend:t,attrs:{axis:1,batchDims:1}});Xr(t,b);const O=c.slice(0,-1);O.push(o),E=$,$=me({inputs:{x:$},attrs:{shape:O},backend:t}),Xr(t,E);const A=F;return F=me({inputs:{x:F},attrs:{shape:O},backend:t}),Xr(t,A),[F,$]}const D6={kernelName:Th,backendName:"webgl",kernelFunc:R6};class A6{constructor(e,t,s,r,o,i){this.variableNames=["Image","Transforms"],this.outputShape=i;const a=s==="nearest"?1:2;let l;switch(r){case"constant":l=1;break;case"reflect":l=2;break;case"wrap":l=3;break;case"nearest":l=4;break;default:l=1;break}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${l} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${l} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${l} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${e} && 0 <= coordX && coordX < ${t}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${o});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${o});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${t}));
                float mapY = mapCoord(inY, float(${e}));

                if (${a} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}}function _6(n){const{inputs:e,backend:t,attrs:s}=n,{image:r,transforms:o}=e,{interpolation:i,fillMode:a,fillValue:l,outputShape:c}=s,[u,h,d,f]=r.shape,[g,x]=c??[h,d],b=[u,g,x,f],y=new A6(h,d,i,a,l,b);return t.runWebGLProgram(y,[r,o],"float32")}const F6={kernelName:Eh,backendName:"webgl",kernelFunc:_6};function O6(n){const{inputs:e,attrs:t,backend:s}=n,{axis:r}=t,{x:o}=e;Ea(o,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");const i=s.readSync(o.dataId),{outputValues:a,outputShape:l,indices:c}=Ez(i,r,o.shape,o.dtype);return[s.makeTensorInfo(l,o.dtype,a),s.makeTensorInfo([c.length],"int32",c)]}const P6={kernelName:Rh,backendName:"webgl",kernelFunc:O6};function L6(n){const{inputs:e,backend:t,attrs:s}=n,{value:r}=e;let{axis:o}=s;o<0&&(o+=r.shape.length);const i=r,a=i.shape.length,l=r.shape[o],c=new Array(a-1);let u=0;for(let x=0;x<a;x++)x!==o&&(c[u++]=i.shape[x]);const h=[],d=new Array(a).fill(0),f=i.shape.slice();f[o]=1;const g=new Array(l);for(let x=0;x<g.length;x++){d[o]=x;const b=Uo({inputs:{x:i},backend:t,attrs:{begin:d,size:f}}),y=me({inputs:{x:b},backend:t,attrs:{shape:c}});g[x]=y,h.push(b)}return h.forEach(x=>t.disposeIntermediateTensorInfo(x)),g}const M6={kernelName:jl,backendName:"webgl",kernelFunc:L6};class z6{constructor(e,t){this.variableNames=["x","segmentIds"];const s=e.windowSize,r=e.batchSize,o=e.inSize,i=e.numSegments,a=i*Math.ceil(o/s);this.outputShape=[r,a];const l="0.0",c="sumValue",u=Math.floor(s/4)*4,h=s%4,d=`
        sumValue += dot(values, segFilter);
    `;let f="";o%s>0&&(f=`
        if (inIdx < 0 || inIdx >= ${o}) {
          return initializationValue;
        }
      `);let g="";o%s>0&&(g=`
        if (inIdx < 0 || inIdx >= ${o}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = ${l};

      float getValue(int batch, int inIdx) {
        ${f}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${g}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${i})) * float(${s}));
        int currentSeg = int(mod(float(outIdx), float(${i})));

        float sumValue = 0.0;

        for (int i = 0; i < ${u}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${d}
        }

        int inIdx = inOffset + ${u};
        if (${h===1}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${d}
        } else if (${h===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${d}
        } else if (${h===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${d}
        }
        setOutput(${c});
      }
    `}}function B6(n){const{inputs:e,backend:t,attrs:s}=n,{x:r,segmentIds:o}=e,{numSegments:i}=s,a=r.shape.length,l=[];let c=0;const u=wt([c],a);let h=r;u!=null&&(h=un({inputs:{x:r},backend:t,attrs:{perm:u}}),l.push(h),c=Nt(1,a)[0]);const d=kN(h.shape,c,i),f=ne([h.shape[c]]),g=me({inputs:{x:h},backend:t,attrs:{shape:[-1,f]}});l.push(g);const x=Bh(r.dtype),b=(C,N,E,F,O)=>{const A=C.shape[0],D=C.shape[1],S=CN(D,O),z={windowSize:S,inSize:D,batchSize:A,numSegments:O},U=new z6(z,N),G=t.compileAndRun(U,[C,E],F);if(l.push(G),G.shape[1]===O)return G;const K=Kw({backend:t,attrs:{start:0,stop:O,step:1,dtype:"float32"}}),X=Yw({inputs:{x:K},backend:t,attrs:{reps:[D/S]}});return l.push(K),l.push(X),b(G,N,X,F,O)},y=b(g,"unsortedSegmentSum",o,x,i),w=me({inputs:{x:y},backend:t,attrs:{shape:d}});let $=w;if(u!=null){l.push(w);const C=Ys(u);$=un({inputs:{x:$},backend:t,attrs:{perm:C}})}return l.forEach(C=>t.disposeIntermediateTensorInfo(C)),$}const V6={kernelName:Kl,backendName:"webgl",kernelFunc:B6};const W6=[wB,CB,IB,TB,RB,_B,OB,LB,VB,UB,jB,XB,JB,n4,o4,a4,c4,p4,m4,x4,w4,S4,T4,A4,F4,z4,V4,H4,sB,q4,Q4,sV,cV,dV,fV,gV,bV,CV,$V,SV,TV,RV,AV,OV,LV,VV,UV,jV,XV,ZV,QV,nW,rW,aW,cW,uW,dW,fW,gW,bW,wW,CW,IW,TW,RW,_W,PW,MW,BW,nB,WW,Z4,GW,jW,qW,oB,YW,JW,eU,sU,iU,lU,uU,dU,mU,xU,yU,kU,IU,NU,DU,_U,OU,LU,zU,UU,jU,YU,nG,lB,iG,cG,dG,mG,O4,xG,yG,vG,$G,TG,aB,RG,AG,FG,PG,LG,P4,JU,zG,WG,HG,uB,XG,JG,nH,oH,cH,hH,pH,mH,bH,vH,$H,NH,RH,AH,PH,MH,I4,eG,BH,VH,UH,HH,KH,XH,ZH,QH,t6,s6,o6,a6,c6,d6,f6,g6,b6,QU,xB,w6,C6,$6,N6,D6,F6,bB,P6,M6,V6,bG];for(const n of W6)fm(n);function Jw(n){let s=0;const r=35,o=new Uint8Array(6400);var i=new Uint8Array(n);for(let a=0;a<160;a+=2){s=80*a/2;for(let l=0;l<160;l+=2){let c=i[(a+r)*160+l];c==87?c=0:c=1,o[s]=c,s+=1}}return o}class U6{aleEnv;envId;constructor(e){this.envId=e}async loadROM(e="/roms/pong.bin",t=4,s=0){function r(a,l){return a.endsWith(".data")||a.endsWith(".wasm")?"/"+a:l+a}const o=await Gv({locateFile:r}),i=new o.ALEInterface;this.aleEnv=i,i.setInt("frame_skip",t),i.setFloat("repeat_action_probability",s),i.setInt("random_seed",this.envId),i.loadROM(e),postMessage({envId:this.envId,ROMLoaded:!0})}resetEpisode(e){this.aleEnv.resetGame();const t=Jw(this.aleEnv.getScreenGrayscale()),s={envId:this.envId,observation:t};return e.postMessage(s,[t.buffer]),t}playAction(e,t){const s=this.aleEnv.act(t),r=this.aleEnv.getRAM(),o=r[13],i=r[14],a=o==21||i==21,c={observation:Jw(this.aleEnv.getScreenGrayscale()),done:a,reward:s},u={envId:this.envId,state:c};return e.postMessage(u,[c.observation.buffer]),c}}let La;onmessage=async function(n){n.data.loadROM?(La=new U6(n.data.envId),n.data.loadROMParams?await La.loadROM(n.data.loadROMParams.romPath,n.data.loadROMParams.frameSkip,n.data.loadROMParams.repeatActionProbability):await La.loadROM()):n.data.resetEnv?La.resetEpisode(self):n.data.actionToPlay!=null?La.playAction(self,n.data.actionToPlay):console.log("Bad order "+n)}})();
