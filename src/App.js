import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                setData([...json]);
                console.log(json);
            });
    }, []);
    return (
        <div>
            <h3>JSONPlaceholder DATA</h3>
            {data.map((Data) => {
                return (
                    <div
                        style={{ border: '1px solid black', margin: '5px' }}
                        key={Data.id}
                    >
                        <ul>
                            <li>{Data.userId}</li>
                            <li>{Data.id}</li>
                            <li>{Data.title}</li>
                            <li>{Data.body}</li>
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}

export default App;
