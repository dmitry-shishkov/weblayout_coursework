$(document).ready(function(){
  $("#art-realizm-1").selectmenu({
    width: 130,
    position: { my : "left top+17" },
  });
  $("#art-realizm-2").selectmenu({
    width: 180,
    position: { my : "left top+17" },
  });
  $("#art-realizm-3").selectmenu({
    width: 220,
    position: { my : "left top+17" },
  });
  $("#art-realizm-4").selectmenu({
    width: 130,
    position: { my : "left top+17" },
  });
  $("#art-realizm-5").selectmenu({
    width: 130,
    position: { my : "left top+17" },
  });
  $("#art-realizm-1").selectmenu("menuWidget").addClass("overflow");
  $("#art-realizm-2").selectmenu("menuWidget").addClass("overflow");
  $("#art-realizm-3").selectmenu("menuWidget").addClass("overflow");
  $("#art-realizm-4").selectmenu("menuWidget").addClass("overflow");
  $("#art-realizm-5").selectmenu("menuWidget").addClass("overflow");
});

$(document).ready(function(){
  $('#gallery-select').styler({
    selectPlaceholder: 'Автор',
  });
});