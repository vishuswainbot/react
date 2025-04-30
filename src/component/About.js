import User from "./UserCLass";

const About = () => {
  return (
    <div>
      <h1>This is the about us page</h1>
      <User name={"Ashwini Bari"} location={"Jaipur"} phoneNo={"9116352179"}/>
      <User name={"Vishu"} location={"NCT"} phoneNo={"8527163949"}/>

    </div>
  );
};

export default About;
