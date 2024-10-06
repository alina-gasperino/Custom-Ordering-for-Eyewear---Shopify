jQuery(document).ready(function($) {
    $(".add_eyewear").click(function() {
        var validate = true;
        $(".line-item-property__field").each(function() {
            if($(this).find("input").val().length == 0) {
                var option = $(this).attr("option");
                validate = validate && false;
                alert("Missing " + option)
            }
            else {
                validate = validate && true
            }
        })
        console.log(validate);
        if(validate == true) {
            $(".f-product-single__block--buy_buttons .f-product-form__buttons button").click()
        }
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