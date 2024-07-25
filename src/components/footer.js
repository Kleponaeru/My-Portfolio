import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export const Footer = () => {
    return (
      <footer className="footer" id='footer'>
        <MDBFooter className='text-center text-white custom-background'>
          <MDBContainer className='p-4 pb-0'>
            <section className='mb-4'>
              <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/kelvin.lie.376/' role='button'>
                <MDBIcon fab icon='facebook-f' />
              </MDBBtn>
              <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/klvnlie_/' role='button'>
                <MDBIcon fab icon='instagram' />
              </MDBBtn>
              <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/klvnlie08/' role='button'>
                <MDBIcon fab icon='linkedin-in' />
              </MDBBtn>
              <MDBBtn outline color="light" floating className='m-1' href='https://github.com/Kleponaeru' role='button'>
                <MDBIcon fab icon='github' />
              </MDBBtn>
              {/* <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                <MDBIcon fab icon='fas fa-at'/>
              </MDBBtn> */}
            </section>
          </MDBContainer>
  
          <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2024 Kelvin Lie. All rights reserved.
          </div>
        </MDBFooter>
      </footer>
    );
  }