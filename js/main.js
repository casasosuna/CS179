// Prefix for keys to reduce the risk of collisions

var prefix = "localStorageDemo-note-";
var counter_key = "localStorageDemo-counter";
$("#save").click(function () { 
    var i = parseInt(localStorage.getItem(counter_key)) || 1;
    localStorage.setItem(counter_key, i + 1)
    var key = prefix + i;
    var value = $("#value").val();
    console.log($("#value").val());
    localStorage.setItem(key, value);     
    
    RewriteFromStorage();
});

function RewriteFromStorage() {

            $("#data").empty();
            for(var i = 0; i < localStorage.length; i++)    
            {
                // Getting the ith key
                var key = localStorage.key(i);             
                // Test to see if key starts with our prefix
                if(key.indexOf(prefix) == 0) {
                    var value = localStorage.getItem(key);  
                    var shortkey = key.replace(prefix, "");
                    $("#data").append(
                        $("<div class=" + "kvp" + shortkey + ">").html(value)
                            .css('background', 'black')
                            .css('color', 'red')
                            .css('width', '100px')
                            .css('height', '100px'));
                    $("#data").append(
                        $("<input type='button' value='Delete'>")
                            .attr('key', key)
                            .click(function() {     
                                localStorage.removeItem($(this).attr('key'));
                                RewriteFromStorage();
                            }))    
                }
            }
}

RewriteFromStorage();


var prefix_1 = "localStorageDemo-note-";
var counter_key_1 = "localStorageDemo-counter";
$("#save_1").click(function () { 
    var i_1 = parseInt(localStorage.getItem(counter_key_1)) || 1;
    localStorage.setItem(counter_key_1, i_1 + 1)
    var key_1 = prefix_1 + i_1;
    var value_1 = $("#value_1").attr('value');
    localStorage.setItem(key_1, value_1);     
    
    RewriteFromStorage_1();
});

function RewriteFromStorage_1() {

            $("#data_1").empty();
            for(var i = 0; i < localStorage.length; i++)    
            {
                // Getting the ith key
                var key_1 = localStorage.key(i);
                console.log(key_1);             
                // Test to see if key starts with our prefix
                //console.log(prefix_1);
                if(key_1.indexOf(prefix_1) == 0) {
                    var value_1 = localStorage.getItem(key_1);
                    //console.log(value_1);  
                    var shortkey_1 = key_1.replace(prefix_1, "");
                    console.log(shortkey_1);  
                    $("#data_1").append(
                        $("<div class=" + "kvp" + shortkey_1 + ">").html(value_1)
                            .css('background', 'black')
                            .css('color', 'red')
                            .css('width', '100px')
                            .css('height', '100px'));
                    $("#data_1").append(
                        $("<input type='button' value='Delete'>")
                            .attr('key', key_1)
                            .click(function() {     
                                localStorage.removeItem($(this).attr('key'));
                                RewriteFromStorage_1();
                            }))     
                }
            }  
}

RewriteFromStorage_1();