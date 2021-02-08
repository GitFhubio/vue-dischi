const app = new Vue( {
    el: '#app',
    data: {
       selected: 'all',
       listCds: [],
       listfiltered:[]
    },
    mounted () {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then( response => {
            console.log(response.data.response);
            this.listCds = response.data.response;
            this.listCds = this.listCds.filter( cd => cd.genre.toLowerCase() == this.selected);
   })

  },
   //  methods:{
   //
   // }
});
