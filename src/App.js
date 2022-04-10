import * as S from './AppStyles.js';
import { Count, MirrorCount } from './Components/index.js';
import { CountProvider } from './context/useCount/index.js';

function App() {
  return (
    <div className="App">
      <CountProvider>
        <Count />
        <S.hr />
        <MirrorCount />
      </CountProvider>
    </div>
  );
}

export default App;
