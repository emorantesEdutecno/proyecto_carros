<template>
    <div id="CarroDetalleComponent">
        <h1>Carro Detalle Component</h1>
        {{ id }}<br>

        {{ identificarIndice }}

        <div>
                                <b-card
                                    v-bind:title="arreglo_cars[identificarIndice]['titulo']"
                                    v-bind:img-src="arreglo_cars[identificarIndice]['imagenes'][0]"
                                    img-alt="Image"
                                    img-top
                                    tag="article"
                                    style="max-width: 90%;"
                                    class="mb-2"
                                >

                            <!-- CARROUSEL-->
                                            <div>
                                                <b-carousel
                                                id="carousel-1"
                                                v-model="slide"
                                                :interval="4000"
                                                controls
                                                indicators
                                                background="#ababab"
                                                img-width="1024"
                                                img-height="480"
                                                style="text-shadow: 1px 1px 2px #333;"
                                                @sliding-start="onSlideStart"
                                                @sliding-end="onSlideEnd"
                                                >


                                                <!-- Slides with image only -->
                                                <b-carousel-slide v-bind:img-src="arreglo_cars[identificarIndice]['imagenes'][0]"></b-carousel-slide>

                                                
                                                <!-- Slides with image only -->
                                                <b-carousel-slide v-bind:img-src="arreglo_cars[identificarIndice]['imagenes'][1]"></b-carousel-slide>

                                                
                                                <!-- Slides with image only -->
                                                <b-carousel-slide v-bind:img-src="arreglo_cars[identificarIndice]['imagenes'][2]"></b-carousel-slide>

                                                </b-carousel>

                                                <p class="mt-4">
                                                Slide #: {{ slide }}<br>
                                                Sliding: {{ sliding }}
                                                </p>
                                            </div>

                                            <!-- FIN CARROUSEL-->

                                    <b-card-text>
                                        <b-container class="bv-example-row letrasContainer">
                                            <b-row>
                                                <b-col>Costo: {{ arreglo_cars[identificarIndice]['costo'] }}</b-col>
                                                <b-col>Transmisión: {{ arreglo_cars[identificarIndice]['transmision'] }}</b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>Combustible: {{ arreglo_cars[identificarIndice]['combustible'] }}</b-col>
                                                <b-col>Rendimiento: {{ arreglo_cars[identificarIndice]['rendimiento'] }}</b-col>
                                            </b-row>
                                        </b-container>
                                    </b-card-text>

                                    <b-button href="#" variant="outline-primary" v-on:click="contactarVendedor">Contactar Vendedor</b-button>
                                    <b-button href="#" variant="primary"><router-link class="links" to="/carros">Regresar</router-link></b-button>
                                    
                                </b-card>
        </div>


    </div>
</template>

<script>
import {mapState} from 'vuex';
export default{
    name:'CarroDetalleComponent',
    props:{
        id:String
    },
    components:{},
    data:function(){
        return{
            slide: 0,
            sliding: null
        }
    },
    methods:{
        onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      contactarVendedor:function(){
            let rutaVendedor = '/contacto';
            this.$router.push(rutaVendedor )
        }
    },
    computed:{
        ...mapState('datos_cars',['arreglo_cars']),
        identificarIndice: function(){
            console.log('this.id', this.id);
            console.log(typeof this.id);
            console.log('arreglo_cars[0][id]', this.arreglo_cars[0]['id']);
            console.log(typeof this.arreglo_cars[0]['id']);

            return this.arreglo_cars.findIndex(carro=>carro['id'] === this.id);
        }
    },
    watch:{}

}
</script>

<style scoped>
#CarroDetalleComponent{
    background-color: darkgoldenrod;
}

.links{
    color: white;
}
</style>