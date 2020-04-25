var FirstMovie = {
  template: '#movie-template',
  data: function () {
    return {
      director: 'Mel Gibson',
      title: 'Hacksaw Ridge',
      year: 2016,
    };
  },
};

var SecondMovie = {
  template: '#movie-template',
  data: function () {
    return {
      director: 'Juan Manuel Cotelo',
      title: 'Marys Land',
      year: 2013,
    };
  },
};

var ThirdMovie = {
  template: '#movie-template',
  data: function () {
    return {
      title: 'Saving Private Ryan',
      director: 'Steven Spielberg',
      year: 1998,
    };
  },
};

new Vue({
  el: '#app',
  components: {
    'first-movie': FirstMovie,
    'second-movie': SecondMovie,
    'third-movie': ThirdMovie,
  },
});
