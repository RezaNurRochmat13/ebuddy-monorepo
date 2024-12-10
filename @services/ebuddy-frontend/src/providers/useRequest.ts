const useApiRequest = async (url: string, method = 'GET', body = null, headers = {}) => {
    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: body ? JSON.stringify(body) : null,
      });
  
      if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
  
      return await response.json();
    } catch (error) {
      throw error;
    }
};
  
export default useApiRequest;
  