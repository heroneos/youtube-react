export default function Menu () {

    const menuItems = [ 
        {icon: "🏠", text: "Home"},
        {icon: "🩳", text: "Shorts"},
        {icon: "🕰️", text: "Subscriptions"},
        {icon: "⭐", text: "Favorites"},
    ];

    return (
      <aside id="menu"> 
        {menuItems.map((item) => {
                return (
                <div key={"menu-item-${item.text}"} className="menu-item">
                    <span> {item.icon} </span>
                    <span> {item.text} </span>
                </div>
                );
            })}
      </aside>
    );
}