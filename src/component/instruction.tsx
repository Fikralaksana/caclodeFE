export const Instruction=(props:{html:string})=>{
    function createMarkup() {
        return {__html: props.html};
      }
    return(<>
        <div className=" w-1/3 h-screen bg-slate-700 text-left p-2" >
            <div className="bg-white p-2"
            dangerouslySetInnerHTML={createMarkup()}>

            </div>
        </div>
    
    </>)
}