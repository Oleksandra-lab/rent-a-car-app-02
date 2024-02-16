import axios from 'axios'

export const fetchAllCars = async () => {
    const {data} = await axios.get (
        `https://6536c8b2bb226bb85dd29f68.mockapi.io/api/v1/cars`
    );
    console.log(data);
    return data
}