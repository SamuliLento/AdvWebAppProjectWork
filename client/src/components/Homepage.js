import Codes from "./Codes";
import PostCode from "./PostCode";

function Homepage ({user}) {

    return (
        <div>
            <h1>Home</h1>
            <Codes />
            {user.username && 
                <PostCode user={user}/>
            }
        </div>
    )
}

export default Homepage;
