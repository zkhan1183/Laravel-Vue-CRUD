import{_ as h,r as y,o as n,c as i,b as e,F as m,e as p,g as v,h as f,i as a,v as r,j as b,t as _}from"./app-6f6e0754.js";import{a as u}from"./index-dd496a4f.js";const g={name:"add-employee",data(){return{employee:{first_name:"",last_name:"",company_id:"",email:"",phone:""},companies:y([]),validationErrors:""}},mounted(){this.getCompanies()},methods:{async getCompanies(){await u.get("/companies").then(l=>{this.companies=l.data.data}).catch(l=>{console.log(l),this.companies=[]})},async create(){await u.post("/employees",this.employee).then(l=>{this.$router.push({name:"employeeList"})}).catch(l=>{console.log(l),l.response.status==422&&(this.validationErrors=l.response.data.errors)})}}},x={class:"row"},E={class:"col-12"},V={class:"card"},w=e("div",{class:"card-header"},[e("h4",null,"Add Employee")],-1),k={class:"card-body"},U={key:0},C={class:"alert alert-danger"},N={class:"row"},S={class:"col-12 mb-2"},B={class:"form-group"},F=e("label",null,"First Name",-1),L={class:"col-12 mb-2"},M={class:"form-group"},A=e("label",null,"Last Name",-1),D={class:"col-12 mb-2"},j={class:"form-group"},P=e("label",null,"Company",-1),T=["selected","value"],q={class:"col-12 mb-2"},z={class:"form-group"},G=e("label",null,"Email",-1),H={class:"col-12 mb-2"},I={class:"form-group"},J=e("label",null,"Phone",-1),K=e("div",{class:"col-12"},[e("button",{type:"submit",class:"btn btn-primary"},"Save")],-1);function O(l,t,Q,R,s,d){return n(),i("div",x,[e("div",E,[e("div",V,[w,e("div",k,[s.validationErrors?(n(),i("div",U,[e("ul",C,[(n(!0),i(m,null,p(s.validationErrors,(o,c,W)=>(n(),i("li",null,"@"+_(o),1))),256))])])):v("",!0),e("form",{onSubmit:t[5]||(t[5]=f((...o)=>d.create&&d.create(...o),["prevent"]))},[e("div",N,[e("div",S,[e("div",B,[F,a(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=o=>s.employee.first_name=o)},null,512),[[r,s.employee.first_name]])])]),e("div",L,[e("div",M,[A,a(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=o=>s.employee.last_name=o)},null,512),[[r,s.employee.last_name]])])]),e("div",D,[e("div",j,[P,a(e("select",{class:"form-control",name:"company_id","onUpdate:modelValue":t[2]||(t[2]=o=>s.employee.company_id=o)},[(n(!0),i(m,null,p(s.companies,(o,c)=>(n(),i("option",{key:c,selected:s.employee.company_id==o.id,value:o.id},_(o.name),9,T))),128))],512),[[b,s.employee.company_id]])])]),e("div",q,[e("div",z,[G,a(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=o=>s.employee.email=o)},null,512),[[r,s.employee.email]])])]),e("div",H,[e("div",I,[J,a(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[4]||(t[4]=o=>s.employee.phone=o)},null,512),[[r,s.employee.phone]])])]),K])],32)])])])])}const Z=h(g,[["render",O]]);export{Z as default};