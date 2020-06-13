var tour = new Tour({
   name:"tour1",

    debug: true,
    basePath: location.pathname.slice(0, location.pathname.lastIndexOf('/')),
    steps: [
       {
        path:'/home.html',
      element: "#scan",
      title: "step 0",
      content: "this QRscanner"
    }, 
    {
        path:'/home.html',
      element: "#devices",
      title: "step 1",
      content: "press devices button"
    },
    {
      path: '/devices.html',
      waitForTemplate:'/devices.html',  
      element: "#6940",
      title: "step 2",
      content: "press this device"
    },
    {
        path: '/deviceinfo.html',
        waitForTemplate:'/deviceinfo.html',  
        element: "#Home",
        title: "step 3",
        content: " end tour"
      }
  ],
  template: "<div class='popover tour'><div class='arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><nav class='popover-navigation'></nav></div>"
  
  
  
});
tour.init();
$('#start-tour').click(function() {
  tour2.end();
    tour.restart();
    
  });
  
  var tour2 = new Tour({
    name: "tour2",
    debug: true,
    basePath: location.pathname.slice(0, location.pathname.lastIndexOf('/')),
    steps: [
       {
        path:'/home.html',
      element: "#AR",
      title: "step a",
      content: "augmented reality"
    }, 
    {
        path:'/ARmenu.html',
      element: "#ARproj",
      title: "step b",
      content: "lets go to projection"
    },
    {
      path: '/ARPlace.html',
      waitForTemplate:'/ARPlace.html',  
      element: "#Place",
      title: "step c",
      content: "place the device"
    },
    {
        path: '/ARPlace.html',
        waitForTemplate:'/ARPlace.html',  
        element: "#Home",
        title: "step d",
        content: " end tour"
      }
  ],
  template: "<div class='popover tour'><div class='arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><nav class='popover-navigation'></nav></div>"
  
  
  
});
tour2.init();
$('#start-tour2').click(function() {
  tour.end();
    tour2.restart();
    
    
  });
  