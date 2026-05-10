import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

function Teams() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        console.log('Teams API endpoint:', API_URL);
        console.log('Fetched teams data:', results);
        setData(results);
      })
      .catch(err => console.error('Error fetching teams:', err));
  }, []);

  return (
    <div className="card p-4">
      <h2 className="mb-4">Teams</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={item.id || idx}>
                <td>{idx + 1}</td>
                <td>{item.name || '-'}</td>
                <td>{item.description || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teams;
