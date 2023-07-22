import{_ as a,o as e,c as t,U as o}from"./chunks/framework.76fefcb6.js";const f=JSON.parse('{"title":"变量声明","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/javascript/1-变量声明.md","filePath":"front-end/javascript/1-变量声明.md"}'),n={name:"front-end/javascript/1-变量声明.md"},r=o('<h1 id="变量声明" tabindex="-1">变量声明 <a class="header-anchor" href="#变量声明" aria-label="Permalink to &quot;变量声明&quot;">​</a></h1><h2 id="三种声明方式" tabindex="-1">三种声明方式 <a class="header-anchor" href="#三种声明方式" aria-label="Permalink to &quot;三种声明方式&quot;">​</a></h2><h4 id="var" tabindex="-1">var <a class="header-anchor" href="#var" aria-label="Permalink to &quot;var&quot;">​</a></h4><p>声明一个<strong>变量</strong>，初始值为undefined，可选初始化一个值。</p><h4 id="let" tabindex="-1">let <a class="header-anchor" href="#let" aria-label="Permalink to &quot;let&quot;">​</a></h4><p>声明一个块作用域的<strong>局部变量</strong>，初始值为undefined，可选初始化一个值。</p><h4 id="const" tabindex="-1">const <a class="header-anchor" href="#const" aria-label="Permalink to &quot;const&quot;">​</a></h4><p>声明一个块作用域的只读<strong>常量</strong>。常量不可以通过重新赋值改变其值，也不可以在代码运行时重新声明。它必须被初始化为某个值。</p><h2 id="变量作用域" tabindex="-1">变量作用域 <a class="header-anchor" href="#变量作用域" aria-label="Permalink to &quot;变量作用域&quot;">​</a></h2><h4 id="全局变量" tabindex="-1">全局变量 <a class="header-anchor" href="#全局变量" aria-label="Permalink to &quot;全局变量&quot;">​</a></h4><p>在函数之外声明的变量，叫做<strong>全局变量</strong>，因为它可被当前文档中的任何其他代码所访问。</p><h4 id="局部变量" tabindex="-1">局部变量 <a class="header-anchor" href="#局部变量" aria-label="Permalink to &quot;局部变量&quot;">​</a></h4><p>在函数内部声明的变量，叫做<strong>局部变量</strong>，因为它只能在当前函数的内部访问。</p><h2 id="变量提升" tabindex="-1">变量提升 <a class="header-anchor" href="#变量提升" aria-label="Permalink to &quot;变量提升&quot;">​</a></h2><p>JavaScript 可以先使用变量稍后再声明变量而不会引发异常。这一概念称为变量提升；JavaScript 变量感觉上是被“提升”或移到了函数或语句的最前面。</p><p>提升后的变量将返回 undefined 值。因此在使用或引用某个变量之后进行声明和初始化操作，这个被提升的变量仍将返回 undefined 值。</p><h2 id="函数提升" tabindex="-1">函数提升 <a class="header-anchor" href="#函数提升" aria-label="Permalink to &quot;函数提升&quot;">​</a></h2><p>对于函数来说，只有函数声明会被提升到顶部，而函数表达式不会被提升（报错）。</p><h4 id="函数声明" tabindex="-1">函数声明 <a class="header-anchor" href="#函数声明" aria-label="Permalink to &quot;函数声明&quot;">​</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span></code></pre></div><h4 id="函数表达式" tabindex="-1">函数表达式 <a class="header-anchor" href="#函数表达式" aria-label="Permalink to &quot;函数表达式&quot;">​</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> baz </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span></code></pre></div><h2 id="对比-var-let-const" tabindex="-1">对比 var-let-const <a class="header-anchor" href="#对比-var-let-const" aria-label="Permalink to &quot;对比 var-let-const&quot;">​</a></h2><h4 id="变量提升-1" tabindex="-1">变量提升 <a class="header-anchor" href="#变量提升-1" aria-label="Permalink to &quot;变量提升&quot;">​</a></h4><p>var声明的变量会进行变量提升，初始值为undefined；let和const同样会被提升变量到代码块的顶部但是不会被赋予初始值。在变量声明之前引用这个变量，将抛出引用错误（ReferenceError）。这个变量将从代码块一开始的时候就处在一个“暂时性死区”，直到这个变量被声明为止。</p><h4 id="作用域范围" tabindex="-1">作用域范围 <a class="header-anchor" href="#作用域范围" aria-label="Permalink to &quot;作用域范围&quot;">​</a></h4><p>var声明的范围是全局作用域；let声明的是块级作用域，用let声明的循环变量，会特殊处理，每次进入循环体，都会开启一个新的作用域，并且将循环变量绑定到该作用域(每次循环，使用的是一个全新的循环变量)。循环结束后，变量销毁；</p><h4 id="允许重复声明" tabindex="-1">允许重复声明 <a class="header-anchor" href="#允许重复声明" aria-label="Permalink to &quot;允许重复声明&quot;">​</a></h4><p>var允许重复声明同一个变量，let和const同一个作用域重复声明会报错。</p><h4 id="全局对象" tabindex="-1">全局对象 <a class="header-anchor" href="#全局对象" aria-label="Permalink to &quot;全局对象&quot;">​</a></h4><p>var声明的变量会挂载到全局对象window上，let和const不会。</p>',31),s=[r];function l(i,c,h,d,p,u){return e(),t("div",null,s)}const q=a(n,[["render",l]]);export{f as __pageData,q as default};
