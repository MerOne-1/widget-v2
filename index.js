var H=Object.defineProperty;var U=(o,r,p)=>r in o?H(o,r,{enumerable:!0,configurable:!0,writable:!0,value:p}):o[r]=p;var L=(o,r,p)=>U(o,typeof r!="symbol"?r+"":r,p);import{t,j as e,S as G,E as J,C as _,a as q}from"./booking-core.DBm2mNXA.js";import{a as A,f as K,d as a,r as u,R as X,o as Q}from"./vendor.CFoNIRJ2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const x of n.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&d(x)}).observe(document,{childList:!0,subtree:!0});function p(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(s){if(s.ep)return;s.ep=!0;const n=p(s);fetch(s.href,n)}})();var V,I=A;V=I.createRoot,I.hydrateRoot;const Z=K`
  /* Reset styles */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Base styles */
  :root {
    font-family: 'Poppins', system-ui, -apple-system, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  html, body {
    margin: 0;
    padding: 0;
    min-width: 320px;
    min-height: 100vh;
  }

  body {
    background-color: #ffffff;
    color: #000000;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    line-height: 1.2;
  }

  /* Portal styles */
  .booking-widget-portal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
  }

  /* Interactive elements */
  a {
    color: inherit;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }

  button {
    background: none;
    border: none;
    font: inherit;
    cursor: pointer;
    outline: inherit;

    &:focus-visible {
      outline: 2px solid #F5BBC9;
      outline-offset: 2px;
    }
  }

  /* Utility classes */
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,ee=a.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,te=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,oe=a.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,N=a.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  padding: 4px 8px;
  color: ${t.colors.text};
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    color: ${t.colors.primary};
  }
`,re=a.span`
  font-size: ${t.typography.title.size};
  font-weight: ${t.typography.title.weight};
  color: ${t.colors.title};
  min-width: 180px;
  text-align: center;
`,ne=a.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background-color: ${t.colors.border};
  border: 2px solid ${t.colors.containerBorder};
  border-radius: ${t.borderRadius.default};
  overflow: hidden;
`,ie=a.div`
  background-color: white;
  padding: 12px 8px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: ${t.colors.text};
`,O=a.button`
  background-color: white;
  border: none;
  padding: 12px 8px;
  text-align: center;
  cursor: pointer;
  position: relative;
  color: ${o=>o.$isDisabled?"#ccc":t.colors.text};
  font-weight: ${o=>o.$isToday||o.$isSelected?"600":"normal"};
  
  ${o=>o.$isToday&&`
    &:after {
      content: '';
      position: absolute;
      bottom: 4px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: ${t.colors.button};
    }
  `}
  
  ${o=>!o.$isDisabled&&`
    &:hover {
      background-color: #f5f5f5;
    }
  `}
  
  ${o=>o.$isSelected&&`
    background-color: ${t.colors.button} !important;
    color: white;
  `}
  
  ${o=>o.$isDisabled&&`
    cursor: not-allowed;
  `}
`,ae=a.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`,se=a.button`
  padding: 12px;
  border: 2px solid ${o=>o.$isSelected?t.colors.button:t.colors.containerBorder};
  border-radius: ${t.borderRadius.default};
  background-color: ${o=>o.$isSelected?t.colors.button:"white"};
  color: ${o=>o.$isSelected?"white":t.colors.text};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: ${t.colors.button};
    background-color: ${o=>o.$isSelected?t.colors.button:"#f5f5f5"};
  }
`,le=({onDateTimeSelect:o})=>{const[r,p]=u.useState(null),[d,s]=u.useState(null),[n,x]=u.useState(new Date),g=new Date,C=new Date(g.getFullYear(),g.getMonth(),g.getDate()),y=new Date(n.getFullYear(),n.getMonth()+1,0).getDate(),M=new Date(n.getFullYear(),n.getMonth(),1).getDay(),v=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],l=()=>{const i=new Date(n);i.setMonth(i.getMonth()-1);const m=new Date(i.getFullYear(),i.getMonth(),1),h=new Date(g.getFullYear(),g.getMonth(),1);m>=h&&x(i)},b=()=>{const i=new Date(n);i.setMonth(i.getMonth()+1),x(i)},S=()=>{const i=[];for(let m=9;m<17;m++)for(let h=0;h<60;h+=15){const $=`${m.toString().padStart(2,"0")}:${h.toString().padStart(2,"0")}`;i.push($)}return i},D=i=>{const m=new Date(n.getFullYear(),n.getMonth(),i);p(m),s(null),o(m,null)},j=i=>{s(i),o(r,i)},z=["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"],B=S();return e.jsxs(ee,{children:[e.jsx(te,{children:e.jsxs(oe,{children:[e.jsx(N,{onClick:l,disabled:n.getMonth()===g.getMonth()&&n.getFullYear()===g.getFullYear(),children:"‹"}),e.jsxs(re,{children:[v[n.getMonth()]," ",n.getFullYear()]}),e.jsx(N,{onClick:b,children:"›"})]})}),e.jsxs(ne,{children:[z.map(i=>e.jsx(ie,{children:i},i)),Array.from({length:M}).map((i,m)=>e.jsx(O,{disabled:!0,$isDisabled:!0},`empty-${m}`)),Array.from({length:y}).map((i,m)=>{const h=m+1,$=new Date(n.getFullYear(),n.getMonth(),h),P=h===g.getDate()&&n.getMonth()===g.getMonth()&&n.getFullYear()===g.getFullYear(),c=(r==null?void 0:r.getDate())===h&&(r==null?void 0:r.getMonth())===n.getMonth()&&(r==null?void 0:r.getFullYear())===n.getFullYear(),f=$<C;return e.jsx(O,{onClick:()=>!f&&D(h),$isToday:P,$isSelected:c,$isDisabled:f,disabled:f,children:h},h)})]}),r&&e.jsx(ae,{children:B.map(i=>e.jsx(se,{onClick:()=>j(i),$isSelected:d===i,children:i},i))})]})},ce=({onValidityChange:o,onDateSelect:r,onTimeSelect:p})=>{const d=(s,n)=>{const x=s!==null&&n!==null;if(o(x),x&&s&&n){const g=s.toLocaleDateString("es-ES",{weekday:"long",year:"numeric",month:"long",day:"numeric"});r(g),p(n)}};return e.jsx(le,{onDateTimeSelect:d})},de=[{id:"waxing",name:"Waxing",services:[{id:"half-leg-wax",name:"Half Leg Waxing",price:30,duration:30,category:"Waxing"},{id:"full-leg-wax",name:"Full Leg Waxing",price:45,duration:45,category:"Waxing"},{id:"arms-wax",name:"Arms Waxing",price:25,duration:30,category:"Waxing"},{id:"brazilian-wax",name:"Brazilian Waxing",price:50,duration:45,category:"Waxing"},{id:"eyebrow-wax",name:"Eyebrow Waxing",price:15,duration:15,category:"Waxing"}]},{id:"manicure",name:"Manicure",services:[{id:"classic-manicure",name:"Classic Manicure",price:35,duration:45,category:"Manicure"},{id:"permanent-manicure",name:"Permanent Manicure",price:50,duration:60,category:"Manicure"},{id:"semi-permanent-manicure",name:"Semi-Permanent Manicure",price:45,duration:50,category:"Manicure"},{id:"french-manicure",name:"French Manicure",price:40,duration:45,category:"Manicure"}]},{id:"pedicure",name:"Pedicure",services:[{id:"classic-pedicure",name:"Classic Pedicure",price:45,duration:60,category:"Pedicure"},{id:"permanent-pedicure",name:"Permanent Pedicure",price:60,duration:75,category:"Pedicure"},{id:"semi-permanent-pedicure",name:"Semi-Permanent Pedicure",price:55,duration:65,category:"Pedicure"},{id:"french-pedicure",name:"French Pedicure",price:50,duration:60,category:"Pedicure"}]}],E=[{id:"emp1",name:"Sarah Johnson",role:"Senior Beautician",services:["half-leg-wax","full-leg-wax","arms-wax","brazilian-wax","eyebrow-wax"]},{id:"emp2",name:"Emily Chen",role:"Nail Specialist",services:["classic-manicure","permanent-manicure","semi-permanent-manicure","french-manicure","classic-pedicure","permanent-pedicure","semi-permanent-pedicure","french-pedicure"]},{id:"emp3",name:"Maria Garcia",role:"Senior Beautician",services:["half-leg-wax","full-leg-wax","arms-wax","brazilian-wax","eyebrow-wax","classic-manicure","french-manicure","classic-pedicure","french-pedicure"]}],pe=a.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 16px;

  @media (max-width: 480px) {
    padding: 0;
    align-items: flex-end;
  }
`,ue=a.div`
  background: white;
  padding: 32px;
  border: 2px solid ${t.colors.containerBorder};
  border-radius: ${t.borderRadius.default};
  position: relative;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 768px) {
    padding: 24px;
    width: 95%;
  }

  @media (max-width: 480px) {
    padding: 20px;
    width: 100%;
    height: 85vh;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: none;
  }
`,ge=a.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: black;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  
  @media (max-width: 480px) {
    top: 12px;
    right: 12px;
    width: 28px;
    height: 28px;
    font-size: 20px;
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  align-items: center;
  justify-content: center;
  opacity: 0.8;
  
  &:hover {
    opacity: 1;
  }
`,me=a.h2`
  margin-bottom: 24px;
  color: ${t.colors.title};
  font-size: ${t.typography.title.size};
  font-weight: ${t.typography.title.weight};
  text-transform: ${t.typography.title.transform};
  font-family: ${t.typography.fontFamily};
`,F=a.button`
  background-color: ${t.colors.button};
  color: ${t.colors.buttonText};
  padding: 16px 32px;
  border: none;
  border-radius: ${t.borderRadius.button};
  font-size: ${t.typography.button.size};
  font-weight: ${t.typography.button.weight};
  text-transform: ${t.typography.button.transform};
  font-family: ${t.typography.fontFamily};
  width: 100%;
  cursor: pointer;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,he=a.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 8px;
  margin-right: -8px;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    
    &:hover {
      background: rgba(0, 0, 0, 0.7);
    }
  }
`,fe=({onClose:o})=>{const[r,p]=u.useState([]),[d,s]=u.useState(null),[n,x]=u.useState(!1),[g,C]=u.useState(!1),[y,M]=u.useState(null),v=u.useRef(null),[l,b]=u.useState("services"),[S,D]=u.useState(""),[j,z]=u.useState(""),[B,i]=u.useState("");u.useEffect(()=>{const c=f=>{f.key==="Escape"&&o()};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[o]);const m=c=>{p(c)},h=()=>{if(l==="services"&&r.length>0){const c=E.filter(f=>r.every(T=>f.services.includes(T.id)));c.length===1?(s(c[0]),b("datetime")):b("employee")}else l==="employee"&&d?b("datetime"):l==="datetime"&&n&&b("client-info")},$=()=>{l==="client-info"?b("datetime"):l==="datetime"?E.filter(f=>r.every(T=>f.services.includes(T.id))).length===1?b("services"):b("employee"):l==="employee"&&b("services")},P=()=>{if(r.length!==0&&!(l==="client-info"&&(!v.current||(v.current(!0),!g)))&&g&&y){const c=Math.random().toString(36).substring(2,10).toUpperCase();i(c),console.log("Booking submitted:",{bookingNumber:c,services:r,employee:d,date:S,time:j,clientInfo:y}),b("confirmation")}};return A.createPortal(e.jsx(pe,{onClick:c=>{c.target===c.currentTarget&&o()},children:e.jsxs(ue,{onClick:c=>c.stopPropagation(),children:[e.jsx(ge,{onClick:o,children:"×"}),e.jsxs(me,{children:[l==="services"&&"Selecciona los Servicios",l==="employee"&&"Elige tu Profesional",l==="datetime"&&"Selecciona Fecha y Hora",l==="client-info"&&"Tus Datos",l==="confirmation"&&"¡Reserva Confirmada!"]}),e.jsxs(he,{children:[l==="services"&&e.jsx(G,{categories:de,onServiceSelect:m,selectedServices:r}),l==="employee"&&e.jsx(J,{employees:E,selectedServices:r,selectedEmployee:d,onEmployeeSelect:s}),l==="datetime"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:t.typography.title.size,fontWeight:t.typography.title.weight,color:t.colors.text},children:d==null?void 0:d.name}),e.jsx("p",{style:{margin:0,fontSize:t.typography.text.size,color:t.colors.text,opacity:.8},children:d==null?void 0:d.role})]}),e.jsx(ce,{onValidityChange:x,onDateSelect:D,onTimeSelect:z})]}),l==="client-info"&&e.jsx(_,{onFormValidityChange:(c,f)=>{C(c),f&&M(f)},onValidateRef:c=>{v.current=c}}),l==="confirmation"&&y&&e.jsx(q,{bookingNumber:B,selectedServices:r,clientInfo:y,appointmentTime:j,appointmentDate:S})]}),l!=="confirmation"&&e.jsxs("div",{style:{display:"flex",gap:"16px",marginTop:"24px"},children:[l!=="services"&&e.jsx(F,{onClick:$,style:{flex:1,backgroundColor:"#f5f5f5",color:"black"},children:"Volver"}),l==="client-info"?e.jsx(F,{onClick:P,style:{flex:1},children:"Reservar Ahora"}):e.jsx(F,{disabled:l==="services"&&r.length===0||l==="employee"&&!d||l==="datetime"&&!n,onClick:h,style:{flex:1},children:"Siguiente"})]})]})}),document.body)},xe=a.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: ${t.typography.fontFamily};
`,R=a.section`
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 2px solid ${t.colors.border};
  border-radius: ${t.borderRadius.default};
  background: white;
`,k=a.h2`
  font-size: ${t.typography.title.size};
  font-weight: ${t.typography.title.weight};
  margin-bottom: 1.5rem;
  color: ${t.colors.title};
  border-bottom: 2px solid ${t.colors.border};
  padding-bottom: 0.5rem;
  text-transform: ${t.typography.title.transform};
`,be=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`,ye=a.button`
  background-color: ${t.colors.button};
  color: ${t.colors.buttonText};
  padding: 12px 24px;
  border: none;
  border-radius: ${t.borderRadius.button};
  font-size: ${t.typography.button.size};
  font-weight: ${t.typography.button.weight};
  cursor: pointer;
  text-transform: ${t.typography.button.transform};
`,we=a.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  font-family: ${t.typography.fontFamily};
`,w=a.div`
  width: 100px;
  height: 100px;
  background-color: ${o=>o.$color};
  border-radius: ${t.borderRadius.default};
  border: 1px solid ${t.colors.border};
  position: relative;
  
  &:after {
    content: '${o=>o.$name}';
    position: absolute;
    bottom: -25px;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: ${t.typography.text.size};
    color: ${t.colors.text};
    text-transform: ${t.typography.text.transform};
  }
`,ve=()=>{const[o,r]=u.useState(!1);return e.jsxs(xe,{children:[e.jsx(k,{children:"Booking Widget Development"}),e.jsxs(R,{children:[e.jsx(k,{children:"Color Palette"}),e.jsxs(we,{children:[e.jsx(w,{$color:t.colors.border,$name:"Border Color"}),e.jsx(w,{$color:t.colors.title,$name:"Title Color"}),e.jsx(w,{$color:t.colors.text,$name:"Text Color"}),e.jsx(w,{$color:t.colors.button,$name:"Button Color"}),e.jsx(w,{$color:t.colors.buttonText,$name:"Button Text"}),e.jsx(w,{$color:t.colors.icon,$name:"Icon Color"})]})]}),e.jsxs(R,{children:[e.jsx(k,{children:"Widget Demo"}),e.jsx(be,{children:e.jsxs("div",{children:[e.jsx("h3",{children:"Book a Service"}),e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"Click the button below to open the booking widget"}),e.jsx(ye,{onClick:()=>r(!0),children:"Book Now"})]})}),o&&e.jsx(fe,{onClose:()=>r(!1)})]}),e.jsxs(R,{children:[e.jsx(k,{children:"Development Notes"}),e.jsxs("ul",{style:{lineHeight:"1.6",color:"#666"},children:[e.jsx("li",{children:"The widget uses a modern, clean design with a pink color scheme"}),e.jsx("li",{children:"Services are organized by categories (e.g., Waxing, Manicure, Pedicure)"}),e.jsx("li",{children:"Each service shows its name, duration, and price"}),e.jsx("li",{children:"The interface is responsive and works on all screen sizes"}),e.jsx("li",{children:"Press ESC or click outside to close the popup"})]})]})]})},$e=a.div`
  min-height: 100vh;
  background-color: #ffffff;
  padding: 20px;
  color: #000000;
`,Se=a.h1`
  font-size: 24px;
  color: #000000;
  margin-bottom: 20px;
  border-bottom: 2px solid #F5BBC9;
  padding-bottom: 10px;
`,je=a.div`
  background-color: #F5BBC9;
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
  color: #000000;
`;function ke(){return e.jsxs(e.Fragment,{children:[e.jsx(Z,{}),e.jsxs($e,{children:[e.jsx(Se,{children:"Booking Widget Development"}),e.jsx(je,{children:"If you can see this box with pink background, styled-components is working!"}),e.jsx(ve,{})]})]})}const Ce=a.div`
  padding: 20px;
  margin: 20px;
  border: 2px solid #ff4444;
  background-color: #fff;
  border-radius: 4px;
`,Me=a.pre`
  margin-top: 10px;
  padding: 10px;
  background-color: #f8f8f8;
  overflow-x: auto;
`;class De extends u.Component{constructor(){super(...arguments);L(this,"state",{hasError:!1,error:null,errorInfo:null})}static getDerivedStateFromError(p){return{hasError:!0,error:p,errorInfo:null}}componentDidCatch(p,d){console.error("Uncaught error:",p,d),this.setState({error:p,errorInfo:d})}render(){return this.state.hasError?e.jsxs(Ce,{children:[e.jsx("h2",{children:"Something went wrong 🔧"}),e.jsxs(Me,{children:[this.state.error&&this.state.error.toString(),this.state.errorInfo&&this.state.errorInfo.componentStack]})]}):this.props.children}}console.log("Starting application initialization...");var Y;console.log("React version:",(Y=X)==null?void 0:Y.version);console.log("Environment:","production");function W(){console.log("Looking for root element...");const o=document.getElementById("root");if(!o)throw new Error("Root element not found! This is a critical error.");for(console.log("Root element found, clearing any existing content...");o.firstChild;)o.removeChild(o.firstChild);console.log("Creating React root...");const r=V(o);console.log("Rendering React application..."),r.render(e.jsx(u.StrictMode,{children:e.jsx(De,{children:e.jsx(Q,{theme:t,children:e.jsx(ke,{})})})})),console.log("Initial render completed.")}document.readyState==="loading"?(console.log("Document still loading, waiting for DOMContentLoaded..."),document.addEventListener("DOMContentLoaded",()=>{console.log("DOMContentLoaded fired, initializing app..."),W()})):(console.log("Document already loaded, initializing app immediately..."),W());window.addEventListener("error",o=>{console.error("Uncaught error:",o.error)});window.addEventListener("unhandledrejection",o=>{console.error("Unhandled promise rejection:",o.reason)});
