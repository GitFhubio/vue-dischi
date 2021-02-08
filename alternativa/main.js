const app = new Vue( {
    el: '#app',
    data: {
       selected: 'All',
       listCds: [],
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
          })

         },

updated(){
console.log(this.selected);
},
    methods:{

   }
});