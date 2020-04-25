var VirusDataCard = {
  template: '#vd-template',
  props: {
    data: Object,
  },
};

new Vue({
  el: '#app',
  data: {
    globalData: {
      NewConfirmed: 0,
      TotalConfirmed: 0,
      NewDeaths: 0,
      TotalDeaths: 0,
      NewRecovered: 0,
      TotalRecovered: 0,
    },
  },
  mounted() {
    axios.get('https://api.covid19api.com/summary').then((res) => {
      console.log(JSON.stringify(res));
      this.globalData = res.data.Global;
    });
  },
  components: {
    'virus-data-card': VirusDataCard,
  },
});
