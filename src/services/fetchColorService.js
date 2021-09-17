import axiosWithAuth from '../helpers/axiosWithAuth';


const fetchColorService = async () => {
    const res = await axiosWithAuth()
        .get(`http://localhost:5000/api/colors`);
    const { data } = res;
    return { data };
  };

export default fetchColorService;