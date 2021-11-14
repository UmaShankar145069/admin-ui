import { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './components/Search';
import UsersProfile from './components/UsersProfile';
import Pagination from './components/Pagination';

function App() {
  const [users,setUsers] = useState([]);
  const [loading,setLoading] = useState(false);
  const [currentPage,setCurrentPage] = useState(0);
  const [userPerPage,setUserPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect( () => {
    // Function used to fetch Users
    const fetchUser = async () => {
      setLoading(true);
      const response = await axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
      setUsers(response.data);
      // console.log(response.data);
      setLoading(false);
    };

    fetchUser();
  }, []);

  // search handler
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== ""){
      const newUserList = users.filter((user) => {
        return Object.values(user)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      });
      setSearchResults(newUserList);
    }
    else{
      setSearchResults(users);
    }
  };

  // Get current users
  const pagesVisited = currentPage * userPerPage;
  // const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentUsers = users.slice(pagesVisited, pagesVisited + userPerPage);

  const pageCount = Math.ceil(users.length/userPerPage);

  // page handler
  const changePage = ({selected}) => {
    setCurrentPage(selected);
};

  return (
    <div className="container mt-5">
      <Search term={searchTerm} searchText={searchHandler} />
      <UsersProfile users={searchTerm.length < 1 ? currentUsers : searchResults} loading={loading} setUsers={setUsers} />
      <Pagination changePage={changePage} pageCount={pageCount} />
    </div>
  );
}

export default App;