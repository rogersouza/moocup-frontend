<template lang="html">
  <div id="qr_code_reader">
    <qrcode-stream @decode="onDecode" >
    </qrcode-stream>
  </div>
</template>


<script>
  export default {
    methods: {
    onDecode (decodedString) {
      this.$router.push(`/register?productCode=${decodedString}`)
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
