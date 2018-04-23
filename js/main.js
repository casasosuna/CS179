// Prefix for keys to reduce the risk of collisions

// Saving name of group
var prefix = "localStorageDemo-note-";
var keyValueHolder = {};
var counter_key = "localStorageDemo-counter";
var arrayHolder = [];
$("#build").click(function () { 
    var i = parseInt(localStorage.getItem(counter_key)) || 1;
    localStorage.setItem(counter_key, i + 1)
    var key = prefix + i;
    var value = $("#value").val();
    var value1 = $("#message").val();
    var value2 = $("#w3_country1").val();
    console.log("The (key, value) for this is (" + key + ", " + value + ")");
    //console.log($("#value").val());
    localStorage.setItem(key, value);
    console.log(value);
    console.log(value1);
    console.log(value2);

    var getProperty = function (propertyName, propertyValue) {
        //console.log("in");
        //console.log(typeof propertyName);
        keyValueHolder[propertyName] = propertyValue;
    };
    getProperty(key, value);

    localStorage.setItem("groupName", value);
    localStorage.setItem("groupDescription", value1);
    localStorage.setItem("groupActivity", value2);
    //arrayHolder[0] = value;
    //arrayHolder[1] = value1;
    //arrayHolder[2] = value2;
    //console.log(arrayHolder); 
    //localStorage.setItem("arrayStorage", arrayHolder);

    

    //RewriteFromStorage();
});


//localStorage.clear();




//$('select').on('change', function() {
  //alert( this.value );
//})

// Saving group description
$("#build").click(function() {
    //console.log($("#message").val());
    var i = parseInt(localStorage.getItem(counter_key)) || 1;
    localStorage.setItem(counter_key, i + 1)
    var key = prefix + i;
    //var value = $("#message").val();
    //console.log("The (key, value) for this is (" + key + ", " + value + ")");
    localStorage.setItem(key, value);
});

//console.log($("#check").text()); 


// Saving dropdown menu
$("#build").click(function() {
    $(this).val();
    var i = parseInt(localStorage.getItem(counter_key)) || 1;
    localStorage.setItem(counter_key, i + 1)
    var key = prefix + i;
    //var value = $("#w3_country1").val();
    //console.log($(this).val());
    //console.log("The (key, value) for this is (" + key + ", " + value + ")");
    localStorage.setItem(key, value);
});

//$("#check").click(function() {
    //console.log($("#check").checked);
//});

console.log($('#check').prop('checked'));


function RewriteFromStorage() {

            $("#data").empty();
            for(var i = 0; i < localStorage.length; i++)    
            {
                // Getting the ith key
                var key = localStorage.key(i);
                //console.log(key);             
                // Test to see if key starts with our prefix
                if(key.indexOf(prefix) == 0) {
                    var value = localStorage.getItem(key);
                    //console.log(value);     
                    var shortkey = key.replace(prefix, "");
                    /*$("#data").append(
                        $("<div class=" + "kvp" + shortkey + ">").html(value)
                            .css('background', 'black')
                            .css('color', 'red')
                            .css('width', '100px')
                            .css('height', '100px')); */
                    /*$("#data").append(
                        $("<input type='button' value='Delete'>")
                            .attr('key', key)
                            .click(function() {     
                                localStorage.removeItem($(this).attr('key'));
                                RewriteFromStorage();
                            })) */    
                }
            }
}

RewriteFromStorage();


$(document).ready(function() {
  $('#fullpage').fullpage({
    //Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors:['firstPage', 'secondPage'],
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: ['firstSlide', 'secondSlide'],
    showActiveTooltip: false,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,
    bigSectionsDestination: null,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: true,
    verticalCentered: true,
    sectionsColor : ['#ccc', '#fff'],
    paddingTop: '3em',
    paddingBottom: '10px',
    fixedElements: '#header, .footer',
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    lazyLoading: true,

    //events
    onLeave: function(index, nextIndex, direction){},
    afterLoad: function(anchorLink, index){},
    afterRender: function(){},
    afterResize: function(){},
    afterResponsive: function(isResponsive){},
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
  });
});