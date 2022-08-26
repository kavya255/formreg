import React, { useState } from "react";
import ReactDOM from "react-dom";
import { TextComponent, InputComponent, Box , DatePick,Dropdown, Dropdown2,Button} from "./Components";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#8D19FFB2",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextComponent
        label="INCRESCO TECHNOLOGIES"
        styleProps={{ fontSize: "48px", textAlign: "center",fontVariant:"Helvetica",color:"#FFFFFF" ,fontWeight:"700"}}
      />
      <br></br>
      <TextComponent
        label="CAMPUS HIRING 2023"
        styleProps={{ fontSize: "36px", textAlign: "center", fontVariant:"Helvetica",color:"#FFFFFF",fontWeight:"700"}}
      />
    </div>
  );
};



const Attatchments = () => {
  return (
    <>
      <div>
      
        <h3>ATTATCHMENTS</h3>
<Box>
        <TextComponent
          styleProps={{ fontSize: "18px", textAlign: "left", fontWeight:"700 "}}
          label="Add Resume/CV"
          isMandatory={"true"}
          CustomTag="span"
        >
        
          <TextComponent
            styleProps={{
              fontSize: "18px",
              textAlign: "left",
              fontWeight: "400",
            }}
            CustomTag="span"
            label="Accept format: doc/.docx/.pdf;Size: 1MB"
          />
          
        </TextComponent>
       
      <div>
      <button> Choose File</button></div>
      </Box>
      </div>
    </>
    
  );
};

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName,setMiddleName] =useState("");
  const [lastName, setLastName] = useState("");
  const [emailid, setEmailId] = useState("");
  const [contactnumber, setContactNumber] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [tenth, setTenthPercentage] = useState("");
  const [twelfth, setTwelfthPercentage] = useState("");
  const [degree, setDegree] = useState("");
  const [college, setCollege] = useState("");
  const [regno, setRegNo] = useState("");
  const [branch, setBranch] = useState("");
  
  console.log({dob})

  return (
    <div>
      <Header />
      <form>
      <TextComponent

      label="Required"
      isMandatory={"true"}
       />
        <h1>Registration Form</h1>
        <TextComponent />
        <b>  job details</b>
        <Box>
        job profile
          <InputComponent
          type="text"
          //label=<b>job profile</b>
          isMandatory={"true"}
          placeholder="Software Developer"
          disabled/>
         </Box>
         <form >

         <br></br>
         <b>Personal details</b>
        <Box>
<TextComponent 
           label="First Name"
           isMandatory={"true"}/>
          <InputComponent
            type="text"
           // label="First Name"
            placeholder="Enter First name"
            value={firstName}
            onChange={(a) => {
              console.log(a.target.value);
              setFirstName(a.target.value);
            }}
          />
        <br></br>
        
          <InputComponent
          type="text"
        
          label="Middle Name"
          placeholder="Enter Middle name"
          value={middleName}
          onChange={(a) =>{ 
            console.log(a.target.value);
            setMiddleName(a.target.value);
          }}
          />
          <br></br>
          
           <TextComponent 
           label="Last Name"
           isMandatory={"true"}/>
          <InputComponent
            type="text"
            placeholder="Enter last name"
            value={lastName}
            onChange={(a) => {
              console.log(a.target.value);
              setLastName(a.target.value);
              
            }}
          />
          <br>

          </br>
           <TextComponent 
           label="Email Id"
           isMandatory={"true"}/>
          <InputComponent
            type="text"
            placeholder="kavya@gmail.com"
            value={emailid}
            onChange={(a) => {
              console.log(a.target.value);
              setEmailId(a.target.value);
              
            }}
          />
          <br>

          </br>
           <TextComponent 
           label="Contact Number"
           isMandatory={"true"}/>
          <InputComponent
            type="text"
            //label="Contact Number"
            isMandatory={"true"}
            placeholder="999999999h"
            value={contactnumber}
            onChange={(a) => {
              console.log(a.target.value);
              setContactNumber(a.target.value);
              
            }}
          />
          <br></br>
          <DatePick onChange={(data)=>setDob(data.target.value)} value={dob}/>
        <br>
          
        </br>
          <TextComponent
        label="Gender"
        styleProps={{ fontSize: "18px", textAlign: "left" }}
        isMandatory="true"
      />
          <InputComponent
              type="radio"
              value="Male"
              name="gender"
              label="Male"

              onChange={(a) => {
                console.log(a.target.value);
                setGender(a.target.value);
              }}
             
            />
            <InputComponent
              type="radio"
              value="Female"
              name="gender"
              label="Female"

              onChange={(a) => {
                console.log(a.target.value);
                setGender(a.target.value);
              }}
             
            />
            <InputComponent
              type="radio"
              value="Other"
              name="gender"
              label="Other"

              onChange={(a) => {
                console.log(a.target.value);
                setGender(a.target.value);
              }}
            />
          
        </Box>
        </form>
        <h3>Educational details</h3> 
         <Box>
         
        
         
         <h4> <header> Lowest education profile</header> </h4>
          <TextComponent 
           label="10th percentage %"
           isMandatory={"true"}/>
           <InputComponent
             
            type="text"
            //label="10th percentage %"
          
            placeholder="56%"
            value={tenth}
            onChange={(a) => {
              
              console.log(a.target.value);
              setTenthPercentage(a.target.value); 
              
              
            }}
          />
          <br>
            
          </br>
          <TextComponent 
           label="12th percentage %"
           isMandatory={"true"}/>
           <InputComponent
            type="text"
            //label="12th percentage %"
            isMandatory={"true"}
            placeholder="70%"
            value={twelfth}
            onChange={(a) => {
              console.log(a.target.value);
              setTwelfthPercentage(a.target.value);
              
            }}
          />
         
         <br></br>
        
          <Dropdown />
          {/* <TextComponent 
           label="Degree"
           isMandatory={"true"}/> */}


          <InputComponent
            type="text"
            label={<TextComponent label= "degree" isMandatory={"true"}/>}
            isMandatory={"true"}
            placeholder="B.E"
            value={degree}
            onChange={(a) => {
              console.log(a.target.value);
              setDegree(a.target.value);
              
            }}
            
            
          />  
          
          <br></br>
          <TextComponent 
           label="College"
           isMandatory={"true"}/>
        
        <InputComponent
            type="text"
           // label="College"
            placeholder="College"
            value={college}
            onChange={(a) => {
              console.log(a.target.value);
              setCollege(a.target.value);
              
            }}
          />  
          <br></br>
          <TextComponent 
           label="Reg.No"
           isMandatory={"true"}/>
        <InputComponent
            type="text"
            //label="Reg.No"
            placeholder="19EUEE062"
            width= "1198px"
            value={regno}
            onChange={(a) => {
              console.log(a.target.value);
              setRegNo(a.target.value);
              
            }}
          />  
          <br>

          </br>

          <InputComponent
            type="text"
            label={<TextComponent label="Branch" isMandatory={"true"}/>}
            placeholder="Computer Science Engineering "
            value={branch}
            onChange={(a) => {
              console.log(a.target.value);
              setBranch(a.target.value);
              
            }}
          />   
          <Dropdown2/>
          </Box>
          <Box>
        
        <Attatchments />
        <div style={{alignItems:"right"}}>
        
        <Button label="submit"/>
         
        
        </div>
        </Box>
        
      </form>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));