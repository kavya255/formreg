import React from "react";

export const InputComponent = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: props.type === "text" ? "column" : "row",
      }}
    >
      {props.type === "radio" && <input {...props}></input>}
      <TextComponent
        label={props.label}
        CustomTag={props.type === "text" ? "div" : "span"}
      />
      {props.type === "text" && <input {...props}></input>}
    </div>
  );
};
export const Button = (props) => {
  return (
    <div>
      <button
        style={{
          backgroundColor: "#8D19FFB2",
          marginTop: "40px",
          marginLeft: "1700px",
          padding: "10px",
          borderRadius: "5px",
        }}
        onClick={() =>
          props.clickEvent(props.updateStateMethod, props.stateVariable)
        }
      >
        {props.label}
      </button>
    </div>
  );
};

export const DatePick = (props) => {
  const { onChange, value } = props;
  return (
    <div>
      <label>
        {
          <TextComponent
            label="DOB-(DD/MM/YY)"
            isMandatory="true"
            styleProps={{
              fontSize: "16px",
              textAlign: "left",
              fontWeight: 700,
            }}
          />
        }
      </label>
      <input type="date" name="DOB" onChange={onChange} value={value} />
    </div>
  );
};

export const Dropdown = (props) => {
  const { heading,value } = props;
  // const a = ["select", "undergraduate", "diploma",'post'];
  return (
    <div>
      <label>
        <div> {heading}</div>{" "}
      </label>

      <select>
        {value.map((item) => {
          return <option value=""> {item}</option>;
        })}

        {/* <option value=""> undergraduate</option>
        <option value=""> diploma</option>
        <option value=""> postgraduate</option> */}
      </select>
    </div>
  );
};

export const Dropdown2 = () => {
  return (
    <div>
      <br></br>
      <TextComponent label="Backlogs" isMandatory={"true"} />

      <select>
        <option value=""> No</option>
        <option value=""> Yes</option>
      </select>
    </div>
  );
};

export const TextComponent = ({
  label,
  styleProps,
  isMandatory,
  children,
  CustomTag = "div",
}) => (
  <CustomTag style={styleProps}>
    {label}
    {isMandatory && <span>*</span>}
    {children}
  </CustomTag>
);

export const Box = (props) => (
  <>
    <TextComponent label={props.header} />
    <div
      style={{
        border: "1px solid",
        borderTopLeftRadius: "5px",
        borderBottomLeftRadius: "5px",
        borderTopRightRadius: "5px",
        borderTopLeftRadius: "5x",
        padding: "10px",
      }}
    >
      {props.children}
    </div>
  </>
);