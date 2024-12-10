import { Request, Response, NextFunction } from 'express';

// Extend the Request interface to include a token property
declare global {
  namespace Express {
    interface Request {
      token?: string;
    }
  }
}

export default function useUserMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
): any {
  const authHeader = request.headers['authorization']; // Express headers are case-insensitive

  // Check if the Authorization header exists
  if (typeof authHeader !== 'string') {
    return response.status(401).json({ error: 'Missing or invalid Authorization header.' });
  }

  // Split the Authorization header into parts
  const parts = authHeader.split(' ');

  // Validate the format: must have exactly two parts and start with "Bearer"
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    response
      .status(401)
      .json({ error: 'Invalid Authorization header format. Expected "Bearer <token>".' });
  }

  const token = parts[1];

  if (!token) {
    response.status(401).json({ error: 'Authorization token is missing.' });
  }

  // Attach token to the request object for downstream middleware
  request.token = token;

  // Pass control to the next middleware
  next();
}
