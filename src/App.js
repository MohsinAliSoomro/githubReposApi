import React, { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [repos, setRepos] = useState([{}])
  useEffect(() => {
    async function FetchApi() {
      await fetch('https://api.github.com/users/mohsinalisoomro/repos')
        .then(res => res.json())
        .then(result => {
          console.log(result)
          setRepos(result);
        })
        .catch(err => {
          console.log(err)
        })
    }
    FetchApi()
  }, [])

  return (
    <div className="maincontainer">
      <div className="intro">
        <h1>Mohsin Ali Soomro</h1>
        <p>I am mern stack developer <br/>
        Link <a href="https://github.com/MohsinAliSoomro">GitHub</a>
        </p>
      </div>

      {/* <ul>
      {repos.map((item,ind)=>{
        return(<li key={ind}>{item.name}</li>)
      })}
      </ul> */}
      <div className="container">
        {repos.map((item, ind) => {
          return (
            <div key={ind} className="display">
              <h4 >Repos Name : <br />{item.name}</h4>
              <h5>Full Name : {item.full_name}</h5>
              <h5>language : {item.language}</h5>
              <p>Created At : <br />{item.created_at}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
