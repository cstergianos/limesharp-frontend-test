/**
 * This jquery snippet will toggle the plus and minus icon and will show or not the additional text
 */
$( document ).ready(function() {
    $('.show-more i').on('click', function(e) {
        let $this = $(this),
            $hiddenText = $this.closest(".text-container").find('.text.hidden');

        if ($this.hasClass("fa-plus-circle")) {
            $hiddenText.toggleClass("visible");
            $this.removeClass("fa-plus-circle");
            $this.toggleClass("fa-minus-circle");
        } else if ($this.hasClass("fa-minus-circle")) {
            $hiddenText.removeClass("visible");
            $this.removeClass("fa-minus-circle");
            $this.toggleClass("fa-plus-circle");
        }
    });
});