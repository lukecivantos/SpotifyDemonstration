

var data;
var fiveRandomMembers;

d3.csv("data/playlistExample.csv", function(d){
    data = d
});

$(document).ready(function() {
    $('body').css('visibility','visible').hide().fadeIn(2000);
    $('#chart-area').css('visibility','visible').hide();
});

function getPlaylists() {

    function getRandomSubarray(arr, size) {
        var shuffled = arr.slice(0), i = arr.length, temp, index;
        while (i--) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(0, size);
    }



    console.log(data);

    fiveRandomMembers = getRandomSubarray(data, 5);

    for (i = 0; i < 5; i++)
    {
        $('#' + i.toString()).text(fiveRandomMembers[i].name)
    }

    $('#chart-area').css('visibility','visible').hide().fadeIn(2000);
}


function getFirst() {
    var firstVariable = fiveRandomMembers[0].playlist.split("'), ");
    firstVariable = firstVariable.map(function (d) {
        var x = d.split(', ');
        x[1] = x[1].substr(1);

        return x
    });

    console.log(firstVariable);
    // JavaScript
    var rows = firstVariable.map(function (d) {
        return '<tr>' + d + '</tr>'
    });

    var clusterize = new Clusterize({
        rows: rows,
        scrollId: 'scrollArea',
        contentId: 'contentArea'
    });
}

















