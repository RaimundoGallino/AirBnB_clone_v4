window.onload = function() {
    console.log("a");
    let listAmenities = $("DIV.amenities DIV.popover ul li");
    console.log(listAmenities);
    console.log(listAmenities.text());
    for (let li of listAmenities) {
        console.log("CCCCCCC");
        console.log(li);
        console.log("CCCCCC");
        console.log(li.first());
        $(li).first().click(function() {
            console.log("d");
            return;
            let listAmenities = $("DIV.amenities DIV.popover ul li");
            let selectedAmenitiesText = "";
            $('DIV.amenities').first().next().empty();

            for (let li of listAmenities) {
                let amenCheckState = $(li).first();
                let amenName = $(li).first().next().text();
                if (amenCheckState.is(':checked')) {
                    selectedAmenitiestext += `, ${amenName}`;
                }
            }

            $('DIV.amenities').first().next().text(selectedAmenitiestext);
        });
    }
};

function fillAmenities(elem)
{
    
}
