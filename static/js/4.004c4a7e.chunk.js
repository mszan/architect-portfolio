(this.webpackJsonparchitect_portfolio=this.webpackJsonparchitect_portfolio||[]).push([[4],{103:function(e,t,a){"use strict";var l=a(2);t.__esModule=!0,t.default=void 0;var d=l(a(3)),s=l(a(4)),r=l(a(5)),i=l(a(0)),u=l(a(11)),f={type:u.default.string,tooltip:u.default.bool,as:u.default.elementType},o=i.default.forwardRef((function(e,t){var a=e.as,l=void 0===a?"div":a,u=e.className,f=e.type,o=void 0===f?"valid":f,n=e.tooltip,c=void 0!==n&&n,m=(0,s.default)(e,["as","className","type","tooltip"]);return i.default.createElement(l,(0,d.default)({},m,{ref:t,className:(0,r.default)(u,o+"-"+(c?"tooltip":"feedback"))}))}));o.displayName="Feedback",o.propTypes=f;var n=o;t.default=n,e.exports=t.default},109:function(e,t,a){"use strict";var l=a(13),d=a(2);t.__esModule=!0,t.default=void 0;var s=d(a(3)),r=d(a(4)),i=d(a(5)),u=(d(a(51)),l(a(0))),f=d(a(103)),o=d(a(120)),n=d(a(121)),c=d(a(98)),m=a(6),v=u.default.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,d=e.bsCustomPrefix,v=e.inline,p=void 0!==v&&v,b=e.disabled,x=void 0!==b&&b,P=e.isValid,N=void 0!==P&&P,y=e.isInvalid,h=void 0!==y&&y,I=e.feedbackTooltip,F=void 0!==I&&I,_=e.feedback,C=e.className,w=e.style,E=e.title,k=void 0===E?"":E,M=e.type,g=void 0===M?"checkbox":M,R=e.label,V=e.children,B=e.custom,L=e.as,T=void 0===L?"input":L,O=(0,r.default)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),S="switch"===g||B,z=S?[d,"custom-control"]:[l,"form-check"],A=z[0],G=z[1];l=(0,m.useBootstrapPrefix)(A,G);var J=(0,u.useContext)(c.default).controlId,j=(0,u.useMemo)((function(){return{controlId:a||J,custom:S}}),[J,S,a]),q=S||null!=R&&!1!==R&&!V,D=u.default.createElement(o.default,(0,s.default)({},O,{type:"switch"===g?"checkbox":g,ref:t,isValid:N,isInvalid:h,isStatic:!q,disabled:x,as:T}));return u.default.createElement(c.default.Provider,{value:j},u.default.createElement("div",{style:w,className:(0,i.default)(C,l,S&&"custom-"+g,p&&l+"-inline")},V||u.default.createElement(u.default.Fragment,null,D,q&&u.default.createElement(n.default,{title:k},R),(N||h)&&u.default.createElement(f.default,{type:N?"valid":"invalid",tooltip:F},_))))}));v.displayName="FormCheck",v.Input=o.default,v.Label=n.default;var p=v;t.default=p,e.exports=t.default},119:function(e,t,a){"use strict";var l=a(2);t.__esModule=!0,t.default=void 0;var d=l(a(3)),s=l(a(4)),r=l(a(5)),i=l(a(0)),u=l(a(109)),f=l(a(122)),o=l(a(125)),n=l(a(126)),c=l(a(127)),m=l(a(128)),v=l(a(129)),p=a(6),b=(0,l(a(53)).default)("form-row"),x=i.default.forwardRef((function(e,t){var a=e.bsPrefix,l=e.inline,u=e.className,f=e.validated,o=e.as,n=void 0===o?"form":o,c=(0,s.default)(e,["bsPrefix","inline","className","validated","as"]);return a=(0,p.useBootstrapPrefix)(a,"form"),i.default.createElement(n,(0,d.default)({},c,{ref:t,className:(0,r.default)(u,f&&"was-validated",l&&a+"-inline")}))}));x.displayName="Form",x.defaultProps={inline:!1},x.Row=b,x.Group=n.default,x.Control=o.default,x.Check=u.default,x.File=f.default,x.Switch=v.default,x.Label=c.default,x.Text=m.default;var P=x;t.default=P,e.exports=t.default},120:function(e,t,a){"use strict";var l=a(13),d=a(2);t.__esModule=!0,t.default=void 0;var s=d(a(3)),r=d(a(4)),i=d(a(5)),u=l(a(0)),f=d(a(98)),o=a(6),n=u.default.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,d=e.bsCustomPrefix,n=e.className,c=e.type,m=void 0===c?"checkbox":c,v=e.isValid,p=void 0!==v&&v,b=e.isInvalid,x=void 0!==b&&b,P=e.isStatic,N=e.as,y=void 0===N?"input":N,h=(0,r.default)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),I=(0,u.useContext)(f.default),F=I.controlId,_=I.custom?[d,"custom-control-input"]:[l,"form-check-input"],C=_[0],w=_[1];return l=(0,o.useBootstrapPrefix)(C,w),u.default.createElement(y,(0,s.default)({},h,{ref:t,type:m,id:a||F,className:(0,i.default)(n,l,p&&"is-valid",x&&"is-invalid",P&&"position-static")}))}));n.displayName="FormCheckInput";var c=n;t.default=c,e.exports=t.default},121:function(e,t,a){"use strict";var l=a(13),d=a(2);t.__esModule=!0,t.default=void 0;var s=d(a(3)),r=d(a(4)),i=d(a(5)),u=l(a(0)),f=d(a(98)),o=a(6),n=u.default.forwardRef((function(e,t){var a=e.bsPrefix,l=e.bsCustomPrefix,d=e.className,n=e.htmlFor,c=(0,r.default)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),m=(0,u.useContext)(f.default),v=m.controlId,p=m.custom?[l,"custom-control-label"]:[a,"form-check-label"],b=p[0],x=p[1];return a=(0,o.useBootstrapPrefix)(b,x),u.default.createElement("label",(0,s.default)({},c,{ref:t,htmlFor:n||v,className:(0,i.default)(d,a)}))}));n.displayName="FormCheckLabel";var c=n;t.default=c,e.exports=t.default},122:function(e,t,a){"use strict";var l=a(13),d=a(2);t.__esModule=!0,t.default=void 0;var s=d(a(3)),r=d(a(4)),i=d(a(5)),u=l(a(0)),f=(d(a(51)),d(a(103))),o=d(a(123)),n=d(a(124)),c=d(a(98)),m=a(6),v=u.default.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,d=e.bsCustomPrefix,v=e.disabled,p=void 0!==v&&v,b=e.isValid,x=void 0!==b&&b,P=e.isInvalid,N=void 0!==P&&P,y=e.feedbackTooltip,h=void 0!==y&&y,I=e.feedback,F=e.className,_=e.style,C=e.label,w=e.children,E=e.custom,k=e.lang,M=e["data-browse"],g=e.as,R=void 0===g?"div":g,V=e.inputAs,B=void 0===V?"input":V,L=(0,r.default)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),T=E?[d,"custom"]:[l,"form-file"],O=T[0],S=T[1];l=(0,m.useBootstrapPrefix)(O,S);var z=(0,u.useContext)(c.default).controlId,A=(0,u.useMemo)((function(){return{controlId:a||z,custom:E}}),[z,E,a]),G=null!=C&&!1!==C&&!w,J=u.default.createElement(o.default,(0,s.default)({},L,{ref:t,isValid:x,isInvalid:N,disabled:p,as:B,lang:k}));return u.default.createElement(c.default.Provider,{value:A},u.default.createElement(R,{style:_,className:(0,i.default)(F,l,E&&"custom-file")},w||u.default.createElement(u.default.Fragment,null,E?u.default.createElement(u.default.Fragment,null,J,G&&u.default.createElement(n.default,{"data-browse":M},C)):u.default.createElement(u.default.Fragment,null,G&&u.default.createElement(n.default,null,C),J),(x||N)&&u.default.createElement(f.default,{type:x?"valid":"invalid",tooltip:h},I))))}));v.displayName="FormFile",v.Input=o.default,v.Label=n.default;var p=v;t.default=p,e.exports=t.default},123:function(e,t,a){"use strict";var l=a(13),d=a(2);t.__esModule=!0,t.default=void 0;var s=d(a(3)),r=d(a(4)),i=d(a(5)),u=l(a(0)),f=d(a(98)),o=a(6),n=u.default.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,d=e.bsCustomPrefix,n=e.className,c=e.isValid,m=e.isInvalid,v=e.lang,p=e.as,b=void 0===p?"input":p,x=(0,r.default)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),P=(0,u.useContext)(f.default),N=P.controlId,y=P.custom?[d,"custom-file-input"]:[l,"form-control-file"],h=y[0],I=y[1];return l=(0,o.useBootstrapPrefix)(h,I),u.default.createElement(b,(0,s.default)({},x,{ref:t,id:a||N,type:"file",lang:v,className:(0,i.default)(n,l,c&&"is-valid",m&&"is-invalid")}))}));n.displayName="FormFileInput";var c=n;t.default=c,e.exports=t.default},124:function(e,t,a){"use strict";var l=a(13),d=a(2);t.__esModule=!0,t.default=void 0;var s=d(a(3)),r=d(a(4)),i=d(a(5)),u=l(a(0)),f=d(a(98)),o=a(6),n=u.default.forwardRef((function(e,t){var a=e.bsPrefix,l=e.bsCustomPrefix,d=e.className,n=e.htmlFor,c=(0,r.default)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),m=(0,u.useContext)(f.default),v=m.controlId,p=m.custom?[l,"custom-file-label"]:[a,"form-file-label"],b=p[0],x=p[1];return a=(0,o.useBootstrapPrefix)(b,x),u.default.createElement("label",(0,s.default)({},c,{ref:t,htmlFor:n||v,className:(0,i.default)(d,a),"data-browse":c["data-browse"]}))}));n.displayName="FormFileLabel";var c=n;t.default=c,e.exports=t.default},125:function(e,t,a){"use strict";var l=a(13),d=a(2);t.__esModule=!0,t.default=void 0;var s=d(a(3)),r=d(a(4)),i=d(a(5)),u=(d(a(51)),l(a(0))),f=(d(a(52)),d(a(103))),o=d(a(98)),n=a(6),c=u.default.forwardRef((function(e,t){var a,l,d=e.bsPrefix,f=e.bsCustomPrefix,c=e.type,m=e.size,v=e.htmlSize,p=e.id,b=e.className,x=e.isValid,P=void 0!==x&&x,N=e.isInvalid,y=void 0!==N&&N,h=e.plaintext,I=e.readOnly,F=e.custom,_=e.as,C=void 0===_?"input":_,w=(0,r.default)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),E=(0,u.useContext)(o.default).controlId,k=F?[f,"custom"]:[d,"form-control"],M=k[0],g=k[1];if(d=(0,n.useBootstrapPrefix)(M,g),h)(l={})[d+"-plaintext"]=!0,a=l;else if("file"===c){var R;(R={})[d+"-file"]=!0,a=R}else if("range"===c){var V;(V={})[d+"-range"]=!0,a=V}else if("select"===C&&F){var B;(B={})[d+"-select"]=!0,B[d+"-select-"+m]=m,a=B}else{var L;(L={})[d]=!0,L[d+"-"+m]=m,a=L}return u.default.createElement(C,(0,s.default)({},w,{type:c,size:v,ref:t,readOnly:I,id:p||E,className:(0,i.default)(b,a,P&&"is-valid",y&&"is-invalid")}))}));c.displayName="FormControl";var m=Object.assign(c,{Feedback:f.default});t.default=m,e.exports=t.default},126:function(e,t,a){"use strict";var l=a(13),d=a(2);t.__esModule=!0,t.default=void 0;var s=d(a(3)),r=d(a(4)),i=d(a(5)),u=l(a(0)),f=d(a(98)),o=a(6),n=u.default.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,d=e.children,n=e.controlId,c=e.as,m=void 0===c?"div":c,v=(0,r.default)(e,["bsPrefix","className","children","controlId","as"]);a=(0,o.useBootstrapPrefix)(a,"form-group");var p=(0,u.useMemo)((function(){return{controlId:n}}),[n]);return u.default.createElement(f.default.Provider,{value:p},u.default.createElement(m,(0,s.default)({},v,{ref:t,className:(0,i.default)(l,a)}),d))}));n.displayName="FormGroup";var c=n;t.default=c,e.exports=t.default},127:function(e,t,a){"use strict";var l=a(13),d=a(2);t.__esModule=!0,t.default=void 0;var s=d(a(3)),r=d(a(4)),i=d(a(5)),u=l(a(0)),f=(d(a(52)),d(a(8))),o=d(a(98)),n=a(6),c=u.default.forwardRef((function(e,t){var a=e.as,l=void 0===a?"label":a,d=e.bsPrefix,c=e.column,m=e.srOnly,v=e.className,p=e.htmlFor,b=(0,r.default)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),x=(0,u.useContext)(o.default).controlId;d=(0,n.useBootstrapPrefix)(d,"form-label");var P="col-form-label";"string"===typeof c&&(P=P+" "+P+"-"+c);var N=(0,i.default)(v,d,m&&"sr-only",c&&P);return p=p||x,c?u.default.createElement(f.default,(0,s.default)({as:"label",className:N,htmlFor:p},b)):u.default.createElement(l,(0,s.default)({ref:t,className:N,htmlFor:p},b))}));c.displayName="FormLabel",c.defaultProps={column:!1,srOnly:!1};var m=c;t.default=m,e.exports=t.default},128:function(e,t,a){"use strict";var l=a(2);t.__esModule=!0,t.default=void 0;var d=l(a(3)),s=l(a(4)),r=l(a(5)),i=l(a(0)),u=a(6),f=i.default.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,f=e.as,o=void 0===f?"small":f,n=e.muted,c=(0,s.default)(e,["bsPrefix","className","as","muted"]);return a=(0,u.useBootstrapPrefix)(a,"form-text"),i.default.createElement(o,(0,d.default)({},c,{ref:t,className:(0,r.default)(l,a,n&&"text-muted")}))}));f.displayName="FormText";var o=f;t.default=o,e.exports=t.default},129:function(e,t,a){"use strict";var l=a(2);t.__esModule=!0,t.default=void 0;var d=l(a(3)),s=l(a(0)),r=l(a(109)),i=s.default.forwardRef((function(e,t){return s.default.createElement(r.default,(0,d.default)({},e,{ref:t,type:"switch"}))}));i.displayName="Switch",i.Input=r.default.Input,i.Label=r.default.Label;var u=i;t.default=u,e.exports=t.default},98:function(e,t,a){"use strict";var l=a(2);t.__esModule=!0,t.default=void 0;var d=l(a(0)).default.createContext({controlId:void 0});t.default=d,e.exports=t.default}}]);
//# sourceMappingURL=4.004c4a7e.chunk.js.map