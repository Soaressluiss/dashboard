import Balance from "./Components/Balance/Balance";
import FavTransfer from "./Components/FavTransfer/FavTransfer";

export default function Dashboard() {
  return <main className=" m-8">
    <Balance/>
    <FavTransfer/>
  </main>;
}
