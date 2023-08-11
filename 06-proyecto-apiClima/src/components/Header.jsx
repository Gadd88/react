

const Header = ({titulo}) => {
  return (
    <nav>
        <div 
            className="nav-wrapper light-blue darken-w">
            <a 
                href="#!" className="brand-logo">{titulo}</a>
        </div>
    </nav>
  )
}

export default Header
