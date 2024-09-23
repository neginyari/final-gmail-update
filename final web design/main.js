function openCity(evt, cityName) {
    var i, tabcontent, dropdownitem;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    dropdownitem = document.getElementsByClassName("dropdownitem");
    for (i = 0; i < dropdownitem.length; i++) {
      dropdownitem[i].className = dropdownitem[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen").click();
  