import { FallbackProps } from 'react-error-boundary'

export function ErrorFallback({ error }: FallbackProps) {
  return (
    <div>
      <h2>エラーが発生しました。</h2>
      <pre>{error.message}</pre>
    </div>
  )
}
