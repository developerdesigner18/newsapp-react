export const updatShowNewsData = (limit, index, newsData) => {

    const filteredNewsData = [];

    for (let i = index * limit; i < newsData.length && i < (index + 1) * limit; i++) {
        filteredNewsData.push({ ...newsData[i] });
    }
    console.log(filteredNewsData);
    return filteredNewsData;
}