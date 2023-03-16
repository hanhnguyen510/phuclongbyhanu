import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoute } from '~/Routes';
import { Fragment } from 'react';
import DefaultLayout from '~/Layout/DefaultLayout';
import UserAuthContext from './context/UserAuthContext';
import { privateRoute } from './Routes';
function App() {
    return (
        <UserAuthContext>
            <Router>
                <div className="App">
                    <Routes>
                        {/* public route */}
                        {publicRoute.map((route, index) => {
                            const Page = route.component;
                            let Layout = DefaultLayout;
                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                        {/* private route */}
                        {privateRoute.map((route, index) => {
                            const ProtectedRoute = route.protected;
                            const Page = route.component;
                            let Layout = DefaultLayout;
                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <ProtectedRoute>
                                                <Page />
                                            </ProtectedRoute>
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </UserAuthContext>
    );
}

export default App;
