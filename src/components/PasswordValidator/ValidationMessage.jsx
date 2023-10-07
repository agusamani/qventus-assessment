import ValidIcon from 'src/assets/icons/ValidIcon';
import InvalidIcon from 'src/assets/icons/InvalidIcon';
import styles from './styles.module.css';
import classnames from 'classnames';

const ValidationMessage = ({ valid, message, classes }) => {
  return (
    <div
      className={classnames(
        styles.validationMessageContainer,
        classes?.validationMessageContainer
      )}
    >
      {valid ? <ValidIcon /> : <InvalidIcon />}
      <p
        className={classnames(
          styles.validationMessage,
          classes?.validationMessage
        )}
      >
        {message}
      </p>
    </div>
  );
};

export default ValidationMessage;
