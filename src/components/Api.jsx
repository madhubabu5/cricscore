const API_KEY = "2o2cqkLVx2bTctye3DRhrvDp6ag2";

export const getMatches = async ()=>{
    const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    return data;
};

//show match details
export const getMatchDetails = async (id)=>{
    const url =`https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    return data;
}
