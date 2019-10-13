function switchActive(target, event){
  var elements = document.getElementsByClassName("hidden");
  var length = elements.length;
  for (var i = 0; i < length; i++) {
    var element = elements[i];
    var linkId = target.href.split("#")[1];
    if (element.classList && linkId === element.id) {
      var isActive = element.classList.contains("active");
      if(isActive){
        element.classList.remove("active");
      }
      else {
        element.classList.add("active");
      }
    }
  }
  event.preventDefault();
}