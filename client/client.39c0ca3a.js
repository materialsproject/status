function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function c(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function l(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function u(t,e,n,r,s,o,i){const a=function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(e,r,s,o);if(a){const s=l(e,n,r,i);t.p(s,a)}}function f(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function d(t){return null==t?"":t}let h,p,m=!1;function g(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function b(t,e){if(m){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const r=e[n];void 0!==r.claim_order&&t.push(r)}e=t}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,i=(s>0&&e[n[s]].claim_order<=o?s+1:g(1,s,(t=>e[n[t]].claim_order),o))-1;r[t]=n[i]+1;const a=i+1;n[a]=t,s=Math.max(a,s)}const o=[],i=[];let a=e.length-1;for(let t=n[s]+1;0!=t;t=r[t-1]){for(o.push(e[t-1]);a>=t;a--)i.push(e[a]);a--}for(;a>=0;a--)i.push(e[a]);o.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<o.length&&i[e].claim_order>=o[n].claim_order;)n++;const r=n<o.length?o[n]:null;t.insertBefore(i[e],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode!==t&&t.appendChild(e)}function v(t,e,n){t.insertBefore(e,n||null)}function $(t,e,n){m&&!n?b(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function _(t){t.parentNode.removeChild(t)}function w(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function E(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function x(t){return document.createTextNode(t)}function S(){return x(" ")}function T(){return x("")}function A(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function P(t){return function(e){return e.preventDefault(),t.call(this,e)}}function N(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function I(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:N(t,r,e[r])}function L(t){return Array.from(t.childNodes)}function R(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function j(t,e,n,r,s=!1){R(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const e=n(o);return void 0===e?t.splice(r,1):t[r]=e,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const e=n(o);return void 0===e?t.splice(r,1):t[r]=e,s?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function k(t,e,n,r){return j(t,(t=>t.nodeName===e),(t=>{const e=[];for(let r=0;r<t.attributes.length;r++){const s=t.attributes[r];n[s.name]||e.push(s.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>r?E(e):y(e)))}function O(t,e){return j(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>x(e)),!0)}function C(t){return O(t," ")}function M(t,e,n){for(let r=n;r<t.length;r+=1){const n=t[r];if(8===n.nodeType&&n.textContent.trim()===e)return r}return t.length}function H(t){const e=M(t,"HTML_TAG_START",0),n=M(t,"HTML_TAG_END",e);if(e===n)return new z;R(t);const r=t.splice(e,n+1);_(r[0]),_(r[r.length-1]);const s=r.slice(1,r.length-1);for(const e of s)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new z(s)}function U(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function D(t,e){t.value=null==e?"":e}function G(){if(void 0===h){h=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){h=!0}}return h}function q(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=y("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=G();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=A(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{s=A(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(r||s&&n.contentWindow)&&s(),_(n)}}function B(t,e=document.body){return Array.from(e.querySelectorAll(t))}class z extends class{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.e=y(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)v(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(_)}}{constructor(t){super(),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)$(this.t,this.n[e],t)}}function K(t){p=t}function J(){if(!p)throw new Error("Function called outside component initialization");return p}function V(t){J().$$.on_mount.push(t)}function W(t){J().$$.after_update.push(t)}function F(t){J().$$.on_destroy.push(t)}const Y=[],X=[],Q=[],Z=[],tt=Promise.resolve();let et=!1;function nt(t){Q.push(t)}let rt=!1;const st=new Set;function ot(){if(!rt){rt=!0;do{for(let t=0;t<Y.length;t+=1){const e=Y[t];K(e),it(e.$$)}for(K(null),Y.length=0;X.length;)X.pop()();for(let t=0;t<Q.length;t+=1){const e=Q[t];st.has(e)||(st.add(e),e())}Q.length=0}while(Y.length);for(;Z.length;)Z.pop()();et=!1,rt=!1,st.clear()}}function it(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(nt)}}const at=new Set;let ct;function lt(){ct={r:0,c:[],p:ct}}function ut(){ct.r||s(ct.c),ct=ct.p}function ft(t,e){t&&t.i&&(at.delete(t),t.i(e))}function dt(t,e,n,r){if(t&&t.o){if(at.has(t))return;at.add(t),ct.c.push((()=>{at.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function ht(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const i=t[o],a=e[o];if(a){for(const t in i)t in a||(r[t]=1);for(const t in a)s[t]||(n[t]=a[t],s[t]=1);t[o]=a}else for(const t in i)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function pt(t){return"object"==typeof t&&null!==t?t:{}}function mt(t){t&&t.c()}function gt(t,e){t&&t.l(e)}function bt(t,e,r,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,r),i||nt((()=>{const e=c.map(n).filter(o);l?l.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(nt)}function vt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $t(t,e){-1===t.$$.dirty[0]&&(Y.push(t),et||(et=!0,tt.then(ot)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function _t(e,n,o,i,a,c,l,u=[-1]){const f=p;K(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:n.context||[]),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};l&&l(d.root);let h=!1;if(d.ctx=o?o(e,n.props||{},((t,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=s)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](s),h&&$t(e,t)),n})):[],d.update(),h=!0,s(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){m=!0;const t=L(n.target);d.fragment&&d.fragment.l(t),t.forEach(_)}else d.fragment&&d.fragment.c();n.intro&&ft(e.$$.fragment),bt(e,n.target,n.anchor,n.customElement),m=!1,ot()}K(f)}class wt{$destroy(){vt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const yt=[];function Et(e,n=t){let r;const s=new Set;function o(t){if(i(e,t)&&(e=t,r)){const t=!yt.length;for(const t of s)t[1](),yt.push(t,e);if(t){for(let t=0;t<yt.length;t+=2)yt[t][0](yt[t+1]);yt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(i,a=t){const c=[i,a];return s.add(c),1===s.size&&(r=n(o)||t),i(e),()=>{s.delete(c),0===s.size&&(r(),r=null)}}}}const xt={};var St={owner:"materialsproject",repo:"status",sites:[{name:"Materials Project Public",url:"https://materialsproject.org"},{name:"Materials Project Development",url:"https://next-gen.materialsproject.org"},{name:"Materials Project API",url:"https://api.materialsproject.org"},{name:"Materials Project Authentication",url:"https://profile.materialsproject.org"},{name:"MPContribs",url:"https://contribs.materialsproject.org"}],"status-website":{cname:"status.materialsproject.org",logoUrl:"https://next-gen.materialsproject.org/assets/images/home/materials-project-logo.svg",name:"Materials Project",introTitle:"**Materials Project** is an open-access database of predicted materials properties.",introMessage:"This status page reports the uptime for the services we provide and tracks any on-going incidents.",navbar:[{title:"Status",href:"/"},{title:"Materials Project",href:"https://materialsproject.org"}]},path:"https://status.materialsproject.org",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Tt(t,e,n){const r=t.slice();return r[1]=e[n],r}function At(e){let n,r,s,o=St["status-website"]&&!St["status-website"].hideNavLogo&&function(e){let n,r;return{c(){n=y("img"),this.h()},l(t){n=k(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){N(n,"alt",""),c(n.src,r=St["status-website"].logoUrl)||N(n,"src",r),N(n,"class","svelte-a08hsz")},m(t,e){$(t,n,e)},p:t,d(t){t&&_(n)}}}(),i=St["status-website"]&&!St["status-website"].hideNavTitle&&function(e){let n,r,s=St["status-website"].name+"";return{c(){n=y("div"),r=x(s)},l(t){n=k(t,"DIV",{});var e=L(n);r=O(e,s),e.forEach(_)},m(t,e){$(t,n,e),b(n,r)},p:t,d(t){t&&_(n)}}}();return{c(){n=y("div"),r=y("a"),o&&o.c(),s=S(),i&&i.c(),this.h()},l(t){n=k(t,"DIV",{});var e=L(n);r=k(e,"A",{href:!0,class:!0});var a=L(r);o&&o.l(a),s=C(a),i&&i.l(a),a.forEach(_),e.forEach(_),this.h()},h(){N(r,"href",St["status-website"].logoHref||St.path),N(r,"class","logo svelte-a08hsz")},m(t,e){$(t,n,e),b(n,r),o&&o.m(r,null),b(r,s),i&&i.m(r,null)},p(t,e){St["status-website"]&&!St["status-website"].hideNavLogo&&o.p(t,e),St["status-website"]&&!St["status-website"].hideNavTitle&&i.p(t,e)},d(t){t&&_(n),o&&o.d(),i&&i.d()}}}function Pt(t){let e,n,r,s,o,i,a=t[1].title+"";return{c(){e=y("li"),n=y("a"),r=x(a),i=S(),this.h()},l(t){e=k(t,"LI",{});var s=L(e);n=k(s,"A",{"aria-current":!0,href:!0,class:!0});var o=L(n);r=O(o,a),o.forEach(_),i=C(s),s.forEach(_),this.h()},h(){N(n,"aria-current",s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),N(n,"href",o=t[1].href.replace("$OWNER",St.owner).replace("$REPO",St.repo)),N(n,"class","svelte-a08hsz")},m(t,s){$(t,e,s),b(e,n),b(n,r),b(e,i)},p(t,e){1&e&&s!==(s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&N(n,"aria-current",s)},d(t){t&&_(e)}}}function Nt(e){let n,r,s,o,i,a=St["status-website"]&&St["status-website"].logoUrl&&At(),c=St["status-website"]&&St["status-website"].navbar&&function(t){let e,n=St["status-website"].navbar,r=[];for(let e=0;e<n.length;e+=1)r[e]=Pt(Tt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=T()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=T()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);$(t,e,n)},p(t,s){if(1&s){let o;for(n=St["status-website"].navbar,o=0;o<n.length;o+=1){const i=Tt(t,n,o);r[o]?r[o].p(i,s):(r[o]=Pt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){w(r,t),t&&_(e)}}}(e),l=St["status-website"]&&St["status-website"].navbarGitHub&&!St["status-website"].navbar&&function(e){let n,r,s,o=St.i18n.navGitHub+"";return{c(){n=y("li"),r=y("a"),s=x(o),this.h()},l(t){n=k(t,"LI",{});var e=L(n);r=k(e,"A",{href:!0,class:!0});var i=L(r);s=O(i,o),i.forEach(_),e.forEach(_),this.h()},h(){N(r,"href",`https://github.com/${St.owner}/${St.repo}`),N(r,"class","svelte-a08hsz")},m(t,e){$(t,n,e),b(n,r),b(r,s)},p:t,d(t){t&&_(n)}}}();return{c(){n=y("nav"),r=y("div"),a&&a.c(),s=S(),o=y("ul"),c&&c.c(),i=S(),l&&l.c(),this.h()},l(t){n=k(t,"NAV",{class:!0});var e=L(n);r=k(e,"DIV",{class:!0});var u=L(r);a&&a.l(u),s=C(u),o=k(u,"UL",{class:!0});var f=L(o);c&&c.l(f),i=C(f),l&&l.l(f),f.forEach(_),u.forEach(_),e.forEach(_),this.h()},h(){N(o,"class","svelte-a08hsz"),N(r,"class","container svelte-a08hsz"),N(n,"class","svelte-a08hsz")},m(t,e){$(t,n,e),b(n,r),a&&a.m(r,null),b(r,s),b(r,o),c&&c.m(o,null),b(o,i),l&&l.m(o,null)},p(t,[e]){St["status-website"]&&St["status-website"].logoUrl&&a.p(t,e),St["status-website"]&&St["status-website"].navbar&&c.p(t,e),St["status-website"]&&St["status-website"].navbarGitHub&&!St["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&_(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function It(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class Lt extends wt{constructor(t){super(),_t(this,t,It,Nt,i,{segment:0})}}var Rt={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function jt(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function kt(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ot(t,e){var n,r,s,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},f=0;function d(t){var e=Rt[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function h(){for(var t="";c.length;)t+=d(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=a.exec(t);)r=t.substring(f,s.index),f=a.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((i=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+jt(kt(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=s[6])?(i.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=Ot(jt(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):s[8]?n='<img src="'+kt(s[8])+'" alt="'+kt(s[7])+'">':s[10]?(l=l.replace("<a>",'<a href="'+kt(s[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(i="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+Ot(s[12]||s[15],u)+"</"+i+">":s[16]?n="<code>"+kt(s[16])+"</code>":(s[17]||s[1])&&(n=d(s[17]||"--"))),l+=r,l+=n;return(l+t.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function Ct(t,e,n){const r=t.slice();return r[3]=e[n],r}function Mt(t,e,n){const r=t.slice();return r[3]=e[n],r}function Ht(t,e,n){const r=t.slice();return r[8]=e[n],r}function Ut(e){let n;return{c(){n=y("link"),this.h()},l(t){n=k(t,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",`${St.path}/themes/${(St["status-website"]||{}).theme||"light"}.css`)},m(t,e){$(t,n,e)},p:t,d(t){t&&_(n)}}}function Dt(e){let n;return{c(){n=y("link"),this.h()},l(t){n=k(t,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",(St["status-website"]||{}).themeUrl)},m(t,e){$(t,n,e)},p:t,d(t){t&&_(n)}}}function Gt(e){let n,r;return{c(){n=y("script"),this.h()},l(t){n=k(t,"SCRIPT",{src:!0}),L(n).forEach(_),this.h()},h(){c(n.src,r=e[8].src)||N(n,"src",r),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){$(t,n,e)},p:t,d(t){t&&_(n)}}}function qt(e){let n;return{c(){n=y("link"),this.h()},l(t){n=k(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){N(n,"rel",e[3].rel),N(n,"href",e[3].href),N(n,"media",e[3].media)},m(t,e){$(t,n,e)},p:t,d(t){t&&_(n)}}}function Bt(e){let n;return{c(){n=y("meta"),this.h()},l(t){n=k(t,"META",{name:!0,content:!0}),this.h()},h(){N(n,"name",e[3].name),N(n,"content",e[3].content)},m(t,e){$(t,n,e)},p:t,d(t){t&&_(n)}}}function zt(e){let n,r,s,o,i,a,c,f,d,h,p,m,g,v,E,x,A,P,I=Ot(St.i18n.footer.replace(/\$REPO/,`https://github.com/${St.owner}/${St.repo}`))+"",R=(St["status-website"]||{}).customHeadHtml&&function(e){let n,r,s=(St["status-website"]||{}).customHeadHtml+"";return{c(){n=new z,r=T(),this.h()},l(t){n=H(t),r=T(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),$(t,r,e)},p:t,d(t){t&&_(r),t&&n.d()}}}();let j=((St["status-website"]||{}).themeUrl?Dt:Ut)(e),O=(St["status-website"]||{}).scripts&&function(t){let e,n=(St["status-website"]||{}).scripts,r=[];for(let e=0;e<n.length;e+=1)r[e]=Gt(Ht(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=T()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=T()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);$(t,e,n)},p(t,s){if(0&s){let o;for(n=(St["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=Ht(t,n,o);r[o]?r[o].p(i,s):(r[o]=Gt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){w(r,t),t&&_(e)}}}(e),M=(St["status-website"]||{}).links&&function(t){let e,n=(St["status-website"]||{}).links,r=[];for(let e=0;e<n.length;e+=1)r[e]=qt(Mt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=T()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=T()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);$(t,e,n)},p(t,s){if(0&s){let o;for(n=(St["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=Mt(t,n,o);r[o]?r[o].p(i,s):(r[o]=qt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){w(r,t),t&&_(e)}}}(e),U=(St["status-website"]||{}).metaTags&&function(t){let e,n=(St["status-website"]||{}).metaTags,r=[];for(let e=0;e<n.length;e+=1)r[e]=Bt(Ct(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=T()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=T()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);$(t,e,n)},p(t,s){if(0&s){let o;for(n=(St["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Ct(t,n,o);r[o]?r[o].p(i,s):(r[o]=Bt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){w(r,t),t&&_(e)}}}(e),D=St["status-website"].css&&function(e){let n,r,s=`<style>${St["status-website"].css}</style>`;return{c(){n=new z,r=T(),this.h()},l(t){n=H(t),r=T(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),$(t,r,e)},p:t,d(t){t&&_(r),t&&n.d()}}}(),G=St["status-website"].js&&function(e){let n,r,s=`<script>${St["status-website"].js}<\/script>`;return{c(){n=new z,r=T(),this.h()},l(t){n=H(t),r=T(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),$(t,r,e)},p:t,d(t){t&&_(r),t&&n.d()}}}(),q=(St["status-website"]||{}).customBodyHtml&&function(e){let n,r,s=(St["status-website"]||{}).customBodyHtml+"";return{c(){n=new z,r=T(),this.h()},l(t){n=H(t),r=T(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),$(t,r,e)},p:t,d(t){t&&_(r),t&&n.d()}}}();m=new Lt({props:{segment:e[0]}});const K=e[2].default,J=function(t,e,n,r){if(t){const s=l(t,e,n,r);return t[0](s)}}(K,e,e[1],null);return{c(){R&&R.c(),n=T(),j.c(),r=y("link"),s=y("link"),o=y("link"),O&&O.c(),i=T(),M&&M.c(),a=T(),U&&U.c(),c=T(),D&&D.c(),f=T(),G&&G.c(),d=T(),h=S(),q&&q.c(),p=S(),mt(m.$$.fragment),g=S(),v=y("main"),J&&J.c(),E=S(),x=y("footer"),A=y("p"),this.h()},l(t){const e=B('[data-svelte="svelte-ri9y7q"]',document.head);R&&R.l(e),n=T(),j.l(e),r=k(e,"LINK",{rel:!0,href:!0}),s=k(e,"LINK",{rel:!0,type:!0,href:!0}),o=k(e,"LINK",{rel:!0,type:!0,href:!0}),O&&O.l(e),i=T(),M&&M.l(e),a=T(),U&&U.l(e),c=T(),D&&D.l(e),f=T(),G&&G.l(e),d=T(),e.forEach(_),h=C(t),q&&q.l(t),p=C(t),gt(m.$$.fragment,t),g=C(t),v=k(t,"MAIN",{class:!0});var l=L(v);J&&J.l(l),l.forEach(_),E=C(t),x=k(t,"FOOTER",{class:!0});var u=L(x);A=k(u,"P",{}),L(A).forEach(_),u.forEach(_),this.h()},h(){N(r,"rel","stylesheet"),N(r,"href",`${St.path}/global.css`),N(s,"rel","icon"),N(s,"type","image/svg"),N(s,"href",(St["status-website"]||{}).faviconSvg||(St["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),N(o,"rel","icon"),N(o,"type","image/png"),N(o,"href",(St["status-website"]||{}).favicon||"/logo-192.png"),N(v,"class","container"),N(x,"class","svelte-jbr799")},m(t,e){R&&R.m(document.head,null),b(document.head,n),j.m(document.head,null),b(document.head,r),b(document.head,s),b(document.head,o),O&&O.m(document.head,null),b(document.head,i),M&&M.m(document.head,null),b(document.head,a),U&&U.m(document.head,null),b(document.head,c),D&&D.m(document.head,null),b(document.head,f),G&&G.m(document.head,null),b(document.head,d),$(t,h,e),q&&q.m(t,e),$(t,p,e),bt(m,t,e),$(t,g,e),$(t,v,e),J&&J.m(v,null),$(t,E,e),$(t,x,e),b(x,A),A.innerHTML=I,P=!0},p(t,[e]){(St["status-website"]||{}).customHeadHtml&&R.p(t,e),j.p(t,e),(St["status-website"]||{}).scripts&&O.p(t,e),(St["status-website"]||{}).links&&M.p(t,e),(St["status-website"]||{}).metaTags&&U.p(t,e),St["status-website"].css&&D.p(t,e),St["status-website"].js&&G.p(t,e),(St["status-website"]||{}).customBodyHtml&&q.p(t,e);const n={};1&e&&(n.segment=t[0]),m.$set(n),J&&J.p&&(!P||2&e)&&u(J,K,t,t[1],P?e:-1,null,null)},i(t){P||(ft(m.$$.fragment,t),ft(J,t),P=!0)},o(t){dt(m.$$.fragment,t),dt(J,t),P=!1},d(t){R&&R.d(t),_(n),j.d(t),_(r),_(s),_(o),O&&O.d(t),_(i),M&&M.d(t),_(a),U&&U.d(t),_(c),D&&D.d(t),_(f),G&&G.d(t),_(d),t&&_(h),q&&q.d(t),t&&_(p),vt(m,t),t&&_(g),t&&_(v),J&&J.d(t),t&&_(E),t&&_(x)}}}function Kt(t,e,n){let{$$slots:r={},$$scope:s}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[o,s,r]}class Jt extends wt{constructor(t){super(),_t(this,t,Kt,zt,i,{segment:0})}}function Vt(t){let e,n,r=t[1].stack+"";return{c(){e=y("pre"),n=x(r)},l(t){e=k(t,"PRE",{});var s=L(e);n=O(s,r),s.forEach(_)},m(t,r){$(t,e,r),b(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&U(n,r)},d(t){t&&_(e)}}}function Wt(e){let n,r,s,o,i,a,c,l,u,f=e[1].message+"";document.title=n=e[0];let d=e[2]&&e[1].stack&&Vt(e);return{c(){r=S(),s=y("h1"),o=x(e[0]),i=S(),a=y("p"),c=x(f),l=S(),d&&d.c(),u=T(),this.h()},l(t){B('[data-svelte="svelte-1moakz"]',document.head).forEach(_),r=C(t),s=k(t,"H1",{class:!0});var n=L(s);o=O(n,e[0]),n.forEach(_),i=C(t),a=k(t,"P",{class:!0});var h=L(a);c=O(h,f),h.forEach(_),l=C(t),d&&d.l(t),u=T(),this.h()},h(){N(s,"class","svelte-17w3omn"),N(a,"class","svelte-17w3omn")},m(t,e){$(t,r,e),$(t,s,e),b(s,o),$(t,i,e),$(t,a,e),b(a,c),$(t,l,e),d&&d.m(t,e),$(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&U(o,t[0]),2&e&&f!==(f=t[1].message+"")&&U(c,f),t[2]&&t[1].stack?d?d.p(t,e):(d=Vt(t),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:t,o:t,d(t){t&&_(r),t&&_(s),t&&_(i),t&&_(a),t&&_(l),d&&d.d(t),t&&_(u)}}}function Ft(t,e,n){let{status:r}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,false]}class Yt extends wt{constructor(t){super(),_t(this,t,Ft,Wt,i,{status:0,error:1})}}function Xt(t){let n,r,s;const o=[t[4].props];var i=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return i&&(n=new i(a())),{c(){n&&mt(n.$$.fragment),r=T()},l(t){n&&gt(n.$$.fragment,t),r=T()},m(t,e){n&&bt(n,t,e),$(t,r,e),s=!0},p(t,e){const s=16&e?ht(o,[pt(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){lt();const t=n;dt(t.$$.fragment,1,0,(()=>{vt(t,1)})),ut()}i?(n=new i(a()),mt(n.$$.fragment),ft(n.$$.fragment,1),bt(n,r.parentNode,r)):n=null}else i&&n.$set(s)},i(t){s||(n&&ft(n.$$.fragment,t),s=!0)},o(t){n&&dt(n.$$.fragment,t),s=!1},d(t){t&&_(r),n&&vt(n,t)}}}function Qt(t){let e,n;return e=new Yt({props:{error:t[0],status:t[1]}}),{c(){mt(e.$$.fragment)},l(t){gt(e.$$.fragment,t)},m(t,r){bt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(ft(e.$$.fragment,t),n=!0)},o(t){dt(e.$$.fragment,t),n=!1},d(t){vt(e,t)}}}function Zt(t){let e,n,r,s;const o=[Qt,Xt],i=[];function a(t,e){return t[0]?0:1}return e=a(t),n=i[e]=o[e](t),{c(){n.c(),r=T()},l(t){n.l(t),r=T()},m(t,n){i[e].m(t,n),$(t,r,n),s=!0},p(t,s){let c=e;e=a(t),e===c?i[e].p(t,s):(lt(),dt(i[c],1,1,(()=>{i[c]=null})),ut(),n=i[e],n?n.p(t,s):(n=i[e]=o[e](t),n.c()),ft(n,1),n.m(r.parentNode,r))},i(t){s||(ft(n),s=!0)},o(t){dt(n),s=!1},d(t){i[e].d(t),t&&_(r)}}}function te(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[Zt]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new Jt({props:o}),{c(){mt(n.$$.fragment)},l(t){gt(n.$$.fragment,t)},m(t,e){bt(n,t,e),r=!0},p(t,[e]){const r=12&e?ht(s,[4&e&&{segment:t[2][0]},8&e&&pt(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(ft(n.$$.fragment,t),r=!0)},o(t){dt(n.$$.fragment,t),r=!1},d(t){vt(n,t)}}}function ee(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:i}=e,{level0:a}=e,{level1:c=null}=e,{notify:l}=e;var u,f;return W(l),u=xt,f=r,J().$$.context.set(u,f),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[s,o,i,a,c,r,l]}class ne extends wt{constructor(t){super(),_t(this,t,ee,te,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const re=[],se=[{js:()=>Promise.all([import("./index.96ba638b.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.d73d2363.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].91e95957.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].2d7b2857.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-bc1bb552.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.6d5a4d87.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],oe=(ie=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:ie(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:ie(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ie;
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
function ae(t,e,n,r){return new(n||(n=Promise))((function(s,o){function i(t){try{c(r.next(t))}catch(t){o(t)}}function a(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}c((r=r.apply(t,e||[])).next())}))}function ce(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let le,ue=1;const fe="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},de={};let he,pe;function me(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function ge(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(he))return null;let e=t.pathname.slice(he.length);if(""===e&&(e="/"),!re.some((t=>t.test(e))))for(let n=0;n<oe.length;n+=1){const r=oe[n],s=r.pattern.exec(e);if(s){const n=me(t.search),o=r.parts[r.parts.length-1],i=o.params?o.params(s):{},a={host:location.host,path:e,query:n,params:i};return{href:t.href,route:r,match:s,page:a}}}}function be(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=ce(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=ge(s);if(o){_e(o,null,e.hasAttribute("sapper:noscroll"),s.hash),t.preventDefault(),fe.pushState({id:le},"",s.href)}}function ve(){return{x:pageXOffset,y:pageYOffset}}function $e(t){if(de[le]=ve(),t.state){const e=ge(new URL(location.href));e?_e(e,t.state.id):location.href=location.href}else!function(t){ue=t}(ue+1),function(t){le=t}(ue),fe.replaceState({id:le},"",location.href)}function _e(t,e,n,r){return ae(this,void 0,void 0,(function*(){const s=!!e;if(s)le=e;else{const t=ve();de[le]=t,le=e=++ue,de[le]=n?t:{x:0,y:0}}if(yield pe(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=de[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),de[le]=n,n&&(s||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function we(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let ye,Ee=null;function xe(t){const e=ce(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=ge(new URL(t,we(document)));if(e)Ee&&t===Ee.href||(Ee={href:t,promise:Ge(e)}),Ee.promise}(e.href)}function Se(t){clearTimeout(ye),ye=setTimeout((()=>{xe(t)}),20)}function Te(t,e={noscroll:!1,replaceState:!1}){const n=ge(new URL(t,we(document)));if(n){const r=_e(n,null,e.noscroll);return fe[e.replaceState?"replaceState":"pushState"]({id:le},"",t),r}return location.href=t,new Promise((()=>{}))}const Ae="undefined"!=typeof __SAPPER__&&__SAPPER__;let Pe,Ne,Ie,Le=!1,Re=[],je="{}";const ke={page:function(t){const e=Et(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:Et(null),session:Et(Ae&&Ae.session)};let Oe,Ce,Me;function He(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Ue(t){return ae(this,void 0,void 0,(function*(){Pe&&ke.preloading.set(!0);const e=function(t){return Ee&&Ee.href===t.href?Ee.promise:Ge(t)}(t),n=Ne={},r=yield e,{redirect:s}=r;if(n===Ne)if(s)yield Te(s.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield De(n,e,He(e,t.page))}}))}function De(t,e,n){return ae(this,void 0,void 0,(function*(){ke.page.set(n),ke.preloading.set(!1),Pe?Pe.$set(e):(e.stores={page:{subscribe:ke.page.subscribe},preloading:{subscribe:ke.preloading.subscribe},session:ke.session},e.level0={props:yield Ie},e.notify=ke.page.notify,Pe=new ne({target:Me,props:e,hydrate:!0})),Re=t,je=JSON.stringify(n.query),Le=!0,Ce=!1}))}function Ge(t){return ae(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Ie){const t=()=>({});Ie=Ae.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Oe)}let a,c=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>ae(this,void 0,void 0,(function*(){const f=r[a];if(function(t,e,n,r){if(r!==je)return!0;const s=Re[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,f,l,s)&&(u=!0),o.segments[c]=r[a+1],!e)return{segment:f};const d=c++;let h;if(Ce||u||!Re[a]||Re[a].part!==e.i){u=!1;const{default:r,preload:s}=yield se[e.i].js();let o;o=Le||!Ae.preloaded[a+1]?s?yield s.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Oe):{}:Ae.preloaded[a+1],h={component:r,props:o,segment:f,match:l,part:e.i}}else h=Re[a];return o[`level${d}`]=h})))))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}))}var qe,Be,ze;ke.session.subscribe((t=>ae(void 0,void 0,void 0,(function*(){if(Oe=t,!Le)return;Ce=!0;const e=ge(new URL(location.href)),n=Ne={},{redirect:r,props:s,branch:o}=yield Ge(e);n===Ne&&(r?yield Te(r.location,{replaceState:!0}):yield De(o,s,He(s,e.page)))})))),qe={target:document.querySelector("#sapper")},Be=qe.target,Me=Be,ze=Ae.baseUrl,he=ze,pe=Ue,"scrollRestoration"in fe&&(fe.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{fe.scrollRestoration="auto"})),addEventListener("load",(()=>{fe.scrollRestoration="manual"})),addEventListener("click",be),addEventListener("popstate",$e),addEventListener("touchstart",xe),addEventListener("mousemove",Se),Ae.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:s,status:o,error:i}=Ae;Ie||(Ie=s&&s[0]);const a={error:i,status:o,session:r,level0:{props:Ie},level1:{props:{status:o,error:i},component:Yt},segments:s},c=me(n);De([],a,{host:t,path:e,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;fe.replaceState({id:ue},"",e);const n=ge(new URL(location.href));if(n)return _e(n,ue,!0,t)}));export{vt as A,A as B,s as C,X as D,H as E,c as F,d as G,z as H,B as I,Ot as J,E as K,Te as L,D as M,P as N,e as O,I as P,ht as Q,W as R,wt as S,F as T,f as U,pt as V,nt as W,q as X,L as a,O as b,k as c,_ as d,y as e,N as f,$ as g,b as h,_t as i,S as j,C as k,lt as l,dt as m,t as n,ut as o,ft as p,V as q,St as r,i as s,x as t,U as u,T as v,w,mt as x,gt as y,bt as z};

import __inject_styles from './inject_styles.803b7e80.js';