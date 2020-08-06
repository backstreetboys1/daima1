<template>
<div id="shou">
  1111
  
</div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      info: null
    }
  },

  mounted () {
    axios
      .get('https://www.fastmock.site/mock/9a7ba3b112ae0ccfeeb5740494bf7f0f/sqxs/api')
      .then(response => (this.info = response))
     
  }

}
</script>

<style scoped>
#shou{
    width: 100%;
}
</style>
