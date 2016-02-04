/**
 * Created by ptmbr012 on 2016/02/03.
 */


var ingredients = [
    {"id":1, "text":"ham"},
    {"id":2, "text":"cheese"},
    {"id":3, "text":"potato"}
] //this is just a data source

ingredients.map(function(item){
    console.log(item.id + " " + item.text)
})