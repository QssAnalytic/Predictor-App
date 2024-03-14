import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import FilterContextProvider from './context/FilterContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <FilterContextProvider>
    <App />
  </FilterContextProvider>
)
