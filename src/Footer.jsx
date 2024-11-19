function Footer({ length }) {

    return (
        <footer className="footer">
            <h1>{length} {length == 1 ? 'task' : 'tasks'}</h1>
        </footer>
    );
}

export default Footer;
