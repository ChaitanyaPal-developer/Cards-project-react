import Card from './components/Card'


const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "2 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "8 days ago",
    post: "Backend Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "1 day ago",
    post: "React Native Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "10 days ago",
    post: "iOS Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "6 days ago",
    post: "UI/UX Designer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "3 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    companyName: "Uber",
    datePosted: "7 days ago",
    post: "Data Scientist",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$78/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    companyName: "Spotify",
    datePosted: "4 days ago",
    post: "DevOps Engineer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/salesforce.com",
    companyName: "Salesforce",
    datePosted: "9 days ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Bangalore, India"
  }
];
  

  console.log(jobOpenings);


  return (
    <div className='parent'>
      {jobOpenings.map(function(elem, idx) {

        return <div key={idx}>
          <Card company={elem.companyName} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.pay} />
        </div>
      })}
 
    </div>
    
  )
}

export default App