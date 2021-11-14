import React,{useRef} from "react";

// Search component for searching different properties of Users 
const Search = ({term, searchText}) => {
    const inputEle = useRef("");
    const getSearchTerm =() => {
        searchText(inputEle.current.value);
    };

    return(
        <React.Fragment>
                <div className="row">
                    <div className="col-9 m-auto mb-3">
                        <input ref={inputEle} type="text" className="w-100 p-2" placeholder="Search by name, email or role" value={term} onChange={getSearchTerm} />
                    </div>
                </div>
        </React.Fragment>
    );
};

export default Search;