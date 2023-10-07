import { useState } from 'react';
import './App.css';
import PasswordValidator from './components/PasswordValidator';
import style from './styles.module.css';
import { INPUT_TYPES } from './config';

function App() {
  const [input, setInput] = useState({
    [INPUT_TYPES.PASSWORD]: ''
  });
  const [errors, setErrors] = useState({});

  const handlePasswordValidity = (isValid) => {
    setErrors((errors) => ({ ...errors, [INPUT_TYPES.PASSWORD]: !isValid }));
  };

  return (
    <>
      <PasswordValidator
        value={input.password}
        onChange={(value) => setInput({ password: value })}
        requirements={['specialChar', 'digit', 'uppercase']}
        onValidation={handlePasswordValidity}
        classes={{
          title: style.passwordTitle
        }}
      />
    </>
  );
}

export default App;
