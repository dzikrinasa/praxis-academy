window.addEventListener("load", function () {
    // LET'S SAY THAT WE HAVE A SIMPLE FLAT ARRAY
    const mountains = [{
            name: "Kilimanjaro",
            height: 5895,
            place: "Tanzania"
        },
        {
            name: "Everest",
            height: 8848,
            place: "Nepal"
        },
        {
            name: "Mount Fuji",
            height: 3776,
            place: "Japan"
        },
        {
            name: "Vaalserberg",
            height: 323,
            place: "Netherlands"
        },
        {
            name: "Denali",
            height: 6168,
            place: "United States"
        },
        {
            name: "Popocatepetl",
            height: 5465,
            place: "Mexico"
        },
        {
            name: "Mont Blanc",
            height: 4808,
            place: "Italy/France"
        }
    ];

    // DRAW THE HTML TABLE
    var perrow = 1, // 3 items per row
        html = "<table><tr><th>name</th><th>height</th><th>place</th></tr><tr>"

    // Loop through array and add table cells
    for (var i = 0; i < mountains.length; i++) {
        html += "<td>" + mountains[i].name + "</td>" + "<td>" + mountains[i].height + "</td>" + "<td>" + mountains[i].place + "</td>";
        // Break into next row
        var next = i + 1;
        if (next % perrow == 0 && next != mountains.length) {
            html += "</tr><tr>";
        }
    }
    html += "</tr></table>";

    // ATTACH HTML TO CONTAINER
    document.getElementById("mountains").innerHTML = html;
});