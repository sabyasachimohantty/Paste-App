

const Button = ({children, handleClick} : {children: string, handleClick: ()=>void}) => {
  return (
    <button onClick={handleClick} className="text-white font-medium bg-purple-600 px-4 py-2 rounded-md">
        {children}
    </button>
  )
}

export default Button