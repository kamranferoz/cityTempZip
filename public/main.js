$(function () {
    var $h1 = $("h1");
    var $zip = $("input[name='zip']");
    $("form").on("submit", function (event) {
        event.preventDefault();
        var zipCode = $.trim($zip.val());
        $h1.text("Loading...");
        var request = $.ajax({
            url: "/" + zipCode,
            dataType: "json"
        });
        request.done(function (data) {
            var temperature = data.temperature;
            var humidity = data.humidity;
            var summary = data.summary;
            var icon = data.icon;
            $h1.html("It is " + temperature + "&#176;C in " + zipCode + ".<br> Humidity is " + humidity + ". <br> Day forecast: <br>" + summary + ".");
        });
        request.fail(function () {
            $h1.text("Error!");
        });
    });
});