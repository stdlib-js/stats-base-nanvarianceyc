"use strict";var p=function(r,v){return function(){return v||r((v={exports:{}}).exports,v),v.exports}};var l=p(function(C,k){
function j(r,v,c,u,b){var s,i,y,t,q,a,e,f,n,o;if(s=c.data,i=c.accessors[0],r===1||u===0)return e=i(s,b),e===e&&r-v>0?0:NaN;for(t=b,o=0;o<r&&(e=i(s,t),e!==e);o++)t+=u;if(o===r)return NaN;for(t+=u,y=e,a=0,o+=1,n=1,o;o<r;o++)e=i(s,t),e===e&&(n+=1,y+=e,f=n*e-y,a+=1/(n*(n-1))*f*f),t+=u;return q=n-v,q<=0?NaN:a/q}k.exports=j
});var x=p(function(D,m){
var O=require('@stdlib/array-base-arraylike2object/dist'),P=l();function R(r,v,c,u,b){var s,i,y,t,q,a,e,f,n;if(r<=0)return NaN;if(q=O(c),q.accessorProtocol)return P(r,v,q,u,b);if(r===1||u===0)return a=c[b],a===a&&r-v>0?0:NaN;for(i=b,n=0;n<r&&(a=c[i],a!==a);n++)i+=u;if(n===r)return NaN;for(i+=u,s=a,t=0,n+=1,f=1,n;n<r;n++)a=c[i],a===a&&(f+=1,s+=a,e=f*a-s,t+=1/(f*(f-1))*e*e),i+=u;return y=f-v,y<=0?NaN:t/y}m.exports=R
});var S=p(function(E,N){
var d=require('@stdlib/strided-base-stride2offset/dist'),h=x();function w(r,v,c,u){return h(r,v,c,u,d(r,u))}N.exports=w
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=S(),A=x();z(g,"ndarray",A);module.exports=g;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
