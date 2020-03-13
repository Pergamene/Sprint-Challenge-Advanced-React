import axios from 'axios';

class GetRequest {
  
  static getRequest() {
    return new Promise(resolve => {
      axios.get('http://localhost:5000/api/players').then(response => {
        const players = response.data;
        Promise.all(players).then(results => {
          resolve({ players: results });
        });
      });
    });
  }
}

export default GetRequest;
