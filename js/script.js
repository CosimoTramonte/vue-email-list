const {createApp} = Vue;


createApp({

    data(){

        return{
          apiUrl:'https://flynn.boolean.careers/exercises/api/random/mail',
          arrayEmail: [],
        }
    },

    methods: {
        
        getApi(){
            
            axios.get(this.apiUrl)
            .then( result => {
                console.log(result.data.response);
                this.arrayEmail.push(result.data.response)
            })
        },

        multiGetApi(){
            for (let i = 1; i <= 10; i++) {
                this.getApi();           
            }    
        }
    },

    mounted(){
        this.multiGetApi();
    }


}).mount('#app')