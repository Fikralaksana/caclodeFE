export const Browser=(props:{output:string})=>{
    let output=props.output.replaceAll("\r\n","<br>")
    const gethtml=()=>{
        return {__html:output}
    }
    return (
        <div className="bg-slate-800 h-screen w-1/3 p-2">
            <div className="h-1/2 bg-slate-900 text-white text-left p-2">
                Ini browser
                <span className=" font-mono" dangerouslySetInnerHTML={gethtml()}>
                </span>

            </div>

        </div>
    )
}