fetch('https://imdb-api.com/en/API/Top250Movies/k_0p88pyxe').then(response => response.json()).then(data => {

  getMovies(data);

});


function getMovies(data) {

  //console.log(data.items);
  let content = "<ul>";
  data.items.forEach(function (linha) {
    content += "<li>";
    content += '<a href="?id=' + linha['id'] + '">';
    content += '<img src="' + linha['image'] + '"  />';
    content += linha['title'];
    content += "</a>";
    content += "</li>";
  });

  content += "</ul>";

  document.getElementById('content').innerHTML = content;

}


var myParam = location.search.split('id=')[1]  // melhorar

if (myParam) {

  fetch('https://imdb-api.com/API/Trailer/k_0p88pyxe/' + myParam).then(response => response.json()).then(data => {

    let content = "<ul>";
      content += "<li>";
      content += '<a href="?id=' + data.id + '">';
      content += '<iframe src="' + data.linkEmbed + '" height="500" width="800" title="Iframe Example"></iframe>';
      content += data.title;
      content += "</a>";
      content += "</li>";
 

    content += "</ul>";

    document.getElementById('content-view').innerHTML = content;



  });


}
