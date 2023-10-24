<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Update Employee</h4>
                </div>
                <div class="card-body">
                    <div v-if="validationErrors">
                        <ul class="alert alert-danger">
                            <li v-for="(value, key, index) in validationErrors">@{{ value }}</li>
                        </ul>
                    </div>
                    <form @submit.prevent="update">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>First Name</label>
                                    <input type="text" class="form-control" v-model="employee.first_name">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Last Name</label>
                                    <input type="text" class="form-control" v-model="employee.last_name">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Company</label>
                                    <select class="form-control" name="company_id" v-model="employee.company_id">
                                        <option v-for="(company,key) in companies" :key="key" :selected="employee.company_id == company.id" :value="company.id">{{ company.name }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="text" class="form-control" v-model="employee.email">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Phone</label>
                                    <input type="text" class="form-control" v-model="employee.phone">
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Update</button>
                            </div>
                        </div>                          
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';
import axios from 'axios'

export default {
    name:"edit-employee",
    data(){
        return {
            employee:{
                first_name:"",
                last_name:"",
                company_id:"",
                email:"",
                phone:""
            },
            companies: reactive([]),
            validationErrors: ''
        }
    },
    mounted(){
        this.showEmployee();
        this.getCompanies()
    },
    methods:{
        async getCompanies(){
            await axios.get('/companies').then(response=>{
                this.companies = response.data.data;
            }).catch(error=>{
                console.log(error)
                this.companies = []
            })
        },
        async showEmployee(){
            await axios.get(`/employees/${this.$route.params.id}`).then(response=>{
                const { first_name, last_name , company_id , phone , email } = response.data.data
                this.employee.first_name = first_name;
                this.employee.last_name = last_name;
                this.employee.company_id = company_id;
                this.employee.phone = phone;
                this.employee.email = email;
            }).catch(error=>{
                console.log(error)
            })
        },
        async update(){
            await axios.put(`/employees/${this.$route.params.id}`,this.employee).then(response=>{
                this.$router.push({name:"employeeList"})
            }).catch(error=>{
                console.log(error)
                if (error.response.status == 422){
                    this.validationErrors = error.response.data.errors;
                }
            })
        }
    }
}
</script>