import CssBaseline from "@mui/material/CssBaseline";
import AppRouter from "./router/AppRouter";
import {createTheme, ThemeProvider} from "@mui/material/styles"
import { green, pink} from "@mui/material/colors";
import store, { persistor } from  "./app/store"
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
function App() {
  const theme = createTheme({
    palette:{
      primary:{
        main:green["900"]
      },
      secondary:{
        main:pink["900"]
      }
    }
  })
  return (
    
    <ThemeProvider theme={theme}>
      <Provider store= {store}>
         <CssBaseline/>
<PersistGate loading={null} persistor={persistor}>
  <AppRouter/>
</PersistGate>
   
 </Provider>
   
     
   
    </ThemeProvider>
  
  );
}
export default App;