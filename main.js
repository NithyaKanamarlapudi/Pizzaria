menu_list_array = ["Cheeze Pizza", "Hawaiian Pizza", "Pepperoni Pizza", "Veggie Pizza", "Chicken Pizza"]

function getmenu(){
    var htmldata;
    htmldata= "<ol class= <'menu_list'>"
    menu_list_array.sort();
    for(var i=0; i<menu_list_array.length;i++){
        htmldata=htmldata+ '<li>' + menu_list_array[i] + '</li>'
    }
    htmldata=htmldata+'<ol>'
    document.getElementById("display_menu").innerHTML = htmldata;
}