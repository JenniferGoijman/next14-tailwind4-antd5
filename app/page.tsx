'use client';

import { App, Button, Checkbox } from "antd";

export default function Home() {
  const { message } = App.useApp();

  return (
    <div className="App">
      <div className="flex items-center gap-2">
        <Checkbox checked={true} />
        <Checkbox checked={false} />
      </div>

      <Button className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-md" onClick={() => message.success('Primary')}>
        Custom Styled Button
      </Button>
    </div>
  );
}
