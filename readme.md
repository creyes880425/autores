# Pasos para crear un proyecto
1. Crear una carpeta con el nombre del proyecto y abrirla
2. Inicializar el proyecto:
    npm init -y
3. Instalar dependencias del servidor:
    npm install express mongoose cors --save
4. Crear estructura de carpetas del servidor
    /server
        /config
        /controllers
        /models
        /routes
        server.js
5. Crear aplicacion cliente "npx create-react-app client"
    /client
6. Instalar dependencias del cliente:
    npm install reactstrap react react-dom
    npm install --save bootstrap
        import 'bootstrap/dist/css/bootstrap.min.css';
    npm install react-icons --save
    npm install sweetalert2
    npm i axios
    npm i react-router-dom ó npm install @reach/router 

    # Todo en una línea
    npm i reactstrap react react-dom bootstrap react-icons sweetalert2 axios react-router-dom --save



    Joke.aggregate().limit(1)
    .then(data => res.json({ joke: data }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
User.findOne().skip(random).exec(
    function (err, result) {
      // Tada! random user
      console.log(result) 
    })
