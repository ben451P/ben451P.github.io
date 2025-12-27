import "bootstrap/dist/css/bootstrap.min.css";
import resume from '../static/assets/resume.pdf';

function ResumePage() {
    return (
        <main 
            className="p-0 m-0" 
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                overflow: 'hidden'
        }}
        >      
            <iframe
                src={resume}
                title="Resume"
                width="100%"
                height="100%"
                style={{ 
                border: 'none',
                display: 'block'
                }}
            />
        </main>
    );
}

export default ResumePage;