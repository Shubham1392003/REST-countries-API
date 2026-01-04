const countriesCountainer = document.querySelector('.countries-container')
const filter = document.querySelector('.filter')
const searchinput = document.querySelector('.search-container')
const theme = document.querySelector('.theme')

let allCountriesData 

fetch('https://restcountries.com/v3.1/independent?status=true')
    .then((res) => { return res.json() })
    .then((data)=>{
        console.log(data)
        renderCountries(data)
        allCountriesData = data
    })

filter.addEventListener('change',(e)=>{
        fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
    .then((res) => { return res.json() })
    .then(renderCountries)
    
        
    })

function renderCountries(data){
    countriesCountainer.innerHTML=''
            data.forEach((country) => {
            const countryCard = document.createElement('a')
            countryCard.classList.add('country-card')
            countryCard.href =`/country.html?name=${country.name.common}`

            countryCard.innerHTML = `
                <img src="${country.flags.svg}" alt="flag">
                <div class="card-text">
                    <h3 class="card-title">${country.name.common}</h3>
                    <p><b> Population : </b> ${country.population.toLocaleString('en-IN')}  </p>
                    <p><b> Region : </b>${country.region}</p>
                    <p><b> Capital : </b> ${country.capital?.[0]} </p>
                </div>

`
            countriesCountainer.append(countryCard)
        })
}


searchinput.addEventListener('input',(e)=>{
    console.log(e.target.value)
    const filtercon =allCountriesData.filter((country)=> country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
    renderCountries(filtercon)
})

