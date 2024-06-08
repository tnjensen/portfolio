import './projects.scss';

/* eslint-disable react/jsx-key */
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Projects(){
    const [data, setData] = useState(null);
    /* const url = import.meta.env.VITE_API_URL; */

    useEffect(() => {
        axios('https://noroff.tnjensen.com/portfolio/wp-json/wp/v2/posts?categories=3&_embed&filter[orderby]=date&order=asc')
        .then(response => setData(response.data))
    })
    return(
        <div className="projects">
            <div className="project-heading">
                <h1>Projects</h1>
            </div>
            <div className="loader loading-indicator"></div>
            {data && data.map((item) => (
                <div className="card" key={item.id}>
                <h2 dangerouslySetInnerHTML={{__html: item.title.rendered}}></h2>
                {item._embedded && <img src={item._embedded['wp:featuredmedia'][0].source_url} alt={item._embedded['wp:featuredmedia'][0].alt_text} /> }
                <span dangerouslySetInnerHTML={{__html: item.content.rendered}}></span>
                <Link to={item.meta._links_to} className="site-btn">Visit site</Link>
                </div>
            ))}
        </div>
    )
}
export default Projects;