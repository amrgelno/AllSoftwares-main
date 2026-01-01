import "./Card.css"
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Card(props) {
  return (
    <div className="section g-btn flex justify-between items-center gap-12 p-16">
      <div className="sectionImg xl:w-2/5"><img src={props.img} alt="" /></div>
      <div className="sectionContent xl:w-3/5">
        <p className="sectionTitle">
          {props.title}
        </p>
        <p className="sectionDesc">
          {props.desc}
        </p>
        <div className="projectTech_c flex items-center flex-wrap justify-center xl:justify-start gap-2">
            {
                props.techs.map((item,i)=>{
                    return <p key={i} className="projectTech g-btn">{item}</p>
                })
            }
        </div>
        <a href={props.link} className="linkBtn">Visit Website <FaExternalLinkAlt /></a>
      </div>
    </div>
  )
}
