<template lang="html">
  <div id="qr_code_reader">
    <qrcode-stream @decode="onDecode" ></qrcode-stream>
  </div>
</template>


<script>
  export default {
    methods: {
    onDecode (decodedString) {
      const body = JSON.stringify({
        product: decodedString
      });
      const options = {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${localStorage.token}`
        },
        body
      }

      fetch("http://localhost:8000/api/v1/use/", options)
      .then(response => {
        if(response.status == 406){
          throw Error("Você atingiu o número máximo de usos. Tente novamente amanhã")
        }
        return response.json()
      })
      .then(response => {
        this.$router.push(`/dashboard`)
      })
      .catch(error => {
        alert(error)
        this.$router.push(`/dashboard`)
      })
    }
  }
}
</script>

<style media="screen">
  #qr_code_reader {
    background-color: #E6E6FA;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
