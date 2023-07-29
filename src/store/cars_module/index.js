import axios from 'axios';
const datos_cars ={
    namespaced:true,
    state:{
        arreglo_cars:[],
    },
    getters:{},
    mutations:{
        CONSUMIR_DATOS_CARS:(state, arreglo)=>{
            state.arreglo_cars = arreglo;
        }
    },
    actions:{
        consumirDatosCars:(context)=>{
            let url = "carros.json";
            axios.get(url)
                .then(respuesta=>{
                    console.log(respuesta);
                    console.log(respuesta.data);
                    console.log(respuesta.data.carros);
                    context.commit('CONSUMIR_DATOS_CARS', respuesta.data.carros);
                })
                .catch(error=>{
                    console.log(error);
                });
        }
    },
    modules:{}
};

export default datos_cars;