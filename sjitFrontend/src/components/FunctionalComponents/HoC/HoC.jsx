import Button from "./Button";
import trackingMyButtonComp from "./trackingMyButtonComp";

const HoC = () => {
  const ButtonTrack = trackingMyButtonComp(Button);
  return (
    <div>
      <h1>Welcome to Higher Order Components(HoC)</h1>
      <h3>Normal button without HoC</h3>
      <Button value={"Login"}></Button>
      <br /><h3>Implement HoC</h3>
      <ButtonTrack
        value={"Login"}
        trackingInfo={{ CustID: "Hello", Password: "Password" }}
      ></ButtonTrack>
    </div>
  );
};
export default HoC;
