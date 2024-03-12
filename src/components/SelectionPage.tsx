import React, {useState} from 'react';
import { Link } from 'react-router-dom';
// import Location from './Location';
// import Post from './Post';

const SelectionPage: React.FC = () => {
    const [showLocation, setShowLocation] = useState(false); // Add state to manage whether to show Location component
    const [showPost, setShowPost] = useState(false);
    

    const handleRequest = () => {
        setShowLocation(true);
    };

    const handlePost = () => {
        setShowPost(true);
    };

    // if (showLocation) {
    //     return <Location />;
    // }

    // if(showPost){
    //     return <Post/>;
    // }

    return (
    <div className="flex h-screen flex-row items-center justify-center bg-black gap-28">
        <div className="h-64 w-96 bg-white p-4 hover:bg-slate-300 justify-center items-center flex flex-col">
            <div className="text-center text-xl font-extrabold">Request a Parking spot</div>
            <Link to='/request'>
            <button className="w-400 mt-4 items-center justify-center bg-black p-2 text-center text-lg text-white font-semibold" onClick={handleRequest}>Request</button>
            </Link>
        </div>
        <div className="h-64 w-96 bg-white p-4 hover:bg-slate-300 justify-center items-center flex flex-col">
            <div className="text-center text-xl font-extrabold">Post a Parking spot</div>
            <Link to='/post'>
                <button className="w-400 mt-4 items-center justify-center bg-black p-2 text-center text-lg text-white font-semibold" onClick={handlePost}>Post</button>
            </Link>    
            </div>
    </div>
    )
}

export default SelectionPage;
