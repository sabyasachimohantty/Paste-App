import Button from './Button'
import CreateSpace from './CreateSpace'
import SearchBox from './SearchBox'
import Paste from './Paste'
import { useContext, useState } from 'react'
import { PasteContext, PasteContextI } from '../App'
import toast from 'react-hot-toast'

const Home = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const {pastes, setPastes} = useContext(PasteContext) as PasteContextI

  const handleCreate = () => {
    const id = Date.now().toString()
    const paste = {
      id: id,
      title: title,
      content: content
    }
    console.log(pastes)
    setPastes([...pastes, paste])
    toast.success("Paste created successfully")
    setTitle("")
    setContent("")
  }

  const handleClear = () => {
    setContent("")
  }

  return (
    <div className="bg-black min-h-screen">
      <div className="bg-purple-700 h-16 flex justify-center items-center text-white font-bold text-xl">
        PASTE
      </div>
      <div className="w-1/2 mx-auto px-10">
        <div className="flex justify-between py-4">
          <Button handleClick={handleCreate}>
            Create Paste
          </Button>
          <Button handleClick={handleClear}>
            Clear all
          </Button>
        </div>
        <CreateSpace title={title} setTitle={setTitle} content={content} setContent={setContent}/>
        <SearchBox />
        {pastes.map((paste) => <Paste key={paste.id} id={paste.id} title={paste.title}/>)}

        
        <div className="h-6"></div>
      </div>
    </div>
  )
}

export default Home