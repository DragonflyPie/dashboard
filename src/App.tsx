import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";

import Team from "./scenes/team/Team";
import Faq from "./scenes/faq/Faq";
import Pie from "./scenes/pie/Pie";
import Line from "./scenes/line/Line";
import Invoices from "./scenes/invoices/Invoices";
import Contacts from "./scenes/contacts/Contacts";
import Geography from "./scenes/geography/Geography";
import Form from "./scenes/form/Form";
import Bar from "./scenes/bar/Bar";
import Calendar from "./scenes/calendar/Calendar";

function App() {
  const { theme, colorMode } = useMode();

  return (
    <ProSidebarProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/form" element={<Form />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ProSidebarProvider>
  );
}

export default App;
