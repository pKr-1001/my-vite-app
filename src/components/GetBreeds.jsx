import { Outlet } from 'react-router-dom';

const GetBreeds = ({ localBreeds }) => {
    // console.log(localBreeds)
    return (
        <div>
        <h1>Get Breeds</h1>
        {
            localBreeds.map((breed, index) => {
                return (
                    <div key={index}>
                    <h2>{breed.id}: {breed.type}</h2>                
                </div>
                )
            })
        }
        <Outlet></Outlet>
        </div>
    )}

export default GetBreeds;