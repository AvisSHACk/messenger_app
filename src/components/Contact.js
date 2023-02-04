const Contact = ({active}) => {
    return ( 
        <div className={active ? 'Contact active' : 'Contact' }>
            <img className="Contact__profile" src="https://picsum.photos/50" alt="" />
            <div className="Contact__info">
                <h4 className="Contact__name">Daniela</h4>
                <p className="Contact__lastmessage">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
        </div>
     );
}
 
export default Contact;