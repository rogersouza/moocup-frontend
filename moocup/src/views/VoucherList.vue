<template lang="html">
  <div class="voucher-list">
    <div class="voucher-list-container">
      <h1>Vouchers</h1>
      <div class="voucher" v-for="(item, index) in vouchers">
        <span class="voucher__code">Código: {{item.id.slice(0, 8)}}</span>
        <span class="voucher__points">Pontos: {{item.points}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      const options = {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${localStorage.token}`
        },
      }
      var data = {
        vouchers: []
      };
      fetch("http://localhost:8000/api/v1/use/vouchers/", options)
      .then(response =>
        response.json().then(json => {
            if(response.status == 200) {
              data["vouchers"] = json
              console.log(data.vouchers)
            }
            else {
              alert(`Error: ${json}`)
              console.log(json)
            }
        })
      )
      .catch(error => console.log(error));

      return data
    },

    methods: {

    }
  }
</script>

<style scoped>
  .voucher-list{
    background-color: #E6E6FA;
    height: 100vh;
    padding: 10px 0px;
    display: flex;
    justify-content: center;
  }

  .voucher {
    border: 5px solid;
    border-radius: 10px;
    height: 40px;
    width: 250px;
    display: flex;
    padding: 20px 5px;
    flex-direction: column;
  }

  .voucher__code {
    font-size: 20px;
  }

  .voucher__points{
    font-size: 20px;
  }

  .voucher + .voucher{
    margin-top: 10px;
  }
</style>
