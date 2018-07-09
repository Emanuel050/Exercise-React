import React from 'react';
import ReactDOM from 'react-dom'
import PhoneInput from './PhoneInput';
import PhoneText from './PhoneText';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
    }

    handleInput(phoneInput) {
        this.setState({ input: phoneInput });
    }

    render() {
        return (
            <div>
                <PhoneInput onPhoneTermChange={phoneInput => this.handleInput(phoneInput)} />
                <PhoneText phoneText={this.state.input} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));