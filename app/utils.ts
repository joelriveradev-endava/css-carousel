import {clsx, ClassValue} from 'clsx'
import { twMerge } from 'tw-merge'

// Inspired by shadcn/ui
export const cn = (...inputs: Array<ClassValue>) => {
  return twMerge(clsx(inputs))
}