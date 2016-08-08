(function(){
  var app = angular.module('store', []);

  app.controller("StoreController", function() {
          this.product = gems;
  });

  app.controller("PanelController", function() {
      this.tab = 1;

      this.selectTab = function(setTab) {
          this.tab = setTab;
      };

      this.isSelected = function(checkTab) {
          return this.tab === checkTab;
      };
  });
  
  var gems = [
    {     
          name: 'Dodecahedron',
          price: 2.95,
          description: 'something',
          canPurchase: true,
          soldOut: false,
          images: {
              thumb:'chari.ico',
              full:'chari.jpg',
          },
    },
    {     
          name: 'Dodecahedron-2',
          price: 5.9,
          description: 'something special',
          canPurchase: true,
          soldOut: false,
          images: {
              thumb:'chari.ico',
              full:'chari.jpg',
          },
    },
  ];



})();
