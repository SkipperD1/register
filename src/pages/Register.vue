<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <label>Email:
          <input type="email" v-model="email" required />
        </label><br>
        <label>Password:
          <input type="password" v-model="password" required />
        </label><br><br>
        <button type="submit">Register</button>
      </form>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      register() {
        const userData = {
        email: this.email,
        password: this.password,
        };
        alert('Registration successful');
      },
    },
  };
</script>
<style scoped>
h2{
  text-align: center;
  text-transform: uppercase;
  display: flexbox;
  margin-left: 10px;
}
form{
  display: flexbox;
  text-align: center;
  padding: 40px;
  margin: 0px;
  border: 2px solid;
}
label{
  display: flexbox;
  margin-bottom: 10px; 
}
input{
  width: 18rem;
  height: 30px;
  margin-right: 10px;
  margin-top: 10px;
  border-radius: 5px;
}
button{
  display: flexbox;
  text-align: center;
  width: 18rem;
  height: 35px;
  margin: 10px;
  color: white;
  background-color: red;
  border-radius: 10px;
  border: none;
}
button:hover{
  background-color: rgb(190, 1, 1);
}
span{
  text-decoration: none;
  color: red;
}
</style>
