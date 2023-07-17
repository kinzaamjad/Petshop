// import React from 'react'
// import{Link} from "react-router-dom";
// export const Service = () => {
//   return (
// <div><div>
//     <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
//     <div className="container mt-5 pt-4">
//       <div className="row align-items-end mb-4 pb-2">
//         <div className="col-md-8">
//         <div className="border-start border-5 border-primary ps-5 mb-5" style={{maxWidth: 600}}>
//           <h6 className="text-primary text-uppercase">Service</h6>
//           <h1 className="display-5 text-uppercase mb-0">OUR EXCELLENT PET CARE SERVICES</h1>
//         </div>
//           {/* <div className="section-title text-center text-md-start">
//             <h4 className="title mb-4">OUR EXCELLENT PET CARE SERVICES</h4>
//             <p  className="text-muted mb-0 para-desc">OUR EXCELLENT PET CARE SERVICES </p>
//           </div> */}
//         </div>{/*end col*/}
//         <div className="col-md-4 mt-4 mt-sm-0 d-none d-md-block">
//           <div className="text-center text-md-end">
//             {/* <a href="page-jobs.html" className="text-primary">View more Food <svg xmlns="http://www.wkinza.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right fea icon-sm"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg></a> */}
//           </div>
//         </div>{/*end col*/} 
//       </div>{/*end row*/}
//       <div className="row">
//         <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
//           <div className="card border-0 bg-light rounded shadow">
//             <div className="card-body p-4">
//               <span className="badge rounded-pill bg-primary float-md-end mb-3 mb-sm-0">Full time</span>
//               <h5>PET BOARDING</h5>
//               <div className="mt-3">
//                 <span className="text-muted d-block"><i className="fa fa-home" aria-hidden="true" /> <a href="#" target="_blank" className="text-muted">A place for your dog and his friends.A hut for your favorite pet.</a></span>
//                 <span className="text-muted d-block"><i className="fa fa-map-marker" aria-hidden="true" /> Pakistan</span>
//               </div>
//               <div className="mt-3">
//                 <Link to="/Food">
//                 <a href="page-job-detail.html" className="btn btn-primary">Read More</a></Link>
//               </div>
              
//             </div>
//           </div>
//         </div>{/*end col*/}
//         <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
//           <div className="card border-0 bg-light rounded shadow">
//             <div className="card-body p-4">
//               <span className="badge rounded-pill bg-primary float-md-end mb-3 mb-sm-0">Remote</span>
//               <h5>Pet FEEDING</h5>
//               <div className="mt-3">
//                 <span className="text-muted d-block"><i className="fa fa-home" aria-hidden="true" /> <a href="#" target="_blank" className="text-muted">PET FEEDING are also be there</a></span>
//                 <span className="text-muted d-block"><i className="fa fa-map-marker" aria-hidden="true" /> Pakistan</span>
//               </div>
//               <div className="mt-3">
//                 <Link to="/Products">
//                 <a href="#" className="btn btn-primary">Read more</a></Link>
//               </div>
//             </div>
//           </div>
//         </div>{/*end col*/}
//         <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
//           <div className="card border-0 bg-light rounded shadow">
//             <div className="card-body p-4">
//               <span className="badge rounded-pill bg-primary float-md-end mb-3 mb-sm-0">Contract</span>
//               <h5>PET GROOMING</h5>
//               <div className="mt-3">
//                 <span className="text-muted d-block"><i className="fa fa-home" aria-hidden="true" /> <a href="#" target="_blank" className="text-muted">We’ve raised the bar for dog grooming.A clean dog is an award-winning dog.
// Your groomer will aid in training your dog to be more obedient</a></span>
//                 <span className="text-muted d-block"><i className="fa fa-map-marker" aria-hidden="true" /> Pakistan</span>
//               </div>
//               <div className="mt-3">
//                 <Link to="/Products">
//                 <a href="page-job-detail.html" className="btn btn-primary">Read More</a></Link>
//               </div>
//             </div>
//           </div>
//         </div>{/*end col*/}
//         <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
//           <div className="card border-0 bg-light rounded shadow">
//             <div className="card-body p-4">
//               <span className="badge rounded-pill bg-primary float-md-end mb-3 mb-sm-0">WFH</span>
//               <h5>PET TRAINING</h5>
//               <div className="mt-3">
//                 <span className="text-muted d-block"><i className="fa fa-home" aria-hidden="true" /> <a href="#" target="_blank" className="text-muted">One benefit to virtual training is that it allows you to make improvements to your skills as a trainer. By reviewing film of your session or previous training, you can analyze the dog behavior as well as your own training cues and style.</a></span>
//                 <span className="text-muted d-block"><i className="fa fa-map-marker" aria-hidden="true" /> Pakistan</span>
//               </div>
//               <div className="mt-3">
//                 <Link to ="/Products">
//                 <a href="page-job-detail.html" className="btn btn-primary">Read more</a></Link>
//               </div>
//             </div>
//           </div>
//         </div>{/*end col*/}
//         <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
//           <div className="card border-0 bg-light rounded shadow">
//             <div className="card-body p-4">
//               <span className="badge rounded-pill bg-primary float-md-end mb-3 mb-sm-0">Full time</span>
//               <h5>PET EXERCISE</h5>
//               <div className="mt-3">
//                 <span className="text-muted d-block"><i className="fa fa-home" aria-hidden="true" /> <a href="#" target="_blank" className="text-muted">A dog is always happy to go on a walk. It’s an excuse for them to play around with you and show off all their tricks. A walk with a dog is always more enjoyable.  If for any reason you are busy or can’t go outside, make sure to find a reliable walker who will go on long walks together with your pop, or at least take them outside for potty breaks often..</a></span>
//                 <span className="text-muted d-block"><i className="fa fa-map-marker" aria-hidden="true" /> Pakistan</span>
//               </div>
//               <div className="mt-3">
//                 <a href="page-job-detail.html" className="btn btn-primary">Read more</a>
//               </div>
//             </div>
//           </div>
//         </div>{/*end col*/}
//         <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
//           <div className="card border-0 bg-light rounded shadow">
//             <div className="card-body p-4">
//               <span className="badge rounded-pill bg-primary float-md-end mb-3 mb-sm-0">Remote</span>
//               <h5>PET TREATMENT</h5>
//               <div className="mt-3">
//                 <span className="text-muted d-block"><i className="fa fa-home" aria-hidden="true" /> <a href="#" target="_blank" className="text-muted">We offer 15-minute appointments as a standard for all consultations, giving you plenty of time to discuss your pet’s healthcare and ask any questions you may have. We are able to provide a range of services during the consultation and are always on hand to see your pet in an emergency if necessary.      
// .</a></span>
//                 <span className="text-muted d-block"><i className="fa fa-map-marker" aria-hidden="true" /> Pakistan</span>
//               </div>
//               <div className="mt-3">
//                 <a href="page-job-detail.html" className="btn btn-primary">read More</a>
//               </div>
//             </div>
//           </div>
//         </div>{/*end col*/}
//         <div className="col-12 mt-4 pt-2 d-block d-md-none text-center">
//           <a href="#" className="btn btn-primary">View more Jobs <svg xmlns="http://www.wkinza.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right fea icon-sm"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg></a>
//         </div>{/*end col*/}
//       </div>{/*end row*/}
//     </div>
//   </div>
//   </div>
//   )
// }
// export default Service;



