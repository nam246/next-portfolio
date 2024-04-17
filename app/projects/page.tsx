
export default function Projects() {

    const items = [
        {
            name: "bloodflame.vn",
            url: "https://bloodflame.vn/",
            image: "./gallery/Screenshot1.png",
        },
        {
            name: "poohhousebridal.com",
            url: "https://poohhousebridal.com/",
            image: "./gallery/Screenshot2.png",
        },
        {
            name: "lepetitmusee.edu.vn",
            url: "https://lepetitmusee.edu.vn/",
            image: "./gallery/Screenshot3.png",
        },
        {
            name: "acecafe.vn",
            url: "https://acecafe.vn/",
            image: "./gallery/Screenshot4.png",
        },
    ]

    return (
        <div className="wrapper">
            <div className="page-header">
                <h1>PROJECTS</h1>
            </div>
            <div className="gallery grid grid-cols-2 gap-5">
                {
                    items.map((item, index) => (
                        <div key={index} className="item rounded overflow-hidden shadow-black border">
                            <a href={item.url} className="block">
                                <div className="img">
                                    <img src={item.image} alt={item.name} />
                                </div>
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}