

var data;
var fiveRandomMembers;
var current = null;
d3.csv("data/playlistExample.csv", function(d){
    data = d
});

$(document).ready(function() {
    $('body').css('visibility','visible').hide().fadeIn(1500);
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

    $('#chart-area').css('visibility','visible').hide().fadeIn(1500);
}


function getPlaylist(i) {

    var firstVariable = fiveRandomMembers[i].playlist.split("'), ");
    firstVariable = firstVariable.map(function (d) {
        var x = d.split(', ');
        x = [x[0].replace('(', ''), x[1].replace('(','')];
        x = [x[0].replace(')', ''), x[1].replace(')','')];
        x = [x[0].replace("'", ''), x[1].replace("'",'')];
        x = [x[0].replace("'", ''), x[1].replace("'",'')];
        x = [x[0].replace('"', ''), x[1].replace('"','')];
        x = [x[0].replace("[", ''), x[1].replace("]",'')];
        return x
    });

    console.log(firstVariable);
    // JavaScript
    var rows = firstVariable.map(function (d) {
        return '<tr><strong>' + d[0] + " by " +  d[1]  + '</strong></tr>'
    });





    var secondVariable = fiveRandomMembers[i].predictions.split("'), ");
    secondVariable = secondVariable.map(function (d) {
        var x = d.split(', ');
        x = [x[0].replace('(', ''), x[1].replace('(','')];
        x = [x[0].replace(')', ''), x[1].replace(')','')];
        x = [x[0].replace("'", ''), x[1].replace("'",'')];
        x = [x[0].replace("'", ''), x[1].replace("'",'')];
        x = [x[0].replace('"', ''), x[1].replace('"','')];
        x = [x[0].replace("[", ''), x[1].replace("]",'')];
        return x
    });

    if (current == null) {
        $('#refreshSection').css('visibility','visible').hide().fadeIn(1500);
        $('#scrollArea').css('visibility','visible').hide().fadeIn(1500);
        $('#scrollArea2').css('visibility','visible').hide().fadeIn(1500);
    }

    current = secondVariable;
    var newVariable = secondVariable.slice(0,5);

    console.log(secondVariable);
    // JavaScript
    var recommended = newVariable.map(function (d) {
        return '<tr><strong>' + d[0] + " by " +  d[1] + '</strong></tr>'
    });



    var clusterize = new Clusterize({
        rows: rows,
        scrollId: 'scrollArea',
        contentId: 'contentArea'
    });

    var clusterize2 = new Clusterize({
        rows: recommended,
        scrollId: 'scrollArea2',
        contentId: 'contentArea2'
    });
}


function refreshPlaylist() {
    var currentPlaylist = current;

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

    console.log(currentPlaylist);

    var newVariable = getRandomSubarray(currentPlaylist, 5);


    var recommended = newVariable.map(function (d) {
        return '<tr><strong>' + d[0] + " by " +  d[1] + '</strong></tr>'
    });


    var clusterize2 = new Clusterize({
        rows: recommended,
        scrollId: 'scrollArea2',
        contentId: 'contentArea2'
    });
    //for (i = 0; i < 5; i++)
    //{
    //    $('#' + i.toString()).text(fiveRandomMembers[i].name)
    //}

    //$('#chart-area').css('visibility','visible').hide().fadeIn(2000);

}















