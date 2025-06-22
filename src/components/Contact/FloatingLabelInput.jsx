import React, { useState } from "react";
import './FloatingLabelInput.css';

const FloatingLabelInput = ({ 
  id,
  name, 
  type = "text", 
  label, 
  required = true,
  rows = null,
  value,
  onChange 
}) => {
  const [focused, setFocused] = useState(false);
  const isActive = focused || (value && value.length > 0);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const InputComponent = type === 'textarea' ? 'textarea' : 'input';

  const inputProps = {
    id,
    name,
    type: type === 'textarea' ? undefined : type,
    required,
    rows: type === 'textarea' ? rows : undefined,
    value,
    onChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    className: 'floating-input'
  };

  return (
    <div className="floating-label-group">
      <InputComponent {...inputProps} />
      <label 
        htmlFor={id} 
        className={`floating-label ${isActive ? 'active' : ''}`}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
