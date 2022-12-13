window.onscroll = function() {addSticky()};

    function addSticky() {
        var nav = document.getElementById("navSection");
        var sticky = nav.offsetTop;

        if (window.pageYOffset > sticky) {
            nav.classList.add("nav--sticky")
            nav.classList.remove("nav--transparent");
        }
        else {
            nav.classList.remove("nav--sticky");
            nav.classList.add("nav--transparent");
        }
    }