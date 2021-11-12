var density = 500,
    speed = 0.3,
    bodyWidth = $(window).width(),
    start = {
        yMin: 0,
        yMax: 0,
        xMin: 0,
        xMax: bodyWidth,
        scaleMin: 0.2,
        scaleMax: 1,
        opacityMin: 0.6,
        opacityMax: 0.8,
    },
    mid = {
        xMin: 0,
        xMax: bodyWidth,
        scaleMin: 0.2,
        scaleMax: 1,
        opacityMin: 0.6,
        opacityMax: 1
    },
    end = {
        yMin: 1200,
        yMax: 1200,
        xMin: 0,
        xMax: bodyWidth,
        scaleMin: 0.2,
        scaleMax: 1,
        opacityMin: 0.5,
        opacityMax: 1
    },
    colors = ["#003ed9", "#00e6d7", "#fb8100", "#ef0000", "#e849e0", "#c7e105", "#1bd51b", "#2044e0"];

function range(map, prop) {
    var min = map[prop + "Min"],
        max = map[prop + "Max"];
    return min + (max - min) * Math.random();
}

function spawn(particle) {
    var wholeDuration = (10 / speed) * (0.7 + Math.random() * 0.4),
        delay = wholeDuration * Math.random(),
        partialDuration = (wholeDuration + 1) * (0.3 + Math.random() * 0.4);

    //set the starting values
    TweenLite.set(particle, {
        y: range(start, "y"),
        x: range(start, "x"),
        scale: range(start, "scale"),
        opacity: range(start, "opacity"),
        visibility: "hidden",
        color: colors[Math.floor(Math.random() * colors.length)]
    });

    //the y tween should be continuous and smooth the whole duration
    TweenLite.to(particle, wholeDuration, {
        delay: delay,
        y: range(end, "y"),
        ease: Linear.easeNone
    });

    //now tween the x independently so that it looks more randomized (rather than linking it with scale/opacity changes too)
    TweenLite.to(particle, partialDuration, {
        delay: delay,
        x: range(mid, "x"),
        ease: Power1.easeOut
    });
    TweenLite.to(particle, wholeDuration - partialDuration, {
        delay: partialDuration + delay,
        x: range(end, "x"),
        ease: Power1.easeIn
    });

    //now create some random scale and opacity changes
    partialDuration = wholeDuration * (0.6 + Math.random() * 0.3);
    TweenLite.to(particle, partialDuration, {
        delay: delay,
        scale: range(mid, "scale"),
        autoAlpha: range(mid, "opacity"),
        ease: Linear.easeNone
    });
    TweenLite.to(particle, wholeDuration - partialDuration, {
        delay: partialDuration + delay,
        scale: range(end, "scale"),
        autoAlpha: range(end, "opacity"),
        ease: Linear.easeNone,
        onComplete: spawn,
        onCompleteParams: [particle]
    });
}

$(window).ready(function() {
    var body = $(".bubbles-body"),
        i, particle;
    for (i = 0; i < density; i++) {
        spawn($("<div />", {
            id: "particle part" + i
        }).addClass("particle").appendTo(body));
    }
});
