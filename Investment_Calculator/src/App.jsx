import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const inputIsValid = userInput.duration >= 1;

    function handleUserInputChanger(newValue, inputIdentifier) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: Number(newValue),
            };
        });
    }

    return (
        <main>
            <Header />
            <UserInput
                onUserInputChange={handleUserInputChanger}
                userInput={userInput}
            />
            {inputIsValid && <Results userInput={userInput} />}
            {!inputIsValid && <p className="center">Please enter a duration greater than 0</p>}
        </main>
    );
}

export default App;
