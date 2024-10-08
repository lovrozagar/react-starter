import '@/style/globals.css'

import { App } from '@/app'

import { StrictMode } from 'react'
import type { Container } from 'react-dom'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root') as Container).render(
	<StrictMode>
		<App />
	</StrictMode>,
)
