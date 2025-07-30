
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import OtpVerify from './components/OtpVerify'
import CreatePassword from './components/CreatePassword'
import Register from './components/Register'
import { Topbar } from './components/Topbar'
import { Login } from './components/Login'
import WalletBankCard from './components/WalletBankCard'
import WalletHistory from './components/WalletHistory'
import { SlotBookingFinal } from './components/SlotBookingFinal'
import Profile from './components/Profile'
import { Home } from './components/Home'
import Events_upcoming from './components/Events_upcoming'
import Events_complete from './components/Events_complete'
import Profile_edit from './components/Profile_edit'



function App() {
  return (
    <Router>
      <Routes>

         
        <Route path="/" element={<Register />} />


        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OtpVerify />} />
        <Route path="/create-password" element={<CreatePassword />} />
        {/* <Route path="/" element={<WalletHistory />} />  */}
      
        
        <Route 
                  path="/Events_upcoming" 
                  element={
                    <>
                      <Topbar />
                      <Events_upcoming/>
                    </>
                  } 

                />

        <Route 

          path="/Events_complete" 
          element={
            <>
              <Topbar />
              <Events_complete/>
            </>
          } 

        />
        <Route
          path="/profile"
          element={
            <><Topbar /><Profile /></>} />



        <Route path="/profile/edit" element={<><Topbar /><Profile_edit/></>} />

        <Route path="/home" element={<><Topbar /><Home /></>} />

        <Route path="/Wallet-Bank-Card" element={<><Topbar /><WalletBankCard /></>} /> 
        <Route path="/wallet-history" element={<><Topbar /><WalletHistory /></>} /> 
      
        <Route path="/slot" element={<><Topbar /><SlotBookingFinal /></>} />


      </Routes>
    </Router>
  );
}

export default App;
