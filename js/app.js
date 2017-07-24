
var map;
function initmap(){
    map = new google.maps.Map(document.getElementById('map'),{
    center : {lat: 30.044420 , lng: 31.235712 },
    zoom : 13
    });
}

//// this function make search button ////
function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("my_search");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

}
//// End of this function ////

var CLIENT_ID = 'CFRLGW0NCTIV3TBZUA53TLGURJN5LVNX5BQ0KENBK0V2SYYQ';
var CLIENT_SECRET = 'BGOTZAC2RIYR5LT1J34ELRPBA2XGJO0C2DYDXYAVEFWLGL0Q' ;

var musical_places = [
    {
        name : 'Cairo Jazz Club',
        latlng : 
        {
            lat : 30.062237 ,
            lng : 31.212256
        },

    },
    
     {
        name : 'Naguib Mahfouz Cafe',
        latlng : 
        {
            lat : 30.048023 ,
            lng : 31.261643
        },

    },
    
    {
        name : 'Bab El Nil',
        latlng : 
        {
            lat : 30.071877 ,
            lng : 31.227714
        },

    },
    
      {
        name : 'Moon Deck',
        latlng : 
        {
            lat : 30.045860,
            lng : 31.228294
        },

    },
    
     {
        name : 'Jazz Mate',
        latlng : 
        {
            lat : 18.565010,
            lng : 73.916995
        },

    },
    
    {
        name : 'Al Saraya',
        latlng : 
        {
            lat : 30.050369,
            lng : 31.227998
        },

    },
];

    var marker = new google.maps.Marker({
        position: new google.maps.latlng (musical_places.latlng.lat, musical_places.latlng.lng),
        map: map,
        title: 'Cairo Jazz Club'    
    });


