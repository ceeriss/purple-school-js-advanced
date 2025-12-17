const request = new XMLHttpRequest()

request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto')

request.send()

request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText)
    const secondURL = (data.abilities[0].ability.url);
    const secondRequest = new XMLHttpRequest()
    secondRequest.open('GET', secondURL);
    secondRequest.send()
    secondRequest.addEventListener('load', function () {
        const data2 = JSON.parse(this.responseText)
        const effect = data2.effect_entries;
        console.log(effect);

         for (let i = 0; i < effect.length; i++){
             if (effect[i].language.name === 'en'){
                console.log(effect[i].effect);

             }
             else{
                continue;
             }
         }

    })
})

