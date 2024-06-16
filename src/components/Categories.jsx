export default function Categories() {
    const categories = [
        "All",
        "Music",
        "Videogames",
        "Code",
        "Programming",
        "Life Style",
        "Sports",
        "Movies",
    ]
    return (
        <div id="categories-list">
            {categories.map((category) => {
                    return (
                        <span key={"category-${category}"} className="category">
                            {category}
                        </span>
                    );
                })}
        </div>
    );
}