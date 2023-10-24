<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Update Company</h4>
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
                                    <label>Name</label>
                                    <input type="text" class="form-control" v-model="company.name">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="text" class="form-control" v-model="company.email">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Website</label>
                                    <input type="text" class="form-control" v-model="company.website">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Logo</label>
                                    <input type="file" class="form-control" v-on:change="onImageChange">
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
import axios from 'axios'
export default {
    name:"edit-company",
    data(){
        return {
            company:{
                name:"",
                email:"",
                logo:"",
                website:"",
            },
            validationErrors: ''
        }
    },
    mounted(){
        this.showCompany()
    },
    methods:{
        onImageChange(e){
            console.log(e.target.files[0]);
            this.company.logo = e.target.files[0];
        },
        async showCompany(){
            await axios.get(`/companies/${this.$route.params.id}`).then(response=>{
                const { name, email , logo , website } = response.data.data;
                this.company.name = name;
                this.company.email = email;
                this.company.logo = logo;
                this.company.website = website;
            }).catch(error=>{
                console.log(error)
            })
        },
        async update(){
            const config = {
                    headers: { 'content-type': 'multipart/form-data' }
            }

            await axios.put(`/companies/${this.$route.params.id}`, this.company).then(response=>{
                    this.$router.push({name:"companiesList"})
                }).catch(error=>{
                    console.log(error);
                    if (error.response.status == 422){
                        this.validationErrors = error.response.data.errors;
                    }
            });
        }
    }
}
</script>