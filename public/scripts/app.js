'use strict';

// console.log('App.js is running');

var appRoot = document.getElementById('app');

var app = {
    title: 'Grishas App',
    subtitle: "Hungry and need a drink",
    options: ['food', 'drinks', 'cars']
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderNewOptionList();
    }
};

var emptyArray = function emptyArray() {
    app.options = [];
    renderNewOptionList();
};

var numbers = [33, 44, 55, 66];

var getOptions = function getOptions() {
    return app.options.map(function (op) {
        return React.createElement(
            'li',
            { key: op },
            op
        );
    });
};

var onMakeChoice = function onMakeChoice() {
    var random = Math.floor(Math.random() * app.options.length);
    var option = app.options[random];
    alert(option);
};

var renderNewOptionList = function renderNewOptionList() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No Options'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeChoice },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: emptyArray },
            'Remove List'
        ),
        React.createElement(
            'ol',
            null,
            getOptions()
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderNewOptionList();
