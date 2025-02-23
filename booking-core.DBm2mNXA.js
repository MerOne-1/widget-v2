var A=Object.defineProperty,q=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var _=(r,i,t)=>i in r?A(r,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[i]=t,z=(r,i)=>{for(var t in i||(i={}))Y.call(i,t)&&_(r,t,i[t]);if(R)for(var t of R(i))G.call(i,t)&&_(r,t,i[t]);return r},B=(r,i)=>q(r,V(i));import{r as f,d as n,R as H}from"./vendor.CFoNIRJ2.js";var D={exports:{}},k={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M=f,U=Symbol.for("react.element"),W=Symbol.for("react.fragment"),J=Object.prototype.hasOwnProperty,K=M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Q={key:!0,ref:!0,__self:!0,__source:!0};function L(r,i,t){var d,a={},c=null,x=null;t!==void 0&&(c=""+t),i.key!==void 0&&(c=""+i.key),i.ref!==void 0&&(x=i.ref);for(d in i)J.call(i,d)&&!Q.hasOwnProperty(d)&&(a[d]=i[d]);if(r&&r.defaultProps)for(d in i=r.defaultProps,i)a[d]===void 0&&(a[d]=i[d]);return{$$typeof:U,type:r,key:c,ref:x,props:a,_owner:K.current}}k.Fragment=W;k.jsx=L;k.jsxs=L;D.exports=k;var e=D.exports;const o={colors:{containerBorder:"#000000",border:"#F5BBC9",title:"#000000",text:"#000000",buttonText:"#FFFFFF",button:"#000000",icon:"#F5BBC9"},typography:{fontFamily:'"Poppins", sans-serif',title:{size:"18px",weight:600,transform:"uppercase"},text:{size:"14px",weight:400,transform:"none"},button:{size:"14px",weight:600,transform:"uppercase"}},borderRadius:{button:"5px",default:"5px"}},Z=n.div`
  margin-bottom: 24px;
  font-family: ${o.typography.fontFamily};
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ee=n.div`
  width: 100%;
  padding: 16px;
  font-family: ${o.typography.fontFamily};
  font-size: ${o.typography.title.size};
  font-weight: ${o.typography.title.weight};
  cursor: pointer;
  background-color: white;
  text-transform: ${o.typography.text.transform};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
  border-bottom: 2px solid ${o.colors.containerBorder};
  
  &:hover {
    background-color: white;
  }

  &::after {
    content: '';
    width: 14px;
    height: 14px;
    background-image: url('data:image/svg+xml;charset=US-ASCII,<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 7L13 1" stroke="%23000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    background-repeat: no-repeat;
    background-position: center;
    transform: ${r=>r.$isExpanded?"rotate(180deg)":"rotate(0deg)"};
    transition: transform 0.2s ease;
  }
`,oe=n.div`
  background: white;
  max-height: ${r=>r.$isExpanded?"1000px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  opacity: ${r=>r.$isExpanded?"1":"0"};
  transform-origin: top;
  transform: ${r=>r.$isExpanded?"scaleY(1)":"scaleY(0)"};
  transition: all 0.3s ease-in-out;
`,te=n.div`
  padding: 16px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  ${r=>r.$isSelected?`
    border: 2px solid ${o.colors.containerBorder};
    border-radius: ${o.borderRadius.default};
    margin: 8px;
  `:`
    border: none;
    border-bottom: 1px solid ${o.colors.containerBorder};
    margin: 0;
  `}
  
  &:hover {
    background-color: ${r=>r.$isSelected?"white":"#f8f8f8"};
  }
`,re=n.div`
  flex: 1;
`,ie=n.h3`
  margin: 0;
  font-size: ${o.typography.title.size};
  font-weight: ${o.typography.title.weight};
  color: ${o.colors.title};
  text-transform: none;
`,ne=n.div`
  font-size: ${o.typography.text.size};
  font-weight: ${o.typography.text.weight};
  color: ${o.colors.text};
  margin-top: 4px;
  text-transform: ${o.typography.text.transform};
`,se=n.div`
  font-weight: ${o.typography.title.weight};
  font-size: ${o.typography.title.size};
  color: ${o.colors.title};
`,ae=n.div`
  border: 2px solid ${o.colors.containerBorder};
  border-radius: ${o.borderRadius.default};
  overflow: hidden;
  background-color: white;
`,le=n.div`
  background: white;
  padding: 16px;
  border: 2px solid ${o.colors.border};
  border-radius: ${o.borderRadius.default};
`,de=n.h3`
  margin: 0 0 8px 0;
  font-size: ${o.typography.title.size};
  font-weight: ${o.typography.title.weight};
  color: ${o.colors.title};
`,P=n.div`
  display: flex;
  justify-content: space-between;
  color: ${o.colors.text};
  margin-top: 4px;
`,Se=({categories:r,onServiceSelect:i,selectedServices:t})=>{const[d,a]=f.useState(null),c=s=>{const l=Math.floor(s/60),p=s%60;return l===0?`${p}min`:`${l}h${p>0?` ${p}min`:""}`},x=s=>`${s.toFixed(2)}€`,b=s=>{a(d===s?null:s)},y=s=>{const p=t.some(m=>m.id===s.id)?t.filter(m=>m.id!==s.id):[...t,s];i(p)},$=t.reduce((s,l)=>s+l.duration,0),h=t.reduce((s,l)=>s+l.price,0);return e.jsxs(Z,{children:[e.jsx(ae,{children:r.map(s=>e.jsxs("div",{children:[e.jsx(ee,{$isExpanded:d===s.id,onClick:()=>b(s.id),children:s.name}),e.jsx(oe,{$isExpanded:d===s.id,children:s.services.map(l=>e.jsxs(te,{$isSelected:t.some(p=>p.id===l.id),onClick:()=>y(l),children:[e.jsxs(re,{children:[e.jsx(ie,{children:l.name}),e.jsx(ne,{children:c(l.duration)})]}),e.jsx(se,{children:x(l.price)})]},l.id))})]},s.id))}),t.length>0&&e.jsxs(le,{children:[e.jsx(de,{children:"Servicios Seleccionados"}),t.map(s=>e.jsxs(P,{children:[e.jsx("span",{children:s.name}),e.jsx("span",{children:c(s.duration)})]},s.id)),e.jsxs(P,{style:{marginTop:"12px",fontWeight:"bold"},children:[e.jsx("span",{children:"Total"}),e.jsxs("span",{children:[c($)," - ",x(h)]})]})]})]})},ce=n.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,pe=n.div`
  padding: 16px;
  border: 2px solid ${r=>r.$isSelected?o.colors.button:o.colors.border};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: ${o.colors.button};
    background-color: ${r=>r.$isSelected?"white":"#f8f8f8"};
  }
`,xe=n.h3`
  margin: 0;
  font-size: ${o.typography.title.size};
  font-weight: ${o.typography.title.weight};
  color: ${o.colors.text};
`,he=n.p`
  margin: 4px 0 0;
  font-size: ${o.typography.text.size};
  color: ${o.colors.text};
  opacity: 0.8;
`,Ce=({employees:r,selectedServices:i,selectedEmployee:t,onEmployeeSelect:d})=>{const a=r.filter(c=>i.every(x=>c.services.includes(x.id)));return a.length===0?e.jsx("div",{children:"No hay profesionales disponibles para los servicios seleccionados."}):a.length===1?(t||d(a[0]),null):e.jsx(ce,{children:a.map(c=>e.jsxs(pe,{$isSelected:(t==null?void 0:t.id)===c.id,onClick:()=>d(c),children:[e.jsx(xe,{children:c.name}),e.jsx(he,{children:c.role})]},c.id))})},me=n.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px;
  background: linear-gradient(to bottom, #ffffff, #fafafa);

  @media (max-width: 480px) {
    padding: 16px;
    gap: 24px;
  }
`,T=n.div`
  display: flex;
  gap: 24px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`,u=n.label`
  display: block;
  margin-bottom: 8px;
  color: ${o.colors.text};
  font-size: ${o.typography.text.size};
  font-weight: 500;
  transition: color 0.2s ease;
`,g=n.div`
  flex: 1;
  position: relative;
  
  &:focus-within label {
    color: ${o.colors.button};
  }
`,O=`
  width: 100%;
  padding: 16px;
  border: 2px solid ${o.colors.containerBorder};
  border-radius: ${o.borderRadius.default};
  font-family: ${o.typography.fontFamily};
  font-size: ${o.typography.text.size};
  color: ${o.colors.text};
  background-color: white;
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    padding: 14px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 16px; /* Larger on mobile for better tap targets */
  }
  
  &:hover {
    border-color: ${o.colors.button}80;
  }
  
  &:focus {
    outline: none;
    border-color: ${o.colors.button};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  &::placeholder {
    color: #999;
    font-size: 14px;
  }
`,j=n.input`
  ${O}
`,fe=n.textarea`
  ${O}
  resize: vertical;
  min-height: 120px;
`,w=n.div`
  position: absolute;
  left: 4px;
  bottom: -20px;
  color: #e53935;
  font-size: 12px;
  font-weight: 500;
  opacity: 0;
  transform: translateY(-4px);
  animation: slideIn 0.2s ease forwards;
  
  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;n.div`
  font-size: 18px;
  font-weight: 500;
  color: ${o.colors.text};
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${o.colors.border};
`;const ke=({onFormValidityChange:r,onValidateRef:i})=>{const[t,d]=f.useState({firstName:"",lastName:"",email:"",phone:"",address:"",comments:""}),[a,c]=f.useState({}),[x,b]=f.useState(!1),y=l=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l),$=l=>/^(?:\+34|0034)?[6789]\d{8}$/.test(l.replace(/\s/g,"")),h=l=>p=>{const m=p.target.value,S=B(z({},t),{[l]:m});if(d(S),a[l]){const C=z({},a);delete C[l],c(C)}s(!1)},s=H.useCallback(l=>{const p={},m=t.firstName.trim()!=="",S=t.lastName.trim()!=="",C=t.email.trim()!==""&&y(t.email),X=t.phone.trim()!==""&&$(t.phone),I=t.address.trim()!=="";m||(p.firstName="Campo requerido"),S||(p.lastName="Campo requerido"),t.email.trim()?y(t.email)||(p.email="Email no válido"):p.email="Campo requerido",t.phone.trim()?$(t.phone)||(p.phone="Teléfono no válido"):p.phone="Campo requerido",I||(p.address="Campo requerido"),l&&(c(p),b(!0)),r(m&&S&&C&&X&&I,t)},[t,y,$,r]);return f.useEffect(()=>{i(s)},[i,s]),f.useEffect(()=>{s(!1)},[s]),e.jsxs(me,{children:[e.jsxs(T,{children:[e.jsxs(g,{children:[e.jsx(u,{children:"Nombre"}),e.jsx(j,{type:"text",value:t.firstName,onChange:h("firstName"),placeholder:"Introduce tu nombre"}),a.firstName&&e.jsx(w,{children:a.firstName})]}),e.jsxs(g,{children:[e.jsx(u,{children:"Apellidos"}),e.jsx(j,{type:"text",value:t.lastName,onChange:h("lastName"),placeholder:"Introduce tus apellidos"}),a.lastName&&e.jsx(w,{children:a.lastName})]})]}),e.jsxs(T,{children:[e.jsxs(g,{children:[e.jsx(u,{children:"Email"}),e.jsx(j,{type:"email",value:t.email,onChange:h("email"),placeholder:"Introduce tu email"}),a.email&&e.jsx(w,{children:a.email})]}),e.jsxs(g,{children:[e.jsx(u,{children:"Teléfono"}),e.jsx(j,{type:"tel",value:t.phone,onChange:h("phone"),placeholder:"+34 XXX XXX XXX"}),a.phone&&e.jsx(w,{children:a.phone})]})]}),e.jsxs(g,{children:[e.jsx(u,{children:"Dirección"}),e.jsx(j,{type:"text",value:t.address,onChange:h("address"),placeholder:"Introduce tu dirección"}),a.address&&e.jsx(w,{children:a.address})]}),e.jsxs(g,{children:[e.jsx(u,{children:"Comentarios (Opcional)"}),e.jsx(fe,{value:t.comments,onChange:h("comments"),placeholder:"¿Alguna nota o petición especial?"})]})]})},ue=n.div`
  padding: 32px;
  text-align: center;
  font-family: ${o.typography.fontFamily};
`,ge=n.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 24px;
  border-radius: 50%;
  background-color: #4CAF50;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
`,be=n.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${o.colors.title};
  margin-bottom: 16px;
`,ye=n.div`
  font-size: 18px;
  font-weight: 500;
  color: ${o.colors.text};
  margin-bottom: 24px;
  padding: 12px;
  background-color: #f5f5f5;
  border-radius: ${o.borderRadius.default};
  display: inline-block;
`,E=n.div`
  margin-bottom: 24px;
  padding: 16px;
  border: 2px solid ${o.colors.containerBorder};
  border-radius: ${o.borderRadius.default};
  text-align: left;
`,N=n.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${o.colors.title};
  margin-bottom: 12px;
`,F=n.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`,v=n.li`
  margin-bottom: 8px;
  padding-left: ${r=>r.$noBullet?"0":"24px"};
  position: relative;
  line-height: 1.5;
  
  &:before {
    content: ${r=>r.$noBullet?"none":'"•"'};
    position: absolute;
    left: 8px;
    color: ${o.colors.border};
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`,$e=n.div`
  font-style: italic;
  color: #666;
  margin-top: 24px;
`,ze=({bookingNumber:r,selectedServices:i,clientInfo:t,appointmentTime:d,appointmentDate:a})=>{const c=i.reduce((x,b)=>x+b.price,0);return e.jsxs(ue,{children:[e.jsx(ge,{children:"✓"}),e.jsx(be,{children:"¡Reserva Confirmada!"}),e.jsxs(ye,{children:["Reserva #",r]}),e.jsxs(E,{children:[e.jsx(N,{children:"Detalles de la Cita"}),e.jsxs(F,{children:[e.jsxs(v,{children:["Fecha: ",a]}),e.jsxs(v,{children:["Hora: ",d]}),e.jsxs(v,{children:["Importe Total: ",c,"€"]})]})]}),e.jsxs(E,{children:[e.jsx(N,{children:"Servicios Seleccionados"}),e.jsx(F,{children:i.map(x=>e.jsxs(v,{children:[x.name," - ",x.price,"€"]},x.id))})]}),e.jsxs(E,{children:[e.jsx(N,{children:"Información Importante"}),e.jsx(F,{children:e.jsx(v,{$noBullet:!0,style:{whiteSpace:"pre-line"},children:"Para garantizar la mejor experiencia y respetar el tiempo de todos, te pedimos que estés disponible a la hora acordada. Próximamente, recibirás una llamada telefónica para confirmar los detalles. Si necesitas reprogramar, avísanos con antelación. Gracias por tu comprensión! 😊✨"})})]}),e.jsxs($e,{children:["Hemos enviado un email de confirmación a ",t.email," con todos los detalles. Por favor, revisa tu carpeta de spam si no lo has recibido en 5 minutos."]})]})};export{ke as C,Ce as E,Se as S,ze as a,e as j,o as t};
