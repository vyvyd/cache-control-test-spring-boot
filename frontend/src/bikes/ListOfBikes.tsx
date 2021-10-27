import React, {useEffect, useState} from 'react';
import BikesApi from "./bikesApi";
import BikeDTO from './models';


function ListOfBikes() {
    const [bikes, setBikes] = useState(new Array<BikeDTO>(
        {brand: 'Scott', model: 'Aspect 970', priceInEuros: 1200}
    ))
    useEffect(() => {
        let handleBikesAreRetrieved = (bikes: BikeDTO[]) => { setBikes(bikes)};
        new BikesApi().getAllBikes(
            handleBikesAreRetrieved,
            () => {}
        )
        return () => {
            console.log("Cleanup completed")
        }
    }, [])

    return (
        <div className="App-header" >
            <header >
                <p> List of Bikes</p>
            </header>
            <table id='bikes'>
                <tbody>
                {bikes.map((bike, index: number) =>
                    (<tr key={index}>
                        <td>{bike.brand}</td>
                        <td>{bike.model}</td>
                        <td>{bike.priceInEuros}</td>
                    </tr>))
                }
                </tbody>
            </table>
        </div>
    )
}



export default ListOfBikes
