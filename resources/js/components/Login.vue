<template>
    <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Login</div>

                <div class="card-body">
                     <form @submit.prevent="handleLogin">
                     <div class="form-group">
                        <label>Email</label>
                        <input type="text" v-model="email" name="email" id="" class="form-control">
                     </div>
                     <div class="form-group">
                        <label>Password</label>
                        <input type="password"  v-model="password" name="password" id="" class="form-control">
                     </div>
                     <div class="form-group">
                            <label for="exampleFormControlSelect1">Login Sebagai</label>
                            <select class="form-control"  v-model="roleId" id="exampleFormControlSelect1">
                            <option value="2">User</option>
                            <option value="1">Admin</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                     </form>

                </div>
                
                </div>
                </div>
                </div>
                </div>
</template>
<script>
import axios from 'axios'
export default {
   name: 'login',
   data() {
       return{
           email: '',
           password:'',
           roleId:'' 
       }
   },
   methods: {
     handleLogin() {
       axios.post('http://sipintardel.herokuapp.com/customer/login',{
                email: this.email,
                password: this.password,
                roleId : this.roleId
          })
           .then(response => {
              
               if(response.data.token && this.roleId == 2){
                  localStorage.setItem(
                      "blog_token",
                      response.data.token
                      
                  )
                 
                window.location.replace('/index')
               }else if(response.data.token && this.roleId == 1){
                  localStorage.setItem(
                      "blog_token",
                      response.data.token
                      
                  )
                  
                 window.location.replace('/dashboard')
               }


                
            })
        }   
   }
    
}
</script>