import React, { useState } from "react";
//import ReactDOM from "react-dom";
import {
  TextComponent,
  InputComponent,
  Box,
  DatePick,
  Dropdown,
  Attatchments,
} from "./components";
import GlobalStyle from "./globalStyles";
import {postReq} from "../pages/index";

///import styled from "styled-components";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#8D19FFB2",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "Helvetica",
        fontWeight: "700",
      }}
    >
      <TextComponent
        label="INCRESCO TECHNOLOGIES"
        styleProps={{
          fontSize: "48px",
          textAlign: "center",
          paddingTop: "15px",
        }}
      />
      <br></br>
      <TextComponent
        label="CAMPUS HIRING 2023"
        styleProps={{
          fontSize: "36px",
          textAlign: "center",
          paddingBottom: "15px",
        }}
      />
    </div>
  );
};

export const App = ({data}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [gender, setGender] = useState("");
  const [mail, setEmail] = useState("");
  const [number, setNumber] = useState("");

  return (
    <div>
      <GlobalStyle />
      <Header />
      <TextComponent label="*Required" styleProps={{ margin: "10px" }} />
      <div>
        <TextComponent
          label="Registration Form"
          styleProps={{ fontWeight: 700, fontSize: "48px", margin: "10px" }}
        />
        <Box header="Job Details">
          <InputComponent
            type="text"
            placeholder="Software Developer"
            disabled
            style={{ height: "2em" }}
            label={
              <TextComponent
                label="Job Profile:"
                isMandatory="true"
                styleProps={{
                  fontSize: "16px",
                  textAlign: "left",
                  fontWeight: 700,
                }}
              />
            }
          />
        </Box>
        <Box header="Personal Details">
          <InputComponent
            type="text"
            style={{ height: "2em" }}
            label={
              <TextComponent
                label="First Name:"
                isMandatory="true"
                styleProps={{
                  fontSize: "16px",
                  textAlign: "left",
                  fontWeight: 700,
                  paddingTop: "10px",
                }}
              />
            }
            placeholder="Enter First name"
            value={firstName}
            onChange={(a) => {
              setFirstName(a.target.value);
            }}
          />
          <InputComponent
            type="text"
            style={{ height: "2em" }}
            label={
              <TextComponent
                label="Middle Name:"
                styleProps={{
                  fontSize: "16px",
                  textAlign: "left",
                  fontWeight: 700,
                  paddingTop: "10px",
                }}
              />
            }
            placeholder="Enter middle name"
            value={middleName}
            onChange={(a) => {
              setMiddleName(a.target.value);
            }}
          />
          <InputComponent
            type="text"
            style={{ height: "2em" }}
            label={
              <TextComponent
                label="Last Name:"
                isMandatory="true"
                styleProps={{
                  fontSize: "16px",
                  textAlign: "left",
                  fontWeight: 700,
                  paddingTop: "10px",
                }}
              />
            }
            placeholder="Enter last name"
            value={lastName}
            onChange={(a) => {
              setLastName(a.target.value);
            }}
          />
          <InputComponent
            type="email"
            style={{ height: "2em" }}
            label={
              <TextComponent
                label="Email:"
                isMandatory="true"
                styleProps={{
                  fontSize: "16px",
                  textAlign: "left",
                  fontWeight: 700,
                  paddingTop: "10px",
                }}
              />
            }
            placeholder="@gmail.com"
            value={mail}
            onChange={(a) => {
              setEmail(a.target.value);
            }}
          />
          <InputComponent
            type="text"
            style={{ height: "2em" }}
            pattern="[0-9]+"
            value={number}
            label={
              <TextComponent
                label="Contact Number:"
                isMandatory="true"
                styleProps={{
                  fontSize: "16px",
                  textAlign: "left",
                  fontWeight: 700,
                  paddingTop: "10px",
                }}
              />
            }
            placeholder="123456789"
            maxLength="10"
            minLength="10"
            onChange={(a) => {
              setNumber(a.target.value);
            }}
          />
          <DatePick />
          <TextComponent
            label="Gender"
            isMandatory="true"
            styleProps={{
              fontSize: "16px",
              textAlign: "left",
              fontWeight: 700,
              paddingTop: "10px",
            }}
          />
          <InputComponent
            type="radio"
            value={gender}
            name="gender"
            label="Male"
            onChange={(a) => {
              setGender(a.target.value);
            }}
          />
          <InputComponent
            type="radio"
            value={gender}
            name="gender"
            label="Female"
            onChange={(a) => {
              setGender(a.target.value);
            }}
          />
          <InputComponent
            type="radio"
            value={gender}
            name="gender"
            label="Other"
            onChange={(a) => {
              setGender(a.target.value);
            }}
          />
        </Box>
        <Box header="Educational Details">
          <TextComponent
            label="Lowest Educational profile"
            styleProps={{
              fontSize: "16px",
              textAlign: "left",
              fontWeight: 700,
              paddingTop: "10px",
            }}
          />
          <InputComponent
            style={{ height: "2em" }}
            type="text"
            label={
              <TextComponent
                label="10th percentage %"
                styleProps={{
                  fontSize: "16px",
                  textAlign: "left",
                  fontWeight: 700,
                  paddingTop: "10px",
                }}
                isMandatory
              />
            }
          />
          <InputComponent
            type="text"
            style={{ height: "2em" }}
            label={
              <TextComponent
                label="12th percentage %"
                styleProps={{
                  fontSize: "16px",
                  textAlign: "left",
                  fontWeight: 700,
                  paddingTop: "10px",
                }}
                isMandatory
              />
            }
          />
          <TextComponent
            label="Highest Educational profile"
            styleProps={{
              fontSize: "16px",
              textAlign: "left",
              fontWeight: 700,
              paddingTop: "10px",
            }}
          />
          <TextComponent
            label="Education Type"
            isMandatory
            styleProps={{
              fontSize: "16px",
              textAlign: "left",
              fontWeight: 700,
              paddingTop: "10px",
            }}
          />
          
          <Dropdown placeholder="-select-" options={[...data[2].map((a) => a.displayText)]} />
            
          
          
              <TextComponent
                label="Degree"
                styleProps={{
                  fontSize: "16px",
                  textAlign: "left",
                  fontWeight: 700,
                  paddingTop: "10px",
                }}
                isMandatory
              />
              
          
              <Dropdown placeholder="-select-" options={[...data[0].map((a) => a.displayText)]} />
          
          
          <InputComponent
            type="text"
            style={{ height: "2em" }}
            placeholder="College"
            label={
              <TextComponent
                label="College"
                styleProps={{
                  fontSize: "16px",
                  textAlign: "left",
                  fontWeight: 700,
                  paddingTop: "10px",
                }}
                isMandatory
              />
            }
          />
          <InputComponent
            type="text"
            style={{ height: "2em" }}
            placeholder="19EUEE062"
            label={
              <TextComponent
                label="Reg.No"
                styleProps={{
                  fontSize: "16px",
                  textAlign: "left",
                  fontWeight: 700,
                  paddingTop: "10px",
                }}
                isMandatory
              />
            }
          />
          
              <TextComponent
                label="Branch"
                styleProps={{
                  fontSize: "16px",
                  textAlign: "left",
                  fontWeight: 700,
                  paddingTop: "10px",
                }}
                isMandatory
              />
              <Dropdown options={[...data[1].map((a) => a.displayText)]}/>
            
          
              <TextComponent
                label="Backlogs"
                styleProps={{
                  fontSize: "16px",
                  textAlign: "left",
                  fontWeight: 700,
                  paddingTop: "10px",
                }}
                isMandatory
              /> <Dropdown options={["YES","NO"]}/>
    
        </Box>
        <Box header="ATTATCHMENTS">
          <Attatchments />
        </Box>
        <button
          className="submit"
          style={{
            backgroundColor: "#8D19FFB2",
            padding: "8px",
            margin: "10px",
            borderRadius: "10",
          }}
          onClick={postReq}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

//ReactDOM.render(<App />, document.getElementById("app"));
