import { describe, it, expect } from 'vitest'

import { evenOrOdd } from '@/playground.js'

describe('basic math', () => {
  it('adds two numbers', () => {
    expect(1 + 1).toBe(2)
  })
})

describe('evenOrOdd', () => {
  describe('when a number is even', () => {
    it('indicates if a number is even', () => {
      expect(evenOrOdd(6)).toBe('even');
    });
  })

  describe('when a number is odd', () => {
    it('indicates if a number is odd', () => {
      expect(evenOrOdd(7)).toBe('odd');
    });
  });
  
})