<template>
    <div class="row">
        <div class="col-12 mb-2 text-end">
            <router-link :to='{name:"companyAdd"}' class="btn btn-primary">Create</router-link>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Company</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Logo</th>
                                    <th>Website</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody v-if="companies?.data?.length > 0">
                                <tr v-for="(company,key) in companies?.data" :key="key">
                                    <td>{{ company.name }}</td>
                                    <td>{{ company.email }}</td>
                                    <td><img v-if="company.logo" style="height:100px; width:100px;" :src="`/storage/${company.logo}`" alt="image"></td>
                                    <td>{{ company.website }}</td>
                                    <td>
                                        <router-link :to='{name:"companyEdit",params:{id:company.id}}' class="btn btn-success">Edit</router-link>
                                        <button type="button" @click="deleteCompany(company.id)" class="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="5" align="center">No Companies Found.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <vue-pagination  :pagination="companies"
                                        @paginate="getCompanies()"
                                        :offset="4">
                    </vue-pagination>              
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import VuePagination from '../Pagination.vue';

export default {
    name:"companies",
    components:{
        VuePagination
    },
    data(){
        return {
            companies: {
                total: 0,
                per_page: 2,
                from: 1,
                to: 0,
                data:null,
                current_page: 1
            },
            offset: 4,
        }
    },
    mounted(){
        this.getCompanies()
    },
    methods:{
        async getCompanies(page = 1){
            await axios.get(`/companies?page=${this.companies.current_page}`).then(response=>{
                this.companies = response.data;
            }).catch(error=>{
                console.log(error)
                this.companies = []
            })
        },
        deleteCompany(id){
            if(confirm("Are you sure to delete this company ?")){
                axios.delete(`/companies/${id}`).then(response=>{
                    this.getCompanies()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>
<style scoped>
    .pagination{
        margin-bottom: 0;
    }
</style>