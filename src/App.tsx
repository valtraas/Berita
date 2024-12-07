// import { Detail } from './Detail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Detail } from './Detail'
import { Home } from './Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/detail/:slug' element={<Detail />} />
            <Route index element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
