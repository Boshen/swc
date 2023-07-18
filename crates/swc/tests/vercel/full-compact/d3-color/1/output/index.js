import{_ as t}from"@swc/helpers/_/_instanceof";import{Color as i,rgbConvert as e,Rgb as h}from"./color.js";var r=Math.PI/180,n=180/Math.PI,o=-1.78277*.29227-.1347134789;export default function s(r,s,a,u){return 1==arguments.length?function(i){if(t(i,Cubehelix))return new Cubehelix(i.h,i.s,i.l,i.opacity);t(i,h)||(i=e(i));var r=i.r/255,s=i.g/255,a=i.b/255,u=(o*a+-1.7884503806*r-3.5172982438*s)/(o+-1.7884503806-3.5172982438),l=a-u,c=-((1.97294*(s-u)- -.29227*l)/.90649),p=Math.sqrt(c*c+l*l)/(1.97294*u*(1-u)),f=p?Math.atan2(c,l)*n-120:NaN;return new Cubehelix(f<0?f+360:f,p,u,i.opacity)}(r):new Cubehelix(r,s,a,null==u?1:u)}export function Cubehelix(r,n,o,s){this.h=+r,this.s=+n,this.l=+o,this.opacity=+s}!function(r,n,o){r.prototype=n.prototype=o,o.constructor=r}(Cubehelix,s,function(r,n){var o=Object.create(r.prototype);for(var s in n)o[s]=n[s];return o}(i,{brighter:function(r){return r=null==r?1.4285714285714286:Math.pow(1.4285714285714286,r),new Cubehelix(this.h,this.s,this.l*r,this.opacity)},darker:function(r){return r=null==r?.7:Math.pow(.7,r),new Cubehelix(this.h,this.s,this.l*r,this.opacity)},rgb:function(){var n=isNaN(this.h)?0:(this.h+120)*r,o=+this.l,s=isNaN(this.s)?0:this.s*o*(1-o),a=Math.cos(n),u=Math.sin(n);return new h(255*(o+s*(-.14861*a+1.78277*u)),255*(o+s*(-.29227*a+-.90649*u)),255*(o+s*(1.97294*a)),this.opacity)}}));
