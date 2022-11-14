import { Link } from "react-router-dom"
export const ListLesson=(props:{data:any,course:number})=>{
    let listLesson=props.data.map((element:any)=>{
        return (<li key={element.id}>
            <Link to={`/${props.course}/${element.id}`}>
                <div className=" flex bg-slate-100 w-96 h-fit p-3 border-2 text-slate-700 justify-between">
                    {element.name}
                    <span className="material-icons self-center cursor-pointer">play_arrow</span>
                </div>
            </Link>
        </li>)
    })
    if(props.data.length>0){
        return (
               <ul>
                {listLesson}
               </ul>
        )
    } else {
        return (<></>)
    }
}