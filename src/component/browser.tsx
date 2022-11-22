export const Browser=(props:{data:any})=>{
    return (
        <div className="bg-slate-800 h-screen w-1/3 p-2">
            <div className="h-1/2 bg-white text-white text-left p-2">
                <iframe src={props.data?`http://localhost:8000${props.data.output}`:''}></iframe>

            </div>

        </div>
    )
}