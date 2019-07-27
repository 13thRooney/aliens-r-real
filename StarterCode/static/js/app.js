
// Get a reference to the table body
var tbody = d3.select("tbody");
console.log(tbody);


console.log(data);

// Write code that appends a table to your web page
// Add new rows of data for each UFO sighting.

data.forEach((ufoData) => {
  var row = tbody.append("tr");
  Object.entries(ufoData).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the button
var button = d3.select("#filter-btn");

// Complete the click handler for the form
button.on("click", function() {
  var tbody = d3.select("tbody");
  tbody.html("");
  
  // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    console.log(data);

  // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

  // Use the form input to filter the data by blood type
    var filterData =  data.filter(myUFO => myUFO.datetime === inputValue);
    console.log(filterData);


    filterData.forEach((ufo) => {
      var row = tbody.append("tr");
      Object.entries(ufo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });

});
