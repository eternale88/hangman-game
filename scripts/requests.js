//Old way with using promises
// const getPuzzle = (wordCount) => {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest()

//         request.addEventListener('readystatechange', (e) => {
//             if (e.target.readyState === 4 && e.target.status === 200) {
//                 const data = JSON.parse(e.target.response)
//                 resolve(data.puzzle)
//             } else if (e.target.readyState === 4) {
//                 reject("An error has taken place")
//             }
//         })
//         request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//         request.send()
//     })
   
// }

//Now with fetch api
// returning fetch is big deal, it return promise so we can call it with .then in app.js which is what it expects
// const getPuzzle = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {}).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch puzzle')
//         }
//     })
// }

//Now with fetch + async await added, finally the end is near!
const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
            const data = await response.json()
            return data
        } else {
            throw new Error('Unable to fetch puzzle')
        }
}


//old way

// const getCountryDetails = (alpha2Code) => {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest()

//         request.addEventListener('readystatechange', (e) => {
//             if (e.target.readyState === 4 && e.target.status === 200) {
//                 let data = JSON.parse(e.target.response)
//                 // const country = data.find((country) => {
//                 //     return country.alpha2Code === alpha2Code
//                 // })
//                 resolve(data.name)
//             } else if (e.target.readyState === 4) {
//                 reject("An error has occurred.")
//             }
//         })

//         request.open("GET", `https://restcountries.eu/rest/v2/alpha/${alpha2Code}`)
//         request.send()
//     })
    
// }

//Now with the fetchington api :)

// const getCountryDetails = (alpha2Code) => {
//     return fetch(`https://restcountries.eu/rest/v2/alpha/${alpha2Code}`, {}).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('An error has occurred.')
//         }
//     })
// }

// redone fetch with async
const getCountryDetails = async (alpha2Code) => {
    const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${alpha2Code}`, {})
    if (response.status === 200) {
        const data = await response.json()
        return data
    } else {
        throw new Error('An error has occurred.')
    }
}



//Promise challenge
// 1. Create getLocation function which takes no arguments
// 2. Setup getLocation to make a request to the url and parse the data
// 3. Use getLocation to print the city, region, and country information

// const getLocation = () => {
//     return fetch(`http://ipinfo.io/json?token=666865ba333883`, {}).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('An error has occurred in obtaining IP address')
//         }
//     })
// }

//redone getLocation with fetch + async
const getLocation = async() => {
    const response = await fetch(`http://ipinfo.io/json?token=666865ba333883`, {})
        if (response.status === 200) {
            const data = await response.json()
            return data
        } else {
            throw new Error('An error has occurred in obtaining IP address')
        }
}

// const getCurrentCountry = async () => {
//     const location = await getLocation()
//     const country = await getCountryDetails(location.country)
//     return country
// }


