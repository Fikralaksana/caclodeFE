import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Instruction } from "../component/instruction"
import { Writer } from "../component/writer"
import { Output } from "../component/console"
import config  from "../config.json"

export const RunnerPage=()=>{
    const {lessons}=useParams()
    const crudURL=config.BackendServer+`/lessons/${lessons}`
    const crudCodeURL=config.BackendServer+`/code/${lessons}`
    const [data,setData]=useState<any>({})
    const [code,setCode]=useState<any>({})
    const [output,setOutput]=useState("")

    useEffect(()=>{
        if(lessons){
            axios.get(crudURL).then((result:any)=>{
                setData(result.data)
            })
            axios.get(crudCodeURL,{ withCredentials: true }).then((result:any)=>{
                setCode(result.data)
            })
        }
    },[lessons,crudCodeURL,crudURL])


    
    return (
    <div className="flex">
        <Instruction html={data.instructions}/>
        <Writer code={code} setOutput={setOutput}/>
        <Output output={output}/>

    </div>)
}