<template>
    <div class="row">
        <div class="col-12 mb-2 text-end">
            <router-link :to='{name:"employeeAdd"}' class="btn btn-primary">Create</router-link>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Employee</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Company</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody v-if="employees?.data?.length > 0">
                                <tr v-for="(employee,key) in employees.data" :key="key">
                                    <td>{{ employee.id }}</td>
                                    <td>{{ employee.first_name }}</td>
                                    <td>{{ employee.last_name }}</td>
                                    <td>{{ employee.company.name }}</td>
                                    <td>{{ employee.email }}</td>
                                    <td>{{ employee.phone }}</td>
                                    <td>
                                        <router-link :to='{name:"employeeEdit",params:{id:employee.id}}' class="btn btn-success">Edit</router-link>
                                        <button type="button" @click="deleteEmployee(employee.id)" class="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="7" align="center">No Employee Found.</td>
                                </tr>
                            </tbody>
                        </table>
                        <vue-pagination  :pagination="employees"
                                        @paginate="getEmployee()"
                                        :offset="4">
                        </vue-pagination>                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';
import axios from 'axios'
import VuePagination from '../Pagination.vue';

export default {
    name:"employees",
    components:{
        VuePagination,
    },
    data(){
        return {
            employees: {
                total: 0,
                per_page: 2,
                from: 1,
                to: 0,
                data:null,
                current_page: 1
            },
            offset: 4,
            companies: reactive([]),
        }
    },
    mounted(){
        this.getEmployee()
    },
    methods:{        
        async getEmployee(page = 1){
            await axios.get(`employees?page=${this.employees.current_page}`).then(response=>{
                this.employees = response.data;
            }).catch(error=>{
                console.log(error)
                this.employees = []
            })
        },
        deleteEmployee(id){
            if(confirm("Are you sure to delete this employee ?")){
                axios.delete(`/employees/${id}`).then(response=>{
                    this.getEmployee()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>