import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Instruction } from "../component/instruction"
import { Writer } from "./writer"
import config  from "../config.json"

export const RunnerPage=()=>{
    const {courses,lessons}=useParams()
    const crudURL=config.BackendServer+`/lessons/${lessons}`
    const [data,setData]=useState<any>({})

    useEffect(()=>{
        axios.get(crudURL).then((result:any)=>{
            setData(result.data)
        })
    },[])

    
    return (
    <div className="flex">
        <Instruction html={data.instructions}/>

        <Writer/>

    </div>)
}