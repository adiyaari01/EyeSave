var Ue=Object.defineProperty,Ve=Object.defineProperties;var Ye=Object.getOwnPropertyDescriptors;var Ce=Object.getOwnPropertySymbols;var He=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable;var Ne=(t,r,n)=>r in t?Ue(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,ne=(t,r)=>{for(var n in r||(r={}))He.call(r,n)&&Ne(t,n,r[n]);if(Ce)for(var n of Ce(r))Ge.call(r,n)&&Ne(t,n,r[n]);return t},le=(t,r)=>Ve(t,Ye(r));var Ze=(t,r)=>()=>(r||t((r={exports:{}}).exports,r),r.exports);import{c as $,R as U,j as e,u as X,a as de,b as a,L as Je,d as Ke,e as Ae,f as Te,g as ce,h as Qe,i as qe,k as Pe,l as Xe,m as et,N as tt,B as I,n as Fe,r as u,S as E,A as rt,T as ke,I as M,o as at,p as nt,q as R,D as lt,O as it,F as D,G as x,C as W,s as Y,t as H,v as st,w as G,P as ee,x as Z,y as ot,z as v,E as he,H as ue,J as L,K as Ee,M as me,Q as P,U as We,V as Re,W as De,X as $e,Y as K,Z as Q,_ as w,$ as j,a0 as dt,a1 as ct,a2 as ht,a3 as oe,a4 as O,a5 as ut,a6 as pe,a7 as ge,a8 as fe,a9 as mt,aa as pt,ab as gt,ac as ft,ad as xt,ae as vt,af as A,ag as bt,ah as yt,ai as St,aj as Ct}from"./vendor.51addb78.js";var Ar=Ze(Oe=>{const Nt=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};Nt();const z="https://eyesave.herokuapp.com",kt=async()=>{const{body:t}=await $.exports.get(`${z}/childrenAttendance`);return t},Et=async()=>{const{body:t}=await $.exports.get(`${z}/staffAttendance`);return t},_t=async()=>{const{body:t}=await $.exports.get(`${z}/children`);return t},wt=async()=>{const{body:t}=await $.exports.get(`${z}/escorts`);return t},Lt=async()=>{const{body:t}=await $.exports.get(`${z}/staff`);return t},It=async()=>{const{body:t}=await $.exports.get(`${z}/events`);return t},At=async t=>await $.exports.post(`${z}/staff`).send(t),Tt=async t=>await $.exports.post(`${z}/children`).send(t),qt=async t=>await $.exports.post(`${z}/escorts`).send(t),Pt=({setSelf:t,onSet:r})=>{t(kt())},Ft=({setSelf:t,onSet:r})=>{t(Et())},Wt=({setSelf:t,onSet:r})=>{t(_t())},Rt=({setSelf:t,onSet:r})=>{t(wt())},Dt=({setSelf:t,onSet:r})=>{t(Lt())},$t=({setSelf:t,onSet:r})=>{t(It())},te=U({key:"IsLoggedInState",default:!0}),zt=U({key:"childrenAttendanceState",default:null,effects_UNSTABLE:[Pt]}),Bt=U({key:"staffAttendanceState",default:null,effects_UNSTABLE:[Ft]}),xe=U({key:"childrenInfoState",default:null,effects_UNSTABLE:[Wt]}),Ot=U({key:"escortsInfoState",default:null,effects_UNSTABLE:[Rt]}),ze=U({key:"staffInfoState",default:null,effects_UNSTABLE:[Dt]}),jt=U({key:"evetnsState",default:null,effects_UNSTABLE:[$t]});var Mt="/assets/logo.0f66d6c0.png",Ut=()=>e("div",{children:e("img",{src:Mt,width:"250",height:"80"})});const F=({Icon:t,to:r,label:n,handleClick:l})=>e("div",{className:"nav-item",children:r?a(tt,{to:r,style:{color:"#E3E3E3"},children:[e(t,{fontSize:"large"}),n]}):a(I,{component:"a",onClick:l,style:{color:"#E3E3E3"},children:[e(t,{fontSize:"large"}),n]})});var Vt=()=>{const t=X(),r=de(te);return a(Je,{sx:{width:"100%",maxWidth:360},children:[e(F,{to:"/",label:"Home",Icon:Ke}),e(F,{to:"watchLive",label:"Live",Icon:Ae}),e(F,{to:"recordings",label:"Recordings",Icon:Te}),e(F,{to:"messages",label:"Messages",Icon:ce}),e(F,{to:"attendance",label:"Attendance",Icon:Qe}),e(F,{to:"children",label:"ChildrenInfo",Icon:qe}),e(F,{to:"staff",label:"StaffInfo",Icon:Pe}),e(F,{to:"events",label:"Events",Icon:Xe}),e(F,{handleClick:()=>{r(!1),t("/login")},label:"Logout",Icon:et})]})};const Yt=Fe({paper:{backgroundColor:"#3F424C !important"}}),ie=280;var Ht=u.exports.memo(()=>{const[t,r]=u.exports.useState(!1),n=()=>r(o=>!o),l={background:"#575E68"},i=Yt();return a(E,{direction:"row",children:[e(rt,{position:"fixed",style:{boxShadow:"none"},children:a(ke,{style:l,children:[e(M,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},onClick:n,children:e(at,{})}),e("div",{style:{display:"flex",flexGrow:1}}),e(nt,{})]})}),e(R,{component:"nav",sx:{width:{md:ie},flexShrink:{md:0}},"aria-label":"mailbox folders",children:a(lt,{anchor:"left",variant:"permanent",classes:i,onClose:()=>n(),sx:{display:{xs:"none",sm:"none",md:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:ie}},children:[e(Ut,{}),e(Vt,{})]})}),a(R,{component:"main",sx:{flexGrow:1,p:3,width:{md:`calc(100% - ${ie}px)`}},children:[e(ke,{}),e(it,{})]})]})});const Gt=Fe({root:{backgroundColor:"#3F424C !important",color:"#E3E3E3 !important",borderRadius:"16px !important",cursor:"pointer"}});var Zt=u.exports.memo(()=>{const t=Gt(),r=X();return a(D,{children:[a(x,{container:!0,spacing:2,justifyContent:"center",mb:2,children:[e(x,{item:!0,xs:10,sm:4,md:4,children:a(W,{align:"center",classes:t,onClick:()=>r("/watchLive"),children:[e(Y,{title:"Watch LIVE"}),e(H,{children:e(Ae,{sx:{fontSize:"100px"}})})]})}),e(x,{item:!0,xs:10,sm:4,md:4,children:a(W,{align:"center",classes:t,onClick:()=>r("/recirdings"),children:[e(Y,{title:"See recordings"}),e(H,{children:e(Te,{sx:{fontSize:"100px"}})})]})})]}),a(x,{container:!0,spacing:2,justifyContent:"center",mt:2,children:[e(x,{item:!0,xs:10,sm:2.5,md:2.5,children:a(W,{align:"center",classes:t,onClick:()=>r("/Forms"),children:[e(Y,{title:"Forms"}),e(H,{children:e(st,{sx:{fontSize:"100px"}})})]})}),e(x,{item:!0,xs:10,sm:2.5,md:2.5,children:a(W,{align:"center",classes:t,onClick:()=>r("/Messages"),children:[e(Y,{title:"Messages"}),e(H,{children:e(ce,{sx:{fontSize:"100px"}})})]})}),e(x,{item:!0,xs:10,sm:2.5,md:2.5,children:a(W,{align:"center",classes:t,onClick:()=>r("/staff"),children:[e(Y,{title:"Staff info"}),e(H,{children:e(Pe,{sx:{fontSize:"100px"}})})]})}),e(x,{item:!0,xs:10,sm:2.5,md:2.5,children:a(W,{align:"center",classes:t,onClick:()=>r("/children"),children:[e(Y,{title:"Children info"}),e(H,{children:e(qe,{sx:{fontSize:"100px"}})})]})})]})]})}),Jt=()=>e(G,{children:"Kindergarten"});const Kt=()=>{const t=X(),r=de(te),n={padding:20,width:280,height:"70vh",margin:"50px auto"},l={backgroundColor:"#BC88C9"},i={margin:"8px 0"},o={margin:"8px 0"};return e("div",{children:e(x,{align:"center",children:a(ee,{elevation:10,style:n,children:[e(Z,{style:l,children:e(ot,{})}),e("h2",{children:"Sign In"}),e(v,{style:o,label:"Email",placeholder:"Enter an email address",fullWidth:!0,required:!0}),e(v,{style:o,label:"Password",placeholder:"Enter a password",type:"password",fullWidth:!0,required:!0}),e(he,{control:e(ue,{defaultChecked:!0,color:"default"}),label:"remember me"}),e(I,{variant:"contained",style:i,color:"secondary",fullWidth:!0,onClick:()=>{r(!0),t("/")},children:"SIGN IN"}),e(L,{children:e(Ee,{href:"#",children:"Forgot password?"})}),a(L,{children:["Do you have an account?",e(Ee,{href:"#",children:"Sign up"})]})]})})})},Qt=()=>{const t=X(),r=de(te);return e("div",{children:e(x,{align:"center",children:a(ee,{elevation:10,style:{padding:20,width:300,height:"80vh",margin:"50px auto"},children:[a(x,{children:[e(Z,{style:{backgroundColor:"#BC88C9"},children:e(me,{})}),e("h2",{children:"Sign Up"}),e(L,{variant:"caption",gutterBottom:!0,children:"Please fill this form to create an account"})]}),a("form",{children:[e(v,{fullWidth:!0,id:"standard-basic",label:"Full Name",variant:"standard",placeholder:"Enter your name"}),e(v,{fullWidth:!0,id:"standard-basic",label:"Email",variant:"standard",placeholder:"Enter your email"}),e(v,{fullWidth:!0,id:"standard-basic",label:"Phone Number",variant:"standard",placeholder:"Enter your phone number"}),e(v,{fullWidth:!0,id:"standard-basic",label:"Password",variant:"standard",placeholder:"Enter a password"}),e(v,{fullWidth:!0,id:"standard-basic",label:"Confirm Password",variant:"standard",placeholder:"Enter again your password"}),e(he,{control:e(ue,{defaultChecked:!0,color:"default"}),label:"I accept the terms and conditions."}),e(I,{type:"submit",variant:"contained",style:{margin:"8px 0"},color:"secondary",fullWidth:!0,onClick:()=>{r(!0),t("/home")},children:"SIGN UP"})]})]})})})};function Xt(t){return e(E,{direction:"row",flexWrap:"wrap",gap:3,children:t.items.map(r=>{var d,m,p,s,c;const n=(d=r.report)==null?void 0:d._arrivalTime,l=(m=r.report)==null?void 0:m._departureTime,i=(p=r.report)==null?void 0:p._absance,o=(s=r.report)==null?void 0:s._childDelay;return console.log((c=r.report)==null?void 0:c._absance),a(W,{sx:{width:160,height:180,position:"relative",backgroundColor:"#3F424C !important",color:"#E3E3E3 !important",borderRadius:"5px !important",boxShadow:3},children:[!n&&!l&&!i&&!o&&e("div",{className:"dot",style:{width:15,height:15,borderRadius:"50%",background:"#FAC852",position:"absolute",top:"5px",left:"5px"}}),o&&o!=="false"&&e(L,{fontSize:"14px",sx:{color:"#5FEBDC",position:"absolute",top:"5px",left:"5px"},children:"Delay"}),a(E,{sx:{color:"#E3E3E3"},alignItems:"center",gap:1,p:2,children:[e("img",{src:r._imageUrl,width:50,height:50,style:{borderRadius:"50%"},alt:""}),a(L,{children:[r._firstName," ",r._lastName]}),a(E,{justifyContent:n?"flex-end":"flex-start",direction:"row",sx:{fontFamily:"sans-serif",width:132,height:22,borderRadius:5,backgroundColor:n?"#AAF8D0":"#999999"},children:[!n&&e(E,{sx:{width:72,height:22,borderRadius:5,backgroundColor:"#596068",fontSize:12,justifyContent:"center",alignItems:"center"},children:"Check in"}),!!n&&e(E,{sx:{width:65,height:22,borderRadius:5,backgroundColor:n?"#1E8D7F":"#596068",fontSize:14,justifyContent:"center",alignItems:"center"},children:n})]}),a(E,{justifyContent:l?"flex-end":"flex-start",direction:"row",sx:{fontFamily:"sans-serif",width:132,height:22,borderRadius:5,backgroundColor:l?"#FBBCD7":"#999999"},children:[!l&&e(E,{sx:{width:72,height:22,borderRadius:5,backgroundColor:"#596068",fontSize:12,justifyContent:"center",alignItems:"center"},children:"Check out"}),!!l&&e(E,{sx:{width:65,height:22,borderRadius:5,backgroundColor:n?"#E7307C":"#596068",fontSize:14,justifyContent:"center",alignItems:"center"},children:l})]})]})]},r._id)})})}const se=()=>{let t=new Date,r=("0"+t.getDate()).slice(-2),n=("0"+(t.getMonth()+1)).slice(-2);return t.getFullYear()+"-"+n+"-"+r};var er=()=>{const t=P(zt),r=P(xe);P(Bt);const n=t.filter(s=>s._date===se());console.log("todayReports",n),console.log(t),console.log(r);const l=r.map(s=>{const c=n.find(g=>g._childId===s._id);return le(ne({},s),{report:c})}),i=l.filter(s=>{var c;return(c=s.report)==null?void 0:c._arrivalTime}),o=l.filter(s=>{var c,g;return((c=s.report)==null?void 0:c._childDelay)===!0&&!((g=s.report)==null?void 0:g._arrivalTime)}),d=r.filter(s=>t.find(c=>{const g=c._childId===s._id,b=c._date===se(),y=c._absence&&!c._arrivalTime;return g&&b&&y})),m=r.filter(s=>!t.filter(g=>g._date===se()).find(g=>g._childId==s._id));console.log("arrivedItems",i),console.log("lates",o),console.log("unknow",m),console.log("absance",d);const p=[...m,...d,...o,...i];return e(G,{children:e(E,{direction:"row",flexWrap:"wrap",gap:3,children:e(Xt,{items:p})})})};function tr(t){return e(E,{justifyContent:"left",direction:"row",flexWrap:"wrap",gap:3,children:t.items.map(r=>e(W,{sx:{width:270,height:200,backgroundColor:"#3F424C !important",borderRadius:"5px !important",color:"#E3E3E3",boxShadow:3},children:a(E,{alignItems:"center",gap:1,p:2,children:[e("img",{src:r._imageUrl,width:80,height:80,style:{borderRadius:"50%"},alt:""}),a(L,{children:[r._firstName," ",r._lastName]}),a(L,{children:["Address:",r._address]}),a(L,{children:["Birthday: ",r._birthdate]})]})},r._id))})}var rr=()=>{const[t,r]=u.exports.useState(!1),[n,l]=u.exports.useState(""),[i,o]=u.exports.useState(""),[d,m]=u.exports.useState(""),[p,s]=u.exports.useState(""),[c,g]=u.exports.useState(0),[b,y]=u.exports.useState(0),[h,_]=u.exports.useState(0),T=P(xe),q=()=>{r(!0)},N=()=>{r(!1)};return a(G,{children:[e(I,{sx:{color:"#BC88C9",display:"flex",justifyContent:"center",width:"100%"},onClick:q,children:e(Z,{style:{backgroundColor:"#BC88C9"},children:e(me,{})})}),a(We,{open:t,onClose:N,children:[e(Re,{children:"Child and Parent Details"}),e(De,{children:a("form",{children:[e(v,{onChange:()=>{l(event.target.value)},fullWidth:!0,id:"standard-basic",name:"childFirstName",label:"Child First Name",variant:"standard",placeholder:"Enter child first name",type:"text"}),e(v,{onChange:()=>{o(event.target.value)},fullWidth:!0,id:"standard-basic",name:"childLastName",label:"Child Last Name",variant:"standard",placeholder:"Enter child last name",type:"text"}),e(v,{onChange:()=>{y(event.target.value)},fullWidth:!0,id:"standard-basic",name:"childId",label:"Child Id",variant:"standard",placeholder:"Enter child Id",type:"number"}),e(v,{onChange:()=>{m(event.target.value)},fullWidth:!0,id:"standard-basic",name:"parentFirstName",label:"Parent First Name",variant:"standard",placeholder:"Enter parent first name",type:"text"}),e(v,{onChange:()=>{s(event.target.value)},fullWidth:!0,id:"standard-basic",name:"parentLastName",label:"Parent Laste Name",variant:"standard",placeholder:"Enter parent last name",type:"text"}),e(v,{onChange:()=>{_(event.target.value)},fullWidth:!0,id:"standard-basic",name:"parentId",label:"Parent Id",variant:"standard",placeholder:"Enter parent Id",type:"number"}),e(v,{onChange:()=>{g(event.target.value)},fullWidth:!0,id:"standard-basic",name:"phoneNumber",label:"Phone Numbe",variant:"standard",placeholder:"Enter parent phone number",type:"number"})]})}),a($e,{children:[e(I,{onClick:N,children:"Cancel"}),e(I,{onClick:async()=>{const S={_firstName:n,_lastName:i,_id:parseInt(b),_escort:[parseInt(h)]},k={_firstName:d,_lastName:p,_id:parseInt(h),_phone:c,_children:[parseInt(b)],_relation:"Parent"};await Tt(S),await qt(k),N()},children:"Submit"})]})]}),e(E,{direction:"row",flexWrap:"wrap",gap:3}),e(tr,{items:T})]})};function ar(t){return e(E,{justifyContent:"center",direction:"row",flexWrap:"wrap",gap:3,children:t.items.map(r=>e(W,{sx:{width:280,height:280,backgroundColor:"#3F424C !important",borderRadius:"5px !important",color:"#E3E3E3",boxShadow:3},children:a(E,{alignItems:"center",gap:1,p:2,children:[e("img",{src:r._imageUrl,width:80,height:80,style:{borderRadius:"50%"},alt:""}),a(L,{children:[r._firstName," ",r._lastName]}),a(L,{children:["Position: ",r._position]}),a(L,{children:["Phone: ",r._phone]}),a(L,{children:["Address: ",r._address]}),a(L,{children:["Birthday: ",r._birthdate]})]})},r._id))})}var nr=()=>{const[t,r]=u.exports.useState(!1),[n,l]=u.exports.useState(""),[i,o]=u.exports.useState(""),[d,m]=u.exports.useState(0),[p,s]=u.exports.useState(0),[c,g]=u.exports.useState(""),b=P(ze),y=()=>{r(!0)},h=()=>{r(!1)};return a(G,{children:[e(I,{sx:{color:"#BC88C9",display:"flex",justifyContent:"center",width:"100%"},onClick:y,children:e(Z,{style:{backgroundColor:"#BC88C9"},children:e(me,{})})}),a(We,{open:t,onClose:h,children:[e(Re,{children:"Employee Details"}),e(De,{children:a("form",{children:[e(v,{onChange:()=>{l(event.target.value)},fullWidth:!0,id:"standard-basic",name:"cmployeeFirstName",label:"Employee First Name",variant:"standard",placeholder:"Enter employee first name",type:"text"}),e(v,{onChange:()=>{o(event.target.value)},fullWidth:!0,id:"standard-basic",name:"cmployeeLastName",label:"Employee Last Name",variant:"standard",placeholder:"Enter employee lasr name",type:"text"}),e(v,{fullWidth:!0,onChange:()=>{s(event.target.value)},id:"standard-basic",name:"EmployeeId",label:"Employee Id",variant:"standard",placeholder:"Enter employee Id",type:"number"}),e(v,{onChange:()=>{m(event.target.value)},fullWidth:!0,id:"standard-basic",name:"phoneNumber",label:"Phone Number",variant:"standard",placeholder:"Enter parent phone number",type:"number"}),e(R,{sx:{minWidth:120,textAlign:"left"},children:e(K,{children:a(Q,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:c,onChange:N=>{g(N.target.value)},sx:{color:"#3F414D",width:"100%",minWidth:"150px",height:"30px",mt:"20px"},children:[e(w,{value:"Teacher",children:"Teacher"}),e(w,{value:"Assistant",children:"Assistant"}),e(w,{value:"House keeper",children:"House keeper"}),e(w,{value:"Manager",children:"Manager"}),e(w,{value:"Other",children:"Other"})]})})})]})}),a($e,{children:[e(I,{sx:{color:"black"},onClick:h,children:"Cancel"}),e(I,{sx:{color:"black"},onClick:async()=>{const N={_firstName:n,_lastName:i,_id:parseInt(p),_phone:d,_position:c};await At(N),h()},children:"Submit"})]})]}),e(E,{justifyContent:"center",direction:"row",flexWrap:"wrap",gap:3}),e(ar,{items:b})]})};function lr(t,r,n,l,i,o){return{date:t,event:r,startTime:n,finishTime:l,child1:i,child2:o}}const ir=[{id:"event",numeric:!1,disablePadding:!0,label:"Event"},{id:"date",numeric:!1,disablePadding:!0,label:"Date"},{id:"startTime",numeric:!1,disablePadding:!1,label:"Start Time"},{id:"finishTime",numeric:!1,disablePadding:!1,label:"Finish Time"},{id:"child1",numeric:!1,disablePadding:!1,label:"Child 1"},{id:"child2",numeric:!1,disablePadding:!1,label:"Child 2"}];function Be(t){const{order:r,orderBy:n}=t;return e(ut,{children:e(oe,{children:ir.map(l=>e(O,{align:"center",padding:l.disablePadding?"none":"normal",sortDirection:n===l.id?r:!1,sx:{color:"#A2A4A7",fontSize:"16px"},children:l.label},l.id))})})}Be.propTypes={numSelected:j.number.isRequired,onRequestSort:j.func.isRequired,onSelectAllClick:j.func.isRequired,order:j.oneOf(["asc","desc"]).isRequired,orderBy:j.string.isRequired,rowCount:j.number.isRequired};j.number.isRequired;function sr({events:t,children:r}){const[n,l]=u.exports.useState("asc"),[i,o]=u.exports.useState("event"),[d,m]=u.exports.useState([]),[p,s]=u.exports.useState(0),[c,g]=u.exports.useState(!1),[b,y]=u.exports.useState(5),[h,_]=u.exports.useState([]);u.exports.useEffect(()=>{let S=!0;if(S){const k=t.map(f=>{var ve,be,ye,Se;const C=r.filter(ae=>ae._id===f._child1),re=r.filter(ae=>ae._id===f._child2);if(C)var je=((ve=C[0])==null?void 0:ve._firstName)+" "+((be=C[0])==null?void 0:be._lastName);if(re)var Me=((ye=re[0])==null?void 0:ye._firstName)+" "+((Se=re[0])==null?void 0:Se._lastName);return lr(f._date,f._eventType,f._startTime,f._endTime,je,Me)});_(k)}return()=>{S=!1}},[t]);const T=(S,k)=>{l(i===k&&n==="asc"?"desc":"asc"),o(k)},q=S=>{if(S.target.checked){const k=h.map(f=>f.name);m(k);return}m([])},N=(S,k)=>{const f=d.indexOf(k);let C=[];f===-1?C=C.concat(d,k):f===0?C=C.concat(d.slice(1)):f===d.length-1?C=C.concat(d.slice(0,-1)):f>0&&(C=C.concat(d.slice(0,f),d.slice(f+1))),m(C)},V=S=>d.indexOf(S)!==-1,B=p>0?Math.max(0,(1+p)*b-h.length):0;return h.length?e("div",{children:e(dt,{sx:{mt:5},children:a(ct,{sx:{minWidth:750,backgroundColor:"#3F414D"},"aria-labelledby":"tableTitle",size:c?"small":"medium",children:[e(Be,{numSelected:d.length,order:n,orderBy:i,onSelectAllClick:q,onRequestSort:T,rowCount:h.length}),a(ht,{children:[h.map((S,k)=>{const f=V(S.event);return a(oe,{hover:!0,onClick:C=>N(C,S.event),"aria-checked":f,tabIndex:-1,selected:f,children:[e(O,{sx:{fontSize:"16px",color:S.event==="Positive"?"#68B294":S.event==="Negative"?"#AD4675":"#A2A4A7"},align:"center",children:S.event}),e(O,{sx:{fontSize:"16px",color:"#A2A4A7"},align:"center",children:S.date}),e(O,{sx:{fontSize:"16px",color:"#A2A4A7"},align:"center",children:S.startTime}),e(O,{sx:{fontSize:"16px",color:"#A2A4A7"},align:"center",children:S.finishTime}),e(O,{sx:{fontSize:"16px",color:"#A2A4A7"},align:"center",children:S.child1}),e(O,{sx:{fontSize:"16px",color:"#A2A4A7"},align:"center",children:S.child2})]},k)}),B>0&&e(oe,{style:{height:(c?33:53)*B},children:e(O,{colSpan:6})})]})]})})}):e("div",{children:"Loading.."})}const or=()=>{let t=new Date,r=("0"+t.getDate()).slice(-2),n=("0"+(t.getMonth()+1)).slice(-2);return t.getFullYear()+"-"+n+"-"+r};var dr=()=>{const t=P(jt),r=P(xe),[n,l]=u.exports.useState(t),[i,o]=u.exports.useState([]),[d,m]=u.exports.useState([]),[p,s]=u.exports.useState([]),[c,g]=u.exports.useState([]),[b,y]=u.exports.useState([]),[h,_]=u.exports.useState("all");u.exports.useEffect(()=>{const N=t.filter(f=>f._date===or());o(N);const V=t.filter(f=>f._eventType==="Positive");m(V);const B=i.filter(f=>f._eventType==="Positive");s(B);const S=t.filter(f=>f._eventType==="Negative");g(S);const k=i.filter(f=>f._eventType==="Negative");y(k)},[n]);const T=N=>{q(N.target.value)},q=N=>{switch(_(N),N){case"all":l(t);break;case"today":l(i);break;case"positive":l(d);break;case"positiveToday":l(p);break;case"negative":l(c);break;case"negativeToday":l(b);break}};return n?a(G,{children:[e(L,{sx:{fontSize:"25px",color:"#A2A4A7"},children:"Events"}),e(R,{sx:{minWidth:120,textAlign:"right"},children:e(K,{children:a(Q,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:h,onChange:T,sx:{color:"#3F414D",backgroundColor:"#E2E3E4",width:"100%",minWidth:"150px",height:"30px"},children:[e(w,{value:"all",children:"All"}),e(w,{value:"today",children:"Today"}),e(w,{value:"negative",children:"Negative"}),e(w,{value:"negativeToday",children:"Negative Today"}),e(w,{value:"positive",children:"Positive"}),e(w,{value:"positiveToday",children:"Positive Today"})]})})}),e(sr,{events:n,children:r})]}):e("div",{children:"Loding.."})};const _e={parent:{firstName:{value:"",error:"",required:!0,validate:"text",minLength:2,maxLength:20,helperText:"Custom error message"},lastName:{value:"",error:"",required:!0,validate:"text",minLength:2,maxLength:20},email:{value:"",error:"",required:!0,validate:"email"},phone:{value:"",error:"",required:!0,validate:"phone",maxLength:15},address:{value:"",error:"",required:!0,validate:"text",minLength:10,maxLength:40},id:{value:"",error:"",required:!0,validate:"number",minLength:9,maxLength:9},photo:{value:null,error:"",required:!0}},child:{firstName:{value:"",error:"",required:!0,validate:"text",minLength:2,maxLength:20,helperText:"Custom error message"},lastName:{value:"",error:"",required:!0,validate:"text",minLength:2,maxLength:20},gender:{value:"",error:"",required:!0,validate:"select"},date:{value:"",required:!0,error:""},id:{value:"",error:"",required:!0,validate:"number",minLength:9,maxLength:9},address:{value:"",error:"",required:!0,validate:"text",minLength:10,maxLength:40},photo:{value:"",error:"",required:!0}},escort:{firstName:{value:"",error:"",required:!0,validate:"text",minLength:2,maxLength:20,helperText:"Custom error message"},lastName:{value:"",error:"",required:!0,validate:"text",minLength:2,maxLength:20},agreenemt:{value:!1,error:"",required:!0,validate:"checkbox",helperText:"Please accept our terms and conditions"},phone:{value:"",error:"",required:!0,validate:"phone",maxLength:15},photo:{value:"",error:"",required:!0}}},cr=RegExp(/^[A-Z ]+$/i),hr=RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i),ur=RegExp(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4,6})$/),mr=RegExp(/^[0-9]{5}([- /]?[0-9]{4})?$/),pr=RegExp(/^\d+$/),gr="standard",fr="normal",xr=["Parent Step","Child Step","Escort Step"],J=u.exports.createContext(),vr=({children:t})=>{const[r,n]=u.exports.useState(0),[l,i]=u.exports.useState(_e),o=()=>n(s=>s+1),d=()=>n(s=>s-1),m=(s,c,g)=>{const{type:b,name:y,value:h,files:_}=s.target,T=b==="checkbox"?c:b==="file"?_[0]:h,q=JSON.parse(JSON.stringify(l)),N=_e[g][y];if(!N)return;const{required:V,validate:B,minLength:S,maxLength:k,helperText:f}=N;let C="";if(V&&!T&&(C="This field is required"),S&&h&&h.length<S&&(C=`Minimum ${S} characters is required.`),k&&h&&h.length>k&&(C="Maximum length exceeded!"),B)switch(B){case"text":h&&!cr.test(h)&&(C=f||"This field accepts text only.");break;case"number":h&&!pr.test(h)&&(C=f||"This field accepts numbers only.");break;case"email":h&&!hr.test(h)&&(C=f||"Please enter a valid email address.");break;case"phone":h&&!ur.test(h)&&(C=f||"Please enter a valid phone number. i.e: xxx-xxx-xxxx");break;case"zip":h&&!mr.test(h)&&(C=f||"Please enter a valid zip code.");break;case"checkbox":c||(C=f||"Please provide a valid value.");break;case"select":h||(C=f||"Please select a value.");break}q[g][y]=le(ne({},q[g][y]),{value:T,error:C}),i(q)},p=()=>{console.log("forms values",l);const s=JSON.parse(JSON.stringify(l));for(let c in s)s[c]=Object.keys(s[c]).reduce((g,b)=>(g[b]=s[c][b].value,g),{});console.log("clone",s)};return e(J.Provider,{value:{labels:xr,activeStep:r,formValues:l,handleChange:m,handleNext:o,handleBack:d,handleSubmit:p,variant:gr,margin:fr},children:e("div",{className:"mui-step-form",children:t})})},we=pe("input")({display:"none"});function br(){const{formValues:t,handleChange:r,handleNext:n,variant:l,margin:i}=u.exports.useContext(J),{firstName:o,lastName:d,email:m,phone:p,id:s,address:c,photo:g}=t.parent,b=u.exports.useCallback(()=>Object.keys({firstName:o,lastName:d,email:m,phone:p,id:s,address:c,photo:g}).some(h=>t.parent[h].required&&!t.parent[h].value||t.parent[h].error),[t,o,d,m,p,s,c,g]),y=(h,_=null)=>r(h,_,"parent");return a(D,{children:[a(x,{container:!0,spacing:2,children:[e(x,{item:!0,xs:12,sm:6,children:e(v,{variant:l,margin:i,fullWidth:!0,label:"First Name",name:"firstName",placeholder:"Your first name",value:o.value,onChange:y,error:!!o.error,helperText:o.error,required:o.required})}),e(x,{item:!0,xs:12,sm:6,children:e(v,{variant:l,margin:i,fullWidth:!0,label:"Last Name",name:"lastName",placeholder:"Your last name",value:d.value,onChange:y,error:!!d.error,helperText:d.error,required:d.required})}),e(x,{item:!0,xs:12,sm:6,children:e(v,{variant:l,margin:i,fullWidth:!0,label:"Phone number",name:"phone",placeholder:"i.e: xxx-xxx-xxxx",value:p.value,onChange:y,error:!!p.error,helperText:p.error,required:p.required})}),e(x,{item:!0,xs:12,sm:6,children:e(v,{variant:l,margin:i,fullWidth:!0,label:"Email",name:"email",placeholder:"Your email address",type:"email",value:m.value,onChange:y,error:!!m.error,helperText:m.error,required:m.required})}),e(x,{item:!0,xs:12,sm:6,children:e(v,{variant:l,margin:i,fullWidth:!0,label:"I.D.",name:"id",placeholder:"Your Id",value:s.value,onChange:y,error:!!s.error,helperText:s.error,required:s.required})}),e(x,{item:!0,xs:12,sm:6,children:e(v,{variant:l,margin:i,fullWidth:!0,label:"Address",name:"address",placeholder:"Your address",value:c.value,onChange:y,error:!!c.error,helperText:c.error,required:c.required})}),e(x,{item:!0,xs:12,children:a("label",{htmlFor:"parent-image",children:[e(we,{name:"photo",required:g.required,accept:"image/*",id:"parent-image",type:"file",onChange:y}),e(M,{color:"primary","aria-label":"upload picture",component:"span",children:e(ge,{fontSize:"large"})}),"Upload Photo"]})}),e(x,{item:!0,sm:12,children:a("label",{htmlFor:"add-parent",children:[e(we,{accept:"image/*",id:"add-parent",type:"file"}),e(M,{color:"primary","aria-label":"upload picture",component:"span",children:e(fe,{fontSize:"large"})}),"Add Parent"]})})]}),e(R,{sx:{display:"flex",justifyContent:"flex-end"},children:e(I,{variant:"contained",sx:{mt:3,ml:1},disabled:b(),color:"primary",onClick:b()?()=>null:n,children:"Next"})})]})}const Le=pe("input")({display:"none"});function yr(){const{formValues:t,handleChange:r,handleBack:n,handleNext:l,variant:i,margin:o}=u.exports.useContext(J),{firstName:d,lastName:m,id:p,address:s,date:c,gender:g,photo:b}=t.child,y=u.exports.useCallback(()=>Object.keys({firstName:d,lastName:m,date:c,gender:g,id:p,address:s,photo:b}).some(_=>t.child[_].required&&!t.child[_].value||t.child[_].error),[t,d,m,c,g,p,s,b]),h=(_,T=null)=>r(_,T,"child");return a(D,{children:[a(x,{container:!0,spacing:2,children:[e(x,{item:!0,xs:12,sm:6,children:e(v,{variant:i,margin:o,fullWidth:!0,label:"First Name",name:"firstName",placeholder:"Enter child first name",value:d.value,onChange:h,error:!!d.error,helperText:d.error,required:d.required})}),e(x,{item:!0,xs:12,sm:6,children:e(v,{variant:i,margin:o,fullWidth:!0,label:"Last Name",name:"lastName",placeholder:"Enter child last name",value:m.value,onChange:h,error:!!m.error,helperText:m.error,required:m.required})}),e(x,{item:!0,xs:12,sm:6,children:e(v,{variant:i,margin:o,fullWidth:!0,label:"I.D.",name:"id",placeholder:"Your Id",value:p.value,onChange:h,error:!!p.error,helperText:p.error,required:p.required})}),e(x,{item:!0,xs:12,sm:6,children:e(v,{variant:i,margin:o,fullWidth:!0,InputLabelProps:{shrink:!0},label:"Date of birth",name:"date",type:"date",defaultValue:c.value,onChange:h,required:c.required})}),e(x,{item:!0,xs:12,sm:6,children:e(v,{variant:i,margin:o,fullWidth:!0,label:"Address",name:"address",placeholder:"Your address",value:s.value,onChange:h,error:!!s.error,helperText:s.error,required:s.required})}),e(x,{item:!0,xs:12,sm:6,children:a(v,{variant:i,margin:o,fullWidth:!0,select:!0,SelectProps:{native:!0},label:"Gender",name:"gender",value:g.value,onChange:h,error:!!g.error,helperText:g.error,required:g.required,children:[e("option",{value:"",children:" "}),e("option",{value:"Male",children:"Male"}),e("option",{value:"Female",children:"Female"})]})}),e(x,{item:!0,xs:12,children:a("label",{htmlFor:"child-image",children:[e(Le,{name:"photo",required:b.required,accept:"image/*",id:"child-image",type:"file",onChange:h}),e(M,{color:"primary","aria-label":"upload picture",component:"span",children:e(ge,{fontSize:"large"})}),"Upload Photo"]})}),e(x,{item:!0,sm:12,children:a("label",{htmlFor:"add-child",children:[e(Le,{accept:"image/*",id:"add-child",type:"file"}),e(M,{color:"primary","aria-label":"upload picture",component:"span",children:e(fe,{fontSize:"large"})}),"Add Child"]})})]}),a(R,{sx:{display:"flex",justifyContent:"flex-end",mt:3},children:[e(I,{onClick:n,sx:{mr:1},children:"Back"}),e(I,{variant:"contained",disabled:y(),color:"primary",onClick:y()?()=>null:l,children:"Next"})]})]})}const Ie=pe("input")({display:"none"});function Sr(){const{formValues:t,handleChange:r,handleBack:n,handleSubmit:l,variant:i,margin:o}=u.exports.useContext(J),{firstName:d,lastName:m,phone:p,agreenemt:s,photo:c}=t.escort,g=u.exports.useCallback(()=>Object.keys({firstName:d,lastName:m,phone:p,agreenemt:s,photo:c}).some(y=>t.escort[y].required&&!t.escort[y].value||t.escort[y].error),[t,d,m,p,s,c]),b=(y,h=null)=>r(y,h,"escort");return a(D,{children:[a(x,{container:!0,spacing:2,children:[e(x,{item:!0,xs:12,sm:6,children:e(v,{variant:i,margin:o,fullWidth:!0,label:"First Name",name:"firstName",placeholder:"Enter escort first name",value:d.value,onChange:b,error:!!d.error,helperText:d.error,required:d.required})}),e(x,{item:!0,xs:12,sm:6,children:e(v,{variant:i,margin:o,fullWidth:!0,label:"Last Name",name:"lastName",placeholder:"Enter escort last name",value:m.value,onChange:b,error:!!m.error,helperText:m.error,required:m.required})}),e(x,{item:!0,xs:12,sm:6,children:e(v,{variant:i,margin:o,fullWidth:!0,label:"Phone number",name:"phone",placeholder:"i.e: xxx-xxx-xxxx",value:p.value,onChange:b,error:!!p.error,helperText:p.error,required:p.required})}),e(x,{item:!0,xs:12,children:a("label",{htmlFor:"escort-image",children:[e(Ie,{name:"photo",required:c.required,accept:"image/*",id:"escort-image",type:"file",onChange:b}),e(M,{color:"primary","aria-label":"upload picture",component:"span",children:e(ge,{fontSize:"large"})}),"Upload Photo"]})}),e(x,{item:!0,xs:12,children:a("label",{htmlFor:"add-escort",children:[e(Ie,{accept:"image/*",id:"add-escort",type:"file"}),e(M,{color:"primary","aria-label":"upload picture",component:"span",children:e(fe,{fontSize:"large"})}),"Add Escort"]})})]}),a(x,{item:!0,xs:12,children:[e(he,{control:e(ue,{checked:s.value,onChange:b,name:"agreenemt",color:"primary",required:s.required}),label:"Agree to terms and conditions"}),e(mt,{error:!!s.error,children:s.error})]}),a(R,{sx:{display:"flex",justifyContent:"flex-end",mt:3},children:[e(I,{sx:{mr:1},onClick:n,children:"Back"}),e(I,{variant:"contained",disabled:g(),color:"primary",onClick:g()?()=>null:l,children:"Submit"})]})]})}function Cr(){return a(D,{children:[e(L,{variant:"h2",align:"center",sx:{py:4},children:"Thank you!"}),e(L,{component:"p",align:"center",children:"Your form has been successfully submitted."})]})}const Nr=t=>{switch(t){case 0:return e(br,{});case 1:return e(yr,{});case 2:return e(Sr,{});default:throw new Error("Unknown step")}},kr=()=>{const{activeStep:t,labels:r}=u.exports.useContext(J);return e(D,{children:t===r.length?e(Cr,{}):a(D,{children:[e(pt,{activeStep:t,sx:{py:3},alternativeLabel:!0,children:r.map(n=>e(gt,{children:e(ft,{children:n})},n))}),Nr(t)]})})};var Er=()=>e(vr,{children:e(G,{component:"main",maxWidth:"sm",sx:{mb:4},children:a(ee,{variant:"outlined",sx:{my:{xs:3,md:6},p:{xs:2,md:3}},children:[e("div",{children:e("h2",{children:"Child Registration Form"})}),e(kr,{})]})})}),_r=()=>e(E,{direction:"row",flexWrap:"wrap",gap:3,children:e("iframe",{width:"400",height:"240",src:"https://rtsp.me/embed/NHANEa74/",frameBorder:"0"})});function wr(t){return e(E,{justifyContent:"left",direction:"column",flexWrap:"wrap",children:t.items.map(r=>a(w,{children:[r._firstName," ",r._lastName]}))})}const Lr=()=>{const t=P(Ot);P(ze);const r=async()=>{console.log("Submit"),Oe.sendMessage=(p,s)=>{xt({method:"post",url:"http://localhost:8001/escort/send",data:{userId:p,msg:s}})}};console.log(t);for(var n=[],l=0;l<t.length;l++)t[l]._relation&&t[l]._relation==="Parent"&&n.push(l);return e("div",{children:e(x,{align:"center",children:a(ee,{elevation:10,style:{padding:20,width:480,height:"60vh",margin:"30px auto"},children:[e(Z,{style:{backgroundColor:"#BC88C9"},children:e(ce,{})}),e("h2",{children:"Send Message"}),e(R,{sx:{minWidth:120,textAlign:"left"},children:e(K,{children:a(Q,{labelId:"demo-simple-select-label",id:"demo-simple-select",sx:{color:"#3F414D",width:"100%",minWidth:"150px",height:"30px",mt:"20px"},children:[e(w,{value:"None",children:"None"}),e(w,{value:"All Parents",children:"All Parents"}),e(wr,{items:t})]})})}),e(R,{sx:{minWidth:120,textAlign:"left"},children:e(K,{children:a(Q,{labelId:"demo-simple-select-label",id:"demo-simple-select",sx:{color:"#3F414D",width:"100%",minWidth:"150px",height:"30px",mt:"20px"},children:[e(w,{value:"None",children:"None"}),e(w,{value:"Staff",children:"All Staff"})]})})}),e(v,{style:{margin:"8px 0"},label:"Text Message",placeholder:"Enter your message",fullWidth:!0,required:!0,rows:4}),e(I,{variant:"contained",style:{margin:"8px 0"},color:"secondary",onClick:r,children:"SEND"})]})})})};var Ir=()=>{const t=P(te);return e(u.exports.Suspense,{fallback:e("div",{children:"Loading..."}),children:e(vt,{children:t?e(D,{children:a(A,{path:"/",element:e(Ht,{}),children:[e(A,{index:!0,element:e(Zt,{})}),e(A,{path:"/kindergarten",element:e(Jt,{})}),e(A,{path:"/attendance",element:e(er,{})}),e(A,{path:"/children",element:e(rr,{})}),e(A,{path:"/staff",element:e(nr,{})}),e(A,{path:"/events",element:e(dr,{})}),e(A,{path:"/watchLive",element:e(_r,{})}),e(A,{path:"/messages",element:e(Lr,{})})]})}):a(D,{children:[e(A,{path:"/login",element:e(Kt,{})}),e(A,{path:"/register",element:e(Qt,{})}),e(A,{path:"/childForm/:kindergartenId",element:e(Er,{})}),e(A,{path:"/",element:e(bt,{to:"/login"})})]})})})};yt.render(e(St,{children:e(Ct,{children:e(Ir,{})})}),document.getElementById("root"))});export default Ar();
