let searchbtn = document.querySelector(".searchBtn"),
  searchInput = document.querySelector(".searchInput"),
  result = document.querySelector(".result");
  
  searchbtn.addEventListener("click", () => {
        let inputVal = searchInput.value;
    const URL = `https://restcountries.com/v3.1/name/${inputVal}?fullText=true`;
    if (inputVal.trim().length==0) {
      result.innerHTML = `<p> please Enter Country Name</p>`
  }
  else {
      result.innerHTML = `<p> Invalid value</p>`
  
  }


  

    console.log(inputVal);
  axios.get(URL).then((data) => {
    console.log(data.data[0])
    console.log(data.data[0].name.common)
    console.log(data.data[0].capital[0])
    console.log(data.data[0].region)
    result.innerHTML = `
        <img src="${data.data[0].flags.svg}"/>
        <p>Country: <span>${data.data[0].name.common}</span></p>
        <p>Area:  <span>${data.data[0].area}</span></p>
        <p>Continents:  <span>${data.data[0].continents[0]}</span></p>
        <p>Capital:  <span>${data.data[0].capital[0]}</span></p>
        <p>Currencies:  <span>${Object.keys(data.data[0].currencies)[0]}</span></p>
        <p>Languages:  <span>${Object.values(data.data[0].languages).toString().split(',').join(', ')}</span></p>
        <p>Population:  <span>${data.data[0].population}</span></p>
        `
    })

  });


