import React from 'react'

const fetchData = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setItem(json)
            // console.log(item)

        });
};

export default fetchData;




/*const fetchUsersWithAxios = ()=>{
  
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            this.setState({data: response.data, isFetching: false})
        })
        .catch(e => {
            console.log(e);
            this.setState({...this.state, isFetching: false});
        });
};
const fetchUsers = this.fetchUsersWithAxios();

export default fetchUsersWithAxios;*/