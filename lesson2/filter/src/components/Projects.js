const Projects = (props) => {
    return props.projects.map(el => <img src={el.img}/>)
}

export default Projects