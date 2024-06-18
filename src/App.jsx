import { lazy } from "react";
import "./App.css";
import {
  
  Button,
  VStack,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";

const Maincontent = lazy(() => import("./layouts/Maincontent"));
function App() {

  const handleReload = () => {
    window.location.reload();
  };
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <>
              <VStack spacing={4} align="center" justify="center" h="100vh">
                <Spinner size="xl" />
                <Button onClick={handleReload} colorScheme="teal">
                  Reload
                </Button>
              </VStack>
            </>
          }
        >
          <Routes>
            <Route path="*" element={<Maincontent />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
