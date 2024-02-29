import { defineStore } from 'pinia'

export const useColorStore = defineStore('colors', {
    state:()=>({
        color:"blue"
    }),getters: {
        getColor(){return this.color}
    },actions:{
        swapBlue(){
            this.color="blue";
        },
        swapRed() {
            this.color = "red";
        },
        swapGreen(){
            this.color="green";
        }
    }
})