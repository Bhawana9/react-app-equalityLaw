import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { MDBContainer} from 'mdbreact';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Doughnut from './Doughnut'

export default class HelpPage extends Component
   {
     constructor(props)
     {
       super(props);
     
       this.state={collapse:false};
     }
    

     toggle(){
       this.setState(state=>({collapse:!state.collapse}))
     }
     render()
     {
       
         return(
       
        <MDBContainer>
        <Link className="btn btn-secondary" to="/">Go to Back</Link>
        <h3 className="mt-3 float-center">Survey Reported</h3>
        <Doughnut/>
      
        
        <div>
          <Button color="success" onClick={()=>this.toggle()} style={{marginBottom:'1rem'}}>Discrimination Employement</Button>
          <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            Numerous state and federal laws prohibit discrimination in employment based on, among other characteristics, race, sex, creed, national origin, age and religion. To prove illegal discrimination, an employee in one of the protected categories must demonstrate unequal treatment with respect to other similarly situated employees. An allegation of unequal treatment by an employee must be supported or “proved” with evidence that demonstrates an employment decision was made for discriminatory reasons.

<h2>Title VII of the Civil Rights Act of 1964 & Title IX of the Educational Amendments of 1972</h2>
<p>Title VII of the Civil Rights Act of 1964 (42 U.S.C. § 2000e, et. seq.) is one of the best known anti-discrimination laws, and is enforced by the United States Equal Opportunity Commission (EEOC).  It prohibits discrimination based upon race, color, religion, sex, or national origin with respect to hiring; compensation; and terms, conditions or privileges of employment. The statute also prohibits limiting, segregating or classifying an employee or an applicant for employment in a manner that deprives the person of employment opportunities or affects the person’s status as an employee.

Title VII does not constrain the University from hiring, promoting, rewarding, terminating or otherwise distinguishing among employees on the basis of job-related qualifications and performance. Institutions retain the right to hire, promote, reward and terminate employees as long as their decisions are not based upon race, color, religion, sex or national origin. Title VII remedies include reinstatement, back pay, damages and attorney’s fees.

Title IX of the Educational Amendments of 1972 prohibits sex discrimination by the University as a recipient of federal funds. The law is administered by the United States Department of Education-Office for Civil Rights. Regulations adopted by the Department contain provisions on employment that are very similar to the EEOC’s Title VII guidelines. Persons alleging discrimination under Title IX may be awarded both compensatory and punitive damages.</p>
            </CardBody>
          </Card>
          
          </Collapse>
        
          <Button color="danger" onClick={()=>this.toggle()} style={{marginBottom:'1rem'}}>Sexual Harassment</Button>
          <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            Sexual harassment is a form of sex discrimination. State and federal law prohibit sexual harassment both in the workplace and in the academic environment. Board of Regents Policy 14-2 requires each campus in the UW System to implement a process to address allegations of sexual harassment, as well as offer educational programs informing employees and students about sexual harassment, and the applicable procedures, sanctions and remedies against it.  While this section focuses on sexual harassment, please keep in mind that harassment in any form and on any basis is inappropriate and should be reported.

<h3 className="red-text">EMPLOYMENT: Sexual Harassment</h3>
<p>Under Title VII of the Civil Rights Act of 1964, it is unlawful to discriminate against an individual in any aspect of employment on the basis of a person’s sex. This includes sexual harassment in the workplace.

Sexual harassment is defined as unwelcome sexual advances, unwelcome requests for sexual favors, unwelcome physical contact of a sexual nature or unwelcome verbal or physical conduct of a sexual nature. Sexual harassment includes conduct directed by a person at another person of the same or opposite gender. “Unwelcome verbal or physical conduct of a sexual nature” includes, but is not limited to, the deliberate, repeated making of unsolicited gestures or comments of a sexual nature; the deliberate repeated display of offensive sexually graphic materials which is not necessary for business purposes; or deliberate verbal or physical conduct of a sexual nature, whether or not repeated, that is sufficiently severe to interfere substantially with an employee’s work performance or to create an intimidating, hostile or offensive work environment. There are two forms of sexual harassment – quid pro quo and hostile environment.

<h3 className="red-text">QUID PRO QUO</h3>
<p>The term “quid pro quo” refers to gaining a favor or advantage in exchange for something.  In terms of sexual harassment this refers to situations in which a person is subjected to unwelcome sexual advances by a supervisor or faculty member and is led to believe that submitting to the advances will result in some sort of professional or academic advancement. In other words, the victim is forced to choose between submitting to sexual demands or suffering a negative action in his or her employment or academic pursuits.  While less common today, quid pro quo harassment does still occur.</p>

<h3 className="red-text">HOSTILE ENVIRONMENT</h3>
<p>The term “hostile work environment” refers to situations in which the hostile, intimidating or offensive conduct of another unreasonably interferes with an employee’s work performance or a student’s academic learning environment. The conduct must objectively be sufficiently severe and pervasive to create an intimidating, hostile, or offensive environment. Harassment is severe and pervasive when it occurs frequently, entails humiliation or physical threats, or unreasonably interferes with the victim’s work performance or academic learning. Examples of a hostile environment may include unwelcome touching, suggestive jokes, comments or materials, uninvited sexual solicitations, intimidating words or acts, or display of pornographic materials. On the other hand, infrequent or minor offensive remarks will usually not rise to the level of a hostile environment.</p>

The conduct does not necessarily have to be sexual in nature to constitute harassment. Any unwelcome conduct directed at a person because of his or her gender may constitute harassment. The law also recognizes a cause of action for same-sex harassment, or harassment based on other characteristics such as race and national origin.

Under both quid pro quo and hostile environment theories, the issue turns on whether an unwanted sexual behavior, conduct or condition has been imposed on a person’s employment or academic environment on the basis of his or her gender. For any type of sexual harassment, a victim’s toleration of or submission to the harassment does not bar a claim of harassment. If the conduct is unwelcome and has a demonstrated effect on an employee’s conditions of employment or a student’s academic pursuits, it may constitute unlawful sexual harassment.</p>

<h3 className="red-text">Harassment by Supervisor</h3>
<p>An institution may be legally accountable for sexual harassment committed by supervisory personnel under the theory that the supervisory personnel is acting on behalf of the institution. Upon being notified of harassment, an institution must promptly respond to any instance of alleged sexual harassment. An institution may be legally accountable for sexual harassment committed by its supervisory personnel under a hostile environment theory if it fails to exercise due diligence and reasonable care to prevent, respond to and correct such harassment. However, an institution may avoid liability if it takes prompt remedial action in response to harassment and if the alleged victim fails to follow the institution’s policies and/or fails to take advantage of available preventive or corrective measures.</p>

<h3 className="red-text">Harassment by Co-Workers</h3>
<p>If an employee claims he or she was harassed by one or more co-workers, an employer may be liable if management knew or should have known of the alleged sexual harassment, and failed to take prompt remedial action. Once an employer has actual notice (victim files complaint) or constructive notice (employer should have known of harassment based on conduct and actions of both victim and harasser) of harassment by a co-worker, the employer (or the employer’s agent) must take corrective measures which are reasonably calculated to end the harassment. For example, the employer may change the victim’s or alleged harasser’s work schedule to avoid ongoing harassment and/or place the alleged harasser on leave pending an investigation. The employer should ask a victim his or her preferred remedy; however, it is the employer’s legal responsibility to make the final decision as to what action to take in order to appropriately and effectively respond to the harassment and implement measures to prevent and remedy any harassing behavior.</p>

<h3 className="red-text">RETALIATION</h3>
<p>It is unlawful to take adverse action against an employee for reporting sexual harassment, filing a complaint or participating in an investigation of sexual harassment. This protection applies even if the investigation reveals a lack of sufficient evidence to prove that harassment occurred.</p>
            </CardBody>
          </Card>
          
          </Collapse>
        </div>
</MDBContainer>
      
      
      

        

        
     
    
    );
  }
}
        
         
       
         
       
        
         
    