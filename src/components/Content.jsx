import Categories from "./Categories";
import Video from "./Video";

export default function Content() {

    const videos = [
      {
        image: "https://i.ytimg.com/vi/QwLxvny0FAM/hq720_live.jpg?sqp=CPTos7MG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBsxfuWk_BwEv0ffyqhhTCBy-jgdA", 
        title: "Final Kombat - Last Chance Qualifier - Pools", channel: "Mortal Kombat",
      },
      {
        image: "https://i.ytimg.com/vi/FUqE3Y3ZMF0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCcfVwXtDZq9uyFV_p29yhlsCRq7w", 
        title: "The King of Fighters Battles", channel: "Canal 1",
      },
      {
        image: "https://i.ytimg.com/vi/tFK9dPJKbY4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDP8gMi5_LfZCla040cXhWZR8YX2A", 
        title: "Yu-Gi-Oh Duels", channel: "Canal 2",
      },
      {
        image: "https://i.ytimg.com/vi/ehaoGaH0HGU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAaWXQFO2ibXREpJPr4GgIsbQayZw", 
        title: "CUPHEAD, Don't Deal with the devil", channel: "Canal 3",
      },
    ];

    return (
    <section id="content">
        <Categories />
        <section id="videos">
            {videos.map((video) => {
                return (
                    <Video 
                      key={"video-${video.title}"}
                      image={video.image}  
                      title={video.title}
                      channel={video.channel}
                    />
                );
            })}
        </section>
    </section>
    );
}