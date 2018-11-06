export async function getHeaderData() {
  try {
    const response = await fetch(`https://newsapi.org/v2/sources?apiKey=d31a85f5dffc42c38e3823ed8854aab9&language=en&country=us`);
    return response.json();
  } catch (e) {
    console.log(e);
    const response = {
      sources: []
    }
    return response;
  }
}

export async function getDetailData(id) {
  try {
    const response = await fetch(`https://newsapi.org/v2/everything?apiKey=d31a85f5dffc42c38e3823ed8854aab9&language=en&sources=${id}`);
    return response.json();
  } catch (e) {
    console.log(e);
    const response = {
      articles: []
    }
    return response;
  }
}