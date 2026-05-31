// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import Heramba from "../assets/Heramba CHSL.png";

// Update Data from Poster image_0.png
const projects = [
    {
        title: "Maniratnam Serene (Heramba CHSL)",
        loc: "Bhandup (E), Mumbai",
        desc: "Luxury 1 & 2 BHK | Launching Soon",
        img: Heramba
    }
    // { title: "Azure Bay", loc: "Pune", desc: "Premium 3 BHK Residences", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800" },
    // { title: "Royal Orchids", loc: "Ahmedabad", desc: "Exclusive Villas", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800" }
];

const Projects = () => (
    <section id="projects" className="">
        <div className="container">
            <h2 className="text-center mb-5 section-title display-4">Projects</h2>
            <div className="row g-4">
                {projects.map((p, i) => (
                    <div className="col-md-4" key={i}>
                        <motion.div className="project-card h-100">
                            <img src={p.img} alt={p.title} />
                            <div className="card-body">
                                <p className="text-gold mb-1">{p.loc}</p>
                                <h5>{p.title}</h5>
                                <p className="text-secondary">{p.desc}</p>
                                <button className="btn-outline-gold-sm mt-3">View Details</button>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Projects;