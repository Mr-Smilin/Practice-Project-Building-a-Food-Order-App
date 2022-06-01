import React from 'react';

const Input = React.forwardRef(({ input, label, className = '' }, ref) => {
  return (
    <div className={className}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} id={input.id} {...input} />
    </div>
  );
});

export default Input;