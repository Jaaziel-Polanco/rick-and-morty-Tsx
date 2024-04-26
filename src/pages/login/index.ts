import { lazy } from 'react'

export { HomePage } from '../home/HomePage'

export const LoginPage = lazy(() => import('./LoginPage'))
export const CharacterPage = lazy(() => import('../character/CharacterPage'))