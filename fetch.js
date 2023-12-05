// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

const url = `${BASE_URL}?q=cars&api-key=${API_KEY}`;

fetch(url)
  .then(function(data) {
    return data.json();
  })
  .then(function(responseJson) {
    console.log(responseJson);

    let article = responseJson.response.docs[0];
    console.log(article);

    const mainHeadline = article.headline.main;
    document.getElementById('article-title').innerText = mainHeadline;

    if (article.multimedia.length > 0) {
      const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
      document.getElementById('article-img').src = imgUrl;
    }
    const fullarticleEle = document.getElementById('article-link')
    fullarticleEle.setAttribute('href',article.web_url)
    const snippetEle = document.createElement("p")
    snippetEle.innerHTML = `Snippet : ${article.snippet}`
    document.getElementById("article-snippet").parentNode.appendChild(snippetEle)
    const pEle = document.createElement('p')
    pEle.innerHTML = `Reported by : ${article.byline.original}`
    document.getElementById("article-snippet").parentNode.appendChild(pEle)
  });

  //https://youtu.be/8aGhZQkoFbQ?si=C0v-I_7yjsnRQ91m