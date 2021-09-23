$(document).ready(function () {
  let listAmenities = $("DIV.amenities DIV.popover ul li");

  for (let li of listAmenities) {
    $(li).first().click(function () {
      let checkedAmenities = [];
      let dataName = $(this).data('name');
      console.log(dataName);
      console.log("I'm Checked? " + this.checked);
      if (this.checked) {
        checkedAmenities.push(dataName);
      } else {
        let idx = checkedAmenities.indexOf(dataName);
        if (idx !== -1) {
          checkedAmenities.splice(idx, 1);
        }
      }

      if (checkedAmenities.length > 0) {
        $('div.amenities h4').text(checkedAmenities.join(', '));
      } else {
        $('div.amenities h4').text('&nbsp;');
      }
    });
  }
});
