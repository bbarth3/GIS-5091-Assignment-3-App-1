require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
       
        const webmap = new WebMap({
          portalItem: {
            // autocasts as new PortalItem()
            id: "b493011e1cff4704a9db2fe8933ae1b4"
          }
        });

    
        const view = new MapView({
          map: webmap,
          container: "viewDiv",
          zoom: 10,
          center: [-90.1994, 38.6270]
        });
      });
