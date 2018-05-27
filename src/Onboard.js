// import React, { Component } from 'react';
// import { Subscribe } from 'unstated';
// import OnboardContainer from './containers/OnboardContainer';

// var URLRoutes = {
//   signin: 'http://localhost:8080/signin',
//   signup: 'http://localhost:8080/signup'
// }

// class Onboard extends Component {
//   render() {
//     return (
//       <Subscribe to={[OnboardContainer]}>
//         {onboard => (
//           <div className="onboard">
//             {
//               onboard.state.isSignedUp
//               ?
//                 <div className="onboard__inner">
//                   <label className="onboard__label">Sign In</label>
//                   <input type="email" className="onboard__email" id="signInEmail" placeholder="Email address" />
//                   <input type="password" className="onboard__password" id="signInPassword" placeholder="Password" />
//                   <button className="button button-primary onboard__submit" onClick={() => onboard.signIn(URLRoutes.signin)}>Submit</button>
//                 </div>
//               :
//                 <div className="onboard__inner">
//                   <label className="onboard__label">Sign Up</label>
//                   <input type="text" className="onboard__name" id="signUpName" placeholder="Full name (John Well)*" />
//                   <input type="email" className="onboard__email" id="signUpEmail" placeholder="Email address (info@example.com)*" />
//                   <input type="password" className="onboard__password" id="signUpPassword" placeholder="Password*" />
//                   <input type="text" className="onboard__smtp-server" id="signUpSMTPServer" placeholder="SMTP server (smtp.fastmail.com)*" />
//                   <input type="text" className="onboard__smtp-port" id="signUpSMTPPort" placeholder="SMTP port (587/465)*" />
//                   <input type="email" className="onboard__smtp-email" id="signUpSMTPEmail" placeholder="SMTP email address (info@example.com)*" />
//                   <input type="password" className="onboard__smtp-password" id="signUpSMTPPassword" placeholder="SMTP password*" />
//                   <button className="button button-primary onboard__submit" onClick={() => onboard.signUp(URLRoutes.signup)}>Submit</button>
//                 </div>
//             }
//           </div>
//           )
//         }
//       </Subscribe>
//     );
//   }
// }

// export default Onboard;