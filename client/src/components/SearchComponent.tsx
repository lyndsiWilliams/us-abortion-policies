import { useState } from 'react';
import axios from 'axios';

const SearchComponent = () => {
  const [list, setList] = useState();

  // useEffect(() => {
  //   axios({
  //     method: 'get',
  //     url: 'https://cors-anywhere.herokuapp.com/https://api.abortionpolicyapi.com/v1/states',
  //     headers: { token: 'tcy4M+8d6ltGXX4I' }
  //   })
  //   .then(response => {
  //     console.log('findme response', response);
  //     setList(response.data);
  //     console.log('findme list', list);
  //   })
  //   .catch(error => console.log('GET error: ', error));
  // }, []);

  const instance = () => axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://api.abortionpolicyapi.com',
    headers: { 'token': 'tcy4M+8d6ltGXX4I' }
  });

  const handleClick = () => {
    instance().get('/v1/states')
    .then(response => {
      console.log('findme response', response);
      setList(response.data);
      console.log('findme list', list);
    })
    .catch(error => console.log('GET error: ', error));
  };

  return (
    <>
      <h4>This will be a search component.</h4>
      <input autoFocus />
      <button onClick={handleClick}>Search</button>
    </>
  );
};

export default SearchComponent;
