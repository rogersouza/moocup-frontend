<template lang="html">
  <div class="register">
    <div class="container">
      <h1>Cadastro</h1>
      <form class="" v-on:submit="onFormSubmit" method="post">
        <label for="email">E-mail:</label>
        <input type="text" name="email" v-model="userData.email">

        <label for="name">Nome:</label>
        <input type="text" name="name" v-model="userData.name">

        <label for="password">Password:</label>
        <input type="text" name="password" v-model="userData.password">

        <button type="submit" name="button">Cadastrar</button>
      </form>
    </div>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        userData: {
          email: "",
          name: "",
          password: "",
          product_uuid: this.$route.query.productCode
        }
      }
    },

    methods: {
    onFormSubmit (event) {
      event.preventDefault();
      const body = JSON.stringify(this.userData);
      const options = {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body
      }

      fetch("http://localhost:8000/users/", options)
      .then(response =>
        response.json().then(json => {
            if(response.status == 201) {
              this.$router.push(`/login`)
            }
            else {
              alert(`Error: ${json}`)
              console.log(json)
            }
        })
      )
      .catch(error => console.log(error));
    }
  }
}
</script>

<style media="screen">
  .register {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
  }

  .container {
    padding: 20px;
    border: 5px solid;
    width: 95%;
  }

  .container h1 {
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    border: 2px solid;
    font-size: 30px;
  }

  button {
    background-color: transparent;
    border: 5px solid black;
    color: black;
    font-size: 30px;
    padding: 3%;
    margin-top: 30px;
  }
  label {
    font-size: 25px;
  }
</style>
