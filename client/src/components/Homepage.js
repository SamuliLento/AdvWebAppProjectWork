import Codes from "./Codes";
import PostCode from "./PostCode";

function Homepage ({jwt, user}) {

    return (
        <div>
            <h1>Home</h1>
            <Codes />
            {jwt && 
                <PostCode user={user}/>
            }
        </div>
    )
}

export default Homepage;
