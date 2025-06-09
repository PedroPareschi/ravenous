const apiKey = import.meta.env.VITE_YELP_API_KEY;
const baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3';

const searchBusinesses = async (term, location, sortBy) => {
    const url = `${baseUrl}/businesses/search?term=${encodeURIComponent(term)}&location=${encodeURIComponent(location)}&sort_by=${sortBy}`;
    console.log(apiKey);
    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
            }
        });
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error?.description || data.error?.message || response.statusText);
        }

        console.log(data.businesses);
        return data.businesses;
    } catch (error) {
        console.error('Error fetching businesses:', error);
        return [];
    }

}

export { searchBusinesses };