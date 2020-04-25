var UniversityData = {
  template: '#ud-template',
  props: {
    name: String,
    address: String,
  },
};

new Vue({
  el: '#app',
  data: {
    name: 'Cracow University of Economics',
    address: 'Rakowicka 27, Krakow, POLAND',
  },
  components: {
    'university-data': UniversityData,
  },
});
