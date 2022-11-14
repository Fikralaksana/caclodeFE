import React, { useEffect, useState } from "react"
import { ListCourse } from "../component/listCourse"
import config from "../config.json"
import axios from "axios"

export const Dashboard= (props:{children?:React.ReactElement})=>{
    const crudURL=config.BackendServer + "/courses"
    const [courses,setCourses]=useState([])
    useEffect(()=>{
        axios.get(crudURL).then(result=>{
            let data=result.data.results
            var listCourse=data.map((element:any) => {
                return(
                    <ListCourse key={element.id} data={element}/>
                )
            });
            setCourses(listCourse)
        })

    },[])

    return (<>
        <div className="bg-slate-800 text-white min-h-screen text-left p-5 flex gap-2">
            {courses}
        </div>
    </>)
}