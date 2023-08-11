import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Providers.css";
import { FaEdit, FaTrash } from 'react-icons/fa';

function Providers() {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    axios
      .get("/streamingProvider.json")
      .then((response) => {
        setProviders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching providers:", error);
      });
  }, []);

  return (
    <div className="container">
      <button className="btn-addnew">
      <a className="link-addnew" href="#">Add new</a>
      </button>
      <table className="providers-table">
        <thead className="status">
          <tr >
            <th>STT</th>
            <th>Name</th>
            <th>Logo</th>
            <th>Link</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="titlle" >
          {providers.map((entry, index) => (
            <tr key={entry.ID}>
              <td>{entry.ID}</td>
              <td>{entry.Name}</td>
              <td>
<<<<<<< HEAD
              <img className="logo2" src={"./imgs/film/" + entry.logo} alt={entry.Name} />
=======
                <img className="logo" src={"./imgs/film/" + entry.logo} alt={entry.Name} />
>>>>>>> b01dd6c045c11d51fb877a824b1c0aa20263662c
              </td>
              <td>
                <a href={entry.url} target="_blank" rel="noopener noreferrer">
                  Link
                </a>
              </td>
              <td className="btn-all">
                <button type="button" className="btn btn-secondary">
                  <FaEdit />
                </button>
                <button type="button" className="btn btn-secondary">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Providers;