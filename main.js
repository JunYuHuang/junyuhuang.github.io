/*
* Pashan Irani's function. Will goto the top of an element, with a smooth scroll animation
*/
function goto(el, offset, callback) {
    if (el == null || el == undefined) return;
    if (offset == null || offset == undefined) offset = 0;

    $('html,body').animate({
        scrollTop: $(el).offset().top - offset
    },
        800);

    if (callback != null && callback != undefined)
        callback();
}