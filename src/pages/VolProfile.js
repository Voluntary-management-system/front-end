import React from 'react';
import '../styles/volprofile.css'
import Nav from '../components/header/header'
import Profile from '../components/profile/profile';
import Event from '../components/event/event';
import Footer from '../components/footer/footer'

export const VolProfile = () => {
    return (
        <div className ='wrap'>
          <Nav/>
          <Profile/>
          <div >
            <div  className ='background'>
              <div className = {'history'}>
                <p className ='Title'>Volunteering history</p>
                <Event></Event>
                <Event></Event>
                <Event></Event>

              </div>  {/*60%*/}
              <div className = 'skills'>
                <div className ='skills-list'>
                  <div align ='cernter'>
                    Hard skills
                  </div>
                  <ul>
                    <li><p>pro struk</p></li>
                    <li><p>paxat master</p></li>
                    <li><p>tarva hambal</p></li>
                    <li><p>amenasev</p></li>
                    <li><p>poler srbelu champion</p></li>
                  </ul>
                </div>
                <div className ='skills-list'>
                  <div align ='cernter'>
                    Soft skills
                  </div>
                  <ul>
                    <li><p>pro struk</p></li>
                    <li><p>paxat master</p></li>
                    <li><p>tarva hambal</p></li>
                    <li><p>amenasev</p></li>
                    <li><p>poler srbelu champion</p></li>
                  </ul>
                </div>

              </div>  {/*40%*/}
            </div>
          </div>      
          <Footer />
      </div>
    )
}
