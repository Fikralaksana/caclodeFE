import CodeMirror from '@uiw/react-codemirror';
import { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { useEffect, useRef, useState } from 'react';
export const Writer=()=>{    
    const editor=useRef<ReactCodeMirrorRef>({})
    const [code,setCode]=useState("")
    const uploadCode=()=>{
        console.log(code)
    }
    return (
    <div className="text-left">
        <CodeMirror
        value="type your code here"
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