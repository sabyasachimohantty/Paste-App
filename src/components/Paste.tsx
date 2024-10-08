import CopyIcon from "../assets/copy-solid.svg"
import DeleteIcon from "../assets/trash-solid.svg"
import EditIcon from "../assets/pen-to-square-solid.svg"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { PasteContext, PasteContextI } from "../App"
import toast from "react-hot-toast"

const Paste = ({ title, id }: { title: string, id: string }) => {

  const navigate = useNavigate()
  const { pastes, setPastes } = useContext(PasteContext) as PasteContextI
  const paste = pastes.find((paste) => paste.id === id)

  return (
    <div className="bg-slate-700 px-4 py-3 rounded-md text-white font-semibold text-lg flex justify-between hover:bg-slate-600 mb-6">
      <div onClick={() => navigate(`/edit/${id}`)}>
        {title}
      </div>
      <div className="flex gap-2">
        <img onClick={(e) => {
          e.stopPropagation()
          navigator.clipboard.writeText(paste ? paste.content : "")
          toast.success("Copied")
        }} src={CopyIcon} alt="" className="size-7 hover:bg-slate-500 p-1 rounded-sm" />
        <img onClick={(e) => {
          e.stopPropagation()
          setPastes(pastes.filter((paste) => paste.id !== id))
        }} src={DeleteIcon} alt="" className="size-7 hover:bg-slate-500 p-1 rounded-sm" />
        <img onClick={(e) => {
          e.stopPropagation()
          navigate(`/edit/${id}`)
        }} src={EditIcon} alt="" className="size-7 hover:bg-slate-500 p-1 rounded-sm" />
      </div>
    </div>
  )
}

export default Paste