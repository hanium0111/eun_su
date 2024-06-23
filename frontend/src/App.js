import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import PromptInput from './components/PromptInput';
import TemplateSearch from './components/TemplateSearch';
import TemplateList from './components/TemplateList';
import Menu from './components/Menu';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Header />
        <div className="container">
          <PromptInput />
          <TemplateSearch />
          <TemplateList />
        </div>
        <Menu />
      </div>
    </ChakraProvider>
  );
}

export default App;
