import Links from "./Links";

export default function Sidebar(props){

    const links = props.posts ? props.posts.map((posts, index)=> <Links title={posts.title} index={index}
    handleClick={props.handleChangeCurrentPost} />) : null ;

    return(
        <aside className='min-w-32 text-xl font-medium pb-10 mr-3'>
            <ul>
                {links}
            </ul>
        </aside>
    )
}
