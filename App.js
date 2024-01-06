// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { createRoot } from 'react-dom/client';
// import Dashboard from './components/Dashboard';
// // import Sidebar from './components/side';
// // import Navbar from './components/Navbar';
// import FollowupPage from './FollowupPage';
// import './FollowupPage.css';
// import './App.css';

// function App() {
//   return (
//     // <Router>
//     //   <div className="app">
//     //     <Sidebar />
//     //     <div className="content">
//     //       <Navbar />
//     //       <Routes>
//     //         <Route path="/" element={<Dashboard />} />
//     //       </Routes>
//     //     </div>
//     //   </div>
//     // </Router>
//     <FollowUpPage />
//   );
// }

// export default App;
// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import FollowupPage from './FollowupPage';
// import Dashboard from './components/Dashboard';
// import './App.css';


// const App = () => {
//   return (

//     <Router>
//       <Routes>
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/followup" element={<FollowupPage />} />
//       </Routes>
//     </Router>

//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Dashboard />
//       <FollowupPage />
//     </div>
//   );
// }
// App.js
// import React from 'react';
// // Update the import statement to include Routes instead of Switch
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// import MainLayout from '../src/components/components2/MainLayout';
// import Records from '../src/components/components2/records';
// import Dashboard from '../src/components/Dashboard';

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/records">
//         <MainLayout>
//           <Records />
//         </MainLayout>
//       </Route>
//       <Route path="/dashboard">
//         <MainLayout>
//           <Dashboard />
//         </MainLayout>
//       </Route>
//       {/* Add routes for other pages as needed */}
//     </Routes>

//   );
// };

// export default App;


// export default App;



// // App.js
import React from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components2/MainLayout'
import Login from './components2/Login';
import Records from './components2/records';
import Dashboard from './components/Dashboard';
import FollowupPage from './components2/FollowupPage';
import Home from './components2/Home';
import Signin from './components2/Signin';
import Sidebar from './components2/Siebar';
import ForgotPassword from './components2/Forgot';
import BuyersPage from './components2/buyerspage';
import SellerDetailForm from './components2/SellerDetailForm';
import Logout from './components2/logout';
import SellersPage from './components2/Sellerpage';

const App = () => {
  return (

    <>
      <div style={{ display: "flex", height: "100vh" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/sellerpage" element={<><MainLayout /> <Sidebar /> <SellersPage /></>} />
            <Route path="/records" element={<><MainLayout /> <Sidebar /> <Records /></>} />
            <Route path="/dashboard" element={<><MainLayout /> <Sidebar /> <Dashboard />  </>} />
            <Route path="/followup" element={<> <MainLayout /> <Sidebar />  <FollowupPage /></>} />
            <Route path="/home" element={<> <MainLayout /> <Sidebar /> <Home /> </>} />
            <Route path="/buyers" element={<> <MainLayout /> <Sidebar /> < BuyersPage /> </>} />
            <Route path="/logout" element={<Logout />} />
            {/* Add routes for other pages as needed */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;

