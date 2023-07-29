<template>
    <div id="CarrosView">
        <h1>Carros View</h1>


        <b-container class="bv-example-row">
            <b-row>
                <b-col cols="2"></b-col>
                <b-col cols="8">
                    <div class="contenedoPadre">
                        <div v-for="carro in arreglo_cars" v-bind:key="carro.id">
                                <b-card
                                    v-bind:title="carro['titulo']"
                                    v-bind:img-src="carro['imagenes'][0]"
                                    img-alt="Image"
                                    img-top
                                    tag="article"
                                    class="mb-2"
                                >
                                    <b-card-text>
                                        <b-container class="bv-example-row">
                                            Costo: {{  carro['costo'] }}
                                        </b-container>
                                        <!--
                                        <b-container class="bv-example-row letrasContainer">
                                            <b-row>
                                                <b-col>Costo: {{ carro['costo'] }}</b-col>
                                                <b-col>Transmisión: {{ carro['transmision'] }}</b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>Combustible: {{ carro['combustible'] }}</b-col>
                                                <b-col>Rendimiento: {{ carro['rendimiento'] }}</b-col>
                                            </b-row>
                                        </b-container>
                                        -->

                                    </b-card-text>

                                    <b-button href="#" variant="outline-primary" v-on:click="contactarVendedor">Contactar Vendedor</b-button>
                                    <!--
                                            <b-button href="#" variant="primary"><router-link class="btnDetalle" v-bind:to="rutacreada">Ver Detalles</router-link></b-button>
                                    --> 
                                    <b-button href="#" variant="primary" v-on:click="redirigir(carro['id'])"> Ver Detalles</b-button>
                                </b-card>
                            </div>
                        </div>
                </b-col>
                <b-col cols="2"></b-col>
            </b-row>
        </b-container>



    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default{
    name:'CarrosView',
    components:{},
    props:{},
    data:function(){
        return{
            rutacreada:`/detalle/alg`,
        }
    },
    methods:{
        ...mapActions('datos_cars',['consumirDatosCars']),
        redirigir:function(id){
            console.log('Id del carro', id);
            let laruta= `/detalle/${id}`;
            this.$router.push(laruta);
        },
        contactarVendedor:function(){
            let rutaVendedor = '/contacto';
            this.$router.push(rutaVendedor )
        }
    },
    computed:{
        ...mapState('datos_cars', ['arreglo_cars']),
    },
    watch:{},
    created(){
        this.consumirDatosCars();
    }


}
</script>

<style scoped>
#CarrosView{
    background-color: coral;
}

.letrasContainer{
    font-size: 9px;
}

.contenedoPadre{
    text-align:center;
}

.btnDetalle{
    color: white;
}
</style>