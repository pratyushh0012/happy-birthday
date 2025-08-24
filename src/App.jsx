// Import the main page components
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* BrowserRouter enables navigation between pages */}
      <BrowserRouter>
        {/* Routes defines all the different pages in your app */}
        <Routes>
          {/* This is the home page - shows when someone visits your website */}
          <Route index element={<Home />}/>
          
          {/* This shows when someone visits a page that doesn't exist */}
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
