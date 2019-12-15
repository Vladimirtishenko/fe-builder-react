import React from 'react';
import {
    oneOfType,
    string,
    bool,
    object,
    func
   } from 'prop-types';

class Input extends React.Component {
    static propTypes = {
        classes: string,
        placeholder: string,
        disabled: bool,
        autocomplete: bool,
        wrapClass: string,
        input: oneOfType([object]),
        onBlur: func,
        onChange: func,
        value: string,
        meta: oneOfType([object]),
        type: string
    }

    static defaultProps = {
        placeholder: '',
        classes: '',
        disabled: false,
        autocomplete: false,
        wrapClass: '',
        input: {},
        value: '',
        onBlur: () => {},
        onChange: () => {},
        meta: {},
        type: 'text'
    }

    constructor(props) {
        super(props);
        const { input: { value: inputValue }, value } = props;
        this.state = {
            value: inputValue || value
        };
    }

    componentDidUpdate(prevProps) {
        const { input: { value: prevInputValue }, value: prevValue } = prevProps,
              { input: { value: nextInputValue }, value: nextValue } = this.props;

        if (prevInputValue !== nextInputValue) {
            this.setState(prevState => ({
                ...prevState,
                value: nextInputValue
            }));
            return false;
        }

        if (prevValue !== nextValue) {
            this.setState(prevState => ({
                ...prevState,
                value: nextValue
            }));
        }

        return false;
    }

    onChange = (event) => {
        const { input: { onChange: onInputReduxChange }, onChange } = this.props,
              { target: { value } } = event;

          this.setState(prevState => ({
              ...prevState,
              value
          }));

          if (onInputReduxChange) {
              onInputReduxChange(value);
          }

          if (onChange) {
              onChange(value);
          }
    }

    onBlur = () => {
        const { input: { onBlur: onInputReduxBlur }, onBlur } = this.props,
              { target: { value } } = event;

         if (onInputReduxBlur) {
             onInputReduxBlur(value);
         }

         if (onBlur) {
             onBlur(value);
         }
    }

    onClear = () => {
        const { input: { onChange: onInputReduxChange }, onChange } = this.props;

        this.setState(prevState => ({
            ...prevState,
            value: ''
        }));

        if (onInputReduxChange) {
            onInputReduxChange();
        }

        if (onChange) {
            onChange();
        }
    }

    render() {
        const {
            placeholder: place,
            input: { name },
            autocomplete,
            disabled,
            classes,
            wrapClass,
            meta: { touched, error, warning },
            type
        } = this.props,
            holder = place ? { placeholder: place } : {},
            complete = autocomplete ? { autoComplete: 'on' } : { autoComplete: 'off' },
        { value } = this.state;

        return (
            <React.Fragment>
                <div className={`relative--core ${wrapClass}`}>
                    <div>
                        <input
							type={type}
							className={classes}
							name={name}
							onChange={this.onChange}
							onBlur={this.onBlur}
							value={value}
							disabled={disabled}
							{...holder}
							{...complete}
                        />
                    </div>
                    {touched &&
                        ((error && <span className="">{error}</span>) ||
                          (warning && <span className="">{warning}</span>))}
                </div>
            </React.Fragment>
        );
    }
}

export default Input;
