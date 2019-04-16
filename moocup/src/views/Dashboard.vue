<template>
  <main class="dashboard">
    <div class="dashboard-data">
      <div class="widget">
        <h2>Pontos acumulados</h2>
        <span class="data-baloon">{{ accumulatedPoints }}</span>
      </div>

      <div class="widget">
        <h2>Copos salvos</h2>
        <div class="icon">
          <img src='../icons/glass-of-water.png' alt="">
        </div>
        <span class="data-baloon">{{ savedCups }}</span>
      </div>

      <div class="widget">
        <h2>Água consumida</h2>
        <div class="icon">
          <img src='../icons/drop.png' alt="">
        </div>
        <span class="data-baloon">{{ consumedWater }}ℓ</span>
      </div>
    </div>
    <div class="actions">
      <button type="button" name="button" v-on:click="openReader">Usar</button>
      <button type="button" name="button" v-on:click="resgatar()">Resgatar</button>
      <button type="button" name="button" v-on:click="goToVoucherList()">Vouchers</button>
      <button type="button" name="button" v-on:click="logout">Sair</button>
    </div>
  </main>
</template>

<script>
  import firebase from 'firebase'
  export default {
    data() {

      const options = {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${localStorage.token}`
        },
      }
      let data = {
        accumulatedPoints: "",
        savedCups: "",
        consumedWater: "",
      };
      fetch('http://localhost:8000/api/v1/use/dashboard/', options)
      .then(response => {
        if(!response.ok){
          throw Error(response.statusText)
        }
        return response.json()
      })
      .then(response => {
        console.log(response)
        data.accumulatedPoints = response.accumulated_points
        data.savedCups = response.saved_cups
        data.consumedWater = response.consumed_water
      })
      .catch(error =>{
        data = {
          accumulatedPoints: "--",
          savedCups: "--",
          consumedWater: "--",
        }
      })

      return data
    },
    methods: {
      openReader(event) {
        this.$router.push(`/reader-user`)
      },

      goToVoucherList(event) {
        this.$router.push(`/vouchers`)
      },

      logout(event) {
        localStorage.token = "";
        this.$router.push(`/login`)
      },

      resgatar(event) {
        const options = {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.token}`
          },
          body: {}
        }

        fetch("http://localhost:8000/api/v1/use/vouchers/", options)
        .then(response =>
          response.json().then(json => {
              if(response.status == 200) {
                this.$router.push(`/vouchers`)
              }
              else if (response.status == 406){
                alert(`Você precisa de no mínimo 4 pontos para resgatar um voucher`)
                console.log(json)
              }
          })
        )
        .catch(error => console.log(error));
      }
    }
  }
</script>



<style scoped>
  .dashboard-data {
    display: flex;
    flex-direction: column;
    height: 500px;;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .dashboard-data > div + div {
    margin-top: 10px;
  }

  .dashboard {
    padding: 0 40px;
    text-align: center;
    background-color: #E6E6FA;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  #branding {
    margin-bottom: 40px;
  }

  .widget {
    border: 2px solid;
    display: flex;
    width: 100%;
    flex-direction: column;
    border-radius: 6px;
  }

  .widget .icon {
    align-self: center;
    flex: 1;
  }

  .data-baloon {
    color: #353535;
    width: 40px;
    display: flex;
    display: block;
    align-self: center;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    font-size: 30px;
    margin-bottom: 15px;
    flex: 1
  }

  .actions {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }

  .actions button {
    font-size: 15px;
    border: 2px solid #353535;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
  }

  .actions > button + button {
    margin-left: 7px;
  }

</style>
