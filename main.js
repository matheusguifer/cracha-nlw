const linksSocialMedia = {
  github: 'matheusguifer',
  youtube: 'UCGpX1hSB5xyxAvtLry2yK3A',
  facebook: 'matheusguifer',
  instagram: 'matheusguifer',
  twitter: 'matheusguifer',
  linkedin: 'in/matheusguifer'
}

  // padrões de escrita: camelCase; PascalCase; snake_case

  // primeira aplicação de manipulação de DOM
function changeSocialMediaLinks() {
  //através do comando "document" eu consigo acessar o DOM o documento com as respectivas identificações.
        
  // estrutura da função for(var, if, function of if)else stop;,
  //ex: for(let i=0; i <= 10; i++); essa função está criando uma
  //variável let i, e dando a ela valor 0, if(i <= 10) {i++} ou seja, soma i+1, else a função for para.

  // o laço `for` abaixo criando a variável `li`, e pegando todos os itens filhos da id="socialLinks" e armazenando
  // Dentro da variável foi criada uma função constante `social`, que contém o atributo classe da variável `li`
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

  //os [] tão chamando somando o valor de social da class equivalente ao social da const `socialLinks()`.
  // as crases significam que a string abaixo é uma template string, ou seja, uma str que permite expressões embutidas.
  // o ${} é um placeholder que eu posso utilizar para inserir variáveis ou arrays.
         

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

  //função com o objetivo de buscar as informações que eu desejo modificar na API do GitHub.
function getGithubUserInfo() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  //o fetch vai pra url acima, busca a informação gerada, e armazena.
  //then é uma promise de pegar algo, ela vai entrar em ação caso a função anterior tenha funcionado.
  //arrow function: cria uma função anonima, sem nome, somente com o argumento.

  // esta function vai fetch a url, e então transformar uma response.json. 
  // depois ele irá armazenar o json na variável data
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio //bio é um campo da API do Github
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    }) 
}

getGithubUserInfo();
