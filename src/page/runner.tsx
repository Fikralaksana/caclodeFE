import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Instruction } from "../component/instruction"
import { Writer } from "../component/writer"
import { Console } from "../component/console"
import { Browser } from "../component/browser"
import config  from "../config.json"

const using_console=['python']
const using_browser=['web frontend']

export const RunnerPage=()=>{
    const {lessons}=useParams()
    const crudURL=config.BackendServer+`/lessons/${lessons}`
    const crudCodeURL=config.BackendServer+`/code/${lessons}`
    const [data,setData]=useState<any>({})
    const [code,setCode]=useState<any>({})
    const [output,setOutput]=useState("")
    const [rerender,setRerender]=useState(0)

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

    useEffect(()=>{
        setRerender(rerender+1)

    },[output])

    return (
    <div className="flex">
        <Instruction html={data.instructions}/>
        <Writer code={code} setOutput={setOutput}/>
        {data?.course?.language[0]?.type=='console'&&<Console data={output}/>}
        {data?.course?.language[0]?.type=='browser'&&<Browser data={output} key={rerender}/>}

    </div>)
}