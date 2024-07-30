import Comment from "./Comment";

export default function Comments(props) {

    const comments = props.data ? props.data.map(comment => <Comment comment={comment.body} />) : null;

    return(
        <div className="px-10 py-10 sm:px-24">
            <p className='bg-cyan-700 p-3 rounded-md font-bold'>Comments :</p>
            {comments}
        </div>
    )
}
