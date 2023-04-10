import React from 'react';
import classNames from 'classnames';

export const Button = (props) => {
  const {
    children,
    variant = 'primary',
    onClick,
    disable = false,
    type = 'button',
    height,
    width,
    className = '',
    ...otherProps
  } = props;

  const rootClassName = classNames('bg-[#FFE600] rounded-full', className, {
    'opacity-50': disable
  });

  return (
    <button
      onClick={onClick}
      disabled={disable}
      className={rootClassName}
      type={type}
      style={{ height, width }}
      {...otherProps}>
      <div className="flex justify-center items-center">{children}</div>
    </button>
  );
};
