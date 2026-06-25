// // import JSXBasics from "./concepts/JSXBasics";
// // import UserCard from "./concepts/Props";
// // import Event from "./concepts/Event";
// // import TechnologySel from "./concepts/EventObject";
// // import InputEvent from "./concepts/InputEvent";
// // import Counter from "./concepts/UseState_01";
// // import NameChanager from "./concepts/useState/UseState_02";
// // import InputChange from "./concepts/useState/UseState_03";
// // import DarkMode from "./concepts/useState/DarkModePra";
// // import CharacterCounter from "./concepts/useState/CharacterCounter";
// // import IsloggedIn from "./concepts/conditionRe_01";
// // import CourseLists from "./concepts/MapMethod";
// // import EmployeesList from "./concepts/ArrObjRender";
// // import UserForm from "./concepts/UserForm";
// // import RegistrationForm from "./concepts/RegistrationForm";
// // import FormSubmit from "./concepts/FormSubmit";
// // import UseEffectBasics from "./concepts/useEffect/UseEffectBasics";
// // import ThemeToggle from "./concepts/useEffect/ThemeToggle";
// // import HandleTimer from "./concepts/useEffect/Handletimer";
// // import UserList from "./concepts/api/UserList";
// // import SearchUser from "./search user/projects/SearchUser";

// function App() {
//   return (
//     <>
//       {/* JSX basic */}
//       {/* <JSXBasics />; */}

//       {/* // Props */}
//       {/* <UserCard name="Rahul"
//         age="20"
//         course="B.Tech" />
//       <UserCard name="Antrral"
//         age="20"
//         course="IT" /> */}

//       {/* // events  */}
//       {/* <Event title="React" mentor="Thapa Technical"/> */}
//       {/* <Event course="NodeJs" /> */}

//       {/* Event Object */}
//       {/* <TechnologySel /> */}

//       {/* input handle event  */}
//       {/* <InputEvent /> */}

//       {/* useState concept  */}
//       {/* <Counter /> */}
//       {/* <NameChanager /> */}
//       {/* <InputChange /> */}
//       {/* <DarkMode /> */}
//       {/* <CharacterCounter /> */}

//       {/* conditional Rendering  */}
//       {/* <IsloggedIn name="mayur" /> */}

//       {/* // Map Method for Data Rendering and Key In React*/}
//       {/* < CourseLists /> */}

//       {/* // Array Object Rendering  */}
//       {/* <EmployeesList /> */}


//       {/* // useState and onChnage ----> user Form */}
//       {/* <UserForm /> */}

//       {/* Registration Form  */}
//       {/* <RegistrationForm /> */}

//       {/* // form basic  */}
//       {/* <FormSubmit /> */}

//       {/* useEffect Concept  */}
//       {/* <UseEffectBasics /> */}
//       {/* <ThemeToggle /> */}

//       {/* cleanup function return  */}
//       {/* <HandleTimer /> */}

//       {/* API call  */}
//       {/* <UserList /> */}

//       {/* // Search feartures Implementation */}
//       <SearchUser />
//     </>


//   );
// }

// export default App;




// React Router 
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./concepts/router/Navbar";

// import Home from "./concepts/router/pages/Home";
// import About from "./concepts/router/pages/About";
// import Contact from "./concepts/router/pages/Contact";
// import User from "./concepts/router/pages/User";

// function App() {
//   return (
//     <BrowserRouter>

//       <Navbar />

//       <Routes>

//         <Route path="/" element={<Home />} />

//         <Route path="/about" element={<About />} />

//         <Route path="/contact" element={<Contact />} />

//         <Route
//           path="/user/:id"
//           element={<User />}
//         />

//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default App;


// =============================================================================

// React router project 

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./concepts/router/Navbar";

import UserList from "./projects/router_api-project/UserList";
import User from "./concepts/router/pages/User";

import Home from "./concepts/router/pages/Home";
import About from "./concepts/router/pages/About";
import Contact from "./concepts/router/pages/Contact";
import NotFound from "./concepts/router/pages/NotFound";

function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/users"
          element={<UserList />}
        />

        <Route
          path="/user/:id"
          element={<User />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;