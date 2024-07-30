export default function Post(props) {
    return(
        <div className="post">
            <img src={`/img/${props.data.img}`} alt="" className="max-w-[70%] mx-auto pt-5 rounded-2xl" />
            <div className='py-5 text-2xl font-bold'>{props.data.title}</div>
            <div className='text-lg font-medium px-5 sm:px-20'>{props.data.body}</div>
        </div>
    )
}
