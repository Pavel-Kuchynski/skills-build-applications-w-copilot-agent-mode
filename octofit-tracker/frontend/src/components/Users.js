import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;

function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        console.log('Users API endpoint:', API_URL);
        console.log('Fetched users data:', results);
        setData(results);
      })
      .catch(err => console.error('Error fetching users:', err));
  }, []);

  return (
    <div className="card p-4">
      <h2 className="mb-4">Users</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Name</th>
              <th>Team</th>
              <th>Superhero</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={item.id || idx}>
                <td>{idx + 1}</td>
                <td>{item.email || '-'}</td>
                <td>{item.name || '-'}</td>
                <td>{item.team || '-'}</td>
                <td>{item.is_superhero ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
