let jsonData = []

const receiveData = async () => {
    const response = await fetch('./data.json')
    const fetchedData = await response.json()
    jsonData = fetchedData
    console.log(jsonData);
}
receiveData()