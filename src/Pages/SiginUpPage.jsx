import React from "react";
import Header from '../components/Header1/index.jsx'
import SignUpDiv from "../components/SignUpDiv";

export default function SignUpPage() {
    return (
        <div className="SignUp-content">
            <Header />
            <div className="bodyContainer">
                <SignUpDiv />
            </div>
        </div>
    )
}