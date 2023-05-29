$("#slider").roundSlider({
  width: 20,
  radius: "130",
  value: 70,
  min: "50",
  sliderType: "min-range",
  circleShape: "pie",
  startAngle: 315,
  max: "90",
  lineCap: "round",
  showTooltip: true,
  handleSize: "+25",

  drag: function (args) {
    //
  },
  change: function (args) {
    //
  },
});

$("#sliderUp").click(function () {
  updateTemp("#slider", 1)
});

$("#sliderDown").click(function () {
    updateTemp("#slider", -1)
});


function updateTemp(slider, value) {
    var currentValue = $(slider).roundSlider("option", "value");
    var updatedValue = currentValue + value;
    $(slider).roundSlider("option", "value", updatedValue);
}
