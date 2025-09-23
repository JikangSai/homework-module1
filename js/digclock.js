function currentTime() {
      var d = new Date();
      var hr = d.getHours();
      var min = d.getMinutes();
      var sec = d.getSeconds();
      var ampm;
      var utchr = d.getUTCHours();
      var timeDiff = hr - utchr;
      var adjTimeDiff = timeDiff < 0 ? -timeDiff : timeDiff;
      if (adjTimeDiff > 12) adjTimeDiff = 24 - adjTimeDiff;
      var timeZone = "";
      if (adjTimeDiff === 8) timeZone = "PT";
      else if (adjTimeDiff === 7) timeZone = "MT";
      else if (adjTimeDiff === 6) timeZone = "CT";
      else if (adjTimeDiff === 5) timeZone = "ET";
      if (sec < 10) sec = "0" + sec;
      if (min < 10) min = "0" + min;
      if (hr == 12) ampm = "PM";
      else if (hr > 12) { hr -= 12; ampm = "PM"; }
      else ampm = "AM";
      var time = hr + ":" + min + ":" + sec + " " + ampm + (timeZone ? " " + timeZone : "");
      document.getElementById("clock").innerText = time;
      setTimeout(currentTime, 1000);
    }
    currentTime();

    var partners = [];
    var fileNames = [];
    var imageList = [];
    var image;
    var openList = "<li class='partner'>";
    var closeList = "</li>";

    var realFiles = [
      "partner-bustour.png",
      "partner-cabinrental.png",
      "partner-campingadv.png",
      "partner-collegetours.png",
      "partner-rentalbike.png",
      "partner-tourgroup.png"
    ];

    for (var i = 0; i < realFiles.length; i++) {
      partners.push("<img src='images/partners/" + realFiles[i] + "'>");
      image = openList + partners[i] + closeList;
      imageList.push(image);
    }

    document.getElementById("partners").innerHTML = imageList.join("");