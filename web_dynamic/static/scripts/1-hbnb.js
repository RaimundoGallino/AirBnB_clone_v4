$(document).ready(function () {
  let listAmenities = $("DIV.amenities DIV.popover ul li");

  for (let li of listAmenities) {
    console.log($(li).children(":first"));
    console.log("========================");
    $(li).children(":first").change(function () {
      let checkedAmenities = [];
      let dataName = $(li).text();
      console.log(dataName);
      console.log($(li).first().text());
      console.log($(this));
      console.log(this);
      console.log("I'm Checked? " + $(li).first().is(':checked'));
      console.log("I'm Checked? " + $(li).first().attr('checked'));
      console.log("I'm Checked? " + $(li).first().prop('checked'));
      console.log("with this: " + this.checked);
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
