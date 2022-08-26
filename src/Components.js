import React from "react";

export const InputComponent = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection:
          props.type === "text" || props.type === "email" ? "column" : "row",
      }}
    >
      {props.type === "radio" && <input {...props}></input>}
      <TextComponent
        label={props.label}
        CustomTag={
          props.type === "text" || props.type === "email" ? "div" : "span"
        }
      />
      {(props.type === "text" || props.type === "email") && (
        <input {...props}></input>
      )}
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
    <TextComponent
      label={props.header}
      styleProps={{
        fontSize: "24px",
        textAlign: "left",
        fontWeight: 700,
        margin: "10px",
      }}
    />
    <div
      style={{
        border: "1px solid #E5E5E5",
        borderRadius: "10px",
        padding: "10px",
        fontFamily: "Hind",
        margin: "20px",
      }}
    >
      {props.children}
    </div>
  </>
);

export const DatePick = () => {
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
              paddingTop: "10px",
            }}
          />
        }
      </label>
      <input type="date" name="DOB" />
    </div>
  );
};

export const Dropdown = (props) => {
  return (
    <div>
      <select>
        {props.options?.map((m) => (
          <option value={m}>{m}</option>
        ))}
      </select>
    </div>
  );
};

export const Attatchments = () => {
  return (
    <>
      <div>
        <TextComponent
          styleProps={{
            fontSize: "18px",
            textAlign: "left",
            fontWeight: 700,
            margin: 10,
          }}
          label="Add Resume/CV"
          CustomTag="span"
        >
          <TextComponent
            styleProps={{
              fontSize: "18px",
              textAlign: "left",
              fontWeight: 400,
            }}
            CustomTag="span"
            label="(Accept format: doc/.docx/.pdf;Size: 1MB)"
          />
        </TextComponent>
      </div>
      <button>Choose File</button>
    </>
  );
};
