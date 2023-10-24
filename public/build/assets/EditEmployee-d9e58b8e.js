import{_ as v,r as f,o as i,c as n,b as e,F as u,e as h,g as b,h as g,i as a,v as r,j as E,t as y}from"./app-6f6e0754.js";import{a as d}from"./index-dd496a4f.js";const x={name:"edit-employee",data(){return{employee:{first_name:"",last_name:"",company_id:"",email:"",phone:""},companies:f([]),validationErrors:""}},mounted(){this.showEmployee(),this.getCompanies()},methods:{async getCompanies(){await d.get("/companies").then(l=>{this.companies=l.data.data}).catch(l=>{console.log(l),this.companies=[]})},async showEmployee(){await d.get(`/employees/${this.$route.params.id}`).then(l=>{const{first_name:t,last_name:p,company_id:c,phone:s,email:m}=l.data.data;this.employee.first_name=t,this.employee.last_name=p,this.employee.company_id=c,this.employee.phone=s,this.employee.email=m}).catch(l=>{console.log(l)})},async update(){await d.put(`/employees/${this.$route.params.id}`,this.employee).then(l=>{this.$router.push({name:"employeeList"})}).catch(l=>{console.log(l),l.response.status==422&&(this.validationErrors=l.response.data.errors)})}}},w={class:"row"},U={class:"col-12"},V={class:"card"},k=e("div",{class:"card-header"},[e("h4",null,"Update Employee")],-1),C={class:"card-body"},N={key:0},B={class:"alert alert-danger"},F={class:"row"},L={class:"col-12 mb-2"},M={class:"form-group"},S=e("label",null,"First Name",-1),D={class:"col-12 mb-2"},j={class:"form-group"},P=e("label",null,"Last Name",-1),T={class:"col-12 mb-2"},q={class:"form-group"},z=e("label",null,"Company",-1),A=["selected","value"],G={class:"col-12 mb-2"},H={class:"form-group"},I=e("label",null,"Email",-1),J={class:"col-12 mb-2"},K={class:"form-group"},O=e("label",null,"Phone",-1),Q=e("div",{class:"col-12"},[e("button",{type:"submit",class:"btn btn-primary"},"Update")],-1);function R(l,t,p,c,s,m){return i(),n("div",w,[e("div",U,[e("div",V,[k,e("div",C,[s.validationErrors?(i(),n("div",N,[e("ul",B,[(i(!0),n(u,null,h(s.validationErrors,(o,_,W)=>(i(),n("li",null,"@"+y(o),1))),256))])])):b("",!0),e("form",{onSubmit:t[5]||(t[5]=g((...o)=>m.update&&m.update(...o),["prevent"]))},[e("div",F,[e("div",L,[e("div",M,[S,a(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=o=>s.employee.first_name=o)},null,512),[[r,s.employee.first_name]])])]),e("div",D,[e("div",j,[P,a(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=o=>s.employee.last_name=o)},null,512),[[r,s.employee.last_name]])])]),e("div",T,[e("div",q,[z,a(e("select",{class:"form-control",name:"company_id","onUpdate:modelValue":t[2]||(t[2]=o=>s.employee.company_id=o)},[(i(!0),n(u,null,h(s.companies,(o,_)=>(i(),n("option",{key:_,selected:s.employee.company_id==o.id,value:o.id},y(o.name),9,A))),128))],512),[[E,s.employee.company_id]])])]),e("div",G,[e("div",H,[I,a(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=o=>s.employee.email=o)},null,512),[[r,s.employee.email]])])]),e("div",J,[e("div",K,[O,a(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[4]||(t[4]=o=>s.employee.phone=o)},null,512),[[r,s.employee.phone]])])]),Q])],32)])])])])}const Z=v(x,[["render",R]]);export{Z as default};
