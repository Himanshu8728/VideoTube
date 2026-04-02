import React from 'react';
import './ui.css';

const Input = React.forwardRef(({ label, error, className = '', ...props }, ref) => {
  return (
    <div className={`input-group ${className}`}>
      {label && <label>{label}</label>}
      <input ref={ref} className="input-field" {...props} />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
});
export default Input;
