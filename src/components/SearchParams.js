import { useState, useEffect } from 'react';
import Pet from "../components/Pet"
import useBreedList from '../components/useBreedList'

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
//const BREEDS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {

const [location, setLocation] = useState("");
const [animal, setAnimal] = useState("");
const [breed, setBreed] = useState("");
const [pets, setPets] = useState([]);
const [breeds] = useBreedList(animal);


useEffect(() => {
    requestPets();
}, []) //eslint-disable-line react-hooks/exhaustive-deps

async function requestPets() {
    const res = await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    console.log(json);
    setPets(json.pets);

}
// function updateLocation(e) {
//     setLocation(e.target.value)
// }
    return(
        <div className="search-params">
        <form>
            <label id="label" htmlForm="location">Location
            <input id="location" 
            onChange={(e) => setLocation(e.target.value)} 
            //onChange = {updateLocation}
            value={location} placeholder="location" />
            </label>
            <label htmlFor="animal">
                animal
                <select 
                id="animal"
                value={animal}
                onChange = {e => setAnimal(e.target.value)}
                onBlur = {e => setAnimal(e.target.value)}>

                    <option />
                    {
                        ANIMALS.map( animal => (
                            <option value = {animal} key={animal}>
                                {animal}
                                </option>
                                ))
                    }
                </select>
                </label>
                <label htmlFor="breed">
                Breed
                <select 
                id="breed"
                value = {breed}
                onChange = {e => setBreed(e.target.value)}
                onBlur = {e => setBreed(e.target.value)}>

                    <option />
                    { breeds.map((breed) => (
                            <option value = {breed} key={breed}>
                                {breed}
                                </option>
                                ))}
                </select>
                </label>
            <button id="btn">submit</button>
        </form>
        { pets.map((pet) => (
                <Pet 
                name={pet.name} 
                animal={pet.animal} 
                breed ={pet.breed}
                key={pet.id} />
            ))
        }
        </div>
        
    )
}
export default SearchParams