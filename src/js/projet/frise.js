$(document).ready(function() {
    // Récupération de la position des éléments de la frise chronologique
    var timelineItems = $('.timeline-item');
    var timelineOffsets = [];

    timelineItems.each(function() {
        timelineOffsets.push($(this).offset().top);
    });

    // Ajout d'un événement de scroll
    $(window).scroll(function() {
        // Récupération de la position actuelle de la fenêtre
        var windowScrollTop = $(window).scrollTop();

        // Parcours des éléments de la frise chronologique pour trouver le premier élément en dessous de la fenêtre
        for (var i = 0; i < timelineOffsets.length; i++) {
            if (timelineOffsets[i] > windowScrollTop) {
                break;
            }
        }

        // Ajout d'une classe active sur l'élément correspondant
        $('.timeline-item').removeClass('active');
        $('.timeline-item').eq(i - 1).addClass('active');
    });
});
