import React, {useState} from 'react'
import { Link, useParams } from 'react-router-dom';
// import DisplaySpots from './DisplaySpots';
import NavigationBar from './NavigationBar';

const Location: React.FunctionComponent = () => {
    const [location, setLocation]= useState('');
    const { place } = useParams();
    // const [display, setDisplay] = useState(false);

    const handleLocation = async () => {
    try{
        const response = await fetch('/api/location/sql/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorizstion': 'Bearer 1234',
            },
            body: JSON.stringify({location}),
        });
        const data = await response.text();
        console.log('Response:',data);
        // setDisplay(true);
        }catch(error){
        console.error('Error:',error);
        }
    };

    // if(display){
    //     return <DisplaySpots/>
    // }

    return (
        <div>
            <NavigationBar/>
    <div className="flex flex-col justify-center items-start h-screen dark:bg-black">
        <div className="text-white flex flex-col justify-center ml-11 items-start">
            <p className="text-5xl font-extrabold">Park Anywhere with </p>
            <p className="text-5xl font-extrabold mt-1">XXX</p>
            <p className="text-2xl mt-6 font-semibold">Enter your Location</p>
            <form>
                <input type="search" className="border border-white bg-white text-black rounded-lg px-20 pl-4 py-2 mt-6 text-left" placeholder="Enter location" value={location} onChange={(e) =>setLocation(e.target.value)}/>
            </form>
            <Link to={`/display/${location}`} className="mt-6 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-50" onClick={handleLocation}>
                Search
            </Link>
        </div>
    </div>
    </div>
    )
}

// {books.map((book)=> (
//           <Link to={/details/${book.book_id}}>
            
//             <h1>{book.book_name}</h1>
//             <h2>{book.author_name}</h2>
//             </Link>
//         ))}
export default Location;
