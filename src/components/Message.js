const Message = ({me}) => {
    return ( 
        <div className={me ? 'Message--me': 'Message'}>
            <img src="https://picsum.photos/50" alt="" className="Message__profile Profile" />
            <p className={me ? 'Message__text--me': 'Message__text'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae molestiae blanditiis explicabo illo saepe, voluptatibus totam veniam optio veritatis accusantium, mollitia minima eveniet laboriosam. Sequi architecto ad itaque autem maiores.</p>
        </div>
     );
}
 
export default Message;