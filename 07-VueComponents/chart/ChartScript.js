var OutgoingsChart = {
  template: '#c-template',
  props: ['outgoings'],
  data: function () {
    return {
      label: 'Miesięczny wydatek (PLN)',
    };
  },
  computed: {
    labels: function () {
      return this.outgoings.map((data) => {
        return data.outgoing;
      });
    },
    spent: function () {
      return this.outgoings.map((data) => {
        return data.spent;
      });
    },
    chartOptions: function () {
      return {
        type: 'line',
        chartData: {
          type: 'line',
          data: {
            labels: this.labels,
            datasets: [
              {
                label: this.label,
                data: this.spent,
                backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                borderColor: ['rgba(54, 162, 235, 1)'],
                borderWidth: 2,
              },
            ],
            options: {
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            },
          },
        },
      };
    },
  },
  methods: {
    createChart() {
      const context = document.getElementById('myChart').getContext('2d');
      const myChart = new Chart(context, {
        type: this.chartOptions.chartData.type,
        data: this.chartOptions.chartData.data,
        options: this.chartOptions.chartData.options,
      });
    },
  },
  mounted() {
    this.createChart();
  },
};

var app = new Vue({
  el: '#app',
  data: function () {
    return {
      outgoings: [
        {
          outgoing: 'Potrzeby bieżące',
          spent: 153.95,
        },
        {
          outgoing: 'Książki',
          spent: 368.33,
        },
        {
          outgoing: 'Kultura/rozrywka',
          spent: 289.16,
        },
        {
          outgoing: 'Podróże',
          spent: 283,
        },
      ],
    };
  },
  components: {
    'outgoings-chart': OutgoingsChart,
  },
});
