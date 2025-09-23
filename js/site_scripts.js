var photos = [];
    var fileNames = [];
    var imageList = [];
    var image;
    var openList = "<li class='partner'>";
    var closeList = "</li>";

    var partnerFiles = [
      "partner-bustour",
      "partner-cabinrental",
      "partner-campingadv",
      "partner-collegetours",
      "partner-rentalbike",
      "partner-tourgroup"
    ];

    for (var i = 0; i < partnerFiles.length; i++) {
      photos.push("<img src='images/partners/" + partnerFiles[i] + ".png'>");
      image = openList + photos[i] + closeList;
      imageList.push(image);
    }

    document.getElementById("partners").innerHTML = imageList.join("");