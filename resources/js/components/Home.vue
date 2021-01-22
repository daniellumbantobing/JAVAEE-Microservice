<template>
    <h1>Welcome User</h1>
</template>
<script>
import axios from 'axios'
export default {
    
    methods: {
      
        created(){
                 axios.defaults.headers.common["Authorization"] = 'Bearer' + localStorage.getItem('blog_token');
        }
    }
}
</script>