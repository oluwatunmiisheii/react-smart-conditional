# React Conditional Render

A flexible and reusable React component for conditional rendering.

## Features

- Conditional rendering with `Show.If` and `Show.Else`
- Customizable wrapper element using the `as` prop
- Simple and declarative syntax

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Installation

```bash
npm install react-conditional-render
```

## Usage

### Traditional React Conditional Rendering

The following example demonstrates the traditional way of conditional rendering in React using ternary operators and logical AND operators. While functional, this approach can become difficult to read and maintain as the number of conditions increases.

```jsx
import React from 'react';

const DataDisplay = ({ isLoading, error, data }) => {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : data ? (
        <div>
          <h1>Data Loaded:</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default DataDisplay;
```

### Using React Conditional Render

This example showcases the same component using the `react-conditional-render` library. The `Show` component and its child components (`If`, `ElseIf`, and `Else`) provide a more declarative and readable approach to conditional rendering, especially for complex scenarios.

```jsx
import React from 'react';
import Show from 'react-conditional-render';

const DataDisplay = ({ isLoading, error, data }) => {
  return (
    <Show as="div">
      <Show.If condition={isLoading}>
        <p>Loading...</p>
      </Show.If>
      <Show.ElseIf condition={error}>
        <p>Error: {error.message}</p>
      </Show.ElseIf>
      <Show.ElseIf condition={data}>
        <div>
          <h1>Data Loaded:</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </Show.ElseIf>
      <Show.Else>
        <p>No data available.</p>
      </Show.Else>
    </Show>
  );
};

export default DataDisplay;
```

## API Reference

### Components

1. **`Show`** - Main container for conditional rendering

   - Props:
     - `as?: string | React.ComponentType` - Wrapper element/component (optional, default: React.Fragment)
     - `children: React.ReactNode` - Should contain `If`, `ElseIf`, and `Else` components

2. **`Show.If`** - Renders children when condition is true

   - Props:
     - `as?: string | React.ComponentType` - Wrapper element/component (optional, default: React.Fragment)
     - `condition: boolean` - Condition to evaluate (required)
     - `children: React.ReactNode` - Content to render if true

3. **`Show.ElseIf`** - Renders when its condition is true and previous were false

   - Props:
     - `as?: string | React.ComponentType` - Wrapper element/component (optional, default: React.Fragment)
     - `condition: boolean` - Condition to evaluate (required)
     - `children: React.ReactNode` - Content to render if true

4. **`Show.Else`** - Renders when all previous conditions were false
   - Props:
     - `as?: string | React.ComponentType` - Wrapper element/component (optional, default: React.Fragment)
     - `children: React.ReactNode` - Content to render

### Usage Example

```jsx
<Show as="div">
  <Show.If as="section" condition={isLoading}>

```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - [@your_twitter](https://twitter.com/your_twitter) - email@example.com

Project Link: [https://github.com/yourusername/react-conditional-render](https://github.com/yourusername/react-conditional-render)
