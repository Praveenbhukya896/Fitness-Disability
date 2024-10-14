import ReactDOM, { type Root } from 'react-dom/client'
import invariant from 'tiny-invariant'

export const createSafeRoot = (elementId: string): Root => {
  const root = document.getElementById(elementId)
  invariant(root !== null, `Root Element ${elementId} does not exist`)

  return ReactDOM.createRoot(root)
}
