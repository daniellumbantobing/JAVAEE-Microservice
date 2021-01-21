<template>
    <div class="container">
        <div class="row justify-content-center">
        
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">OKey
                    <button @click="showModal" class="btn btn-primary btn-sm float-right">Tambah User</button>
                    </div>
                    
                    <div class="card-body">
                      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="todo in todos" :key="todo.id" >
      <th>{{todo.id}}</th>
      <td>{{todo.pulsaPrice}}</td>
      <td>{{todo.priceIdr}}</td>
     
    </tr>
  
  </tbody>
</table> 
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="modal-form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Biodata Form</h5>
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                     </button>
                </div>
                <div class="modal-body">
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
                     <div class="form-group">
                        <label>Role</label>
                        <input type="text" v-model="user.roleId" name="roleId" id="" value="2" class="form-control">
                     </div>
                </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" @click="createUser()" class="btn btn-primary">Save changes</button>
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
                roleId :''
            }
        }
    },

    mounted() {
          this.getTodos();

    },
    methods: {
     showModal(){
            $("#modal-form").modal("show");
            },
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
                $("#modal-form").modal("hide");
            })

        }
    }
}
</script>