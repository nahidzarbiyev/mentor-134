axios('https://restcountries.com/v3.1/name/india?fullText=true')
  .then(function (response) {
    // handle success
    console.log(response);
  })

  fetch('https://restcountries.com/v3.1/name/india?fullText=true')
  .then(res=>res.json())
  .then(data=>console.log(data))