import { useState, createContext } from "react"
import Edit from "./components/Edit"
import Home from "./components/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

export interface PasteI {
  id: string,
  title: string,
  content: string
}

export interface PasteContextI {
  pastes: PasteI[],
  setPastes: React.Dispatch<React.SetStateAction<PasteI[]>>
}

export const PasteContext = createContext<PasteContextI | null>(null)

function App() {

  const [pastes, setPastes] = useState<PasteI[]>([])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/edit/:id",
      element: <Edit/>
    }
  ])

  return (
    <PasteContext.Provider value={{
      pastes,
      setPastes
    }}>
    <RouterProvider router={router} />
    </PasteContext.Provider>
  )
}

export default App
