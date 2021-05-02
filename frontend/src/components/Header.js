const styling = {
    backgroundColor: '#3A3758',
    padding: '30px',
    color: '#ffffff',
    fontSize: '40px'
}

function Header({ title }) {
    return (
        <div className='header' style={styling}>
            <img className='logo' width='75px' height='100px' src="https://cdn.discordapp.com/attachments/830332306619105300/838186891161108550/port1.jpg" alt="coffeemachinebroke"></img>
            <p>{title}</p>
        </div>
    )
}

export default Header
