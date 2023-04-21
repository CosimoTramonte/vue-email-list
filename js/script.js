const {createApp} = Vue;


createApp({

    data(){

        return{
          getUrl:'https://flynn.boolean.careers/exercises/api/random/mail',
          arrayEmail: []
        }
    },

    methods: {

        multiGetApi(){
            for (let i = 1; i <= 10; i++) {
                this.getApi();      
            }

            
        },

        getApi(){
            axios.get(this.getUrl)
            .then( result =>{
                console.log(result.data.response);
                this.arrayEmail.push(result.data.response)
            })
        }
    },

    mounted(){
        this.multiGetApi();
    }


}).mount('#app')