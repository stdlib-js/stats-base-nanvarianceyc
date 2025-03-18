"use strict";var x=function(r,v){return function(){return v||r((v={exports:{}}).exports,v),v.exports}};var l=x(function(F,k){
function P(r,v,f,u,p){var s,i,y,t,q,a,e,c,n,o;if(s=f.data,i=f.accessors[0],r===1||u===0)return e=i(s,p),e===e&&r-v>0?0:NaN;for(t=p,o=0;o<r&&(e=i(s,t),e!==e);o++)t+=u;if(o===r)return NaN;for(t+=u,y=e,a=0,o+=1,n=1,o;o<r;o++)e=i(s,t),e===e&&(n+=1,y+=e,c=n*e-y,a+=1/(n*(n-1))*c*c),t+=u;return q=n-v,q<=0?NaN:a/q}k.exports=P
});var b=x(function(G,m){
var R=require('@stdlib/array-base-arraylike2object/dist'),d=l();function h(r,v,f,u,p){var s,i,y,t,q,a,e,c,n;if(r<=0)return NaN;if(q=R(f),q.accessorProtocol)return d(r,v,q,u,p);if(r===1||u===0)return a=f[p],a===a&&r-v>0?0:NaN;for(i=p,n=0;n<r&&(a=f[i],a!==a);n++)i+=u;if(n===r)return NaN;for(i+=u,s=a,t=0,n+=1,c=1,n;n<r;n++)a=f[i],a===a&&(c+=1,s+=a,e=c*a-s,t+=1/(c*(c-1))*e*e),i+=u;return y=c-v,y<=0?NaN:t/y}m.exports=h
});var S=x(function(H,N){
var w=require('@stdlib/strided-base-stride2offset/dist'),z=b();function A(r,v,f,u){return z(r,v,f,u,w(r,u))}N.exports=A
});var O=x(function(I,j){
var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=S(),C=b();B(g,"ndarray",C);j.exports=g
});var D=O();module.exports=D;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
