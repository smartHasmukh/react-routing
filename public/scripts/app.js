'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Bind method examples
var obj = {
    name: 'Hasmukh',
    age: 27,
    getName: function getName() {
        return this.name + ' ' + this.age;
    }
};
//const getName = obj.getName.bind(obj);
//console.log(getName());

var ComponentDemo = function (_React$Component) {
    _inherits(ComponentDemo, _React$Component);

    function ComponentDemo(props) {
        _classCallCheck(this, ComponentDemo);

        var _this = _possibleConstructorReturn(this, (ComponentDemo.__proto__ || Object.getPrototypeOf(ComponentDemo)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAppOptionMethod = _this.handleAppOptionMethod.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            options: ['Thing one', 'Thing two', 'Thing four']
        };
        return _this;
    }

    _createClass(ComponentDemo, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);

                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                // Do nothing at all
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(props, state) {
            if (state.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            // this.setState(() => {
            //     return {
            //         options:[]
            //     }
            // })
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState, prevProps) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });

            // this.setState((prevState,prevProps)=>({
            //     options: prevState.options.filter((option)=> optionToRemove !== option)
            // }));
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            console.log(option);
        }
    }, {
        key: 'handleAppOptionMethod',
        value: function handleAppOptionMethod(option) {
            if (!option) {
                return 'Enter valid value to item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'this option alredy exists';
            }

            // this.setState((prevState)=> {
            //     return {
            //         options: prevState.options.concat([option])
            //     }
            // });

            this.setState(function (prevState) {
                return { options: prevState.options.concat([option]) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'This is a React Demo';
            var subTitle = 'This is a sub title';
            //const options = ['Thing one','Thing two', 'Thing four'];
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subTitle: subTitle }),
                React.createElement(Action, { handlePick: this.handlePick, hasOptions: this.state.options.length > 0 }),
                React.createElement(Options, { handleDeleteOption: this.handleDeleteOption, options: this.state.options, handleDeleteOptions: this.handleDeleteOptions }),
                React.createElement(AddOption, { handleAppOption: this.handleAppOptionMethod })
            );
        }
    }]);

    return ComponentDemo;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h2',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'h3',
                    null,
                    this.props.subTitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { type: 'button', onClick: this.props.handlePick, disabled: !this.props.hasOptions },
                    'What should i do?'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options(props) {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));
        //this.onRemoveAll = this.onRemoveAll.bind(this);
    }
    // onRemoveAll(){
    //     console.log(this.props.options);
    // }


    _createClass(Options, [{
        key: 'render',
        value: function render() {
            var _this5 = this;

            return React.createElement(
                'div',
                { style: { marginTop: '10px' } },
                React.createElement(
                    'button',
                    { type: 'button', onClick: this.props.handleDeleteOptions },
                    'Remove All'
                ),
                this.props.options.length === 0 && React.createElement(
                    'p',
                    null,
                    'Please add on options to get started.'
                ),
                React.createElement(
                    'ul',
                    null,
                    this.props.options.map(function (option) {
                        return React.createElement(Option, {
                            handleDeleteOption: _this5.props.handleDeleteOption,
                            key: option,
                            option: option });
                    })
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option(props) {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));
        //this.onRemoveAll = this.onRemoveAll.bind(this);
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            var _this7 = this;

            return React.createElement(
                'div',
                { style: { marginTop: '10px' } },
                React.createElement(
                    'li',
                    null,
                    this.props.option + " ",
                    React.createElement(
                        'button',
                        {
                            type: 'button',
                            onClick: function onClick() {
                                _this7.props.handleDeleteOption(_this7.props.option);
                            }
                        },
                        'Remove'
                    )
                )
            );
        }
    }]);

    return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
    _inherits(AddOption, _React$Component6);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this8 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this8.handleAppOption = _this8.handleAppOption.bind(_this8);
        _this8.state = {
            error: undefined
        };
        return _this8;
    }

    _createClass(AddOption, [{
        key: 'handleAppOption',
        value: function handleAppOption(e) {
            e.preventDefault();

            var option = e.target.inputValue.value.trim();
            var error = this.props.handleAppOption(option);

            this.setState(function () {
                return { error: error };
            });
            e.target.inputValue.value = "";
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { style: { marginTop: '10px' } },
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAppOption },
                    React.createElement('input', { type: 'text', name: 'inputValue', placeholder: 'Enter value' }),
                    React.createElement(
                        'button',
                        null,
                        'ADD'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

// const StateLessFunc = (props) =>{
//     return (
//         <div>
//             <p>Name: {props.userDetails.name}</p>
//             <p>Age: {props.userDetails.age}</p>
//         </div>
//     );
// };

// let body ={
//     name:'Hasmukh',age:27
// }

ReactDOM.render(React.createElement(ComponentDemo, null), document.getElementById('app'));
