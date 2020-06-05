import React from 'react'
import TermsOfServicePDF from '../../Assets/pdf/TermsOfService.pdf'
import './TermsOfService.css'
import Button from '../Universal/Buttons/Button/Button'


const TermsOfService = () => {
    function hideTermsOfService () {
        const TermsOfService = document.getElementById("TermsOfService");

        TermsOfService.style.setProperty('display', 'none');
    
      }
    return(
        <div 
        id="TermsOfService">
            <div className="termsOfServiceView">
                <iframe src={TermsOfServicePDF} />
            </div>
            <div className="test">
                <Button 
                onclick={() => hideTermsOfService()}
                text="Close"/>
            </div>
        </div>
    )
}

export default TermsOfService