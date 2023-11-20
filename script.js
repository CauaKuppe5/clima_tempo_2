const token = 'a94f0fb5ab298b0b26bceb940190aafb'
const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  const url ='http://apiadvisor.climatempo.com.br/api/v1/weather/locale/5136/current?token=a94f0fb5ab298b0b26bceb940190aafb';

 /* fetch(url,requestOptions,{ mode: 'no-cors' })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro na requisição:', error));*/
  fetch(url, requestOptions,{ mode: 'no-cors' })
    .then(response => response.json())
    .then(tempoJson => { 
        console.log(tempoJson);
        render(tempoJson);
        })
    .catch(error => console.log('error', error));


    function render(tempoJson)
    {
        const ul = document.getElementById("lista-temperatura");
        ul.innerHTML = "";

        ul.insertAdjacentHTML("beforeend",`
        <div>
        <li id="${tempoJson.id}">
            <div id="titulo">
            <h2>Tempo agora em <br> ${tempoJson.name}, ${tempoJson.state}</h2>
            </div>
            <div id="center">
                <p><img id="tempo" src="https://www.climatempo.com.br/dist/images/v2/svg/${tempoJson.data.icon}.svg">
                    ${tempoJson.data.temperature} °
                </p>
            </div>
            <div id="info">
                <div id="condition">
                    <p><img src="https://www.climatempo.com.br/dist/images/v2/svg/ic-cloud.svg"> ${tempoJson.data.condition}</p>
                </div>
                <div id="sensation">    
                    <p><img src="https://www.climatempo.com.br/dist/images/v2/svg/ic-sensation.svg"> Sensação
                        ${tempoJson.data.sensation} °
                    </p>
                </div>    
            </div>
            <div id="vento">
                <h3> Vento </h3>
                <p>${tempoJson.data.wind_velocity} km/H </p>
            </div>
            <div id="umidade">
                <h3> Umidade </h3>
                <p><img src="https://www.climatempo.com.br/dist/images/v2/svg/ic-humidity-max.svg">
                    ${tempoJson.data.humidity} % </p>
            </div>
        </li>
    </div>
        `);
    }