$(document).ready(function(){
    $('#searchWithinButton').click(function(e){
        searchWithin(e)
    });
    
    $('#searchWithinForm').submit(function(e){
        searchWithin(e);
    })          
})

        
function searchWithin(e){
    e.preventDefault();
    var input = $('#searchWithin').val().toUpperCase();
    if ($('#searchWithin').val().length >= 1) {

        var results = searchPartials(input, member.trailers);

        if (results.length == 0) {

            var heading = '<h2 class="heading-medium">0 trailers</h2>';
            
            var noResults = '<div class="no-search-results">No trailers found</div>';
            
            $('#trailer-table').html(heading + noResults);      
        
        
        } else {
            var heading = '<h2 class="heading-medium">' + results.length + ' trailer<span class="plural"></span></h2>';
            
            var trailerHeader = '<table id="sortable-table"><thead><tr><th scope="col" onclick="sortTable(0)" id="reg" class="sort-default">Registration number</th><th scope="col" onclick="sortTable(1)" id="vin" class="sort-default"><abbr title="Vehicle Identification Number">VIN</abbr>/Chassis number</th><th scope="col" onclick="sortTable(2)" id="manu" class="sort-default">Manufacturer</th><th scope="col">&nbsp;</th></tr></thead><tbody>';
            
            var trailerRow = '';

            for (i = results.length - 1; i >= 0; i--) {
                if (results[i].registered == true) {
                    trailerRow += '<tr>';
                    trailerRow += '<td scope="row"><span class="table-label">Registration</span><span class="table-details">' + results[i].reg + '</span><a href="#" class="manage-link" data="' + i + '">Manage</a></td>';

                    if (results[i].chassis) {
                        trailerRow += '<td scope="row"><span class="table-label"><abbr title="Vehicle Identification Number">VIN</abbr></span><span class="table-details">' + results[i].chassis + '</span></td>';
                    } else {
                        trailerRow += '<td scope="row"><span class="table-label"><abbr title="Vehicle Identification Number">VIN</abbr></span><span class="table-details">' + results[i].vin + '</span></td>';
                    }
                    trailerRow += '<td scope="row"><span class="table-label">Manufacturer</span><span class="table-details">' + results[i].manufacturer + '</span></td>';
                    trailerRow += '<td scope="row" id="manage"><a href="#" class="manage" data="' + i + '">Manage</a></td>';
                    // trailerRow += '<a href="#" class="manage-link" data="' + i + '">Manage</a>';
                    trailerRow += '</tr>';
                }
            }

            $('#trailer-table').html(heading + trailerHeader + trailerRow + '</tbody></table>');
        }
    }
}

/********************************************************************
    Search each field, at any position, for each sub-string
********************************************************************/
function searchPartials(input, dataSource){
//    e.preventDefault();
    var items = dataSource;
    var inputs = input.split(" ");
    var holding = [];
    var results = [];

    for (var i = 0; i < items.length; i++) {
        var counter = 0;
        for (var s = 0; s < inputs.length; s++) {
            if (items[i].vin){
                if (items[i].reg.toUpperCase().includes(inputs[s]) || items[i].vin.toUpperCase().includes(inputs[s]) || items[i].manufacturer.toUpperCase().includes(inputs[s])) {
                    counter++;
                    if (counter == inputs.length) {
                        counter = 0;
                        if (holding.includes(items[i])) {
                        } else {
                            holding.push(items[i]);
                        }
                    }
                }
            } else {
                if (items[i].reg.toUpperCase().includes(inputs[s]) || items[i].chassis.toUpperCase().includes(inputs[s]) || items[i].manufacturer.toUpperCase().includes(inputs[s])) {
                    counter++;
                    if (counter == inputs.length) {
                        counter = 0;
                        if (holding.includes(items[i])) {
                        } else {
                            holding.push(items[i]);
                        }
                    }
                }
            }
        }
    }

    for (var d = 0; d < holding.length; d++) {
        if (results.includes(holding[d])) {
        } else {
            results.push(holding[d]);
        }
    }
    return results;
}