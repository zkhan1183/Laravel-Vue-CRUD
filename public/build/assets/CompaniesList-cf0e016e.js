import{a as h}from"./index-dd496a4f.js";import{V as y}from"./Pagination-f23b3c5b.js";import{_ as k,a as g,o as n,c as a,b as e,d as l,w as f,F as x,e as w,f as b,t as c,g as N,p as V,k as E}from"./app-6f6e0754.js";const I={name:"companies",components:{VuePagination:y},data(){return{companies:{total:0,per_page:2,from:1,to:0,data:null,current_page:1},offset:4}},mounted(){this.getCompanies()},methods:{async getCompanies(s=1){await h.get(`/companies?page=${this.companies.current_page}`).then(t=>{this.companies=t.data}).catch(t=>{console.log(t),this.companies=[]})},deleteCompany(s){confirm("Are you sure to delete this company ?")&&h.delete(`/companies/${s}`).then(t=>{this.getCompanies()}).catch(t=>{console.log(t)})}}},d=s=>(V("data-v-ea4f22de"),s=s(),E(),s),L={class:"row"},S={class:"col-12 mb-2 text-end"},$={class:"col-12"},A={class:"card"},B=d(()=>e("div",{class:"card-header"},[e("h4",null,"Company")],-1)),F={class:"card-body"},D={class:"table-responsive"},P={class:"table table-bordered"},T=d(()=>e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Email"),e("th",null,"Logo"),e("th",null,"Website"),e("th",null,"Actions")])],-1)),W={key:0},j=["src"],q=["onClick"],z={key:1},G=d(()=>e("tr",null,[e("td",{colspan:"5",align:"center"},"No Companies Found.")],-1)),H=[G];function J(s,t,K,M,i,r){var p,m,u;const _=g("router-link"),v=g("vue-pagination");return n(),a("div",L,[e("div",S,[l(_,{to:{name:"companyAdd"},class:"btn btn-primary"},{default:f(()=>[b("Create")]),_:1})]),e("div",$,[e("div",A,[B,e("div",F,[e("div",D,[e("table",P,[T,((m=(p=i.companies)==null?void 0:p.data)==null?void 0:m.length)>0?(n(),a("tbody",W,[(n(!0),a(x,null,w((u=i.companies)==null?void 0:u.data,(o,C)=>(n(),a("tr",{key:C},[e("td",null,c(o.name),1),e("td",null,c(o.email),1),e("td",null,[o.logo?(n(),a("img",{key:0,style:{height:"100px",width:"100px"},src:`/storage/${o.logo}`,alt:"image"},null,8,j)):N("",!0)]),e("td",null,c(o.website),1),e("td",null,[l(_,{to:{name:"companyEdit",params:{id:o.id}},class:"btn btn-success"},{default:f(()=>[b("Edit")]),_:2},1032,["to"]),e("button",{type:"button",onClick:O=>r.deleteCompany(o.id),class:"btn btn-danger"},"Delete",8,q)])]))),128))])):(n(),a("tbody",z,H))])]),l(v,{pagination:i.companies,onPaginate:t[0]||(t[0]=o=>r.getCompanies()),offset:4},null,8,["pagination"])])])])])}const X=k(I,[["render",J],["__scopeId","data-v-ea4f22de"]]);export{X as default};
