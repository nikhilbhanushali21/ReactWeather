var React = require('react');

// var About = React.createClass({
//     render: function(){
//         return (
//             <h3>About component</h3>
//         );
//     }
// });

var About = (props) => {
    return (
        <div>
        <h3> About Page </h3>
        <p> Description for weather app made with reactJS</p>
        </div>
    )
};

module.exports = About;
