
const Error = ({mensaje, setError}) => {
  return (
    <div className="alert alert-dismissible alert-warning">
        <button 
            type="button" 
            className="btn-close" 
            data-bs-dismiss="alert"
            onClick={()=>setError(false)}></button>
        <p
            className="text-center text-danger-emphasis text-uppercase fs-5 text fw-bold">
                <strong>{mensaje}</strong>
        </p>
    </div>
  )
}

export default Error