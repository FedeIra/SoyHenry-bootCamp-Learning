/*
!React Router
Según su descripción en su repo, react-router sirve para mantener sincronizados tu UI con la url de una forma declarativa.
*/

// instalarlo antes: npm i react-router-dom
// luego hay que importarlo y abrazar a la app.

/* EJEMPLO:
www.paginaPrincipal.com (apretas link de la página y te lleva al siguiente:)
www.paginaPrincipal.com/path (apretas link de la página y te lleva al siguiente:)
www.paginaPrincipal.com/path/2
*/

/* SIN ROUTER:
www.paginaPrincipal.com (apretas link y te lleva:)
www.otraPaginaNadaqueVer.com (apretas link y te lleva)
www.tampocoNadaQueer.com
*/

window.history.back(2)/* Si en el navegador de chrome consologues esto va los pasos que le digas atrás en el historial de búsqueda. */

/* Se puede utilizar con:
!1) HASH (#):
*/

import { HashRouter, Route } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("app")
);

//otra forma:
import { HashRouter, Route } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <Route path="/" component={App} />
  </HashRouter>,
  document.getElementById("app")
);
/* Hay que abrazar el componente padre (App). Tiene que ser un único padre. Se puede hacer desde el componente App.

!2) BROWSER:
*/

// npm i react-router-dom
import { HashRouter, Route } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>,
  document.getElementById("app")
);

/* Propiedades del componente <Route/> */
<Route
  exact
  strict
  sensitive={true} /* el valor por defecto es true */
  path="..." /* indica cuál es la ruta sobre la q estoy hablando.*/
  /*   Hay varias formas de decirle qué componente queremos que se renderize: */
  /* 1: */
  componente={
    Componente
  } /* le paso el nombre del componente. NO LE PUEDO PASAR PROPIEDADES AL COMPONENTE (onSearch, onClick, etc). Es una desventaja. Para eso tengo las siguiente opciones: */
  render={() => (
    <Component />
  )} /* Puedo pasarle propiedades. Pueden recibir parámetros también. Cuando le pasamos el componente, le podemos pasar parámetros. Puede recibir una función para que se renderize en algunos casos si y otros no. Suele usarse booleano. */
  childen={() => <Component />} /*sea lo que sea siempre lo va a renderizar  */
>
  ... {/* Otra alternativa es directamente ponerle el componente entre medio */}
</Route>;

import {
  Route,
  HashRouter as Router,
} from "react-router-dom"; /* Le podes designar un alias a Route o HashRouter y meterlo como Router a los dos. Se puede agregar switch también. Hoy en día no es necesario: */

import { Route, Switch, HashRouter as Router } from "react-router-dom";

/* 
PAra que quede los links de navegación tenes un componente que se llama:
!LINK:
 */

import React from "react";
import { Link } from "react-router-dom"; /* se importa el componente LINK */

export default function NavBar() {
  return (
    <div className="nav-bar">
      <h2>Barra de navegación</h2>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>{" "}
      {/* Acá le decía que cuando haces click en el link te lleva al path que le indicas. Como ya definiste que mostrabaa cada uno, cuando lo clickeas se renderiza lo que ya habías definido. Esto siempre es navegación interna.*/}
      <Link to="/Ejemplo">Ejemplo</Link>
    </div>
  );
}

// OTro ejemplo:
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      Hola, Soy Henry!!
      <a href="#/lista">Link normal a Lista</a>
      <Link to="/lista">Link de react-router a Lista</Link>
      <Link to="/">Link de react-router a Home</Link>
    </div>
  );
} /* el tema es q le tenemos q dar ESTILO!
Para darle estilos tenemos el:
*/

/* Con el LINK te intenta llevar al to que indicas: EJEMPLO:  */
<Link to="/Sensitive">Sensitive Mayus</Link>;

/* Entonces va al Router y chequea con cuál coincide de los Route a los que se les indica el path. EJEMPLO: */
<Route path="/sensitive">
  <h2>No Sensitive</h2>
</Route>;

/* Adentro de los Route puede meter componentes o lo que quiera. */
/*
!ROUTER: es HashRouter: abraza a todos los Route
!SWITCH va revisando todas las rutas para ver que lo último coincida con el url que pasaste. Matchea con el primero que coincide con la url que se escribe. Si coincide lo renderiza lo que este adentro del Route.
!EXACT PATH: indica que el path tiene que hacer un match exacto. No le podes agregar nada al path tiene que ser exactamente igual. EXACTO TAMBIÉN ES ESTRICTO. ES MÁS RESTRICTIVO QUE EL STRICT
!STRICT PATH: es parecido el exact, pero además las barritas tienen que estar iguales. No le importa que venga una barrita detrás.
!SENSITIVE PATH: lo hace sensible a mayúscula y minúscula.

/*
!NAVLINK:
Hace que cuando clickes el link le active el estilo que le haya pasado. Puedo hacer inline styling
*/
function Home2() {
  return (
    <div>
      <a href="#/lista">Link normal a Lista</a>
      <NavLink to="/lista" activeClassName="active">
        Link de react-router a Lista
      </NavLink>
      <NavLink to="/" activeClassName="active">
        Link de react-router a Home
      </NavLink>
    </div>
  ); {/* Los NavLink solo pueden recibir activeClassName o  activeStyle*/}
}
  /* Usando el ejemplo anterior de about: */

import React from "react";
import { Link } from "react-router-dom"; /* se importa el componente LINK */

export default function NavBar() {
  return (
    <div className="nav-bar">
      <h2>Barra de navegación</h2>
      {/* <NavLink to="/">Home</NavLink> */}
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/about" activeClassName="selected">About</NavLink>
      <NavLink to="/ejemplo" activeStyle={{}}>Ejemplo</NavLink>
    </div>
  );
}
/*
activeClassName: si le queremos pasar una clase
activeStyle: si le queremos pasar un inline style
exact: solo se activa si estoy parado exactamente sobre esa ruta
*/

/* Con Navlink le podemos dar éstilos a nuestros links:*/

// Si no le metes clase específica con estilo (activeClassName)  le mete una por default (active).

export default function NavBar() {
  return (
    <div className="nav-bar">
      <h2>Barra de Navegación</h2>
      {/* <NavLink to="/">Home</NavLink> */}
      <NavLink exact to="/">
        Home
      </NavLink>
      <br></br>
      <NavLink to="/about" activeClassName="selected">
        About
      </NavLink>
      <br></br>
      <NavLink to="/abouttt">Abouttt</NavLink>
      <br></br>
      <NavLink to="/aboutttttt">Aboutttttt</NavLink>
      <br></br>
      <NavLink to="/about/other">About Other</NavLink>
      <br></br>
      <NavLink
        to="/ejemplo"
        activeStyle={{
          color: "green",
        }}
      >
        Ejemplo
      </NavLink>
    </div>
  );
}

// USANDO RENDER PARA PASAR FUNCION CON PARAMETROS:

function Home() {
  return (
    <div>
      <h2>Home, Soy Henry!!</h2>
    </div>
  );
}

const Root = (
  <Router>
    <NavBar />
    <Route path="/" render={(props) => <Home info={props} />}>
      <Home />
    </Route>  </Router>
);

/*
!PROPIEDADES DE LOS ROUTER  */
render(Root, document.querySelector("#app"));
/* En props tiene info con 3 propiedades: location, history y match que las podemos destructurar y usar */
// con destructuring:


function Home2() {
  return (
    <div>
      <h2>Home, Soy Henry!!</h2>
    </div>
  );
}

const Root2 = (
  <Router>
    <NavBar />
    <Route
      path="/"
      render={({ location, match }) => (
        <Home location={location} match={match} />
      )}
    ></Route>
  </Router>
);

render(Root2, document.querySelector("#app"));

/* PODEMOS USAR ESTAS PROPIEDADES: */
/* El match tiene las propiedades isExact, params, path y url.
El params es el más importante. */

function Home3(props) {
  console.log(props);
  return (
    <div>
      <h2>Home, Soy Henry!! Soy la instructura nro: {props.match.params.id }</h2>
    </div>
  );
}

const Root3 = (
  <Router>
    <NavBar />
    <Route
      path="/:id" /* Acá le aclaro que va a recibir un parámetro por URL. Puede ser cualquier cosa aparte de id. Los : sí son reservados. El match en params espera el parametro id que es la info que recibimos por parametro en el path.  */
      render={({ location, match }) => (
        <Home location={location} match={match} />
      )}
    ></Route>
  </Router>
);

render(Root, document.querySelector("#app"));

/* El match te permite mandar información por la URL. Podría tener un card que al hacerle click me redireccione al detalle de un elemento. */

// Lo mismo puede hacerse con una ciudad:

function Home4(props) {
  console.log(props);
  return (
    <div>
      <h2>
        Home, Soy Henry!! Es la ciudad: {props.match.params.ciudad}
      </h2>
    </div>
  );
}

const Root4 = (
  <Router>
    <NavBar />
    <Route
      path="/:ciudad" /* La propiedad de params pasa a llamarse ciudad pq lo indico acá. Esta info se la mando al componente Home que recibe esta info en la propiedad match que le llegó por props. Si en la url escribimos al final buenos aires http://127.0.0.1:5500/demo/demo-basic/dist/index.html#/buenosaires entonces la propiedad ciudad de match es buenosaires. CON ESTO PUEDO HACER UN FETCH YA QUE TENGO EL NOMBRE DE LA CIUDAD!! ARRIBA!*/
      render={({ location, match }) => (
        <Home location={location} match={match} />
      )}
    ></Route>
  </Router>
);

render(Root, document.querySelector("#app"));

/* Gracias a la propiedad ciudad que le pongo al match del link puedo hacer lo siguiente:
{props.match.params.ciudad} y con esto puedo hacer lo que quiera!! */

function App() {
  /* ciudades empieza como arreglo vacío */
  const [cities, setCities] = useState([]);
  let apiKey = "4ae2636d8dfbdc3044bede63951a019b";
  /* Se puede usar axios pero tene que importarlo. */
  function onSearch(ciudad) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${props.match.params.ciudad}&appid=${apiKey}&units=metric`
    ) /* te busca la info de la ciudad que pediste por la URL */
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            name: recurso.name,
            weather: recurso.weather[0].main,
          };
          setCities((previousCities) => [
            ...previousCities,
            ciudad,
          ]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
}

/* SE PUEDE HACER UNA BÚSQUEDA POR QUERY en la URL con el signo de pregunta:

http://127.0.0.1:5500/demo/demo-basic/dist/index.html#/londres?name=martina

entonces el search va a tener una propiedad que es el name y value martina

Le puedo agregar preguntas con &:

http://127.0.0.1:5500/demo/demo-basic/dist/index.html#/londres?name=martina&lastname=scomazzon
*/

/* En la propiedad:
!HISTORY
tenes muchas propiedades:
action, block, go, goBack, goFoward, length, push, replace.

GOBACK Y GOFOWARD SON LOS MÁS IMPORTANTES*/

/*
!USEPARAMS:
Tenemos hooks para acceder a las propiedad de history, location y match.

Sabemos como obtener la info del params. Ahora hay que usarla!  */
import React from "react";
import { render } from "react-dom";
import { useParams } from "react-router-dom";

export default function Mostrar(props) {
  console.log(props);
  let params = useParams(); /* HOOK USEPARAMS */
  return (<span>Estoy en la ciudad {params.ciudadId}</span>)
} /* a lo que accede acá es Object {ciudadIdd: 5} */



import React from "react";
import { render } from "react-dom";
import { Route, Switch, useParams, HashRouter as Router } from "react-router-dom";

function Home5(props) {
  console.log(props);
  let params = useParams();
  /* El useParams termina alojando el match Params pasa a ser un objeto con los parámetro. Ahora va a tener id, ciudad y nombre que se ingresan a través de la URL gracias a: path="/:id /:ciudad/:nombre" En la variable params se aloja todos los parametros que se agregó en el path y que luego se escriben en la url */

  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${props.match.params.id}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((response_json) => {
      console.log(response_json);
    });

  return (
    <div>
      <h2>Home, Soy Henry!! Es la ciudad: {props.match.params.id}</h2>
    </div>
  );
}

const Root5 = (
  <Router>
    <NavBar />
    <Route
      path="/:id /:ciudad/:nombre"
      render={({ location }) => (
        <Home location={location} />
      )}
    ></Route>
  </Router>
);

/*
! LO MISMO CON PARAMS SE PUEDE HACER CON useHistory y UseLocation */

import React from "react";
import { useLocation } from "react-router-dom";

export default function Location() {
  let location = useLocation();
}

import React from "react";
import { useHistory } from "react-router-dom";

export default function Location() {
  let history = useLocation();
}

/*
!NESTED ROUTING:
Se puede anidar el routeo. El componente padre puede tener sus links y los componentes hijos sus propios links.
*/
import React from 'react';
import { render } from 'react-dom';
import { Route, Switch, Link, HashRouter as Router, useRouteMatch } from 'react-router-dom';

function NavBar() {
  return (
    <div className="nav-bar">
      <h2>Barra de Navegación</h2>
      <Link to="/">Default</Link>
      <br></br>
      <Link to="/home">Home</Link>
    </div>
  );
};

function Home() {
  let match = useRouteMatch();
  return (
    <div>
      <h2>Home, Soy Henry!!</h2>
      <Link to='/linkAbsolute'>Link Absolute</Link>
      <br></br>
      <Link to={`${match.url}/linkRelative`}>Link Relative</Link>

      {/* <Switch>
        <Route path={`${match.url}/linkRelative`}>
          <h2>Estoy en /home/linkRelative 2</h2>
        </Route>
      </Switch> */}
    </div>
  );
};


const Root1 = (
  <Router>
    <NavBar />
    <Switch>
      <Route path="/home/linkRelative">
        <h2>Estoy en /home/linkRelative</h2>
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/">
        <h2>Default</h2>
      </Route>
    </Switch>
  </Router>
);

render(Root1, document.querySelector('#app'));

/*
!PROMPT
Componente que nos va a permitir mostrar un pop-up de confirmación si el usuario quiere irse del path actual.  */

<Promp
  when={condition} /* determina si se muestra el prompt o no. */
  message="Are you sure you want to leave?"
/> /* Permite generar pop-up o alert para que confirmen si quieren salir del window en el que están. */

/*
!REDIRECT:
Componente que al renderizarse nos redirige hacia a un nuevo path o ruta*/

{/* <Route exact path="/">
    {loggedIn ? <>Redirect to ="/dashboard"/> : <PublicHomePage/>}
</Route> */}

/* Te dice esta logeada la persona? Si es true renderiza el dashboard de lo contrario renderiza PublicHomePage */

// EJEMPLO:

import React from 'react';
import { render } from 'react-dom';
import { Route, Switch, Redirect, HashRouter as Router } from 'react-router-dom';

import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import New from './New.jsx'
import Profile from './Profile.jsx';

const Root6 = (
  <Router>
    <NavBar />
    <Switch>
      <Redirect from="/old-from" to="/new-from" /> {/* si venís de aca anda a allá */}
      {/* <Redirect from="/users/:id" to="/users/profile/:id" /> */}
      <Redirect exact from="/users/:id" to="/users/profile/:id" />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/old/object">
        <Redirect to={{ /* el to te dice adonde te redirige */
          pathname: "/new",
          search: "?name=Franco",
          state: {name: "Henry"}
        }} />
      </Route>
      <Route path="/old">
        <Redirect to="/new" />
      </Route>
      <Route path="/new">
        <New />
      </Route>
      <Route path="/new-from">
        <h2>New From</h2>
      </Route>
      <Route path="/users/profile/:id">
        <Profile />
      </Route>
      <Route path="/">
        <h2>Default if no match</h2>
      </Route>
    </Switch>
  </Router>
);

render(Root, document.querySelector('#app'));