var BinaryCard = {
  template: '#bc-template',
  data: function () {
    return {
      title: 'Konwersja 10 -> 2',
    };
  },
  props: {
    decimal: Number,
  },
  computed: {
    binary: function () {
      return this.decimal.toString(2);
    },
  },
};

new Vue({
  el: '#app',
  components: {
    'binary-card': BinaryCard,
  },
});
