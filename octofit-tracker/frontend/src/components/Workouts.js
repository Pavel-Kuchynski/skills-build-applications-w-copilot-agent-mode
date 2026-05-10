import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

function Workouts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        console.log('Workouts API endpoint:', API_URL);
        console.log('Fetched workouts data:', results);
        setData(results);
      })
      .catch(err => console.error('Error fetching workouts:', err));
  }, []);

  return (
    <div className="card p-4">
      <h2 className="mb-4">Workouts</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Suggested For</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={item.id || idx}>
                <td>{idx + 1}</td>
                <td>{item.name || '-'}</td>
                <td>{item.description || '-'}</td>
                <td>{item.suggested_for || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Workouts;
