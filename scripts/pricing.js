function calc_pricing() {
    var total = 0;
    var checkboxes = document.querySelectorAll('input[name="service"]');

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
        total += parseInt(checkbox.value);
        }
    });

    document.getElementById('total').innerHTML = 'Total: MWK' + total;
}
  