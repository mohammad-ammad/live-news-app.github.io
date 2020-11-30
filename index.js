console.log("news api");
//c2fcd795de394111a0537b9b28893df8

let newsaccordian = document.getElementById("newsaccordian");
let sources = 'bbc-news';
let apikey = 'c2fcd795de394111a0537b9b28893df8'; 
const xhr = new XMLHttpRequest();
xhr.open('GET',`http://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${apikey}`,true);
xhr.onload = function(){
  if(this.status===200){
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    // console.log(articles);
    // console.log(json);
    let newsHtml = "";
    articles.forEach(function(element,index) {
      // console.log(element[news]);
      let news = `<div class="card">
<div class="card-header" id="heading${index}">
  <h5 class="mb-0">
    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
      ${element["title"]}
    </button>
  </h5>
</div>

<div id="collapse${index}" class="collapse " aria-labelledby="heading${index}" data-parent="#newsaccordion">
  <div class="card-body">
   ${element["content"]}. <a href=${element["url"]} target="_blank">Read more</a>
  </div>
</div>
</div>`;
newsHtml += news;

});
    newsaccordian.innerHTML = newsHtml;
  }
  else{
    console.log('error');
  }
}
xhr.send();

