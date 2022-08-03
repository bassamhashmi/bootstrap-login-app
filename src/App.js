import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import LoginForm from "./components/Login/LoginForm";
import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="container ">
                <div
                    className="row align-items-center"
                    style={{ minHeight: "100vh" }}
                >
                    <div className="col-4 offset-4">
                        <Image
                            src="\assets\img\bootstrap-solid.svg"
                            width="80px"
                            className="mx-auto d-block"
                            alt="bootstrap logo"
                        />
                        <h1
                            className="text-center"
                            style={{ marginTop: "20px" }}
                        >
                            Sign In Page
                        </h1>
                        <p
                            className="text-center"
                            style={{ marginTop: "20px" }}
                        >
                            Build a sign-in page to display your command on
                            bootstrap. <span>Text with color red</span>{" "}
                            pseudo-element.
                        </p>

                        <p className="text-center">
                            <a
                                href="https://www.google.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Works in latest Chrome, Safari and Firefox. This
                                is a clickable section that will take us to a
                                new page.
                            </a>
                        </p>

                        <LoginForm />

                        <p class="mt-5 mb-3 text-muted text-center">
                            © 2017-2022
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
