export default function Info (props) {
    return (
        <div className="min-w-96 min-h-80 rounded text-white">
            <span className="bg-amber-400 p-2 absolute rounded m-3 text-slate-800 text-xl font-medium" >Info</span>
            <div className="bg-slate-700 grid justify-items-center min-h-40">
                <img src={props.data.flag.img} alt="img" className="rounded-xl pt-10 pb-3 size-32" />
                <h3 className="text-3xl">{props.data.country}</h3>
                <h6 className="text-2xl">{props.data.city}</h6>
                <p className="text-2xl p-8 text-nowrap">isp: {props.data.connection.isp}</p>
            </div>
            <div className="bg-slate-800 h-48 p-5 grid text-xl">
                <p>IP: {props.data.ip}</p>
                <p>latitude: {props.data.latitude}</p>
                <p>longitude: {props.data.longitude}</p>
            </div>
        </div>
    )
}
