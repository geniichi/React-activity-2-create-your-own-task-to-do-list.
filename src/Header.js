
const Header = ( {title, tryThis} ) =>{

    return(
            <header> 
                
              <h1>
                {title}   
              </h1>  

   
            </header>
    )


}

Header.defaultProps = {
  title : 'My deafault title'

}  

export default Header;