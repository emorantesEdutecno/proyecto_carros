<template>
    <div id="FormularioComponent">
        <h1>Formulario Component</h1>


        <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

        <div>
            <b-form-textarea
            id="textarea"
            v-model="form.text"
            placeholder="Enviar un mensaje a la agencia ..."
            rows="3"
            max-rows="6"
            ></b-form-textarea>

            <pre class="mt-3 mb-0">{{ form.text }}</pre>
        </div>

        <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Ingrese su Nombre"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Correo:"
        label-for="input-1"
        description="No compartiremos su información con nadie más"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Ingrese su correo electrónico"
          required
        ></b-form-input>
      </b-form-group>


      <b-form-group id="input-group-2" label="Teléfono:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.phone"
          placeholder="Ingrese su Teléfono"
          required
        ></b-form-input>
      </b-form-group>



      <b-button type="submit" variant="primary">Enviar</b-button>
      <b-button type="reset" variant="danger">Limpiar</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>




    </div>
</template>

<script>
export default{
    name:'FormularioComponent',
    props:{

    },
    components:{},
    data:function(){
        return{

        form: {
          email: '',
          name: '',
          phone:'',
          text: ''
        },
        show: true
        }
    },
    methods:{
        onSubmit(event) {
        event.preventDefault()
        alert('LOS SIGUIENTOS DATOS FUERON ENVIADOS A LA COMPAÑÍA.PRONTO NOS ESTAREMOS CONTACTANDO CON USTED');
        alert(JSON.stringify(this.form));
        this.limpiar();
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.phone = ''
        this.form.text = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }, 
      limpiar(){
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.phone = ''
        this.form.text = '' 
      }
    },
    computed:{
    },
    watch:{}

}
</script>

<style scoped>
#FormularioComponent{
    background-color: orange;
    color: white;
}
</style>