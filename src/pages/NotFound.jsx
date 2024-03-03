import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-9xl'>404</h1>
            <p>Oops! That page doesn't exist</p>
            <Link to='/' className="transition ease-in bg-slate-700 border border-slate-700 my-4 p-2 rounded-xl text-white hover:bg-white hover:text-slate-700">Take me Home</Link>
        </div>
    );
}

export default NotFound;
