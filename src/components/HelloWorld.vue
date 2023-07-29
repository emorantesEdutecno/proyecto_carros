<template>
  <div id="hello">
    <h1>{{ msg }}</h1>

    <!--
    {{ datos_cards }}
    -->


    <b-container class="bv-example-row" v-if="hay_datos">
  <b-row>
    <b-col>
      <!--CARD 1-->
              <div>
                <b-card
                  v-bind:title="datos_cards[0]['titulo']"
                  v-bind:img-src="datos_cards[0]['imagen']"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                >
                  <b-card-text>
                    <p>{{ datos_cards[0]['autor'] }} - {{  datos_cards[0]['fecha'] }}</p>
                  </b-card-text>

                  <b-button href="#" variant="primary">Ver más</b-button>
                </b-card>
              </div>
      <!--FIN CARD 1-->
    </b-col>
    <b-col>
      <!--CARD 2-->
      <div>
                <b-card
                  v-bind:title="datos_cards[1]['titulo']"
                  v-bind:img-src="datos_cards[1]['imagen']"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                >
                  <b-card-text>
                    <p>{{ datos_cards[1]['autor'] }} - {{  datos_cards[1]['fecha'] }}</p>
                  </b-card-text>

                  <b-button href="#" variant="primary">Ver más</b-button>
                </b-card>
              </div>
      <!--FIN CARD 2-->
    </b-col>
    <b-col>
      <!--CARD 3-->
      <div>
                <b-card
                  v-bind:title="datos_cards[2]['titulo']"
                  v-bind:img-src="datos_cards[2]['imagen']"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                >
                  <b-card-text>
                    <p>{{ datos_cards[2]['autor'] }} - {{  datos_cards[2]['fecha'] }}</p>
                  </b-card-text>

                  <b-button href="#" variant="primary">Ver más</b-button>
                </b-card>
              </div>
      <!--FIN CARD 3-->

    </b-col>

  </b-row>

  <b-row>
    <b-col>
      <!--CARD 4-->
      <div>
                <b-card
                  v-bind:title="datos_cards[3]['titulo']"
                  v-bind:img-src="datos_cards[3]['imagen']"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                >
                  <b-card-text>
                    <p>{{ datos_cards[3]['autor'] }} - {{  datos_cards[3]['fecha'] }}</p>
                  </b-card-text>

                  <b-button href="#" variant="primary">Ver más</b-button>
                </b-card>
              </div>
      <!--FIN CARD 4-->
    </b-col>
    <b-col>
      <!--CARD 5-->
      <div>
                <b-card
                  v-bind:title="datos_cards[4]['titulo']"
                  v-bind:img-src="datos_cards[4]['imagen']"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                >
                  <b-card-text>
                    <p>{{ datos_cards[4]['autor'] }} - {{  datos_cards[4]['fecha'] }}</p>
                  </b-card-text>

                  <b-button href="#" variant="primary">Ver más</b-button>
                </b-card>
              </div>
      <!--FIN CARD 5-->
    </b-col>
    <b-col>
     <!--CARD 6-->
     <div>
                <b-card
                  v-bind:title="datos_cards[5]['titulo']"
                  v-bind:img-src="datos_cards[5]['imagen']"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                >
                  <b-card-text>
                    <p>{{ datos_cards[5]['autor'] }} - {{  datos_cards[5]['fecha'] }}</p>
                  </b-card-text>

                  <b-button href="#" variant="primary">Ver más</b-button>
                </b-card>
              </div>
      <!--FIN CARD 6-->

    </b-col>
   
  </b-row>
</b-container>


<hr>
<hr>
<h2>Generación Dinámica</h2>

<div id="contenedor_padre">
      <!--CARD DINAMICA-->
      <div v-for="datos in datos_cards" class="contenedores_hijo">
                <b-card
                  v-bind:title="datos['titulo']"
                  v-bind:img-src="datos['imagen']"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                >
                  <b-card-text>
                    <p>{{ datos['autor'] }} - {{  datos['fecha'] }}</p>
                  </b-card-text>

                  <b-button href="#" variant="primary">Ver más</b-button>
                </b-card>
              </div>
      <!--FIN CARD DINAMICA-->

</div>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    datos_cards: Array,
    hay_datos:Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#hello{
  background-color: hotpink;
  margin: 2%;
}

#contenedorPadre{
  display:flex;
  flex-wrap: wrap;
}

.contenedores_hijo{
  display:inline-block;
  margin: 2%;
}
</style>
