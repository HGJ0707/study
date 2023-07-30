import{_ as a,o as s,c as n,V as e}from"./chunks/framework.6cf64ba1.js";const _=JSON.parse('{"title":"一对一、join 查询、级联方式","description":"","frontmatter":{},"headers":[],"relativePath":"after-end/mysql/3-一对一、join 查询、级联方式.md","filePath":"after-end/mysql/3-一对一、join 查询、级联方式.md","lastUpdated":1690729027000}'),l={name:"after-end/mysql/3-一对一、join 查询、级联方式.md"},o=e(`<h1 id="一对一、join-查询、级联方式" tabindex="-1">一对一、join 查询、级联方式 <a class="header-anchor" href="#一对一、join-查询、级联方式" aria-label="Permalink to &quot;一对一、join 查询、级联方式&quot;">​</a></h1><h2 id="join-on" tabindex="-1">JOIN ON <a class="header-anchor" href="#join-on" aria-label="Permalink to &quot;JOIN ON&quot;">​</a></h2><p>多表关联查询</p><div class="language-SQL"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> user.id, </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, id_card.id </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;"> card_id, card_name</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> user</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">JOIN</span><span style="color:#A6ACCD;"> id_card </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> user.id </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> id_card.user_id;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 等于</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> user.id, </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, id_card.id </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;"> card_id, card_name</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> user</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">INNER JOIN</span><span style="color:#A6ACCD;"> id_card </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> user.id </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> id_card.user_id;</span></span></code></pre></div><h2 id="left-join-on" tabindex="-1">LEFT JOIN ON <a class="header-anchor" href="#left-join-on" aria-label="Permalink to &quot;LEFT JOIN ON&quot;">​</a></h2><p>额外返回左表中没有关联上的数据</p><div class="language-SQL"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> user.id, </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, id_card.id </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;"> card_id, card_name</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> user</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">LEFT JOIN</span><span style="color:#A6ACCD;"> id_card </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> user.id </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> id_card.user_id;</span></span></code></pre></div><h2 id="right-join-on" tabindex="-1">RIGHT JOIN ON <a class="header-anchor" href="#right-join-on" aria-label="Permalink to &quot;RIGHT JOIN ON&quot;">​</a></h2><p>额外返回右表中没有关联上的数据</p><div class="language-SQL"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> user.id, </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, id_card.id </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;"> card_id, card_name</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> user</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">RIGHT JOIN</span><span style="color:#A6ACCD;"> id_card </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> user.id </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> id_card.user_id;</span></span></code></pre></div><h2 id="多表删除和更新时的级联操作" tabindex="-1">多表删除和更新时的级联操作 <a class="header-anchor" href="#多表删除和更新时的级联操作" aria-label="Permalink to &quot;多表删除和更新时的级联操作&quot;">​</a></h2><h3 id="_1-restict-默认" tabindex="-1">1.RESTICT (默认) <a class="header-anchor" href="#_1-restict-默认" aria-label="Permalink to &quot;1.RESTICT (默认)&quot;">​</a></h3><p>只有没有从表的关联记录时，才允许删除主表记录或者更新主表记录的主键 <code>id</code> 。</p><h3 id="_2-no-action" tabindex="-1">2.NO ACTION <a class="header-anchor" href="#_2-no-action" aria-label="Permalink to &quot;2.NO ACTION&quot;">​</a></h3><p>在 <code>mysql</code> 里面 <code> NO ACTION</code> 等同于 <code>RESTRICT</code> 。</p><h3 id="_3-cascade" tabindex="-1">3.CASCADE <a class="header-anchor" href="#_3-cascade" aria-label="Permalink to &quot;3.CASCADE&quot;">​</a></h3><p>主表主键更新，从表关联记录的外键跟着更新，主表记录删除，从表关联记录删除。</p><h3 id="_4-set-null" tabindex="-1">4.SET NULL <a class="header-anchor" href="#_4-set-null" aria-label="Permalink to &quot;4.SET NULL&quot;">​</a></h3><p>主表主键更新或者主表记录删除，从表关联记录的外键设置为 <code>null</code> 。</p>`,19),p=[o];function r(t,c,C,i,d,A){return s(),n("div",null,p)}const h=a(l,[["render",r]]);export{_ as __pageData,h as default};
