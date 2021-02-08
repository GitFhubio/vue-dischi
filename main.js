const app = new Vue( {
    el: '#app',
    data: {
       selected: 'All',
       listCds: [],
       listfiltered:[],
       listGenre:[]
    },
    mounted () {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then( response => {
            console.log(response.data.response);
            this.listCds = response.data.response;
            this.listCds.forEach((cd, i) => {
              if(!(this.listGenre.includes(cd.genre))) {
                this.listGenre.push(cd.genre);
              }
            });

             this.filterGenre();


   })

  },
    methods:{
     filterGenre(){
                   this.listfiltered = this.listCds.filter( cd => cd.genre == this.selected);
            if(this.selected=='All'){
              this.listfiltered=this.listCds;
            }

     }
   }
});
