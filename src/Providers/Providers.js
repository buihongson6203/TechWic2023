// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "bootstrap/dist/js/bootstrap.min.js";
// import { useState, useEffect } from "react";
// import "./Providers.css";
// function providers() {
//   const [provider, setprovider] = useState([]);
//   useEffect(() => {
//     axios
//       .get("/streamingProvider.json")
//       .then((response) => {
//         setprovider(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching film list:", error);
//       });
//   }, []);
//   return (
//     <div className="container">
//       <table class="table table-dark table-hover">
//         <thead>
//           <tr>
//             <th scope="col">#</th>
//             <th scope="col">Name</th>
//             <th scope="col">Logo</th>
//             <th scope="col">Img</th>
//           </tr>
//         </thead>
//         <tbody>
//           {provider.map((entry, index) => (
//             <tr key={entry.ID}>
//               <th scope="row">{entry.ID}</th>
//               <td>{entry.Name}</td>
//               <td>
//                 <img src={entry.logo} alt={entry.Name} />
//               </td>
//               <td>
//                 <a href={entry.url} target="_blank" rel="noopener noreferrer">
//                   Link
//                 </a>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default providers;
// Make sure to import necessary dependencies and modules
import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for making API requests
import "./Providers.css";

function Providers() { // Component names should start with an uppercase letter
  const [providers, setProviders] = useState([]); // State should be named 'providers', not 'provider'

  useEffect(() => {
    axios
      .get("/streamingProvider.json")
      .then((response) => {
        setProviders(response.data); // Corrected variable name
      })
      .catch((error) => {
        console.error("Error fetching providers:", error);
      });
  }, []);

  return (
    <div className="container">
      <table className="table table-dark table-hover"> {/* 'class' should be 'className' */}
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Logo</th>
            <th scope="col">Link</th> {/* Changed from 'Img' to 'Link' */}
          </tr>
        </thead>
        <tbody>
          {providers.map((entry, index) => (
            <tr key={entry.ID}>
              <th scope="row">{entry.ID}</th>
              <td>{entry.Name}</td>
              <td>
              <img className="logo" src={"./imgs/film/" + entry.logo} alt={entry.Name} />
              </td>
              <td>
                <a href={entry.url} target="_blank" rel="noopener noreferrer">
                  Link
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Providers; // Make sure to export the corrected component name
