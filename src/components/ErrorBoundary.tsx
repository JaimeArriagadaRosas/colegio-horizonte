import { Component } from 'react'
import type { ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-[60vh] flex items-center justify-center p-6">
            <div className="max-w-lg text-center">
              <h1 className="text-3xl font-heading font-bold text-primary-900 mb-4">
                Algo salió mal
              </h1>
              <p className="text-gray-600 mb-6">
                Ocurrió un error inesperado. Intenta recargar la página.
              </p>
              <button
                onClick={() => this.setState({ hasError: false })}
                className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors"
              >
                Reintentar
              </button>
            </div>
          </div>
        )
      )
    }
    return this.props.children
  }
}
