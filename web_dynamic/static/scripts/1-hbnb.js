window.onload = function() {
    let listAmenities = $("DIV.amenities DIV.popover ul li");
    for (let li of listAmenities) {
        $(li).first().click(function() {
            // let amenCheckState = $(li).first();
            // let amenName = $(li).first().next().text();
            // let h4 = $('DIV.amenities h4');
            // if (amenCheckState.is(':checked')) {
            //     amenCheckState.prop('checked', false);
            //     console.log("falso");
            // } else {
            //     amenCheckState.prop('checked', true);
            //     console.log("true");
            //     h4.text(amenName);
            // }
            let amenName = $(li).first().next().text();
            let h4 = $('DIV.amenities h4');
            if (this.checked) {
                console.log("true");
                h4.text(amenName);
            } else {
                console.log("falso");
            }
        });
    }
};
