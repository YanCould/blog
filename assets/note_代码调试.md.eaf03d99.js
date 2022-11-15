import{_ as s,o as a,c as e,d as n}from"./app.f3266ba5.js";const _=JSON.parse('{"title":"JS\u8C03\u8BD5","description":"","frontmatter":{},"headers":[{"level":3,"title":"JS\u8C03\u8BD5","slug":"js\u8C03\u8BD5"},{"level":3,"title":"Chrome\u8C03\u8BD5","slug":"chrome\u8C03\u8BD5"}],"relativePath":"note/\u4EE3\u7801\u8C03\u8BD5.md"}'),o={name:"note/\u4EE3\u7801\u8C03\u8BD5.md"},p=n(`<p>\u53C2\u8003\u6587\u7AE0\uFF1A<a href="https://juejin.cn/post/7030584939020042254" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/7030584939020042254</a></p><p>\u9047\u5230\u56F0\u96BE\uFF1A\u62C9\u53D6\u4EE3\u7801\u62A5\u9519OpenSSL SSL_read: Connection was reset, errno 10054</p><p>\u89E3\u51B3\u65B9\u6CD5\uFF1A\u8F93\u5165\u4E0B\u9762\u4EE3\u7801\uFF0C\u91CD\u65B0\u6253\u5F00cmd</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git config --global http.sslVerify &quot;false&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="js\u8C03\u8BD5" tabindex="-1">JS\u8C03\u8BD5 <a class="header-anchor" href="#js\u8C03\u8BD5" aria-hidden="true">#</a></h3><p>1\u3001Vscode \u8BBE\u7F6Eauto-attach</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Ctrl+shift+P \u67E5\u8BE2auto-attach\uFF0C\u8BBE\u7F6E\u4E3A \u667A\u80FD</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>2\u3001\u8C03\u8BD5Package.json</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u70B9\u51FB\u2018\u8C03\u8BD5\u2019\uFF0C\u9009\u62E9 \u8FD0\u884C\u811A\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>3\u3001\u65AD\u70B9\u8C03\u8BD5JS</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">js\u6587\u4EF6\u8BBE\u7F6E\u65AD\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">Ctrl+\` \u6253\u5F00\u7EC8\u7AEF</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8FD0\u884C-\u9009\u62E9\u8C03\u8BD5\u547D\u4EE4 : scripts\u4E2D\u7684\u914D\u7F6E \uFF08yarn run dev\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="chrome\u8C03\u8BD5" tabindex="-1">Chrome\u8C03\u8BD5 <a class="header-anchor" href="#chrome\u8C03\u8BD5" aria-hidden="true">#</a></h3><p>\u6398\u91D1\u5C0F\u4E66\uFF1A<a href="https://juejin.cn/book/6844733783166418958/section/6844733783208361991" target="_blank" rel="noopener noreferrer">https://juejin.cn/book/6844733783166418958/section/6844733783208361991</a></p><p>\u5FEB\u6377\u952E\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">ctrl+shift+D</span></span>
<span class="line"><span style="color:#A6ACCD;">ctrl+p</span></span>
<span class="line"><span style="color:#A6ACCD;">ctrl+ 1~9</span></span>
<span class="line"><span style="color:#A6ACCD;">ctrl+[</span></span>
<span class="line"><span style="color:#A6ACCD;">ctrl+]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="_1\u3001\u63A7\u5236\u53F0\u8F93\u5165\uFF1A-0\u3001-1" tabindex="-1">1\u3001\u63A7\u5236\u53F0\u8F93\u5165\uFF1A$0\u3001 $1 <a class="header-anchor" href="#_1\u3001\u63A7\u5236\u53F0\u8F93\u5165\uFF1A-0\u3001-1" aria-hidden="true">#</a></h5><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$0- Elements \u9762\u677F\u4E2D$0 \u662F\u5BF9\u6211\u4EEC\u5F53\u524D\u9009\u4E2D\u7684 html \u8282\u70B9\u7684\u5F15\u7528\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">$1- $1 \u662F\u5BF9\u4E0A\u4E00\u6B21\u6211\u4EEC\u9009\u62E9\u7684\u8282\u70B9\u7684\u5F15\u7528\uFF0C$2 \u662F\u5BF9\u5728\u90A3\u4E4B\u524D\u9009\u62E9\u7684\u8282\u70B9\u7684\u5F15\u7528,\u4E00\u76F4\u5230 $4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="_2\u3001\u6D4F\u89C8\u5668\u4F7F\u7528npm\u5305" tabindex="-1">2\u3001\u6D4F\u89C8\u5668\u4F7F\u7528npm\u5305 <a class="header-anchor" href="#_2\u3001\u6D4F\u89C8\u5668\u4F7F\u7528npm\u5305" aria-hidden="true">#</a></h5><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u5B89\u88C5\u63D2\u4EF6\uFF1AConsole Importer </span></span>
<span class="line"><span style="color:#A6ACCD;">\u63A7\u5236\u53F0\u8FD0\u884C:  $i(&#39;lodash&#39;) \u6216\u8005 $i(&#39;moment&#39;) ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="_3\u3001conditional-breakpoints\u6761\u4EF6\u65AD\u70B9" tabindex="-1">3\u3001Conditional breakpoints\u6761\u4EF6\u65AD\u70B9 <a class="header-anchor" href="#_3\u3001conditional-breakpoints\u6761\u4EF6\u65AD\u70B9" aria-hidden="true">#</a></h5><ul><li>\u53F3\u51FB\u884C\u53F7\uFF0C\u9009\u62E9 <code>Add conditional breakpoint...(\u6DFB\u52A0\u6761\u4EF6\u65AD\u70B9)</code></li><li>\u6216\u8005\u53F3\u51FB\u4E00\u4E2A\u5DF2\u7ECF\u8BBE\u7F6E\u7684\u65AD\u70B9\u5E76\u4E14\u9009\u62E9 <code>Edit breakpoint(\u7F16\u8F91\u65AD\u70B9)</code></li><li>\u7136\u540E\u8F93\u5165\u4E00\u4E2A\u6267\u884C\u7ED3\u679C\u4E3A <code>true</code> \u6216\u8005 <code>false</code> \u7684\u8868\u8FBE\u5F0F\uFF08\u5B83\u7684\u503C\u5176\u5B9E\u4E0D\u9700\u8981\u5B8C\u5168\u4E3A <code>true</code> \u6216\u8005 <code>false</code> \u5C3D\u7BA1\u90A3\u4E2A\u5F39\u51FA\u6846\u7684\u63CF\u8FF0\u662F\u8FD9\u6837\u8BF4\u7684\uFF09\u3002</li></ul><h6 id="\u8F93\u5165\u4E00\u4E0B\u6761\u4EF6\u6253\u5370\u4E0D\u540C\u5F62\u5F0F" tabindex="-1">\u8F93\u5165\u4E00\u4E0B\u6761\u4EF6\u6253\u5370\u4E0D\u540C\u5F62\u5F0F <a class="header-anchor" href="#\u8F93\u5165\u4E00\u4E0B\u6761\u4EF6\u6253\u5370\u4E0D\u540C\u5F62\u5F0F" aria-hidden="true">#</a></h6><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">console.log / console.table / console.time</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="_4\u3001monitorevent-\u76D1\u542C\u83B7\u53D6\u4E8B\u4EF6" tabindex="-1">4\u3001monitorEvent \u76D1\u542C\u83B7\u53D6\u4E8B\u4EF6 <a class="header-anchor" href="#_4\u3001monitorevent-\u76D1\u542C\u83B7\u53D6\u4E8B\u4EF6" aria-hidden="true">#</a></h5><p>\u9009\u62E9\u6709\u4E8B\u4EF6\u7684\u5143\u7D20\uFF1B</p><p>\u63A7\u5236\u53F0\u8F93\u5165\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">monitorEvents($0,&#39;click&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="_5\u3001monitor-\u76D1\u542C\u65B9\u6CD5" tabindex="-1">5\u3001monitor \u76D1\u542C\u65B9\u6CD5 <a class="header-anchor" href="#_5\u3001monitor-\u76D1\u542C\u65B9\u6CD5" aria-hidden="true">#</a></h5><p><code>monitor</code> \u662F <code>DevTools</code> \u7684\u4E00\u4E2A\u65B9\u6CD5\uFF0C \u5B83\u80FD\u591F\u8BA9\u4F60 <code>\u201C\u6F5C\u5165\u201D</code> \u5230\u4EFB\u4F55 <code>_function calls(\u65B9\u6CD5\u7684\u8C03\u7528)</code> \u4E2D\uFF1A\u6BCF\u5F53\u4E00\u4E2A <code>\u88AB\u6F5C\u5165</code> \u7684\u65B9\u6CD5\u8FD0\u884C\u7684\u65F6\u5019\uFF0C<code>console \u63A7\u5236\u53F0</code> \u4F1A\u628A\u5B83\u7684\u5B9E\u4F8B\u6253\u5370\u51FA\u6765\uFF0C\u5305\u542B <strong>\u51FD\u6570\u540D</strong> \u4EE5\u53CA <strong>\u8C03\u7528\u5B83\u7684\u53C2\u6570</strong> \u3002</p><h5 id="_6\u3001queryobjects-\uFF08\u5BF9\u8C61\u67E5\u8BE2\uFF09\u65B9\u6CD5" tabindex="-1">6\u3001<code>queryObjects</code> \uFF08\u5BF9\u8C61\u67E5\u8BE2\uFF09\u65B9\u6CD5 <a class="header-anchor" href="#_6\u3001queryobjects-\uFF08\u5BF9\u8C61\u67E5\u8BE2\uFF09\u65B9\u6CD5" aria-hidden="true">#</a></h5><p>\u63A7\u5236\u53F0\u8F93\u5165\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">queryObjects(\u5BF9\u8C61);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>console.dir()</p><p>console.assert()</p><p>console.table()</p><h5 id="_7\u3001\u76D1\u6D4B\u6267\u884C\u65F6\u95F4-\uFF08js\u4E2D\uFF09" tabindex="-1">7\u3001\u76D1\u6D4B\u6267\u884C\u65F6\u95F4 \uFF08js\u4E2D\uFF09 <a class="header-anchor" href="#_7\u3001\u76D1\u6D4B\u6267\u884C\u65F6\u95F4-\uFF08js\u4E2D\uFF09" aria-hidden="true">#</a></h5><p><code>console.time()</code> \u2014 \u5F00\u542F\u4E00\u4E2A\u8BA1\u65F6\u5668</p><p><code>console.timeEnd()</code> \u2014 \u7ED3\u675F\u8BA1\u65F6\u5E76\u4E14\u5C06\u7ED3\u679C\u5728 <code>console</code> \u4E2D\u6253\u5370\u51FA\u6765</p><h5 id="_8\u3001-\u901A\u8FC7-h-\u6765\u9690\u85CF\u5143\u7D20" tabindex="-1">8\u3001 \u901A\u8FC7 <code>&#39;h&#39;</code> \u6765\u9690\u85CF\u5143\u7D20 <a class="header-anchor" href="#_8\u3001-\u901A\u8FC7-h-\u6765\u9690\u85CF\u5143\u7D20" aria-hidden="true">#</a></h5><p>\u6309\u4E00\u4E0B <code>&#39;h&#39;</code> \u5C31\u53EF\u4EE5\u9690\u85CF\u4F60\u5728\u5143\u7D20\u9762\u677F\u4E2D\u9009\u62E9\u7684\u5143\u7D20\uFF0C\u518D\u6B21\u6309\u4E0B &#39;<code>h</code>&#39; \u53EF\u4EE5\u4F7F\u5B83\u51FA\u73B0\u3002</p>`,40),c=[p];function l(r,t,d,i,h,C){return a(),e("div",null,c)}var u=s(o,[["render",l]]);export{_ as __pageData,u as default};
