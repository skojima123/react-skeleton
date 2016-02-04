var React = require('react');
var ListItem = require('./ListItem.jsx'); //This is how to import non NPM module.  u've got to write "module.exports = ListItem;" in ListItem.jsx

var ingredients = [
        {"id":1, "text":"ham"},
        {"id":2, "text":"cheese"},
        {"id":3, "text":"potato"}
    ] //this is just a data source




var List = React.createClass({
    render: function(){
        var listItems = ingredients.map(function(item){
            console.log(item.text);
            return <ListItem key={item.id} ingredient={item.text}/>
        });

        return (<ul>{listItems}</ul>)
    }
})

module.exports = List;