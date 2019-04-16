<template lang="html">
  <div class="login">
    <div class="login__container">
      <form class="" method="post" action="#" v-on:submit="onFormSubmit">
        <label for="email">Email:</label>
        <input type="text" name="email" v-model="credentials.email">

        <label for="password">Senha:</label>
        <input type="password" name="password" v-model="credentials.password">

        <button type="submit" name="button">Entrar</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        token: "",
        credentials: {
          email: "",
          password: ""
        }
      }
    },

    methods: {
      onFormSubmit(event) {
        event.preventDefault();
        const body = this.credentials
        fetch('http://localhost:8000/api-token-auth/', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body)
        })
        .then(response => {
          if(response.ok) {
            return response.json();
          } else {
            throw Error(response.statusText);
          }
        })
        .then(response => {
          localStorage.token = response.token;
          this.$router.push(`/dashboard`)
        })
        .catch(error => {
          alert(error)
        })
      }
    }
  }
</script>

<style scoped>
  .login {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    background-color: #E6E6FA;

  }
  .login__container {
    padding: 20px;
    width: 95%;
  }
  form {
    display: flex;
    flex-direction: column;
  }

  input {
    border: 2px solid;
    font-size: 30px;
    border-radius: 6px;
    padding: 8px;
  }

  button {
    background-color: transparent;
    border: 3px solid black;
    color: black;
    font-size: 30px;
    padding: 3%;
    margin-top: 30px;
    border-radius: 6px;
  }
  label {
    font-size: 25px;
    margin-bottom: 3px;
  }

  label + input {
    margin-bottom: 10px;
  }
</style>
