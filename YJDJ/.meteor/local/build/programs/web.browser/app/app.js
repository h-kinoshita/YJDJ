var require = meteorInstall({"client":{"html":{"template.main.js":function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// client/html/template.main.js                                                       //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
                                                                                      // 1
Template.body.addContent((function() {                                                // 2
  var view = this;                                                                    // 3
  return HTML.Raw('<div id="render-target"></div>');                                  // 4
}));                                                                                  // 5
Meteor.startup(Template.body.renderToDocument);                                       // 6
                                                                                      // 7
////////////////////////////////////////////////////////////////////////////////////////

}},"javascript":{"main.jsx":["react","meteor/meteor","react-dom","../../imports/ui/App.jsx",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// client/javascript/main.jsx                                                         //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var React;module.import('react',{"default":function(v){React=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var render;module.import('react-dom',{"render":function(v){render=v}});var App;module.import('../../imports/ui/App.jsx',{"default":function(v){App=v}});
                                                                                      // 2
                                                                                      // 3
                                                                                      //
                                                                                      // 5
                                                                                      //
Meteor.startup(function () {                                                          // 7
    render(React.createElement(App, null), document.getElementById('render-target'));
});                                                                                   // 9
////////////////////////////////////////////////////////////////////////////////////////

}]}},"imports":{"ui":{"App.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","./Task.jsx",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// imports/ui/App.jsx                                                                 //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});var Task;module.import('./Task.jsx',{"default":function(v){Task=v}});
                                                                                      //
                                                                                      //
                                                                                      // 1
                                                                                      //
                                                                                      // 3
                                                                                      //
//App component - represents the whole app                                            //
                                                                                      //
var App = function (_Component) {                                                     //
    _inherits(App, _Component);                                                       //
                                                                                      //
    function App() {                                                                  //
        _classCallCheck(this, App);                                                   //
                                                                                      //
        return _possibleConstructorReturn(this, _Component.apply(this, arguments));   //
    }                                                                                 //
                                                                                      //
    App.prototype.getTasks = function () {                                            //
        function getTasks() {                                                         //
            return [{ _id: 1, text: 'This is task 1' }, { _id: 2, text: 'This is task 2' }, { _id: 3, text: 'This is task 3' }];
        }                                                                             // 13
                                                                                      //
        return getTasks;                                                              //
    }();                                                                              //
                                                                                      //
    App.prototype.renderTasks = function () {                                         //
        function renderTasks() {                                                      //
            return this.getTasks().map(function (task) {                              // 16
                return React.createElement(Task, { key: task._id, task: task });      // 16
            });                                                                       // 16
        }                                                                             // 19
                                                                                      //
        return renderTasks;                                                           //
    }();                                                                              //
                                                                                      //
    App.prototype.render = function () {                                              //
        function render() {                                                           //
            return React.createElement(                                               // 22
                'div',                                                                // 23
                { className: 'container' },                                           // 23
                React.createElement(                                                  // 24
                    'header',                                                         // 24
                    null,                                                             // 24
                    React.createElement(                                              // 25
                        'h1',                                                         // 25
                        null,                                                         // 25
                        'Todo List'                                                   // 25
                    )                                                                 // 25
                ),                                                                    // 24
                React.createElement(                                                  // 28
                    'ul',                                                             // 28
                    null,                                                             // 28
                    this.renderTasks()                                                // 29
                )                                                                     // 28
            );                                                                        // 23
        }                                                                             // 33
                                                                                      //
        return render;                                                                //
    }();                                                                              //
                                                                                      //
    return App;                                                                       //
}(Component);                                                                         //
                                                                                      //
module.export("default",exports.default=(App));                                       //
////////////////////////////////////////////////////////////////////////////////////////

}],"Task.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// imports/ui/Task.jsx                                                                //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});
                                                                                      //
                                                                                      //
                                                                                      // 1
                                                                                      //
//Task component = represents a single todo item                                      //
                                                                                      //
var Task = function (_Component) {                                                    //
    _inherits(Task, _Component);                                                      //
                                                                                      //
    function Task() {                                                                 //
        _classCallCheck(this, Task);                                                  //
                                                                                      //
        return _possibleConstructorReturn(this, _Component.apply(this, arguments));   //
    }                                                                                 //
                                                                                      //
    Task.prototype.render = function () {                                             //
        function render() {                                                           //
            return React.createElement(                                               // 7
                'li',                                                                 // 8
                { key: this.props.task._id },                                         // 8
                this.props.task.text                                                  // 8
            );                                                                        // 8
        }                                                                             // 10
                                                                                      //
        return render;                                                                //
    }();                                                                              //
                                                                                      //
    return Task;                                                                      //
}(Component);                                                                         //
                                                                                      //
module.export("default",exports.default=(Task));                                      //
                                                                                      //
                                                                                      //
Task.propTypes = {                                                                    // 14
    task: PropTypes.object.isRequired                                                 // 15
};                                                                                    // 14
////////////////////////////////////////////////////////////////////////////////////////

}]}}},{"extensions":[".js",".json",".html",".jsx",".css"]});
require("./client/html/template.main.js");
require("./client/javascript/main.jsx");