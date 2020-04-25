var ArchitectureList = {
  template: '#arch-list',
  data: function () {
    return {
      title: 'Architektura von Neumanna',
      architectureComponents: [
        'pamięć komputerowa przechowująca dane programu oraz instrukcje programu',
        'jednostka sterująca odpowiedzialna za pobieranie danych i instrukcji z pamięci oraz ich sekwencyjne przetwarzanie',
        'jednostka arytmetyczno-logiczna odpowiedzialnej za wykonywanie podstawowych operacji arytmetycznych',
        'urządzenia wejścia i wyjścia oraz wszelkie inne nośniki danych z możliwością zapisu i odczytu',
      ],
    };
  },
};

new Vue({
  el: '#app',
  components: {
    'architecture-list': ArchitectureList,
  },
});
