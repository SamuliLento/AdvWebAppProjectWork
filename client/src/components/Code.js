import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Comments from "./Comments";
import PostComment from "./PostComment";

function Code({user}) {

    const {title} = useParams();
    const [code, setCode] = useState({});

    useEffect(() => {
        fetch("/api/codes/" + title)
            .then(response => response.json())
            .then(json => setCode(json))
    }, [title]);

    return (
        <div>
            <h3>{code.title}</h3>
            <p>{code.content}</p>
            <Comments title={code.title}/>
            {user.username ?
                <PostComment  title={code.title} user={user}/>
                : "Login to comment"
            }
        </div>
    )
}

export default Code;
