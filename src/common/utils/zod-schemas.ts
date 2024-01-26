import { z } from 'zod'

export const nameSchema = z
  .string()
  .regex(/^[\u0400-\u04FF-]+$/u)
  .trim()
  .max(25)
