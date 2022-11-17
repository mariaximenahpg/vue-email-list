const { createApp }= Vue;
createApp({
    data(){
        return{
            emails: []
        }
    },
    created(){
        for(let i=1; i<=10; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => {
                this.emails.push(response.data.response);
                // console.log(i + " "+ response.data.response);
            });
        }
    }
}).mount('#app')