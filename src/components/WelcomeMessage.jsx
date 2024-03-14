const WelcomeMessage = ({ onGetPostClicked }) => {
    return <center className="welcomeMessage">
                <h2>There are no posts</h2>
                <button type="button" onClick={onGetPostClicked} className="btn btn-primary">Get posts from server</button>
            </center>;
}

export default WelcomeMessage;