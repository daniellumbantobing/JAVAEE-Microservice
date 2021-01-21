<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Register</div>

                <div class="card-body">
                        
                        <div class="form-group">
                        <label>Nama</label>
                        <input type="text" v-model="user.nameUser" name="nameUser" id="" class="form-control">
                     </div>
                    <div class="form-group">
                        <label>KTP</label>
                        <input type="text" v-model="user.ktpId" name="ktpId" id="" class="form-control">
                     </div>
                    <div class="form-group">
                        <label>No.Hp</label>
                        <input type="text" v-model="user.telpNumber" name="telpNumber" id="" class="form-control">
                     </div>
                     <div class="form-group">
                        <label>Email</label>
                        <input type="text" v-model="user.email" name="email" id="" class="form-control">
                     </div>
                     <div class="form-group">
                        <label>Password</label>
                        <input type="password" v-model="user.password" name="password" id="" class="form-control">
                     </div>
                     <!-- <div class="form-group">
                        <label>Role</label>
                        <input type="text" v-model="user.roleId" name="roleId" id="" value="2" class="form-control">
                     </div> -->
                    
                        <button type="submit"  @click="createUser()" class="btn btn-primary">Submit</button>


                </div>
                
                </div>
                </div>
                </div>
                </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            todos : [],
            user:{
                nameUser : '',
                ktpId :'',
                telpNumber :'',
                email :'',
                password :'',
                roleId :'2'
            }
        }
    },

    mounted() {
          this.getTodos();

    },
    methods: {
     
        getTodos(){
            axios
            .get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                    this.todos = response.data
            })
            .catch(e=>console.log(e))
        },
        createUser(){
            axios.post('http://sipintardel.herokuapp.com/customer/auth/register', {
                nameUser:this.user.nameUser,
                ktpId:this.user.ktpId,
                telpNumber:this.user.telpNumber,
                email:this.user.email,
                password:this.user.password,
                roleId:this.user.roleId

            })
            .then(response => {
                this.resetForm();
                $("#modal-form").modal("hide");
            })

        },
        resetForm(){
                this.user.nameUser='',
                this.user.ktpId='',
                this.user.telpNumber='',
                this.user.email='',
                this.user.password='',
                this.user.roleId=''
        }

    }
}
</script>