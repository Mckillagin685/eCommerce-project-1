$(document).ready(function() {
  $('select').material_select();
});

$('form').on('submit', (e) => {
    Materialize.toast('Order successful', 5000);
});

$('input[type="checkbox"]').on('click', (e) => {
  const checkbox = $('input[type="checkbox"]');

  if(checkbox.checked){
    $('#bill_first_name').val($('#first_name').val())
    $('#bill_last_name').val($('#last_name').val())
    $('#bill_company').val($('#company').val())
    $('#bill_address_1').val($('#address_1').val())
    $('#bill_address_2').val($('#address_2').val())
    $('#bill_select').val($('#select').val())
    $('#bill_zip_code').val($('#zip_code').val())
    $(document).ready(function() {
      Materialize.updateTextFields();
    });
  }
})
