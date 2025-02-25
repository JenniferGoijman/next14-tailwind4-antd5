'use client';

import { Button } from 'antd';
import { BaseButtonProps, ButtonProps } from 'antd/es/button/button';

type ButtonTypes = 'primary' | 'secondary' | 'additional' | 'alert';

interface Props {
  children: string | JSX.Element;
  disabled?: boolean;
  htmlType?: ButtonProps['htmlType'];
  leftIcon?: JSX.Element;
  loading?: boolean;
  onClick?: () => void;
  type: ButtonTypes;
}

export default function CustomButton({
  children,
  disabled = false,
  htmlType,
  leftIcon,
  loading,
  onClick,
  type,
}: Props) {
  const antDesignTypes: Record<ButtonTypes, BaseButtonProps['type']> = {
    primary: 'primary',
    secondary: 'default',
    additional: 'link',
    alert: 'primary',
  };

  const className = `button-generic-styles ${type}`;

  return (
    <Button
      type={antDesignTypes[type]}
      className={className}
      disabled={disabled}
      onClick={onClick}
      htmlType={htmlType}
      loading={loading}
    >
      {leftIcon}
      {children}
    </Button>
  );
}
