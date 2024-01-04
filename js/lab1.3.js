fetch('https://catfact.ninja/facts')
.then(function (response) {
    let element;
    response.json().then(function (jsonData){
        console.log(jsonData.data);

    element = jsonData.data.map(function (item) {
        return `<li>${item.fact}</li>`;
    })
    document.writeln("<ol>" + element.join("")+ "</ol>") ;
    });
})
.catch(function (err) {
    console.log(err);
});