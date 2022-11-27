import React, {useState} from "react";


const Comments = ({video}) =>{

    const [isHidden, setIsHidden] = useState(false)

    const handleHide = () =>setIsHidden(isHidden ? false : true)

    const comments = video.comments.map((comment) => {
        return (
            <div key={video.user}>
                <p key={video.user}>{comment.user}</p>
                <p key={video.user}>{comment.comment}</p>
            </div>
        )
    })

    return (
        <div>
            <button onClick={handleHide}>{isHidden? "Show Comments" : "Hide Comments"}</button>
            <div className="comments">
                <h2>{`${video.comments.length} Comments`}</h2>
                {isHidden? null : comments}
            </div>
        </div>
    )
}

export default Comments;