function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function s(e){e.forEach(n)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function c(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function l(e,n,r,s){return e[1]&&s?t(r.ctx.slice(),e[1](s(n))):r.ctx}function u(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function f(e){return null==e?"":e}let d,h,p=!1;function m(e,t,n,r){for(;e<t;){const s=e+(t-e>>1);n(s)<=r?e=s+1:t=s}return e}function g(e,t){if(p){for(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const r=t[n];void 0!==r.claim_order&&e.push(r)}t=e}const n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let s=0;for(let e=0;e<t.length;e++){const o=t[e].claim_order,i=(s>0&&t[n[s]].claim_order<=o?s+1:m(1,s,(e=>t[n[e]].claim_order),o))-1;r[e]=n[i]+1;const a=i+1;n[a]=e,s=Math.max(a,s)}const o=[],i=[];let a=t.length-1;for(let e=n[s]+1;0!=e;e=r[e-1]){for(o.push(t[e-1]);a>=e;a--)i.push(t[a]);a--}for(;a>=0;a--)i.push(t[a]);o.reverse(),i.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<i.length;t++){for(;n<o.length&&i[t].claim_order>=o[n].claim_order;)n++;const r=n<o.length?o[n]:null;e.insertBefore(i[t],r)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?void 0===t.claim_order&&t.parentNode===e||e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else t.parentNode===e&&null===t.nextSibling||e.appendChild(t)}function b(e,t,n){e.insertBefore(t,n||null)}function v(e,t,n){p&&!n?g(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function $(e){e.parentNode.removeChild(e)}function _(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function y(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function E(e){return document.createTextNode(e)}function x(){return E(" ")}function S(){return E("")}function T(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function A(e){return function(t){return t.preventDefault(),e.call(this,t)}}function P(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function N(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)null==t[r]?e.removeAttribute(r):"style"===r?e.style.cssText=t[r]:"__value"===r?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:P(e,r,t[r])}function I(e){return Array.from(e.childNodes)}function L(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}function R(e,t,n,r,s=!1){L(e);const o=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const o=e[r];if(t(o)){const t=n(o);return void 0===t?e.splice(r,1):e[r]=t,s||(e.claim_info.last_index=r),o}}for(let r=e.claim_info.last_index-1;r>=0;r--){const o=e[r];if(t(o)){const t=n(o);return void 0===t?e.splice(r,1):e[r]=t,s?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=r,o}}return r()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function j(e,t,n,r){return R(e,(e=>e.nodeName===t),(e=>{const t=[];for(let r=0;r<e.attributes.length;r++){const s=e.attributes[r];n[s.name]||t.push(s.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>r?y(t):w(t)))}function k(e,t){return R(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>E(t)),!0)}function O(e){return k(e," ")}function C(e,t,n){for(let r=n;r<e.length;r+=1){const n=e[r];if(8===n.nodeType&&n.textContent.trim()===t)return r}return e.length}function M(e){const t=C(e,"HTML_TAG_START",0),n=C(e,"HTML_TAG_END",t);if(t===n)return new B;L(e);const r=e.splice(t,n+1);$(r[0]),$(r[r.length-1]);const s=r.slice(1,r.length-1);for(const t of s)t.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new B(s)}function H(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function U(e,t){e.value=null==t?"":t}function D(){if(void 0===d){d=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){d=!0}}return d}function G(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=w("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=D();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=T(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{s=T(n.contentWindow,"resize",t)}),function(e,t){e.appendChild(t)}(e,n),()=>{(r||s&&n.contentWindow)&&s(),$(n)}}function q(e,t=document.body){return Array.from(t.querySelectorAll(e))}class B extends class{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.e=w(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)b(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach($)}}{constructor(e){super(),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let t=0;t<this.n.length;t+=1)v(this.t,this.n[t],e)}}function z(e){h=e}function K(){if(!h)throw new Error("Function called outside component initialization");return h}function J(e){K().$$.on_mount.push(e)}function V(e){K().$$.after_update.push(e)}function W(e){K().$$.on_destroy.push(e)}const F=[],Y=[],X=[],Q=[],Z=Promise.resolve();let ee=!1;function te(e){X.push(e)}let ne=!1;const re=new Set;function se(){if(!ne){ne=!0;do{for(let e=0;e<F.length;e+=1){const t=F[e];z(t),oe(t.$$)}for(z(null),F.length=0;Y.length;)Y.pop()();for(let e=0;e<X.length;e+=1){const t=X[e];re.has(t)||(re.add(t),t())}X.length=0}while(F.length);for(;Q.length;)Q.pop()();ee=!1,ne=!1,re.clear()}}function oe(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(te)}}const ie=new Set;let ae;function ce(){ae={r:0,c:[],p:ae}}function le(){ae.r||s(ae.c),ae=ae.p}function ue(e,t){e&&e.i&&(ie.delete(e),e.i(t))}function fe(e,t,n,r){if(e&&e.o){if(ie.has(e))return;ie.add(e),ae.c.push((()=>{ie.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function de(e,t){const n={},r={},s={$$scope:1};let o=e.length;for(;o--;){const i=e[o],a=t[o];if(a){for(const e in i)e in a||(r[e]=1);for(const e in a)s[e]||(n[e]=a[e],s[e]=1);e[o]=a}else for(const e in i)s[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function he(e){return"object"==typeof e&&null!==e?e:{}}function pe(e){e&&e.c()}function me(e,t){e&&e.l(t)}function ge(e,t,r,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(t,r),i||te((()=>{const t=c.map(n).filter(o);l?l.push(...t):s(t),e.$$.on_mount=[]})),u.forEach(te)}function be(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ve(e,t){-1===e.$$.dirty[0]&&(F.push(e),ee||(ee=!0,Z.then(se)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function $e(t,n,o,i,a,c,l,u=[-1]){const f=h;z(t);const d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:n.context||[]),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};l&&l(d.root);let m=!1;if(d.ctx=o?o(t,n.props||{},((e,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&a(d.ctx[e],d.ctx[e]=s)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](s),m&&ve(t,e)),n})):[],d.update(),m=!0,s(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){p=!0;const e=I(n.target);d.fragment&&d.fragment.l(e),e.forEach($)}else d.fragment&&d.fragment.c();n.intro&&ue(t.$$.fragment),ge(t,n.target,n.anchor,n.customElement),p=!1,se()}z(f)}class _e{$destroy(){be(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const we=[];function ye(t,n=e){let r;const s=new Set;function o(e){if(i(t,e)&&(t=e,r)){const e=!we.length;for(const e of s)e[1](),we.push(e,t);if(e){for(let e=0;e<we.length;e+=2)we[e][0](we[e+1]);we.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(i,a=e){const c=[i,a];return s.add(c),1===s.size&&(r=n(o)||e),i(t),()=>{s.delete(c),0===s.size&&(r(),r=null)}}}}const Ee={};var xe={owner:"materialsproject",repo:"status",sites:[{name:"Materials Project Public",url:"https://materialsproject.org"},{name:"Materials Project Development",url:"https://next-gen.materialsproject.org"},{name:"Materials Project API",url:"https://api.materialsproject.org"},{name:"Materials Project Authentication",url:"https://profile.materialsproject.org"},{name:"MPContribs",url:"https://contribs.materialsproject.org"}],"status-website":{cname:"status.materialsproject.org",logoUrl:"https://next-gen.materialsproject.org/assets/images/home/materials-project-logo.svg",name:"Materials Project",introTitle:"**Materials Project** is an open-access database of predicted materials properties.",introMessage:"This status page reports the uptime for the services we provide and tracks any on-going incidents.",navbar:[{title:"Status",href:"/"},{title:"Materials Project",href:"https://materialsproject.org"}]},path:"https://status.materialsproject.org",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Se(e,t,n){const r=e.slice();return r[1]=t[n],r}function Te(t){let n,r,s,o=xe["status-website"]&&!xe["status-website"].hideNavLogo&&function(t){let n,r;return{c(){n=w("img"),this.h()},l(e){n=j(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){P(n,"alt",""),c(n.src,r=xe["status-website"].logoUrl)||P(n,"src",r),P(n,"class","svelte-a08hsz")},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}(),i=xe["status-website"]&&!xe["status-website"].hideNavTitle&&function(t){let n,r,s=xe["status-website"].name+"";return{c(){n=w("div"),r=E(s)},l(e){n=j(e,"DIV",{});var t=I(n);r=k(t,s),t.forEach($)},m(e,t){v(e,n,t),g(n,r)},p:e,d(e){e&&$(n)}}}();return{c(){n=w("div"),r=w("a"),o&&o.c(),s=x(),i&&i.c(),this.h()},l(e){n=j(e,"DIV",{});var t=I(n);r=j(t,"A",{href:!0,class:!0});var a=I(r);o&&o.l(a),s=O(a),i&&i.l(a),a.forEach($),t.forEach($),this.h()},h(){P(r,"href",xe["status-website"].logoHref||xe.path),P(r,"class","logo svelte-a08hsz")},m(e,t){v(e,n,t),g(n,r),o&&o.m(r,null),g(r,s),i&&i.m(r,null)},p(e,t){xe["status-website"]&&!xe["status-website"].hideNavLogo&&o.p(e,t),xe["status-website"]&&!xe["status-website"].hideNavTitle&&i.p(e,t)},d(e){e&&$(n),o&&o.d(),i&&i.d()}}}function Ae(e){let t,n,r,s,o,i,a=e[1].title+"";return{c(){t=w("li"),n=w("a"),r=E(a),i=x(),this.h()},l(e){t=j(e,"LI",{});var s=I(t);n=j(s,"A",{"aria-current":!0,href:!0,class:!0});var o=I(n);r=k(o,a),o.forEach($),i=O(s),s.forEach($),this.h()},h(){P(n,"aria-current",s=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),P(n,"href",o=e[1].href.replace("$OWNER",xe.owner).replace("$REPO",xe.repo)),P(n,"class","svelte-a08hsz")},m(e,s){v(e,t,s),g(t,n),g(n,r),g(t,i)},p(e,t){1&t&&s!==(s=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&P(n,"aria-current",s)},d(e){e&&$(t)}}}function Pe(t){let n,r,s,o,i,a=xe["status-website"]&&xe["status-website"].logoUrl&&Te(),c=xe["status-website"]&&xe["status-website"].navbar&&function(e){let t,n=xe["status-website"].navbar,r=[];for(let t=0;t<n.length;t+=1)r[t]=Ae(Se(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=S()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=S()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(1&s){let o;for(n=xe["status-website"].navbar,o=0;o<n.length;o+=1){const i=Se(e,n,o);r[o]?r[o].p(i,s):(r[o]=Ae(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){_(r,e),e&&$(t)}}}(t),l=xe["status-website"]&&xe["status-website"].navbarGitHub&&!xe["status-website"].navbar&&function(t){let n,r,s,o=xe.i18n.navGitHub+"";return{c(){n=w("li"),r=w("a"),s=E(o),this.h()},l(e){n=j(e,"LI",{});var t=I(n);r=j(t,"A",{href:!0,class:!0});var i=I(r);s=k(i,o),i.forEach($),t.forEach($),this.h()},h(){P(r,"href",`https://github.com/${xe.owner}/${xe.repo}`),P(r,"class","svelte-a08hsz")},m(e,t){v(e,n,t),g(n,r),g(r,s)},p:e,d(e){e&&$(n)}}}();return{c(){n=w("nav"),r=w("div"),a&&a.c(),s=x(),o=w("ul"),c&&c.c(),i=x(),l&&l.c(),this.h()},l(e){n=j(e,"NAV",{class:!0});var t=I(n);r=j(t,"DIV",{class:!0});var u=I(r);a&&a.l(u),s=O(u),o=j(u,"UL",{class:!0});var f=I(o);c&&c.l(f),i=O(f),l&&l.l(f),f.forEach($),u.forEach($),t.forEach($),this.h()},h(){P(o,"class","svelte-a08hsz"),P(r,"class","container svelte-a08hsz"),P(n,"class","svelte-a08hsz")},m(e,t){v(e,n,t),g(n,r),a&&a.m(r,null),g(r,s),g(r,o),c&&c.m(o,null),g(o,i),l&&l.m(o,null)},p(e,[t]){xe["status-website"]&&xe["status-website"].logoUrl&&a.p(e,t),xe["status-website"]&&xe["status-website"].navbar&&c.p(e,t),xe["status-website"]&&xe["status-website"].navbarGitHub&&!xe["status-website"].navbar&&l.p(e,t)},i:e,o:e,d(e){e&&$(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function Ne(e,t,n){let{segment:r}=t;return e.$$set=e=>{"segment"in e&&n(0,r=e.segment)},[r]}class Ie extends _e{constructor(e){super(),$e(this,e,Ne,Pe,i,{segment:0})}}var Le={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Re(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function je(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ke(e,t){var n,r,s,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},f=0;function d(e){var t=Le[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function h(){for(var e="";c.length;)e+=d(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=a.exec(e);)r=e.substring(f,s.index),f=a.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((i=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+Re(je(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=s[6])?(i.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=ke(Re(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):s[8]?n='<img src="'+je(s[8])+'" alt="'+je(s[7])+'">':s[10]?(l=l.replace("<a>",'<a href="'+je(s[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(i="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+ke(s[12]||s[15],u)+"</"+i+">":s[16]?n="<code>"+je(s[16])+"</code>":(s[17]||s[1])&&(n=d(s[17]||"--"))),l+=r,l+=n;return(l+e.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function Oe(e,t,n){const r=e.slice();return r[3]=t[n],r}function Ce(e,t,n){const r=e.slice();return r[3]=t[n],r}function Me(e,t,n){const r=e.slice();return r[8]=t[n],r}function He(t){let n;return{c(){n=w("link"),this.h()},l(e){n=j(e,"LINK",{rel:!0,href:!0}),this.h()},h(){P(n,"rel","stylesheet"),P(n,"href",`${xe.path}/themes/${(xe["status-website"]||{}).theme||"light"}.css`)},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}function Ue(t){let n;return{c(){n=w("link"),this.h()},l(e){n=j(e,"LINK",{rel:!0,href:!0}),this.h()},h(){P(n,"rel","stylesheet"),P(n,"href",(xe["status-website"]||{}).themeUrl)},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}function De(t){let n,r;return{c(){n=w("script"),this.h()},l(e){n=j(e,"SCRIPT",{src:!0}),I(n).forEach($),this.h()},h(){c(n.src,r=t[8].src)||P(n,"src",r),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}function Ge(t){let n;return{c(){n=w("link"),this.h()},l(e){n=j(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){P(n,"rel",t[3].rel),P(n,"href",t[3].href),P(n,"media",t[3].media)},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}function qe(t){let n;return{c(){n=w("meta"),this.h()},l(e){n=j(e,"META",{name:!0,content:!0}),this.h()},h(){P(n,"name",t[3].name),P(n,"content",t[3].content)},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}function Be(t){let n,r,s,o,i,a,c,u,f,d,h,p,m,b,y,E,T,A,N=ke(xe.i18n.footer.replace(/\$REPO/,`https://github.com/${xe.owner}/${xe.repo}`))+"",L=(xe["status-website"]||{}).customHeadHtml&&function(t){let n,r,s=(xe["status-website"]||{}).customHeadHtml+"";return{c(){n=new B,r=S(),this.h()},l(e){n=M(e),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&$(r),e&&n.d()}}}();let R=((xe["status-website"]||{}).themeUrl?Ue:He)(t),k=(xe["status-website"]||{}).scripts&&function(e){let t,n=(xe["status-website"]||{}).scripts,r=[];for(let t=0;t<n.length;t+=1)r[t]=De(Me(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=S()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=S()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(0&s){let o;for(n=(xe["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=Me(e,n,o);r[o]?r[o].p(i,s):(r[o]=De(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){_(r,e),e&&$(t)}}}(t),C=(xe["status-website"]||{}).links&&function(e){let t,n=(xe["status-website"]||{}).links,r=[];for(let t=0;t<n.length;t+=1)r[t]=Ge(Ce(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=S()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=S()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(0&s){let o;for(n=(xe["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=Ce(e,n,o);r[o]?r[o].p(i,s):(r[o]=Ge(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){_(r,e),e&&$(t)}}}(t),H=(xe["status-website"]||{}).metaTags&&function(e){let t,n=(xe["status-website"]||{}).metaTags,r=[];for(let t=0;t<n.length;t+=1)r[t]=qe(Oe(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=S()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=S()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(0&s){let o;for(n=(xe["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Oe(e,n,o);r[o]?r[o].p(i,s):(r[o]=qe(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){_(r,e),e&&$(t)}}}(t),U=xe["status-website"].css&&function(t){let n,r,s=`<style>${xe["status-website"].css}</style>`;return{c(){n=new B,r=S(),this.h()},l(e){n=M(e),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&$(r),e&&n.d()}}}(),D=xe["status-website"].js&&function(t){let n,r,s=`<script>${xe["status-website"].js}<\/script>`;return{c(){n=new B,r=S(),this.h()},l(e){n=M(e),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&$(r),e&&n.d()}}}(),G=(xe["status-website"]||{}).customBodyHtml&&function(t){let n,r,s=(xe["status-website"]||{}).customBodyHtml+"";return{c(){n=new B,r=S(),this.h()},l(e){n=M(e),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&$(r),e&&n.d()}}}();p=new Ie({props:{segment:t[0]}});const z=t[2].default,K=function(e,t,n,r){if(e){const s=l(e,t,n,r);return e[0](s)}}(z,t,t[1],null);return{c(){L&&L.c(),n=S(),R.c(),r=w("link"),s=w("link"),o=w("link"),k&&k.c(),i=S(),C&&C.c(),a=S(),H&&H.c(),c=S(),U&&U.c(),u=S(),D&&D.c(),f=S(),d=x(),G&&G.c(),h=x(),pe(p.$$.fragment),m=x(),b=w("main"),K&&K.c(),y=x(),E=w("footer"),T=w("p"),this.h()},l(e){const t=q('[data-svelte="svelte-ri9y7q"]',document.head);L&&L.l(t),n=S(),R.l(t),r=j(t,"LINK",{rel:!0,href:!0}),s=j(t,"LINK",{rel:!0,type:!0,href:!0}),o=j(t,"LINK",{rel:!0,type:!0,href:!0}),k&&k.l(t),i=S(),C&&C.l(t),a=S(),H&&H.l(t),c=S(),U&&U.l(t),u=S(),D&&D.l(t),f=S(),t.forEach($),d=O(e),G&&G.l(e),h=O(e),me(p.$$.fragment,e),m=O(e),b=j(e,"MAIN",{class:!0});var l=I(b);K&&K.l(l),l.forEach($),y=O(e),E=j(e,"FOOTER",{class:!0});var g=I(E);T=j(g,"P",{}),I(T).forEach($),g.forEach($),this.h()},h(){P(r,"rel","stylesheet"),P(r,"href",`${xe.path}/global.css`),P(s,"rel","icon"),P(s,"type","image/svg"),P(s,"href",(xe["status-website"]||{}).faviconSvg||(xe["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),P(o,"rel","icon"),P(o,"type","image/png"),P(o,"href",(xe["status-website"]||{}).favicon||"/logo-192.png"),P(b,"class","container"),P(E,"class","svelte-jbr799")},m(e,t){L&&L.m(document.head,null),g(document.head,n),R.m(document.head,null),g(document.head,r),g(document.head,s),g(document.head,o),k&&k.m(document.head,null),g(document.head,i),C&&C.m(document.head,null),g(document.head,a),H&&H.m(document.head,null),g(document.head,c),U&&U.m(document.head,null),g(document.head,u),D&&D.m(document.head,null),g(document.head,f),v(e,d,t),G&&G.m(e,t),v(e,h,t),ge(p,e,t),v(e,m,t),v(e,b,t),K&&K.m(b,null),v(e,y,t),v(e,E,t),g(E,T),T.innerHTML=N,A=!0},p(e,[t]){(xe["status-website"]||{}).customHeadHtml&&L.p(e,t),R.p(e,t),(xe["status-website"]||{}).scripts&&k.p(e,t),(xe["status-website"]||{}).links&&C.p(e,t),(xe["status-website"]||{}).metaTags&&H.p(e,t),xe["status-website"].css&&U.p(e,t),xe["status-website"].js&&D.p(e,t),(xe["status-website"]||{}).customBodyHtml&&G.p(e,t);const n={};1&t&&(n.segment=e[0]),p.$set(n),K&&K.p&&(!A||2&t)&&function(e,t,n,r,s,o){if(s){const i=l(t,n,r,o);e.p(i,s)}}(K,z,e,e[1],A?function(e,t,n,r){if(e[2]&&r){const s=e[2](r(n));if(void 0===t.dirty)return s;if("object"==typeof s){const e=[],n=Math.max(t.dirty.length,s.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|s[r];return e}return t.dirty|s}return t.dirty}(z,e[1],t,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[1]),null)},i(e){A||(ue(p.$$.fragment,e),ue(K,e),A=!0)},o(e){fe(p.$$.fragment,e),fe(K,e),A=!1},d(e){L&&L.d(e),$(n),R.d(e),$(r),$(s),$(o),k&&k.d(e),$(i),C&&C.d(e),$(a),H&&H.d(e),$(c),U&&U.d(e),$(u),D&&D.d(e),$(f),e&&$(d),G&&G.d(e),e&&$(h),be(p,e),e&&$(m),e&&$(b),K&&K.d(e),e&&$(y),e&&$(E)}}}function ze(e,t,n){let{$$slots:r={},$$scope:s}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,s=e.$$scope)},[o,s,r]}class Ke extends _e{constructor(e){super(),$e(this,e,ze,Be,i,{segment:0})}}function Je(e){let t,n,r=e[1].stack+"";return{c(){t=w("pre"),n=E(r)},l(e){t=j(e,"PRE",{});var s=I(t);n=k(s,r),s.forEach($)},m(e,r){v(e,t,r),g(t,n)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&H(n,r)},d(e){e&&$(t)}}}function Ve(t){let n,r,s,o,i,a,c,l,u,f=t[1].message+"";document.title=n=t[0];let d=t[2]&&t[1].stack&&Je(t);return{c(){r=x(),s=w("h1"),o=E(t[0]),i=x(),a=w("p"),c=E(f),l=x(),d&&d.c(),u=S(),this.h()},l(e){q('[data-svelte="svelte-1moakz"]',document.head).forEach($),r=O(e),s=j(e,"H1",{class:!0});var n=I(s);o=k(n,t[0]),n.forEach($),i=O(e),a=j(e,"P",{class:!0});var h=I(a);c=k(h,f),h.forEach($),l=O(e),d&&d.l(e),u=S(),this.h()},h(){P(s,"class","svelte-17w3omn"),P(a,"class","svelte-17w3omn")},m(e,t){v(e,r,t),v(e,s,t),g(s,o),v(e,i,t),v(e,a,t),g(a,c),v(e,l,t),d&&d.m(e,t),v(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&H(o,e[0]),2&t&&f!==(f=e[1].message+"")&&H(c,f),e[2]&&e[1].stack?d?d.p(e,t):(d=Je(e),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:e,o:e,d(e){e&&$(r),e&&$(s),e&&$(i),e&&$(a),e&&$(l),d&&d.d(e),e&&$(u)}}}function We(e,t,n){let{status:r}=t,{error:s}=t;return e.$$set=e=>{"status"in e&&n(0,r=e.status),"error"in e&&n(1,s=e.error)},[r,s,false]}class Fe extends _e{constructor(e){super(),$e(this,e,We,Ve,i,{status:0,error:1})}}function Ye(e){let n,r,s;const o=[e[4].props];var i=e[4].component;function a(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return i&&(n=new i(a())),{c(){n&&pe(n.$$.fragment),r=S()},l(e){n&&me(n.$$.fragment,e),r=S()},m(e,t){n&&ge(n,e,t),v(e,r,t),s=!0},p(e,t){const s=16&t?de(o,[he(e[4].props)]):{};if(i!==(i=e[4].component)){if(n){ce();const e=n;fe(e.$$.fragment,1,0,(()=>{be(e,1)})),le()}i?(n=new i(a()),pe(n.$$.fragment),ue(n.$$.fragment,1),ge(n,r.parentNode,r)):n=null}else i&&n.$set(s)},i(e){s||(n&&ue(n.$$.fragment,e),s=!0)},o(e){n&&fe(n.$$.fragment,e),s=!1},d(e){e&&$(r),n&&be(n,e)}}}function Xe(e){let t,n;return t=new Fe({props:{error:e[0],status:e[1]}}),{c(){pe(t.$$.fragment)},l(e){me(t.$$.fragment,e)},m(e,r){ge(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.error=e[0]),2&n&&(r.status=e[1]),t.$set(r)},i(e){n||(ue(t.$$.fragment,e),n=!0)},o(e){fe(t.$$.fragment,e),n=!1},d(e){be(t,e)}}}function Qe(e){let t,n,r,s;const o=[Xe,Ye],i=[];function a(e,t){return e[0]?0:1}return t=a(e),n=i[t]=o[t](e),{c(){n.c(),r=S()},l(e){n.l(e),r=S()},m(e,n){i[t].m(e,n),v(e,r,n),s=!0},p(e,s){let c=t;t=a(e),t===c?i[t].p(e,s):(ce(),fe(i[c],1,1,(()=>{i[c]=null})),le(),n=i[t],n?n.p(e,s):(n=i[t]=o[t](e),n.c()),ue(n,1),n.m(r.parentNode,r))},i(e){s||(ue(n),s=!0)},o(e){fe(n),s=!1},d(e){i[t].d(e),e&&$(r)}}}function Ze(e){let n,r;const s=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[Qe]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)o=t(o,s[e]);return n=new Ke({props:o}),{c(){pe(n.$$.fragment)},l(e){me(n.$$.fragment,e)},m(e,t){ge(n,e,t),r=!0},p(e,[t]){const r=12&t?de(s,[4&t&&{segment:e[2][0]},8&t&&he(e[3].props)]):{};147&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(ue(n.$$.fragment,e),r=!0)},o(e){fe(n.$$.fragment,e),r=!1},d(e){be(n,e)}}}function et(e,t,n){let{stores:r}=t,{error:s}=t,{status:o}=t,{segments:i}=t,{level0:a}=t,{level1:c=null}=t,{notify:l}=t;var u,f;return V(l),u=Ee,f=r,K().$$.context.set(u,f),e.$$set=e=>{"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,s=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,i=e.segments),"level0"in e&&n(3,a=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[s,o,i,a,c,r,l]}class tt extends _e{constructor(e){super(),$e(this,e,et,Ze,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const nt=[],rt=[{js:()=>Promise.all([import("./index.c7e17ce8.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.5e5d9e6a.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].435ee551.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].cd5306fd.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-bc1bb552.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.25851de0.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],st=(ot=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:ot(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:ot(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ot;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function it(e,t,n,r){return new(n||(n=Promise))((function(s,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))}function at(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let ct,lt=1;const ut="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},ft={};let dt,ht;function pt(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function mt(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(dt))return null;let t=e.pathname.slice(dt.length);if(""===t&&(t="/"),!nt.some((e=>e.test(t))))for(let n=0;n<st.length;n+=1){const r=st[n],s=r.pattern.exec(t);if(s){const n=pt(e.search),o=r.parts[r.parts.length-1],i=o.params?o.params(s):{},a={host:location.host,path:t,query:n,params:i};return{href:e.href,route:r,match:s,page:a}}}}function gt(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=at(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=mt(s);if(o){$t(o,null,t.hasAttribute("sapper:noscroll"),s.hash),e.preventDefault(),ut.pushState({id:ct},"",s.href)}}function bt(){return{x:pageXOffset,y:pageYOffset}}function vt(e){if(ft[ct]=bt(),e.state){const t=mt(new URL(location.href));t?$t(t,e.state.id):location.href=location.href}else!function(e){lt=e}(lt+1),function(e){ct=e}(lt),ut.replaceState({id:ct},"",location.href)}function $t(e,t,n,r){return it(this,void 0,void 0,(function*(){const s=!!t;if(s)ct=t;else{const e=bt();ft[ct]=e,ct=t=++lt,ft[ct]=n?e:{x:0,y:0}}if(yield ht(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=ft[t];r&&(e=document.getElementById(r.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),ft[ct]=n,n&&(s||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function _t(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let wt,yt=null;function Et(e){const t=at(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=mt(new URL(e,_t(document)));if(t)yt&&e===yt.href||(yt={href:e,promise:Dt(t)}),yt.promise}(t.href)}function xt(e){clearTimeout(wt),wt=setTimeout((()=>{Et(e)}),20)}function St(e,t={noscroll:!1,replaceState:!1}){const n=mt(new URL(e,_t(document)));if(n){const r=$t(n,null,t.noscroll);return ut[t.replaceState?"replaceState":"pushState"]({id:ct},"",e),r}return location.href=e,new Promise((()=>{}))}const Tt="undefined"!=typeof __SAPPER__&&__SAPPER__;let At,Pt,Nt,It=!1,Lt=[],Rt="{}";const jt={page:function(e){const t=ye(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe((t=>{(void 0===r||n&&t!==r)&&e(r=t)}))}}}({}),preloading:ye(null),session:ye(Tt&&Tt.session)};let kt,Ot,Ct;function Mt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function Ht(e){return it(this,void 0,void 0,(function*(){At&&jt.preloading.set(!0);const t=function(e){return yt&&yt.href===e.href?yt.promise:Dt(e)}(e),n=Pt={},r=yield t,{redirect:s}=r;if(n===Pt)if(s)yield St(s.location,{replaceState:!0});else{const{props:t,branch:n}=r;yield Ut(n,t,Mt(t,e.page))}}))}function Ut(e,t,n){return it(this,void 0,void 0,(function*(){jt.page.set(n),jt.preloading.set(!1),At?At.$set(t):(t.stores={page:{subscribe:jt.page.subscribe},preloading:{subscribe:jt.preloading.subscribe},session:jt.session},t.level0={props:yield Nt},t.notify=jt.page.notify,At=new tt({target:Ct,props:t,hydrate:!0})),Lt=e,Rt=JSON.stringify(n.query),It=!0,Ot=!1}))}function Dt(e){return it(this,void 0,void 0,(function*(){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},i={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(s&&(s.statusCode!==e||s.location!==t))throw new Error("Conflicting redirects");s={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!Nt){const e=()=>({});Nt=Tt.preloaded[0]||e.call(i,{host:n.host,path:n.path,query:n.query,params:{}},kt)}let a,c=1;try{const s=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;a=yield Promise.all(t.parts.map(((t,a)=>it(this,void 0,void 0,(function*(){const f=r[a];if(function(e,t,n,r){if(r!==Rt)return!0;const s=Lt[e];return!!s&&(t!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(a,f,l,s)&&(u=!0),o.segments[c]=r[a+1],!t)return{segment:f};const d=c++;let h;if(Ot||u||!Lt[a]||Lt[a].part!==t.i){u=!1;const{default:r,preload:s}=yield rt[t.i].js();let o;o=It||!Tt.preloaded[a+1]?s?yield s.call(i,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},kt):{}:Tt.preloaded[a+1],h={component:r,props:o,segment:f,match:l,part:t.i}}else h=Lt[a];return o[`level${d}`]=h})))))}catch(e){o.error=e,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}))}var Gt,qt,Bt;jt.session.subscribe((e=>it(void 0,void 0,void 0,(function*(){if(kt=e,!It)return;Ot=!0;const t=mt(new URL(location.href)),n=Pt={},{redirect:r,props:s,branch:o}=yield Dt(t);n===Pt&&(r?yield St(r.location,{replaceState:!0}):yield Ut(o,s,Mt(s,t.page)))})))),Gt={target:document.querySelector("#sapper")},qt=Gt.target,Ct=qt,Bt=Tt.baseUrl,dt=Bt,ht=Ht,"scrollRestoration"in ut&&(ut.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{ut.scrollRestoration="auto"})),addEventListener("load",(()=>{ut.scrollRestoration="manual"})),addEventListener("click",gt),addEventListener("popstate",vt),addEventListener("touchstart",Et),addEventListener("mousemove",xt),Tt.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:r,preloaded:s,status:o,error:i}=Tt;Nt||(Nt=s&&s[0]);const a={error:i,status:o,session:r,level0:{props:Nt},level1:{props:{status:o,error:i},component:Fe},segments:s},c=pt(n);Ut([],a,{host:e,path:t,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;ut.replaceState({id:lt},"",t);const n=mt(new URL(location.href));if(n)return $t(n,lt,!0,e)}));export{be as A,T as B,s as C,Y as D,M as E,c as F,f as G,B as H,q as I,ke as J,y as K,St as L,U as M,A as N,t as O,N as P,de as Q,V as R,_e as S,W as T,u as U,he as V,te as W,G as X,I as a,k as b,j as c,$ as d,w as e,P as f,v as g,g as h,$e as i,x as j,O as k,ce as l,fe as m,e as n,le as o,ue as p,J as q,xe as r,i as s,E as t,H as u,S as v,_ as w,pe as x,me as y,ge as z};

import __inject_styles from './inject_styles.803b7e80.js';