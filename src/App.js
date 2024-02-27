import { ThemeProvider } from 'styled-components';
import { theme } from 'style/theme';
// import { GlobalStyle } from 'style/GlobalStyle';
import { GlobalStyle } from 'style/GlobalStyle';
// import RoutesComponent from 'routes';
// import GlobalProvider from 'utils/GlobalContext';
// import TemplatesGlobal from 'templates/TemplatesGlobal';
// import UserSettingsProvider from 'utils/ContextSettingsUser';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      hello
    </ThemeProvider>
  );
}
export default App;

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <GlobalStyle />
//       <GlobalProvider>
//         <UserSettingsProvider>
//           <TemplatesGlobal>
//             <RoutesComponent />
//           </TemplatesGlobal>
//         </UserSettingsProvider>
//       </GlobalProvider>
//     </ThemeProvider>
//   );
// }
// export default App;
