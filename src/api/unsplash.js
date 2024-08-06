import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID f1d41538611bd12f0469b7d033c20b365063d39433af71dce62a97f5311e4a3f'
    }
});