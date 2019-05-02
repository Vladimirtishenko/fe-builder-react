import React from 'react';
import uniqid from 'uniqid';
import {
	string,
	bool,
	array,
	oneOfType
} from 'prop-types';
import { ValidatorComponent } from '../../../libraries/validation/index.js';

class Input extends ValidatorComponent {
	static propTypes = {
		name: string.isRequired,
		type: string,
		required: bool,
		label: string,
		placeholder: string,

        value: string,

		classNameInput: string,
		classNameLabel: string,
        classNameWrap: string,

		errorMessages: oneOfType([array]),
		validators: oneOfType([array]),
		addToValidateForm: bool
	}

	static defaultProps = {
		classNameInput: '',
		classNameLabel: '',
		classNameWrap: '',

		type: 'text',

		label: '',

		required: false,

		value: '',

		placeholder: '',
		autocomplete: '',

		errorMessages: [],
		validators: [],
		validatorListener: () => {},

		addToValidateForm: true

	};

	constructor(props) {
		super(props);

		this.state = {
			...props,
			...{ id: uniqid(`${props.name}-`) }
		};
		this.__refs = {};
	}

	componentDidMount() {
		this.state.addToValidateForm && this.attach(this);
	}

    componentWillUnmount() {
		this.state.addToValidateForm && this.detach(this);
	}

	componentDidUpdate(prevProps) {
		const comparingProps = _.isEqual(prevProps, this.props);

		if (!comparingProps) {
            this.setState(prevState => ({
				...prevState,
				...this.props
			}));
		}
	}


	errorText() {
		const { isValid } = this.state;

		if (isValid) {
			return null;
		}

		return (
			<div>
				{this.getErrorMessage && this.getErrorMessage()}
			</div>
		);
	}

	onChange(event) {
		const { target: { value = '' } } = event,
              { onChange } = this.state;

		this.makeValid();

		if (onChange) {
			onChange(value);
		}

		this.setState({
			value
		});
	}

	getContent() {
		const { name } = this.props;
		return this.__refs[`input_${name}`].value;
	}

	setContent(value) {
		this.setState({ value });
	}

	render() {
		const {
			required,
			classNameLabel,
			classNameInput,
			classNameWrap,
			name,
			label,
			id,
			type,
			value,
			placeholder,
			autocomplete
		} = this.state,
			requiredField = required ? { required } : {},
			holder = placeholder ? { placeholder } : {},
			complete = autocomplete ? { autoComplete: autocomplete } : {};

		return (
			<React.Fragment>
				<div className={classNameWrap}>
					<label htmlFor={id} className={classNameLabel}>{label}</label>
					<input
						id={id}
						ref={ref => this.__refs[`input_${name}`] = ref}
						className={classNameInput}
						name={name}
						type={type}
						onChange={::this.onChange}
						value={value}
						{...requiredField}
						{...holder}
						{...complete}
					/>
				</div>
				{::this.errorText()}
			</React.Fragment>
		);
	}
}

export default Input;
