'use client';

import CustomButton from "@/components/custom-button/custom-button";
import { App, Checkbox } from "antd";

export default function Home() {
  const { message } = App.useApp();

  return (
    <div className="App">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <CustomButton type="primary" onClick={() => message.success('Primary')}>Primary</CustomButton>
          <CustomButton type="primary" disabled>Primary</CustomButton>
        </div>
        <div className="flex items-center gap-2">
          <CustomButton type="secondary">Secondary</CustomButton>
          <CustomButton type="secondary" disabled>Secondary</CustomButton>
        </div>
        <div className="flex items-center gap-2">
          <CustomButton type="additional">Additional</CustomButton>
          <CustomButton type="additional" disabled>Additional</CustomButton>
        </div>
        <div className="flex items-center gap-2">
          <CustomButton type="alert">Alert</CustomButton>
          <CustomButton type="alert" disabled>Alert</CustomButton>
        </div>
        <div className="flex items-center gap-2">
            <Checkbox checked={true} />
            <Checkbox checked={true} disabled />
            <Checkbox checked={false} />
            <Checkbox checked={false} disabled />
        </div>
      </div>
    </div>
  );
}
