import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import FlashMessage from "../components/FlashMessage";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store";


function Layout() {
  const flashMessage = useSelector((state) => state.flashMessage);
  const dispatch = useDispatch();
  
    const handleFlashClose = () => {
      dispatch(actions.setFlashMessage(null));
    }

    return (
      <>    <div >
        {/*style={{position: "fixed", width: "100%", top:"0px"}}*/}
             <Navbar></Navbar>
            </div>
            {flashMessage && <FlashMessage message={flashMessage} onClose={handleFlashClose} />}
            <div >
              {/*style={{marginTop:"60px"}}*/}
              <Outlet></Outlet>
            </div>
      </>
    );
  }
  
  export default Layout;
  