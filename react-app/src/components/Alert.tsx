
 {/* you create a typescript interface to have argumeents in your component
    1) in the parent component (the component where this one is called) the property key needs to be added*/
    
 }
interface Props {
    text: string; 
}

const Alert = ({text}:Props) => {
  return (
    <div className="alert alert-primary">{text}</div>
  )
}

export default Alert
