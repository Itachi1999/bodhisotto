import './App.css'
import Router from './Router';
import { Notifications } from "@mantine/notifications";
import { MantineProvider, ModalContent } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

const App = () => {
    return (
        <MantineProvider defaultColorScheme='dark' >
            <ModalsProvider>
                <Router />
                <Notifications position="top-right" />
            </ModalsProvider>
        </MantineProvider>
    )
};
export default App;
