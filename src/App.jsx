import { Routing } from "./routes/Routing";
import SessionProvider from "./context/SessionProvider.jsx";
import FavoritesProvider from "./context/FavoritesProvider.jsx";


export function App() {
  return (
    <SessionProvider>
      <FavoritesProvider>
        <Routing />
      </FavoritesProvider>
    </SessionProvider>
  );
}

export default App;
