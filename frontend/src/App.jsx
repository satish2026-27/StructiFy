import {Route, Routes} from 'react-router'
import Content from './pages/Content'
import Form from './pages/Form'
import {Toaster} from 'react-hot-toast'
const App = () => {
  return (
    <>
    <div>
      <Routes>
        <Route path = "/" element = {<Content/>}/>
        <Route path = "/form" element = {<Form />} />
      </Routes>
    </div>
    <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#000",
            color: "#fff",
            borderRadius: "1rem",
            border: "1px solid rgba(255,255,255,0.2)",
          },
          success: {
            style: { border: "1px solid #22c55e" }, // green border
          },
          error: {
            style: { border: "1px solid #ef4444" }, // red border
          },
        }}
      />
      </>
  )
}

export default App
