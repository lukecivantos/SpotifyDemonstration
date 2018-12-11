

var data;

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

    var fiveRandomMembers = getRandomSubarray(data, 5);

    for (i = 0; i < 5; i++)
    {
        $('#' + i.toString()).text(fiveRandomMembers[i].name)
    }

    $('#chart-area').css('visibility','visible').hide().fadeIn(2000);
}


