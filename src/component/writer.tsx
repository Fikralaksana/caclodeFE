import CodeMirror from '@uiw/react-codemirror';
import { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import  config  from "../config.json";
export const Writer=(props:{code:any})=>{    
    const editor=useRef<ReactCodeMirrorRef>({})
    const [code,setCode]=useState("")
    const crudUpdateCodeURL=config.BackendServer + `/codes/${props.code.id}/`
    const CodeURL=config.MediaServer + `${props.code.code}`
    const uploadCode=()=>{
        console.log(crudUpdateCodeURL)
        axios.patch(crudUpdateCodeURL,{"code_string":code}).then((result)=>{
            console.log(result)
        })
    }
    useEffect(()=>{
        if(props.code.code){
            console.log(CodeURL)
            axios.get(CodeURL).then((result)=>{
                setCode(result.data)
                console.log(result.data)
            })
        }
    },[CodeURL])
    return (
    <div className="text-left">
        <CodeMirror
        value={code}
        height={`${String(window.innerHeight-50)}px`}
        width={`${String(window.innerWidth/3)}px`}
        extensions={[python()]}
        onChange={(val)=>{setCode(val)}}
        ref={editor}
        />
        <div className='flex w-full h-[50px] bg-slate-500 p-5'>
            <div className=' rounded-full border-2 w-[30px] h-[30px] self-center ml-auto cursor-pointer' onClick={uploadCode}>
                <span className='material-icons text-black'>play_arrow</span>
            </div>
        </div>


    </div>)
}