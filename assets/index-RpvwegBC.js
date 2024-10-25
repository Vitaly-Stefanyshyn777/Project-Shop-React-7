import{j as e,r as j,a as A}from"./react-B1CnsdDo.js";import{c as oe}from"./react-dom-C-DXLzHt.js";import{u as K,a as Q,P as ae}from"./react-redux-CACKyUVO.js";import{c as Y,a as le,f as ce,b as de}from"./@reduxjs-BQZYlUJK.js";import{L as v,c as ue,R as me}from"./react-router-dom-BZj8J4Bo.js";import{A as xe,B as he,F as pe,L as je,M as ge,a as fe,P as ve,S as ye,V as we,b as Ie,R as Se,c as Me,d as u,T as l,e as Ce,f as Ee,g as Te,h as Pe,C as R,u as Le,i as ke,j as Fe,k as X,l as Be,I as q,m as be,D as Ae,n as y,o as V,p as w,q as G,r as N,s as H,t as U,v as _e,w as Oe,x as De,G as d,y as C,z as _,E as Qe,H as Re,J as Z,K as p,N as $e,O as P,Q as L,U as k,W as F,X as qe,Y as Ve}from"./@mui-DwbHviXT.js";import{c as E,O as Ge,f as J,d as ee}from"./react-router-BV7FPoL-.js";import{c as Ne}from"./classnames-a6iZK8nb.js";import{Y as He,e as Ue}from"./bear-react-carousel-Bd4poF1X.js";import"./@babel-DgsEKXq2.js";import"./scheduler-CzFDRTuY.js";import"./use-sync-external-store-Bb9pIWZR.js";import"./redux-DITMfSWq.js";import"./immer-fBqQtvEc.js";import"./redux-thunk-ClJT1hhx.js";import"./reselect-C27TLnWV.js";import"./@remix-run-CDTKzl14.js";import"./@emotion-H3iJF6Kv.js";import"./hoist-non-react-statics-DQogQWOa.js";import"./stylis-BqmD5Vow.js";import"./react-is-DcfIKM1A.js";import"./clsx-B-dksMZM.js";import"./react-transition-group-BtIR50iD.js";import"./@popperjs-BQBsAJpH.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=i(n);fetch(n.href,r)}})();const z={countries:"",genreId:"",order:"NUM_VOTE",type:"",year:"",page:1},te=Y({name:"currentQuerySlice",initialState:z,reducers:{selectQuery:(t,s)=>({...t,...s.payload}),resetQuery:()=>({...z})}}),{selectQuery:B,resetQuery:ze}=te.actions,We=te.reducer,Ke={countries:"",genreId:"",order:"NUM_VOTE",type:"",year:"",page:1,keyword:""},re=Y({name:"searchQuerySlice",initialState:Ke,reducers:{setSearchQuery:(t,s)=>({...t,...s.payload})}}),{setSearchQuery:Ye}=re.actions,Xe=re.reducer,Ze="8d8d277a-bdc8-454f-a47e-58b9482338d1",Je=["","новости","для взрослых","церемония","реальное ТВ","ток-шоу"],b=le({reducerPath:"kinopoiskApi",baseQuery:ce({baseUrl:"https://kinopoiskapiunofficial.tech/api",prepareHeaders:t=>{t.set("X-API-KEY",Ze),t.set("Content-Type","application/json")}}),endpoints:t=>({getFilmsTop:t.query({query:({type:s,page:i})=>`/v2.2/films/collections?type=${s}&page=${i}`}),getFilms:t.query({query:({countries:s,genreId:i,order:a="NUM_VOTE",type:n="FILM",year:r,page:o,keyword:m=""})=>`/v2.2/films?countries=${s}&genres=${i}&order=${a}&type=${n}&yearFrom=${r}&yearTo=${r}&page=${o}&keyword=${m}`}),getGenresAndCountries:t.query({query:()=>"/v2.2/films/filters",transformResponse:s=>({...s,genres:s.genres.filter(({genre:i})=>!Je.includes(i))})}),getFilm:t.query({query:s=>`/v2.2/films/${s}`}),getSequelsAndPrequels:t.query({query:s=>`/v2.1/films/${s}/sequels_and_prequels`,transformResponse:s=>s.map(i=>({...i,kinopoiskId:i.filmId}))}),getStaff:t.query({query:s=>`/v1/staff?filmId=${s}`}),getStaffById:t.query({query:s=>`/v1/staff/${s}`})})}),{useGetFilmsTopQuery:D,useGetFilmsQuery:S,useGetGenresAndCountriesQuery:et,useGetFilmQuery:tt,useGetSequelsAndPrequelsQuery:rt,useGetStaffQuery:st,useGetStaffByIdQuery:it}=b,nt=de({reducer:{[b.reducerPath]:b.reducer,currentQuerySlice:We,searchQuerySlice:Xe},middleware:t=>t().concat(b.middleware)}),ot={AutoAwesome:xe,Bloodtype:he,FamilyRestroom:pe,LiveTv:je,MenuBook:ge,MoodBad:fe,Pool:ve,StarPurple500:ye,VolunteerActivism:we,LocalMovies:Ie,Reorder:Se,Fort:Me},M=[{title:"TOP 100 Popular Movies",icon:"AutoAwesome",url:"/popular",value:"TOP_POPULAR_MOVIES"},{title:"TOP 250 Best Movies",icon:"StarPurple500",url:"/best",value:"TOP_250_MOVIES"},{title:"Vampires",icon:"Bloodtype",url:"/vampire",value:"VAMPIRE_THEME"},{title:"Comics",icon:"MenuBook",url:"/comics",value:"COMICS_THEME"},{title:"Family",icon:"FamilyRestroom",url:"/family",value:"FAMILY"},{title:"Romance",icon:"VolunteerActivism",url:"/romantic",value:"LOVE_THEME"},{title:"Zombies",icon:"MoodBad",url:"/zombie",value:"ZOMBIE_THEME"},{title:"Disasters",icon:"Pool",url:"/catastrophe",value:"CATASTROPHE_THEME"},{title:"Popular Series",icon:"LiveTv",url:"/popular-serials",value:"POPULAR_SERIES"}],$=[{title:"Movies",icon:"LocalMovies",url:"/films",value:"FILM"},{title:"Series",icon:"Reorder",url:"/serials",value:"TV_SERIES"},{title:"Cartoons",icon:"Fort",url:"/cartoons",value:"FILM"}];function at(){return e.jsxs(u,{component:"footer",sx:{paddingTop:4,paddingBottom:4,flexDirection:{sm:"row"},justifyContent:{sm:"space-between"},alignItems:{sm:"center"},marginTop:"auto"},children:[e.jsxs(l,{variant:"body2",color:"text.secondary",children:["© ",new Date().getFullYear()," «CinemaX» 18+ ",e.jsx("br",{}),"This site is created for educational purposes only. ",e.jsx("br",{}),"All rights belong to the copyright holders."]}),e.jsx(l,{variant:"h4",color:"primary.main",children:"CinemaX"})]})}const se=j.createContext();function lt({children:t}){const[s,i]=j.useState("dark"),a=Ce({palette:{mode:s}});j.useEffect(()=>{const r=localStorage.getItem("theme");r?i(r):localStorage.setItem("theme","dark")},[]),j.useEffect(()=>{localStorage.setItem("theme",s)},[s]);const n=()=>{i(r=>r==="light"?"dark":"light")};return e.jsx(se.Provider,{value:{mode:s,toggleColorMode:n},children:e.jsx(Ee,{theme:a,children:t})})}const ct={FILM:"Movie",TV_SERIES:"Series",TV_SHOW:"TV Show",MINI_SERIES:"Mini-series"};function dt(){const[t,s]=j.useState(""),i=K(),a=E(),{countries:n,genreId:r,order:o,type:m,year:x,page:c,keyword:h}=Q(g=>g.searchQuerySlice);j.useEffect(()=>{const g=setTimeout(()=>{i(Ye({keyword:t}))},500);return()=>clearTimeout(g)},[t]);const{data:f,isFetching:I}=S({countries:n,genreId:r,order:o,type:m,year:x,page:c,keyword:h});return e.jsx(Te,{freeSolo:!0,sx:{width:300,backgroundColor:"rgba(255,255,255, 0.15)","& .MuiOutlinedInput-root":{"& fieldset":{border:"none"}}},getOptionLabel:g=>`${g.nameEn} - ${ct[g.type]} - ${g.year}`,options:f?f.items:[],onInputChange:(g,O)=>{s(O)},onChange:(g,O)=>{a(`/movie/${O.kinopoiskId}`)},renderInput:g=>e.jsx(Pe,{...g,label:"Search",InputProps:{...g.InputProps,endAdornment:e.jsxs(A.Fragment,{children:[I?e.jsx(R,{size:20,color:"inherit"}):null,g.InputProps.endAdornment]})}})})}const W=({iconName:t})=>{const s=ot[t];return e.jsx(s,{})};function ut(){const[t,s]=j.useState(!1),{toggleColorMode:i,mode:a}=j.useContext(se),n=Le({target:window}),r=()=>{s(o=>!o)};return e.jsx(ke,{appear:!1,direction:"down",in:!n,children:e.jsx(Fe,{children:e.jsx(X,{maxWidth:"lg",children:e.jsxs(Be,{disableGutters:!0,children:[e.jsx(q,{color:"inherit",onClick:r,children:e.jsx(be,{})}),e.jsx(Ae,{open:t,onClose:r,children:e.jsxs(y,{sx:{width:250},onClick:r,children:[e.jsx(V,{children:M.map(o=>e.jsx(w,{component:v,to:o.url,children:e.jsx(G,{disablePadding:!0,children:e.jsxs(N,{children:[e.jsx(H,{children:e.jsx(W,{iconName:o.icon})}),e.jsx(U,{primary:o.title})]})})},o.title))}),e.jsx(_e,{}),e.jsx(V,{children:$.map(o=>e.jsx(w,{component:v,to:o.url,children:e.jsx(G,{disablePadding:!0,children:e.jsxs(N,{children:[e.jsx(H,{children:e.jsx(W,{iconName:o.icon})}),e.jsx(U,{primary:o.title})]})})},o.title))})]})}),e.jsxs(u,{flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%",children:[e.jsx(l,{sx:{color:"white",textDecoration:"none"},component:v,variant:"h4",to:"/",children:"CinemaX"}),e.jsx(dt,{}),e.jsx(q,{color:"inherit",onClick:i,children:a==="dark"?e.jsx(Oe,{}):e.jsx(De,{})})]})]})})})})}function mt(){return e.jsxs(X,{fixed:!0,sx:{display:"flex",flexDirection:"column",minHeight:"100vh"},children:[e.jsx(y,{sx:{p:4}}),e.jsx(ut,{}),e.jsx(Ge,{}),e.jsx(at,{})]})}function T(){return e.jsx(y,{display:"flex",flexDirection:"column",alignItems:"center",margin:"auto",children:e.jsx(l,{variant:"h6",children:"An error occurred - try refreshing the page"})})}function xt(){const{id:t}=J(),s=E(),{data:i,isLoading:a,error:n}=it(t);return a?e.jsx(y,{display:"flex",justifyContent:"center",margin:"auto",children:e.jsx(R,{size:"8rem"})}):n?e.jsx(T,{}):e.jsxs(e.Fragment,{children:[e.jsxs(d,{container:!0,spacing:4,pt:1,children:[e.jsx(d,{item:!0,xs:12,md:4,children:e.jsx("img",{src:i.posterUrl,style:{width:"100%"},alt:i.nameEn})}),e.jsxs(d,{item:!0,xs:12,md:8,children:[e.jsxs(u,{flexDirection:"row",children:[e.jsx(C,{startIcon:e.jsx(_,{}),onClick:()=>s(-1),color:"primary"}),e.jsxs(u,{flexDirection:"column",children:[e.jsx(l,{variant:"h5",children:i.nameEn}),e.jsx(l,{children:i.nameEn})]})]}),e.jsx(l,{gutterBottom:!0,variant:"h5",children:"About the actor"}),e.jsxs(d,{container:!0,children:[e.jsx(d,{xs:6,children:e.jsx(l,{gutterBottom:!0,children:"Career"})}),e.jsx(d,{xs:6,children:e.jsx(l,{gutterBottom:!0,children:i.profession})}),e.jsx(d,{xs:6,children:e.jsx(l,{gutterBottom:!0,children:"РGrowth"})}),e.jsx(d,{xs:6,children:e.jsx(l,{gutterBottom:!0,children:i.growth})}),e.jsx(d,{xs:6,children:e.jsx(l,{gutterBottom:!0,children:"birth father"})}),e.jsx(d,{xs:6,children:e.jsxs(l,{gutterBottom:!0,children:[i.birthday," (",i.age," years)"]})}),e.jsx(d,{xs:6,children:e.jsx(l,{gutterBottom:!0,children:"All movies"})}),e.jsx(d,{xs:6,children:e.jsx(l,{children:i.films.length})}),e.jsx(d,{xs:6,children:e.jsx(l,{gutterBottom:!0,children:"The facts"})}),e.jsx(d,{xs:12,children:i.facts.map((r,o)=>e.jsxs(l,{gutterBottom:!0,children:[o+1,".",r]},r))})]})]}),e.jsx(d,{item:!0,xs:12,children:e.jsx(l,{variant:"h5",children:"Movies"})})]}),e.jsx(u,{children:i.films.filter((r,o,m)=>o===m.findIndex(x=>x.filmId===r.filmId)).map((r,o)=>e.jsxs(u,{flexDirection:"row",justifyContent:"space-between",children:[e.jsx(l,{children:o+1}),e.jsx(w,{component:v,to:`/movie/${r.filmId}`,children:(r.nameEn,r.nameEn)}),e.jsx(l,{children:r.rating?r.rating:"-"})]},r.filmId))})]})}const ht="_img_156oe_1",pt={img:ht};function ie({movie:t,reload:s=!1}){const i=s?{component:"a",href:`/movie/${t.kinopoiskId}`}:{component:v,to:`/movie/${t.kinopoiskId}`};return e.jsxs(u,{alignItems:"center",children:[e.jsxs(w,{...i,children:[e.jsx("img",{src:t.posterUrlPreview,alt:t.nameEn,className:pt.img}),e.jsx(w,{component:"p",textAlign:"center",sx:{width:"200px"},children:(t.nameEn,t.nameEn)})]}),t.ratingKinopoisk&&e.jsx(u,{alignItems:"center",children:e.jsx(Qe,{title:`${t.ratingKinopoisk} / 10`,children:e.jsx(y,{children:e.jsx(Re,{name:"read-only",value:t.ratingKinopoisk/2,readOnly:!0,precision:.1})})})})]})}const jt="_video_pvmgf_1",gt={video:jt};function ft(){const[t,s]=j.useState("");return j.useEffect(()=>{const i=window.location.href;fetch("//pleer.videoplayers.club/get_player?w=610&h=370&type=widget&kp_id=&players=videocdn,hdvb,bazon,alloha,ustore,kodik,trailer,torrent&r_id=videoplayers&vni=VIDEOCDN&vti=&vdi=&hni=HDVB&hti=&hdi=&bni=BAZON&bti=&bdi=&alni=ALLOHATV&alti=&aldi=&usni=USTOREBZ&usti=&usdi=&koni=KODIK&koti=&kodi=&tti=&ru="+i).then(a=>a.text()).then(a=>{const n=a.match(/<iframe.*<\/iframe>/gm);n&&n.length>0?s(n[0]):console.error("IFrame not found in response")}).catch(a=>{console.error("Error fetching video player:",a)})},[]),e.jsx("div",{className:Ne("uitools",gt.video),id:"videoplayers",dangerouslySetInnerHTML:{__html:t}})}function vt(){const{id:t}=J(),s=E(),i=tt(t),a=rt(t),n=st(t);return i.isLoading||a.isLoading||n.isLoading?e.jsx(y,{display:"flex",justifyContent:"center",margin:"auto",children:e.jsx(R,{size:"8rem"})}):i.error||n.error?e.jsx(T,{}):e.jsxs(e.Fragment,{children:[e.jsxs(d,{container:!0,spacing:2,sx:{mt:{md:2}},children:[e.jsx(d,{item:!0,md:4,sm:12,children:e.jsx("img",{src:i.data.posterUrl,alt:i.data.nameEn,width:"100%"})}),e.jsxs(d,{item:!0,md:6,sm:12,children:[e.jsxs(d,{container:!0,children:[e.jsx(d,{item:!0,xs:2,children:e.jsx(C,{startIcon:e.jsx(_,{}),size:"large",onClick:()=>s(-1)})}),e.jsx(d,{item:!0,xs:4,alignContent:"center",children:e.jsx(l,{variant:"h5",children:i.data.nameEn})})]}),e.jsxs(d,{container:!0,children:[e.jsx(d,{item:!0,xs:6,children:e.jsx(l,{children:"Year"})}),e.jsx(d,{item:!0,xs:6,children:e.jsx(l,{gutterBottom:!0,children:i.data.year})}),e.jsx(d,{item:!0,xs:6,children:e.jsx(l,{children:"Country"})}),e.jsx(d,{item:!0,xs:6,children:i.data.countries.map(({country:r})=>e.jsx(l,{gutterBottom:!0,children:r},r))}),e.jsx(d,{item:!0,xs:6,children:e.jsx(l,{children:"Genres"})}),e.jsx(d,{item:!0,xs:6,children:i.data.genres.map(({genre:r})=>e.jsx(l,{gutterBottom:!0,children:r},r))}),e.jsx(d,{item:!0,xs:6,children:e.jsx(l,{children:"Directors"})}),e.jsx(d,{item:!0,xs:6,children:n.data.filter(r=>r.professionText==="РDirectors").map(({nameEn:r})=>e.jsx(l,{gutterBottom:!0,children:r},r))}),e.jsx(d,{item:!0,xs:6,children:e.jsx(l,{children:"Time"})}),e.jsx(d,{item:!0,xs:6,children:e.jsxs(l,{gutterBottom:!0,children:[i.data.filmLength," minutes"]})}),e.jsx(d,{item:!0,xs:12,children:e.jsx(l,{gutterBottom:!0,children:"Description"})}),e.jsx(d,{item:!0,xs:12,children:e.jsx(l,{gutterBottom:!0,children:i.data.description?i.data.description:"Description is missing"})})]})]}),e.jsxs(d,{item:!0,md:2,sm:12,children:[e.jsx(l,{variant:"h6",children:"In the main roles"}),n.data.filter(r=>r.professionText==="Actors").slice(0,10).map(({nameEn:r,staffId:o})=>e.jsx("div",{children:e.jsx(w,{component:v,to:`/actor/${o}`,gutterBottom:!0,children:r})},r))]})]}),e.jsxs(d,{container:!0,spacing:2,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",children:[e.jsx(d,{item:!0,xs:12}),e.jsx(l,{variant:"h5",sx:{mt:2,mb:2},children:"Watch online"}),e.jsx(ft,{})]}),a.data&&e.jsxs(u,{alignItems:"center",children:[e.jsx(l,{gutterBottom:!0,variant:"h5",sx:{mt:2,mb:2},children:"Sequels and prequels"}),e.jsx(u,{direction:"row",flexWrap:"wrap",justifyContent:"center",sx:{gap:2},children:a.data.map(r=>e.jsx(ie,{movie:r,reload:!0},r.filmId))})]})]})}function yt(){const{countries:t,order:s,year:i,page:a}=Q(f=>f.currentQuerySlice),n=D({type:M[0].value,page:a}),r=D({type:M[1].value,page:a}),o=S({type:"FILM",countries:t,genreId:"1",order:s,year:i,page:a}),m=S({type:"TV_SERIES",countries:t,genreId:"1",order:s,year:i,page:a}),x=S({type:"FILM",countries:t,genreId:"18",order:s,year:i,page:a}),c=n.isFetching||r.isFetching||o.isFetching||m.isFetching||x.isFetching,h=n.error||r.error||o.error||m.error||x.error;return{isLoading:c,hasError:h,responsePopular:n,responseBest:r,responseFilms:o,responseSerials:m,responseCartoons:x}}function wt(){const t=Z("(max-width:600px)");return e.jsx(y,{mt:2,mb:2,children:new Array(5).fill(null).map((s,i)=>e.jsxs(A.Fragment,{children:[e.jsx(p,{animation:"wave",variant:"rectangular",height:"32px",width:"200px"}),e.jsx(u,{direction:"row",justifyContent:"center",flexWrap:"wrap",children:new Array(5).fill(null).map((a,n)=>e.jsx(p,{animation:"wave",variant:"rectangular",height:t?"520px":"352px",width:t?"100%":"230px"},n))})]},i))})}function It(){const{isLoading:t,hasError:s,responsePopular:i,responseBest:a,responseFilms:n,responseSerials:r,responseCartoons:o}=yt();if(t)return e.jsx(wt,{});if(s)return e.jsx(T,{});const m=c=>c.map(h=>e.jsx(v,{to:`/movie/${h.kinopoiskId}`,children:e.jsx(Ue,{imageUrl:h.posterUrlPreview})},h.id)),x=[{title:"Popular movies",url:"/popular",data:m(i.data.items)},{title:"Best Movies",url:"/best",data:m(a.data.items)},{title:"Movies",url:"/films",data:m(n.data.items)},{title:"Series",url:"/serials",data:m(r.data.items)},{title:"Cartoons",url:"/cartoons",data:m(o.data.items)}];return e.jsx(e.Fragment,{children:x.map(c=>e.jsxs(u,{children:[e.jsx(w,{sx:{mt:2,mb:2},variant:"h4",component:v,to:c.url,children:c.title}),e.jsx(He,{data:c.data,slidesPerView:1,slidesPerGroup:1,isEnableNavButton:!0,isEnableLoop:!0,isEnableAutoPlay:!0,autoPlayTime:5e3,breakpoints:{375:{autoPlayTime:0},768:{slidesPerView:5}}})]},c.title))})}function ne({movies:t,totalPages:s,page:i,setPage:a}){return console.log(s),e.jsxs(e.Fragment,{children:[e.jsx(u,{direction:"row",justifyContent:"center",flexWrap:"wrap",children:t.map(n=>e.jsx(ie,{movie:n},n.kinopoiskId))}),e.jsx(u,{alignItems:"center",children:e.jsx($e,{count:s,color:"primary",variant:"outlined",shape:"rounded",size:"large",page:i,onChange:(n,r)=>a(r)})})]})}function St({countriesList:t,genresList:s,countries:i,order:a,year:n,genreId:r}){const o=K(),m=[{title:"By rating",value:"RATING"},{title:"According to estimates",value:"NUM_VOTE"}],x=new Array(60).fill(null).map((c,h)=>({title:new Date().getFullYear()-h,value:new Date().getFullYear()-h}));return console.log(t,s),e.jsxs(u,{mt:2,mb:2,sx:{flexDirection:{sm:"column",md:"row"},gap:1},children:[e.jsxs(P,{fullWidth:!0,size:"small",children:[e.jsx(L,{children:"Sorting"}),e.jsx(k,{value:a,onChange:c=>o(B({order:c.target.value})),children:m.map(c=>e.jsx(F,{value:c.value,children:c.title},c.value))})]}),e.jsxs(P,{fullWidth:!0,size:"small",children:[e.jsx(L,{children:"Side"}),e.jsx(k,{value:i,onChange:c=>o(B({countries:c.target.value})),children:t.map(c=>e.jsx(F,{value:c.id,children:c.country},c.id))})]}),e.jsxs(P,{fullWidth:!0,size:"small",children:[e.jsx(L,{children:"Genre"}),e.jsx(k,{value:r,onChange:c=>o(B({genreId:c.target.value})),children:s.map(c=>e.jsx(F,{value:c.id,children:c.genre},c.id))})]}),e.jsxs(P,{fullWidth:!0,size:"small",children:[e.jsx(L,{children:"Hours"}),e.jsx(k,{value:n,onChange:c=>o(B({year:c.target.value})),children:x.map(c=>e.jsx(F,{value:c.value,children:c.title},c.value))})]}),e.jsx(y,{children:e.jsx(C,{onClick:()=>o(ze()),variant:"outlined",startIcon:e.jsx(qe,{}),children:"reset"})})]})}function Mt(){const t=Z("(max-width:600px)");return e.jsxs(e.Fragment,{children:[e.jsx(p,{animation:"wave",variant:"rectangular",height:"32px",width:"200px",sx:{mt:2,mb:2}}),e.jsxs(u,{mt:2,mb:2,sx:{flexDirection:{sm:"column",md:"row"},gap:1},children:[e.jsx(p,{animation:"wave",variant:"rounded",width:t?"100%":"25%",height:40}),e.jsx(p,{animation:"wave",variant:"rounded",width:t?"100%":"25%",height:40}),e.jsx(p,{animation:"wave",variant:"rounded",width:t?"100%":"25%",height:40}),e.jsx(p,{animation:"wave",variant:"rounded",width:t?"100%":"25%",height:40}),e.jsx(p,{animation:"wave",variant:"rounded",width:132,height:40})]}),e.jsx(u,{direction:"row",justifyContent:"center",flexWrap:"wrap",children:Array(15).fill(null).map((s,i)=>e.jsx(A.Fragment,{children:e.jsxs(u,{flexDirection:"column",children:[e.jsx(p,{animation:"wave",variant:"rectangular",height:"322px",width:"215px"}),e.jsx(p,{animation:"wave",variant:"text",width:"120px"}),e.jsx(p,{animation:"wave",variant:"text",width:"120px"})]})},i))})]})}function Ct(){const t=ee(),{countries:s,order:i,year:a,genreId:n}=Q(I=>I.currentQuerySlice),[r,o]=j.useState(1),m=E(),x=$.find(I=>I.url===t.pathname),c=x.url==="/cartoons"?18:n,h=S({type:x.value,countries:s,order:i,year:a,genreId:c,page:r}),f=et();return j.useEffect(()=>{o(1)},[t]),h.error&&f.error?e.jsx(T,{}):h.isLoading||f.isLoading?e.jsx(Mt,{}):e.jsxs(e.Fragment,{children:[e.jsxs(u,{flexDirection:"row",sx:{mt:2,mb:2},children:[e.jsx(C,{startIcon:e.jsx(_,{}),onClick:()=>m(-1)}),e.jsx(l,{variant:"h4",children:x.title})]}),e.jsx(St,{countriesList:f.data.countries,genresList:f.data.genres,countries:s,order:i,year:a,genreId:n}),e.jsx(ne,{movies:h.data.items,totalPages:h.data.totalPages,page:r,setPage:o})]})}function Et(){return e.jsxs(e.Fragment,{children:[e.jsx(p,{animation:"wave",variant:"rectangular",height:"32px",width:"200px",sx:{mt:2,mb:2}}),e.jsx(u,{direction:"row",justifyContent:"center",flexWrap:"wrap",children:Array(15).fill(null).map((t,s)=>e.jsx(A.Fragment,{children:e.jsxs(u,{flexDirection:"column",children:[e.jsx(p,{animation:"wave",variant:"rectangular",height:"322px",width:"215px"}),e.jsx(p,{animation:"wave",variant:"text",width:"120px"}),e.jsx(p,{animation:"wave",variant:"text",width:"120px"})]})},s))})]})}function Tt(){const t=ee(),[s,i]=j.useState(1),a=E(),n=M.find(x=>x.url===t.pathname),{data:r,error:o,isLoading:m}=D({type:n.value,page:s});return j.useEffect(()=>{i(1)},[t]),o?e.jsx(T,{}):m?e.jsx(Et,{}):e.jsxs(e.Fragment,{children:[e.jsxs(u,{flexDirection:"row",sx:{mt:2,mb:2},children:[e.jsx(C,{startIcon:e.jsx(_,{}),onClick:()=>a(-1)}),e.jsx(l,{variant:"h4",children:n.title})]}),e.jsx(ne,{movies:r.items,totalPages:r.totalPages,page:s,setPage:i})]})}function Pt(){const t=ue([{path:"/",element:e.jsx(mt,{}),children:[{path:"/",element:e.jsx(It,{})},...M.map(s=>({path:s.url,element:e.jsx(Tt,{})})),...$.map(s=>({path:s.url,element:e.jsx(Ct,{})})),{path:"/movie/:id",element:e.jsx(vt,{})},{path:"/actor/:id",element:e.jsx(xt,{})}]}]);return e.jsx(me,{router:t})}oe.createRoot(document.getElementById("root")).render(e.jsx(ae,{store:nt,children:e.jsxs(lt,{children:[e.jsx(Ve,{}),e.jsx(Pt,{})]})}));
