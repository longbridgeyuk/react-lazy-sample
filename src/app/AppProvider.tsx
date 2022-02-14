import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter } from 'react-router-dom'
import { ErrorFallback } from '@/features/misic'

export function AppProvider({ children }: { children: React.ReactElement }) {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BrowserRouter>{children}</BrowserRouter>
      </ErrorBoundary>
    </React.Suspense>
  )
}
