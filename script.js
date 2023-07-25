// const jokes = document.querySelector('#joke');
// const btn = document.querySelector('#btn');

// GET https://icanhazdadjoke.com/

// const generatejoke = () =>{

//     const config = {
//         headers: {
//           Accept: 'application/json'
//         }
//       }

//     fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) =>{
//         jokes.innerHTML = "Loading joke..."
//         setTimeout(() => {
//             jokes.innerHTML = data.joke;
//         },1000)
//     })
//     .catch((error) =>{
//         console.log(error);
//     })
// }


const jokes = document.querySelector('#joke');
const btn = document.querySelector('#btn');

const generatejoke = async () => {

    try {
        const config = {
            headers: 
            {
                Accept: 'application/json'
            }
        }

        const res = await fetch('https://icanhazdadjoke.com', config)

        const data = await res.json();
        jokes.innerHTML = "Loading joke..."
        
        setTimeout(() => {
            jokes.innerHTML = data.joke;
        }, 1000)
    }   
    catch(error)
    {
        console.log(`The error is ${error}`);
    }
}

btn.addEventListener('click', generatejoke);
generatejoke();
