import axios from 'axios';

const KEY = 'AIzaSyA1CxbbXKdk5vh_FsyvY17hJIr3FJP-tA0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
