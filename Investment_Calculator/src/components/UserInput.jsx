export default function UserInput({ onUserInputChange, userInput }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="">Initial Investment</label>
                    <input
                        type="number"
                        value={userInput.initialInvestment}
                        onChange={(event) => onUserInputChange(event.target.value, "initialInvestment")}
                        required
                    />
                </p>
                <p>
                    <label htmlFor="">Annual Investment</label>
                    <input
                        type="number"
                        value={userInput.annualInvestment}
                        onChange={(event) => onUserInputChange(event.target.value, "annualInvestment")}
                        required
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="">Expected Return</label>
                    <input
                        type="number"
                        value={userInput.expectedReturn}
                        onChange={(event) => onUserInputChange(event.target.value, "expectedReturn")}
                        required
                    />
                </p>
                <p>
                    <label htmlFor="">Duration</label>
                    <input
                        type="number"
                        value={userInput.duration}
                        onChange={(event) => onUserInputChange(event.target.value, "duration")}
                        required
                    />
                </p>
            </div>
        </section>
    );
}
