import './Footer.css';

const Footer = ( { numOfItems } ) => {

    const today = new Date();

    return(

        <footer>
            <p>
                { numOfItems } list of { numOfItems === 1 ? 'item' : 'items' }
            </p>

            <p>
            Copyright &copy; {today.getFullYear()}
            </p>
        </footer>

    )

}

export default Footer;
