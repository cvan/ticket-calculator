(function () {

var form = document.querySelector('.form-profit');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  calculate();
});

form.addEventListener('input', calculate);

function calculate() {
  var resellerCut = form.querySelector('[name="reseller-cut"]');
  var ticketCount = form.querySelector('[name="ticket-count"]');
  var priceResllerValue = form.querySelector('[name="price-reseller-value"]');
  var priceFaceValue = form.querySelector('[name="price-face-value"]');
  var priceProfit = document.querySelector('[name="price-profit"]');

  var percentageCut = parseInt(resellerCut.value, 10) / 100;
  var numTickets = parseInt(ticketCount.value, 10);
  var costPerTicket = parseInt(priceFaceValue.value, 10);
  var valuePerTicket = parseInt(priceResllerValue.value, 10);

  var totalCost = costPerTicket * numTickets;
  var totalValue = valuePerTicket * numTickets;

  var totalProfit = totalValue - totalValue * percentageCut - totalCost;

  if (isNaN(totalCost) || isNaN(totalValue) || isNaN(totalProfit)) {
    priceProfit.value = '';
  } else {
    priceProfit.value = totalProfit;
  }
}

})();
