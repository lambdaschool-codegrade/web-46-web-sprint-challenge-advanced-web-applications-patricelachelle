import axiosWithAuth from '../helpers/axiosWithAuth';


const fetchColorService = async () => {
   const response = await axiosWithAuth()
        .get(`http://localhost:5000/api/colors`);
    console.log(response);
}

export default fetchColorService;