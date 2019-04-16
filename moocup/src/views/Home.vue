<template lang="html">
  <main class="home">
    <div class="logo">
      <img src="../assets/moocup.png" alt="">
    </div>
    <h2>
      Possui uma garrafa mas não é cadastrado? Clique <router-link to="/reader-register">aqui</router-link>
    </h2>

    <router-link tag="button" to="/login" id="go-register">Login</router-link>
  </main>
</template>


<style scoped>

  .logo {
    width: 100%;
  }

  .logo > img{
    max-width:100%;
    max-height:100%;
  }

  .home {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    flex-direction: column;
    text-align: center;
    background-color: #E6E6FA;

  }

  h1 {
    font-size: 75px;
    margin-bottom: 100px;
  }

  #go-register {
    background-color: transparent;
    border: 5px solid #353535;
    color: #353535;
    border-radius: 10px;
    font-size: 30px;
    padding: 3% 10%;
  }


</style>
