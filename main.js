const app = new Vue( {
    el: '#app',
    data: {
       activeGenre: 'all',
       listCds: [],
    },
    mounted () {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then( response => {
            console.log(response.data.response);
            this.listCds = response.data.response;
        })
        .catch( error => {
            console.log(error);
        });
    },

});
