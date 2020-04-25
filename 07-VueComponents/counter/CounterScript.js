var Counter = {
    template: '#counter-template',
    data: function () {
      return {
          count: 0
      };
    },
  };
  
  new Vue({
    el: '#app',
    components: {
      'counter': Counter,
    },
  });
  