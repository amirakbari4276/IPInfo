export default function Links(props) {
    return(
        <li className='hover:cursor-pointer text-white pb-2' onClick={(e) => props.handleClick(props.index)}>{props.title}</li>
    )
}
