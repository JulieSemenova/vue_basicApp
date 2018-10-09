var card = new Vue({
  el: '#card',
  data: {
    title: 'Dinosaurs',
    input: '',
    buttonText: 'Add Dinosaur',
    items: [
      { text: 'Velociraptor', quantity: 5 },
      { text: 'Triceratops', quantity: 3 },
      { text: 'Stegosaurus', quantity: 6 }
    ]
  },
  computed: {
    totalDinos: function() {
      var sum = 0;
      var items = this.items;

      for (var i in items) {
        sum += items[i].quantity;
      }

      return sum;
    },
    totalSpecies: function() {
      return this.items.length;
    },
    buttonDisabled: function() {
      return this.input == '';
    }
  },
  methods: {
    addItem: function(e) {
      e.preventDefault();
      if (!this.input) return;

      this.items.push({ text: this.input, quantity: 1 });
      this.input = '';
    },
    removeItem: function(item) {
      this.items.splice(item, 1);
    }
  },
  watch: {
    input: _.debounce(function() {
      this.buttonText = this.input !== '' ? 'Add ' + this.input : 'Add Dinosaur';
    }, 250)
  }
});

var card = new Vue({
  el: '#filterCard',
  data: {
    title: 'dinosaurs',
    dinos: [
      {
        text: 'Velociraptor',
        weight: '15 kg'
      },
      {
        text: 'triceratops',
        weight: '6,000 kg'
      },
      {
        text: 'Stegosaurus',
        weight: '2,500 kg'
      }
    ]
  },
  filters: {
    capitalize: function(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    undercase: function(value) {
      if (!value) return '';
      value = value.toString();
      return value.toLowerCase();
    },
    url: function(value) {
      if (!value) return '';
      value = value.toString();
      return `https://en.wikipedia.org/wiki/` + value;
    }
  }
});
