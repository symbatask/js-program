import '../../assets/css/App.css';
import Head from "../components/Head";
import {Link} from "react-router-dom";

function Dashboard() {
    return (
        <>
            <Head title="Dashboard">
            </Head>
            <div className="p-12">
              Привет боец, вперед за новым <Link to="/education" className="text-red-600">Материалом</Link>
            </div>
        </>
    );
}

export default Dashboard;
