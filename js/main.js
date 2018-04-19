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

function myFunction() {
    // Declare variables 
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
  }