function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function s(e){e.forEach(n)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function c(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function l(e,n,r,s){return e[1]&&s?t(r.ctx.slice(),e[1](s(n))):r.ctx}function u(e,t,n,r,s,o,i){const a=function(e,t,n,r){if(e[2]&&r){const s=e[2](r(n));if(void 0===t.dirty)return s;if("object"==typeof s){const e=[],n=Math.max(t.dirty.length,s.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|s[r];return e}return t.dirty|s}return t.dirty}(t,r,s,o);if(a){const s=l(t,n,r,i);e.p(s,a)}}function f(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function d(e){return null==e?"":e}let h,p,m=!1;function g(e,t,n,r){for(;e<t;){const s=e+(t-e>>1);n(s)<=r?e=s+1:t=s}return e}function b(e,t){if(m){for(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const r=t[n];void 0!==r.claim_order&&e.push(r)}t=e}const n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let s=0;for(let e=0;e<t.length;e++){const o=t[e].claim_order,i=(s>0&&t[n[s]].claim_order<=o?s+1:g(1,s,(e=>t[n[e]].claim_order),o))-1;r[e]=n[i]+1;const a=i+1;n[a]=e,s=Math.max(a,s)}const o=[],i=[];let a=t.length-1;for(let e=n[s]+1;0!=e;e=r[e-1]){for(o.push(t[e-1]);a>=e;a--)i.push(t[a]);a--}for(;a>=0;a--)i.push(t[a]);o.reverse(),i.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<i.length;t++){for(;n<o.length&&i[t].claim_order>=o[n].claim_order;)n++;const r=n<o.length?o[n]:null;e.insertBefore(i[t],r)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?void 0===t.claim_order&&t.parentNode===e||e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else t.parentNode!==e&&e.appendChild(t)}function v(e,t,n){e.insertBefore(t,n||null)}function $(e,t,n){m&&!n?b(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function _(e){e.parentNode.removeChild(e)}function w(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function E(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(e){return document.createTextNode(e)}function S(){return x(" ")}function T(){return x("")}function A(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function P(e){return function(t){return t.preventDefault(),e.call(this,t)}}function N(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function I(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)null==t[r]?e.removeAttribute(r):"style"===r?e.style.cssText=t[r]:"__value"===r?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:N(e,r,t[r])}function L(e){return Array.from(e.childNodes)}function R(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}function j(e,t,n,r,s=!1){R(e);const o=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const o=e[r];if(t(o)){const t=n(o);return void 0===t?e.splice(r,1):e[r]=t,s||(e.claim_info.last_index=r),o}}for(let r=e.claim_info.last_index-1;r>=0;r--){const o=e[r];if(t(o)){const t=n(o);return void 0===t?e.splice(r,1):e[r]=t,s?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=r,o}}return r()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function k(e,t,n,r){return j(e,(e=>e.nodeName===t),(e=>{const t=[];for(let r=0;r<e.attributes.length;r++){const s=e.attributes[r];n[s.name]||t.push(s.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>r?E(t):y(t)))}function O(e,t){return j(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>x(t)),!0)}function C(e){return O(e," ")}function M(e,t,n){for(let r=n;r<e.length;r+=1){const n=e[r];if(8===n.nodeType&&n.textContent.trim()===t)return r}return e.length}function H(e){const t=M(e,"HTML_TAG_START",0),n=M(e,"HTML_TAG_END",t);if(t===n)return new z;R(e);const r=e.splice(t,n+1);_(r[0]),_(r[r.length-1]);const s=r.slice(1,r.length-1);for(const t of s)t.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new z(s)}function U(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function D(e,t){e.value=null==t?"":t}function G(){if(void 0===h){h=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){h=!0}}return h}function q(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=y("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=G();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=A(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{s=A(n.contentWindow,"resize",t)}),function(e,t){e.appendChild(t)}(e,n),()=>{(r||s&&n.contentWindow)&&s(),_(n)}}function B(e,t=document.body){return Array.from(t.querySelectorAll(e))}class z extends class{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.e=y(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)v(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(_)}}{constructor(e){super(),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let t=0;t<this.n.length;t+=1)$(this.t,this.n[t],e)}}function K(e){p=e}function J(){if(!p)throw new Error("Function called outside component initialization");return p}function V(e){J().$$.on_mount.push(e)}function W(e){J().$$.after_update.push(e)}function F(e){J().$$.on_destroy.push(e)}const Y=[],X=[],Q=[],Z=[],ee=Promise.resolve();let te=!1;function ne(e){Q.push(e)}let re=!1;const se=new Set;function oe(){if(!re){re=!0;do{for(let e=0;e<Y.length;e+=1){const t=Y[e];K(t),ie(t.$$)}for(K(null),Y.length=0;X.length;)X.pop()();for(let e=0;e<Q.length;e+=1){const t=Q[e];se.has(t)||(se.add(t),t())}Q.length=0}while(Y.length);for(;Z.length;)Z.pop()();te=!1,re=!1,se.clear()}}function ie(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ne)}}const ae=new Set;let ce;function le(){ce={r:0,c:[],p:ce}}function ue(){ce.r||s(ce.c),ce=ce.p}function fe(e,t){e&&e.i&&(ae.delete(e),e.i(t))}function de(e,t,n,r){if(e&&e.o){if(ae.has(e))return;ae.add(e),ce.c.push((()=>{ae.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function he(e,t){const n={},r={},s={$$scope:1};let o=e.length;for(;o--;){const i=e[o],a=t[o];if(a){for(const e in i)e in a||(r[e]=1);for(const e in a)s[e]||(n[e]=a[e],s[e]=1);e[o]=a}else for(const e in i)s[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function pe(e){return"object"==typeof e&&null!==e?e:{}}function me(e){e&&e.c()}function ge(e,t){e&&e.l(t)}function be(e,t,r,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(t,r),i||ne((()=>{const t=c.map(n).filter(o);l?l.push(...t):s(t),e.$$.on_mount=[]})),u.forEach(ne)}function ve(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function $e(e,t){-1===e.$$.dirty[0]&&(Y.push(e),te||(te=!0,ee.then(oe)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function _e(t,n,o,i,a,c,l,u=[-1]){const f=p;K(t);const d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:n.context||[]),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};l&&l(d.root);let h=!1;if(d.ctx=o?o(t,n.props||{},((e,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&a(d.ctx[e],d.ctx[e]=s)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](s),h&&$e(t,e)),n})):[],d.update(),h=!0,s(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){m=!0;const e=L(n.target);d.fragment&&d.fragment.l(e),e.forEach(_)}else d.fragment&&d.fragment.c();n.intro&&fe(t.$$.fragment),be(t,n.target,n.anchor,n.customElement),m=!1,oe()}K(f)}class we{$destroy(){ve(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ye=[];function Ee(t,n=e){let r;const s=new Set;function o(e){if(i(t,e)&&(t=e,r)){const e=!ye.length;for(const e of s)e[1](),ye.push(e,t);if(e){for(let e=0;e<ye.length;e+=2)ye[e][0](ye[e+1]);ye.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(i,a=e){const c=[i,a];return s.add(c),1===s.size&&(r=n(o)||e),i(t),()=>{s.delete(c),0===s.size&&(r(),r=null)}}}}const xe={};var Se={owner:"materialsproject",repo:"status",sites:[{name:"Materials Project Public",url:"https://materialsproject.org"},{name:"Materials Project Development",url:"https://next-gen.materialsproject.org"},{name:"Materials Project API",url:"https://api.materialsproject.org"},{name:"Materials Project Authentication",url:"https://profile.materialsproject.org"},{name:"MPContribs",url:"https://contribs.materialsproject.org"}],"status-website":{cname:"status.materialsproject.org",logoUrl:"https://next-gen.materialsproject.org/assets/images/home/materials-project-logo.svg",name:"Materials Project",introTitle:"**Materials Project** is an open-access database of predicted materials properties.",introMessage:"This status page reports the uptime for the services we provide and tracks any on-going incidents.",navbar:[{title:"Status",href:"/"},{title:"Materials Project",href:"https://materialsproject.org"}]},path:"https://status.materialsproject.org",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Te(e,t,n){const r=e.slice();return r[1]=t[n],r}function Ae(t){let n,r,s,o=Se["status-website"]&&!Se["status-website"].hideNavLogo&&function(t){let n,r;return{c(){n=y("img"),this.h()},l(e){n=k(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){N(n,"alt",""),c(n.src,r=Se["status-website"].logoUrl)||N(n,"src",r),N(n,"class","svelte-a08hsz")},m(e,t){$(e,n,t)},p:e,d(e){e&&_(n)}}}(),i=Se["status-website"]&&!Se["status-website"].hideNavTitle&&function(t){let n,r,s=Se["status-website"].name+"";return{c(){n=y("div"),r=x(s)},l(e){n=k(e,"DIV",{});var t=L(n);r=O(t,s),t.forEach(_)},m(e,t){$(e,n,t),b(n,r)},p:e,d(e){e&&_(n)}}}();return{c(){n=y("div"),r=y("a"),o&&o.c(),s=S(),i&&i.c(),this.h()},l(e){n=k(e,"DIV",{});var t=L(n);r=k(t,"A",{href:!0,class:!0});var a=L(r);o&&o.l(a),s=C(a),i&&i.l(a),a.forEach(_),t.forEach(_),this.h()},h(){N(r,"href",Se["status-website"].logoHref||Se.path),N(r,"class","logo svelte-a08hsz")},m(e,t){$(e,n,t),b(n,r),o&&o.m(r,null),b(r,s),i&&i.m(r,null)},p(e,t){Se["status-website"]&&!Se["status-website"].hideNavLogo&&o.p(e,t),Se["status-website"]&&!Se["status-website"].hideNavTitle&&i.p(e,t)},d(e){e&&_(n),o&&o.d(),i&&i.d()}}}function Pe(e){let t,n,r,s,o,i,a=e[1].title+"";return{c(){t=y("li"),n=y("a"),r=x(a),i=S(),this.h()},l(e){t=k(e,"LI",{});var s=L(t);n=k(s,"A",{"aria-current":!0,href:!0,class:!0});var o=L(n);r=O(o,a),o.forEach(_),i=C(s),s.forEach(_),this.h()},h(){N(n,"aria-current",s=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),N(n,"href",o=e[1].href.replace("$OWNER",Se.owner).replace("$REPO",Se.repo)),N(n,"class","svelte-a08hsz")},m(e,s){$(e,t,s),b(t,n),b(n,r),b(t,i)},p(e,t){1&t&&s!==(s=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&N(n,"aria-current",s)},d(e){e&&_(t)}}}function Ne(t){let n,r,s,o,i,a=Se["status-website"]&&Se["status-website"].logoUrl&&Ae(),c=Se["status-website"]&&Se["status-website"].navbar&&function(e){let t,n=Se["status-website"].navbar,r=[];for(let t=0;t<n.length;t+=1)r[t]=Pe(Te(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=T()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=T()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);$(e,t,n)},p(e,s){if(1&s){let o;for(n=Se["status-website"].navbar,o=0;o<n.length;o+=1){const i=Te(e,n,o);r[o]?r[o].p(i,s):(r[o]=Pe(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){w(r,e),e&&_(t)}}}(t),l=Se["status-website"]&&Se["status-website"].navbarGitHub&&!Se["status-website"].navbar&&function(t){let n,r,s,o=Se.i18n.navGitHub+"";return{c(){n=y("li"),r=y("a"),s=x(o),this.h()},l(e){n=k(e,"LI",{});var t=L(n);r=k(t,"A",{href:!0,class:!0});var i=L(r);s=O(i,o),i.forEach(_),t.forEach(_),this.h()},h(){N(r,"href",`https://github.com/${Se.owner}/${Se.repo}`),N(r,"class","svelte-a08hsz")},m(e,t){$(e,n,t),b(n,r),b(r,s)},p:e,d(e){e&&_(n)}}}();return{c(){n=y("nav"),r=y("div"),a&&a.c(),s=S(),o=y("ul"),c&&c.c(),i=S(),l&&l.c(),this.h()},l(e){n=k(e,"NAV",{class:!0});var t=L(n);r=k(t,"DIV",{class:!0});var u=L(r);a&&a.l(u),s=C(u),o=k(u,"UL",{class:!0});var f=L(o);c&&c.l(f),i=C(f),l&&l.l(f),f.forEach(_),u.forEach(_),t.forEach(_),this.h()},h(){N(o,"class","svelte-a08hsz"),N(r,"class","container svelte-a08hsz"),N(n,"class","svelte-a08hsz")},m(e,t){$(e,n,t),b(n,r),a&&a.m(r,null),b(r,s),b(r,o),c&&c.m(o,null),b(o,i),l&&l.m(o,null)},p(e,[t]){Se["status-website"]&&Se["status-website"].logoUrl&&a.p(e,t),Se["status-website"]&&Se["status-website"].navbar&&c.p(e,t),Se["status-website"]&&Se["status-website"].navbarGitHub&&!Se["status-website"].navbar&&l.p(e,t)},i:e,o:e,d(e){e&&_(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function Ie(e,t,n){let{segment:r}=t;return e.$$set=e=>{"segment"in e&&n(0,r=e.segment)},[r]}class Le extends we{constructor(e){super(),_e(this,e,Ie,Ne,i,{segment:0})}}var Re={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function je(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function ke(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Oe(e,t){var n,r,s,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},f=0;function d(e){var t=Re[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function h(){for(var e="";c.length;)e+=d(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=a.exec(e);)r=e.substring(f,s.index),f=a.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((i=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+je(ke(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=s[6])?(i.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=Oe(je(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):s[8]?n='<img src="'+ke(s[8])+'" alt="'+ke(s[7])+'">':s[10]?(l=l.replace("<a>",'<a href="'+ke(s[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(i="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+Oe(s[12]||s[15],u)+"</"+i+">":s[16]?n="<code>"+ke(s[16])+"</code>":(s[17]||s[1])&&(n=d(s[17]||"--"))),l+=r,l+=n;return(l+e.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function Ce(e,t,n){const r=e.slice();return r[3]=t[n],r}function Me(e,t,n){const r=e.slice();return r[3]=t[n],r}function He(e,t,n){const r=e.slice();return r[8]=t[n],r}function Ue(t){let n;return{c(){n=y("link"),this.h()},l(e){n=k(e,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",`${Se.path}/themes/${(Se["status-website"]||{}).theme||"light"}.css`)},m(e,t){$(e,n,t)},p:e,d(e){e&&_(n)}}}function De(t){let n;return{c(){n=y("link"),this.h()},l(e){n=k(e,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",(Se["status-website"]||{}).themeUrl)},m(e,t){$(e,n,t)},p:e,d(e){e&&_(n)}}}function Ge(t){let n,r;return{c(){n=y("script"),this.h()},l(e){n=k(e,"SCRIPT",{src:!0}),L(n).forEach(_),this.h()},h(){c(n.src,r=t[8].src)||N(n,"src",r),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){$(e,n,t)},p:e,d(e){e&&_(n)}}}function qe(t){let n;return{c(){n=y("link"),this.h()},l(e){n=k(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){N(n,"rel",t[3].rel),N(n,"href",t[3].href),N(n,"media",t[3].media)},m(e,t){$(e,n,t)},p:e,d(e){e&&_(n)}}}function Be(t){let n;return{c(){n=y("meta"),this.h()},l(e){n=k(e,"META",{name:!0,content:!0}),this.h()},h(){N(n,"name",t[3].name),N(n,"content",t[3].content)},m(e,t){$(e,n,t)},p:e,d(e){e&&_(n)}}}function ze(t){let n,r,s,o,i,a,c,f,d,h,p,m,g,v,E,x,A,P,I=Oe(Se.i18n.footer.replace(/\$REPO/,`https://github.com/${Se.owner}/${Se.repo}`))+"",R=(Se["status-website"]||{}).customHeadHtml&&function(t){let n,r,s=(Se["status-website"]||{}).customHeadHtml+"";return{c(){n=new z,r=T(),this.h()},l(e){n=H(e),r=T(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),$(e,r,t)},p:e,d(e){e&&_(r),e&&n.d()}}}();let j=((Se["status-website"]||{}).themeUrl?De:Ue)(t),O=(Se["status-website"]||{}).scripts&&function(e){let t,n=(Se["status-website"]||{}).scripts,r=[];for(let t=0;t<n.length;t+=1)r[t]=Ge(He(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=T()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=T()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);$(e,t,n)},p(e,s){if(0&s){let o;for(n=(Se["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=He(e,n,o);r[o]?r[o].p(i,s):(r[o]=Ge(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){w(r,e),e&&_(t)}}}(t),M=(Se["status-website"]||{}).links&&function(e){let t,n=(Se["status-website"]||{}).links,r=[];for(let t=0;t<n.length;t+=1)r[t]=qe(Me(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=T()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=T()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);$(e,t,n)},p(e,s){if(0&s){let o;for(n=(Se["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=Me(e,n,o);r[o]?r[o].p(i,s):(r[o]=qe(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){w(r,e),e&&_(t)}}}(t),U=(Se["status-website"]||{}).metaTags&&function(e){let t,n=(Se["status-website"]||{}).metaTags,r=[];for(let t=0;t<n.length;t+=1)r[t]=Be(Ce(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=T()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=T()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);$(e,t,n)},p(e,s){if(0&s){let o;for(n=(Se["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Ce(e,n,o);r[o]?r[o].p(i,s):(r[o]=Be(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){w(r,e),e&&_(t)}}}(t),D=Se["status-website"].css&&function(t){let n,r,s=`<style>${Se["status-website"].css}</style>`;return{c(){n=new z,r=T(),this.h()},l(e){n=H(e),r=T(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),$(e,r,t)},p:e,d(e){e&&_(r),e&&n.d()}}}(),G=Se["status-website"].js&&function(t){let n,r,s=`<script>${Se["status-website"].js}<\/script>`;return{c(){n=new z,r=T(),this.h()},l(e){n=H(e),r=T(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),$(e,r,t)},p:e,d(e){e&&_(r),e&&n.d()}}}(),q=(Se["status-website"]||{}).customBodyHtml&&function(t){let n,r,s=(Se["status-website"]||{}).customBodyHtml+"";return{c(){n=new z,r=T(),this.h()},l(e){n=H(e),r=T(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),$(e,r,t)},p:e,d(e){e&&_(r),e&&n.d()}}}();m=new Le({props:{segment:t[0]}});const K=t[2].default,J=function(e,t,n,r){if(e){const s=l(e,t,n,r);return e[0](s)}}(K,t,t[1],null);return{c(){R&&R.c(),n=T(),j.c(),r=y("link"),s=y("link"),o=y("link"),O&&O.c(),i=T(),M&&M.c(),a=T(),U&&U.c(),c=T(),D&&D.c(),f=T(),G&&G.c(),d=T(),h=S(),q&&q.c(),p=S(),me(m.$$.fragment),g=S(),v=y("main"),J&&J.c(),E=S(),x=y("footer"),A=y("p"),this.h()},l(e){const t=B('[data-svelte="svelte-ri9y7q"]',document.head);R&&R.l(t),n=T(),j.l(t),r=k(t,"LINK",{rel:!0,href:!0}),s=k(t,"LINK",{rel:!0,type:!0,href:!0}),o=k(t,"LINK",{rel:!0,type:!0,href:!0}),O&&O.l(t),i=T(),M&&M.l(t),a=T(),U&&U.l(t),c=T(),D&&D.l(t),f=T(),G&&G.l(t),d=T(),t.forEach(_),h=C(e),q&&q.l(e),p=C(e),ge(m.$$.fragment,e),g=C(e),v=k(e,"MAIN",{class:!0});var l=L(v);J&&J.l(l),l.forEach(_),E=C(e),x=k(e,"FOOTER",{class:!0});var u=L(x);A=k(u,"P",{}),L(A).forEach(_),u.forEach(_),this.h()},h(){N(r,"rel","stylesheet"),N(r,"href",`${Se.path}/global.css`),N(s,"rel","icon"),N(s,"type","image/svg"),N(s,"href",(Se["status-website"]||{}).faviconSvg||(Se["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),N(o,"rel","icon"),N(o,"type","image/png"),N(o,"href",(Se["status-website"]||{}).favicon||"/logo-192.png"),N(v,"class","container"),N(x,"class","svelte-jbr799")},m(e,t){R&&R.m(document.head,null),b(document.head,n),j.m(document.head,null),b(document.head,r),b(document.head,s),b(document.head,o),O&&O.m(document.head,null),b(document.head,i),M&&M.m(document.head,null),b(document.head,a),U&&U.m(document.head,null),b(document.head,c),D&&D.m(document.head,null),b(document.head,f),G&&G.m(document.head,null),b(document.head,d),$(e,h,t),q&&q.m(e,t),$(e,p,t),be(m,e,t),$(e,g,t),$(e,v,t),J&&J.m(v,null),$(e,E,t),$(e,x,t),b(x,A),A.innerHTML=I,P=!0},p(e,[t]){(Se["status-website"]||{}).customHeadHtml&&R.p(e,t),j.p(e,t),(Se["status-website"]||{}).scripts&&O.p(e,t),(Se["status-website"]||{}).links&&M.p(e,t),(Se["status-website"]||{}).metaTags&&U.p(e,t),Se["status-website"].css&&D.p(e,t),Se["status-website"].js&&G.p(e,t),(Se["status-website"]||{}).customBodyHtml&&q.p(e,t);const n={};1&t&&(n.segment=e[0]),m.$set(n),J&&J.p&&(!P||2&t)&&u(J,K,e,e[1],P?t:-1,null,null)},i(e){P||(fe(m.$$.fragment,e),fe(J,e),P=!0)},o(e){de(m.$$.fragment,e),de(J,e),P=!1},d(e){R&&R.d(e),_(n),j.d(e),_(r),_(s),_(o),O&&O.d(e),_(i),M&&M.d(e),_(a),U&&U.d(e),_(c),D&&D.d(e),_(f),G&&G.d(e),_(d),e&&_(h),q&&q.d(e),e&&_(p),ve(m,e),e&&_(g),e&&_(v),J&&J.d(e),e&&_(E),e&&_(x)}}}function Ke(e,t,n){let{$$slots:r={},$$scope:s}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,s=e.$$scope)},[o,s,r]}class Je extends we{constructor(e){super(),_e(this,e,Ke,ze,i,{segment:0})}}function Ve(e){let t,n,r=e[1].stack+"";return{c(){t=y("pre"),n=x(r)},l(e){t=k(e,"PRE",{});var s=L(t);n=O(s,r),s.forEach(_)},m(e,r){$(e,t,r),b(t,n)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&U(n,r)},d(e){e&&_(t)}}}function We(t){let n,r,s,o,i,a,c,l,u,f=t[1].message+"";document.title=n=t[0];let d=t[2]&&t[1].stack&&Ve(t);return{c(){r=S(),s=y("h1"),o=x(t[0]),i=S(),a=y("p"),c=x(f),l=S(),d&&d.c(),u=T(),this.h()},l(e){B('[data-svelte="svelte-1moakz"]',document.head).forEach(_),r=C(e),s=k(e,"H1",{class:!0});var n=L(s);o=O(n,t[0]),n.forEach(_),i=C(e),a=k(e,"P",{class:!0});var h=L(a);c=O(h,f),h.forEach(_),l=C(e),d&&d.l(e),u=T(),this.h()},h(){N(s,"class","svelte-17w3omn"),N(a,"class","svelte-17w3omn")},m(e,t){$(e,r,t),$(e,s,t),b(s,o),$(e,i,t),$(e,a,t),b(a,c),$(e,l,t),d&&d.m(e,t),$(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&U(o,e[0]),2&t&&f!==(f=e[1].message+"")&&U(c,f),e[2]&&e[1].stack?d?d.p(e,t):(d=Ve(e),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:e,o:e,d(e){e&&_(r),e&&_(s),e&&_(i),e&&_(a),e&&_(l),d&&d.d(e),e&&_(u)}}}function Fe(e,t,n){let{status:r}=t,{error:s}=t;return e.$$set=e=>{"status"in e&&n(0,r=e.status),"error"in e&&n(1,s=e.error)},[r,s,false]}class Ye extends we{constructor(e){super(),_e(this,e,Fe,We,i,{status:0,error:1})}}function Xe(e){let n,r,s;const o=[e[4].props];var i=e[4].component;function a(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return i&&(n=new i(a())),{c(){n&&me(n.$$.fragment),r=T()},l(e){n&&ge(n.$$.fragment,e),r=T()},m(e,t){n&&be(n,e,t),$(e,r,t),s=!0},p(e,t){const s=16&t?he(o,[pe(e[4].props)]):{};if(i!==(i=e[4].component)){if(n){le();const e=n;de(e.$$.fragment,1,0,(()=>{ve(e,1)})),ue()}i?(n=new i(a()),me(n.$$.fragment),fe(n.$$.fragment,1),be(n,r.parentNode,r)):n=null}else i&&n.$set(s)},i(e){s||(n&&fe(n.$$.fragment,e),s=!0)},o(e){n&&de(n.$$.fragment,e),s=!1},d(e){e&&_(r),n&&ve(n,e)}}}function Qe(e){let t,n;return t=new Ye({props:{error:e[0],status:e[1]}}),{c(){me(t.$$.fragment)},l(e){ge(t.$$.fragment,e)},m(e,r){be(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.error=e[0]),2&n&&(r.status=e[1]),t.$set(r)},i(e){n||(fe(t.$$.fragment,e),n=!0)},o(e){de(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function Ze(e){let t,n,r,s;const o=[Qe,Xe],i=[];function a(e,t){return e[0]?0:1}return t=a(e),n=i[t]=o[t](e),{c(){n.c(),r=T()},l(e){n.l(e),r=T()},m(e,n){i[t].m(e,n),$(e,r,n),s=!0},p(e,s){let c=t;t=a(e),t===c?i[t].p(e,s):(le(),de(i[c],1,1,(()=>{i[c]=null})),ue(),n=i[t],n?n.p(e,s):(n=i[t]=o[t](e),n.c()),fe(n,1),n.m(r.parentNode,r))},i(e){s||(fe(n),s=!0)},o(e){de(n),s=!1},d(e){i[t].d(e),e&&_(r)}}}function et(e){let n,r;const s=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[Ze]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)o=t(o,s[e]);return n=new Je({props:o}),{c(){me(n.$$.fragment)},l(e){ge(n.$$.fragment,e)},m(e,t){be(n,e,t),r=!0},p(e,[t]){const r=12&t?he(s,[4&t&&{segment:e[2][0]},8&t&&pe(e[3].props)]):{};147&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(fe(n.$$.fragment,e),r=!0)},o(e){de(n.$$.fragment,e),r=!1},d(e){ve(n,e)}}}function tt(e,t,n){let{stores:r}=t,{error:s}=t,{status:o}=t,{segments:i}=t,{level0:a}=t,{level1:c=null}=t,{notify:l}=t;var u,f;return W(l),u=xe,f=r,J().$$.context.set(u,f),e.$$set=e=>{"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,s=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,i=e.segments),"level0"in e&&n(3,a=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[s,o,i,a,c,r,l]}class nt extends we{constructor(e){super(),_e(this,e,tt,et,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const rt=[],st=[{js:()=>Promise.all([import("./index.db96519b.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.447ecab0.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].12235b67.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].a2f8491d.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-bc1bb552.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.e433f2ee.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],ot=(it=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:it(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:it(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var it;
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
function at(e,t,n,r){return new(n||(n=Promise))((function(s,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))}function ct(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let lt,ut=1;const ft="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},dt={};let ht,pt;function mt(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function gt(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(ht))return null;let t=e.pathname.slice(ht.length);if(""===t&&(t="/"),!rt.some((e=>e.test(t))))for(let n=0;n<ot.length;n+=1){const r=ot[n],s=r.pattern.exec(t);if(s){const n=mt(e.search),o=r.parts[r.parts.length-1],i=o.params?o.params(s):{},a={host:location.host,path:t,query:n,params:i};return{href:e.href,route:r,match:s,page:a}}}}function bt(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=ct(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=gt(s);if(o){_t(o,null,t.hasAttribute("sapper:noscroll"),s.hash),e.preventDefault(),ft.pushState({id:lt},"",s.href)}}function vt(){return{x:pageXOffset,y:pageYOffset}}function $t(e){if(dt[lt]=vt(),e.state){const t=gt(new URL(location.href));t?_t(t,e.state.id):location.href=location.href}else!function(e){ut=e}(ut+1),function(e){lt=e}(ut),ft.replaceState({id:lt},"",location.href)}function _t(e,t,n,r){return at(this,void 0,void 0,(function*(){const s=!!t;if(s)lt=t;else{const e=vt();dt[lt]=e,lt=t=++ut,dt[lt]=n?e:{x:0,y:0}}if(yield pt(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=dt[t];r&&(e=document.getElementById(r.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),dt[lt]=n,n&&(s||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function wt(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let yt,Et=null;function xt(e){const t=ct(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=gt(new URL(e,wt(document)));if(t)Et&&e===Et.href||(Et={href:e,promise:Gt(t)}),Et.promise}(t.href)}function St(e){clearTimeout(yt),yt=setTimeout((()=>{xt(e)}),20)}function Tt(e,t={noscroll:!1,replaceState:!1}){const n=gt(new URL(e,wt(document)));if(n){const r=_t(n,null,t.noscroll);return ft[t.replaceState?"replaceState":"pushState"]({id:lt},"",e),r}return location.href=e,new Promise((()=>{}))}const At="undefined"!=typeof __SAPPER__&&__SAPPER__;let Pt,Nt,It,Lt=!1,Rt=[],jt="{}";const kt={page:function(e){const t=Ee(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe((t=>{(void 0===r||n&&t!==r)&&e(r=t)}))}}}({}),preloading:Ee(null),session:Ee(At&&At.session)};let Ot,Ct,Mt;function Ht(e,t){const{error:n}=e;return Object.assign({error:n},t)}function Ut(e){return at(this,void 0,void 0,(function*(){Pt&&kt.preloading.set(!0);const t=function(e){return Et&&Et.href===e.href?Et.promise:Gt(e)}(e),n=Nt={},r=yield t,{redirect:s}=r;if(n===Nt)if(s)yield Tt(s.location,{replaceState:!0});else{const{props:t,branch:n}=r;yield Dt(n,t,Ht(t,e.page))}}))}function Dt(e,t,n){return at(this,void 0,void 0,(function*(){kt.page.set(n),kt.preloading.set(!1),Pt?Pt.$set(t):(t.stores={page:{subscribe:kt.page.subscribe},preloading:{subscribe:kt.preloading.subscribe},session:kt.session},t.level0={props:yield It},t.notify=kt.page.notify,Pt=new nt({target:Mt,props:t,hydrate:!0})),Rt=e,jt=JSON.stringify(n.query),Lt=!0,Ct=!1}))}function Gt(e){return at(this,void 0,void 0,(function*(){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},i={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(s&&(s.statusCode!==e||s.location!==t))throw new Error("Conflicting redirects");s={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!It){const e=()=>({});It=At.preloaded[0]||e.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Ot)}let a,c=1;try{const s=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;a=yield Promise.all(t.parts.map(((t,a)=>at(this,void 0,void 0,(function*(){const f=r[a];if(function(e,t,n,r){if(r!==jt)return!0;const s=Rt[e];return!!s&&(t!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(a,f,l,s)&&(u=!0),o.segments[c]=r[a+1],!t)return{segment:f};const d=c++;let h;if(Ct||u||!Rt[a]||Rt[a].part!==t.i){u=!1;const{default:r,preload:s}=yield st[t.i].js();let o;o=Lt||!At.preloaded[a+1]?s?yield s.call(i,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},Ot):{}:At.preloaded[a+1],h={component:r,props:o,segment:f,match:l,part:t.i}}else h=Rt[a];return o[`level${d}`]=h})))))}catch(e){o.error=e,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}))}var qt,Bt,zt;kt.session.subscribe((e=>at(void 0,void 0,void 0,(function*(){if(Ot=e,!Lt)return;Ct=!0;const t=gt(new URL(location.href)),n=Nt={},{redirect:r,props:s,branch:o}=yield Gt(t);n===Nt&&(r?yield Tt(r.location,{replaceState:!0}):yield Dt(o,s,Ht(s,t.page)))})))),qt={target:document.querySelector("#sapper")},Bt=qt.target,Mt=Bt,zt=At.baseUrl,ht=zt,pt=Ut,"scrollRestoration"in ft&&(ft.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{ft.scrollRestoration="auto"})),addEventListener("load",(()=>{ft.scrollRestoration="manual"})),addEventListener("click",bt),addEventListener("popstate",$t),addEventListener("touchstart",xt),addEventListener("mousemove",St),At.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:r,preloaded:s,status:o,error:i}=At;It||(It=s&&s[0]);const a={error:i,status:o,session:r,level0:{props:It},level1:{props:{status:o,error:i},component:Ye},segments:s},c=mt(n);Dt([],a,{host:e,path:t,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;ft.replaceState({id:ut},"",t);const n=gt(new URL(location.href));if(n)return _t(n,ut,!0,e)}));export{ve as A,A as B,s as C,X as D,H as E,c as F,d as G,z as H,B as I,Oe as J,E as K,Tt as L,D as M,P as N,t as O,I as P,he as Q,W as R,we as S,F as T,f as U,pe as V,ne as W,q as X,L as a,O as b,k as c,_ as d,y as e,N as f,$ as g,b as h,_e as i,S as j,C as k,le as l,de as m,e as n,ue as o,fe as p,V as q,Se as r,i as s,x as t,U as u,T as v,w,me as x,ge as y,be as z};

import __inject_styles from './inject_styles.803b7e80.js';