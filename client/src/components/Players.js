import React from 'react';
import { Table } from 'reactstrap';
import useDarkMode from '../hooks/UseDarkMode';
import { useFetch } from '../hooks/UseFetch';
import './players.css';

function Players() {
    const [theme, toggleTheme] = useDarkMode();
    const { players, loading, error } = useFetch();
    // console.log('', players);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className='list'
            style={{
                background: theme === 'dark' ? '#000' : '#fff',
                color: theme === 'dark' ? '#fff' : '#000'
            }}>
            <button onClick={toggleTheme}>Go Dark!</button>
            <Table className='table'>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td>Country:</td>
                        <td>Searched:</td>
                    </tr>
                </tbody>
            </Table>
            {/* {players.map(player => (
                <div key={player.id}>
                    <Table>
                        <tbody>
                            <tr>
                                <td>{players.name}</td>
                                <td>{players.country}</td>
                                <td>{players.searches}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            ))} */}
            <div className='list'>
                <ul>
                    {/* STEP 3: Map over searchResults to see values in that array */}
                    {players.map(player => {
                        return <li key={player.id}>{player.name} {player.country} {player.searches}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Players;