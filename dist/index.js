"use strict";var N=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var q=N(function(w,p){
function S(r,i,s,v){var o,u,f,y,a,n,t,e;if(r<=0)return NaN;if(r===1||v===0)return a=s[0],a===a&&r-i>0?0:NaN;for(v<0?u=(1-r)*v:u=0,e=0;e<r&&(a=s[u],a!==a);e++)u+=v;if(e===r)return NaN;for(u+=v,o=a,y=0,e+=1,t=1,e;e<r;e++)a=s[u],a===a&&(t+=1,o+=a,n=t*a-o,y+=1/(t*(t-1))*n*n),u+=v;return f=t-i,f<=0?NaN:y/f}p.exports=S
});var b=N(function(z,m){
function O(r,i,s,v,o){var u,f,y,a,n,t,e,c;if(r<=0)return NaN;if(r===1||v===0)return n=s[o],n===n&&r-i>0?0:NaN;for(f=o,c=0;c<r&&(n=s[f],n!==n);c++)f+=v;if(c===r)return NaN;for(f+=v,u=n,a=0,c+=1,e=1,c;c<r;c++)n=s[f],n===n&&(e+=1,u+=n,t=e*n-u,a+=1/(e*(e-1))*t*t),f+=v;return y=e-i,y<=0?NaN:a/y}m.exports=O
});var x=N(function(A,l){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=q(),g=b();R(k,"ndarray",g);l.exports=k
});var h=x();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
