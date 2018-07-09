import React from 'react';

class PhoneInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = { phone: '' };
    }

    formatToPhone(input) {
        input = input.replace(/\D/g, '');
        let phone = '';

        if (input.length === 0 || input.length > 10) {
            phone = input;
        } else {
            const zip = input.substring(0, 3);
            const middle = input.substring(3, 6);
            const last = input.substring(6, 10);

            phone += `(${zip})`;

            if (middle) {
                phone += ` ${middle}`;
            }

            if (last) {
                phone += `-${last}`;
            }
        }

        this.setState({ phone }, () => {
            if (phone.length <= 5) {
                this.refs.input.selectionStart = this.refs.input.selectionEnd = phone.length - 1;
            }
        });

        this.props.onPhoneTermChange(phone);
    }

    render() {
        return (
            <div>
                <input
                    size="22"
                    ref="input"
                    placeholder="Start typing a phone number"
                    value={this.state.phone}
                    onChange={event => this.formatToPhone(event.target.value)} />
            </div>
        )
    }
}

export default PhoneInput;