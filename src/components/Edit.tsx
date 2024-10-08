import { useNavigate, useParams } from 'react-router-dom'
import Button from './Button'
import CreateSpace from './CreateSpace'
import { useContext, useState } from 'react'
import { PasteContext, PasteContextI } from '../App'
import toast from 'react-hot-toast'


const Edit = () => {

  const navigate = useNavigate()
  const {id} = useParams()
  const {pastes, setPastes} = useContext(PasteContext) as PasteContextI
  
  const paste = pastes.find((paste) => paste.id === id)
  
  const [title, setTitle] = useState(paste? paste.title : "")
  const [content, setContent] = useState(paste? paste.content : "")

  const handleEdit = () => {
    const index = pastes.findIndex((paste) => paste.id === id)
    pastes[index].title = title
    pastes[index].content = content
    toast.success("Paste edited successfully")
  }

  const handleDelete = () => {
    setPastes(pastes.filter((paste) => paste.id !== id))
    toast.success("Paste deleted successfully")
    navigate("/")
  }

  return (
    <div className="bg-black min-h-screen">
      <div className="bg-purple-700 h-16 flex justify-center items-center text-white font-bold text-xl">
        PASTE
      </div>
      <div className="w-1/2 mx-auto px-10">
        <div className="flex justify-between py-4">
          <Button handleClick={handleEdit}>
            Save Edit
          </Button>
          <Button handleClick={handleDelete}>
            Delete
          </Button>
        </div>
        {paste && <CreateSpace title={title} setTitle={setTitle} content={content} setContent={setContent}/>}
        {!paste && <p>This paste does not exist</p>}
      </div>
    </div>
  )
}

export default Edit