import test from "node:test";import assert from "node:assert/strict";import{encodeHtmlEntities,decodeHtmlEntities}from"../src/index.js";
test("encode",()=>assert.equal(encodeHtmlEntities('<a title="x&y">'),'&lt;a title=&quot;x&amp;y&quot;&gt;'));
test("decode named",()=>assert.equal(decodeHtmlEntities("&lt;&amp;&gt;"),"<&>"));
test("decode numeric",()=>assert.equal(decodeHtmlEntities("&#65;&#x42;"),"AB"));
