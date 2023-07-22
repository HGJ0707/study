import{_ as s,o as a,c as n,U as l}from"./chunks/framework.76fefcb6.js";const A=JSON.parse('{"title":"包装类","description":"","frontmatter":{},"headers":[],"relativePath":"zh/javascript/11-包装类.md","filePath":"zh/javascript/11-包装类.md"}'),o={name:"zh/javascript/11-包装类.md"},p=l(`<h1 id="包装类" tabindex="-1">包装类 <a class="header-anchor" href="#包装类" aria-label="Permalink to &quot;包装类&quot;">​</a></h1><p><code>JavaScript</code> 中为了便于基本类型操作，提供了 3 个特殊的引用类型：</p><ul><li><code>new String();</code></li><li><code>new Number();</code></li><li><code>new Boolean();</code></li></ul><p>每当读取一个基本类型的时候，<code>JavaScript</code> 内部会自动创建一个基本包装类型对象，可以让我们调用一些方法来进行操作。</p><h2 id="包装类的过程" tabindex="-1">包装类的过程 <a class="header-anchor" href="#包装类的过程" aria-label="Permalink to &quot;包装类的过程&quot;">​</a></h2><ol><li><p>创建当前基本类型的实例；</p></li><li><p>在实例上调用指定的方法；</p></li><li><p>最后销毁该实例；</p></li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> str1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">substring</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(str1)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// llo</span></span></code></pre></div><h2 id="包装类和引用类型的区别" tabindex="-1">包装类和引用类型的区别 <a class="header-anchor" href="#包装类和引用类型的区别" aria-label="Permalink to &quot;包装类和引用类型的区别&quot;">​</a></h2><p>包装类和引用类型最主要的区别是生命周期：</p><p><strong>引用类型：使用 <code>new</code> 操作符创建的引用类型实例，在执行流离开当前作用域之前一直都保存在内存中；</strong></p><p><strong>基本包装类型：只存在一行代码的执行瞬间，然后立即销毁；</strong></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>基本包装类意味着我们不能在运行时为对象添加属性及方法，因为它们执行完后会立即销毁；</p></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">str </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> test </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> str</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (test</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">test</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sign</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">typeof结果为string</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//但是原始值没有方法，隐式调用new String()后会删除</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(test</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sign)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//所以删除后，test还是没有方法，值为undefined</span></span></code></pre></div>`,13),e=[p];function t(c,r,D,y,i,F){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};
