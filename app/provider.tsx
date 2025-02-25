'use client';

import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
import { App as AntdApp } from 'antd';
import { ReactNode } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <StyleProvider layer>
      <ConfigProvider>
        <AntdApp>
          {children}
        </AntdApp>
      </ConfigProvider>
  </StyleProvider>
  )
}