
const countryname = new URLSearchParams(location.search).get('name')
const flagimg = document.querySelector('.country-details img')
const countrynameH1 = document.querySelector('.country-details h1')
const countrynativename = document.querySelector('.native-name')
const countrypopulation = document.querySelector('.population')
const countryregion = document.querySelector('.region')
const countrysubregion = document.querySelector('.subregion')
const countrycapital = document.querySelector('.capital')
const countrytoplevel = document.querySelector('.toplevel')
const countrycurrencies = document.querySelector('.currencies')
const countrycurrenciessby = document.querySelector('.currencies-sby')
const countrylan = document.querySelector('.lan')
const border = document.querySelector('.border-countries')
const theme = document.querySelector('.theme')

fetch(`https://restcountries.com/v3.1/name/${countryname}?fullText=true`).then((res)=>{
    return res.json()
}).then(([country])=>{

//     const mapIframe = document.querySelector('.map');

// if (country.maps && country.maps.googleMaps) {
//     const embedUrl = country.maps.googleMaps.replace(
//         'https://goo.gl/maps/',
//         'https://www.google.com/maps/embed?pb='
//     );

//     mapIframe.src = embedUrl;
// }
    // console.log(Object.values(country.name.nativeName)[0].common)
    flagimg.src = country.flags.svg
    countrynameH1.innerText = country.name.common
    if(country.name.nativeName){
        countrynativename.innerText=(Object.values(country.name.nativeName)[0].common)
    } else {
        countrynativename.innerText =country.name.common
    }

    if(country.region){countryregion.innerText = country.region}
    if(country.subregion){countrysubregion.innerText= country.subregion}
    if(country.capital){ countrycapital.innerText = country.capital}
    if(country.tld){countrytoplevel.innerText = country.tld.join(', ')}
    if(country.currencies){countrycurrencies.innerText = (Object.values(country.currencies).map((currency)=> currency.name).join(', '))}
    if(country.currencies){countrycurrenciessby.innerText = (Object.values(country.currencies).map((currency)=> currency.symbol).join(', '))}
    countrypopulation.innerText = country.population.toLocaleString('en-IN')
    countrylan.innerText = (Object.values(country.languages).join(', '))
   
   
    if(country.borders){country.borders.forEach((borders)=>{
        console.log(borders)
        fetch(`https://restcountries.com/v3.1/alpha/${borders}`)
        .then((res)=>res.json())
        .then(([bordercountry])=>{
            console.log(bordercountry.name.common)
            const borderCountrytag = document.createElement('a')
            borderCountrytag.innerText = bordercountry.name.common
            borderCountrytag.href =`country.html?name=${bordercountry.name.common}`
            border.append(borderCountrytag)
        })
    })}
    
    
   
    
    
    
})




