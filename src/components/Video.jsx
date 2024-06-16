export default function Video({ image, title, channel }) {
    return (
    <article className="video-card">
        <img src={image} alt="" />
        <footer>
            <img src={"https://api.dicebear.com/8.x/identicon/svg?seed=${channel}"}
            alt=""
        />
            <span className="video-card-title"> {title} </span>
            <span className="video-card-channel"> {channel} </span>
        </footer>
    </article>
    );
}