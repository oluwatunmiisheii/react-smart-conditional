# React Conditional Render

A flexible and reusable React component for conditional rendering. small size < 1kb

## Features

- Conditional rendering of content based on boolean conditions
- Support for multiple conditions with `If` components
- Fallback rendering with `Else` component
- Option to render single or multiple true conditions
- Polymorphic component API for flexible element rendering

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Installation

```bash
pnpm install react-smart-conditional
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

This example showcases the same component using the `react-smart-conditional` library. The `Show` component and its child components (`If`, and `Else`) provide a more declarative and readable approach to conditional rendering, especially for complex scenarios.

```jsx
import React from 'react';
import Show from 'react-smart-conditional';

const DataDisplay = ({ isLoading, error, data }) => {
  return (
    <Show as="section">
      <Show.If condition={isLoading}>Loading...</Show.If>
      <Show.If condition={error}>Error: {error.message}</Show.If>
      <Show.If condition={data}>
        <h1>Data Loaded:</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Show.If>
      <Show.Else>
        <p>No data available.</p>
      </Show.Else>
    </Show>
  );
};

export default DataDisplay;
```

### Rendering Multiple True Conditions

To render all true conditions, use the `multiple` prop:

```jsx
<Show multiple>
  <Show.If condition={condition1}>Content for condition 1</Show.If>
  <Show.If condition={condition2}>Content for condition 2</Show.If>
  <Show.Else>Fallback content</Show.Else>
</Show>
```

This will render both `condition1` and `condition2` if they are true.

## API

1. **`Show`** - Main container for conditional rendering

   - Props:
     - `multiple`: boolean (default: false) - When true, renders all true conditions. When false, renders only the first true condition.
     - `as?: string | React.ComponentType` - Wrapper element/component (optional, default: React.Fragment)
     - `children: React.ReactNode` - Should contain `If`, `ElseIf`, and `Else` components.

2. **`Show.If`** - Renders children when condition is true

   - Props:
     - `as?: string | React.ComponentType` - Wrapper element/component (optional, default: div)
     - `condition: boolean` - Condition to evaluate (required)
     - `children: React.ReactNode` - Content to render if true

3. **`Show.Else`** - Renders when all previous conditions were false
   - Props:
     - `as?: string | React.ComponentType` - Wrapper element/component (optional, default: div)
     - `children: React.ReactNode` - Content to render

## Polymorphic API

The `Show`, `Show.If`, and `Show.Else` components support polymorphic rendering:

```jsx
<Show as="section" className="container" data-testid="show-container">
  <Show.If
    condition={true}
    as="p"
    className="content active"
    onClick={() => console.log('Clicked')}
  >
    Paragraph content
  </Show.If>
  <Show.If
    condition={false}
    as="div"
    className="content inactive"
    style={{ display: 'none' }}
  >
    Hidden content
  </Show.If>
  <Show.Else as="span" className="fallback" aria-label="Fallback content">
    Span content
  </Show.Else>
</Show>
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

If you find this project helpful, please consider giving it a star on GitHub! ⭐️

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Made with ❤️ Wilson Adenuga - [@Adenugawilson](https://x.com/Adenugawilson) - oluwatunmiseadenuga@gmail.com

Project Link: [https://github.com/oluwatunmiisheii/react-smart-render](https://github.com/oluwatunmiisheii/react-smart-render)
