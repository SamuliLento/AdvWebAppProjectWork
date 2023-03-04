import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Code() {

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
        </div>
    )

}

export default Code;
