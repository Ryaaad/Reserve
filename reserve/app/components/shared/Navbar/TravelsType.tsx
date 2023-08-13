import Image from "next/image"
interface props{
    Name:string,
    desc:string,
    img:any
}
const Type:React.FC<props> = ({Name,desc,img}) => {
    return (
        <div className="w-80 rounded-lg flex items-center gap-4 p-2 bg-[#f3f4f6] ">
            <div className="rounded-md p-2 bg-[#eef2ff]  ">
             <Image alt="Type Icone" src={img} />
            </div>
            <div className="text-sm">
                <h1 className="text-[#111827] font-semibold"> {Name} </h1>
                <p className="text-[#6b7280] font-semibold text-xs" > {desc} </p>
            </div>
        </div>
      );
}
 
export default Type;