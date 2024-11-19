function Header() {
    return (
        <header style={headerStyles}>
            <h1 >Task Application</h1>
        </header>
    );
}

export default Header;

const headerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#333', 
    color: 'white',
    height: '80px', }
