
const app = new Vue({
    el: '#app',
    data: {
      selected:'All',
   selectedplus:'All',
   albums:[],
   genres:[],
   years:[],
},
  methods:{
active(index){
  this.indexActive=index;
},
ifstatement(album){
if(album.genre==this.selected || this.selected=='All'){

    if(album.year==this.selectedplus || this.selectedplus=='All')  {return true;}
}
}
},
mounted(){
  let self=this;
  axios.get('https://flynn.boolean.careers/exercises/api/array/music')
  .then(function(response){
   self.albums=response.data.response;
   console.log(self.albums);
   self.genres.push('All');
    self.albums.forEach((item, i) => {
      if(!self.genres.includes(item.genre)){
        self.genres.push(item.genre);
      }
    });
    self.years.push('All');
     self.albums.forEach((item, i) => {
       if(!self.years.includes(item.year)){
         self.years.push(item.year);
       }
     });

//     response.data.response.forEach((item, i) => {
//       if(!self.albums.includes(item)){
//         self.albums.push(item);
//       }
//     });
//
// console.log(self.albums);
  })

}

});
