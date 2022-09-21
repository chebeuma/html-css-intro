import Container from "./Container";
import AddAddress from "./AddAdress";

function AddressCard() {
  return (
    <div className="text-start m-4 p-4 text-2xl">
      <a href="#">Address</a>

      <div>
        <Container />
        <AddAddress />
      </div>
    </div>
  );
}
export default AddressCard;
