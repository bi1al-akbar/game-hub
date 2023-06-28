import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme.ts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode}></ColorModeScript> {/* https://chakra-ui.com/docs/features/color-mode#using-the-color-mode-provider */ }
			<App />
		</ChakraProvider>
	</React.StrictMode>
);
