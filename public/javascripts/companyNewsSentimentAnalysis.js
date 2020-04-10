document.addEventListener('DOMContentLoaded', function () {
  console.log('dom content loaded')
  main()
})

function main() {
  const sentimentEl = document.getElementsByClassName('get-sentiment-btn')[0]
  sentimentEl.addEventListener('click', function (e) {
    const sentimentAnalysisRequest = new Request('http://localhost:3000/company/news-analysis');
    fetch(sentimentAnalysisRequest)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("HTTP error, status = " + response.status);
        }
        return response.blob();
      })
      .catch(function (error) {
        var p = document.createElement('p');
        p.appendChild(
          document.createTextNode('Error: ' + error.message)
        );
        document.body.insertBefore(p, myImage);
      });
  })
}
