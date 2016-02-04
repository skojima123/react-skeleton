var React = require('react');
var force = require('forcejs');
var promise = require('bluebird')

var ListItem = React.createClass({

    getInitialState: function(){
        return {
            client : force.init({
                    appId: '3MVG9ZL0ppGP5UrCLD1wSwQOeD08gEItydJTVv8Qerdn_9sTZYwlLD29zEwh3DGIyZr3K0UBmEBPnixXLMNWO',
                    proxyURL: 'http://localhost:3000'
                }),

            contacts: {}
        }
    },

    query: function(){
        return new promise(function(resolve, reject){
            client.query('select id, Name from contact', function(response){
                resolve(response.records);
            })
        })

    },

    searchHandler: function(){
        this.query().done(function(contacts){
            this.setState({
                contacts : contacts
            })
        }.bind(this));
    },

    render: function () {
        return (
            <li>
                <h4>{this.props.ingredient}</h4>
            </li>
        )
    }
})

module.exports = ListItem;