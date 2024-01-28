import { AppProvider } from '@/app/providers/AppProvider'
import { createRoot } from 'react-dom/client'

import './styles/index.scss'

createRoot(document.getElementById('root') as HTMLElement).render(<AppProvider />)
