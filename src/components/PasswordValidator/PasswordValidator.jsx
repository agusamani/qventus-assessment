import { useState } from 'react';
import styles from './styles.module.css';
import ValidationMessage from './ValidationMessage';
import classnames from 'classnames';
import { supportedRequirements } from 'src/config';

const initializeValidationStates = (options) => {
  return options
    .filter((option) => supportedRequirements[option])
    .reduce((acc, option) => {
      acc[option] = false;
      return acc;
    }, {});
};

const PasswordValidator = ({
  requirements,
  value,
  onChange,
  onValidation,
  classes = {}
}) => {
  const [validations, setValidations] = useState(
    initializeValidationStates(requirements)
  );

  const validatePassword = (password) => {
    const newValidations = { ...validations };

    requirements.forEach((requirement) => {
      newValidations[requirement] =
        supportedRequirements[requirement].validate(password);
    });
    return newValidations;
  };

  const handlePasswordInputChange = ({ target: { value } }) => {
    onChange(value);
    const updatedValidations = validatePassword(value);
    setValidations(updatedValidations);
    const isValid = !Object.values(updatedValidations).every((v) => v);
    onValidation(isValid);
  };

  return (
    <div className={classnames(styles.container, classes?.container)}>
      <h1 className={`${classnames(classes?.title)}`}>Password Component</h1>
      <div
        className={classnames(styles.inputContainer, classes?.inputContainer)}
      >
        <input
          className={classnames(styles.input, classes?.input)}
          // type={INPUT_TYPES.PASSWORD}
          value={value}
          onChange={handlePasswordInputChange}
        />
        <div
          className={classnames(
            styles.validationsContainer,
            classes?.validationsContainer
          )}
        >
          {requirements.map((requirement) => (
            <ValidationMessage
              key={requirement}
              valid={validations[requirement]}
              message={supportedRequirements[requirement].errorMessage}
              classes={classes}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PasswordValidator;
