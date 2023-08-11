import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Providers.css";
import { FaEdit, FaTrash } from 'react-icons/fa';

function Providers() {
  const [providers, setProviders] = useState([]);
  const [editingProvider, setEditingProvider] = useState(null);
  const [newProvider, setNewProvider] = useState({
    Name: "",
    logo: "",
    url: "",
  });
  const availableImages = ["netflix.jpg", "HBOlogo.jpg", "disney.png", "amazon.jpg"];

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

  const editProvider = (ID) => {
    const providerToEdit = providers.find(provider => provider.ID === ID);
    setEditingProvider(providerToEdit);
  };

  const addProvider = () => {
    setProviders([...providers, newProvider]);

    setNewProvider({
      Name: "",
      logo: "",
      url: "",
    });

    const modal = document.getElementById("addprovider");
    const closeModalBtn = document.querySelector("#close_modal2");
    closeModalBtn.click();
  };

  const deleteProvider = (ID) => {
    const updatedProviders = providers.filter(provider => provider.ID !== ID);
    setProviders(updatedProviders);
  };

  const saveChanges = () => {
    if (editingProvider) {
      const updatedProviders = providers.map(provider => {
        if (provider.ID === editingProvider.ID) {
          return editingProvider;
        }
        return provider;
      });
      setProviders(updatedProviders);
    }
    const modal = document.getElementById("editprovider");
    const closeModalBtn = document.querySelector("#close_modal");
    closeModalBtn.click();
  };

  return (
    <div className="container">
      <h1 className="provider"> Stream Providers</h1>
      <button className="btn-addnew"
        data-bs-toggle="modal"
        data-bs-target="#addprovider">
        <a className="link-addnew" href="#">Add new</a>
      </button>
      <table className="providers-table">
        <thead className="status">
          <tr >
            <th>Name</th>
            <th>Logo</th>
            <th>Link</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="titlle" >
          {providers.map((entry, index) => (
            <tr key={entry.ID}>
              <td>{entry.Name}</td>
              <td>
                <img className="logo-prv" src={"./imgs/film/" + entry.logo} alt={entry.Name} />
              </td>
              <td>
                <a href={entry.url} target="_blank" rel="noopener noreferrer">
                  Link
                </a>
              </td>
              <td className="btn-all">
                <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#editprovider" onClick={() => editProvider(entry.ID)}>
                  <FaEdit />
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => deleteProvider(entry.ID)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="modal fade" id="editprovider" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Stream Provider</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            {editingProvider && (
              <div className="modal-body">
                <label className="mb-1">Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={editingProvider.Name}
                  placeholder="Provider's Name"
                  onChange={(e) => setEditingProvider({ ...editingProvider, Name: e.target.value })}
                />
                <label className="mb-1">Logo</label>
                <select
                  className="form-control"
                  name="logo"
                  value={editingProvider.logo}
                  onChange={(e) => setEditingProvider({ ...editingProvider, logo: e.target.value })}
                >
                  <option value="">Select an image</option>
                  {availableImages.map((image) => (
                    <option key={image} value={image}>
                      {image}
                    </option>
                  ))}
                </select>
                <label className="mb-1">Link</label>
                <input
                  className="form-control"
                  type="text"
                  name="link"
                  value={editingProvider.url}
                  placeholder="Provider's Subscription Link"
                  onChange={(e) => setEditingProvider({ ...editingProvider, url: e.target.value })}
                />
              </div>
            )}
            <div className="modal-footer">
              <button id="close_modal" type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={saveChanges}>
                Save 
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="addprovider" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Add </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <label className="mb-1">Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                value={newProvider.Name}
                placeholder="Provider's Name"
                onChange={(e) => setNewProvider({ ...newProvider, Name: e.target.value })}
              />
              <label className="mb-1">Logo</label>
              <select
                className="form-control"
                name="logo"
                value={newProvider.logo}
                onChange={(e) => setNewProvider({ ...newProvider, logo: e.target.value })}
              >
                <option value="">Select an image</option>
                {availableImages.map((image) => (
                  <option key={image} value={image}>
                    {image}
                  </option>
                ))}
              </select>
              <label className="mb-1">Link</label>
              <input
                className="form-control"
                type="text"
                name="link"
                value={newProvider.url}
                placeholder="Provider's Subscription Link"
                onChange={(e) => setNewProvider({ ...newProvider, url: e.target.value })}
              />
            </div>
            <div className="modal-footer">
              <button type="button" id="close_modal2" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={addProvider}>
                Add 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Providers;