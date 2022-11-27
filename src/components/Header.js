import React,{useState} from "react"

const Header = ({video}) => {

    let [upVote, setUpVote] = useState(0)
    let [downVote, setDownVote] = useState(0)

    const handleUpVote = () => setUpVote(upVote+=1)
    const handleDownVote = () => setDownVote(downVote+=1)

    return (
        <>
            <h2>{video.title}</h2>
            <h4>{`${video.views} | Uploaded ${video.createdAt}`}</h4>
            <div>
                <button onClick={handleUpVote}>{upVote} UpVote</button>
                <button onClick={handleDownVote}>{downVote} DownVote</button>
            </div>
        </>
    )
}

export default Header;