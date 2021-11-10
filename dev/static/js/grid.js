// init Isotope
var $grid = $('.grid').isotope({
    layoutMode: 'masonry',
    itemSelector: '.blog__item',
    fitWidth: true,

    masonry: {
        columnWidth: 335,
        gutter: 18,
    },

    getSortData: {
        date: function($elem) {
            return Date.parse($($elem).find('.blog__item-time').attr('data-time'));
        },
    },

    sortAscending: {
        date: false
    }
});

$grid.imagesLoaded().progress(function() {
    $grid.isotope('layout');
});

$('.item-filter').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
        filter: filterValue
    });
});

//bind sort button click
$('.item-sort').on('click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $grid.isotope({
        sortBy: sortByValue
    });
});
// change is-checked class on buttons
$('.filter').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.active').removeClass('active');
    $( this ).addClass('active');
  });
});
