import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Storage  from './pages/storage/Storage';
import Calcul  from './pages/calcul/Calcul';
import Network  from './pages/network/Network';
import DataBase from './pages/dataBase/DataBase';
import DynamoDB from './pages/dataBase/DynamoDB';
import Navbar from './components/Navbar';
import Home from './pages';
import about from './pages/about';
import Contact from './pages/Contact';
import ConnectToAws from './pages/ConnectToAws';
import  EC2  from './pages/calcul/EC2';
import  EFS  from './pages/storage/EFS';
import  EBS  from './pages/storage/EBS';
import  UploadImageToS3WithReactS3  from './pages/storage/UploadImageToS3WithReactS3';
import  S3  from './pages/storage/S3';
import  VPC  from './pages/network/VPC';
import  Route53  from './pages/network/Route53';
import  lambda  from './pages/calcul/lambda';
import  RDS  from './pages/dataBase/RDS';
import  Services  from './pages/Services';
import FileUpload from './components/Upload-file/FileUpload';
import ec2reation from './pages/calcul/ec2reation';

function App() {
 
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>

        <Route path='/calcul' exact component={Calcul} />
        <Route path='/calcul/lambda'  exact component={lambda} />
        <Route path='/calcul/EC2'  exact  component={EC2} />
        <Route path='/Storage' exact  component={Storage} />
        <Route path='/storage/EFS' exact  component={EFS} />
        <Route path='/storage/EBS' exact  component={EBS} />
        <Route path='/storage/S3' exact  component={S3} />
        <Route path='/network'  exact component={Network} />
        <Route path='/network/Route53' exact  component={Route53} />
        <Route path='/network/VPC'  exact component={VPC} />
        <Route path='/database' exact  component={DataBase} />
        <Route path='/database/DynamoDB'  exact  component={DynamoDB} />
        <Route path='/database/RDS'  exact component={RDS} />
        <Route path='/' exact component={Home} />
        <Route path='/about' component={about} />
        <Route path='/connectToAws' component={ConnectToAws} />
        <Route path='/services'  exact component={Services} />
        <Route path='/contact-us'  exact component={Contact} />
        <Route path='/UploadImageToS3WithReactS3' exact component={UploadImageToS3WithReactS3} />
        <Route path='/FileUpload' exact component={FileUpload} />
        <Route path='/ec2reation' exact component={ec2reation} />
    </Switch>
    </Router>
    
    
  );
}


export default App;
