## Error handling utilities for Express.js

This package provides a set of utilities to handle errors in an Express.js application. It includes middleware for handling errors, a custom error class, and a utility function to create errors.

### Installation

```bash
npm install @error-handler/express
```

### Usage

#### Custom Error Class APIError

```javascript
import express from 'express';

import { APIError, catchAsync, errorHandler } from '@error-handler/express';

const app = express();

app.get('/', catchAsync(async (req, res) => {
  throw new APIError.BadRequest('This throws a 400 status code error with the message written here');
}));
// response
// {
//   "error": "This throws a 400 status code error with the message written here",
//   "success": false,
//   "data": {}
// }

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```
