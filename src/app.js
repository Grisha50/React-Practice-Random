
// console.log('App.js is running');

const appRoot = document.getElementById('app');

const app = {
    title: 'Grishas App',
    subtitle: "Hungry and need a drink",
    options: ['food', 'drinks', 'cars']
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderNewOptionList();
    }
};

const emptyArray = () => {
    app.options = [];
    renderNewOptionList();
}

const numbers = [33,44,55,66];

const getOptions = () => {
    return app.options.map( op => <li key={op}>{op}</li>)
} 

const onMakeChoice = () => {
    const random = Math.floor(Math.random() * app.options.length);
    const option = app.options[random]
    alert(option);
}

const renderNewOptionList = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeChoice}>What should I do?</button>
            <button onClick={emptyArray}>Remove List</button>
            <ol>{getOptions()}</ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderNewOptionList();

