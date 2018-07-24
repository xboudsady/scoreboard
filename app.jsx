function Application() {
    return (
        <div className="application">
            <div className="header">
                <h1>Scoreboard</h1>
            </div>

            <div className="players">
                <div className="player">
                </div>
            </div>
        </div>
    );
}



ReactDOM.render(<Application />, document.getElementById('container'));