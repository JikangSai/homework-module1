$(document).ready(function () {
  const $table = $("#activities");

  $table.find("tbody td").filter(function () {
    return $(this).text().trim().toLowerCase() === "not available";
  }).addClass("na");

  const $selectables = $table.find("tbody td:not(:first-child)").not(".na");
  $selectables.addClass("selectable");

  $table.on("click", "td.selectable", function () {
    $(this).toggleClass("selected");
  });
});
