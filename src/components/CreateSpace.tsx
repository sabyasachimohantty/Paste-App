interface props {
  title: string,
  setTitle: React.Dispatch<React.SetStateAction<string>>,
  content: string,
  setContent: React.Dispatch<React.SetStateAction<string>>
}

const CreateSpace = ({title, setTitle, content, setContent} : props) => {

  

  return (
    <div>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full font-mono font-semibold text-xl px-4 py-3 rounded-t-md focus:outline-none border-b-black"/>
        <textarea placeholder="Write your code" value={content} onChange={(e) => setContent(e.target.value)} className="w-full font-mono rounded-b-md bg-slate-700 px-4 py-4 text-white focus:outline-none resize-none min-h-80">
        </textarea>
    </div>
  )
}

export default CreateSpace