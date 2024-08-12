$(document).ready(function(){

    var waypoint = new Waypoint({
        element: document.getElementById('service'),
        handler: function() {
          notify('Basic waypoint triggered')
        }
      })
    
    //mititup
    var mixer = mixitup(".row");
})