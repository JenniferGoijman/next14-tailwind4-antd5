# Next.js 14 + Tailwind CSS 4 + Ant Design 5

This project is a boilerplate for using Next.js v14, Tailwind CSS v4, and Ant Design v5 together. The setup includes custom styling overrides for Ant Design components using TailwindCSS.

## Features

- **Next.js 14** – Modern React framework for SSR, ISR, and App Router support.

- **Tailwind CSS 4** – Utility-first CSS framework for rapid UI development.

- **Ant Design 5** – A powerful component library with custom styles applied using TailwindCSS.

- **TypeScript** – Static type checking for better code quality.

- **ESLint** – Linting support with Next.js configuration.

- **PostCSS** – Used for TailwindCSS processing.


## Getting Started

### Prerequisites

Ensure you have **Node.js 18+** and npm installed.

### Installation

Clone the repository and install dependencies:

```
git clone <repo-url>
cd next14-tailwind4-antd5
npm install
```

### Running the Project

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## TailwindCSS + Ant Design Integration

This project applies Tailwind styles to override some default Ant Design components. Since Tailwind allows using `tailwind.config.js`, customization is done via global styles or directly in components.

### Customization Methods

1. **Enable** `important` **Globally**

To make Tailwind styles take priority, edit `tailwind.config.js`:

```
module.exports = {
  important: true,
};
```

2. **Define Styles in** `global.css`

Instead of adding `!` manually, define styles globally in `global.css`:

```
.ant-btn {
  @apply bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md;
}
```

This ensures that Ant Design buttons use Tailwind styles.

