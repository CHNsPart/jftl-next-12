import Head from 'next/head'
import Landing from './components/Landing';
import About from './components/About';
import ShortNotes from './components/ShortNotes';
import Footer from './components/Footer';
import CompanyBar from './components/CompanyBar';
import ValueChain from './components/ValueChain';
import ValueDetails from './components/ValueDetails';
import CrabFarming from './components/CrabFarming';
import CrabProcessing from './components/CrabProcessing';
import Vision from './components/Vision';
import Mission from './components/Mission';
import Location from './components/Location';
import Certification from './components/Certification';
import LabFacilities from './components/LabFacilities';
import SupportMachine from './components/SupportMachine';
import Products from './components/Products';
import LiveCrab from './components/LiveCrab';
import Csr from './components/Csr';
import Documents from './components/Documents';

const Home = () => {

  return (
    <div>
      <Head>
        <title>JFTL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <main className="h-screen w-full">
            <div className="h-screen min-w-fit">
              <Landing />
            </div>
              <About />

            <Vision/>

            <Mission/>

            <Certification/>

            <Location/>

            <ShortNotes />

            <div className="h-auto mt-10 w-full">
              <CompanyBar />
            </div>

            <ValueChain />

            <ValueDetails />

            <CrabFarming />

            <CrabProcessing />

            <LabFacilities/>
            
            <SupportMachine/>

            <Products/>

            <LiveCrab/>

            <Csr/>

            <Documents/>

            <Footer />

          </main>
    </div>
  )
}

export default Home
