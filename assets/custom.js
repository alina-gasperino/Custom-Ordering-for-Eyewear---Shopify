jQuery(document).ready(function($) {
    $(".add_eyewear").click(function() {
        $(".line-item-property__field").each(function() {
            if($(this).find("input").val().length == 0) {
                alert("choose all options")
            }
        })
    })

    $(".frames_container button").each(function() {
        $(this).click(function() {
            $(".frames_container button").each(function() {
                $(this).removeClass("selected")
            })
            $(this).addClass("selected");
            var frame = $(this).text()
            $(".frame").text(frame)
            $("#frame").val(frame)
        })
    })

    $(".fabrics_container button").each(function() {
        $(this).click(function() {
            $(".fabrics_container button").each(function() {
                $(this).removeClass("selected")
            })
            $(this).addClass("selected");
            var fabric = $(this).text()
            $(".fabric").text(fabric)
            $("#fabric").val(fabric)
        })
    })


})