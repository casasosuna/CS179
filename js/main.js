// Prefix for keys to reduce the risk of collisions

// Saving name of group
var prefix = "localStorageDemo-note-";
var keyValueHolder = {};
var counter_key = "localStorageDemo-counter";
$("#save").click(function () { 
    var i = parseInt(localStorage.getItem(counter_key)) || 1;
    localStorage.setItem(counter_key, i + 1)
    var key = prefix + i;
    var value = $("#value").val();
    console.log("The (key, value) for this is (" + key + ", " + value + ")");
    //console.log($("#value").val());
    localStorage.setItem(key, value);

    var getProperty = function (propertyName, propertyValue) {
        console.log("in");
        console.log(typeof propertyName);
        keyValueHolder[propertyName] = propertyValue;
    };
    getProperty(key, value); 

    

    //RewriteFromStorage();
});

console.log(keyValueHolder);
//localStorage.clear();


//$('select').on('change', function() {
  //alert( this.value );
//})

// Saving group description
$("#hey").click(function() {
    console.log($("#message").val());
    var i = parseInt(localStorage.getItem(counter_key)) || 1;
    localStorage.setItem(counter_key, i + 1)
    var key = prefix + i;
    var value = $("#message").val();
    console.log("The (key, value) for this is (" + key + ", " + value + ")");
    localStorage.setItem(key, value);
});

//console.log($("#check").text()); 


// Saving dropdown menu
$('select[name="dropdown"]').change(function() {
    $(this).val();
    var i = parseInt(localStorage.getItem(counter_key)) || 1;
    localStorage.setItem(counter_key, i + 1)
    var key = prefix + i;
    var value = $(this).val();
    //console.log($(this).val());
    console.log("The (key, value) for this is (" + key + ", " + value + ")");
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
                    console.log(value);     
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