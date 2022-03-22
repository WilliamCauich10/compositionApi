import { ref } from "vue";

const useCounter = ( initValue = 5) => {
    const counter = ref( initValue )

    return{
        /*****methodos******/
        counter,
        /*******Funciones********/
        dencrease: () => counter.value --,
        increase: () => counter.value ++,
    }
} 
export default useCounter