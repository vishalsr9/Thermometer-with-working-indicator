$(document).ready(function () {
    bindThmScheme1();
    //next button
    $(".nbtn1").click(function () {
        bindThermometer($(".swiper-slide-active").data("slidno"));
    });
    //previous button
    $(".pbtn1").click(function () {
        bindThermometer($(".swiper-slide-active").data("slidno"));
    });

    function bindThermometer(slideno) {
        if (slideno == "1") {
            bindThmScheme1();
        } else if (slideno == "2") {
            bindThmScheme2();
        } else if (slideno == "3") {
            bindThmScheme3();
        } else if (slideno == "4") {
            bindThmScheme4();
        } else if (slideno == "5") {
            bindThmScheme5();
        } else if (slideno == "6") {
            bindThmScheme6();
        } else if (slideno == "7") {
            bindThmScheme7();
        }
    };

    function BindFruits(fruitlist) {
        var ful1 = $('ul.thermo-fruits');
        ful1.empty();
        $.each(fruitlist, function (i) {
            var li = $('<li/>')
                .text(fruitlist[i])
                .appendTo(ful1);
        });
    };

    function BindVegs(veglist) {
        var vul1 = $('ul.thermo-veg');
        vul1.empty();
        $.each(veglist, function (i) {
            var li = $('<li/>')
                .text(veglist[i])
                .appendTo(vul1);
        });
    };

    function bindThmScheme1() {
        //0-2
        var fruits = ["Raspberries", "Blueberries", "Blackberries"];
        var veg = [""];
        $(".red-line").css("width", "12.90322580645161%");
        $(".red-line").css("margin-left", "0%");
        BindFruits(fruits);
        //$('ul.thermo-veg').empty();
    };

    function bindThmScheme2() {
        //0-5
        var fruits = ["Apple", "Apricots", "Cherries", "Coconuts", "Dates", "Figs", "Fresh-cuts", "Grapes", "Kiwifruit", "Loquat", "Nectarines", "Peaches", "Pears", "Persimmons", "Plums", "Strawberries"];
        var veg = ["Artichokes", "Asparagus", "Bok Choy", "Broccoli", "Brussels sprouts", "Cabbage", "Carrots", "Cauliflower", "Celery", "Chicory", "Chinese Cabbage", "Collard Greens", "Corn (sweet)", "Endive", "Fennel", "Fresh-cut products", "Garlic", "Ginseng", "Greens (leafy)", "Horseradish", "Herbs", "Kohlrabi", "Leek", "Lettuce", "Mushrooms", "Parsley", "Parsnips", "Pea", "Radish", "Salad Greens", "Spinach", "Sprouts", "Turnip", "Watercress"];
        $(".red-line").css("width", "32.25806451612903%");
        $(".red-line").css("margin-left", "0%");
        BindFruits(fruits);
        BindVegs(veg);
    };

    function bindThmScheme3() {
        //2-5
        var fruits = ["Ripe Avocados", "Cranberry", "Litchis", "Truffles"];
        var veg = [""];
        $(".red-line").css("width", "19.35483870967742%");
        $(".red-line").css("margin-left", "12.90322580645161%");
        BindFruits(fruits);
        $('ul.thermo-veg').empty();
    };

    function bindThmScheme4() {
        //5-7
        var fruits = ["Papayas"];
        var veg = ["Netted Melons"];
        $(".red-line").css("width", "12.90322580645161%");
        $(".red-line").css("margin-left", "32.25806451612903%");
        BindFruits(fruits);
        BindVegs(veg);
    };

    function bindThmScheme5() {
        //7-10
        var fruits = ["Avocados", "Dragon fruit", "Lemons", "Lime", "Mandarin", "Mangoes", "Oranges", "Passion fruit", "Pomegranates"];
        var veg = ["Beans (green)", "Cactus Leaves", "Cassava", "Chayotes", "Cucumber", " Eggplant-aubergine", "Okra", "Peppers (bell/chilli)", "Squash (yellow)", "Tomatillo (Physalis)", "Zucchinis"];
        $(".red-line").css("width", "19.35483870967742%");
        $(".red-line").css("margin-left", "45.16129032258064%");
        BindFruits(fruits);
        BindVegs(veg);
    };

    function bindThmScheme6() {
        //7-12
        var fruits = ["Pineapples"];
        var veg = ["Garlic", "Onions "];
        $(".red-line").css("width", "32.25806451612903%");
        $(".red-line").css("margin-left", "45.16129032258064%");
        BindFruits(fruits);
        BindVegs(veg);

    };

    function bindThmScheme7() {
        //12-15
        var fruits = ["Bananas", "Carambola", "Cherimoya", "Durian", "Grapefruit", "Mangosteen", "Papayas", "Wax apples"];
        var veg = ["Ginger", "Melon", "Onions", "Potatoes", "Pumpkin", "Sweet potato", "Tomatoes", "Watermelon", "Winter squash"];
        $(".red-line").css("width", "19.35483870967742%");
        $(".red-line").css("margin-left", "77.41935483870967%");
        BindFruits(fruits);
        BindVegs(veg);
    };
});