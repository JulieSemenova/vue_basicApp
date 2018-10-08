var card = new Vue({
  el: '#card',
  data: {
    title: 'Dinosaurs',
    items: [{ text: 'Velociraptor' }, { text: 'Triceratops' }, { text: 'Stegosaurus' }]
  },
  methods: {
    addItem: function() {
      var input = document.getElementById('itemForm');

      if (input.value !== '') {
        this.items.push({
          text: input.value
        });
        input.value = '';
      }
    },
    deleteItem: function(index) {
      this.items.splice(index, 1);
    }
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
