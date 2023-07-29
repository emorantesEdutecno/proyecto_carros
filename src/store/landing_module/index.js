import axios from 'axios';
const datos_landing={
    namespaced:true,
    state:{
        datos_arreglo:[],
    },
    getters:{},
    mutations:{
        CONSUMIR_DATOS_LANDING:(state, arreglo)=>{
            state.datos_arreglo = arreglo;
        },
    },
    actions:{
        consumirDatosLanding:(context)=>{
            let url = "landing.json";
            axios.get(url)
            .then(respuesta=>{
                // OJO CON LAS RESPUESTA DE LOS JSON
              console.log(respuesta);
              console.log(respuesta.data);
              console.log(respuesta.data.landing);
              context.commit('CONSUMIR_DATOS_LANDING', respuesta.data.landing);
            })
            .catch(error=>{
              console.log(error);
            });
          },
    },
    modules:{}
};
export default datos_landing;