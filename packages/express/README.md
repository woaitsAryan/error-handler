## Error handling utilities for Express.js

This package provides a set of utilities to handle errors in an Express.js application. It includes middleware for handling errors, a custom error class, and a utility function to create errors.

### Installation

```bash
npm install @error-handler/express
```

### Usage

#### Custom Error Class

```javascript
const { CustomError } = require('@error-handler/express');

try {
    throw new CustomError('This is a custom error', 400);
} catch (error) {
    console.error(error.message); // This is a custom error
    console.error(error.status); // 400
}
```