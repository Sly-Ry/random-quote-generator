function App(){

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState("");
    const [color, setColor] = React.useState("#FFF5EE");

    React.useEffect(() => {
        async function fetchData(){
            const response = await fetch("https://type.fit/api/quotes");
            const data = await response.json();

            setQuotes(data);

            let randoIndex = Math.floor(Math.random() * data.length);
            
            setRandomQuote(data[randoIndex]);
            
        };
        fetchData();
    }, []);

    const getNewQuote= () => {
        const colors = [
            // Reds
            "#F08080",
            "#FA8072",
            "#E9967A",
            "#FFA07A",
            "#DC143C",
            "#FF0000",
            "#B22222",
            "#8B0000",
            // Pinks
            "#FFC0CB",
            "#FFB6C1",
            "#FF69B4",
            "#FF1493",
            "#C71585",
            "#DB7093",
            // Oranges
            "#FF7F50",
            "#FF6347",
            "#FF4500",
            "#FF8C00",
            "#FFA500",
            // Yellows
            "#FFD700",
            "#FFFACD",	
            "#FAFAD2",
            "#FFEFD5",	
            "#FFE4B5",	
            "#FFDAB9",	
            "#EEE8AA",
            "#F0E68C",	
            "#BDB76B",
            // Purples
            "#E6E6FA",	
            "#D8BFD8",	
            "#DDA0DD",	
            "#EE82EE",
            "#DA70D6",
            "#FF00FF",
            "#FF00FF",
            "#BA55D3",
            "#9370DB",
            "#8A2BE2",
            "#9400D3",
            "#9932CC",
            "#8B008B",
            "#800080",
            "#663399",
            "#7B68EE",
            "#6A5ACD",
            "#483D8B",
            // Greens
            "#7FFF00",
            "#7CFC00",
            "#00FF00",
            "#98FB98",
            "#90EE90",
            "#00FA9A",
            "#00FF7F",
            "#3CB371",
            "#2E8B57",
            "#228B22",
            "#008000",
            "#006400",
            "#9ACD32",
            "#6B8E23",
            "#808000",
            "#556B2F",
            "#66CDAA",
            "#8FBC8F",
            "#20B2AA",
            "#008B8B",
            "#008080",
            // Blues/Cyans
            "#00FFFF",
            "#AFEEEE",
            "#40E0D0",
            "#48D1CC",
            "#00CED1",
            "#5F9EA0",
            "#4682B4",
            "#B0C4DE",
            "#B0E0E6",
            "#ADD8E6",
            "#87CEEB",
            "#87CEFA",
            "#00BFFF",
            "#1E90FF",
            "#6495ED",
            "#4169E1",
            "#0000FF",
            "#0000CD",
            // Browns
            "#FFF8DC",
            "#FFEBCD",
            "#FFE4C4",
            "#FFDEAD",
            "#F5DEB3",
            "#DEB887",
            "#D2B48C",
            "#BC8F8F",
            "#F4A460",
            "#DAA520",
            "#B8860B",
            "#CD853F",
            "#D2691E",
            "#8B4513",
            "#A0522D",
            "#A52A2A",
            "#800000"
        ]

        let randoIndex = Math.floor(Math.random() * quotes.length);
        let randoColorIndex = Math.floor(Math.random() * colors.length);
            setRandomQuote(quotes[randoIndex]);
            setColor(colors[randoColorIndex]);
    }

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{backgroundColor: color, minHeight: "100vh"}}>
            <div className="card" style={{maxWidth: "600px", opacity: .7}}>
                <div className="card-body px-5">
                    {randomQuote ? (
                        <>
                        <span className="card-text fs-2 fw-bolder" style={{color: color}}>"{randomQuote.text}"</span>
                        <p className="card-title d-flex justify-content-end" style={{color: color}}>- {randomQuote.author || "No author"}</p>
                        </>
                    ) : (
                        <h2 id="loading">Loading...</h2>
                    )}
                
                    <div className="row">
                        <div className="col-12">
                            <button onClick={getNewQuote} type="button" 
                            className="btn text-black"
                            style={{backgroundColor: color}}
                            >
                                <span id="quote-btn" className="fw-bolder">New Quote</span></button>     
                            <a href={
                                "https://twitter.com/intent/tweet?text=" + encodeURIComponent(
                                '"' + randomQuote.text + '" ' + randomQuote.author 
                            )} 
                            target="_blank"
                            className="btn text-black mx-2"
                            style={{backgroundColor: color}}>
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href={
                                "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" 
                                + encodeURIComponent(randomQuote.author)
                                + "&content=" 
                                + encodeURIComponent(randomQuote.text)
                                + "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbutton&shareSource=tumblr_share_button" 
                            }
                            className="btn text-black" 
                            style={{backgroundColor: color}}>
                                <i className="fa fa-tumblr"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));