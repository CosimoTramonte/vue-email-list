const {createApp} = Vue;


createApp({

    data(){

        return{
          getUrl:'https://flynn.boolean.careers/exercises/api/random/mail',
          arrayEmail: [],
          loading: true
        }
    },

    methods: {
        
        getApi(){
            this.loading = true
            
            axios.get(this.getUrl)
            .then( result => {
                console.log(result.data.response);
                this.arrayEmail.push(result.data.response)
                this.loading = false 
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