import React from 'react'
import { AlertTriangle, Info, CheckCircle, XCircle } from 'lucide-react'

const icons = {
  info: Info,
  warning: AlertTriangle,
  error: XCircle,
  success: CheckCircle,
}

export function Callout({ children, type = 'info', title }) {
  const Icon = icons[type]
  
  const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    success: 'bg-green-50 border-green-200 text-green-800',
  }

  return (
    <div className={`border-l-4 p-4 my-4 rounded-r-lg ${styles[type]}`}>
      <div className="flex items-center space-x-2 mb-2">
        <Icon className="w-5 h-5" />
        {title && <span className="font-semibold">{title}</span>}
      </div>
      <div className="text-sm">{children}</div>
    </div>
  )
}

export function FAQ({ question, children }) {
  const [isOpen, setIsOpen] = React.useState(false)
  
  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-900">{question}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="px-4 pb-3 text-gray-700">
          {children}
        </div>
      )}
    </div>
  )
}

export function useMDXComponents(components) {
  return {
    ...components,
    Callout,
    FAQ,
  }
}
