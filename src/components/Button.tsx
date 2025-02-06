export default function Button(
    {title, className}:{title:string, className?:React.ReactNode}
){
    return (
        <button className={`text-white font-medium text-xl min-w-fit px-5 w-[178px]  transition-all duration-300 h-[56px] rounded-full bg-brand hover:bg-opacity-90 flex items-center justify-center`}>
            {title}
        </button>
    )
}