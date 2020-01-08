<template>
    <div class="RegisterView">
        <Login @checkCredentials="UserID" msg="Registrate"/>
    </div>  
</template>

<script>
import Login from "@/components/Login.vue";

export default {
    name: "LoginView",
    components:{
        Login
    },
    methods: {
      UserID(id) {
        this.$emit("UserID", id);
      }
    }
};
</script>