require(["jquery", "preventscrolling"], function ($, preventscrolling) {
    $(function () {

        var $simulation = $(".simulation");
        preventscrolling($simulation);

    });
});
