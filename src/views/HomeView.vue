<template>
  <div id="home">
    <img alt="Vue logo" src="../assets/hyundai.jpg">
    <HelloWorld 
      msg="Encuentra tu próximo auto"
      v-bind:datos_cards="datos_arreglo_lleno"
      v-bind:hay_datos = "existen_datos_arreglo"
      />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapActions, mapState} from 'vuex';
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods:{
    ...mapActions('datos_landing',['consumirDatosLanding']),
  },
  computed:{
    ...mapState('datos_landing',['datos_arreglo']),
    datos_arreglo_lleno:function(){
      if(this.datos_arreglo.length > 0 ){
        return this.datos_arreglo;
      }
    },
    existen_datos_arreglo:function(){
      if(this.datos_arreglo.length > 0 ){
        return true;
      }
      else{
        return false
      }
    }
  },
  watch:{

  },
  created(){
    this.consumirDatosLanding();
  }
}
</script>


<style scoped>
img{
  width:20%;
}

#home{
  background-color: darkolivegreen;
}
</style>
