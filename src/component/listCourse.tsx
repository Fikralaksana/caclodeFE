import { useState } from "react"
import logo from "../img/python.png"
import { ListLesson } from "./listLesson"
export const ListCourse=(props:{data:any})=>{
    const [showLesson,setShowLesson]=useState(false)
    return (
        <div>
            <div className="flex bg-slate-100 w-96 h-fit p-5 text-slate-700 gap-2" onClick={()=>{setShowLesson(!showLesson)}}>
                <div className=" flex-1 cursor-pointer">
                    <div className=" text-xl font-bold">
                        {props.data.name}
                    </div>
                    <div className=" text-sm font-light font-mono">
                        print, 
                        arimathic,
                        etc 
                    </div>
                    <hr className=" mb-1 mt-1 border-slate-700 border-t-2 border-opacity-50"></hr>
                    <div className="">
                        <img src={logo} alt="python-logo" className=" w-4 ml-auto" />
                    </div>
                </div>

            </div>
            { showLesson &&<ListLesson data={props.data.lessons} course={props.data.id}/>}
        </div>
    )
}