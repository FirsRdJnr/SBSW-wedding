jQuery(function( $ ){

    // toggle
    $(".toggle_container").hide();
    $("h4.trigger").click(function(){
        $(this).toggleClass("active").next().slideToggle("slow");
        return false;
    });

    // email form
    function checkForm() {
        document.form.Email.value = " " + document.form.Email.value;
            if (document.form.Name.value == "") {
                alert('The Name field is empty!'); return false; }
            if (document.form.Company.value == "") {
                alert('The Company field is empty!'); return false; }
            mail = document.form.Email.value;
            if ((mail.indexOf('@') == -1) || (mail.indexOf('.') == -1)) {
                alert('The E-mail address is invalid!'); return false; }
            if (document.form.Query.value.length > 250) {
                alert('The Comments / Query is too long!'); return false; }
        window.setTimeout("history.back(-1)",2000);
        return true;
    }

    // carousel
    $('#myCarousel').carousel({
        interval: false
    })


    // Scroll to local
    $.localScroll.hash({
        target: '#mainWrap',
        duration:1000
    });

    $.localScroll({
        target: '#mainWrap',
        duration:1000,
        hash:true,
    });

    // Scroll elements
    $('#top').ScrollTo();


});